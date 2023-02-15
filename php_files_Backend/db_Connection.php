<?php



header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type,Access-Control-Allow-Headers,Authorization,X-Requested-With");



$conn = mysqli_connect("localhost","root","");
mysqli_select_db($con,"SIREMAR");

// Create connection using musqli_connect function
// Connection Check
if (!$conn) {
    die("Connection failed: " . $conn->connect_error);
}

else{
   echo "Connected Successfully!";
   $conn->close();
}

?>