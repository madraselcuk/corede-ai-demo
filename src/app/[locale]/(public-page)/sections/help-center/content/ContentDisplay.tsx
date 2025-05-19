import React from 'react'
import ContentItem from './ContentItem'
import { IHelpCenterCategoryListItemResult, IHelpCenterListItemResult } from '@/@package/corede';

interface ContentDisplayProps {
  selectedCategory: IHelpCenterCategoryListItemResult | null;
  helpCenterList: IHelpCenterListItemResult[];
}

const ContentDisplay = ({ selectedCategory, helpCenterList }: ContentDisplayProps) => {
  if (!selectedCategory) return null

  const filteredHelpCenterList = helpCenterList.filter(c => c.category._id === selectedCategory._id)
  return (
    <div className="mt-12 animate-fade-in">
      <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary-deep to-primary">
        {selectedCategory.name}
      </h2>
      <div className="space-y-6">
        {filteredHelpCenterList.map((item) => (
          <ContentItem key={item._id} name={item.question} content={item.answer} />
        ))}
      </div>
    </div>
  )
}

export default ContentDisplay