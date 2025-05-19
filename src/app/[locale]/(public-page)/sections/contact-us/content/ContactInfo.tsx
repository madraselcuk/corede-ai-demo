import React from 'react'
import { CONTACT_INFO } from './constants'
import { EmailIcon, PhoneIcon, LocationIcon } from './icons'
import { useTranslations } from 'next-intl'

const ContactInfo = () => {
  const t = useTranslations('pages.contactUs.contactInfo')

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'email':
        return <EmailIcon />
      case 'phone':
        return <PhoneIcon />
      case 'location':
        return <LocationIcon />
      default:
        return null
    }
  }

  return (
    <>
      <ContactInfoItem
        icon={renderIcon(CONTACT_INFO.email.icon)}
        label={t('email.label')}
        value={t('email.value')}
        bgClass={CONTACT_INFO.email.bgClass}
        textClass={CONTACT_INFO.email.textClass}
      />

      <ContactInfoItem
        icon={renderIcon(CONTACT_INFO.phone.icon)}
        label={t('phone.label')}
        value={t('phone.value')}
        bgClass={CONTACT_INFO.phone.bgClass}
        textClass={CONTACT_INFO.phone.textClass}
      />

      <ContactInfoItem
        icon={renderIcon(CONTACT_INFO.address.icon)}
        label={t('address.label')}
        value={t('address.value')}
        bgClass={CONTACT_INFO.address.bgClass}
        textClass={CONTACT_INFO.address.textClass}
      />
    </>
  )
}

interface ContactInfoItemProps {
  icon: React.ReactNode
  label: string
  value: string
  bgClass: string
  textClass: string
}

const ContactInfoItem: React.FC<ContactInfoItemProps> = ({
  icon,
  label,
  value,
  bgClass,
  textClass,
}) => {
  return (
    <div className="bg-gray-100/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 shadow-xl transform transition-all hover:scale-105">
      <div className="flex items-start space-x-4">
        <div className={`${bgClass} rounded-xl p-3 text-white`}>
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">{label}</h3>
          <p className={`${textClass} transition`}>{value}</p>
        </div>
      </div>
    </div>
  )
}

export default ContactInfo
