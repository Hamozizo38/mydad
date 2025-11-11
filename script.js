// إنشاء الجسيمات المتساقطة
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 70;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        const left = Math.random() * 100;
        const animationDuration = 10 + Math.random() * 20;
        const animationDelay = Math.random() * 20;
        const size = 2 + Math.random() * 4;
        
        particle.style.left = `${left}vw`;
        particle.style.animationDuration = `${animationDuration}s`;
        particle.style.animationDelay = `${animationDelay}s`;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.opacity = 0.3 + Math.random() * 0.5;
        
        particlesContainer.appendChild(particle);
    }
}

// إنشاء القلوب الطافية
function createFloatingHearts() {
    const container = document.getElementById('floatingHearts');
    const heartCount = 15;
    
    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.classList.add('floating-heart');
        heart.innerHTML = '💖';
        
        const left = Math.random() * 100;
        const animationDuration = 15 + Math.random() * 20;
        const animationDelay = Math.random() * 20;
        const fontSize = 15 + Math.random() * 20;
        
        heart.style.left = `${left}vw`;
        heart.style.animationDuration = `${animationDuration}s`;
        heart.style.animationDelay = `${animationDelay}s`;
        heart.style.fontSize = `${fontSize}px`;
        
        container.appendChild(heart);
    }
}

// تأثيرات النقر على القلب
document.getElementById('mainHeart').addEventListener('click', function() {
    // تأثير الوميض
    this.style.animation = 'none';
    setTimeout(() => {
        this.style.animation = 'heartbeat 1.5s ease-in-out infinite';
    }, 10);
    
    // إضافة قلوب صغيرة تنبثق
    createBurstHearts(12);
    
    // إنشاء الومضات
    createSparkles(15);
    
    // تغيير لون القلب مؤقتًا
    const originalColor = this.style.color;
    this.style.color = '#ff9a9e';
    setTimeout(() => {
        this.style.color = originalColor;
    }, 300);
});

// إنشاء قلوب منبثقة
function createBurstHearts(count) {
    const container = document.querySelector('.heart-container');
    
    for (let i = 0; i < count; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '💖';
        heart.style.position = 'absolute';
        heart.style.color = '#fd79a8';
        heart.style.fontSize = (15 + Math.random() * 25) + 'px';
        heart.style.opacity = '0';
        heart.style.zIndex = '5';
        
        container.appendChild(heart);
        
        const angle = Math.random() * Math.PI * 2;
        const distance = 40 + Math.random() * 80;
        const duration = 0.5 + Math.random() * 1;
        
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;
        
        heart.style.transition = `all ${duration}s ease-out`;
        
        setTimeout(() => {
            heart.style.opacity = '1';
            heart.style.transform = `translate(${x}px, ${y}px) scale(0)`;
        }, 10);
        
        setTimeout(() => {
            heart.remove();
        }, duration * 1000);
    }
}

// إنشاء الومضات
function createSparkles(count) {
    const container = document.querySelector('.photo-frame');
    
    for (let i = 0; i < count; i++) {
        const sparkle = document.createElement('div');
        sparkle.classList.add('sparkle');
        
        const size = 4 + Math.random() * 5;
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        
        sparkle.style.width = `${size}px`;
        sparkle.style.height = `${size}px`;
        sparkle.style.left = `${left}%`;
        sparkle.style.top = `${top}%`;
        
        container.appendChild(sparkle);
        
        setTimeout(() => {
            sparkle.remove();
        }, 1000);
    }
}

// تشغيل التأثيرات عند تحميل الصفحة
window.addEventListener('load', function() {
    createParticles();
    createFloatingHearts();
    
    // إضافة تأثيرات عشوائية للرسائل
    const messages = document.querySelectorAll('.message');
    messages.forEach((message, index) => {
        const randomDelay = Math.random() * 500;
        message.style.animationDelay = `${parseFloat(message.style.animationDelay || '0') + randomDelay}ms`;
    });
});