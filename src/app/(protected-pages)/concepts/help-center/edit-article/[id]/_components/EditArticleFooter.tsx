'use client'

import Button from '@/components/ui/Button'
import Notification from '@/components/ui/Notification'
import toast from '@/components/ui/toast'
import { useRouter } from 'next/navigation'
import { TbDeviceFloppy, TbArrowNarrowLeft } from 'react-icons/tb'

export interface EditArticleFooterProps {
  submit: () => Promise<void>

  //state fields
  isUpdating: boolean
}

const EditArticleFooter = ({ submit, isUpdating }: EditArticleFooterProps) => {
  const router = useRouter()

  const handleBack = () => {
    history.back()
  }

  const handleSave = async () => {
    await submit()
    toast.push(<Notification type="success">Saved as draft</Notification>, {
      placement: 'top-center',
    })
    router.back()
  }

  const handlePublish = async () => {
    await submit()
    toast.push(<Notification type="success">Article published</Notification>, {
      placement: 'top-center',
    })
    router.back()
  }

  return (
    <div className="sticky bottom-0 left-0 right-0 z-10 mt-8 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 -mx-4 sm:-mx-8 py-4">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex items-center justify-between px-8">
          <Button
            className="ltr:mr-3 rtl:ml-3"
            type="button"
            variant="plain"
            icon={<TbArrowNarrowLeft />}
            onClick={handleBack}
          >
            Back
          </Button>
          <div className="flex items-center">
            <Button
              className="ltr:mr-3 rtl:ml-3"
              type="button"
              icon={<TbDeviceFloppy />}
              loading={isUpdating}
              onClick={handleSave}
            >
              Save
            </Button>
            <Button
              variant="solid"
              type="button"
              loading={isUpdating}
              onClick={handlePublish}
            >
              Publish
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditArticleFooter
