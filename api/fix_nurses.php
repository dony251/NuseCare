<?php
header("Content-Type: text/html; charset=UTF-8");
require 'db.php';

// تحديث بيانات الممرضين الأصلية عشان تتطابق مع التخصصات والأسعار الصح
$queries = [
    "UPDATE users SET specialty='Elderly Care', hourly_rate=350, bio='Dedicated nurse with extensive experience in elderly and post-operative care. Known for compassionate service.' WHERE email='nourhan@nurse.com'",
    "UPDATE users SET specialty='Post-Op Care', hourly_rate=300, bio='Specialized in post-surgical recovery and chronic disease management. Caring and highly reliable.' WHERE email='ahmed@nurse.com'",
    "UPDATE users SET specialty='Pediatric Care', hourly_rate=320, bio='Passionate about children\'s health and development. Gentle approach with kids.' WHERE email='aya@nurse.com'",
    "UPDATE users SET specialty='Chronic Disease', hourly_rate=400, bio='Expert in managing diabetes, hypertension, and heart conditions at home.' WHERE email='mahmoud@nurse.com'",
    "UPDATE users SET specialty='Palliative Care', hourly_rate=380, bio='Committed to providing compassionate end-of-life care and family support.' WHERE email='fatima@nurse.com'",
    "UPDATE users SET specialty='Rehabilitation', hourly_rate=280, bio='Focused on helping patients regain independence through physical rehabilitation.' WHERE email='omar@nurse.com'"
];

foreach ($queries as $sql) {
    $conn->query($sql);
}

echo "<h3>✅ تم تحديث تخصصات وأسعار الممرضين بنجاح! ارجع لصفحة الممرضين واعمل Refresh.</h3>";
$conn->close();
?>