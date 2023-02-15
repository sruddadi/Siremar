<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type,Access-Control-Allow-Headers,Authorization,X-Requested-With");


$data = json_decode(file_get_contents("php://input"));

print_r($data);
$Email = $data->Email;
$Password = $data->Password;
$Role = $data->Role;

$con = mysqli_connect("localhost","root","");
mysqli_select_db($con,"SIREMAR");

if (!$con) {
    die("Connection failed: " . $conn->connect_error);
}

else{
  // echo "Connected Successfully!";
   //$conn->close();
}


if($Email && $Password && $Role){
$result = mysqli_query($con," select * from Register where Email = '".$Email."' AND Password ='".$Password."' AND Role ='".$Role."' ");
$nums = mysqli_num_rows($result);
print_r($nums);
echo $nums; 
if($nums>=1){
   http_response_code(200);
} 
else{
    http_response_code(202);
    
    
}
}

?>