// This file is auto-generated. Do not edit manually.

export type NavHome = {
  title: string
  desc: string
}

export type NavLandingBlogBlog = {
  title: string
  list: string
  listDesc: string
  create: string
  createDesc: string
}

export type NavLandingBlogAuthor = {
  title: string
  desc: string
  list: string
  listDesc: string
  create: string
  createDesc: string
}

export type NavLandingBlogBlogCategory = {
  title: string
  desc: string
  list: string
  listDesc: string
  create: string
  createDesc: string
  update: string
  updateDesc: string
  delete: string
  deleteDesc: string
}

export type NavLandingBlogBlogTargetCategory = {
  title: string
  desc: string
  list: string
  listDesc: string
  create: string
  createDesc: string
  update: string
  updateDesc: string
  delete: string
  deleteDesc: string
}

export type NavLandingBlog = {
  title: string
  desc: string
  blog: NavLandingBlogBlog
  author: NavLandingBlogAuthor
  blogCategory: NavLandingBlogBlogCategory
  blogTargetCategory: NavLandingBlogBlogTargetCategory
}

export type NavLandingFormContactForm = {
  title: string
  desc: string
  list: string
  listDesc: string
  create: string
  createDesc: string
}

export type NavLandingFormSubscriptionForm = {
  title: string
  desc: string
  list: string
  listDesc: string
  create: string
  createDesc: string
}

export type NavLandingForm = {
  title: string
  desc: string
  contactForm: NavLandingFormContactForm
  subscriptionForm: NavLandingFormSubscriptionForm
}

export type NavLandingFaqFaq = {
  title: string
  list: string
  listDesc: string
  create: string
  createDesc: string
}

export type NavLandingFaqFaqCategory = {
  title: string
  list: string
  listDesc: string
  create: string
  createDesc: string
}

export type NavLandingFaq = {
  title: string
  desc: string
  faq: NavLandingFaqFaq
  faqCategory: NavLandingFaqFaqCategory
}

export type NavLandingHelpCenterHelpCenter = {
  title: string
  list: string
  listDesc: string
  create: string
  createDesc: string
}

export type NavLandingHelpCenterHelpCenterCategory = {
  title: string
  list: string
  listDesc: string
  create: string
  createDesc: string
}

export type NavLandingHelpCenter = {
  title: string
  desc: string
  helpCenter: NavLandingHelpCenterHelpCenter
  helpCenterCategory: NavLandingHelpCenterHelpCenterCategory
}

export type NavLandingWebinarWebinar = {
  title: string
  list: string
  listDesc: string
  create: string
  createDesc: string
}

export type NavLandingWebinar = {
  title: string
  desc: string
  webinar: NavLandingWebinarWebinar
}

export type NavLanding = {
  title: string
  blog: NavLandingBlog
  form: NavLandingForm
  faq: NavLandingFaq
  helpCenter: NavLandingHelpCenter
  webinar: NavLandingWebinar
}

export type NavTaskTask = {
  title: string
  desc: string
  list: string
  listDesc: string
  create: string
  createDesc: string
}

export type NavTaskProject = {
  title: string
  desc: string
  dashboard: string
  list: string
  listDesc: string
  create: string
  createDesc: string
}

export type NavTask = {
  title: string
  task: NavTaskTask
  project: NavTaskProject
}

export type NavUserUser = {
  title: string
  desc: string
  list: string
  listDesc: string
  create: string
  createDesc: string
}

export type NavUserOrganization = {
  title: string
  desc: string
  list: string
  listDesc: string
  create: string
  createDesc: string
}

export type NavUser = {
  title: string
  desc: string
  user: NavUserUser
  organization: NavUserOrganization
}

export type NavNotificationNotification = {
  title: string
  desc: string
  list: string
  listDesc: string
  create: string
  createDesc: string
  update: string
  updateDesc: string
  delete: string
  deleteDesc: string
}

export type NavNotificationNotificationHistory = {
  title: string
  desc: string
  list: string
  listDesc: string
  detail: string
  detailDesc: string
}

export type NavNotification = {
  title: string
  desc: string
  notification: NavNotificationNotification
  notificationHistory: NavNotificationNotificationHistory
}

export type NavDashboard = {
  dashboard: string
  ecommerce: string
  analytic: string
  project: string
  marketing: string
}

export type NavConceptsAi = {
  ai: string
  chat: string
  image: string
  aiDesc: string
  chatDesc: string
  imageDesc: string
}

export type NavConceptsCustomers = {
  customers: string
  customerList: string
  customerEdit: string
  customerCreate: string
  customerDetails: string
  customersDesc: string
  customerListDesc: string
  customerEditDesc: string
  customerCreateDesc: string
  customerDetailsDesc: string
}

export type NavConceptsProducts = {
  products: string
  productList: string
  productEdit: string
  productCreate: string
  productsDesc: string
  productListDesc: string
  productEditDesc: string
  productCreateDesc: string
}

export type NavConceptsProjects = {
  projects: string
  projectList: string
  projectDetails: string
  projectTasks: string
  projectIssue: string
  scrumBoard: string
  projectsDesc: string
  scrumBoardDesc: string
  projectListDesc: string
  projectDetailsDesc: string
  projectTasksDesc: string
  projectIssueDesc: string
}

export type NavConceptsOrders = {
  orders: string
  orderList: string
  orderEdit: string
  orderDetails: string
  orderCreate: string
  ordersDesc: string
  orderListDesc: string
  orderEditDesc: string
  orderCreateDesc: string
  orderDetailsDesc: string
}

export type NavConceptsAccount = {
  account: string
  settings: string
  activityLog: string
  pricing: string
  rolesPermissions: string
  accountDesc: string
  settingsDesc: string
  activityLogDesc: string
  rolesPermissionsDesc: string
  pricingDesc: string
}

export type NavConceptsHelpCenter = {
  helpCenter: string
  supportHub: string
  article: string
  editArticle: string
  manageArticle: string
  faq: string
  helpCenterDesc: string
  supportHubDesc: string
  articleDesc: string
  editArticleDesc: string
  manageArticleDesc: string
}

export type NavUiComponentsCommon = {
  common: string
  grid: string
  button: string
  typography: string
  icons: string
  commonDesc: string
  buttonDesc: string
  gridDesc: string
  typographyDesc: string
  iconsDesc: string
}

export type NavUiComponentsFeedback = {
  feedback: string
  alert: string
  dialog: string
  drawer: string
  progress: string
  skeleton: string
  spinner: string
  toast: string
  feedbackDesc: string
  alertDesc: string
  dialogDesc: string
  drawerDesc: string
  progressDesc: string
  skeletonDesc: string
  spinnerDesc: string
  toastDesc: string
}

export type NavUiComponentsDataDisplay = {
  dataDisplay: string
  avatar: string
  badge: string
  calendar: string
  cards: string
  table: string
  tag: string
  timeline: string
  tooltip: string
  dataDisplayDesc: string
  avatarDesc: string
  badgeDesc: string
  calendarDesc: string
  cardsDesc: string
  tableDesc: string
  tagDesc: string
  timelineDesc: string
  tooltipDesc: string
}

export type NavUiComponentsForms = {
  forms: string
  checkbox: string
  datePicker: string
  formControl: string
  input: string
  inputGroup: string
  radio: string
  segment: string
  select: string
  switcher: string
  timeInput: string
  upload: string
  formsDesc: string
  checkboxDesc: string
  datePickerDesc: string
  formControlDesc: string
  inputDesc: string
  inputGroupDesc: string
  radioDesc: string
  segmentDesc: string
  selectDesc: string
  switcherDesc: string
  timeInputDesc: string
  uploadDesc: string
}

export type NavUiComponentsNavigation = {
  navigation: string
  dropdown: string
  menu: string
  pagination: string
  steps: string
  tabs: string
  navigationDesc: string
  dropdownDesc: string
  menuDesc: string
  paginationDesc: string
  stepsDesc: string
  tabsDesc: string
}

export type NavUiComponentsGraph = {
  graph: string
  charts: string
  maps: string
  graphDesc: string
  chartsDesc: string
  mapsDesc: string
}

export type NavPages = {
  pages: string
  welcome: string
  accessDenied: string
}

export type NavAuthentication = {
  authentication: string
  signIn: string
  signInSimple: string
  signInSide: string
  signInSplit: string
  signUp: string
  signUpSimple: string
  signUpSide: string
  signUpSplit: string
  forgotPassword: string
  forgotPasswordSimple: string
  forgotPasswordSide: string
  forgotPasswordSplit: string
  resetPassword: string
  resetPasswordSimple: string
  resetPasswordSide: string
  resetPasswordSplit: string
  otpVerification: string
  otpVerificationSimple: string
  otpVerificationSide: string
  otpVerificationSplit: string
}

export type NavGuide = {
  guide: string
  documentation: string
  sharedComponentDoc: string
  utilsDoc: string
  changeLog: string
}

export type NavAiAgentsHero = {
  title: string
  description: string
  requestDemoButton: string
}

export type NavAiAgentsOverview = {
  title: string
  description: string
}

export type NavAiAgentsContentAutomation = {
  title: string
  feature1Title: string
  feature1Description: string
  feature2Title: string
  feature2Description: string
  feature3Title: string
  feature3Description: string
  feature4Title: string
  feature4Description: string
  description: string
}

export type NavAiAgentsMessagingAutomation = {
  title: string
  description: string
  feature1Title: string
  feature1Description: string
  feature2Title: string
  feature2Description: string
  feature3Title: string
  feature3Description: string
  feature4Title: string
  feature4Description: string
}

export type NavAiAgentsVoiceAutomation = {
  title: string
  description: string
  feature1Title: string
  feature1Description: string
  feature2Title: string
  feature2Description: string
  feature3Title: string
  feature3Description: string
  feature4Title: string
  feature4Description: string
}

export type NavAiAgentsWhyAiAgentsAiDecisionAgents = {
  title: string
  description: string
  bullet1: string
  bullet2: string
  bullet3: string
}

export type NavAiAgentsWhyAiAgentsDataVisualization = {
  title: string
  description: string
  bullet1: string
  bullet2: string
}

export type NavAiAgentsWhyAiAgents = {
  title: string
  feature1: string
  feature2: string
  feature3: string
  aiDecisionAgents: NavAiAgentsWhyAiAgentsAiDecisionAgents
  dataVisualization: NavAiAgentsWhyAiAgentsDataVisualization
}

export type NavAiAgentsGetOffer = {
  headline: string
  title: string
  description: string
  requestOfferButton: string
  faqButton: string
}

export type NavAiAgentsFeaturedSectors = {
  title: string
  demoTitle: string
  demoDescription: string
}

export type NavAiAgents = {
  title: string
  hero: NavAiAgentsHero
  overview: NavAiAgentsOverview
  contentAutomation: NavAiAgentsContentAutomation
  messagingAutomation: NavAiAgentsMessagingAutomation
  voiceAutomation: NavAiAgentsVoiceAutomation
  whyAiAgents: NavAiAgentsWhyAiAgents
  getOffer: NavAiAgentsGetOffer
  featuredSectors: NavAiAgentsFeaturedSectors
}

export type Nav = {
  home: NavHome
  landing: NavLanding
  task: NavTask
  user: NavUser
  notification: NavNotification
  dashboard: NavDashboard
  concepts: string
  conceptsAi: NavConceptsAi
  conceptsCustomers: NavConceptsCustomers
  conceptsProducts: NavConceptsProducts
  conceptsProjects: NavConceptsProjects
  conceptsOrders: NavConceptsOrders
  conceptsAccount: NavConceptsAccount
  conceptsHelpCenter: NavConceptsHelpCenter
  calendar: string
  fileManager: string
  mail: string
  chat: string
  uiComponents: string
  calendarDesc: string
  fileManagerDesc: string
  mailDesc: string
  chatDesc: string
  uiComponentsCommon: NavUiComponentsCommon
  uiComponentsFeedback: NavUiComponentsFeedback
  uiComponentsDataDisplay: NavUiComponentsDataDisplay
  uiComponentsForms: NavUiComponentsForms
  uiComponentsNavigation: NavUiComponentsNavigation
  uiComponentsGraph: NavUiComponentsGraph
  pages: NavPages
  authentication: NavAuthentication
  guide: NavGuide
  aiAgents: NavAiAgents
}

export type EnumsLanguage = {
  en: string
  tr: string
  de: string
  fr: string
  es: string
  it: string
  pt: string
  ru: string
}

export type EnumsGender = {
  male: string
  female: string
  other: string
}

export type Enums = {
  language_name: string
  language: EnumsLanguage
  gender_name: string
  gender: EnumsGender
}

export type Common = {
  entityCreateSuccessTitle: string
  entityCreateSuccessMessage: string
  entityCreateErrorTitle: string
  entityCreateErrorMessage: string
  entityUpdateSuccessTitle: string
  entityUpdateSuccessMessage: string
  entityUpdateErrorTitle: string
  entityUpdateErrorMessage: string
  entityDeleteSuccessTitle: string
  entityDeleteSuccessMessage: string
  entityDeleteErrorTitle: string
  entityDeleteErrorMessage: string
  noData: string
  invalidFormFieldMessage: string
  selectPlaceholder: string
  selectGender: string
  searchPlaceholder: string
  noResultPlaceholder: string
  unknownError: string
  error: string
  from: string
  to: string
  apply: string
  code: string
  name: string
  requiredNameMessage: string
  surname: string
  email: string
  legalName: string
  website: string
  phone: string
  invalidEmailMessage: string
  requiredEmailMessage: string
  password: string
  passwordAgain: string
  invalidPasswordMessage: string
  requiredPasswordMessage: string
  invalidPasswordAgainMessage: string
  language: string
  selectLanguage: string
  country: string
  selectCountry: string
  countrySelectionIsRequired: string
  state: string
  selectState: string
  stateSelectionIsRequired: string
  city: string
  selectCity: string
  phoneNumber: string
  invalidPhoneNumberMessage: string
  birthDate: string
  edit: string
  delete: string
  deleting: string
  deleteEntity: string
  deleteEntitySuccessTitle: string
  deletedEntitySuccessfully: string
  deleteEntityErrorTitle: string
  deletedEntityFailed: string
  deleteEntityDescription: string
  thisEntity: string
  loading: string
  createdAt: string
  connectionError: string
  submit: string
  title: string
  description: string
  content: string
  type: string
  quota: string
  lastApplicationDate: string
  startDate: string
  duration: string
  participationLink: string
  status: string
  socialLinks: string
  submitting: string
  icon: string
  subscription: string
  create: string
  createNew: string
  preferences: string
  success: string
  successfullyCreated: string
  page: string
  reference: string
  url: string
  news: string
  blog: string
  products: string
  offers: string
  subscribe: string
  fullName: string
  subject: string
  message: string
  source: string
  userType: string
  newsTopic: string
  blogTopic: string
  productTopic: string
  offerTopic: string
  subscribed: string
  notSubscribed: string
  update: string
  successfullyUpdated: string
  yes: string
  no: string
  helpCenter: string
  helpCenterCategory: string
  translations: string
  enterTranslation: string
  selectLanguageFirst: string
  facebook: string
  instagram: string
  linkedIn: string
  x: string
  createdBy: string
  lastUpdated: string
  statusHistory: string
  note: string
  updatedAt: string
  prevStatus: string
  newStatus: string
  back: string
  cancel: string
  user: string
  relatedUser: string
  today: string
  last3Days: string
  thisWeek: string
  thisMonth: string
  pickDateRange: string
  dateRangePlaceholder: string
  reset: string
  columns: string
  question: string
  answer: string
  readingTime: string
  category: string
}

export type Auth = {
  login: string
  loginSuccess: string
  loginFailed: string
  backToLogin: string
  signIn: string
  signOut: string
  signOutSuccess: string
  signOutFailed: string
  signUp: string
  signupSuccess: string
  signupFailed: string
  signupSuccessfulTitle: string
  signupSuccessfulDescription: string
  signupVerifySuccessfulDescription: string
  forgotPassword: string
  requestResetPasswordSuccess: string
  requestResetPasswordFailed: string
  rememberPassword: string
  didNotReceiveCode: string
  resendCode: string
  confirmRegistrationSuccess: string
  confirmRegistrationFailed: string
  confirmRegistrationByUserSuccess: string
  confirmRegistrationByUserFailed: string
  resetPasswordFailed: string
  resetPasswordSuccess: string
  resetPasswordAfterRequestFailed: string
  oldPassword: string
  confirmPassword: string
  confirmTwoFactorLoginFailed: string
  twoFactVerifyTitle: string
  twoFactVerifyDescription: string
  resendConfirmationTitle: string
  resendConfirmationDescription: string
  resendConfirmation: string
  goToSignIn: string
  invalidCode: string
  somethingWentWrong: string
  signinText: string
  emailAddress: string
  emailInputPlaceholder: string
  password: string
  passwordInputPlaceholder: string
  continueWith: string
  noAccount: string
  logoAlt: string
  growYourBusiness: string
  business: string
  bgPattern: string
  manageYourBusiness: string
  quote1: string
  quoteName1: string
  quoteCompany1: string
  quoteImage1: string
  quote2: string
  quoteName2: string
  quoteCompany2: string
  quoteImage2: string
  quote3: string
  quoteName3: string
  quoteCompany3: string
  quoteImage3: string
  quote4: string
  quoteName4: string
  quoteCompany4: string
  quoteImage4: string
  quote5: string
  quoteName5: string
  quoteCompany5: string
  quoteImage5: string
  quote6: string
  quoteName6: string
  quoteCompany6: string
  quoteImage6: string
  quote7: string
  quoteName7: string
  quoteCompany7: string
  quoteImage7: string
  quote8: string
  quoteName8: string
  quoteCompany8: string
  quoteImage8: string
  passwordResetSuccess: string
  resetPasswordTitle: string
  enterNewPassword: string
  passwordAgain: string
  resetPassword: string
  alreadyHaveAccount: string
  forgotPasswordTitle: string
  resetPasswordInstructions: string
  userConfirmedSuccess: string
  emailConfirmationTitle: string
  enterOtp: string
  submit: string
  resendCodeTitle: string
  resendCodeDescription: string
  enterEmailToResend: string
  email: string
  close: string
  send: string
  letsRegister: string
  name: string
  surname: string
  iAccept: string
  and: string
  with: string
  termsAndConditions: string
  privacyPolicy: string
  explicitConsent: string
  kvkkPolicy: string
  orContinueWith: string
  createPassword: string
  createPasswordTitle: string
  resendConfirmationSuccessTitle: string
  resendConfirmationSuccessText: string
  resendConfirmationRequiredTitle: string
  resendConfirmationRequiredText: string
  resentCodeSuccess: string
  acceptAllPolicies: string
  alreadyRegisteredError: string
  userNotFoundError: string
  proposal: string
  estimate: string
  invoice: string
  startDate: string
  expireDate: string
  deadline: string
  proposalInformation: string
  estimateInformation: string
  invoiceInformation: string
  billTo: string
  bankName: string
  country: string
  iban: string
  currency: string
  productDescription: string
  qty: string
  rate: string
  tax: string
  amount: string
  projectTimeline: string
  timeline: string
  accept: string
  decline: string
  download: string
  comments: string
  documents: string
  uploadDocument: string
  addDocument: string
  estimateAccepted: string
  estimateDeclined: string
  proposalAccepted: string
  proposalDeclined: string
  invoiceAccepted: string
  invoiceDeclined: string
  declineReason: string
  declineReasonPlaceholder: string
  backToHomePage: string
  checkYourInbox: string
  resetPasswordAfterSuccess1: string
  resetPasswordAfterSuccess2: string
  signInNow: string
  signInSubtitle: string
  signUpNow: string
  signUpSubtitle: string
  dontHaveAnAccount: string
  alreadyHaveAnAccount: string
  continueWithLinkedIn: string
  continueWithGoogle: string
  orSignUpWithEmail: string
  orSignInWithEmail: string
  welcomeToInternIF: string
  verifyYourEmail: string
  confirmationIsSuccessful1: string
  confirmationIsSuccessful2: string
  confirmationIsSuccessful3: string
  letsGetStarted: string
  changePassword: string
  changingPassword: string
  auth_nav_title: string
  nav_signIn: string
  nav_sub_signIn: string
  nav_signUp: string
  nav_sub_signUp: string
  nav_forgetPassword: string
  nav_sub_forgetPassword: string
  nav_resetPassword: string
  nav_sub_resetPassword: string
  twoFactorLoginFailed: string
}

export type UserEnumsRoleType = {
  default: string
  organizationDefault: string
  cocrmDefault: string
}

export type UserEnumsPermissionAction = {
  read: string
  create: string
  update: string
  delete: string
  manage: string
}

export type UserEnumsPermissionCategory = {
  admin: string
  user: string
  content: string
  system: string
}

export type UserEnums = {
  roleType_name: string
  roleType: UserEnumsRoleType
  permissionAction_name: string
  permissionAction: UserEnumsPermissionAction
  permissionCategory_name: string
  permissionCategory: UserEnumsPermissionCategory
}

export type User = {
  enums: UserEnums
  myAccount: string
  myProfile: string
  profilePicture: string
  profile: string
  name: string
  surname: string
  birthDate: string
  gender: string
  update: string
  changeImage: string
  removeImage: string
  allowedImageTypes: string
  selectImage: string
  change: string
  updateProfileSuccess: string
  updateProfileSuccessDescription: string
  updateProfilePictureSuccess: string
  country: string
  countries: string
  selectCountry: string
  city: string
  cities: string
  selectCity: string
  phoneNumber: string
  signatureImage: string
  noUserFound: string
  question: string
  answer: string
  readingTime: string
  userSearchByNamePlaceholder: string
  userListDateRangePlaceholder: string
  category: string
  userCategorySearchPlaceholder: string
  userCategoryListDateRangePlaceholder: string
  selectUserCategory: string
  errorLoadingUserDetail: string
  errorLoadingUserCategoryDetail: string
  createSuccessTitle: string
  createSuccessMessage: string
  createErrorTitle: string
  createErrorMessage: string
}

export type Blog = {
  blog: string
  title: string
  content: string
  description: string
  image: string
  readingTime: string
  tags: string
  references: string
  relatedVideo: string
  nav_title: string
  nav_sub_blogBoard: string
  nav_sub_blogList: string
  nav_sub_blogCategoryList: string
  nav_sub_blogTargetCategoryList: string
  nav_sub_authorList: string
  bio: string
  facebook: string
  instagram: string
  linkedIn: string
  x: string
  blogTargetCategory: string
  blogTargetCategories: string
  createCreateBlogTargetCategory: string
  updateBlogTargetCategory: string
  deleteBlogTargetCategory: string
  viewBlogTargetCategory: string
  listBlogTargetCategory: string
  selectBlogTargetCategory: string
  selectTags: string
  selectReferences: string
  selectAuthor: string
  selectTargetCategory: string
  selectCategory: string
  authorCreatedSuccessfully: string
  authorUpdatedSuccessfully: string
  blogCategoryCreatedSuccessfully: string
  blogCategoryUpdatedSuccessfully: string
  blogCategoryDeletedSuccessfully: string
  blogTargetCategoryCreatedSuccessfully: string
  blogTargetCategoryUpdatedSuccessfully: string
  searchByNamePlaceholder: string
  noAuthorFound: string
  authorDetail: string
  author: string
  authorCreate: string
  icon: string
  createCategory: string
  noCategoryFound: string
  blogCategory: string
  translatedName: string
  parentCategory: string
  targetCategory: string
  searchPlaceholder: string
  deleteBlogCategory: string
  blogCategoryDeleteDescription: string
  thisBlogCategory: string
  authorDeletedSuccessfully: string
  deleteAuthor: string
  authorDeleteDescription: string
  thisAuthor: string
  blogDeletedSuccessfully: string
  deleteBlog: string
  blogDeleteDescription: string
  thisBlog: string
  blogTargetCategoryDeletedSuccessfully: string
  blogTargetCategoryDeleteDescription: string
  thisBlogTargetCategory: string
  blogCreateError: string
  createBlogSuccess: string
  createBlogError: string
  errorLoadingBlogDetails: string
  errorLoadingBlogs: string
  slug: string
  blogUpdateError: string
  blogUpdateSuccess: string
  tryAgainLater: string
  toRead: string
  viewed: string
  similarBlogs: string
  clearFilters: string
}

export type FormEnumsContactFormType = {
  contact: string
  request: string
  waitlist: string
}

export type FormEnumsContactFormSource = {
  web: string
  leadPlus: string
  marketing: string
  window: string
  community: string
}

export type FormEnumsContactFormStatus = {
  new: string
  inProgress: string
  awaitingResponse: string
  escalated: string
  closed: string
  spam: string
}

export type FormEnumsSubscriptionFormCreateUserType = {
  individual: string
  business: string
}

export type FormEnumsSubscriptionFormUserType = {
  anonymous: string
  individual: string
  business: string
}

export type FormEnumsSubscriptionFormStatus = {
  subscribed: string
  unsubscribed: string
}

export type FormEnums = {
  contactFormType_name: string
  contactFormType: FormEnumsContactFormType
  contactFormSource_name: string
  contactFormSource: FormEnumsContactFormSource
  contactFormStatus_name: string
  contactFormStatus: FormEnumsContactFormStatus
  subscriptionFormCreateUserType_name: string
  subscriptionFormCreateUserType: FormEnumsSubscriptionFormCreateUserType
  subscriptionFormUserType_name: string
  subscriptionFormUserType: FormEnumsSubscriptionFormUserType
  subscriptionFormStatus_name: string
  subscriptionFormStatus: FormEnumsSubscriptionFormStatus
}

export type Form = {
  enums: FormEnums
  contactForm: string
  contactFormCreate: string
  contactFormCreated: string
  contactFormError: string
  contactFormType: string
  contactFormSource: string
  contactFormDetail: string
  noContactFormFound: string
  contactFormUpdatedSuccessfully: string
  escalatedUser: string
  responsibleUser: string
  contactFormUpdate: string
  contactFormListSearchPlaceholder: string
  contactFormListDateRangePlaceholder: string
  subscriptionForm: string
  subscriptionFormCreate: string
  subscriptionFormCreated: string
  subscriptionFormError: string
  subscriptionFormType: string
  subscriptionFormSource: string
  subscriptionFormDetail: string
  noSubscriptionFormFound: string
  subscriptionFormUpdatedSuccessfully: string
  subscriptionFormUpdate: string
  newsTopicSubscribed: string
  blogTopicSubscribed: string
  productTopicSubscribed: string
  offerTopicSubscribed: string
  subscriptionFormListSearchPlaceholder: string
  subscriptionFormListDateRangePlaceholder: string
  sendContactForm: string
}

export type Webinar = {
  webinar: string
  webinarCreate: string
  webinarUpdatedSuccessfully: string
  noWebinarFound: string
  searchByNamePlaceholder: string
}

export type HelpCenter = {
  helpCenter: string
  helpCenters: string
  create: string
  update: string
  delete: string
  view: string
  list: string
  createdSuccessfully: string
  updatedSuccessfully: string
  deleteConfirm: string
  deletedSuccessfully: string
  category: string
  targetCategory: string
  language: string
  pleaseEnterTags: string
  title: string
  content: string
  description: string
  tags: string
  question: string
  answer: string
  readingTime: string
  filters: string
  searchPlaceholder: string
  noHelpCentersFound: string
  status: string
  active: string
  inactive: string
  createNew: string
  lastUpdated: string
  actions: string
  selectHelpCenterCategory: string
  helpCenterCategory: string
  helpCenterCategoryCreatedSuccessfully: string
  helpCenterCategoryUpdatedSuccessfully: string
  helpCenterCategoryName: string
  helpCenterCategorySearchByNamePlaceholder: string
  helpCenterSearchByQuestionPlaceholder: string
  helpCenterListDateRangePlaceholder: string
  helpCenterUpdatedSuccessfully: string
  helpCenterDeletedSuccessfully: string
  helpCenterDeleteConfirm: string
  helpCenterCreateSuccess: string
  helpCenterUpdateSuccess: string
  helpCenterDetailTitle: string
  helpCenterListTitle: string
  helpCenterCreateTitle: string
  helpCenterUpdateTitle: string
  helpCenterCategoryCreateTitle: string
  helpCenterCategoryUpdateTitle: string
  helpCenterCategoryDetailTitle: string
  helpCenterCategoryListTitle: string
  helpCenterCreateFormTitle: string
  helpCenterUpdateFormTitle: string
  helpCenterCategoryCreateFormTitle: string
  helpCenterCategoryUpdateFormTitle: string
  helpCenterDeleteDialogTitle: string
  helpCenterCategoryDeleteDialogTitle: string
  helpCenterCategorySelectorLabel: string
  helpCenterCategorySelectorPlaceholder: string
  helpCenterCategorySelectorNoResults: string
  helpCenterFormQuestionLabel: string
  helpCenterFormAnswerLabel: string
  helpCenterFormReadingTimeLabel: string
  helpCenterFormSubmitButton: string
  helpCenterFormCancelButton: string
  helpCenterFormLoadingMessage: string
  helpCenterDetailQuestionLabel: string
  helpCenterDetailAnswerLabel: string
  helpCenterDetailReadingTimeLabel: string
  helpCenterDetailCategoryLabel: string
  helpCenterDetailLanguageLabel: string
  createHelpCenter: string
  updateHelpCenter: string
  helpCenterDetail: string
  helpCenterDetails: string
  helpCenterList: string
  createCategory: string
  updateCategory: string
  categoryDetail: string
  categoryDetails: string
  categoryList: string
  categoryCreatedSuccessfully: string
  categoryUpdatedSuccessfully: string
  categoryDeletedSuccessfully: string
  errorLoadingHelpCenters: string
  errorLoadingCategoryDetails: string
  errorLoadingHelpCenterDetails: string
  noHelpCenterFound: string
  noCategoryFound: string
  failedToDeleteCategory: string
  deleteCategory: string
  deleteCategoryConfirmation: string
  thisCategory: string
  thisHelpCenter: string
}

export type File = {
  file: string
  imageUploadFailed: string
  invalidImageType: string
  fileTooLarge: string
  imageProcessingError: string
  imageUploadError: string
}

export type Task = {
  task: string
  nav_title: string
  nav_sub_taskList: string
  nav_sub_projectList: string
  tasks: string
  create: string
  update: string
  delete: string
  view: string
  list: string
  createdSuccessfully: string
  updatedSuccessfully: string
  deleteConfirm: string
  deletedSuccessfully: string
  category: string
  targetCategory: string
  language: string
  pleaseEnterTags: string
  title: string
  content: string
  description: string
  tags: string
  question: string
  answer: string
  readingTime: string
  filters: string
  searchPlaceholder: string
  noFaqsFound: string
  status: string
  active: string
  inactive: string
  createNew: string
  lastUpdated: string
  actions: string
  selectTaskCategory: string
  project: string
  projectUpdatedSuccessfully: string
  projectName: string
  projectSearchByNamePlaceholder: string
  projectSearchByQuestionPlaceholder: string
  projectDeletedSuccessfully: string
  taskDeleteConfirm: string
  taskDeletedSuccessfully: string
  thisTask: string
  taskCreateSuccess: string
  taskUpdateSuccess: string
  taskDetailTitle: string
  taskListTitle: string
  taskCreateTitle: string
  taskUpdateTitle: string
  projectCreateTitle: string
  projectUpdateTitle: string
  projectDetailTitle: string
  projectListTitle: string
}

export type Faq = {
  faq: string
  faqListTitle: string
  faqCreateTitle: string
  faqUpdateTitle: string
  faqDetailTitle: string
  faqCategoryListTitle: string
  faqCategoryCreateTitle: string
  faqCategoryUpdateTitle: string
  faqCategoryCreatedSuccessfully: string
  faqCategoryUpdatedSuccessfully: string
  noFaqFound: string
  noFaqCategoryFound: string
  faqCategory: string
  faqCategoryDetailTitle: string
  question: string
  answer: string
  readingTime: string
  popular: string
  createdSuccessfully: string
  updatedSuccessfully: string
  faqSearchByQuestionPlaceholder: string
  faqListDateRangePlaceholder: string
  category: string
  faqCategorySearchPlaceholder: string
  faqCategoryListDateRangePlaceholder: string
  selectFaqCategory: string
  errorLoadingFaqDetail: string
  errorLoadingFaqCategoryDetail: string
}

export type NotificationEnumsNotificationType = {
  authentication: string
  user: string
  announcement: string
  form: string
  alert: string
  reminder: string
  info: string
  custom: string
}

export type NotificationEnumsNotificationChannelType = {
  email: string
  sms: string
  push: string
  web: string
}

export type NotificationEnums = {
  notificationType_name: string
  notificationType: NotificationEnumsNotificationType
  notificationChannelType_name: string
  notificationChannelType: NotificationEnumsNotificationChannelType
}

export type Notification = {
  enums: NotificationEnums
  notification: string
  notifications: string
  create: string
  createDesc: string
  createSuccess: string
  createError: string
  update: string
  updateDesc: string
  updateSuccess: string
  updateError: string
  delete: string
  deleteDesc: string
  deleteSuccess: string
  deleteError: string
  list: string
  listDesc: string
  listSuccess: string
  listError: string
  listDateRangePlaceholder: string
  channels: string
  domain: string
  email: string
  sms: string
  push: string
  web: string
  createdSuccessfully: string
  notificationSearchByNamePlaceholder: string
  notificationListDateRangePlaceholder: string
  category: string
  selectNotificationCategory: string
  errorLoadingNotificationDetail: string
  noNotificationFound: string
  noNotificationHistoryFound: string
  notificationHistoryDetails: string
  notificationHistoryDeliveryDetails: string
  notificationHistoryTimestamps: string
  notificationHistoryResults: string
  notificationHistoryVariables: string
  notificationName: string
  channelType: string
  isSentToTopic: string
  sentTopic: string
  senderUser: string
  sentUser: string
}

export type Navigation = {
  home: string
  blog: string
  aboutUs: string
  aboutUsDesc: string
  contactUs: string
  help: string
  support: string
  aiSolutions: string
  aiForBusiness: string
  aiAgents: string
  getStarted: string
  goToDashboard: string
}

export type Subscription = {
  title: string
  description: string
  emailPlaceholder: string
  subscribeButton: string
}

export type Footer = {
  termsOfService: string
  privacyPolicy: string
  cookiesPolicy: string
  salesAgreement: string
  refundPolicy: string
  links: string
  support: string
  legal: string
  faq: string
  language: string
  companyDescription: string
  copyright: string
}

export type MetaGlobal = {
  title: string
  description: string
}

export type MetaPagesHome = {
  title: string
  description: string
  content: string
}

export type MetaPagesAboutUs = {
  title: string
  description: string
  content: string
}

export type MetaPagesAiForBusiness = {
  title: string
  description: string
  content: string
}

export type MetaPagesAiSolutions = {
  title: string
  description: string
  content: string
}

export type MetaPagesAiAgents = {
  title: string
  description: string
  content: string
}

export type MetaPagesContactUs = {
  title: string
  description: string
  content: string
}

export type MetaPagesCookiesPolicy = {
  title: string
  description: string
  content: string
}

export type MetaPagesFaq = {
  title: string
  description: string
  content: string
}

export type MetaPagesHelpCenter = {
  title: string
  description: string
  content: string
}

export type MetaPagesPrivacyPolicy = {
  title: string
  description: string
  content: string
}

export type MetaPagesRefundPolicy = {
  title: string
  description: string
  content: string
}

export type MetaPagesSalesAgreement = {
  title: string
  description: string
  content: string
}

export type MetaPagesTermsOfService = {
  title: string
  description: string
  content: string
}

export type MetaPagesBlog = {
  title: string
  description: string
  content: string
}

export type MetaPages = {
  home: MetaPagesHome
  aboutUs: MetaPagesAboutUs
  aiForBusiness: MetaPagesAiForBusiness
  aiSolutions: MetaPagesAiSolutions
  aiAgents: MetaPagesAiAgents
  contactUs: MetaPagesContactUs
  cookiesPolicy: MetaPagesCookiesPolicy
  faq: MetaPagesFaq
  helpCenter: MetaPagesHelpCenter
  privacyPolicy: MetaPagesPrivacyPolicy
  refundPolicy: MetaPagesRefundPolicy
  salesAgreement: MetaPagesSalesAgreement
  termsOfService: MetaPagesTermsOfService
  blog: MetaPagesBlog
}

export type Meta = {
  global: MetaGlobal
  pages: MetaPages
}

export type PagesHomeHero = {
  upperTitle: string
  title: string
  subtitle: string
  description: string
  requestDemo: string
  learnMore: string
}

export type PagesHomeAboutUs = {
  title: string
  description: string
  learnMore: string
}

export type PagesHomeOurSolutionsAiAgentSolutions = {
  title: string
  titlePart1: string
  titlePart2: string
  description: string
}

export type PagesHomeOurSolutionsDataVisualization = {
  title: string
  titlePart1: string
  titlePart2: string
  description: string
}

export type PagesHomeOurSolutionsMessagingAutomation = {
  title: string
  titlePart1: string
  titlePart2: string
  description: string
}

export type PagesHomeOurSolutionsDecisionSupport = {
  title: string
  titlePart1: string
  titlePart2: string
  description: string
}

export type PagesHomeOurSolutionsCustomSolutions = {
  title: string
  titlePart1: string
  titlePart2: string
  description: string
}

export type PagesHomeOurSolutions = {
  aiAgentSolutions: PagesHomeOurSolutionsAiAgentSolutions
  dataVisualization: PagesHomeOurSolutionsDataVisualization
  messagingAutomation: PagesHomeOurSolutionsMessagingAutomation
  decisionSupport: PagesHomeOurSolutionsDecisionSupport
  customSolutions: PagesHomeOurSolutionsCustomSolutions
}

export type PagesHomeWhyChooseFeatures0 = {
  title: string
  description: string
}

export type PagesHomeWhyChooseFeatures1 = {
  title: string
  description: string
}

export type PagesHomeWhyChooseFeatures2 = {
  title: string
  description: string
}

export type PagesHomeWhyChooseFeatures3 = {
  title: string
  description: string
}

export type PagesHomeWhyChooseFeatures = {
  0: PagesHomeWhyChooseFeatures0
  1: PagesHomeWhyChooseFeatures1
  2: PagesHomeWhyChooseFeatures2
  3: PagesHomeWhyChooseFeatures3
}

export type PagesHomeWhyChoose = {
  title: string
  features: PagesHomeWhyChooseFeatures
}

export type PagesHomeTestimonialsHeader = {
  title: string
  counter: string
}

export type PagesHomeTestimonials = {
  header: PagesHomeTestimonialsHeader
}

export type PagesHomeFaqQuestions0 = {
  question: string
  answer: string
}

export type PagesHomeFaqQuestions1 = {
  question: string
  answer: string
}

export type PagesHomeFaqQuestions2 = {
  question: string
  answer: string
}

export type PagesHomeFaqQuestions3 = {
  question: string
  answer: string
}

export type PagesHomeFaqQuestions4 = {
  question: string
  answer: string
}

export type PagesHomeFaqQuestions5 = {
  question: string
  answer: string
}

export type PagesHomeFaqQuestions = {
  0: PagesHomeFaqQuestions0
  1: PagesHomeFaqQuestions1
  2: PagesHomeFaqQuestions2
  3: PagesHomeFaqQuestions3
  4: PagesHomeFaqQuestions4
  5: PagesHomeFaqQuestions5
}

export type PagesHomeFaq = {
  title: string
  subtitle: string
  description: string
  questions: PagesHomeFaqQuestions
  askButtonText: string
  showMoreText: string
  hideText: string
  noQuestionsFound: string
  askYourOwnQuestion: string
  typeYourQuestion: string
  cancel: string
  submit: string
  viewQuestions: string
  back: string
}

export type PagesHome = {
  title: string
  description: string
  content: string
  hero: PagesHomeHero
  aboutUs: PagesHomeAboutUs
  ourSolutions: PagesHomeOurSolutions
  whyChoose: PagesHomeWhyChoose
  testimonials: PagesHomeTestimonials
  faq: PagesHomeFaq
}

export type PagesAboutUsOurMission = {
  title: string
  description1: string
  description2: string
}

export type PagesAboutUsCompanyHistory = {
  title: string
  description: string
  title-1: string
  title-2: string
  title-3: string
  title-4: string
  content-1: string
  content-2: string
  content-3: string
  content-4: string
}

export type PagesAboutUsTheTeam = {
  title: string
  description: string
}

export type PagesAboutUsMediaPress = {
  title: string
  description: string
}

export type PagesAboutUs = {
  title: string
  description: string
  content: string
  learnMore: string
  ourMission: PagesAboutUsOurMission
  companyHistory: PagesAboutUsCompanyHistory
  theTeam: PagesAboutUsTheTeam
  mediaPress: PagesAboutUsMediaPress
}

export type PagesBlogHero = {
  title: string
  description: string
}

export type PagesBlogFilteredPosts = {
  allPosts: string
  noPosts: string
}

export type PagesBlogEditorsChoice = {
  title: string
}

export type PagesBlogAllBlogs = {
  title: string
  viewAll: string
}

export type PagesBlogCategories = {
  title: string
  noCategories: string
}

export type PagesBlogPopularBlogs = {
  title: string
}

export type PagesBlog = {
  hero: PagesBlogHero
  filteredPosts: PagesBlogFilteredPosts
  editorsChoice: PagesBlogEditorsChoice
  allBlogs: PagesBlogAllBlogs
  categories: PagesBlogCategories
  popularBlogs: PagesBlogPopularBlogs
}

export type PagesContactUsHero = {
  title: string
  description: string
  button: string
}

export type PagesContactUsForm = {
  fullName: string
  fullNamePlaceholder: string
  email: string
  emailPlaceholder: string
  subject: string
  subjectPlaceholder: string
  message: string
  messagePlaceholder: string
  submit: string
  submitting: string
  successMessage: string
}

export type PagesContactUsContactInfoEmail = {
  label: string
  value: string
}

export type PagesContactUsContactInfoPhone = {
  label: string
  value: string
}

export type PagesContactUsContactInfoAddress = {
  label: string
  value: string
}

export type PagesContactUsContactInfo = {
  email: PagesContactUsContactInfoEmail
  phone: PagesContactUsContactInfoPhone
  address: PagesContactUsContactInfoAddress
}

export type PagesContactUs = {
  title: string
  description: string
  content: string
  hero: PagesContactUsHero
  form: PagesContactUsForm
  contactInfo: PagesContactUsContactInfo
}

export type PagesHelp = {
  title: string
  description: string
  content: string
}

export type PagesSupport = {
  title: string
  description: string
  content: string
}

export type PagesAiAgentsHero = {
  title: string
  description: string
  requestDemoButton: string
}

export type PagesAiAgentsOverviewStatisticsProcessAcceleration = {
  value: string
  label: string
}

export type PagesAiAgentsOverviewStatisticsCostSaving = {
  value: string
  label: string
}

export type PagesAiAgentsOverviewStatisticsInfrastructure = {
  value: string
  label: string
}

export type PagesAiAgentsOverviewStatistics = {
  processAcceleration: PagesAiAgentsOverviewStatisticsProcessAcceleration
  costSaving: PagesAiAgentsOverviewStatisticsCostSaving
  infrastructure: PagesAiAgentsOverviewStatisticsInfrastructure
}

export type PagesAiAgentsOverview = {
  title: string
  description: string
  statistics: PagesAiAgentsOverviewStatistics
}

export type PagesAiAgentsContentAutomation = {
  title: string
  feature1Title: string
  feature1Description: string
  feature2Title: string
  feature2Description: string
  feature3Title: string
  feature3Description: string
  feature4Title: string
  feature4Description: string
  description: string
}

export type PagesAiAgentsMessagingAutomation = {
  title: string
  description: string
  feature1Title: string
  feature1Description: string
  feature2Title: string
  feature2Description: string
  feature3Title: string
  feature3Description: string
  feature4Title: string
  feature4Description: string
}

export type PagesAiAgentsVoiceAutomation = {
  title: string
  description: string
  feature1Title: string
  feature1Description: string
  feature2Title: string
  feature2Description: string
  feature3Title: string
  feature3Description: string
  feature4Title: string
  feature4Description: string
}

export type PagesAiAgentsWhyAiAgentsAiDecisionAgents = {
  title: string
  description: string
  bullet1: string
  bullet2: string
  bullet3: string
}

export type PagesAiAgentsWhyAiAgentsDataVisualization = {
  title: string
  description: string
  bullet1: string
  bullet2: string
}

export type PagesAiAgentsWhyAiAgents = {
  title: string
  feature1: string
  feature2: string
  feature3: string
  aiDecisionAgents: PagesAiAgentsWhyAiAgentsAiDecisionAgents
  dataVisualization: PagesAiAgentsWhyAiAgentsDataVisualization
}

export type PagesAiAgentsGetOffer = {
  headline: string
  title: string
  description: string
  requestOfferButton: string
  faqButton: string
}

export type PagesAiAgentsFeaturedSectors = {
  title: string
  section-1: string
  section-1-description: string
  section-2: string
  section-2-description: string
  section-3: string
  section-3-description: string
  section-4: string
  section-4-description: string
  section-5: string
  section-5-description: string
  section-6: string
  section-6-description: string
  section-7: string
  section-7-description: string
  section-8: string
  section-8-description: string
  section-9: string
  section-9-description: string
}

export type PagesAiAgents = {
  title: string
  hero: PagesAiAgentsHero
  overview: PagesAiAgentsOverview
  contentAutomation: PagesAiAgentsContentAutomation
  messagingAutomation: PagesAiAgentsMessagingAutomation
  voiceAutomation: PagesAiAgentsVoiceAutomation
  whyAiAgents: PagesAiAgentsWhyAiAgents
  getOffer: PagesAiAgentsGetOffer
  featuredSectors: PagesAiAgentsFeaturedSectors
}

export type PagesAiSolutionsHeroStatistics = {
  statistic-1: string
  statistic-2: string
  statistic-3: string
}

export type PagesAiSolutionsHero = {
  title: string
  description: string
  button-1: string
  button-2: string
  statistics: PagesAiSolutionsHeroStatistics
}

export type PagesAiSolutionsWhyAiPowered = {
  title: string
  description: string
  list-1: string
  list-2: string
  list-3: string
  feature-1: string
  feature-2: string
  feature-3: string
}

export type PagesAiSolutionsAiPoweredSolutions = {
  title: string
  section-1-title: string
  section-1-description: string
  section-2-title: string
  section-2-description: string
  section-3-title: string
  section-3-description: string
}

export type PagesAiSolutionsWhyChoose = {
  title: string
  feature-1: string
  feature-2: string
  feature-3: string
  description-1: string
  description-2: string
  description-3: string
}

export type PagesAiSolutionsSuccessStories = {
  title: string
  story-1: string
  story-2: string
  story-3: string
  moreStory: string
}

export type PagesAiSolutionsTechnologiesUsed = {
  title: string
  description: string
  feature-1: string
  description-1: string
  feature-2: string
  description-2: string
  feature-3: string
  description-3: string
  feature-4: string
  description-4: string
  feature-5: string
  description-5: string
  feature-6: string
  description-6: string
}

export type PagesAiSolutions = {
  hero: PagesAiSolutionsHero
  whyAiPowered: PagesAiSolutionsWhyAiPowered
  aiPoweredSolutions: PagesAiSolutionsAiPoweredSolutions
  whyChoose: PagesAiSolutionsWhyChoose
  successStories: PagesAiSolutionsSuccessStories
  technologiesUsed: PagesAiSolutionsTechnologiesUsed
}

export type PagesAiForBusinessHero = {
  title: string
  description: string
  button-1: string
  button-2: string
}

export type PagesAiForBusinessOurSolutionsSlide-1 = {
  title: string
  titlePart1: string
  titlePart2: string
  description: string
}

export type PagesAiForBusinessOurSolutionsSlide-2 = {
  title: string
  titlePart1: string
  titlePart2: string
  description: string
}

export type PagesAiForBusinessOurSolutionsSlide-3 = {
  title: string
  titlePart1: string
  titlePart2: string
  description: string
}

export type PagesAiForBusinessOurSolutions = {
  slide-1: PagesAiForBusinessOurSolutionsSlide-1
  slide-2: PagesAiForBusinessOurSolutionsSlide-2
  slide-3: PagesAiForBusinessOurSolutionsSlide-3
}

export type PagesAiForBusinessAiTransformationSection-1 = {
  title: string
  item-1: string
  item-2: string
  item-3: string
}

export type PagesAiForBusinessAiTransformationSection-2 = {
  title: string
  item-1: string
  item-2: string
  item-3: string
}

export type PagesAiForBusinessAiTransformationSection-3 = {
  title: string
  item-1: string
  item-2: string
  item-3: string
}

export type PagesAiForBusinessAiTransformation = {
  title: string
  section-1: PagesAiForBusinessAiTransformationSection-1
  section-2: PagesAiForBusinessAiTransformationSection-2
  section-3: PagesAiForBusinessAiTransformationSection-3
}

export type PagesAiForBusinessSuccessStoriesStory-1 = {
  title: string
  content: string
  description: string
}

export type PagesAiForBusinessSuccessStoriesStory-2 = {
  title: string
  content: string
  description: string
}

export type PagesAiForBusinessSuccessStoriesStory-3 = {
  title: string
  content: string
  description: string
}

export type PagesAiForBusinessSuccessStories = {
  title: string
  story-1: PagesAiForBusinessSuccessStoriesStory-1
  story-2: PagesAiForBusinessSuccessStoriesStory-2
  story-3: PagesAiForBusinessSuccessStoriesStory-3
}

export type PagesAiForBusiness = {
  hero: PagesAiForBusinessHero
  ourSolutions: PagesAiForBusinessOurSolutions
  aiTransformation: PagesAiForBusinessAiTransformation
  successStories: PagesAiForBusinessSuccessStories
}

export type PagesTermsOfService = {
  title: string
  description: string
  content: string
}

export type PagesPrivacyPolicy = {
  title: string
  description: string
  content: string
}

export type PagesCookiesPolicy = {
  title: string
  description: string
  content: string
}

export type PagesSalesAgreement = {
  title: string
  description: string
  content: string
}

export type PagesRefundPolicy = {
  title: string
  description: string
  content: string
}

export type PagesFaqHero = {
  title: string
  description: string
  button: string
}

export type PagesFaq = {
  frequentlyAskedQuestions: string
  generalQuestions: string
  pricing: string
  technicalQuestions: string
  security: string
  hero: PagesFaqHero
}

export type PagesHelpCenterHero = {
  title: string
  description: string
  button: string
}

export type PagesHelpCenter = {
  hero: PagesHelpCenterHero
}

export type Pages = {
  home: PagesHome
  aboutUs: PagesAboutUs
  blog: PagesBlog
  contactUs: PagesContactUs
  help: PagesHelp
  support: PagesSupport
  aiAgents: PagesAiAgents
  aiSolutions: PagesAiSolutions
  aiForBusiness: PagesAiForBusiness
  termsOfService: PagesTermsOfService
  privacyPolicy: PagesPrivacyPolicy
  cookiesPolicy: PagesCookiesPolicy
  salesAgreement: PagesSalesAgreement
  refundPolicy: PagesRefundPolicy
  faq: PagesFaq
  helpCenter: PagesHelpCenter
}

export type MenuAiAgentsOverviewAndBenefitsDescriptions = {
  description1: string
  description2: string
}

export type MenuAiAgentsOverviewAndBenefits = {
  title: string
  descriptions: MenuAiAgentsOverviewAndBenefitsDescriptions
}

export type MenuAiAgentsMessagingAutomationDescriptions = {
  description1: string
  description2: string
}

export type MenuAiAgentsMessagingAutomation = {
  title: string
  descriptions: MenuAiAgentsMessagingAutomationDescriptions
}

export type MenuAiAgentsVoiceAutomationDescriptions = {
  description1: string
  description2: string
}

export type MenuAiAgentsVoiceAutomation = {
  title: string
  descriptions: MenuAiAgentsVoiceAutomationDescriptions
}

export type MenuAiAgentsContentAutomationDescriptions = {
  description1: string
  description2: string
}

export type MenuAiAgentsContentAutomation = {
  title: string
  descriptions: MenuAiAgentsContentAutomationDescriptions
}

export type MenuAiAgentsIndustryDemosDescriptions = {
  description1: string
  description2: string
  description3: string
  description4: string
  description5: string
  description6: string
  description7: string
  description8: string
  description9: string
}

export type MenuAiAgentsIndustryDemos = {
  title: string
  descriptions: MenuAiAgentsIndustryDemosDescriptions
}

export type MenuAiAgents = {
  overviewAndBenefits: MenuAiAgentsOverviewAndBenefits
  messagingAutomation: MenuAiAgentsMessagingAutomation
  voiceAutomation: MenuAiAgentsVoiceAutomation
  contentAutomation: MenuAiAgentsContentAutomation
  industryDemos: MenuAiAgentsIndustryDemos
}

export type MenuAiForBusinessSeminarsDescriptions = {
  description1: string
  description2: string
  description3: string
}

export type MenuAiForBusinessSeminars = {
  title: string
  descriptions: MenuAiForBusinessSeminarsDescriptions
}

export type MenuAiForBusinessAiTransformationConsultancyDescriptions = {
  description1: string
  description2: string
  description3: string
}

export type MenuAiForBusinessAiTransformationConsultancy = {
  title: string
  descriptions: MenuAiForBusinessAiTransformationConsultancyDescriptions
}

export type MenuAiForBusinessCaseStudies = {
  title: string
}

export type MenuAiForBusiness = {
  seminars: MenuAiForBusinessSeminars
  aiTransformationConsultancy: MenuAiForBusinessAiTransformationConsultancy
  caseStudies: MenuAiForBusinessCaseStudies
}

export type MenuAiSolutionsWebSolutionsDescriptions = {
  description1: string
  description2: string
  description3: string
  description4: string
}

export type MenuAiSolutionsWebSolutions = {
  title: string
  descriptions: MenuAiSolutionsWebSolutionsDescriptions
}

export type MenuAiSolutionsECommerceSolutionsDescriptions = {
  description1: string
  description2: string
}

export type MenuAiSolutionsECommerceSolutions = {
  title: string
  descriptions: MenuAiSolutionsECommerceSolutionsDescriptions
}

export type MenuAiSolutionsMobileAppSolutionsDescriptions = {
  description1: string
  description2: string
}

export type MenuAiSolutionsMobileAppSolutions = {
  title: string
  descriptions: MenuAiSolutionsMobileAppSolutionsDescriptions
}

export type MenuAiSolutions = {
  webSolutions: MenuAiSolutionsWebSolutions
  eCommerceSolutions: MenuAiSolutionsECommerceSolutions
  mobileAppSolutions: MenuAiSolutionsMobileAppSolutions
}

export type Menu = {
  aiAgents: MenuAiAgents
  aiForBusiness: MenuAiForBusiness
  aiSolutions: MenuAiSolutions
}

