# موقع مصطفي السيسي - Mohamed Beshir Portfolio Website

موقع إلكتروني احترافي لعرض الخدمات والأعمال السابقة في مجال التصوير الفوتوغرافي، المونتاج، التصميم الجرافيكي، وإدارة وسائل التواصل الاجتماعي.

---

## 📋 المحتويات

- [نظرة عامة](#نظرة-عامة)
- [الميزات](#الميزات)
- [التثبيت](#التثبيت)
- [كيفية إضافة الأعمال السابقة](#كيفية-إضافة-الأعمال-السابقة)
- [تخصيص المحتوى](#تخصيص-المحتوى)
- [هيكل الملفات](#هيكل-الملفات)

---

## 🌟 نظرة عامة

موقع ويب متجاوب بالكامل مصمم بتقنيات HTML5, CSS3, و JavaScript مع تصميم عصري وأنيق يدعم اللغة العربية بشكل كامل.

---

## ✨ الميزات

- ✅ تصميم متجاوب (Responsive) على جميع الأجهزة
- ✅ دعم كامل للغة العربية واللغة الإنجليزية
- ✅ تأثيرات حركية (Animations) احترافية
- ✅ قائمة تنقل ذكية مع Smooth Scrolling
- ✅ نظام إدارة الأعمال السابقة (Portfolio Management)
- ✅ تصميم حديث بألوان متدرجة
- ✅ أيقونات وسائل التواصل الاجتماعي
- ✅ نموذج الاتصال مع معلومات التواصل

---

## 🚀 التثبيت

### الخطوة 1: تحميل الملفات
قم بتحميل جميع الملفات في مجلد واحد:
```
Canva/
├── index.html
├── style.css
├── script.js
├── README.md
└── images/
    ├── logo.svg
    ├── hero-logo.svg
    └── portfolio/ (سيتم إنشاؤه لاحقاً)
```

### الخطوة 2: فتح الموقع
- قم بفتح ملف `index.html` في أي متصفح ويب

---

## 📸 كيفية إضافة الأعمال السابقة

هناك **3 طرق** لإضافة أعمالك السابقة:

### الطريقة 1️⃣: استخدام JavaScript Console (للمطورين)

1. افتح Console في المتصفح (F12 → Console)
2. استخدم الأمر التالي:

```javascript
// إضافة صورة
window.portfolioManager.addItem({
    id: 1,
    type: 'image',
    src: 'images/portfolio/project1.jpg',
    title: 'اسم المشروع'
});

// إضافة فيديو
window.portfolioManager.addItem({
    id: 2,
    type: 'video',
    src: 'images/portfolio/video1.mp4',
    poster: 'images/portfolio/video1-poster.jpg',
    title: 'اسم الفيديو'
});
```

### الطريقة 2️⃣: تعديل ملف script.js (الطريقة الموصى بها)

1. افتح ملف `script.js`
2. ابحث عن السطر 155 تقريباً حيث يوجد:
```javascript
/*
portfolioManager.loadItems([
    {
        id: 1,
        type: 'image',
        src: 'images/portfolio/item1.jpg',
        title: 'عمل 1'
    }
]);
*/
```

3. قم بإزالة `/*` و `*/` وأضف أعمالك:
```javascript
portfolioManager.loadItems([
    {
        id: 1,
        type: 'image',
        src: 'images/portfolio/work1.jpg',
        title: 'تصميم شعار'
    },
    {
        id: 2,
        type: 'image',
        src: 'images/portfolio/work2.jpg',
        title: 'تصميم بوست'
    },
    {
        id: 3,
        type: 'video',
        src: 'images/portfolio/video1.mp4',
        poster: 'images/portfolio/video1-thumb.jpg',
        title: 'فيديو ترويجي'
    }
]);
```

### الطريقة 3️⃣: تعديل HTML مباشرة

افتح `index.html` وابحث عن القسم:
```html
<div class="portfolio-grid">
    <div class="portfolio-empty">
        ...
    </div>
</div>
```

واستبدله بـ:
```html
<div class="portfolio-grid">
    <!-- صورة -->
    <div class="portfolio-item">
        <img src="images/portfolio/work1.jpg" alt="عمل 1" loading="lazy">
    </div>
    
    <!-- فيديو -->
    <div class="portfolio-item">
        <video src="images/portfolio/video1.mp4" poster="images/portfolio/thumb1.jpg"></video>
        <div class="play-btn">▶</div>
    </div>
</div>
```

---

## 📁 تنظيم الصور والفيديوهات

### إنشاء مجلد الأعمال:
```
images/
└── portfolio/
    ├── work1.jpg
    ├── work2.jpg
    ├── work3.jpg
    ├── video1.mp4
    ├── video1-thumb.jpg
    └── ...
```

### نصائح للصور:
- ✅ استخدم صور بجودة عالية (1920x1080 على الأقل)
- ✅ احفظ الصور بصيغة JPG أو PNG
- ✅ قلل حجم الصور باستخدام أدوات مثل [TinyPNG](https://tinypng.com/)
- ✅ استخدم أسماء واضحة للملفات (work1.jpg, project-logo.png)

### نصائح للفيديوهات:
- ✅ استخدم صيغة MP4 للتوافق الأفضل
- ✅ أضف صورة معاينة (poster) لكل فيديو
- ✅ لا تستخدم فيديوهات كبيرة جداً (أقل من 50MB)

---

## 🎨 تخصيص المحتوى

### تغيير الألوان:
افتح `style.css` وعدّل المتغيرات في البداية:
```css
:root {
    --primary-bg: #0a1628;        /* لون الخلفية الأساسي */
    --accent-blue: #2196F3;       /* اللون الأزرق */
    --accent-cyan: #00BCD4;       /* اللون السماوي */
    --accent-green: #00E676;      /* اللون الأخضر */
}
```

### تغيير النصوص:
افتح `index.html` وابحث عن النص المطلوب وقم بتعديله مباشرة.

### تغيير معلومات التواصل:
في قسم `Contact` في `index.html`:
```html
<!-- رقم الهاتف -->
<a href="tel:01019824224">0101 982 4224</a>

<!-- العنوان -->
<p class="address">
    مدينة مبارك، بجوار اسناد المتميزة...
</p>
```

### تغيير روابط Social Media:
```html
<a href="رابط_الفيسبوك" class="social-icon">...</a>
<a href="رابط_الانستغرام" class="social-icon">...</a>
```

---

## 🎯 هيكل الملفات

```
Canva/
│
├── index.html          # الصفحة الرئيسية
├── style.css           # ملف التصميم
├── script.js           # ملف البرمجة
├── README.md           # ملف التعليمات
│
└── images/
    ├── logo.svg        # شعار الموقع
    ├── hero-logo.svg   # شعار القسم الرئيسي
    │
    └── portfolio/      # مجلد الأعمال السابقة
        ├── work1.jpg
        ├── work2.jpg
        └── video1.mp4
```

---

## 📱 الأقسام في الموقع

1. **الصفحة الرئيسية (Hero)** - العرض الترحيبي
2. **من نحن (About)** - نبذة عن الشركة
3. **خدماتنا (Services)** - 6 خدمات رئيسية
4. **الباقات (Packages)** - 5 باقات مختلفة
5. **أعمال سابقة (Portfolio)** - معرض الأعمال
6. **تواصل معنا (Contact)** - معلومات الاتصال

---

## 🛠️ التقنيات المستخدمة

- **HTML5** - هيكل الموقع
- **CSS3** - التصميم والتنسيق
- **JavaScript (ES6+)** - التفاعلية
- **SVG** - الأيقونات والرسوم
- **Google Fonts** - خط Cairo

---

## 💡 نصائح إضافية

### تحسين الأداء:
1. استخدم صور محسّنة (Optimized Images)
2. قلل حجم الفيديوهات
3. استخدم خاصية `loading="lazy"` للصور

### تحسين السيو (SEO):
1. أضف `alt` attributes للصور
2. أضف `meta tags` في `<head>`
3. استخدم أسماء ملفات واضحة

### الاستضافة:
يمكن رفع الموقع على:
- [GitHub Pages](https://pages.github.com/) (مجاني)
- [Netlify](https://www.netlify.com/) (مجاني)
- [Vercel](https://vercel.com/) (مجاني)
- أو أي استضافة ويب عادية

---

## 📞 الدعم

إذا واجهت أي مشكلة أو لديك أي استفسار:
- 📱 WhatsApp: 0101 982 4224
- 📞 Phone: 0 50 2353880

---

## 📝 ملاحظات مهمة

⚠️ **قبل نشر الموقع:**
1. تأكد من تغيير جميع معلومات التواصل
2. أضف أعمالك السابقة الحقيقية
3. راجع جميع النصوص والتأكد من صحتها
4. اختبر الموقع على أجهزة مختلفة
5. تأكد من أن جميع الروابط تعمل

---

## 📄 الترخيص

هذا الموقع مصمم خصيصاً لـ **مصطفي السيسي**.

---

## 🎉 استمتع بموقعك الجديد!

تم إنشاء هذا الموقع بكل حب واحترافية ❤️

**مصطفي السيسي - Mohamed Beshir**
*We see you wherever you are* 👁️

