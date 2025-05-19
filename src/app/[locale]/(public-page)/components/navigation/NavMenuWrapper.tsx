'use client'

import { useTranslations, useLocale } from 'next-intl'
import Navigation from '../navigation/NavigationBar'
import {
  TbRobot,
  TbMicrophone,
  TbPhoto,
  TbSettings,
  TbUsers,
  TbChartLine,
  TbBrain,
  TbCode,
  TbNetwork,
} from 'react-icons/tb'

export default function NavMenuWrapper() {
  const t = useTranslations('navigation')
  const menuT = useTranslations('menu')
  const locale = useLocale()

  const createLocalizedHref = (path: string) => {
    // Path'ten baştaki slash'ı kaldır
    const cleanPath = path.startsWith('/') ? path.substring(1) : path
    // Locale ve temizlenmiş path'i birleştir
    return `/${locale}/${cleanPath}`
  }

  const navMenu = [
    {
      title: t('aiAgents'),
      value: 'ai-agents',
      href: createLocalizedHref('ai-agents'),
      megaMenu: {
        title: t('aiAgents'),
        items: [
          {
            title: menuT('aiAgents.overviewAndBenefits.title'),
            icon: TbRobot,
            href: createLocalizedHref('ai-agents#overview-and-benefits'),
            list: [
              {
                description: menuT(
                  'aiAgents.overviewAndBenefits.descriptions.description1',
                ),
              },
              {
                description: menuT(
                  'aiAgents.overviewAndBenefits.descriptions.description2',
                ),
              },
            ],
          },
          {
            title: menuT('aiAgents.messagingAutomation.title'),
            icon: TbMicrophone,
            href: createLocalizedHref('ai-agents#messaging-automation'),
            list: [
              {
                description: menuT(
                  'aiAgents.messagingAutomation.descriptions.description1',
                ),
              },
              {
                description: menuT(
                  'aiAgents.messagingAutomation.descriptions.description2',
                ),
              },
            ],
          },
          {
            title: menuT('aiAgents.contentAutomation.title'),
            icon: TbPhoto,
            href: createLocalizedHref('ai-agents#content-automation'),
            list: [
              {
                description: menuT(
                  'aiAgents.contentAutomation.descriptions.description1',
                ),
              },
              {
                description: menuT(
                  'aiAgents.contentAutomation.descriptions.description2',
                ),
              },
            ],
          },
          {
            title: menuT('aiAgents.voiceAutomation.title'),
            icon: TbMicrophone,
            href: createLocalizedHref('ai-agents#voice-automation'),
            list: [
              {
                description: menuT(
                  'aiAgents.voiceAutomation.descriptions.description1',
                ),
              },
              {
                description: menuT(
                  'aiAgents.voiceAutomation.descriptions.description2',
                ),
              },
            ],
          },
          {
            title: menuT('aiAgents.industryDemos.title'),
            icon: TbPhoto,
            href: createLocalizedHref('ai-agents#industry-demos'),
            list: [
              {
                description: menuT(
                  'aiAgents.industryDemos.descriptions.description1',
                ),
              },
              {
                description: menuT(
                  'aiAgents.industryDemos.descriptions.description2',
                ),
              },
              {
                description: menuT(
                  'aiAgents.industryDemos.descriptions.description3',
                ),
              },
              {
                description: menuT(
                  'aiAgents.industryDemos.descriptions.description4',
                ),
              },
              {
                description: menuT(
                  'aiAgents.industryDemos.descriptions.description5',
                ),
              },
              {
                description: menuT(
                  'aiAgents.industryDemos.descriptions.description6',
                ),
              },
              {
                description: menuT(
                  'aiAgents.industryDemos.descriptions.description7',
                ),
              },
              {
                description: menuT(
                  'aiAgents.industryDemos.descriptions.description8',
                ),
              },
              {
                description: menuT(
                  'aiAgents.industryDemos.descriptions.description9',
                ),
              },
            ],
          },
        ],
      },
    },
    {
      title: t('aiForBusiness'),
      value: 'ai-for-business',
      href: createLocalizedHref('ai-for-business'),
      megaMenu: {
        title: t('aiForBusiness'),
        items: [
          {
            title: menuT('aiForBusiness.seminars.title'),
            icon: TbSettings,
            href: createLocalizedHref('ai-for-business#seminars'),
            list: [
              {
                description: menuT(
                  'aiForBusiness.seminars.descriptions.description1',
                ),
              },
              {
                description: menuT(
                  'aiForBusiness.seminars.descriptions.description2',
                ),
              },
              {
                description: menuT(
                  'aiForBusiness.seminars.descriptions.description3',
                ),
              },
            ],
          },
          {
            title: menuT('aiForBusiness.aiTransformationConsultancy.title'),
            icon: TbUsers,
            href: createLocalizedHref('ai-for-business#ai-transformation-consultancy'),
            list: [
              {
                description: menuT(
                  'aiForBusiness.aiTransformationConsultancy.descriptions.description1',
                ),
              },
              {
                description: menuT(
                  'aiForBusiness.aiTransformationConsultancy.descriptions.description2',
                ),
              },
              {
                description: menuT(
                  'aiForBusiness.aiTransformationConsultancy.descriptions.description3',
                ),
              },
            ],
          },
          {
            title: menuT('aiForBusiness.caseStudies.title'),
            icon: TbChartLine,
            href: createLocalizedHref('ai-for-business#case-studies'),
            list: [],
          },
        ],
      },
    },
    {
      title: t('aiSolutions'),
      value: 'ai-solutions',
      href: createLocalizedHref('ai-solutions'),
      megaMenu: {
        title: t('aiSolutions'),
        items: [
          {
            title: menuT('aiSolutions.webSolutions.title'),
            icon: TbBrain,
            href: createLocalizedHref('ai-solutions#web-solutions'),
            list: [
              {
                description: menuT(
                  'aiSolutions.webSolutions.descriptions.description1',
                ),
              },
              {
                description: menuT(
                  'aiSolutions.webSolutions.descriptions.description2',
                ),
              },
              {
                description: menuT(
                  'aiSolutions.webSolutions.descriptions.description3',
                ),
              },
              {
                description: menuT(
                  'aiSolutions.webSolutions.descriptions.description4',
                ),
              },
            ],
          },
          {
            title: menuT('aiSolutions.eCommerceSolutions.title'),
            icon: TbCode,
            href: createLocalizedHref('ai-solutions#e-commerce-solutions'),
            list: [
              {
                description: menuT(
                  'aiSolutions.eCommerceSolutions.descriptions.description1',
                ),
              },
              {
                description: menuT(
                  'aiSolutions.eCommerceSolutions.descriptions.description2',
                ),
              },
            ],
          },
          {
            title: menuT('aiSolutions.mobileAppSolutions.title'),
            icon: TbNetwork,
            href: createLocalizedHref('ai-solutions#mobile-app-solutions'),
            list: [
              {
                description: menuT(
                  'aiSolutions.mobileAppSolutions.descriptions.description1',
                ),
              },
              {
                description: menuT(
                  'aiSolutions.mobileAppSolutions.descriptions.description2',
                ),
              },
            ],
          }
        ],
      },
    },
  ]

  return <Navigation navMenu={navMenu} />
}
