import { CoChip } from '@/components/atoms/chip/chip'
import { CoChipProps } from '@/components/atoms/chip/chip.props'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/co/tooltip'

interface ChipListProps {
  chips: (CoChipProps & { label: string })[]
  maxDisplay?: number
}

export function ChipList({ chips, maxDisplay = 3 }: ChipListProps) {
  const visibleChips = chips.slice(0, maxDisplay)
  const remainingCount = chips.length - maxDisplay

  return (
    <div className="flex flex-wrap gap-1">
      {visibleChips.map((chip, index) => (
        <CoChip key={index} variant={chip.variant}>
          {chip.label}
        </CoChip>
      ))}
      {remainingCount > 0 && (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <CoChip variant="secondary">+{remainingCount}</CoChip>
          </TooltipTrigger>
          <TooltipContent>
            {chips
              .slice(maxDisplay)
              .map((chip) => chip.label)
              .join(', ')}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}
    </div>
  )
}
