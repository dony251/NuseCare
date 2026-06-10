<?php
header("Content-Type: application/json; charset=UTF-8");
require 'db.php';

// استقبال البيانات الجاية من الجافا سكريبت (JSON)
$data = json_decode(file_get_contents("php://input"));

if(isset($data->email) && isset($data->new_password)) {
    $email = $conn->real_escape_string($data->email);
    $new_password = $data->new_password;

    // 1. التأكد إن الإيميل ده موجود أصلاً في قاعدة البيانات
    $checkQuery = "SELECT id FROM users WHERE email = '$email'";
    $result = $conn->query($checkQuery);

    if($result->num_rows > 0) {
        // 2. تشفير الباسوورد الجديد للأمان
        $hashed_pw = password_hash($new_password, PASSWORD_DEFAULT);
        
        // 3. تحديث الباسوورد في الداتابيز
        $updateQuery = "UPDATE users SET password = '$hashed_pw' WHERE email = '$email'";
        if($conn->query($updateQuery) === TRUE) {
            echo json_encode(["status" => "success", "message" => "تم تغيير كلمة المرور بنجاح. يمكنك تسجيل الدخول الآن."]);
        } else {
            echo json_encode(["status" => "error", "message" => "حدث خطأ في قاعدة البيانات، يرجى المحاولة لاحقاً."]);
        }
    } else {
        echo json_encode(["status" => "error", "message" => "هذا البريد الإلكتروني غير مسجل لدينا."]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "بيانات غير مكتملة."]);
}
$conn->close();
?>