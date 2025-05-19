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
  const metaT = await getTranslations('meta.pages.refundPolicy')

  return {
    title: metaT('title') || 'Refund Policy',
    description: metaT('description') || 'Refund Policy',
  }
}
export default async function RefundPage() {
  const t = await getTranslations('pages.refundPolicy')

  // Bu kısımda normalde API'den HTML içeriği çekebilirsiniz
  const htmlContent = `
    <h1>İade Politikası</h1>
    <p>Son güncellenme: 1 Temmuz 2023</p>
    
    <h2>1. İade Koşulları</h2>
    <p>Corede.AI olarak, müşteri memnuniyetini ön planda tutuyoruz. Hizmetlerimizle ilgili yaşadığınız sorunlar için aşağıdaki iade koşullarını sunmaktayız:</p>
    
    <h2>2. Dijital Hizmetler için İade Süreci</h2>
    <p>Dijital hizmetlerimiz için satın alma tarihinden itibaren 14 gün içinde iade talebinde bulunabilirsiniz. İade talebi, hizmetin kullanılmamış olması veya teknik sorunlar nedeniyle kullanılamaması durumunda değerlendirilecektir.</p>
    
    <h2>3. Abonelik Hizmetleri için İptal ve İade</h2>
    <p>Abonelik hizmetlerimiz için:</p>
    <ul>
      <li>Aylık abonelikler: Faturalandırma döngüsünün ilk 5 günü içinde iptal edilirse, kısmi iade yapılabilir.</li>
      <li>Yıllık abonelikler: İlk 30 gün içinde iptal edilirse, kullanılan süre düşülerek kısmi iade yapılabilir.</li>
      <li>Abonelik yenilemelerinden sonra yapılan iptallerde, faturanın oluşturulduğu tarihten itibaren 7 gün içinde talep edilmesi halinde iade değerlendirilebilir.</li>
    </ul>
    
    <h2>4. İade Talep Süreci</h2>
    <p>İade talebinde bulunmak için aşağıdaki adımları izleyebilirsiniz:</p>
    <ol>
      <li>Hesap sayfanızdaki "Destek" bölümüne gidin.</li>
      <li>"İade Talebi" formunu doldurun.</li>
      <li>Talebiniz için gerekli tüm bilgileri ve kanıtları sağlayın.</li>
      <li>Talebiniz 5 iş günü içinde değerlendirilecek ve size bilgi verilecektir.</li>
    </ol>
    
    <h2>5. İade Ödeme Yöntemi</h2>
    <p>İadeler, orijinal ödeme yönteminize yapılacaktır. İade işleminin bankanız veya kredi kartı sağlayıcınız tarafından işleme alınması 5-10 iş günü sürebilir.</p>
    
    <h2>6. İstisnalar</h2>
    <p>Aşağıdaki durumlarda iade talebi reddedilebilir:</p>
    <ul>
      <li>Hizmetin tamamen veya önemli ölçüde kullanılmış olması</li>
      <li>İade sürelerinin geçmiş olması</li>
      <li>Kullanım şartlarının ihlal edilmiş olması</li>
    </ul>
    
    <h2>7. Değişiklikler</h2>
    <p>Bu iade politikasını herhangi bir zamanda değiştirme hakkını saklı tutarız. Değişiklikler web sitemizde yayınlandığı tarihten itibaren geçerli olacaktır.</p>
    
    <h2>8. İletişim</h2>
    <p>İade politikamızla ilgili sorularınız için <a href="mailto:refunds@corede.ai">refunds@corede.ai</a> adresinden bize ulaşabilirsiniz.</p>
  `;

  return (
    <main className=" mt-15 flex flex-col items-center min-h-screen py-12 bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-black text-gray-800 dark:text-white">
      <div className="w-full max-w-5xl px-4 mx-auto">
        <div className="mb-10 text-center">
          <h1 className="pb-4 text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500">
            {t('title') || 'İade Politikası'}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('description') || 'Corede.AI iade ve iptal koşulları'}
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
