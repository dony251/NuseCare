<?php
header("Content-Type: application/json; charset=UTF-8");
require 'db.php';

if(isset($_POST['user_id'])) {
    $user_id = $conn->real_escape_string($_POST['user_id']);
    $updates = [];
    
    // 1. البيانات النصية
    if(!empty($_POST['first_name'])) $updates[] = "first_name = '" . $conn->real_escape_string($_POST['first_name']) . "'";
    if(!empty($_POST['last_name'])) $updates[] = "last_name = '" . $conn->real_escape_string($_POST['last_name']) . "'";
    if(!empty($_POST['email'])) $updates[] = "email = '" . $conn->real_escape_string($_POST['email']) . "'";
    if(!empty($_POST['phone'])) $updates[] = "phone = '" . $conn->real_escape_string($_POST['phone']) . "'";
    if(isset($_POST['bio'])) $updates[] = "bio = '" . $conn->real_escape_string($_POST['bio']) . "'";
    
    // 2. تحديث الباسوورد
    if(!empty($_POST['password'])) {
        $hashed_password = password_hash($_POST['password'], PASSWORD_DEFAULT);
        $updates[] = "password = '$hashed_password'";
    }

    // 3. الصورة الشخصية
    if(isset($_FILES['profile_img']) && $_FILES['profile_img']['error'] === UPLOAD_ERR_OK) {
        $imgName = time() . '_profile_' . $_FILES['profile_img']['name'];
        if(move_uploaded_file($_FILES['profile_img']['tmp_name'], '../uploads/' . $imgName)) {
            $updates[] = "profile_image = 'uploads/$imgName'";
        }
    } elseif (isset($_POST['remove_profile_img']) && $_POST['remove_profile_img'] == 'true') {
        // لو داس على X ومرفعش صورة جديدة، نمسح مسار الصورة
        $updates[] = "profile_image = ''";
    }

    // 4. ألبوم الصور (رفع صور متعددة ودمجها مع القديم)
    $newAlbumImgs = [];
    // لو رفع صور جديدة
    if(isset($_FILES['album_imgs'])) {
        $totalFiles = count($_FILES['album_imgs']['name']);
        for($i = 0; $i < $totalFiles; $i++) {
            if($_FILES['album_imgs']['error'][$i] === UPLOAD_ERR_OK) {
                $albumName = time() . '_' . $i . '_album_' . $_FILES['album_imgs']['name'][$i];
                if(move_uploaded_file($_FILES['album_imgs']['tmp_name'][$i], '../uploads/' . $albumName)) {
                    $newAlbumImgs[] = 'uploads/' . $albumName;
                }
            }
        }
    }

    // الصور القديمة اللي الممرض احتفظ بيها (ممسحهاش بـ X)
    $retainedStr = isset($_POST['retained_album']) ? $_POST['retained_album'] : '';
    $retainedArray = array_filter(explode(',', $retainedStr)); // تنظيف أي قيم فارغة

    // دمج الصور القديمة المتبقية مع الصور الجديدة المرفوعة
    $finalAlbumArray = array_merge($retainedArray, $newAlbumImgs);
    $finalAlbumStr = implode(',', $finalAlbumArray);
    
    // تحديث الألبوم دايماً (حتى لو مسح كل حاجة هيبعته فاضي)
    $updates[] = "album_images = '" . $conn->real_escape_string($finalAlbumStr) . "'";

    if(count($updates) > 0) {
        $sql = "UPDATE users SET " . implode(", ", $updates) . " WHERE id = '$user_id'";
        if($conn->query($sql) === TRUE) {
            $getUser = $conn->query("SELECT * FROM users WHERE id = '$user_id'");
            $userData = $getUser->fetch_assoc();
            unset($userData['password']); 
            echo json_encode(["status" => "success", "message" => "تم التحديث بنجاح", "user" => $userData]);
        } else {
            echo json_encode(["status" => "error", "message" => "حدث خطأ في قاعدة البيانات"]);
        }
    } else {
        echo json_encode(["status" => "error", "message" => "لا توجد بيانات جديدة"]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "بيانات غير مكتملة"]);
}
$conn->close();
?>