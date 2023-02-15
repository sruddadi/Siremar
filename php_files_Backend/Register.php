<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type,Access-Control-Allow-Headers,Authorization,X-Requested-With");


$data = json_decode(file_get_contents("php://input"));

$uName = $data->uName;
$Email = $data->Email;
$Password = $data->Password;
$Role = $data->Role;
$Contact = $data->Contact;
$MoveInDate = $data->MoveInDate;
$MoveOutDate = $data->MoveOutDate;
$DateOfBirth = $data->DateOfBirth;
$PlaceOfBirth = $data->PlaceOfBirth;


$con = mysqli_connect("localhost","root","");
mysqli_select_db($con,"SIREMAR");

if (!$con) {
    die("Connection failed: " . $conn->connect_error);
} else {
    // echo "Connected Successfully!";
    //$conn->close();
}

$sql = "select uName as username from Register where Email = '$Email'";


$result = $con->query($sql);
echo json_encode($result->fetch_all(MYSQLI_ASSOC));
$nums = mysqli_num_rows($result);
print_r($nums);
echo $nums; 

if($nums<1){
    if ($uName && $Email && $Password) {


        if ($MoveOutDate == "" && $MoveInDate != "" ) {
    
            $sql = "insert into Register (
            uName,
            Password,
            Email,
            Role,
            Contact,
            MoveInDate,
            
            DateOfBirth,
            PlaceOfBirth
        
            )
             values(
            '$uName',
            '$Password',
            '$Email',
            '$Role',
            '$Contact',
            '$MoveInDate',
            
            '$DateOfBirth',
            '$PlaceOfBirth'
            )";
    
            print_r("MOD");
            // echo"MOD";
        } elseif ($MoveInDate == "" && $MoveOutDate == "") {
            $sql = "insert into Register (
                uName,
                Password,
                Email,
                Role,
                Contact,
                DateOfBirth,
                PlaceOfBirth
            
            )
            values(
                '$uName',
                '$Password',
                '$Email',
                '$Role',
                '$Contact',
                '$DateOfBirth',
                '$PlaceOfBirth'
                )";
                print_r("MOD MID");
        } elseif($MoveInDate == "" && $MoveOutDate != ""){
            $sql = "insert into Register (
                uName,
                Password,
                Email,
                Role,
                Contact,
                MoveOutDate,
                DateOfBirth,
                PlaceOfBirth
            
            )
            values(
                '$uName',
                '$Password',
                '$Email',
                '$Role',
                '$Contact',
                '$MoveOutDate',
                '$DateOfBirth',
                '$PlaceOfBirth'
                )";
                print_r("MOD !MID");
    
    
        }else {
    
            $sql = "insert into Register (
            uName,
            Password,
            Email,
            Role,
            Contact,
            MoveInDate,
            MoveOutDate,
            DateOfBirth,
            PlaceOfBirth
    
            )
            values(
            '$uName',
            '$Password',
            '$Email',
            '$Role',
            '$Contact',
            '$MoveInDate',
            '$MoveOutDate',
            '$DateOfBirth',
            '$PlaceOfBirth'
            )";
            print_r("all data");
        }
    
    
    
        // '$MoveOutDate',
        $result = mysqli_query($con, $sql);
    
    
        if ($result) {
            
            http_response_code(200);
        } else {
            http_response_code(202);
            // $response['data'] = array(
            //     'Status' => 'invalid'
            // );
            // echo json_encode($response);
        }
    }
}
else{
    echo "True";
    http_response_code(202);
    $response['data'] = array(
         'Status' => 'invalid'
     );
     echo json_encode($response);
}



