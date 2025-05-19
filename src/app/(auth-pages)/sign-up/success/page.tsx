import { SignUpSuccessUI } from '@/domains/auth/views/sign-up/main/sign-up-success.ui'
import { containerVariants, itemVariants } from '@/domains/auth/common/motion'

const SignUpSuccessPage = () => {
  return (
    <SignUpSuccessUI
      containerVariants={containerVariants}
      itemVariants={itemVariants}
    />
  )
}

export default SignUpSuccessPage
