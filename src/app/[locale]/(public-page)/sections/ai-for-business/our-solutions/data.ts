export interface CourseCardData {
  title: string;
  contentHeaders: string;
  targetAudience: string;
  satisfactionRate: string;
  duration: string;
  backgroundImage: string;
}

export const courseCards: CourseCardData[] = [
  {
    title: 'AI 101: Liderler İçin Temel Kavramlar',
    contentHeaders: 'Yapay zekâ ekosistemi, iş etkisi, hızlı fırsat analizi',
    targetAudience: 'Üst yönetim, bölüm liderleri',
    satisfactionRate: '4.7 / 5',
    duration: '1/2 gün',
    backgroundImage: '/img/others/img-1.jpg'
  },
  {
    title: 'Veri Stratejisi Geliştirme',
    contentHeaders: 'Veri yönetimi, veri kalitesi, veri güvenliği',
    targetAudience: 'Veri ekipleri, IT yöneticileri',
    satisfactionRate: '4.8 / 5',
    duration: '1 gün',
    backgroundImage: '/img/others/img-3.jpg'
  },
  {
    title: 'Yapay Zeka Proje Yönetimi',
    contentHeaders: 'Proje planlama, risk değerlendirme, kaynak optimizasyonu',
    targetAudience: 'Proje yöneticileri, teknik liderler',
    satisfactionRate: '4.6 / 5',
    duration: '2 gün',
    backgroundImage: '/img/others/img-4.jpg'
  },
]

export const slides = [
  {
    key: 'slide-1',
    cards: [courseCards[0], courseCards[1], courseCards[2]],
  },
  {
    key: 'slide-2',
    cards: [courseCards[1], courseCards[2], courseCards[0]],
  },
  {
    key: 'slide-3',
    cards: [courseCards[2], courseCards[0], courseCards[1]],
  },
] 