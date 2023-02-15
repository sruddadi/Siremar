<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type,Access-Control-Allow-Headers,Authorization,X-Requested-With");


$data = json_decode(file_get_contents("php://input"));

$SchoolName = $data->SchoolName;
$Contact = $data->Contact;
$Email = $data->Email;
$Remarks = $data->Remarks;
$Contact = $data->Contact;
$Address = $data->Address;
$name = $data->name;
$con = mysqli_connect("localhost","root","");
mysqli_select_db($con,"SIREMAR");
if (!$con) {
    die("Connection failed: " . $conn->connect_error);
} else {
    // echo "Connected Successfully!";
    //$conn->close();
}


if ($name && $Email && $SchoolName) {
    
  

    

    // use wordwrap() if lines are longer than 70 characters
    $msg = "Requesting for an Appointement/Information for School Registration From the below user: ". "<br>" . "<br>" . "<br>";

    $msg .= "User Name: " . $name . "<br>";

    $msg .= "User Email: " . $Email . "<br>";

    $msg .= "User Comments: " . $Remarks . "<br>";
  
    $msg .= "School Name: " .$SchoolName . "<br>";

    $msg .= "Contact Number: " . $Contact;

    $msg .= "<br>" . "<br>" ."<br>". "<br>" . "Best Regards:" . "<br>" .$name;
   

    $to = "wdmprojectuta@gmail.com";
$subject = "Got a New message from: " .$name ."for School Registration. ";

$headers = "MIME-Version: 1.0\r\n";
	$headers.= "Content-type: text/html; charset=UTF-8\r\n";
	$headers.= "From: <" . $Email . ">";
    

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
