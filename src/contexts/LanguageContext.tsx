import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Language = 'en' | 'zh' | 'es' | 'fr' | 'de' | 'ja' | 'ko' | 'ar'

interface Translations {
  // Header
  nav: {
    products: string
    howItWorks: string
    about: string
    testimonials: string
    contact: string
  }
  // Hero
  hero: {
    title: string
    subtitle: string
    cta1: string
    cta2: string
  }
  // Common
  common: {
    learnMore: string
    getQuote: string
    contactUs: string
    freeSamples: string
  }
  // Footer
  footer: {
    company: string
    products: string
    support: string
    legal: string
  }
}

const translations: Record<Language, Translations> = {
  en: {
    nav: {
      products: 'Products',
      howItWorks: 'How It Works',
      about: 'About',
      testimonials: 'Testimonials',
      contact: 'Contact'
    },
    hero: {
      title: 'Advanced Fresh-Keeping Packaging Solutions',
      subtitle: 'Extend produce shelf life by 50-200%. FDA & EU certified. Trusted by 500+ businesses in 50+ countries.',
      cta1: 'Get Free Samples',
      cta2: 'Watch Video'
    },
    common: {
      learnMore: 'Learn More',
      getQuote: 'Get a Quote',
      contactUs: 'Contact Us',
      freeSamples: 'Free Samples'
    },
    footer: {
      company: 'Company',
      products: 'Products',
      support: 'Support',
      legal: 'Legal'
    }
  },
  zh: {
    nav: {
      products: '产品中心',
      howItWorks: '技术原理',
      about: '关于我们',
      testimonials: '客户案例',
      contact: '联系我们'
    },
    hero: {
      title: '先进保鲜包装解决方案',
      subtitle: '延长农产品保鲜期50-200%。FDA和欧盟认证。服务50+国家500+企业客户。',
      cta1: '免费样品',
      cta2: '观看视频'
    },
    common: {
      learnMore: '了解更多',
      getQuote: '获取报价',
      contactUs: '联系我们',
      freeSamples: '免费样品'
    },
    footer: {
      company: '公司',
      products: '产品',
      support: '支持',
      legal: '法律'
    }
  },
  es: {
    nav: {
      products: 'Productos',
      howItWorks: 'Cómo Funciona',
      about: 'Nosotros',
      testimonials: 'Testimonios',
      contact: 'Contacto'
    },
    hero: {
      title: 'Soluciones Avanzadas de Envasado para Frescura',
      subtitle: 'Extienda la vida útil de los productos 50-200%. Certificado por FDA y UE. Confiado por 500+ empresas en 50+ países.',
      cta1: 'Muestras Gratis',
      cta2: 'Ver Video'
    },
    common: {
      learnMore: 'Más Información',
      getQuote: 'Cotización',
      contactUs: 'Contáctenos',
      freeSamples: 'Muestras Gratuitas'
    },
    footer: {
      company: 'Empresa',
      products: 'Productos',
      support: 'Soporte',
      legal: 'Legal'
    }
  },
  fr: {
    nav: {
      products: 'Produits',
      howItWorks: 'Comment Ça Marche',
      about: 'À Propos',
      testimonials: 'Témoignages',
      contact: 'Contact'
    },
    hero: {
      title: 'Solutions Avancées d\'Emballage Fresh-Keeping',
      subtitle: 'Prolongez la durée de conservation de 50-200%. Certifié FDA et UE. Approuvé par 500+ entreprises dans 50+ pays.',
      cta1: 'Échantillons Gratuits',
      cta2: 'Voir Vidéo'
    },
    common: {
      learnMore: 'En Savoir Plus',
      getQuote: 'Devis',
      contactUs: 'Contactez-nous',
      freeSamples: 'Échantillons Gratuits'
    },
    footer: {
      company: 'Entreprise',
      products: 'Produits',
      support: 'Support',
      legal: 'Juridique'
    }
  },
  de: {
    nav: {
      products: 'Produkte',
      howItWorks: 'Wie Es Funktioniert',
      about: 'Über Uns',
      testimonials: 'Erfahrungsberichte',
      contact: 'Kontakt'
    },
    hero: {
      title: 'Fortschrittliche Frischhaltungsverpackungen',
      subtitle: 'Verlängern Sie die Haltbarkeit um 50-200%. FDA und EU zertifiziert. Vertraut von 500+ Unternehmen in 50+ Ländern.',
      cta1: 'Kostenlose Muster',
      cta2: 'Video Ansehen'
    },
    common: {
      learnMore: 'Mehr Erfahren',
      getQuote: 'Angebot',
      contactUs: 'Kontakt',
      freeSamples: 'Kostenlose Muster'
    },
    footer: {
      company: 'Unternehmen',
      products: 'Produkte',
      support: 'Support',
      legal: 'Rechtliches'
    }
  },
  ja: {
    nav: {
      products: '製品',
      howItWorks: '仕組み',
      about: '会社概要',
      testimonials: '事例',
      contact: 'お問い合わせ'
    },
    hero: {
      title: '先進的な鮮度保持包装ソリューション',
      subtitle: '農産物の鮮度期間を50-200%延長。FDA・EU認証。50カ国以上の500社 이상이導入。',
      cta1: '無料サンプル',
      cta2: '動画を見る'
    },
    common: {
      learnMore: '詳細を見る',
      getQuote: '見積もり',
      contactUs: 'お問い合わせ',
      freeSamples: '無料サンプル'
    },
    footer: {
      company: '会社情報',
      products: '製品',
      support: 'サポート',
      legal: '法的情報'
    }
  },
  ko: {
    nav: {
      products: '제품',
      howItWorks: '작동 원리',
      about: '회사 소개',
      testimonials: '고객 사례',
      contact: '문의'
    },
    hero: {
      title: '선도적 신선도 유지 포장 솔루션',
      subtitle: '농산물의 신선도 유지 기간을 50-200% 연장. FDA 및 EU 인증. 50개국 500개 이상 기업 신뢰.',
      cta1: '무료 샘플',
      cta2: '동영상 보기'
    },
    common: {
      learnMore: '자세히 보기',
      getQuote: '견적 요청',
      contactUs: '문의하기',
      freeSamples: '무료 샘플'
    },
    footer: {
      company: '회사',
      products: '제품',
      support: '지원',
      legal: '법적 고지'
    }
  },
  ar: {
    nav: {
      products: 'المنتجات',
      howItWorks: 'كيف يعمل',
      about: 'من نحن',
      testimonials: 'شهادات العملاء',
      contact: 'اتصل بنا'
    },
    hero: {
      title: 'حلول التغليف المتقدمة للحفاظ على freshness',
      subtitle: 'قم بتمديد shelf life بنسبة 50-200%. معتمد من FDA و EU. موثوق من قبل 500+ شركة في 50+ دولة.',
      cta1: 'عينات مجانية',
      cta2: 'شاهد الفيديو'
    },
    common: {
      learnMore: 'اعرف المزيد',
      getQuote: 'طلب عرض سعر',
      contactUs: 'اتصل بنا',
      freeSamples: 'عينات مجانية'
    },
    footer: {
      company: 'الشركة',
      products: 'المنتجات',
      support: 'الدعم',
      legal: 'قانوني'
    }
  }
}

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: Translations
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('epxfresh-language')
    return (saved as Language) || 'en'
  })

  useEffect(() => {
    localStorage.setItem('epxfresh-language', language)
    document.documentElement.lang = language
    // Set RTL for Arabic
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr'
  }, [language])

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}

export const languages: { code: Language; name: string; flag: string }[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'ko', name: '한국어', flag: '🇰🇷' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' }
]
