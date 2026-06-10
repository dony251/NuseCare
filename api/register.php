<?php
header("Content-Type: application/json; charset=UTF-8");
require 'db.php';

$data = json_decode(file_get_contents("php://input"));

if(isset($data->email) && isset($data->password)) {
    $type = $conn->real_escape_string($data->accountType);
    $first = $conn->real_escape_string($data->firstName);
    $last = $conn->real_escape_string($data->lastName);
    $email = $conn->real_escape_string($data->email);
    $phone = $conn->real_escape_string($data->phone);
    
    // استقبال الخانات الجديدة الخاصة بالتمريض (لو موجودة)
    $specialty = isset($data->specialty) ? $conn->real_escape_string($data->specialty) : 'General Care';
    $hourlyRate = isset($data->hourlyRate) ? (int)$data->hourlyRate : 300;
    $bio = isset($data->bio) ? $conn->real_escape_string($data->bio) : '';
    
    // تشفير الباسوورد
    $hashed_password = password_hash($data->password, PASSWORD_DEFAULT);

    // التأكد إن الإيميل مش متكرر
    $check = $conn->query("SELECT id FROM users WHERE email = '$email'");
    if($check->num_rows > 0) {
        echo json_encode(["status" => "error", "message" => "Email is already registered!"]);
        exit;
    }

    // إدخال كل البيانات (بما فيها التخصص والسعر)
    $sql = "INSERT INTO users (account_type, first_name, last_name, email, phone, password, specialty, hourly_rate, bio) 
            VALUES ('$type', '$first', '$last', '$email', '$phone', '$hashed_password', '$specialty', '$hourlyRate', '$bio')";

    if($conn->query($sql) === TRUE) {
        echo json_encode(["status" => "success"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Database error!"]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Invalid Input"]);
}
?>