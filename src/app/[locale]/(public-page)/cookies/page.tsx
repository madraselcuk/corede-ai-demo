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
  const metaT = await getTranslations('meta.pages.cookiesPolicy')
  return {
    title: metaT('title'),
    description: metaT('description'),
  }
}

export default async function CookiesPage() {
  const t = await getTranslations('pages.cookiesPolicy')

  // Bu kısımda normalde API'den HTML içeriği çekebilirsiniz
  const htmlContent = `
    <h1>Çerez Politikası</h1>
    <p>Son güncellenme: 1 Temmuz 2023</p>
    
    <h2>1. Çerezler Nedir?</h2>
    <p>Çerezler, web sitesini ziyaret ettiğinizde tarayıcınız tarafından cihazınıza kaydedilen küçük metin dosyalarıdır. Bu dosyalar, web sitesinin sizi tanımasına ve size daha iyi bir kullanıcı deneyimi sunmasına yardımcı olur.</p>
    
    <h2>2. Kullandığımız Çerez Türleri</h2>
    <p>Web sitemizde aşağıdaki türde çerezleri kullanmaktayız:</p>
    <ul>
      <li><strong>Zorunlu Çerezler:</strong> Web sitesinin düzgün çalışması için gerekli olan çerezlerdir.</li>
      <li><strong>Performans Çerezleri:</strong> Kullanıcıların sitemizi nasıl kullandığı hakkında bilgi toplar ve sitemizin performansını iyileştirmemize yardımcı olur.</li>
      <li><strong>İşlevsellik Çerezleri:</strong> Size daha kişiselleştirilmiş bir deneyim sunmak için kullanılan çerezlerdir.</li>
      <li><strong>Hedefleme/Reklam Çerezleri:</strong> İlgi alanlarınıza uygun reklamlar sunmak için kullanılan çerezlerdir.</li>
    </ul>
    
    <h2>3. Çerezlerin Kontrol Edilmesi</h2>
    <p>Çoğu web tarayıcısı, çerezleri kabul etmeye otomatik olarak ayarlanmıştır. Ancak, tarayıcı ayarlarınızı değiştirerek çerezleri reddedebilir veya sizi çerezler hakkında uyarabilirsiniz. Çerezleri devre dışı bırakmanız durumunda, web sitemizin bazı özellikleri düzgün çalışmayabilir.</p>
    
    <h2>4. Üçüncü Taraf Çerezleri</h2>
    <p>Web sitemizde, analiz ve reklamcılık hizmetleri sunan üçüncü taraflar tarafından sağlanan çerezler de bulunabilir. Bu üçüncü taraflar, kendi gizlilik politikalarına göre bilgilerinizi işleyebilir.</p>
    
    <h2>5. Çerez Tercihleri</h2>
    <p>Web sitemizi ilk ziyaret ettiğinizde, çerez kullanımına ilişkin bir bildirim alacaksınız. Bu bildirim üzerinden çerez tercihlerinizi ayarlayabilirsiniz.</p>
    
    <h2>6. Değişiklikler</h2>
    <p>Bu çerez politikasını herhangi bir zamanda değiştirme hakkını saklı tutarız. Değişiklikler web sitemizde yayınlandığı tarihten itibaren geçerli olacaktır.</p>
    
    <h2>7. İletişim</h2>
    <p>Çerez politikamızla ilgili sorularınız için <a href="mailto:cookies@corede.ai">cookies@corede.ai</a> adresinden bize ulaşabilirsiniz.</p>
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
