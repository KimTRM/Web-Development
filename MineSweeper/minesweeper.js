// minesweeper.js

const gridSize = 10;  // 10x10 grid
const numMines = 10;

let grid = [];
let minePositions = [];

function createGrid() {
    const gameDiv = document.getElementById('game');
    gameDiv.style.width = `${gridSize * 32}px`; // Adjust width based on grid size

    // Initialize grid
    for (let i = 0; i < gridSize; i++) {
        grid[i] = [];
        for (let j = 0; j < gridSize; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.dataset.row = i;
            cell.dataset.col = j;
            cell.addEventListener('click', revealCell);
            gameDiv.appendChild(cell);
            grid[i][j] = { element: cell, mine: false, revealed: false, adjacentMines: 0 };
        }
    }
}

function placeMines() {
    while (minePositions.length < numMines) {
        const row = Math.floor(Math.random() * gridSize);
        const col = Math.floor(Math.random() * gridSize);
        if (!grid[row][col].mine) {
            grid[row][col].mine = true;
            minePositions.push({ row, col });
        }
    }
}

function calculateAdjacentMines() {
    const directions = [
        { dr: -1, dc: -1 }, { dr: -1, dc: 0 }, { dr: -1, dc: 1 },
        { dr: 0, dc: -1 },                    { dr: 0, dc: 1 },
        { dr: 1, dc: -1 }, { dr: 1, dc: 0 }, { dr: 1, dc: 1 },
    ];

    for (const { row, col } of minePositions) {
        for (const { dr, dc } of directions) {
            const newRow = row + dr;
            const newCol = col + dc;
            if (newRow >= 0 && newRow < gridSize && newCol >= 0 && newCol < gridSize) {
                grid[newRow][newCol].adjacentMines += 1;
            }
        }
    }
}

function revealCell(event) {
    const row = parseInt(event.target.dataset.row);
    const col = parseInt(event.target.dataset.col);
    const cell = grid[row][col];

    if (cell.revealed) return;
    cell.revealed = true;
    cell.element.classList.add('revealed');

    if (cell.mine) {
        cell.element.classList.add('mine');
        alert('Game Over! You hit a mine!');
        revealAllMines();
    } else {
        cell.element.textContent = cell.adjacentMines > 0 ? cell.adjacentMines : '';
        if (cell.adjacentMines === 0) {
            revealAdjacentCells(row, col);
        }
    }
}

function revealAdjacentCells(row, col) {
    const directions = [
        { dr: -1, dc: -1 }, { dr: -1, dc: 0 }, { dr: -1, dc: 1 },
        { dr: 0, dc: -1 },                    { dr: 0, dc: 1 },
        { dr: 1, dc: -1 }, { dr: 1, dc: 0 }, { dr: 1, dc: 1 },
    ];

    for (const { dr, dc } of directions) {
        const newRow = row + dr;
        const newCol = col + dc;
        if (newRow >= 0 && newRow < gridSize && newCol >= 0 && newCol < gridSize) {
            revealCell({ target: grid[newRow][newCol].element });
        }
    }
}

function revealAllMines() {
    for (const { row, col } of minePositions) {
        grid[row][col].element.classList.add('mine');
        grid[row][col].element.textContent = 'X';
    }
}

// Initialize the game
createGrid();
placeMines();
calculateAdjacentMines();
