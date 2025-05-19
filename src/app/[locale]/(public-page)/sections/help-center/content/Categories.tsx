import React from 'react'
import CategoryItem from './CategoryItem'
import { IHelpCenterCategoryListItemResult } from '@/@package/corede'
import { useI18n } from '@/localization/hooks/useI18n';


interface CategoriesProps {
  selectedCategory: IHelpCenterCategoryListItemResult | null;
  setSelectedCategory: (category: IHelpCenterCategoryListItemResult) => void;
  helpCenterCategoryList: IHelpCenterCategoryListItemResult[];
}

const Categories = ({ selectedCategory, setSelectedCategory, helpCenterCategoryList }: CategoriesProps) => {

  const { currentLanguage } = useI18n()
  return (
    <div id="help-categories" className="mb-16 pt-32">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {helpCenterCategoryList.map((category) => (
          <CategoryItem
            key={category._id}
            title={category.name}
            icon={category.icon || ''}
            description={category.nameTranslation?.[currentLanguage] || ''}
            isSelected={selectedCategory?._id === category._id}
            onClick={() => setSelectedCategory(category)}
          />
        ))}
      </div>
    </div>
  )
}

export default Categories 