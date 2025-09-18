// Translation data
const translations = {
  ko: {
    nav: {
      home: '홈',
      about: '소개',
      experience: '경력',
      education: '학력',
      skills: '기술',
      contact: '연락처'
    },
    hero: {
      greeting: '안녕하세요, 저는',
      subtitle: '재료공학 전공 → AI 전문가로의 전환',
      description: '반도체 산업에서의 실무 경험을 바탕으로 AI 기술을 학습하며 재료 정보학 분야로 전환하고 있습니다.',
      cta: '더 알아보기',
      contact: '연락하기'
    },
    about: {
      title: '소개',
      description: '재료공학 학사 학위를 취득한 후 반도체 산업에서 2년 9개월의 실무 경험을 쌓았습니다. 현재 MS AI School에서 AI 및 머신러닝 기술을 학습하며 재료 정보학(Material Informatics) 분야로의 전환을 준비하고 있습니다.',
      experience: '반도체 산업 경험',
      transition: '기술 전환 중',
      background: '전공 배경'
    },
    experience: {
      title: '경력',
      current: {
        title: 'MS AI School',
        status: '수강 중',
        description: 'AI 및 머신러닝 기술을 학습하며 재료 정보학 분야로의 전환을 준비하고 있습니다.'
      },
      process: {
        title: '공정 설계 엔지니어',
        duration: '9개월',
        company: '반도체 업체',
        description: '반도체 제조 공정 설계 및 최적화 업무를 담당했습니다.'
      },
      etch: {
        title: 'Etch 공정개발 엔지니어',
        duration: '2년',
        company: '반도체 장비 업체',
        description: '반도체 Etch 공정 개발 및 개선 업무를 수행했습니다.'
      }
    },
    education: {
      title: '학력',
      bachelor: {
        degree: '재료공학 학사',
        school: '성균관대학교',
        status: '졸업'
      },
      ai: {
        degree: 'MS AI School',
        status: '수강 중'
      }
    },
    skills: {
      title: '기술',
      technical: '기술 스킬',
      languages: '언어',
      materials: '재료과학',
      semiconductor: '반도체 공정',
      ai: 'AI/머신러닝',
      korean: '한국어',
      english: '영어',
      native: '모국어',
      fluent: '유창함'
    },
    projects: {
      title: '프로젝트',
      coming: '프로젝트를 준비 중입니다...'
    },
    contact: {
      title: '연락처',
      'get-in-touch': '연락해주세요',
      description: '새로운 기회나 협업에 대해 언제든 연락 주세요!',
      email: '이메일',
      name: '이름',
      'email-label': '이메일',
      message: '메시지',
      send: '메시지 보내기'
    },
    footer: {
      copyright: '© 2024 김재민. 모든 권리 보유.'
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      experience: 'Experience',
      education: 'Education',
      skills: 'Skills',
      contact: 'Contact'
    },
    hero: {
      greeting: 'Hello, I am',
      subtitle: 'Materials Engineer → AI Specialist Transition',
      description: 'Building on my hands-on experience in the semiconductor industry, I am learning AI technologies and transitioning into the field of Material Informatics.',
      cta: 'Learn More',
      contact: 'Get in Touch'
    },
    about: {
      title: 'About',
      description: 'Materials engineering graduate with 2 years and 9 months of hands-on experience in the semiconductor industry. Currently studying AI and machine learning at MS AI School, preparing for a transition into Material Informatics.',
      experience: 'Semiconductor Experience',
      transition: 'Tech Transition',
      background: 'Academic Background'
    },
    experience: {
      title: 'Experience',
      current: {
        title: 'MS AI School',
        status: 'Currently Enrolled',
        description: 'Learning AI and machine learning technologies while preparing for a transition into Material Informatics.'
      },
      process: {
        title: 'Process Design Engineer',
        duration: '9 months',
        company: 'Semiconductor Company',
        description: 'Responsible for semiconductor manufacturing process design and optimization.'
      },
      etch: {
        title: 'Etch Process Development Engineer',
        duration: '2 years',
        company: 'Semiconductor Equipment Company',
        description: 'Developed and improved semiconductor etch processes.'
      }
    },
    education: {
      title: 'Education',
      bachelor: {
        degree: 'Bachelor of Materials Engineering',
        school: 'Sungkyunkwan University',
        status: 'Graduated'
      },
      ai: {
        degree: 'MS AI School',
        status: 'Currently Enrolled'
      }
    },
    skills: {
      title: 'Skills',
      technical: 'Technical Skills',
      languages: 'Languages',
      materials: 'Materials Science',
      semiconductor: 'Semiconductor Processes',
      ai: 'AI/Machine Learning',
      korean: 'Korean',
      english: 'English',
      native: 'Native',
      fluent: 'Fluent'
    },
    projects: {
      title: 'Projects',
      coming: 'Projects coming soon...'
    },
    contact: {
      title: 'Contact',
      'get-in-touch': 'Get in Touch',
      description: 'Feel free to reach out for new opportunities or collaborations!',
      email: 'Email',
      name: 'Name',
      'email-label': 'Email',
      message: 'Message',
      send: 'Send Message'
    },
    footer: {
      copyright: '© 2024 Jaemin Kim. All rights reserved.'
    }
  }
};

// Global variables
let currentLanguage = 'ko';

// Utility function to get nested translation
function getNestedTranslation(obj, key) {
  return key.split('.').reduce((o, i) => o ? o[i] : null, obj);
}

// Update language function
function updateLanguage() {
  const elements = document.querySelectorAll('[data-i18n]');
  
  elements.forEach(element => {
    const key = element.getAttribute('data-i18n');
    const translation = getNestedTranslation(translations[currentLanguage], key);
    
    if (translation) {
      element.textContent = translation;
    }
  });
}

// Language toggle function
function setupLanguageToggle() {
  const langToggle = document.getElementById('langToggle');
  const langText = document.getElementById('langText');

  if (langToggle && langText) {
    langToggle.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Toggle language
      currentLanguage = currentLanguage === 'ko' ? 'en' : 'ko';
      
      // Update all text
      updateLanguage();
      
      // Update button text
      langText.textContent = currentLanguage === 'ko' ? 'EN' : '한글';
      
      // Update HTML lang attribute
      document.documentElement.lang = currentLanguage;
    });
  }
}

// Smooth scrolling function
function setupSmoothScrolling() {
  // Get all navigation links
  const navLinks = document.querySelectorAll('a[href^="#"]');
  
  navLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        const header = document.querySelector('.header');
        const headerHeight = header ? header.offsetHeight : 80;
        const targetPosition = targetElement.offsetTop - headerHeight - 20;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// Show notification function
function showNotification(message, type) {
  // Remove existing notification
  const existing = document.querySelector('.notification');
  if (existing) {
    existing.remove();
  }
  
  // Create notification
  const notification = document.createElement('div');
  notification.className = 'notification';
  notification.textContent = message;
  
  // Set styles based on type
  let backgroundColor;
  switch(type) {
    case 'success':
      backgroundColor = '#10b981';
      break;
    case 'error':
      backgroundColor = '#ef4444';
      break;
    default:
      backgroundColor = '#3b82f6';
  }
  
  notification.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    left: 20px;
    max-width: 400px;
    margin: 0 auto;
    padding: 16px 20px;
    background-color: ${backgroundColor};
    color: white;
    border-radius: 8px;
    font-weight: 500;
    z-index: 10000;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    transform: translateY(-20px);
    opacity: 0;
    transition: all 0.3s ease;
  `;
  
  document.body.appendChild(notification);
  
  // Animate in
  setTimeout(function() {
    notification.style.transform = 'translateY(0)';
    notification.style.opacity = '1';
  }, 10);
  
  // Auto remove after 4 seconds
  setTimeout(function() {
    notification.style.transform = 'translateY(-20px)';
    notification.style.opacity = '0';
    setTimeout(function() {
      if (notification.parentNode) {
        notification.remove();
      }
    }, 300);
  }, 4000);
}

// Email validation function
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
}

// Contact form setup
function setupContactForm() {
  const contactForm = document.querySelector('.contact__form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const formData = new FormData(contactForm);
      const name = formData.get('name');
      const email = formData.get('email');
      const message = formData.get('message');
      
      // Validation
      if (!name || !name.trim()) {
        showNotification(
          currentLanguage === 'ko' ? '이름을 입력해주세요.' : 'Please enter your name.',
          'error'
        );
        return;
      }
      
      if (!email || !email.trim()) {
        showNotification(
          currentLanguage === 'ko' ? '이메일을 입력해주세요.' : 'Please enter your email.',
          'error'
        );
        return;
      }
      
      if (!isValidEmail(email)) {
        showNotification(
          currentLanguage === 'ko' ? '올바른 이메일 주소를 입력해주세요.' : 'Please enter a valid email address.',
          'error'
        );
        return;
      }
      
      if (!message || !message.trim()) {
        showNotification(
          currentLanguage === 'ko' ? '메시지를 입력해주세요.' : 'Please enter your message.',
          'error'
        );
        return;
      }
      
      // Success
      showNotification(
        currentLanguage === 'ko' ? '메시지가 전송되었습니다!' : 'Message sent successfully!',
        'success'
      );
      
      contactForm.reset();
    });
  }
}

// Scroll animations setup
function setupScrollAnimations() {
  // Header background on scroll
  window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    const scrollY = window.scrollY;
    
    if (header) {
      if (scrollY > 50) {
        header.style.background = 'rgba(var(--color-background), 0.98)';
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
      } else {
        header.style.background = 'rgba(var(--color-background), 0.95)';
        header.style.boxShadow = 'none';
      }
    }
  });

  // Skill bar animations
  const observerOptions = {
    threshold: 0.3,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        const progressBars = entry.target.querySelectorAll('.skill__progress');
        progressBars.forEach(function(bar, index) {
          setTimeout(function() {
            bar.style.animation = 'none';
            bar.offsetHeight; // Trigger reflow
            bar.style.animation = 'progressLoad 1.5s ease-out forwards';
          }, index * 200);
        });
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  const skillsSection = document.querySelector('.skills');
  if (skillsSection) {
    observer.observe(skillsSection);
  }
}

// Button ripple effect
function setupRippleEffect() {
  const buttons = document.querySelectorAll('.btn');
  
  buttons.forEach(function(button) {
    button.addEventListener('click', function(e) {
      const ripple = document.createElement('span');
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      
      ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        pointer-events: none;
        transform: scale(0);
        animation: ripple 0.6s ease-out;
      `;
      
      this.style.position = 'relative';
      this.style.overflow = 'hidden';
      this.appendChild(ripple);
      
      setTimeout(function() {
        if (ripple.parentNode) {
          ripple.remove();
        }
      }, 600);
    });
  });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  setupLanguageToggle();
  setupSmoothScrolling();
  setupContactForm();
  setupScrollAnimations();
  setupRippleEffect();
  updateLanguage(); // Initial language setup
});

// Add CSS for ripple animation
const style = document.createElement('style');
style.textContent = `
  @keyframes ripple {
    to {
      transform: scale(2);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);