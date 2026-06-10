<?php
header("Content-Type: application/json; charset=UTF-8");
require 'db.php';

$data = json_decode(file_get_contents("php://input"));

if(isset($data->email) && isset($data->password)) {
    $email = $conn->real_escape_string($data->email);
    $result = $conn->query("SELECT * FROM users WHERE email='$email'");

    if($result->num_rows > 0) {
        $user = $result->fetch_assoc();
        // مطابقة الباسوورد المشفر
        if(password_verify($data->password, $user['password'])) {
            unset($user['password']); // أمان: بنشيل الباسوورد قبل ما نبعت الداتا للمتصفح
            echo json_encode(["status" => "success", "user" => $user]);
        } else {
            echo json_encode(["status" => "error", "message" => "Invalid Password!"]);
        }
    } else {
        echo json_encode(["status" => "error", "message" => "Email not found!"]);
    }
}
?>