<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type,Access-Control-Allow-Headers,Authorization,X-Requested-With");


$data = json_decode(file_get_contents("php://input"));

$id = $data->id;
$Business_Name = $data->Business_Name;
$Email = $data->Email;

$Contact_Number = $data->Contact_Number;
$Address = $data->Address;
$Offers = $data->Offers;
$Offer_code = $data->Offer_code;
$Place = $data->Place;

$con = mysqli_connect("localhost", "root", "");
mysqli_select_db($con, "SIREMAR");

if (!$con) {
    die("Connection failed: " . $conn->connect_error);
} else {
    echo "Connected Successfully!";
    //$conn->close();
}



printf($id);

        $sql = "UPDATE Business 

        set 
        Business_Name ='$Business_Name',
        Email = '$Email',
        Contact_Number = '$Contact_Number',
        Address = '$Address',
        Offers='$Offers',
        Offer_code = '$Offer_code',
        Place = '$Place'
        WHERE
        id = '$id'
        ";


       
    



    // '$MoveOutDate',
    $result = mysqli_query($con, $sql);
print_r($result);

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
?>
