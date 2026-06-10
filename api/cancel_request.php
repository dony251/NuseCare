<?php
header("Content-Type: application/json; charset=UTF-8");
require 'db.php';

$data = json_decode(file_get_contents("php://input"));

if(isset($data->booking_id)) {
    $booking_id = $conn->real_escape_string($data->booking_id);
    
    // أمر حذف الحجز من جدول الطلبات
    $sql = "DELETE FROM requests WHERE id = '$booking_id'";

    if($conn->query($sql) === TRUE) {
        echo json_encode(["status" => "success", "message" => "تم الإلغاء"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Database error!"]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Missing data!"]);
}
$conn->close();
?>