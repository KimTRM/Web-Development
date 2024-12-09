<?php
class Database
{
    static $dbName = 'camhi2024'; //change the name of your database
    static $dbHost = 'localhost';
    static $dbUsername = 'root';
    static $dbPassword = '';

private static $cont = null;

    public static function DatabaseConnection()
    {
        if (null == self::$cont) {
            try {

                self::$cont = new PDO("mysql:host=" . self::$dbHost . ";" . "dbname=" . self::$dbName, self::$dbUsername, self::$dbPassword);
            } catch (PDOException $e) {
                die($e->getMessage());
            }

            return self::$cont;

            function disconnect()
            {
                // self::$cont = null;
                //  echo "Disconnected";
            }
        }
    }

    public static  function GetOneData($pdo, $sql,  $value=0)
    {
        if ($value!=0)
        self::WriteLog($sql);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $q = $pdo->prepare($sql);
        $q->execute();
        $result = $q->fetch(PDO::FETCH_ASSOC);
        return $result;
    }






    public static function GetAllData($pdo, $sql, $value=0)
    {
        try {
        if ($value!=0)
        self::WriteLog($sql);

        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $q = $pdo->prepare($sql);
        $q->execute();
        $result = $q->fetchAll();
        return ($result);
        }
        catch(Exception $e){
            Database::WriteLog("Error in $value\n");
            Database::WriteLog('Message: ' .$e->getMessage());
        }
    }

    public static function ManageRecord($pdo, $sql, $value=0)
    {
        if ($value!=0)
        self::WriteLog($sql);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $q = $pdo->prepare($sql);
        $q->execute();
    }


    public static function WriteLog($log)
    {
        $path  = "log2.txt";
        $file = fopen($path, "a");
        fwrite($file, date("g:i a   "));
        fwrite($file, $log . "\n");
    }

    public static function WritePost($post)
    {
        foreach ($post as $key => $value) {
            self::WriteLog($key . '=' . $value);
        }
    }
}
