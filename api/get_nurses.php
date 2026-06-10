<?php
header("Content-Type: application/json; charset=UTF-8");
require 'db.php';

// ضفنا 'profile_image' في جملة الـ SELECT عشان نجيبها من الداتابيز
$sql = "SELECT id, first_name, last_name, email, phone, specialty, hourly_rate, bio, status, profile_image, album_images FROM users WHERE account_type = 'nurse'";
$result = $conn->query($sql);

$nurses = [];
if($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $fullName = $row['first_name'] . ' ' . $row['last_name'];
        
        $nurses[] = [
            "id" => $row['id'],
            "email" => $row['email'],
            "phone" => $row['phone'],
            "album_images" => isset($row['album_images']) ? $row['album_images'] : '',
            "name" => $fullName,
            "spec" => $row['specialty'] ? $row['specialty'] : 'General Care',
            "rating" => 4.8, // تقييم مبدئي لأي ممرض جديد
            "price" => $row['hourly_rate'] ? $row['hourly_rate'] : 300,
            // هنبعت مسار الصورة الحقيقي للفرونت إند (لو مفيش هيبعت فاضي والفرونت هيتصرف)
            "profile_image" => isset($row['profile_image']) ? $row['profile_image'] : '',
            "status" => $row['status'] ? $row['status'] : 'Available',
            "desc" => $row['bio'] ? $row['bio'] : "Professional registered nurse dedicated to providing top-quality healthcare and support."
        ];
    }
}

echo json_encode(["status" => "success", "data" => $nurses]);
$conn->close();
?>