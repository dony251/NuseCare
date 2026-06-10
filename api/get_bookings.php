<?php
header("Content-Type: application/json; charset=UTF-8");
require 'db.php';

// بنستقبل الـ ID بتاع اليوزر عشان نجيب حجوزاته هو بس
if(isset($_GET['user_id'])) {
    $user_id = $conn->real_escape_string($_GET['user_id']);
    
    $sql = "SELECT * FROM requests WHERE patient_id = '$user_id' ORDER BY created_at DESC";
    $result = $conn->query($sql);
    
    $bookings = [];
    if($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            $bookings[] = $row;
        }
    }
    echo json_encode(["status" => "success", "data" => $bookings]);
} else {
    echo json_encode(["status" => "error", "message" => "User ID is required"]);
}
$conn->close();
?>