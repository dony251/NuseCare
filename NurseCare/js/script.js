/* ============================================
   NurseCare - Main JavaScript (Universal Fixes)
   ============================================ */

// ==========================================
// 1. Toast Notification System
// ==========================================
function showToast(message) {
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    container.style.cssText = 'position:fixed;bottom:24px;right:24px;z-index:9999;';
    document.body.appendChild(container);
  }
  const toast = document.createElement('div');
  toast.className = 'bg-white border rounded shadow px-4 py-3 mb-2 d-flex align-items-center gap-3';
  toast.style.cssText = 'min-width:260px;animation:fadeIn .3s;';
  toast.innerHTML = `<span style="color:#14b8a6;font-size:1.3rem;">✓</span><span style="font-weight:600;color:#1e293b;">${message}</span>`;
  container.appendChild(toast);
  setTimeout(() => { toast.style.opacity = '0'; toast.style.transition = 'opacity .4s'; setTimeout(() => toast.remove(), 400); }, 3000);
}

// ============================================
// 2. Ultimate Dark Mode Fixer
// ============================================
function applyDarkModeCSSFixes() {
  if (document.getElementById('darkModeFixes')) return;
  const style = document.createElement('style');
  style.id = 'darkModeFixes';
  style.innerHTML = `
    [data-theme="dark"], [data-theme="dark"] body { background-color: #0f172a !important; color: #e2e8f0 !important; }
    [data-theme="dark"] .bg-white, [data-theme="dark"] .card, [data-theme="dark"] .bg-white-card, [data-theme="dark"] .navbar, [data-theme="dark"] footer, [data-theme="dark"] .alert-light { background-color: #1e293b !important; border-color: #334155 !important; }
    [data-theme="dark"] .text-dark { color: #f8fafc !important; }
    [data-theme="dark"] .text-muted { color: #94a3b8 !important; }
    [data-theme="dark"] .border, [data-theme="dark"] .border-bottom, [data-theme="dark"] .border-top, [data-theme="dark"] hr { border-color: #334155 !important; }
    [data-theme="dark"] .form-control, [data-theme="dark"] .form-select, [data-theme="dark"] textarea { background-color: #0f172a !important; border-color: #334155 !important; color: #f8fafc !important; }
    [data-theme="dark"] .form-control::placeholder { color: #64748b !important; }
    [data-theme="dark"] .badge.bg-light { background-color: #334155 !important; color: #e2e8f0 !important; border-color: #475569 !important; }
    [data-theme="dark"] .table { color: #e2e8f0 !important; }
    [data-theme="dark"] .table thead th { background-color: #0f172a !important; color: #94a3b8 !important; border-bottom: 1px solid #334155 !important; }
    [data-theme="dark"] .table td { border-bottom: 1px solid #334155 !important; }
    [data-theme="dark"] .table-hover tbody tr:hover td { background-color: #334155 !important; color: white !important;}
  `;
  document.head.appendChild(style);
}

(function initTheme() {
  applyDarkModeCSSFixes();
  const savedTheme = localStorage.getItem('nc_theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);

  window.addEventListener('DOMContentLoaded', () => {
    const oldButtons = document.querySelectorAll('#themeToggle, .theme-toggle');
    oldButtons.forEach(btn => btn.remove());
    const langBtn = document.getElementById('langBtn') || document.querySelector('.lang-btn');
    
    if (langBtn && !document.getElementById('smartThemeToggle')) {
      const themeBtn = document.createElement('button');
      themeBtn.id = 'smartThemeToggle';
      themeBtn.className = 'btn btn-outline-secondary d-flex align-items-center justify-content-center mx-2';
      themeBtn.style.cssText = 'width: 40px; height: 40px; border-radius: 8px; border: 1px solid #cbd5e1; padding: 0; background: transparent; font-size: 1.2rem; cursor: pointer;';
      themeBtn.title = "Toggle Dark Mode";
      themeBtn.innerHTML = savedTheme === 'dark' ? '☀️' : '🌙';
      
      themeBtn.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('nc_theme', newTheme);
        this.innerHTML = newTheme === 'dark' ? '☀️' : '🌙';
      });
      langBtn.parentNode.insertBefore(themeBtn, langBtn);
    }
  });
})();

// ==========================================
// 3. Smart Universal Header (الصورة والاسم)
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
  const activeUser = JSON.parse(localStorage.getItem('nc_active_user'));
  
  if (activeUser) {
    // بيمسك زراير تسجيل الدخول والإنشاء ويخفيهم في أي صفحة
    const loginBtns = document.querySelectorAll('a[href="login.html"], a[href="register.html"]');
    if (loginBtns.length > 0) {
      const parentContainer = loginBtns[0].parentNode;
      loginBtns.forEach(btn => btn.style.display = 'none');
      
      const dashLink = activeUser.account_type === 'nurse' ? 'nurse-dashboard.html' : 'dashboard.html';
      
      let displayName = activeUser.name || '';
      if(activeUser.first_name) {
          displayName = activeUser.first_name + ' ' + (activeUser.last_name || '');
      }
      
      let nameParts = displayName.trim().split(/\s+/).filter(n => n.length > 0);
      let initials = 'U';
      if (nameParts.length >= 2) {
          initials = (nameParts[0][0] + nameParts[1][0]).toUpperCase();
      } else if (displayName.length >= 2) {
          initials = displayName.substring(0, 2).toUpperCase();
      }

      // تحديد الصورة أو أول حرفين
      let dbImage = activeUser.profile_image || activeUser.img || '';
      let avatarDOM = '';
      
      if (dbImage && dbImage.trim() !== '' && !dbImage.includes('default-avatar') && dbImage !== 'null') {
          avatarDOM = `<img src="${dbImage}" alt="Profile" style="width:38px; height:38px; border-radius:50%; object-fit:cover; border:2px solid var(--accent); box-shadow: 0 2px 5px rgba(20, 184, 166, 0.3);">`;
      } else {
          avatarDOM = `<div style="width:38px; height:38px; background:var(--accent); color:white; border-radius:50%; display:flex; align-items:center; justify-content:center; font-weight:bold; font-size:1.1rem; box-shadow: 0 2px 5px rgba(20, 184, 166, 0.3); letter-spacing: 1px;">${initials}</div>`;
      }

      const currentLang = localStorage.getItem('nc_lang') || 'en';
      const logoutText = currentLang === 'ar' ? 'تسجيل خروج' : 'Log Out';

      // زرع القائمة الجديدة (لو مش مزروعة قبل كده)
      if(!document.getElementById('smartUserMenu')) {
          const userMenu = document.createElement('div');
          userMenu.id = 'smartUserMenu';
          userMenu.className = 'd-flex align-items-center gap-3 ms-2';
          userMenu.innerHTML = `
            <a href="${dashLink}" class="d-flex align-items-center gap-2 text-decoration-none" title="Go to Dashboard">
              ${avatarDOM}
              <span class="fw-bold text-primary d-none d-sm-inline-block">${displayName}</span>
            </a>
            <button onclick="logoutUser()" class="btn btn-sm btn-outline-danger fw-bold" style="border-radius:8px;" data-i18n="nav_logout">${logoutText}</button>
          `;
          parentContainer.appendChild(userMenu);
      }
    }
  }
});

window.logoutUser = function() {
  const currentLang = localStorage.getItem('nc_lang') || 'en';
  const msg = currentLang === 'ar' ? 'هل أنت متأكد أنك تريد تسجيل الخروج؟' : 'Are you sure you want to log out?';
  if(confirm(msg)) {
      localStorage.removeItem('nc_active_user');
      window.location.href = 'index.html';
  }

};

// ==========================================
// 🌟 NurseCare Smart Chatbot Logic
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
  const chatbotToggle = document.getElementById('chatbotToggle');
  const chatbotBox = document.getElementById('chatbotBox');
  const chatbotClose = document.getElementById('chatbotClose');
  const chatbotInput = document.getElementById('chatbotInput');
  const chatbotSend = document.getElementById('chatbotSend');
  const chatbotMessages = document.getElementById('chatbotMessages');

  if(!chatbotToggle) return;

  // فتح وقفل الشات
  chatbotToggle.addEventListener('click', () => {
    chatbotBox.classList.toggle('d-none');
    if(!chatbotBox.classList.contains('d-none')) {
      chatbotInput.focus();
    }
  });

  chatbotClose.addEventListener('click', () => {
    chatbotBox.classList.add('d-none');
  });

  // دالة إضافة رسالة للشاشة
  function addMessage(text, sender) {
    const msgDiv = document.createElement('div');
    msgDiv.className = `chat-msg ${sender}`;
    msgDiv.innerHTML = text;
    chatbotMessages.appendChild(msgDiv);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight; // النزول لأسفل الشات تلقائياً
  }

  // عقل البوت (الردود المبرمجة)
  function getBotResponse(userText) {
    const text = userText.toLowerCase();
    
    if (text.includes('حجز') || text.includes('احجز') || text.includes('book')) {
      return 'لحجز ممرض، يمكنك التوجه إلى صفحة <a href="nurses.html" class="text-primary fw-bold">البحث عن ممرضين</a> واختيار الممرض المناسب ثم الضغط على "احجز الآن".';
    } 
    else if (text.includes('سعر') || text.includes('اسعار') || text.includes('بكام') || text.includes('price')) {
      return 'تختلف أسعار التمريض حسب التخصص وخبرة الممرض. تبدأ الأسعار من 200 ج.م في الساعة. يمكنك تصفح الممرضين لرؤية أسعارهم الشفافة.';
    }
    else if (text.includes('تخصص') || text.includes('خدمات') || text.includes('specialty')) {
      return 'نحن نقدم خدمات: رعاية كبار السن، التعافي ما بعد الجراحة، رعاية الأطفال، والعناية بالأمراض المزمنة.';
    }
    else if (text.includes('حساب') || text.includes('تسجيل') || text.includes('register')) {
      return 'يمكنك إنشاء حساب كمريض لطلب الرعاية، أو كممرض لتقديم خدماتك، من خلال صفحة <a href="register.html" class="text-primary fw-bold">إنشاء حساب</a>.';
    }
    else if (text.includes('شكرا') || text.includes('يعطيك العافية') || text.includes('thanks')) {
      return 'العفو! أنا هنا دائماً لمساعدتك. نتمنى لك دوام الصحة والعافية 💙';
    }
    else if (text.includes('سلام') || text.includes('مرحبا') || text.includes('اهلا')) {
      return 'أهلاً بك! كيف يمكنني إفادتك بخصوص خدمات التمريض المنزلي؟';
    }
    else {
      return 'عذراً، لم أفهم سؤالك بالكامل. يمكنك سؤالي عن: كيفية الحجز، الأسعار، التخصصات، أو كيفية إنشاء حساب.';
    }
  }

  // إرسال الرسالة
  function handleSend() {
    const userText = chatbotInput.value.trim();
    if (userText === '') return;

    // إضافة رسالة المستخدم
    addMessage(userText, 'user');
    chatbotInput.value = '';

    // إظهار علامة التحميل (تأخير مصطنع لواقعية الرد)
    const typingId = 'typing-' + Date.now();
    const typingMsg = document.createElement('div');
    typingMsg.className = `chat-msg bot text-muted`;
    typingMsg.id = typingId;
    typingMsg.innerHTML = '<i>يكتب...</i>';
    chatbotMessages.appendChild(typingMsg);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;

    // الرد بعد ثانية
    setTimeout(() => {
      document.getElementById(typingId).remove();
      const botResponse = getBotResponse(userText);
      addMessage(botResponse, 'bot');
    }, 1000);
  }

  chatbotSend.addEventListener('click', handleSend);
  chatbotInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') handleSend();
  });
});

// ==========================================
// 4. Global Smart Chatbot Injection & Logic
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
  // التأكد إن الشات مش موجود عشان ميتكررش
  if (document.getElementById('nc-chatbot-widget')) return;

  // 1. بناء الهيكل (HTML) بتاع الشات وحقنه في الصفحة
  const chatbotHTML = `
    <div id="nc-chatbot-box" class="nc-chatbot-box">
      <div class="nc-chatbot-header">
        <div class="d-flex align-items-center gap-3">
          <span style="font-size:2rem; line-height:1; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2));">🤖</span>
          <div>
            <h6 class="mb-0 fw-bold" style="font-family:'Outfit', 'Cairo', sans-serif; font-size:1.1rem;">NurseCare Bot</h6>
            <small style="color:#dbeafe; font-weight:600; font-size:0.75rem;">متصل الآن 🟢</small>
          </div>
        </div>
        <button id="nc-chatbot-close" style="background:transparent; border:none; color:white; font-size:1.8rem; cursor:pointer; line-height:1; transition:transform 0.2s;" onmouseover="this.style.transform='scale(1.2)'" onmouseout="this.style.transform='scale(1)'">&times;</button>
      </div>
      <div id="nc-chatbot-messages" class="nc-chatbot-messages">
        <div class="nc-msg bot">مرحباً بك في NurseCare! 👋<br>أنا مساعدك الذكي، كيف يمكنني إفادتك اليوم؟ (مثال: حجز، أسعار، تخصصات)</div>
      </div>
      <div class="nc-chatbot-input">
        <input type="text" id="nc-chatbot-input-field" placeholder="اكتب رسالتك هنا...">
        <button id="nc-chatbot-send">إرسال</button>
      </div>
    </div>
    <button id="nc-chatbot-toggle" class="nc-chatbot-toggle">
      <span style="font-size:1.6rem; line-height:1;">💬</span>
      <span style="font-family:'Outfit', sans-serif; letter-spacing:0.5px;">Chat Bot</span>
    </button>
  `;

  const widgetContainer = document.createElement('div');
  widgetContainer.id = 'nc-chatbot-widget';
  widgetContainer.innerHTML = chatbotHTML;
  document.body.appendChild(widgetContainer); // رمي الشات في الصفحة

  // 2. برمجة تشغيل الشات
  const toggleBtn = document.getElementById('nc-chatbot-toggle');
  const closeBtn = document.getElementById('nc-chatbot-close');
  const chatBox = document.getElementById('nc-chatbot-box');
  const inputField = document.getElementById('nc-chatbot-input-field');
  const sendBtn = document.getElementById('nc-chatbot-send');
  const msgContainer = document.getElementById('nc-chatbot-messages');

  toggleBtn.addEventListener('click', () => {
    chatBox.classList.toggle('active');
    if(chatBox.classList.contains('active')) {
        setTimeout(() => inputField.focus(), 300);
    }
  });

  closeBtn.addEventListener('click', () => {
    chatBox.classList.remove('active');
  });

  function addMsg(text, sender) {
    const div = document.createElement('div');
    div.className = 'nc-msg ' + sender;
    div.innerHTML = text;
    msgContainer.appendChild(div);
    msgContainer.scrollTop = msgContainer.scrollHeight;
  }

  function botReply(userText) {
    const t = userText.toLowerCase();
    if (t.includes('حجز') || t.includes('احجز') || t.includes('book')) return 'لحجز ممرض، تفضل بزيارة صفحة <a href="nurses.html" style="color:var(--primary); font-weight:bold;">ابحث عن ممرض</a> واضغط "احجز الآن" بجوار الممرض المناسب.';
    if (t.includes('سعر') || t.includes('اسعار') || t.includes('بكام') || t.includes('تكلفة')) return 'أسعار التمريض تتفاوت حسب خبرة الممرض وتخصصه، ولكنها تبدأ غالباً من 200 ج.م للساعة. جميع الأسعار معلنة بشفافية تامة.';
    if (t.includes('تخصص') || t.includes('خدمات') || t.includes('ممرضين')) return 'نحن نوفر نخبة من الممرضين المتخصصين في: رعاية كبار السن، التعافي ما بعد الجراحة، رعاية الأطفال، والأمراض المزمنة.';
    if (t.includes('حساب') || t.includes('تسجيل')) return 'يسعدنا انضمامك! اضغط على <a href="register.html" style="color:var(--primary); font-weight:bold;">إنشاء حساب</a> في الأعلى للبدء.';
    if (t.includes('سلام') || t.includes('مرحبا') || t.includes('اهلا') || t.includes('hi')) return 'أهلاً بك يا فندم في NurseCare! تفضل، كيف يمكنني مساعدتك؟';
    if (t.includes('شكرا') || t.includes('يعطيك العافية') || t.includes('thanks')) return 'العفو! نتمنى لك ولأحبابك دوام الصحة والعافية 💙';
    return 'عذراً، لم أتمكن من فهم طلبك بالكامل. يمكنك سؤالي عن: كيفية الحجز، الأسعار، أو التخصصات المتاحة.';
  }

  function handleSend() {
    const val = inputField.value.trim();
    if (!val) return;
    
    addMsg(val, 'user');
    inputField.value = '';
    
    const typingDiv = document.createElement('div');
    typingDiv.className = 'nc-msg bot text-muted small';
    typingDiv.innerHTML = '<span style="font-size:1.2rem; line-height:1;">✍️</span> يكتب...';
    msgContainer.appendChild(typingDiv);
    msgContainer.scrollTop = msgContainer.scrollHeight;

    setTimeout(() => {
      typingDiv.remove();
      addMsg(botReply(val), 'bot');
    }, 1000);
  }

  sendBtn.addEventListener('click', handleSend);
  inputField.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleSend();
  });
});