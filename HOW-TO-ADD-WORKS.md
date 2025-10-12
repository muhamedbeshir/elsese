# 📸 دليل سريع: كيفية إضافة الأعمال السابقة

## الطريقة الأسرع والأسهل ⚡

### الخطوة 1️⃣: تحضير الصور والفيديوهات
1. اجمع صور أعمالك السابقة
2. ضعها في مجلد: `images/portfolio/`
3. سمّ الملفات بأسماء واضحة مثل:
   - `logo-design-1.jpg`
   - `social-media-post-1.jpg`
   - `video-project-1.mp4`

### الخطوة 2️⃣: تعديل ملف script.js

افتح ملف `script.js` وابحث عن السطر **155** تقريباً:

**قبل التعديل:**
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

**بعد التعديل:**
```javascript
portfolioManager.loadItems([
    {
        id: 1,
        type: 'image',
        src: 'images/portfolio/logo-design-1.jpg',
        title: 'تصميم شعار لشركة'
    },
    {
        id: 2,
        type: 'image',
        src: 'images/portfolio/social-media-post-1.jpg',
        title: 'بوست إعلاني'
    },
    {
        id: 3,
        type: 'video',
        src: 'images/portfolio/video-project-1.mp4',
        poster: 'images/portfolio/video-project-1-thumb.jpg',
        title: 'فيديو ترويجي'
    }
]);
```

### الخطوة 3️⃣: احفظ وجرّب
1. احفظ الملف
2. افتح `index.html` في المتصفح
3. اذهب لقسم "أعمال سابقة"
4. شاهد أعمالك! 🎉

---

## 💡 نصائح سريعة

### للصور:
✅ استخدم صور عالية الجودة (1920x1080)
✅ صيغ مقبولة: JPG, PNG, WEBP
✅ قلل حجم الصور على [TinyPNG.com](https://tinypng.com)

### للفيديوهات:
✅ صيغة MP4 هي الأفضل
✅ أضف صورة معاينة (poster) لكل فيديو
✅ الحجم المثالي: أقل من 50MB

---

## 📝 مثال كامل لإضافة 6 أعمال

```javascript
portfolioManager.loadItems([
    // عمل 1 - صورة
    {
        id: 1,
        type: 'image',
        src: 'images/portfolio/work1.jpg',
        title: 'تصميم شعار احترافي'
    },
    
    // عمل 2 - صورة
    {
        id: 2,
        type: 'image',
        src: 'images/portfolio/work2.jpg',
        title: 'بوست سوشيال ميديا'
    },
    
    // عمل 3 - فيديو
    {
        id: 3,
        type: 'video',
        src: 'images/portfolio/video1.mp4',
        poster: 'images/portfolio/video1-thumb.jpg',
        title: 'فيديو دعائي'
    },
    
    // عمل 4 - صورة
    {
        id: 4,
        type: 'image',
        src: 'images/portfolio/work3.jpg',
        title: 'تصميم منيو مطعم'
    },
    
    // عمل 5 - صورة
    {
        id: 5,
        type: 'image',
        src: 'images/portfolio/work4.jpg',
        title: 'تصميم كارت شخصي'
    },
    
    // عمل 6 - فيديو
    {
        id: 6,
        type: 'video',
        src: 'images/portfolio/video2.mp4',
        poster: 'images/portfolio/video2-thumb.jpg',
        title: 'مونتاج احترافي'
    }
]);
```

---

## 🔧 إضافة عمل جديد من Console

إذا كنت تريد إضافة عمل بسرعة للتجربة:

1. افتح الموقع في المتصفح
2. اضغط F12 لفتح Developer Tools
3. اذهب لتبويب Console
4. الصق هذا الكود:

```javascript
// إضافة صورة
window.portfolioManager.addItem({
    id: Date.now(), // ID تلقائي
    type: 'image',
    src: 'images/portfolio/your-image.jpg',
    title: 'اسم العمل'
});
```

---

## ❓ الأسئلة الشائعة

### س: كم عمل يمكنني إضافة؟
**ج:** عدد غير محدود! لكن يُنصح بـ 9-15 عمل للأداء الأفضل.

### س: هل يمكنني مزج الصور والفيديوهات؟
**ج:** نعم! يمكنك إضافة صور وفيديوهات معاً.

### س: كيف أحذف عمل؟
**ج:** ببساطة احذف الكود الخاص به من `portfolioManager.loadItems([...])`

### س: الصور لا تظهر، ماذا أفعل؟
**ج:** تأكد من:
- المسار صحيح: `images/portfolio/filename.jpg`
- اسم الملف صحيح تماماً (حساس لحالة الأحرف)
- الملف موجود في المجلد الصحيح

---

## 🎯 جاهز للبدء؟

1. ✅ ضع صورك في `images/portfolio/`
2. ✅ عدّل `script.js`
3. ✅ افتح `index.html`
4. ✅ استمتع بموقعك! 🎉

---

**مصطفي السيسي - Mohamed Beshir**
*We see you wherever you are* 👁️

