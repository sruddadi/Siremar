<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type,Access-Control-Allow-Headers,Authorization,X-Requested-With");


$data = json_decode(file_get_contents("php://input"));

$Business_Name = $data->Business_Name;
$Contact_Number = $data->Contact_Number;
$Email = $data->Email;
$Address = $data->Address;
$Offers = $data->Offers;
$Offer_code = $data->Offer_code;
$Place = $data->Place;

$con = mysqli_connect("localhost", "root", "");
mysqli_select_db($con, "SIREMAR");

if (!$con) {
    die("Connection failed: " . $conn->connect_error);
} else {
    // echo "Connected Successfully!";
    //$conn->close();
}


if ($Business_Name && $Contact_Number && $Email) {
    
  

        $sql = "insert into Business (
        Business_Name,
        Contact_Number,
        Email,
        Address,
        Offers,
        Offer_code,
        Place
        )
        values(
        '$Business_Name',
        '$Contact_Number',
        '$Email',
        '$Address',
        '$Offers',
        '$Offer_code',
        '$Place'
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
