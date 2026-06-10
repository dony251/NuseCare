<?php
header("Content-Type: text/html; charset=UTF-8");
require 'db.php';

// باسوورد موحد لكل الممرضين عشان تعرف تختبر الموقع (12345678)
$hashed_password = password_hash('12345678', PASSWORD_DEFAULT);

$nurses = [
    ['first'=>'Nourhan', 'last'=>'Tarek', 'email'=>'nourhan@nurse.com', 'phone'=>'01000000001', 'spec'=>'Elderly Care'],
    ['first'=>'Ahmed', 'last'=>'Youssef', 'email'=>'ahmed@nurse.com', 'phone'=>'01000000002', 'spec'=>'Post-Op Care'],
    ['first'=>'Aya', 'last'=>'Saber', 'email'=>'aya@nurse.com', 'phone'=>'01000000003', 'spec'=>'Pediatric Care'],
    ['first'=>'Mahmoud', 'last'=>'Salem', 'email'=>'mahmoud@nurse.com', 'phone'=>'01000000004', 'spec'=>'Chronic Disease'],
    ['first'=>'Fatima', 'last'=>'El-Sayed', 'email'=>'fatima@nurse.com', 'phone'=>'01000000005', 'spec'=>'Palliative Care'],
    ['first'=>'Omar', 'last'=>'Mohsen', 'email'=>'omar@nurse.com', 'phone'=>'01000000006', 'spec'=>'Rehabilitation']
];

foreach($nurses as $n) {
    // التأكد إن الممرض مش متسجل قبل كده
    $check = $conn->query("SELECT id FROM users WHERE email='".$n['email']."'");
    if($check->num_rows == 0) {
        $sql = "INSERT INTO users (account_type, first_name, last_name, email, phone, password) 
                VALUES ('nurse', '{$n['first']}', '{$n['last']}', '{$n['email']}', '{$n['phone']}', '$hashed_password')";
        $conn->query($sql);
        echo "<p>✅ تمت إضافة: {$n['first']} {$n['last']} (ID: {$conn->insert_id})</p>";
    } else {
        echo "<p>⚠️ الممرض {$n['first']} مسجل مسبقاً.</p>";
    }
}
echo "<h3>🎉 اكتملت العملية! يمكنك الآن تسجيل الدخول بأي إيميل (مثل nourhan@nurse.com) والباسوورد: 12345678</h3>";
$conn->close();
?>