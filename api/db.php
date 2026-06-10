<?php
// تأكد إن اسم قاعدة البيانات nursecare_db مطابق للي عملته في phpMyAdmin
$host = "localhost";
$user = "root";
$pass = "";
$dbname = "nursecare_db";

$conn = new mysqli($host, $user, $pass, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$conn->set_charset("utf8mb4");
?>