'use client'
import React from 'react'
import { useTranslations } from 'next-intl'
import { X } from 'lucide-react'

interface FilteredPostsHeaderProps {
  categoryName?: string
  onClear?: () => void
}

const FilteredPostsHeader: React.FC<FilteredPostsHeaderProps> = ({
  categoryName,
  onClear,
}) => {
  const t = useTranslations('blog')

  return (
    <div className="flex justify-between items-center">
      <div>
        <h2 className="text-2xl md:text-5xl font-bold dark:text-white text-slate-800">
          {categoryName}
        </h2>
      </div>

      {categoryName && onClear && (
        <button
          onClick={onClear}
          className="flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 
          hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <X size={16} className="dark:text-gray-300 text-gray-700" />
          <span className="dark:text-gray-300 text-gray-700">
            {t('clearFilters')}
          </span>
        </button>
      )}
    </div>
  )
}

export default FilteredPostsHeader
