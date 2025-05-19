import React from 'react'
import { Metadata } from 'next/types'
import { getTranslations } from 'next-intl/server'

type Props = {
  params: Promise<{ locale: 'en' | 'tr' | 'de' }>
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  await params;
  const metaT = await getTranslations('meta.pages.privacyPolicy')

  return {
    title: metaT('title') || 'Privacy Policy',
    description: metaT('description') || 'Privacy Policy',
  }
}

export default async function PrivacyPage() {
  const t = await getTranslations('pages.privacyPolicy')

  // Bu kısımda normalde API'den HTML içeriği çekebilirsiniz
  const htmlContent = `
    <h1>Gizlilik Politikası</h1>
    <p>Son güncellenme: 1 Temmuz 2023</p>
    
    <h2>1. Giriş</h2>
    <p>Corede.AI olarak, gizliliğinize saygı duyuyor ve kişisel verilerinizin korunmasına önem veriyoruz. Bu gizlilik politikası, hizmetlerimizi kullanırken topladığımız bilgileri ve bu bilgileri nasıl kullandığımızı açıklamaktadır.</p>
    
    <h2>2. Toplanan Bilgiler</h2>
    <p>Hizmetlerimizi kullanırken aşağıdaki bilgileri toplayabiliriz:</p>
    <ul>
      <li>İsim, e-posta adresi, telefon numarası gibi kişisel bilgiler</li>
      <li>Kullanım verileri (ziyaret ettiğiniz sayfalar, tıkladığınız bağlantılar, vb.)</li>
      <li>Cihaz bilgileri (IP adresi, tarayıcı türü, vb.)</li>
    </ul>
    
    <h2>3. Bilgilerin Kullanımı</h2>
    <p>Topladığımız bilgileri aşağıdaki amaçlarla kullanabiliriz:</p>
    <ul>
      <li>Hizmetlerimizi sunmak ve geliştirmek</li>
      <li>Müşteri desteği sağlamak</li>
      <li>Güvenlik ve dolandırıcılık önleme</li>
      <li>Pazarlama ve tanıtım faaliyetleri (izniniz olması durumunda)</li>
    </ul>
    
    <h2>4. Bilgi Paylaşımı</h2>
    <p>Kişisel bilgilerinizi, yasal zorunluluklar dışında, izniniz olmadan üçüncü taraflarla paylaşmayız. Hizmet sağlayıcılarımıza veri işleme amacıyla bilgilerinizi aktarabiliriz, ancak bu durumda bu sağlayıcılar verilerinizi korumakla yükümlüdür.</p>
    
    <h2>5. Çerezler ve Takip Teknolojileri</h2>
    <p>Web sitemizde çerezler ve benzer takip teknolojileri kullanabiliriz. Bu teknolojiler, kullanıcı deneyimini iyileştirmek ve site kullanımını analiz etmek için kullanılır.</p>
    
    <h2>6. Veri Güvenliği</h2>
    <p>Kişisel verilerinizin güvenliğini sağlamak için gerekli teknik ve idari önlemleri alıyoruz. Ancak, hiçbir internet iletimi veya elektronik depolama yöntemi %100 güvenli değildir.</p>
    
    <h2>7. Değişiklikler</h2>
    <p>Bu gizlilik politikasını herhangi bir zamanda değiştirme hakkını saklı tutarız. Değişiklikler web sitemizde yayınlandığı tarihten itibaren geçerli olacaktır.</p>
    
    <h2>8. İletişim</h2>
    <p>Gizlilik politikamızla ilgili sorularınız için <a href="mailto:privacy@corede.ai">privacy@corede.ai</a> adresinden bize ulaşabilirsiniz.</p>
  `;

  return (
    <main className=" mt-15 flex flex-col items-center min-h-screen py-12 bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-black text-gray-800 dark:text-white">
      <div className="w-full max-w-5xl px-4 mx-auto">
        <div className="mb-10 text-center">
          <h1 className="pb-4 text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500">
            {t('title')}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('description')}
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl dark:shadow-2xl p-8 mb-12 border border-gray-200 dark:border-gray-700">
          <div 
            className="prose prose-lg dark:prose-invert max-w-none" 
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </div>
      </div>
    </main>
  )
}
