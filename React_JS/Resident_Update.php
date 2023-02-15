<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type,Access-Control-Allow-Headers,Authorization,X-Requested-With");


$data = json_decode(file_get_contents("php://input"));

$id = $data->id;
$uName = $data->uName;
$Email = $data->Email;
$Password = $data->Password;
$Role = $data->Role;
$Contact = $data->Contact;
$MoveInDate = $data->MoveInDate;
$MoveOutDate = $data->MoveOutDate;
$DateOfBirth = $data->DateOfBirth;
$PlaceOfBirth = $data->PlaceOfBirth;

$con = mysqli_connect("localhost", "root", "");
mysqli_select_db($con, "SIREMAR");

if (!$con) {
    die("Connection failed: " . $conn->connect_error);
} else {
    // echo "Connected Successfully!";
    //$conn->close();
}


if ($uName && $Email && $Password) {
    if ($MoveOutDate == "" && $MoveInDate != "" ) {

        $sql = "UPDATE Register 
        set 
        uName ='$uName',
        Password ='$Password' ,
        Email = '$Email',
        Role = '$Role',
        Contact = '$Contact',
        MoveInDate = '$MoveInDate',
        
        DateOfBirth = '$DateOfBirth',
        PlaceOfBirth = '$PlaceOfBirth'

        WHERE
        id = '$id'

    
   
        ";

        print_r("MOD");
        // echo"MOD";
    } elseif ($MoveInDate == "" && $MoveOutDate == "") {
        $sql = "UPDATE Register 
        set 
        uName ='$uName',
        Password ='$Password' ,
        Email = '$Email',
        Role = '$Role',
        Contact = '$Contact',
        DateOfBirth = '$DateOfBirth',
        PlaceOfBirth = '$PlaceOfBirth'

        WHERE
        id = '$id' ";
            print_r("MOD MID");
    } elseif($MoveInDate == "" && $MoveOutDate != ""){
        $sql = "UPDATE Register 
        set 
        uName ='$uName',
        Password ='$Password' ,
        Email = '$Email',
        Role = '$Role',
        Contact = '$Contact',
            MoveOutDate = '$MoveOutDate',
            DateOfBirth = '$DateOfBirth',
            PlaceOfBirth = '$PlaceOfBirth'
            WHERE
            id = '$id' ";
            print_r("MOD !MID");


    }else {

        $sql = "UPDATE Register 
        set 
        uName ='$uName',
        Password ='$Password' ,
        Email = '$Email',
        Role = '$Role',
        Contact = '$Contact',
        MoveInDate = '$MoveInDate',
        MoveOutDate='$MoveOutDate',
        DateOfBirth = '$DateOfBirth',
        PlaceOfBirth = '$PlaceOfBirth'
        WHERE
        id = '$id'
        ";
        print_r("all data");
    }



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
