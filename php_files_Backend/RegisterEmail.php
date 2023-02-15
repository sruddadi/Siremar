<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type,Access-Control-Allow-Headers,Authorization,X-Requested-With");


$data = json_decode(file_get_contents("php://input"));

$name = $data->uName;
$email = $data->Email;

$con = mysqli_connect("localhost", "sxm9040_admin", "WDMProject");
mysqli_select_db($con, "sxm9040_SIREMAR");

if (!$con) {
    die("Connection failed: " . $conn->connect_error);
} else {
    // echo "Connected Successfully!";
    //$conn->close();
}


if ($name && $email) {
    
  

    

    $msg = "New Message from below user : ". "<br>" . "<br>" . "<br>";

    $msg .= "User Name: " . $name . "<br>";

    $msg .= "User Email: " . $email . "<br>";

    

    $msg .= "<br>" . "<br>" ."<br>". "<br>" . "Best Regards:" . "<br>" .$name;
   

    $to = "wdmprojectuta@gmail.com";
$subject = "Got a New message from: " .$name ;

$headers = "MIME-Version: 1.0\r\n";
	$headers.= "Content-type: text/html; charset=UTF-8\r\n";
	$headers.= "From: <" . $email . ">";
    

    //$From = "Got a new message from" + $name;
    
    // send email
   // mail("wdmprojectuta@gmail.com","Got a new message from" ,$msg);
   mail($to,$subject,$msg,$headers);



    // '$MoveOutDate',
    $result = mysqli_query($con, $msg);


    if ($result) {
        http_response_code(200);
        // $response['data'] = array(
        //     'Status' => 'valid'
        // );
        // echo json_encode($response);
    } else {
        http_response_code(202);
        // $response['data'] = array(
        //     'Status' => 'invalid'
        // );
        // echo json_encode($response);
    }
}
