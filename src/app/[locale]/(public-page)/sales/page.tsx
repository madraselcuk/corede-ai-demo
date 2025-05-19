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
  const metaT = await getTranslations('meta.pages.salesAgreement')

  return {
    title: metaT('title') || 'Sales Agreement',
    description: metaT('description') || 'Sales Agreement',
  }
}
export default async function SalesPage() {
  const t = await getTranslations('pages.salesAgreement')

  // Bu kısımda normalde API'den HTML içeriği çekebilirsiniz
  const htmlContent = `
    <h1>Satış Koşulları</h1>
    <p>Son güncellenme: 1 Temmuz 2023</p>
    
    <h2>1. Genel Hükümler</h2>
    <p>Corede.AI tarafından sunulan hizmetleri satın alırken aşağıdaki satış koşullarını kabul etmiş sayılırsınız. Bu hükümler, sizinle Corede.AI arasındaki sözleşmeyi oluşturur.</p>
    
    <h2>2. Sipariş ve Ödeme</h2>
    <p>Siparişiniz, ödemenin onaylanmasının ardından işleme alınır. Ödeme işlemleri, güvenli ödeme sistemleri aracılığıyla gerçekleştirilir. Şirketimiz, kredi kartı bilgilerinizi saklamaz ve bu bilgiler güvenli ödeme hizmet sağlayıcıları tarafından korunur.</p>
    
    <h2>3. Fiyatlandırma ve Vergiler</h2>
    <p>Hizmetlerimize ait fiyatlar site üzerinde belirtilmiştir. Tüm fiyatlar Türk Lirası (TL) cinsindendir ve KDV dahildir. Uluslararası ödemelerde, ödeme kuru ve banka masrafları müşteriye aittir.</p>
    
    <h2>4. Hizmet Teslimi</h2>
    <p>Dijital hizmetlerimiz, ödemenin onaylanmasının ardından aşağıdaki sürelerde aktif hale getirilir:</p>
    <ul>
      <li>Standart abonelikler: 24 saat içinde</li>
      <li>Premium ve kurumsal paketler: 48 saat içinde</li>
      <li>Özel geliştirilmiş çözümler: Sözleşmede belirtilen süre içinde</li>
    </ul>
    
    <h2>5. Abonelik Şartları</h2>
    <p>Sürekli abonelik hizmetlerimiz için:</p>
    <ul>
      <li>Abonelikler, aksi belirtilmedikçe otomatik olarak yenilenir.</li>
      <li>Abonelik iptalleri, bir sonraki faturalandırma döngüsünden önce yapılmalıdır.</li>
      <li>İptal işlemleri, hesap sayfanızdaki "Abonelik Yönetimi" bölümünden gerçekleştirilebilir.</li>
    </ul>
    
    <h2>6. Kullanım Lisansı</h2>
    <p>Satın alınan hizmetler, yalnızca belirtilen kullanım koşulları dahilinde kullanılabilir. Hizmetlerin yeniden satılması, kiralanması veya üçüncü taraflara devri yasaktır.</p>
    
    <h2>7. Garanti ve Sorumluluğun Sınırlandırılması</h2>
    <p>Hizmetlerimiz "olduğu gibi" sunulmaktadır. Corede.AI, hizmetlerin kesintisiz ve hatasız olacağını garanti etmez. Hizmetlerimizden kaynaklanan hiçbir dolaylı, sonuç niteliğindeki veya arızi zarardan sorumlu olmayacağız.</p>
    
    <h2>8. Sözleşme Süresi ve Fesih</h2>
    <p>Bu sözleşme, hizmetin aktif olduğu süre boyunca geçerlidir. Taraflar, 30 gün önceden yazılı bildirimde bulunarak sözleşmeyi feshedebilir. Kullanım şartlarının ihlali durumunda, Corede.AI hizmeti derhal sonlandırma hakkına sahiptir.</p>
    
    <h2>9. Değişiklikler</h2>
    <p>Bu satış koşullarını herhangi bir zamanda değiştirme hakkını saklı tutarız. Değişiklikler web sitemizde yayınlandığı tarihten itibaren geçerli olacaktır.</p>
    
    <h2>10. İletişim</h2>
    <p>Satış koşullarımızla ilgili sorularınız için <a href="mailto:sales@corede.ai">sales@corede.ai</a> adresinden bize ulaşabilirsiniz.</p>
  `

  return (
    <main className=" mt-15 flex flex-col items-center min-h-screen py-12 bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-black text-gray-800 dark:text-white">
      <div className="w-full max-w-5xl px-4 mx-auto">
        <div className="mb-10 text-center">
          <h1 className="pb-4 text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500">
            {t('title') || 'Satış Koşulları'}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('description') || 'Corede.AI satış ve sözleşme koşulları'}
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
