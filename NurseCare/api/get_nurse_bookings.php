<?php
header("Content-Type: application/json; charset=UTF-8");
require 'db.php';

// بنستقبل الـ ID بتاع الممرض
if(isset($_GET['nurse_id'])) {
    $nurse_id = $conn->real_escape_string($_GET['nurse_id']);
    
    // هنجيب كل الطلبات اللي مبعوتة للممرض ده
    $sql = "SELECT * FROM requests WHERE nurse_id = '$nurse_id' ORDER BY created_at DESC";
    $result = $conn->query($sql);
    
    $bookings = [];
    if($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            $bookings[] = $row;
        }
    }
    echo json_encode(["status" => "success", "data" => $bookings]);
} else {
    echo json_encode(["status" => "error", "message" => "Nurse ID is required"]);
}
$conn->close();
?>