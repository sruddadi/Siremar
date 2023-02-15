<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type,Access-Control-Allow-Headers,Authorization,X-Requested-With");


$data = json_decode(file_get_contents("php://input"));

$id = $data->id;
$EventName = $data->EventName;
$Email = $data->Email;

$Contact = $data->Contact;
$Host = $data->Host;
$EventDay = $data->EventDay;
$Address = $data->Address;
$Remarks = $data->Remarks;

$con = mysqli_connect("localhost", "root", "");
mysqli_select_db($con, "SIREMAR");

if (!$con) {
    die("Connection failed: " . $conn->connect_error);
} else {
    echo "Connected Successfully!";
    //$conn->close();
}



printf($id);

        $sql = "UPDATE Events 

        set 
        EventName ='$EventName',
        Email = '$Email',
        Contact = '$Contact',
        Address = '$Address',
        Host='$Host',
        EventDay = '$EventDay',
        Remarks = '$Remarks'
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
