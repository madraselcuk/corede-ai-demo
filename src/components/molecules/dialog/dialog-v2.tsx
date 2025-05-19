// TODO: enabled this - there are errors

// 'use client'

// import Button from '@/components/ui/Button'
// import { Dialog } from '@/components/ui/Dialog'
// import { DialogProps } from '@/components/ui/Dialog'
// import { useState } from 'react'

// export interface DialogV2Props extends DialogProps {
//   open: boolean
//   setOpen: (open: boolean) => void
// }

// export const DialogV2 = ({
//   isOpen,
//   setIsOpen,
//   children,
//   ...props
// }: DialogV2Props) => {
//   const onDialogClose = (e: MouseEvent) => {
//     console.log('onDialogClose', e)
//     setIsOpen(false)
//   }

//   const onDialogOk = (e: MouseEvent) => {
//     console.log('onDialogOk', e)
//     setIsOpen(false)
//   }

//   return (
//     <Dialog {...props}>
//       <div className="flex flex-col h-full justify-between">
//         <h5 className="mb-4">Dialog Title</h5>
//         <div className="max-h-96 overflow-y-auto">{children}</div>
//         <div className="text-right mt-6">
//           <Button
//             className="ltr:mr-2 rtl:ml-2"
//             variant="plain"
//             // onClick={onDialogClose}
//           ></Button>
//           <Button
//             variant="solid"
//             // onClick={onDialogOk}
//           >
//             Okay
//           </Button>
//         </div>
//       </div>

//       {children}
//     </Dialog>
//   )
// }
