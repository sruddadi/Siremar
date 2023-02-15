<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type,Access-Control-Allow-Headers,Authorization,X-Requested-With");


$data = json_decode(file_get_contents("php://input"));

$name = $data->uName;
$password = $data->Password;
$email = $data->Email;

$con = mysqli_connect("localhost","root","");
mysqli_select_db($con,"SIREMAR");

if (!$con) {
    die("Connection failed: " . $conn->connect_error);
} else {
    echo "Connected Successfully!";
    //$conn->close();
}


 if ($email && $password) {

    $msg = "Forgot Password Request generated from SIREMAR: ". "<br>" . "<br>" . "<br>";

    $msg .= "Hello  " . $name . "<br>";

    $msg .= "Your Password is :  " . $password . "<br>";

    



    $to = $email;
$subject = "Got a New message from the: " ;

$headers = "MIME-Version: 1.0\r\n";
	$headers.= "Content-type: text/html; charset=UTF-8\r\n";
	$headers.= "From: <wdmprojectuta@gmail.com>";
    

// $to = "wdmprojectuta@gmail.com";
// $subject = "Got a New message from: " .$name ;

// $headers = "MIME-Version: 1.0\r\n";
// 	$headers.= "Content-type: text/html; charset=UTF-8\r\n";
// 	$headers.= "From: <" . $email . ">";
    //$From = "Got a new message from" + $name;
    
    // send email
   // mail("wdmprojectuta@gmail.com","Got a new message from" ,$msg);
   mail($to,$subject,$msg,$headers);

   

 }
   


?>