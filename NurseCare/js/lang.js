/* ============================================
   NurseCare - Full Language Dictionary (AR / EN)
   ============================================ */

const translations = {
  en: {
    // Navbar
    nav_home: "Home", nav_nurses: "Find Nurses", nav_search: "Search",
    nav_dashboard: "Dashboard", nav_about: "About", nav_login: "Log In",
    nav_signup: "Sign Up", nav_lang: "العربية",
    nav_logout: "Log Out", confirm_logout: "Are you sure you want to log out?",

    // 404 Not Found
    error_404: "404", error_title: "Page Not Found",
    error_desc: "Oops! It looks like you've wandered off the chart. Please note that NurseCare is currently a university demo project under development.",
    error_btn_home: "Back to Homepage", error_btn_back: "Go Back",

    // Common & Shared
    currency_egp: "EGP", per_hour: "/hr", hr_word: "/hr", experience_word: "years",
    reviews_word: "reviews", view_profile: "View Profile", book_now: "Book Now",
    unavailable: "Unavailable", cancel: "Cancel", loading_db: "Searching database...",
    status_avail: "Available", status_busy: "Busy", status_busy_btn: "Unavailable",
    btn_view_profile: "View Profile",

    // Home / Index
    hero_tag: "TRUSTED HOME NURSING", hero_h1: "Professional Nursing Care,<br>Right at Your Door",
    hero_p: "Connect with certified, vetted home nurses for elderly care, post-op recovery, pediatric support, and more. Book in minutes.",
    hero_btn1: "Find a Nurse Now", hero_btn2: "Become a Patient",
    stat_nurses: "Certified Nurses", stat_patients: "Happy Patients", stat_rating: "Avg Rating", stat_satisfaction: "Satisfaction Rate",
    search_placeholder: "🔍 Search by nurse name or specialty…", search_btn: "Search",
    hiw_tag: "SIMPLE PROCESS", hiw_h2: "How NurseCare Works", hiw_sub: "Book a professional home nurse in 3 easy steps",
    hiw_1_h: "Search & Browse", hiw_1_p: "Browse our network of certified nurses filtered by specialty, location, and availability.",
    hiw_2_h: "Book Your Nurse", hiw_2_p: "Select your preferred nurse, choose a date and time, and confirm your home visit in seconds.",
    hiw_3_h: "Receive Care", hiw_3_p: "Your nurse arrives at your home on time, fully equipped to provide professional medical care.",
    feat_tag: "TOP RATED", feat_h2: "Featured Nurses", feat_all: "View All Nurses →",
    why_tag: "WHY CHOOSE US", why_h2: "Care You Can Trust", why_p: "Professional home nursing services connecting patients with certified caregivers.",
    why_1_h: "Verified & Licensed", why_1_p: "All nurses are fully verified, licensed, and background-checked.",
    why_2_h: "Fast Booking", why_2_p: "Book a home visit in under 2 minutes, any time of day.",
    why_3_h: "24/7 Support", why_3_p: "Our support team is always available to assist you.",
    why_4_h: "Transparent Pricing", why_4_p: "No hidden fees. Pay only for the care you receive.",
    why_btn: "Get Started Free", spec_tag: "WHAT WE OFFER", spec_h2: "Nursing Specialties", spec_sub: "Find the right type of care for your needs",
    cta_h2: "Ready to Get Started?", cta_p: "Join thousands of patients already receiving professional home nursing care.",
    cta_btn1: "Create Free Account", cta_btn2: "Browse Nurses",
    footer_nav: "Navigation", footer_specs: "Specialties", footer_account: "Account", footer_copy: "© 2026 NurseCare. All rights reserved. | Built by Thebes Academy students.",
    footer_copy_short: "© 2026 NurseCare. All rights reserved.",
    video_caption: "NurseCare - How To Create An Account And Start Receiving Treatment",

    // Specialties & Locations
    spec_elderly: "Elderly Care", spec_post_op: "Post-Op Care", spec_pediatric: "Pediatric Care",
    spec_chronic: "Chronic Disease", spec_palliative: "Palliative Care", spec_rehab: "Rehabilitation",
    spec_general: "General Care", spec_all: "All Specialties", loc_any: "Any Location",
    loc_maadi: "Downtown", loc_nasr_city: "North Side", loc_zamalek: "East Village",
    loc_heliopolis: "West End", loc_dokki: "South Bay", loc_mohandeseen: "Central Park",

    // Login
    login_welcome: "Welcome Back", login_sub: "Sign in to your NurseCare account",
    login_demo: "<strong>Demo:</strong> Enter any email & password to log in.",
    login_email: "Email Address", login_pw: "Password", login_remember: "Remember me",
    login_forgot: "Forgot password?", login_btn: "Log In", login_no_acc: "Don't have an account?",
    login_signup: "Sign up free", login_or: "or continue with",
    toast_social: "Social login not available.", btn_google: "Google", btn_facebook: "Facebook",

    // Register
    reg_h2: "Create Your Account", reg_sub: "Join NurseCare and start your journey",
    reg_type: "Account Type", reg_patient: "👤 Patient", reg_nurse: "👩‍⚕️ Nurse",
    reg_first: "First Name", reg_last: "Last Name", reg_email: "Email Address", reg_phone: "Phone Number",
    reg_pw: "Password", reg_pw_min: "Minimum 8 characters", reg_confirm: "Confirm Password",
    reg_agree: "I agree to the", reg_terms: "Terms of Service", reg_and: "and", reg_privacy: "Privacy Policy",
    reg_btn: "Create Account", reg_have_acc: "Already have an account?", reg_signin: "Sign in",
    reg_nurse_details_h: "🩺 PROFESSIONAL DETAILS", reg_spec_label: "Specialty *",
    reg_rate_label: "Hourly Rate (EGP) *", reg_bio_label: "Brief Bio", reg_bio_ph: "Tell patients about your experience...",
    reg_pw_error: "Passwords do not match!",

    // Patient Dashboard
    dash_h1: "Patient Dashboard", dash_sub: "Track and manage all your nursing service requests", dash_book_btn: "+ Book New Nurse",
    stat_total: "Total Requests", stat_active: "Active", stat_pending: "Pending", stat_completed: "Completed",
    qa_find_h: "Find a Nurse", qa_find_p: "Browse available nurses", qa_search_h: "Quick Search", qa_search_p: "Find by specialty or name",
    qa_profile_h: "My Profile", qa_profile_p: "Update your information", dash_req_h: "My Service Requests",
    dash_refresh: "↻ Refresh", dash_th_id: "ID", dash_th_nurse: "NURSE", dash_th_spec: "SPECIALTY", dash_th_date: "DATE", dash_th_time: "TIME", dash_th_status: "STATUS", dash_th_rate: "RATE", dash_th_action: "ACTIONS",
    dash_upcoming: "Upcoming Visits", dash_tips: "Health Tips",
    tip_1_h: "Stay Hydrated", tip_1_p: "Drink at least 8 glasses of water daily.", tip_2_h: "Prioritize Rest", tip_2_p: "Quality sleep is essential for healing.",

    // Nurse Dashboard
    nurse_logout: "Log Out", nurse_dash_h1: "Nurse Professional Dashboard", nurse_dash_sub: "Manage your patient requests and daily schedule",
    nurse_welcome: "Welcome Nurse!", nurse_loading_email: "Loading email...", nurse_role_badge: "Registered Nurse",
    nurse_stat_total: "Total Patients", nurse_stat_pending: "New Requests", nurse_stat_completed: "Visits Completed", nurse_stat_rating: "Avg Rating",
    nurse_req_h: "My Patient Requests", nurse_th_patient: "PATIENT NAME", nurse_th_service: "SERVICE NEEDED",
    nurse_footer_copy: "© 2026 NurseCare Professional Portal. All rights reserved.",
    nurse_edit_profile: "Edit Profile",
    prof_phone: "Phone Number",
    prof_email: "Email Address",

    // Nurses / Search
    nurses_h1: "Find a Home Nurse", nurses_sub: "Browse our network of verified, licensed home nursing professionals",
    filter_h: "🔍 Filter Nurses", filter_search: "SEARCH", filter_spec: "SPECIALTY", filter_avail: "AVAILABILITY", filter_sort: "SORT BY",
    avail_any: "Any Status", avail_now: "Available Now", avail_busy: "Busy / Unavailable", sort_default: "Default / Recommended", sort_rating: "Highest Rating First", sort_price_asc: "Price: Low to High", sort_price_desc: "Price: High to Low",
    adv_search: "Advanced Search", search_h2: "Search for a Nurse", filter_clear: "Clear All Filters",
    showing_lbl: "Showing", nurses_lbl: "nurses found", search_no_results: "No nurses found!", search_adjust: "Try adjusting your filters or search terms.",

    // Nurse Profile
    nav_back_nurses: "Back to Nurses", bread_home: "Home", bread_find: "Find a Nurse",
    prof_spec_label: "Specialty", prof_excellent_rating: "(Excellent Reviews)", prof_home_visit: "📍 Available for home visits", prof_certified_exp: "⏱️ Certified Experience",
    prof_bio_h: "About the Nurse", prof_skills_h: "Skills & Services",
    skill_postop: "Post-Op Recovery", skill_catheter: "Catheter Care", skill_vitals: "Vital Signs", skill_pain: "Pain Management", skill_injection: "Injections",
    prof_book_h: "Book This Nurse", prof_book_sub: "Available for home visits in your area", prof_hourly: "Hourly Rate",
    prof_book_btn: "Book Now", prof_msg_btn: "💬 Send Message", prof_avail_h: "Availability",
    prof_sat: "Sat", prof_sun: "Sun", prof_mon: "Mon", prof_tue: "Tue", prof_wed: "Wed", prof_thu: "Thu", prof_fri: "Fri",
    prof_feat_1: "🔒 Background checked", prof_feat_2: "📜 Medically licensed", prof_feat_3: "💳 Transparent pricing", prof_feat_4: "🌟 Highly rated professional",
    prof_contact_h: "Contact Information",

    // About Us & Team
    about_tag: "WHO WE ARE", about_h1: "About NurseCare", about_p: "NurseCare is a university frontend project that simulates a home nursing service platform — inspired by Uber.",
    about_mission_h: "Our Mission", about_mission_p: "To make professional home nursing care accessible to everyone, anytime, anywhere.",
    about_vision_h: "Our Vision", about_vision_p: "To become the leading home healthcare platform in the region.",
    team_tag: "THE TEAM", team_h2: "Meet the Team", team_sub: "The talented people who built NurseCare",
    team_role_dina: "Frontend Developer", team_bio_dina: "Responsible for developing the entire frontend structure and layout of the project.",
    team_role_ehsan: "UI/CSS Developer", team_bio_ehsan: "Developed the CSS styling system, color palettes, and overall visual coordination.",
    team_role_ziad: "Logic & Backend Developer", team_bio_ziad: "Developed JavaScript logic, backend systems, database integration, and final comprehensive review.",
    team_role_mostafa: "Database & ERD Admin", team_bio_mostafa: "Database creator and coordinator, responsible for designing the ERD and managing data structure.",
    team_role_data: "Ai Research & Analysis", team_bio_aya: "Uses AI tools for research and information gathering, helping analyze data and support project development.",
    values_tag: "WHAT DRIVES US", values_h2: "Our Core Values", val_1_h: "Trust", val_1_p: "Every nurse on our platform is verified.",
    val_2_h: "Compassion", val_2_p: "We treat every patient with the warmth and care they deserve.", val_3_h: "Speed", val_3_p: "Book a home nurse in under 2 minutes.",
    val_4_h: "Transparency", val_4_p: "Flat-rate, honest pricing with no hidden fees.", tech_tag: "BUILT WITH", tech_h2: "Technologies Used",
    tech_sub: "Front-End & Back-End", tech_ai: "AI", tech_i18n: "i18n Language Translator (AR/EN)",
    about_proj_h: "Thebes Academy Project", about_proj_p: "This project was built as a university assignment to demonstrate frontend development skills using HTML, CSS, Bootstrap, AI skills and JavaScript. It is a fully functional prototype - a MySQL Database is involved.",

    // Request Service
    req_h1: "Request Nursing Service", req_sub: "Fill in the details below to book your home visit", req_booking_h: "Booking Details", req_patient_h: "PATIENT INFORMATION",
    req_name: "Patient Full Name *", req_phone: "Phone Number *", req_address: "Home Address *", req_city: "City", req_state: "State", req_zip: "ZIP Code",
    req_schedule_h: "SCHEDULE", req_date: "Preferred Date *", req_time: "Preferred Time *", req_duration: "Duration (hours) *", req_medical_h: "MEDICAL INFORMATION",
    req_care_type: "Primary Medical Need *", req_notes: "Additional Notes", req_notes_opt: "(optional)", req_agree: "I confirm the information provided is accurate",
    req_terms: "Terms of Service", req_btn: "Confirm Booking Request", req_summary_h: "Booking Summary", req_hourly: "Hourly Rate", req_duration_lbl: "Duration",
    req_platform: "Platform Fee", req_free: "Free", req_total: "Total", req_cancel_note: "✅ Free cancellation up to 24h before", req_secure: "🔒 Secure & verified nurse",
    req_comm: "💬 Direct communication with nurse", req_support: "📞 24/7 support team", req_login_err: "You must log in first to book!",

    // Edit Profile Modal
    ep_title: "Edit Full Profile",
    ep_first: "First Name",
    ep_last: "Last Name",
    ep_email: "Email Address",
    ep_phone: "Phone Number",
    ep_pass: "New Password",
    ep_pass_ph: "Leave blank to keep current password",
    ep_bio: "Bio (About You)",
    ep_img: "Current Profile Picture",
    ep_img_hint: "Choose a new image to change it",
    ep_album: "Portfolio & Certificates",
    ep_album_hint: "You can select multiple images at once",
    ep_save: "Save Changes",
   dash_logout_btn: "Log Out",
confirm_logout: "Are you sure you want to log out?",
ep_title_short: "Edit Profile",
click_to_add: "Click<br>to add",
no_upcoming_visits: "No upcoming visits for now.",

    // Forgot Password Modal
    forgot_title: "Reset Password",
    forgot_sub: "Enter your registered email and your new password.",
    forgot_email_lbl: "Email Address",
    forgot_new_pw_lbl: "New Password",
    forgot_confirm_pw_lbl: "Confirm New Password",
    forgot_btn: "Reset Password",
  },

  ar: {
    // Navbar
    nav_home: "الرئيسية", nav_nurses: "ابحث عن ممرض", nav_search: "بحث",
    nav_dashboard: "لوحة التحكم", nav_about: "من نحن", nav_login: "تسجيل الدخول",
    nav_signup: "إنشاء حساب", nav_lang: "English",
    nav_logout: "تسجيل خروج", confirm_logout: "هل أنت متأكد أنك تريد تسجيل الخروج؟",

    // 404 Not Found
    error_404: "404", error_title: "الصفحة غير موجودة",
    error_desc: "عذراً! يبدو أنك فقدت طريقك. يرجى العلم أن مشروع NurseCare هو نسخة تجريبية جامعية قيد التطوير.",
    error_btn_home: "العودة للرئيسية", error_btn_back: "الرجوع للخلف",

    // Common & Shared
    currency_egp: "ج.م", per_hour: "/ساعة", hr_word: "/ساعة", experience_word: "سنوات خبرة",
    reviews_word: "تقييم", view_profile: "عرض الصفحة", book_now: "احجز الآن",
    unavailable: "غير متاح", cancel: "إلغاء", loading_db: "جاري البحث في قاعدة البيانات...",
    status_avail: "متاح الآن", status_busy: "مشغول", status_busy_btn: "غير متاح",
    btn_view_profile: "عرض الصفحة",

    // Home / Index
    hero_tag: "رعاية تمريضية منزلية موثوقة", hero_h1: "رعاية تمريضية احترافية،<br>مباشرة إلى منزلك",
    hero_p: "تواصل مع ممرضين منزليين معتمدين ومتحقق منهم لرعاية المسنين، والتعافي بعد العمليات، ورعاية الأطفال، والمزيد. احجز خلال دقائق.",
    hero_btn1: "ابحث عن ممرض الآن", hero_btn2: "سجّل كمريض",
    stat_nurses: "ممرض معتمد", stat_patients: "مريض سعيد", stat_rating: "متوسط التقييم", stat_satisfaction: "نسبة الرضا",
    search_placeholder: "🔍 ابحث بالاسم أو التخصص…", search_btn: "بحث",
    hiw_tag: "عملية بسيطة", hiw_h2: "كيف يعمل NurseCare؟", hiw_sub: "احجز ممرضاً منزلياً في 3 خطوات سهلة",
    hiw_1_h: "ابحث وتصفّح", hiw_1_p: "تصفح شبكتنا من الممرضين المعتمدين مصنّفة حسب التخصص والموقع والتوفر.",
    hiw_2_h: "احجز ممرضك", hiw_2_p: "اختر الممرض المفضل، وحدد موعداً، وأكد الزيارة المنزلية في ثوانٍ.",
    hiw_3_h: "استقبل الرعاية", hiw_3_p: "يصل الممرض إلى منزلك في الوقت المحدد، مجهزاً بالكامل لتقديم الرعاية الطبية.",
    feat_tag: "الأعلى تقييماً", feat_h2: "الممرضون المميزون", feat_all: "عرض جميع الممرضين ←",
    why_tag: "لماذا تختارنا", why_h2: "رعاية يمكنك الوثوق بها", why_p: "يربط NurseCare المرضى بممرضين مرخصين وموثقين.",
    why_1_h: "موثّق ومرخّص", why_1_p: "جميع الممرضين موثقون ومرخصون وتم فحص سجلاتهم بالكامل.",
    why_2_h: "حجز سريع", why_2_p: "احجز زيارة منزلية في أقل من دقيقتين، في أي وقت.",
    why_3_h: "دعم على مدار الساعة", why_3_p: "فريق الدعم لدينا متاح دائماً لمساعدتك.",
    why_4_h: "أسعار شفافة", why_4_p: "بدون رسوم خفية. ادفع فقط مقابل الرعاية التي تتلقاها.",
    why_btn: "ابدأ مجاناً", spec_tag: "ما نقدمه", spec_h2: "تخصصات التمريض", spec_sub: "ابحث عن النوع المناسب من الرعاية لاحتياجاتك",
    cta_h2: "هل أنت مستعد للبدء؟", cta_p: "انضم إلى آلاف المرضى الذين يتلقون رعاية تمريضية منزلية احترافية مع NurseCare.",
    cta_btn1: "أنشئ حساباً مجانياً", cta_btn2: "تصفح الممرضين",
    footer_nav: "التنقل", footer_specs: "التخصصات", footer_account: "الحساب", footer_copy: "© 2026 NurseCare. جميع الحقوق محفوظة. | تم التطوير بواسطة طلاب أكاديمية طيبة.",
    footer_copy_short: "© 2026 NurseCare. جميع الحقوق محفوظة.",
    video_caption: "NurseCare - شاهد كيفية إنشاء حساب و تلقي العلاج",

    // Specialties & Locations
    spec_elderly: "رعاية المسنين", spec_post_op: "التعافي بعد العمليات", spec_pediatric: "رعاية الأطفال",
    spec_chronic: "الأمراض المزمنة", spec_palliative: "الرعاية التلطيفية", spec_rehab: "إعادة التأهيل",
    spec_general: "رعاية عامة", spec_all: "جميع التخصصات", loc_any: "أي موقع",
    loc_maadi: "المعادي", loc_nasr_city: "مدينة نصر", loc_zamalek: "الزمالك",
    loc_heliopolis: "مصر الجديدة", loc_dokki: "الدقي", loc_mohandeseen: "المهندسين",

    // Login
    login_welcome: "مرحباً بعودتك", login_sub: "سجّل الدخول إلى حساب NurseCare الخاص بك",
    login_demo: "<strong>تجريبي:</strong> أدخل أي بريد إلكتروني وكلمة مرور لتسجيل الدخول.",
    login_email: "البريد الإلكتروني", login_pw: "كلمة المرور", login_remember: "تذكرني",
    login_forgot: "نسيت كلمة المرور؟", login_btn: "تسجيل الدخول", login_no_acc: "ليس لديك حساب؟",
    login_signup: "سجّل مجاناً", login_or: "أو تابع باستخدام",
    toast_social: "تسجيل الدخول بحسابات التواصل غير متاح.", btn_google: "جوجل", btn_facebook: "فيسبوك",

    // Register
    reg_h2: "أنشئ حسابك", reg_sub: "انضم إلى NurseCare وابدأ في تلقي الرعاية المنزلية الاحترافية",
    reg_type: "نوع الحساب", reg_patient: "👤 مريض", reg_nurse: "👩‍⚕️ ممرض/ة",
    reg_first: "الاسم الأول", reg_last: "اسم العائلة", reg_email: "البريد الإلكتروني", reg_phone: "رقم الهاتف",
    reg_pw: "كلمة المرور", reg_pw_min: "8 أحرف على الأقل", reg_confirm: "تأكيد كلمة المرور",
    reg_agree: "أؤكد أن المعلومات المقدمة دقيقة", reg_terms: "شروط الخدمة", reg_and: "و", reg_privacy: "سياسة الخصوصية",
    reg_btn: "إنشاء الحساب", reg_have_acc: "هل لديك حساب بالفعل؟", reg_signin: "سجّل الدخول",
    reg_nurse_details_h: "🩺 التفاصيل المهنية", reg_spec_label: "التخصص *",
    reg_rate_label: "السعر بالساعة (ج.م) *", reg_bio_label: "نبذة مختصرة", reg_bio_ph: "أخبر المرضى عن خبرتك...",
    reg_pw_error: "كلمتا المرور غير متطابقتين!",

    // Patient Dashboard
    dash_h1: "لوحة تحكم المريض", dash_sub: "تتبع وإدارة جميع طلبات خدمة التمريض الخاصة بك", dash_book_btn: "+ احجز ممرضاً جديداً",
    stat_total: "إجمالي الطلبات", stat_active: "النشطة", stat_pending: "قيد الانتظار", stat_completed: "المكتملة",
    qa_find_h: "ابحث عن ممرض", qa_find_p: "تصفح الممرضين المتاحين", qa_search_h: "بحث سريع", qa_search_p: "ابحث بالتخصص أو الاسم",
    qa_profile_h: "ملفي الشخصي", qa_profile_p: "تحديث بياناتك", dash_req_h: "طلباتي",
    dash_refresh: "↻ تحديث", dash_th_id: "رقم الطلب", dash_th_nurse: "الممرض/ة", dash_th_spec: "التخصص", dash_th_date: "التاريخ", dash_th_time: "الوقت", dash_th_status: "الحالة", dash_th_rate: "السعر", dash_th_action: "الإجراءات",
    dash_upcoming: "الزيارات القادمة", dash_tips: "نصائح صحية",
    tip_1_h: "ابقَ رطباً", tip_1_p: "اشرب ما لا يقل عن 8 أكواب من الماء يومياً.", tip_2_h: "أعطِ الراحة أولوية", tip_2_p: "النوم الجيد ضروري للشفاء ووظيفة المناعة.",

    // Nurse Dashboard
    nurse_logout: "تسجيل خروج", nurse_dash_h1: "لوحة تحكم الممرض", nurse_dash_sub: "إدارة طلبات مرضاك وجدولك اليومي",
    nurse_welcome: "أهلاً بك!", nurse_loading_email: "جاري تحميل البريد...", nurse_role_badge: "ممرض معتمد",
    nurse_stat_total: "إجمالي المرضى", nurse_stat_pending: "طلبات جديدة", nurse_stat_completed: "الزيارات المكتملة", nurse_stat_rating: "متوسط التقييم",
    nurse_req_h: "طلبات مرضاي", nurse_th_patient: "اسم المريض", nurse_th_service: "الخدمة المطلوبة",
    nurse_footer_copy: "© 2026 بوابة NurseCare للمحترفين. جميع الحقوق محفوظة.",
    nurse_edit_profile: "تعديل الملف الشخصي",
    prof_phone: "رقم الهاتف",
    prof_email: "البريد الإلكتروني",

    // Nurses / Search
    nurses_h1: "ابحث عن ممرض منزلي", nurses_sub: "تصفح شبكتنا من الممرضين المرخصين والموثقين",
    filter_h: "🔍 فلترة الممرضين", filter_search: "بحث", filter_spec: "التخصص", filter_avail: "التوفر", filter_sort: "الترتيب",
    avail_any: "جميع الحالات", avail_now: "متاح الآن", avail_busy: "مشغول / غير متاح", sort_default: "الافتراضي / مقترح", sort_rating: "الأعلى تقييماً", sort_price_asc: "السعر: من الأقل للأعلى", sort_price_desc: "السعر: من الأعلى للأقل",
    adv_search: "بحث متقدم", search_h2: "ابحث عن ممرض", filter_clear: "مسح الفلاتر",
    showing_lbl: "عرض", nurses_lbl: "ممرض", search_no_results: "لا يوجد ممرضين!", search_adjust: "حاول تعديل الفلاتر أو كلمات البحث.",

    // Nurse Profile
    nav_back_nurses: "العودة للممرضين", bread_home: "الرئيسية", bread_find: "ابحث عن ممرض",
    prof_spec_label: "التخصص", prof_excellent_rating: "(تقييمات ممتازة)", prof_home_visit: "📍 متاح للزيارات المنزلية", prof_certified_exp: "⏱️ خبرة معتمدة",
    prof_bio_h: "نبذة عن الممرض", prof_skills_h: "المهارات والخدمات",
    skill_postop: "التعافي بعد الجراحة", skill_catheter: "العناية بالقسطرة", skill_vitals: "مراقبة العلامات الحيوية", skill_pain: "إدارة الألم", skill_injection: "إعطاء الحقن",
    prof_book_h: "احجز هذا الممرض", prof_book_sub: "متاح للزيارات المنزلية في منطقتك", prof_hourly: "السعر بالساعة",
    prof_book_btn: "احجز الآن", prof_msg_btn: "💬 إرسال رسالة", prof_avail_h: "أيام التوفر",
    prof_sat: "السبت", prof_sun: "الأحد", prof_mon: "الإثنين", prof_tue: "الثلاثاء", prof_wed: "الأربعاء", prof_thu: "الخميس", prof_fri: "الجمعة",
    prof_feat_1: "🔒 تم فحص السجل بنجاح", prof_feat_2: "📜 مرخص ومعتمد طبياً", prof_feat_3: "💳 تسعير شفاف وواضح", prof_feat_4: "🌟 محترف بتقييم عالي",
    prof_contact_h: "معلومات التواصل",

    // About Us & Team
    about_tag: "من نحن", about_h1: "عن NurseCare", about_p: "NurseCare هو مشروع جامعي للواجهة الأمامية يحاكي منصة خدمات التمريض المنزلي — مستوحى من Uber.",
    about_mission_h: "مهمتنا", about_mission_p: "جعل الرعاية التمريضية المنزلية الاحترافية متاحة للجميع، في أي وقت وأي مكان — بثقة وشفافية وتعاطف.",
    about_vision_h: "رؤيتنا", about_vision_p: "أن نصبح المنصة الرائدة للرعاية الصحية المنزلية في المنطقة، مما يُمكّن المرضى والممرضين على حدٍّ سواء.",
    team_tag: "الفريق", team_h2: "تعرف على الفريق", team_sub: "الطلبة المبدعون الذين بنوا NurseCare",
    team_role_dina: "مطور الواجهة الأمامية", team_bio_dina: "مسؤولة عن تطوير وتصميم هيكل الواجهة الأمامية للمشروع بالكامل.",
    team_role_ehsan: "مطور واجهة المستخدم (CSS)", team_bio_ehsan: "مطورة نظام الـ CSS، لوحات الألوان، والتنسيق البصري العام للموقع.",
    team_role_ziad: "مطور الباك إند والجافا سكريبت", team_bio_ziad: "مطور منطق الجافا سكريبت، ومسؤول ربط الواجهة الأمامية بالخوادم الخلفية، والمراجعة النهائية للموقع.",
    team_role_mostafa: "منسق قواعد البيانات", team_bio_mostafa: "منشئ ومنسق قواعد البيانات، ومسؤول تصميم الـ ERD الخاص بالنظام.",
    team_role_data: "باحث الذكاء الاصطناعي", team_bio_aya: "تستخدم تقنيات الذكاء الاصطناعي للبحث وجمع المعلومات، والمساعدة في تحليل البيانات ودعم تطوير المشروع.",
    values_tag: "ما يحركنا", values_h2: "قيمنا الأساسية", val_1_h: "الثقة", val_1_p: "كل ممرض على منصتنا موثّق ومرخّص وخضع لفحص الخلفية.",
    val_2_h: "الرحمة", val_2_p: "نعامل كل مريض بالدفء والرعاية التي يستحقها.", val_3_h: "السرعة", val_3_p: "احجز ممرضاً منزلياً في أقل من دقيقتين — سريع عندما يهم الأمر.",
    val_4_h: "الشفافية", val_4_p: "أسعار ثابتة وصادقة بدون رسوم خفية.", tech_tag: "مبني باستخدام", tech_h2: "التقنيات المستخدمة",
    tech_sub: "الواجهة الأمامية و الخلفية", tech_ai: "الذكاء الاصطناعي", tech_i18n: "مترجم اللغات i18n (عربي/إنجليزي)",
    about_proj_h: "مشروع أكاديمية طيبة", about_proj_p: "تم بناء هذا المشروع كتكليف جامعي لإظهار مهارات تطوير الواجهات الأمامية باستخدام التقنيات الحديثة. إنه نموذج أولي يعمل بكامل طاقته ومتصل بقاعدة بيانات MySQL.",

    // Request Service
    req_h1: "طلب خدمة تمريضية", req_sub: "أكمل التفاصيل أدناه لحجز زيارتك المنزلية", req_booking_h: "تفاصيل الحجز", req_patient_h: "معلومات المريض",
    req_name: "الاسم الكامل للمريض *", req_phone: "رقم الهاتف *", req_address: "عنوان المنزل *", req_city: "المدينة", req_state: "المحافظة", req_zip: "الرمز البريدي",
    req_schedule_h: "الجدول الزمني", req_date: "التاريخ المفضل *", req_time: "الوقت المفضل *", req_duration: "المدة (بالساعات) *", req_medical_h: "المعلومات الطبية",
    req_care_type: "الاحتياج الطبي الأساسي *", req_notes: "ملاحظات إضافية", req_notes_opt: "(اختياري)", req_agree: "أؤكد أن المعلومات المقدمة دقيقة",
    req_terms: "شروط الخدمة", req_btn: "تأكيد طلب الحجز", req_summary_h: "ملخص الحجز", req_hourly: "السعر بالساعة", req_duration_lbl: "المدة",
    req_platform: "رسوم المنصة", req_free: "مجاناً", req_total: "الإجمالي", req_cancel_note: "✅ إلغاء مجاني حتى 24 ساعة قبل الموعد", req_secure: "🔒 ممرض موثق وآمن",
    req_comm: "💬 تواصل مباشر مع الممرض", req_support: "📞 دعم على مدار الساعة", req_login_err: "يجب تسجيل الدخول أولاً لإتمام الحجز!",

    // Edit Profile Modal
   ep_title: "تعديل الملف الشخصي بالكامل",
    ep_first: "الاسم الأول",
    ep_last: "اسم العائلة",
    ep_email: "البريد الإلكتروني",
    ep_phone: "رقم الهاتف",
    ep_pass: "كلمة المرور الجديدة",
    ep_pass_ph: "اتركه فارغاً لعدم تغيير الباسوورد",
    ep_bio: "نبذة عنك (Bio)",
    ep_img: "الصورة الشخصية الحالية",
    ep_img_hint: "اختر صورة جديدة لتغييرها",
    ep_album: "ألبوم الأعمال والشهادات",
    ep_album_hint: "يمكنك تحديد أكثر من صورة معاً",
    ep_save: "حفظ التعديلات",
    dash_logout_btn: "Log Out",
 dash_logout_btn: "تسجيل خروج",
confirm_logout: "هل أنت متأكد أنك تريد تسجيل الخروج؟",
ep_title_short: "تعديل الملف",
click_to_add: "اضغط<br>للإضافة",
no_upcoming_visits: "لا توجد زيارات قادمة حاليا",

    // Forgot Password Modal
    forgot_title: "استعادة كلمة المرور",
    forgot_sub: "أدخل بريدك الإلكتروني المسجل لدينا وكلمة المرور الجديدة التي تريدها.",
    forgot_email_lbl: "البريد الإلكتروني",
    forgot_new_pw_lbl: "كلمة المرور الجديدة",
    forgot_confirm_pw_lbl: "تأكيد كلمة المرور الجديدة",
    forgot_btn: "تغيير كلمة المرور",
  }
};

// ── Global Helper for inline scripts (Toasts) ────────────────────────
window.t = function(key) {
  const lang = localStorage.getItem('nc_lang') || 'en';
  return (translations[lang] && translations[lang][key]) ? translations[lang][key] : key;
};

// ── Detect saved language or default to English ──────────────────────
function getCurrentLang() {
  return localStorage.getItem('nc_lang') || 'en';
}

// ── Apply translations to every [data-i18n] element ─────────────────
function applyTranslations(lang) {
  const tDict = translations[lang];
  if (!tDict) return;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (tDict[key] !== undefined) {
      el.innerHTML = tDict[key];
    }
  });

  // Placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (tDict[key] !== undefined) el.placeholder = tDict[key];
  });

  // Update <html> dir and lang attribute
  document.documentElement.lang = lang;
  document.documentElement.dir  = lang === 'ar' ? 'rtl' : 'ltr';
  document.body.classList.toggle('rtl', lang === 'ar');

  // Flip Bootstrap float/text utilities for RTL
  if (lang === 'ar') {
    document.body.classList.add('rtl-active');
  } else {
    document.body.classList.remove('rtl-active');
  }
}

// السطر ده ضروري عشان صفحة الـ Search تعرف ترسم وتترجم من غير ما تختفي الداتا
window.translatePage = applyTranslations;

// ── Switch language and persist ──────────────────────────────────────
function switchLanguage(lang) {
  localStorage.setItem('nc_lang', lang);
  applyTranslations(lang);
  
  // trigger re-render of dynamic content
  if (typeof initNursesPage === 'function' && document.body.id === 'page-nurses') initNursesPage();
  if (typeof initSearchPage === 'function' && document.body.id === 'page-search') initSearchPage();
}

// ── Toggle helper (button calls this) ───────────────────────────────
function toggleLanguage() {
  const current = getCurrentLang();
  const next    = current === 'en' ? 'ar' : 'en';
  switchLanguage(next);
}

// ── Auto-run on page load ────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function () {
  applyTranslations(getCurrentLang());
});