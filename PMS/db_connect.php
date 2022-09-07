<?php
/*
 $servername='127.0.0.1';
    $username='root';
    $password='';
    $dbname = "angular7phpcrud";
    $conn=mysqli_connect($servername,$username,$password,$dbname,3306);
      if(!$conn){
          die('Could not Connect MySql Server:' .mysqli_error());
        }
*/

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST, GET, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Headers: Origin, Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorzation, X-Requested-Width');

class ArthubConnection
{
    private $user = 'root';
    private $password = '';
    private $connectionString = 'mysql:host=localhost;dbname=angular7phpcrud';

    function dbConnection() {
        $con = new PDO($this->connectionString, $this->user , $this->password);
        return $con;
    }

}

// if ((new ArthubConnection)->dbConnection()) {
//     echo "Connected to Arthub";
// }else{
//     echo "Failed To Connect To Arthub";
// }


?>