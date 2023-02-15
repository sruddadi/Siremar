<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type,Access-Control-Allow-Headers,Authorization,X-Requested-With");


$data = json_decode(file_get_contents("php://input"));

$EventName = $data->EventName;
$Contact = $data->Contact;
$Email = $data->Email;
$Address = $data->Address;
$Host = $data->Host;
$EventDay = $data->EventDay;
$Remarks = $data->Remarks;

$con = mysqli_connect("localhost", "root", "");
mysqli_select_db($con, "SIREMAR");

if (!$con) {
    die("Connection failed: " . $conn->connect_error);
} else {
    // echo "Connected Successfully!";
    //$conn->close();
}


if ($EventName && $Contact && $Email) {
    
  

        $sql = "insert into Events (
        EventName,
        Contact,
        Email,
        Address,
        Host,
        EventDay,
        Remarks
        )
        values(
        '$EventName',
        '$Contact',
        '$Email',
        '$Address',
        '$Host',
        '$EventDay',
        '$Remarks'
        )";
        print_r("all data");
    



    // '$MoveOutDate',
    $result = mysqli_query($con, $sql);


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
