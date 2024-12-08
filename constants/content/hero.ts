import { HeroSection } from '@/types/content/pages'

export const HOME_HERO: HeroSection = {
  title: 'Wujudkan Ruang Impian Anda',
  subtitle: 'Kami hadir untuk membantu Anda menciptakan ruang yang tidak hanya indah, tetapi juga fungsional dan nyaman',
  backgroundImage: '/images/home/hero-bg.jpg',
  cta: {
    primary: {
      text: 'Mulai Konsultasi',
      href: '/consultation'
    },
    secondary: {
      text: 'Lihat Portfolio',
      href: '/portfolio'
    }
  }
}

export const SERVICES_HERO: HeroSection = {
  title: 'Layanan Desain Interior',
  subtitle: 'Solusi desain interior profesional untuk berbagai kebutuhan ruang Anda',
  backgroundImage: '/images/services/hero-bg.jpg',
  cta: {
    primary: {
      text: 'Konsultasi Gratis',
      href: '/consultation'
    }
  }
}

export const PORTFOLIO_HERO: HeroSection = {
  title: 'Portfolio Proyek',
  subtitle: 'Telusuri berbagai proyek yang telah kami selesaikan',
  backgroundImage: '/images/portfolio/hero-bg.jpg',
  cta: {
    primary: {
      text: 'Mulai Proyek',
      href: '/consultation'
    }
  }
}

export const CONTACT_HERO: HeroSection = {
  title: 'Hubungi Kami',
  subtitle: 'Tim kami siap membantu mewujudkan ruang impian Anda',
  backgroundImage: '/images/contact/hero-bg.jpg',
  cta: {
    primary: {
      text: 'Kirim Pesan',
      href: '#contact-form'
    }
  }
}

export const PARTNER_HERO: HeroSection = {
  title: 'Bergabung Sebagai Mitra',
  subtitle: 'Kembangkan bisnis Anda bersama SAV Interior',
  backgroundImage: '/images/partner/hero-bg.jpg',
  cta: {
    primary: {
      text: 'Daftar Sekarang',
      href: '#registration-form'
    },
    secondary: {
      text: 'Pelajari Lebih Lanjut',
      href: '#benefits'
    }
  }
}
