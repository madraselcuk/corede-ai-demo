import { useI18n } from '@/localization/hooks/useI18n'
import { Button } from '@/components/ui/co/button'
import { MdEmail, MdSms, MdWeb } from 'react-icons/md'
import { BiNotification } from "react-icons/bi";
import { INotificationChannelData } from '@/@package/corede'

type NotificationChannelsProps = {
  [key in keyof INotificationChannelData]: string
}

export const NotificationChannels = ({
  email,
  sms,
  push,
  web,
}: NotificationChannelsProps) => {
  const { t } = useI18n()
  const socialLinks = [
    {
      url: email,
      icon: MdEmail,
      label: t('notification:email'),
    },
    {
      url: sms,
      icon: MdSms,
      label: t('notification:sms'),
    },
    {
      url: push,
      icon: BiNotification,
      label: t('notification:push'),
    },
    {
      url: web,
      icon: MdWeb,
      label: t('notification:web'),
    },
  ]

  return (
    <div className="flex gap-2">
      {socialLinks.map(
        ({ url, icon: Icon, label }) =>
          url && (
            <Button
              key={label}
              variant="ghost"
              size="icon"
              className="size-8"
              asChild
            >
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                title={label}
                onClick={(e) => e.stopPropagation()}
              >
                <Icon className="size-4" />
              </a>
            </Button>
          ),
      )}
    </div>
  )
}
