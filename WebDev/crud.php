<?php
require "connect.php";
$pdo = Database::DatabaseConnection();



$transaction = "DELETE";

switch ($transaction) {
    case "ADD":
        AddData();
        break;
    case "EDIT":
        EditData();
        break;
    case "DELETE":
        DeleteRecord();
        break;
}



function AddData()
{

    $studNumber = (isset($_POST['studNumber'])) ? $_POST['studNumber'] : "1022";
    $name = (isset($_POST['name'])) ? $_POST['name'] : "Catherine";
    $age = (isset($_POST['age'])) ? $_POST['age'] : "20";
    $lastName = (isset($_POST['lastName'])) ? $_POST['lastName'] : "Mortega";


    $sql = "insert into student (student_no,	givename,age,surname)
           values('$studNumber', '$name', '$age', '$lastName')";
    Database::ManageRecord($GLOBALS['pdo'], $sql);
    echo "The data has been save";
}




function EditData()
{

    $studNumber = (isset($_POST['studNumber'])) ? $_POST['studNumber'] : "1020";
    $name = (isset($_POST['name'])) ? $_POST['name'] : "Catherine";
    $age = (isset($_POST['age'])) ? $_POST['age'] : "21";
    $lastName = (isset($_POST['lastName'])) ? $_POST['lastName'] : "Parde";


    $sql = "update student 
           set givename = '$name'
           , age = $age
           , surname = '$lastName'
           where student_no= '$studNumber' ";
    Database::ManageRecord($GLOBALS['pdo'], $sql);
    echo "The data has been edited";
}


function DeleteRecord()
{

    $studNumber = (isset($_POST['studNumber'])) ? $_POST['transaction'] : "1020";



    $sql = "delete from  student 
           where student_no= '$studNumber' ";
    Database::ManageRecord($GLOBALS['pdo'], $sql);
}
