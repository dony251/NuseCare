-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 05, 2026 at 03:33 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nursecare_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `requests`
--

CREATE TABLE `requests` (
  `id` int(11) NOT NULL,
  `patient_id` int(11) NOT NULL,
  `nurse_id` int(11) NOT NULL,
  `patient_name` varchar(255) NOT NULL,
  `phone` varchar(50) NOT NULL,
  `address` text NOT NULL,
  `city` varchar(100) DEFAULT NULL,
  `state` varchar(100) DEFAULT NULL,
  `zip` varchar(50) DEFAULT NULL,
  `pref_date` date NOT NULL,
  `pref_time` time NOT NULL,
  `duration` int(11) NOT NULL,
  `medical_need` varchar(255) NOT NULL,
  `notes` text DEFAULT NULL,
  `status` varchar(50) DEFAULT 'pending',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `requests`
--

INSERT INTO `requests` (`id`, `patient_id`, `nurse_id`, `patient_name`, `phone`, `address`, `city`, `state`, `zip`, `pref_date`, `pref_time`, `duration`, `medical_need`, `notes`, `status`, `created_at`) VALUES
(1, 1, 1, 'Ziad A. Fathy', '01220031936', '5 شارع الكابلات الرئيسي', NULL, NULL, NULL, '2026-03-30', '21:09:00', 1, 'العلاج الوريدي', NULL, 'pending', '2026-03-30 00:50:50'),
(3, 48, 4, 'زياد احمد فتحي احمد', '01220031936', '5 شارع الكابلات / الأميرية / القاهرة', NULL, NULL, NULL, '2026-04-05', '09:11:00', 1, 'General Care', NULL, 'pending', '2026-04-05 00:03:37');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `account_type` varchar(50) NOT NULL,
  `first_name` varchar(100) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  `email` varchar(150) NOT NULL,
  `phone` varchar(50) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `specialty` varchar(100) DEFAULT 'General Care',
  `hourly_rate` int(11) DEFAULT 300,
  `bio` text DEFAULT NULL,
  `status` varchar(50) DEFAULT 'Available',
  `profile_image` varchar(255) DEFAULT 'assets/default-avatar.png',
  `album_images` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `account_type`, `first_name`, `last_name`, `email`, `phone`, `password`, `created_at`, `specialty`, `hourly_rate`, `bio`, `status`, `profile_image`, `album_images`) VALUES
(2, 'patient', 'Laila', 'Mahmoud', 'lailamahmoud@nurse.com', '01234567891', '2', '2026-03-30 01:06:22', 'Pediatrics', 300, NULL, 'Available', 'assets/default-avatar.png', NULL),
(4, 'nurse', 'Hamada', 'Eid', 'hamadaeid11@nurse.com', '01018255113', '$2y$10$D3RMUzWT2cuwVVv6Nrlklu4MSTxgKHDC2S57kB9i1h.B4vgv.Mh52', '2026-03-30 01:22:46', 'General Care', 499, 'A dedicated General Nursing graduate from the Faculty of Nursing, Fayoum University, with solid clinical skills and hands-on experience in patient care. Known for strong communication, teamwork, and a commitment to providing safe, high-quality healthcare.\r\n', 'Available', 'uploads/1775340087_profile_1775336421_profile_2da8d4cc-bc5c-44ca-b722-f8cedee754e4.jfif', 'uploads/1775340087_0_album_1775338362_album_95ce0b8d-879b-4c54-8a60-09bcd24ec66c.jfif,uploads/1775340087_1_album_1775338383_album_d1fd666c-ff98-47a6-b650-44578ff136eb.jfif'),
(5, 'nurse', 'Karim', 'Mostafa', 'karimmostafa@nurse.com', '01000000002', '5', '2026-03-30 01:22:46', 'Surgery Assistance', 380, 'Specialized in post-surgical recovery and chronic disease management. Caring and highly reliable.', 'Available', 'assets/default-avatar.png', NULL),
(6, 'nurse', 'Nadine', 'Adel', 'nadineadel@nurse.com', '01000000003', '6', '2026-03-30 01:22:46', 'General Care', 270, 'Passionate about children\'s health and development. Gentle approach with kids.', 'Available', 'assets/default-avatar.png', NULL),
(7, 'nurse', 'Tarek', 'Fathy', 'tarekfathy@nurse.com', '01000000004', '7', '2026-03-30 01:22:46', 'Home Care', 260, 'Expert in managing diabetes, hypertension, and heart conditions at home.', 'Available', 'assets/default-avatar.png', NULL),
(8, 'nurse', 'Salma', 'Khaled', 'salmakhaled@nurse.com', '01000000005', '8', '2026-03-30 01:22:46', 'ICU', 430, 'Committed to providing compassionate end-of-life care and family support.', 'Available', 'assets/default-avatar.png', NULL),
(9, 'nurse', 'Ahmed', 'Samir', 'ahmedsamir@nurse.com', '01000000006', '1', '2026-03-30 01:22:46', 'Emergency Care', 400, 'Focused on helping patients regain independence through physical rehabilitation.', 'Available', 'assets/default-avatar.png', NULL),
(12, 'patient', 'Dina', 'Wael', 'dinawael@nurse.com', '01220031936', '4', '2026-04-04 21:56:18', 'General Care', 280, '', 'Available', 'uploads/1775339825_profile_ziad.jpeg', ''),
(13, 'Nurse', 'Mostafa', 'Essam', 'mostafaessam@nurse.com', NULL, '5', '2026-04-04 22:46:48', 'Surgery Assistance', 390, 'Dedicated general nurse with strong patient care skills and a passion for improving community health.', 'Available', 'assets/default-avatar.png', NULL),
(14, 'Nurse', 'Aya', 'Tamer', 'ayatamer@nurse.com', NULL, '6', '2026-04-04 22:46:48', 'Pediatrics', 320, 'Experienced nurse focused on emergency response and critical care with excellent teamwork abilities.', 'Available', 'assets/default-avatar.png', NULL),
(15, 'Nurse', 'Khaled', 'Farouk', 'khaledfarouk@nurse.com', NULL, '7', '2026-04-04 22:46:48', 'Emergency Care', 370, 'Compassionate nurse specializing in patient support and recovery monitoring with attention to detail.', 'Available', 'assets/default-avatar.png', NULL),
(16, 'Nurse', 'Mona', 'Ashraf', 'monaashraf@nurse.com', NULL, '8', '2026-04-04 22:46:48', 'Maternity', 300, 'Skilled nurse known for delivering high-quality care and maintaining patient comfort.', 'Available', 'assets/default-avatar.png', NULL),
(17, 'Nurse', 'Amr', 'Zaki', 'amrzaki@nurse.com', NULL, '1', '2026-04-04 22:46:48', 'ICU', 440, 'Passionate nurse with strong communication skills and dedication to patient wellbeing.', 'Available', 'assets/default-avatar.png', NULL),
(18, 'Nurse', 'Noor', 'Youssef', 'nooryoussef@nurse.com', NULL, '2', '2026-04-04 22:46:48', 'Home Care', 275, 'Professional nurse with expertise in clinical procedures and patient safety.', 'Available', 'assets/default-avatar.png', NULL),
(19, 'Nurse', 'Sherif', 'Gamal', 'sherifgamal@nurse.com', NULL, '3', '2026-04-04 22:46:48', 'General Care', 290, 'Caring nurse focused on delivering personalized healthcare and emotional support.', 'Available', 'assets/default-avatar.png', NULL),
(20, 'Nurse', 'Hala', 'Abdelrahman', 'halaabdelrahman@nurse.com', NULL, '8', '2026-04-04 22:46:48', 'General Care', 300, 'Reliable nurse with strong experience in hospital environments and patient care.', 'Available', 'assets/default-avatar.png', NULL),
(21, 'Nurse', 'Dina', 'Khaled', 'dinakhaled@nurse.com', NULL, '1', '2026-04-04 22:46:48', 'General Care', 300, 'Motivated nurse committed to improving patient outcomes through attentive care.', 'Available', 'assets/default-avatar.png', NULL),
(22, 'Nurse', 'Rania', 'Fathy', 'raniafathy@nurse.com', NULL, '2', '2026-04-04 22:46:48', 'General Care', 300, 'Skilled nurse with a focus on preventive care and patient education.', 'Available', 'assets/default-avatar.png', NULL),
(23, 'Nurse', 'Menna', 'Tarek', 'mennatarek@nurse.com', NULL, '3', '2026-04-04 22:46:48', 'General Care', 300, 'Energetic nurse passionate about providing compassionate and efficient healthcare.', 'Available', 'assets/default-avatar.png', NULL),
(24, 'Nurse', 'Aya', 'Samir', 'ayasamir@nurse.com', NULL, '4', '2026-04-04 22:46:48', 'General Care', 300, 'Detail-oriented nurse experienced in patient monitoring and medical support.', 'Available', 'assets/default-avatar.png', NULL),
(25, 'Nurse', 'Heba', 'Adel', 'hebaadel@nurse.com', NULL, '5', '2026-04-04 22:46:48', 'General Care', 300, 'Professional nurse known for her dedication to patient recovery and comfort.', 'Available', 'assets/default-avatar.png', NULL),
(26, 'Nurse', 'Reem', 'Nabil', 'reemnabil@nurse.com', NULL, '6', '2026-04-04 22:46:48', 'General Care', 300, 'Friendly nurse with strong interpersonal skills and clinical knowledge.', 'Available', 'assets/default-avatar.png', NULL),
(27, 'Nurse', 'Nada', 'Sherif', 'nadasherif@nurse.com', NULL, '7', '2026-04-04 22:46:48', 'General Care', 300, 'Compassionate nurse focused on delivering high-quality patient-centered care.', 'Available', 'assets/default-avatar.png', NULL),
(28, 'Nurse', 'Mai', 'Osama', 'maiosama@nurse.com', NULL, '8', '2026-04-04 22:46:48', 'General Care', 300, 'Experienced nurse with a passion for helping patients through recovery.', 'Available', 'assets/default-avatar.png', NULL),
(29, 'Nurse', 'Donia', 'Hamdy', 'doniahamdy@nurse.com', NULL, '1', '2026-04-04 22:46:48', 'General Care', 300, 'Skilled nurse specializing in patient care and hospital support services.', 'Available', 'assets/default-avatar.png', NULL),
(30, 'Nurse', 'Asmaa', 'Youssef', 'asmaayoussef@nurse.com', NULL, '2', '2026-04-04 22:46:48', 'General Care', 300, 'Dedicated nurse with strong ethics and commitment to healthcare excellence.', 'Available', 'assets/default-avatar.png', NULL),
(31, 'Nurse', 'Eman', 'Hany', 'emanhany@nurse.com', NULL, '3', '2026-04-04 22:46:48', 'General Care', 300, 'Patient-focused nurse with excellent clinical and communication skills.', 'Available', 'assets/default-avatar.png', NULL),
(32, 'Nurse', 'Basma', 'Reda', 'basmareda@nurse.com', NULL, '4', '2026-04-04 22:46:48', 'General Care', 300, 'Caring nurse who excels in providing emotional and medical support.', 'Available', 'assets/default-avatar.png', NULL),
(33, 'Nurse', 'Mona', 'Saad', 'monasaad@nurse.com', NULL, '5', '2026-04-04 22:46:48', 'General Care', 300, 'Experienced nurse with a strong background in patient care and treatment.', 'Available', 'assets/default-avatar.png', NULL),
(34, 'Nurse', 'Hagar', 'Magdy', 'hagarmagdy@nurse.com', NULL, '6', '2026-04-04 22:46:48', 'General Care', 300, 'Professional nurse dedicated to maintaining patient safety and comfort.', 'Available', 'assets/default-avatar.png', NULL),
(35, 'Nurse', 'Ola', 'Farouk', 'olafarouk@nurse.com', NULL, '7', '2026-04-04 22:46:48', 'General Care', 300, 'Reliable nurse with strong clinical skills and attention to detail.', 'Available', 'assets/default-avatar.png', NULL),
(36, 'Nurse', 'Walaa', 'Ahmed', 'walaaahmed@nurse.com', NULL, '8', '2026-04-04 22:46:48', 'General Care', 300, 'Compassionate nurse focused on improving patient health outcomes.', 'Available', 'assets/default-avatar.png', NULL),
(37, 'Nurse', 'Noha', 'Essam', 'nohaessam@nurse.com', NULL, '1', '2026-04-04 22:46:48', 'General Care', 300, 'Skilled nurse with expertise in patient care and medical assistance.', 'Available', 'assets/default-avatar.png', NULL),
(38, 'Nurse', 'Shaimaa', 'Saber', 'shaimaasaber@nurse.com', NULL, '2', '2026-04-04 22:46:48', 'General Care', 300, 'Dedicated nurse passionate about providing quality healthcare services.', 'Available', 'assets/default-avatar.png', NULL),
(39, 'Nurse', 'Ghada', 'Anwar', 'ghadaanwar@nurse.com', NULL, '3', '2026-04-04 22:46:48', 'General Care', 300, 'Friendly nurse known for her supportive and patient-centered approach.', 'Available', 'assets/default-avatar.png', NULL),
(40, 'Nurse', 'Rasha', 'Gamal', 'rashagamal@nurse.com', NULL, '4', '2026-04-04 22:46:48', 'General Care', 300, 'Experienced nurse focused on delivering safe and effective care.', 'Available', 'assets/default-avatar.png', NULL),
(41, 'Nurse', 'Amira', 'Adel', 'amiraadel@nurse.com', NULL, '5', '2026-04-04 22:46:48', 'General Care', 300, 'Caring nurse with strong commitment to patient wellbeing and recovery.', 'Available', 'assets/default-avatar.png', NULL),
(42, 'Nurse', 'Lobna', 'Hussein', 'lobnahussein@nurse.com', NULL, '6', '2026-04-04 22:46:48', 'General Care', 300, 'Professional nurse with excellent clinical skills and patient care experience.', 'Available', 'assets/default-avatar.png', NULL),
(44, 'patient', 'Dina', 'Samy', 'dinasamy@nurse.com', '01143915266', '$2y$10$N0I0bJ3xm8rveyPD/2fKx.sIy2GUCRV4mRUuSHt1BPskFSCE3D9c2', '2026-04-04 23:43:06', '', 0, '', 'Available', 'uploads/1775346215_profile_dina.jpeg', ''),
(45, 'patient', 'Aya', 'Saber', 'ayasaber@nurse.com', '01272903410', '$2y$10$AKzX2iQbAH2tCkxYLISusOpFxi1U4GEFSqO7PxPRdOoZ6p7VoWZHW', '2026-04-04 23:44:23', '', 0, '', 'Available', 'uploads/1775346283_profile_aya.jpeg', ''),
(46, 'patient', 'Mostafa', 'Adel', 'mostafaadel@nurse.com', '01062396942', '$2y$10$99EUBsC/3rF/wpzu5IXYCuFec244J5l3GIg94hoogOGH2GprpFXPi', '2026-04-04 23:46:12', '', 0, '', 'Available', 'uploads/1775346393_profile_mostafa.jpeg', ''),
(47, 'patient', 'Ehsan', 'Hassan', 'ehsanhassan@nurse.com', '01002984089', '$2y$10$6.rin/mqT6FuHNOUoSmMqudBGgAgZcNtIpHOGwj8F7Lm.DouGuCha', '2026-04-04 23:49:19', '', 0, '', 'Available', 'uploads/1775346579_profile_ehsan.jpeg', ''),
(48, 'patient', 'Zead', 'A. Fathy', 'zead@nurse.com', '01220031936', '$2y$10$.WnZpopfGPdh2CLFTzcJT.gWYkE3nfQEEQcmzGkDYn9qN62Yl6kQ2', '2026-04-05 00:00:40', '', 0, '', 'Available', 'uploads/1775347327_profile_ziad.jpeg', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `requests`
--
ALTER TABLE `requests`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `requests`
--
ALTER TABLE `requests`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
