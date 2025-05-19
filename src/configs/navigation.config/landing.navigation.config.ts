import { LANDING_PREFIX_PATH } from '@/constants/route.constant'
import {
  NAV_ITEM_TYPE_TITLE,
  NAV_ITEM_TYPE_COLLAPSE,
  NAV_ITEM_TYPE_ITEM,
} from '@/constants/navigation.constant'
import { ADMIN, USER } from '@/constants/roles.constant'
import type { NavigationTree } from '@/@types/navigation'

const landingNavigationConfig: NavigationTree[] = [
  {
    key: 'landing',
    path: `${LANDING_PREFIX_PATH}`,
    title: 'Landing',
    translateKey: 'nav.landing.title',
    icon: 'landing',
    type: NAV_ITEM_TYPE_TITLE,
    authority: [ADMIN, USER],
    meta: {
      horizontalMenu: {
        layout: 'columns',
        columns: 4,
      },
    },
    subMenu: [
      {
        key: 'landing.blog',
        path: '',
        title: 'Blog',
        translateKey: 'nav.landing.blog.title',
        icon: 'blog',
        type: NAV_ITEM_TYPE_COLLAPSE,
        authority: [ADMIN, USER],
        meta: {
          description: {
            translateKey: 'nav.landing.blog.desc',
            label: 'Blog page',
          },
        },
        subMenu: [
          {
            key: 'landing.blog.blog',
            path: '',
            title: 'Blog',
            translateKey: 'nav.landing.blog.blog.title',
            icon: 'blog',
            type: NAV_ITEM_TYPE_COLLAPSE,
            authority: [ADMIN, USER],
            meta: {
              description: {
                translateKey: 'nav.landing.blog.blog.listDesc',
                label: 'Blog page',
              },
            },
            subMenu: [
              {
                key: 'landing.blog.blog.list',
                path: `${LANDING_PREFIX_PATH}/blog/blog/list`,
                title: 'Blog List',
                translateKey: 'nav.landing.blog.blog.list',
                icon: 'blogList',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [ADMIN, USER],
                meta: {
                  description: {
                    translateKey: 'nav.landing.blog.blog.listDesc',
                    label: 'Blog list page',
                  },
                },
                subMenu: [],
              },
              {
                key: 'landing.blog.blog.create',
                path: `${LANDING_PREFIX_PATH}/blog/blog/create`,
                title: 'Blog Create',
                translateKey: 'nav.landing.blog.blog.create',
                icon: 'blogCreate',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [ADMIN, USER],
                meta: {
                  description: {
                    translateKey: 'nav.landing.blog.blog.createDesc',
                    label: 'Blog create page',
                  },
                },
                subMenu: [],
              },
            ],
          },
          {
            key: 'landing.blog.author',
            path: '',
            title: 'Author',
            translateKey: 'nav.landing.blog.author.title',
            icon: 'author',
            type: NAV_ITEM_TYPE_COLLAPSE,
            authority: [ADMIN, USER],
            meta: {
              description: {
                translateKey: 'nav.landing.blog.author.listDesc',
                label: 'Author page',
              },
            },
            subMenu: [
              {
                key: 'landing.blog.author.list',
                path: `${LANDING_PREFIX_PATH}/blog/author/list`,
                title: 'Author List',
                translateKey: 'nav.landing.blog.author.list',
                icon: 'authorList',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [ADMIN, USER],
                meta: {
                  description: {
                    translateKey: 'nav.landing.blog.author.listDesc',
                    label: 'Author list page',
                  },
                },
                subMenu: [],
              },
              {
                key: 'landing.blog.author.create',
                path: `${LANDING_PREFIX_PATH}/blog/author/create`,
                title: 'Author Create',
                translateKey: 'nav.landing.blog.author.create',
                icon: 'authorCreate',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [ADMIN, USER],
                meta: {
                  description: {
                    translateKey: 'nav.landing.blog.author.createDesc',
                    label: 'Author create page',
                  },
                },
                subMenu: [],
              },
            ],
          },
          {
            key: 'landing.blog.blogCategory',
            path: '',
            title: 'Blog Category',
            translateKey: 'nav.landing.blog.blogCategory.title',
            icon: 'blogCategory',
            type: NAV_ITEM_TYPE_COLLAPSE,
            authority: [ADMIN, USER],
            meta: {
              description: {
                translateKey: 'nav.landing.blog.blogCategory.listDesc',
                label: 'Blog category page',
              },
            },
            subMenu: [
              {
                key: 'landing.blog.blogCategory.list',
                path: `${LANDING_PREFIX_PATH}/blog/blog-category/list`,
                title: 'Blog Category List',
                translateKey: 'nav.landing.blog.blogCategory.list',
                icon: 'blogCategoryList',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [ADMIN, USER],
                meta: {
                  description: {
                    translateKey: 'nav.landing.blog.blogCategory.listDesc',
                    label: 'Blog category list page',
                  },
                },
                subMenu: [],
              },
              {
                key: 'landing.blog.blogCategory.create',
                path: `${LANDING_PREFIX_PATH}/blog/blog-category/create`,
                title: 'Blog Category Create',
                translateKey: 'nav.landing.blog.blogCategory.create',
                icon: 'blogCategoryCreate',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [ADMIN, USER],
                meta: {
                  description: {
                    translateKey: 'nav.landing.blog.blogCategory.createDesc',
                    label: 'Blog category create page',
                  },
                },
                subMenu: [],
              },
            ],
          },
          {
            key: 'landing.blog.blogTargetCategory',
            path: '',
            title: 'Blog Target Category',
            translateKey: 'nav.landing.blog.blogTargetCategory.title',
            icon: 'blogTargetCategory',
            type: NAV_ITEM_TYPE_COLLAPSE,
            authority: [ADMIN, USER],
            meta: {
              description: {
                translateKey: 'nav.landing.blog.blogTargetCategory.listDesc',
                label: 'Blog target category page',
              },
            },
            subMenu: [
              {
                key: 'landing.blog.blogTargetCategory.list',
                path: `${LANDING_PREFIX_PATH}/blog/blog-target-category/list`,
                title: 'Blog Target Category List',
                translateKey: 'nav.landing.blog.blogTargetCategory.list',
                icon: 'blogTargetCategoryList',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [ADMIN, USER],
                meta: {
                  description: {
                    translateKey:
                      'nav.landing.blog.blogTargetCategory.listDesc',
                    label: 'Blog target category list page',
                  },
                },
                subMenu: [],
              },
              {
                key: 'landing.blog.blogTargetCategory.create',
                path: `${LANDING_PREFIX_PATH}/blog/blog-target-category/create`,
                title: 'Blog Target Category Create',
                translateKey: 'nav.landing.blog.blogTargetCategory.create',
                icon: 'blogTargetCategoryCreate',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [ADMIN, USER],
                meta: {
                  description: {
                    translateKey:
                      'nav.landing.blog.blogTargetCategory.createDesc',
                    label: 'Blog target category create page',
                  },
                },
                subMenu: [],
              },
            ],
          },
        ],
      },
      {
        key: 'landing.form',
        path: '',
        title: 'Form',
        translateKey: 'nav.landing.form.title',
        icon: 'form',
        type: NAV_ITEM_TYPE_COLLAPSE,
        authority: [ADMIN, USER],
        meta: {
          description: {
            translateKey: 'nav.landing.form.desc',
            label: 'Form page',
          },
        },
        subMenu: [
          {
            key: 'landing.form.contactForm',
            path: '',
            title: 'Contact Form',
            translateKey: 'nav.landing.form.contactForm.title',
            icon: 'contactForm',
            type: NAV_ITEM_TYPE_COLLAPSE,
            authority: [ADMIN, USER],
            meta: {
              description: {
                translateKey: 'nav.landing.form.contactForm.listDesc',
                label: 'Contact form page',
              },
            },
            subMenu: [
              {
                key: 'landing.form.contactForm.list',
                path: `${LANDING_PREFIX_PATH}/form/contact-form/list`,
                title: 'Contact Form List',
                translateKey: 'nav.landing.form.contactForm.list',
                icon: 'contactFormList',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [ADMIN, USER],
                meta: {
                  description: {
                    translateKey: 'nav.landing.form.contactForm.listDesc',
                    label: 'Contact form list page',
                  },
                },
                subMenu: [],
              },
              {
                key: 'landing.form.contactForm.create',
                path: `${LANDING_PREFIX_PATH}/form/contact-form/create`,
                title: 'Contact Form Create',
                translateKey: 'nav.landing.form.contactForm.create',
                icon: 'contactFormCreate',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [ADMIN, USER],
                meta: {
                  description: {
                    translateKey: 'nav.landing.form.contactForm.createDesc',
                    label: 'Contact form create page',
                  },
                },
                subMenu: [],
              },
            ],
          },
          {
            key: 'landing.form.subscriptionForm',
            path: '',
            title: 'Subscription Form',
            translateKey: 'nav.landing.form.subscriptionForm.title',
            icon: 'subscriptionForm',
            type: NAV_ITEM_TYPE_COLLAPSE,
            authority: [ADMIN, USER],
            meta: {
              description: {
                translateKey: 'nav.landing.form.subscriptionForm.listDesc',
                label: 'Subscription form page',
              },
            },
            subMenu: [
              {
                key: 'landing.form.subscriptionForm.list',
                path: `${LANDING_PREFIX_PATH}/form/subscription-form/list`,
                title: 'Subscription Form List',
                translateKey: 'nav.landing.form.subscriptionForm.list',
                icon: 'subscriptionFormList',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [ADMIN, USER],
                meta: {
                  description: {
                    translateKey: 'nav.landing.form.subscriptionForm.listDesc',
                    label: 'Subscription form list page',
                  },
                },
                subMenu: [],
              },
              {
                key: 'landing.form.subscriptionForm.create',
                path: `${LANDING_PREFIX_PATH}/form/subscription-form/create`,
                title: 'Subscription Form Create',
                translateKey: 'nav.landing.form.subscriptionForm.create',
                icon: 'subscriptionFormCreate',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [ADMIN, USER],
                meta: {
                  description: {
                    translateKey:
                      'nav.landing.form.subscriptionForm.createDesc',
                    label: 'Subscription form create page',
                  },
                },
                subMenu: [],
              },
            ],
          },
        ],
      },
      {
        key: 'landing.faq',
        path: `${LANDING_PREFIX_PATH}/faq`,
        title: 'FAQ',
        translateKey: 'nav.landing.faq.title',
        icon: 'faq',
        type: NAV_ITEM_TYPE_COLLAPSE,
        authority: [ADMIN, USER],
        meta: {
          description: {
            translateKey: 'nav.landing.faq.desc',
            label: 'FAQ page',
          },
        },
        subMenu: [
          {
            key: 'landing.faq.faq',
            path: `${LANDING_PREFIX_PATH}/faq/faq`,
            title: 'Faq',
            translateKey: 'nav.landing.faq.faq.title',
            icon: 'faq',
            type: NAV_ITEM_TYPE_COLLAPSE,
            authority: [ADMIN, USER],
            meta: {
              description: {
                translateKey: 'nav.landing.faq.faq.listDesc',
                label: 'Faq page',
              },
            },
            subMenu: [
              {
                key: 'landing.faq.faq.list',
                path: `${LANDING_PREFIX_PATH}/faq/faq/list`,
                title: 'Faq List',
                translateKey: 'nav.landing.faq.faq.list',
                icon: 'faqList',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [ADMIN, USER],
                meta: {
                  description: {
                    translateKey: 'nav.landing.faq.faq.listDesc',
                    label: 'Faq list page',
                  },
                },
                subMenu: [],
              },
              {
                key: 'landing.faq.faq.create',
                path: `${LANDING_PREFIX_PATH}/faq/faq/create`,
                title: 'Faq Create',
                translateKey: 'nav.landing.faq.faq.create',
                icon: 'faqCreate',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [ADMIN, USER],
                meta: {
                  description: {
                    translateKey: 'nav.landing.faq.faq.createDesc',
                    label: 'Faq create page',
                  },
                },
                subMenu: [],
              },
            ],
          },
          {
            key: 'landing.faq.faqCategory',
            path: `${LANDING_PREFIX_PATH}/faq/faq-category`,
            title: 'Faq Category',
            translateKey: 'nav.landing.faq.faqCategory.title',
            icon: 'faqCategory',
            type: NAV_ITEM_TYPE_COLLAPSE,
            authority: [ADMIN, USER],
            meta: {
              description: {
                translateKey: 'nav.landing.faq.faqCategory.listDesc',
                label: 'Faq category page',
              },
            },
            subMenu: [
              {
                key: 'landing.faq.faqCategory.list',
                path: `${LANDING_PREFIX_PATH}/faq/faq-category/list`,
                title: 'Faq Category List',
                translateKey: 'nav.landing.faq.faqCategory.list',
                icon: 'faqCategoryList',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [ADMIN, USER],
                meta: {
                  description: {
                    translateKey: 'nav.landing.faq.faqCategory.listDesc',
                    label: 'Faq category list page',
                  },
                },
                subMenu: [],
              },
              {
                key: 'landing.faq.faqCategory.create',
                path: `${LANDING_PREFIX_PATH}/faq/faq-category/create`,
                title: 'Faq Category Create',
                translateKey: 'nav.landing.faq.faqCategory.create',
                icon: 'faqCategoryCreate',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [ADMIN, USER],
                meta: {
                  description: {
                    translateKey: 'nav.landing.faq.faqCategory.createDesc',
                    label: 'Faq category create page',
                  },
                },
                subMenu: [],
              },
            ],
          },
        ],
      },
      {
        key: 'landing.helpCenter',
        path: '',
        title: 'Help Center',
        translateKey: 'nav.landing.helpCenter.title',
        icon: 'helpCenter',
        type: NAV_ITEM_TYPE_COLLAPSE,
        authority: [ADMIN, USER],
        meta: {
          description: {
            translateKey: 'nav.landing.helpCenter.desc',
            label: 'Help Center page',
          },
        },
        subMenu: [
          {
            key: 'landing.helpCenter.helpCenter',
            path: '',
            title: 'Help Center',
            translateKey: 'nav.landing.helpCenter.helpCenter.title',
            icon: 'helpCenter',
            type: NAV_ITEM_TYPE_COLLAPSE,
            authority: [ADMIN, USER],
            meta: {
              description: {
                translateKey: 'nav.landing.helpCenter.helpCenter.listDesc',
                label: 'Help Center page',
              },
            },

            subMenu: [
              {
                key: 'landing.helpCenter.helpCenter.list',
                path: `${LANDING_PREFIX_PATH}/help-center/help-center/list`,
                title: 'Help Center List',
                translateKey: 'nav.landing.helpCenter.helpCenter.list',
                icon: 'helpCenterList',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [ADMIN, USER],
                meta: {
                  description: {
                    translateKey: 'nav.landing.helpCenter.helpCenter.listDesc',
                    label: 'Help Center list page',
                  },
                },
                subMenu: [],
              },
              {
                key: 'landing.helpCenter.helpCenter.create',
                path: `${LANDING_PREFIX_PATH}/help-center/help-center/create`,
                title: 'Help Center Create',
                translateKey: 'nav.landing.helpCenter.helpCenter.create',
                icon: 'helpCenterCreate',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [ADMIN, USER],
                meta: {
                  description: {
                    translateKey:
                      'nav.landing.helpCenter.helpCenter.createDesc',
                    label: 'Help Center create page',
                  },
                },
                subMenu: [],
              },
            ],
          },
          {
            key: 'landing.helpCenter.helpCenterCategory',
            path: '',
            title: 'Help Center Category',
            translateKey: 'nav.landing.helpCenter.helpCenterCategory.title',
            icon: 'helpCenterCategory',
            type: NAV_ITEM_TYPE_COLLAPSE,
            authority: [ADMIN, USER],
            meta: {
              description: {
                translateKey:
                  'nav.landing.helpCenter.helpCenterCategory.listDesc',
                label: 'Help Center category page',
              },
            },
            subMenu: [
              {
                key: 'landing.helpCenter.helpCenterCategory.list',
                path: `${LANDING_PREFIX_PATH}/help-center/help-center-category/list`,
                title: 'Help Center Category List',
                translateKey: 'nav.landing.helpCenter.helpCenterCategory.list',
                icon: 'helpCenterCategoryList',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [ADMIN, USER],
                meta: {
                  description: {
                    translateKey:
                      'nav.landing.helpCenter.helpCenterCategory.listDesc',
                    label: 'Help Center category list page',
                  },
                },
                subMenu: [],
              },
              {
                key: 'landing.helpCenter.helpCenterCategory.create',
                path: `${LANDING_PREFIX_PATH}/help-center/help-center-category/create`,
                title: 'Help Center Category Create',
                translateKey:
                  'nav.landing.helpCenter.helpCenterCategory.create',
                icon: 'helpCenterCategoryCreate',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [ADMIN, USER],
                meta: {
                  description: {
                    translateKey:
                      'nav.landing.helpCenter.helpCenterCategory.createDesc',
                    label: 'Help Center category create page',
                  },
                },
                subMenu: [],
              },
            ],
          },
        ],
      },
      {
        key: 'landing.webinar',
        path: '',
        title: 'Webinar',
        translateKey: 'nav.landing.webinar.title',
        icon: 'webinar',
        type: NAV_ITEM_TYPE_COLLAPSE,
        authority: [ADMIN, USER],
        meta: {
          horizontalMenu: {
            layout: 'columns',
            columns: 4,
          },
        },
        subMenu: [
          {
            key: 'landing.webinar.webinar.list',
            path: `${LANDING_PREFIX_PATH}/webinar/webinar/list`,
            title: 'Webinar List',
            translateKey: 'nav.landing.webinar.webinar.list',
            icon: 'webinarList',
            type: NAV_ITEM_TYPE_ITEM,
            authority: [ADMIN, USER],
            meta: {
              description: {
                translateKey: 'nav.landing.webinar.webinar.listDesc',
                label: 'Webinar list page',
              },
            },
            subMenu: [],
          },
          {
            key: 'landing.webinar.webinar.create',
            path: `${LANDING_PREFIX_PATH}/webinar/webinar/create`,
            title: 'Webinar Create',
            translateKey: 'nav.landing.webinar.webinar.create',
            icon: 'webinarCreate',
            type: NAV_ITEM_TYPE_ITEM,
            authority: [ADMIN, USER],
            meta: {
              description: {
                translateKey: 'nav.landing.webinar.webinar.createDesc',
                label: 'Webinar create page',
              },
            },
            subMenu: [],
          },
        ],
      },
    ],
  },
]

export default landingNavigationConfig
