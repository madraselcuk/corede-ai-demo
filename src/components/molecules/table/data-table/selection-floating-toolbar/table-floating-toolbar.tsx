import { Button } from '@/components/ui/Button'
import { Download, Trash, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  floatingToolbarAnimation,
  floatingToolbarTextAnimation,
  floatingToolbarButtonAnimation,
  floatingToolbarExportButtonAnimation,
} from '@/components/animation/motion'
// import { SIDE_NAV_WIDTH } from '@/constants/theme.constant'

interface TableFloatingToolbarProps {
  readonly selectedCount: number
  readonly onDelete?: (selectedIds: string[]) => void
  readonly onExport?: (selectedIds: string[]) => void
  readonly onClear: () => void
  readonly selectedIds: string[]
}

export function TableFloatingToolbar({
  selectedCount,
  onDelete,
  onExport,
  onClear,
  selectedIds,
}: TableFloatingToolbarProps) {
  return (
    <AnimatePresence>
      {selectedCount > 0 && (
        <motion.div
          className="bg-background fixed bottom-6 flex items-center backdrop-blur-sm 
          gap-6 lg:gap-12 rounded-lg border px-6 py-4 shadow-xl bg-gray-100/80 dark:bg-gray-800/80
          left-1/2 -translate-x-1/2 lg:-translate-x-1/4"
          {...floatingToolbarAnimation}
        >
          <div className="flex items-center gap-2">
            <motion.span
              className="text-muted-foreground text-sm"
              {...floatingToolbarTextAnimation}
            >
              {selectedCount} selected
            </motion.span>
            <Button
              size="sm"
              variant="plain"
              className="h-auto p-1 flex items-center justify-center"
              onClick={onClear}
            >
              <X className="size-4" />
            </Button>
          </div>
          {onDelete && (
            <motion.div {...floatingToolbarButtonAnimation}>
              <Button
                size="xs"
                className="flex items-center justify-center gap-2"
                onClick={() => onDelete(selectedIds)}
              >
                <Trash className="size-4" />
                <span>Delete</span>
              </Button>
            </motion.div>
          )}
          {onExport && (
            <motion.div {...floatingToolbarExportButtonAnimation}>
              <Button
                size="sm"
                className="flex items-center justify-center gap-2"
                onClick={() => onExport(selectedIds)}
              >
                <Download className="size-4" />
                <span>Export</span>
              </Button>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
//CHANGED animation to use motion library
