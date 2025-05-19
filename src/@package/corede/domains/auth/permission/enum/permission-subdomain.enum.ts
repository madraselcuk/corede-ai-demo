export enum PermissionSubdomain {
  all = "all",

  // auth
  permission = "permission",
  role = "role",
  userPermission = "userPermission",
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
customerTag = "customerTag",

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

  // ticket
  ticket = "ticket",

  // expense
  expense = "expense",

  // contract
  contract = "contract",
  contractTemplate = "contractTemplate",

  // appointment
  appointment = "appointment",

  // dashboard
  dashboard = "dashboard",

  // task
  task = "task",

  // project
  project = "project",
}
