export enum PermissionSubject {
  all = "all",
  /**
   * this value means any of the subdomains are valid. including `all`.
   * - this will not be used in permission definition. Only in permission decorator in order to let any of the permission subdomain
   */
  any = "any",

  // dashboard
  dashboard = "dashboard",

  // auth
  permission = "permission",
  userPermission = "userPermission",
  role = "role",
  userRole = "userRole",

  // blog
  blog = "blog",
  blogCategory = "blogCategory",
  blogTargetCategory = "blogTargetCategory",
  author = "author",

  // lead
  lead = "lead",
  leadStatus = "leadStatus",
  leadSource = "leadSource",
  leadCategory = "leadCategory",
  leadTag = "leadTag",
  leadForm = "leadForm",

  // customer
  customer = "customer",
  customerCategory = "customerCategory",

  // pre sale
  estimate = "estimate",
  proposal = "proposal",

  //sale
  invoice = "invoice",
  invoicePayment = "invoicePayment",
  invoiceReturn = "invoiceReturn",

  //product
  product = "product",
  productCategory = "productCategory",

  // user
  user = "user",
  organization = "organization",
  organizationSettings = "organizationSettings",
  organizationChart = "organizationChart",
  department = "department",
  legalAgreement = "legalAgreement",

  // dms
  file = "file",

  // notification
  notification = "notification",
  notificationHistory = "notificationHistory",
  webNotification = "webNotification",

  // payment
  order = "order",
  exchangeRate = "exchangeRate",
  paymentProduct = "paymentProduct",
  purchase = "purchase",
  subscription = "subscription",

  // help center
  helpCenter = "helpCenter",
  helpCenterCategory = "helpCenterCategory",

  // faq
  faq = "faq",
  faqCategory = "faqCategory",

  // webinar
  webinar = "webinar",

  // form
  contactForm = "contactForm",
  subscriptionForm = "subscriptionForm",

  // policy
  policy = "policy",

  // comment
  comment = "comment",
  reply = "reply",

  // note
  note = "note",

  // reminder
  reminder = "reminder",

  // task
  task = "task",

  // ticket
  ticket = "ticket",

  // expense
  expense = "expense",

  // project
  project = "project",

  // contract
  contract = "contract",
  contractTemplate = "contractTemplate",

  // appointment
  appointment = "appointment",
}
