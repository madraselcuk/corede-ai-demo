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
  const metaT = await getTranslations('meta.pages.termsOfService')

  return {
    title: metaT('title') || 'Terms of Service',
    description: metaT('description') || 'Terms of Service',
  }
}
export default async function TermsPage() {
  const t = await getTranslations('pages.termsOfService')

  // Bu kısımda normalde API'den HTML içeriği çekebilirsiniz
  const htmlContent = `
    <h1>Kullanım Koşulları</h1>
    <p>Son güncellenme: 1 Temmuz 2023</p>
    
    <h2>1. Giriş</h2>
    <p>Corede.AI platformumuzu ("Hizmet") kullanırken bu kullanım koşullarına uymanız gerekmektedir. Bu koşullar, Corede.AI platformunda sunulan tüm hizmetler için geçerlidir.</p>
    
    <h2>2. Hesap Kaydı</h2>
    <p>Hizmetlerimizi kullanabilmek için, doğru ve eksiksiz bilgilerle bir hesap oluşturmanız gerekmektedir. Hesap güvenliğiniz sizin sorumluluğunuzdadır.</p>
    
    <h2>3. Fikri Mülkiyet</h2>
    <p>Platformumuzda yer alan tüm içerikler, Corede.AI'ya aittir ve telif hakları ile korunmaktadır. İçeriklerin izinsiz kullanımı yasaktır.</p>
    
    <h2>4. Hizmet Kullanım Kuralları</h2>
    <p>Hizmetlerimizi kullanırken aşağıdaki kurallara uymanız gerekmektedir:</p>
    <ul>
      <li>Yasalara uygun hareket edin</li>
      <li>Diğer kullanıcıların haklarına saygı gösterin</li>
      <li>Platformun güvenliğini tehlikeye atacak faaliyetlerde bulunmayın</li>
    </ul>
    
    <h2>5. Sorumluluk Sınırlaması</h2>
    <p>Corede.AI, platformda yaşanabilecek kesintiler veya hatalardan dolayı sorumlu tutulamaz. Hizmetlerimizi "olduğu gibi" sunmaktayız.</p>
    
    <h2>6. Değişiklikler</h2>
    <p>Bu kullanım koşullarını herhangi bir zamanda değiştirme hakkını saklı tutarız. Değişiklikler web sitesinde yayınlandığı tarihten itibaren geçerli olacaktır.</p>
    
    <h2>7. İletişim</h2>
    <p>Sorularınız için <a href="mailto:contact@corede.ai">contact@corede.ai</a> adresinden bize ulaşabilirsiniz.</p>
  `

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
