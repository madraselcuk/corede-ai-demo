'use client'

import appConfig from '@/configs/app.config'
import { i18n } from '@/localization'
import toast from '@/components/ui/toast'
import { GetUseEffectErrorResult } from '@/utils/use-effect-error-result-handler'
import { Language } from '@common_package'
import { Notification } from '@/components/ui/Notification'
import { PiSignOutDuotone } from 'react-icons/pi'
import { useAuth, useRefreshToken } from '@/auth/session'
import { useCallback } from 'react'
import { useLogoutMutation } from '@/domains/auth/api'
import { useRouter } from 'next/navigation'

export interface SignOutComponentProps {
  logoutLoading?: boolean
  setLogoutLoading?: (loading: boolean) => void
}

export const SignOutComponent = ({
  logoutLoading,
  setLogoutLoading,
}: SignOutComponentProps) => {
  const router = useRouter()
  const currentLanguage = i18n.language as Language
  const { handleSignOut } = useAuth()
  const { refreshToken } = useRefreshToken()

  // queries
  const [
    logoutMutation,
    // { data: logoutResult, isLoading: logoutLoading, error: logoutError },
  ] = useLogoutMutation()

  const navigateAfterSuccessfulLogout = useCallback(() => {
    router.push(appConfig.unAuthenticatedEntryPath)
  }, [router])

  const signOut = useCallback(async () => {
    setLogoutLoading && setLogoutLoading(true)

    try {
      const logoutResult = await logoutMutation({
        input: {
          refreshToken: refreshToken ?? '',
        },
      })

      if (logoutResult.data?.success) {
        toast.push(
          <Notification type="success">
            {i18n.t('auth:logoutSuccess')}
          </Notification>,
        )

        handleSignOut()
        setLogoutLoading && setLogoutLoading(false)

        // Navigate to dashboard
        navigateAfterSuccessfulLogout()
      } else {
        toast.push(
          <Notification type="danger">
            {i18n.t('auth:logoutFailed')}
          </Notification>,
        )

        setLogoutLoading && setLogoutLoading(false)
      }
    } catch (error) {
      console.error('signOut error', error)
      toast.push(
        <Notification type="danger">
          {GetUseEffectErrorResult(error, currentLanguage) ??
            i18n.t('auth:logoutFailed')}
        </Notification>,
      )

      setLogoutLoading && setLogoutLoading(false)
    }
  }, [
    logoutMutation,
    handleSignOut,
    navigateAfterSuccessfulLogout,
    setLogoutLoading,
    currentLanguage,
    refreshToken,
  ])

  // useEffects

  // useEffect(() => {
  //   console.log('logoutError', logoutError)
  //   if (logoutError) {
  //     console.error('logout error', logoutError)
  //     toast.push(
  //       <Notification type="danger">
  //         {GetUseEffectErrorResult(logoutError, currentLanguage) ??
  //           i18n.t('auth:logoutFailed')}
  //       </Notification>,
  //     )
  //   }
  // }, [logoutError, currentLanguage])

  // useEffect(() => {
  //   console.log('logoutResult', logoutResult)
  //   if (logoutResult) {
  //     // Format the login data for handleSignIn
  //     if (logoutResult.success) {
  //       toast.push(
  //         <Notification type="success">
  //           {i18n.t('auth:logoutSuccess')}
  //         </Notification>,
  //       )

  //       handleSignOut()
  //       // Navigate to dashboard
  //       navigateToAuthPage()
  //     } else {
  //       toast.push(
  //         <Notification type="danger">
  //           {i18n.t('auth:logoutFailed')}
  //         </Notification>,
  //       )
  //     }
  //   }
  // }, [logoutResult, handleSignOut, navigateToAuthPage])

  return (
    <button
      className="w-full flex items-center gap-2 cursor-pointer hover:opacity-80"
      onClick={signOut}
      disabled={logoutLoading}
    >
      <span className="text-xl">
        <PiSignOutDuotone />
      </span>
      <span>{logoutLoading ? 'Signing out...' : 'Sign Out'}</span>
    </button>
  )
}

export default SignOutComponent
