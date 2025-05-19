import classNames from '../utils/classNames'
import { motion, AnimatePresence } from 'framer-motion'
import { useForm, FormItemContextProvider } from './context'
import { useConfig } from '../ConfigProvider'
import { CONTROL_SIZES, LAYOUT } from '../utils/constants'
import type { CommonProps, TypeAttributes } from '../@types/common'
import type { ReactNode, Ref } from 'react'
import Skeleton from '@/components/ui/Skeleton'
import { FieldValues, UseFormReturn, useFormState } from 'react-hook-form'
import { getFieldError } from '@/utils/form.util'

export interface FormItemProps extends CommonProps {
  hookName: string
  form: UseFormReturn<FieldValues>
  asterisk?: boolean
  errorMessage?: string
  extra?: string | ReactNode
  htmlFor?: string
  invalid?: boolean
  label?: string
  labelClass?: string
  labelWidth?: string | number
  labelShow?: boolean
  layout?: TypeAttributes.FormLayout
  ref?: Ref<HTMLDivElement>
  size?: TypeAttributes.ControlSize
  isLoading?: boolean
}

const FormItem = (props: FormItemProps) => {
  const {
    form,
    hookName,
    asterisk,
    children,
    className,
    errorMessage,
    extra,
    htmlFor,
    invalid,
    label,
    labelClass,
    labelWidth,
    labelShow = true,
    layout,
    ref,
    style,
    size,
  } = props

  const { errors } = useFormState({
    control: form.control,
  })

  const fieldError = getFieldError(errors, hookName)
  const isInvalid = invalid || Boolean(fieldError)

  const formContext = useForm()
  const { controlSize } = useConfig()

  const formItemLabelHeight = size || formContext?.size || controlSize
  const formItemLabelWidth = labelWidth || formContext?.labelWidth
  const formItemLayout = layout || formContext?.layout || 'vertical'

  const getFormLabelLayoutClass = () => {
    switch (formItemLayout) {
      case LAYOUT.HORIZONTAL:
        return label
          ? `${CONTROL_SIZES[formItemLabelHeight].h} ${
              label && 'ltr:pr-2 rtl:pl-2'
            }`
          : 'ltr:pr-2 rtl:pl-2'
      case LAYOUT.VERTICAL:
        return `mb-2`
      case LAYOUT.INLINE:
        return `${CONTROL_SIZES[formItemLabelHeight].h} ${
          label && 'ltr:pr-2 rtl:pl-2'
        }`
      default:
        return ''
    }
  }

  const formItemClass = classNames(
    'form-item',
    formItemLayout,
    className,
    isInvalid ? 'invalid' : '',
  )

  const formLabelClass = classNames(
    'form-label',
    label && getFormLabelLayoutClass(),
    labelClass,
  )

  const formLabelStyle = () => {
    if (formItemLayout === LAYOUT.HORIZONTAL) {
      return { ...style, ...{ minWidth: formItemLabelWidth } }
    }

    return { ...style }
  }

  const enterStyle = { opacity: 1, marginTop: 3, bottom: -21 }
  const exitStyle = { opacity: 0, marginTop: -10 }
  const initialStyle = exitStyle

  return (
    <FormItemContextProvider
      value={{
        invalid: isInvalid,
      }}
    >
      <div ref={ref} className={formItemClass}>
        <label
          htmlFor={htmlFor}
          className={formLabelClass}
          style={formLabelStyle()}
        >
          {labelShow && (
            <>
              {asterisk && (
                <span className="text-red-500 ltr:mr-1 rtl:ml-1">*</span>
              )}
              {label}
              {extra && <span>{extra}</span>}
              {label && formItemLayout !== 'vertical' && ':'}
            </>
          )}
        </label>
        <div
          className={
            formItemLayout === LAYOUT.HORIZONTAL
              ? 'w-full flex flex-col justify-center relative'
              : ''
          }
        >
          {props.isLoading ? (
            <Skeleton height={48} width="100%" className="rounded-lg" />
          ) : (
            children
          )}
          <AnimatePresence mode="wait">
            {isInvalid && (
              <motion.div
                className="form-explain"
                initial={initialStyle}
                animate={enterStyle}
                exit={exitStyle}
                transition={{ duration: 0.15, type: 'tween' }}
              >
                {errorMessage ?? fieldError?.message}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </FormItemContextProvider>
  )
}

export default FormItem
