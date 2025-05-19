import { useI18n } from '@/localization/hooks/useI18n'
import { Button } from '@/components/ui/co/button'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

interface SocialMediaLinksProps {
  facebook?: string
  instagram?: string
  linkedIn?: string
  x?: string
}

export const SocialMediaLinks = ({
  facebook,
  instagram,
  linkedIn,
  x,
}: SocialMediaLinksProps) => {
  const { t } = useI18n()
  const socialLinks = [
    {
      url: facebook,
      icon: FaFacebook,
      label: t('common:facebook'),
    },
    {
      url: instagram,
      icon: FaInstagram,
      label: t('common:instagram'),
    },
    {
      url: linkedIn,
      icon: FaLinkedin,
      label: t('common:linkedIn'),
    },
    {
      url: x,
      icon: FaTwitter,
      label: t('common:x'),
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
