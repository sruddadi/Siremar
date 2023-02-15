<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type,Access-Control-Allow-Headers,Authorization,X-Requested-With");


$data = json_decode(file_get_contents("php://input"));
// print_r($data);


$con = mysqli_connect("localhost","root","");
mysqli_select_db($con,"SIREMAR");

if (!$con) {
    die("Connection failed: " . $conn->connect_error);
}

else{
//    echo "Connected Successfully!";
   //$conn->close();
}



$sql = "select Business_Name as Store_Name,Offers,Offer_code from Business
UNION
select Flight_Name as Store_Name,Offers,Offer_code from Flights
";




$result = $con->query($sql);
echo json_encode($result->fetch_all(MYSQLI_ASSOC));







?>