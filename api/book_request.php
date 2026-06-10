<?php
header("Content-Type: application/json; charset=UTF-8");
require 'db.php';

// استلام البيانات من الجافا سكريبت
$data = json_decode(file_get_contents("php://input"));

// التأكد إن في بيانات مبعوتة وأهمها رقم المريض (patient_id)
if(isset($data->patient_id) && isset($data->pref_date)) {
    
    // تنظيف البيانات للحماية من الاختراق
    $patient_id = $conn->real_escape_string($data->patient_id);
    $nurse_id = isset($data->nurse_id) ? $conn->real_escape_string($data->nurse_id) : 1; // رقم الممرض (ممكن نخليه 1 مؤقتاً لو مش محدد)
    $patient_name = $conn->real_escape_string($data->patient_name);
    $phone = $conn->real_escape_string($data->phone);
    $address = $conn->real_escape_string($data->address);
    $pref_date = $conn->real_escape_string($data->pref_date);
    $pref_time = $conn->real_escape_string($data->pref_time);
    $medical_need = $conn->real_escape_string($data->medical_need);
    
    // إدخال الحجز في جدول الطلبات (requests)
    $sql = "INSERT INTO requests (patient_id, nurse_id, patient_name, phone, address, pref_date, pref_time, duration, medical_need, status) 
            VALUES ('$patient_id', '$nurse_id', '$patient_name', '$phone', '$address', '$pref_date', '$pref_time', 1, '$medical_need', 'pending')";

    if($conn->query($sql) === TRUE) {
        echo json_encode(["status" => "success", "message" => "Booking confirmed!"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Database error: " . $conn->error]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Missing required fields!"]);
}
$conn->close();
?>