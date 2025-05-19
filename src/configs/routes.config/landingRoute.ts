import type { Routes } from '@/@types/routes'
import { blogRoutes } from '@/domains/blog/routes/blog.route'
import { faqRoutes } from '@/domains/faq/routes/faq.route'
import { formRoutes } from '@/domains/form/routes/form.route'
import { helpCenterRoutes } from '@/domains/help-center/routes/helpCenter.route'
import { webinarRoutes } from '@/domains/webinar/routes/webinar.route'

const landingRoute: Routes = {
  ...blogRoutes,
  ...formRoutes,
  ...faqRoutes,
  ...helpCenterRoutes,
  ...webinarRoutes,
}

export default landingRoute
