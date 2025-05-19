'use client'

import React, { useState } from 'react'
import Categories from './Categories'
import ContentDisplay from './ContentDisplay'
import { HelpCenterListPublicContainerUIProps } from '@/domains/help-center/views/help-center/list-public/help-center-list-public.func.container'
import { IHelpCenterCategoryListItemResult } from '@/@package/corede'

export const Content = (props: HelpCenterListPublicContainerUIProps) => {
  const [selectedCategory, setSelectedCategory] =
    useState<IHelpCenterCategoryListItemResult | null>(null)

  return (
    <div className="py-12">
      {/* Kategoriler Bölümü */}
      <Categories
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        helpCenterCategoryList={props.helpCenterCategoryList.data}
      />

      {/* Seçilen Kategori İçeriği */}
      <ContentDisplay
        selectedCategory={selectedCategory}
        helpCenterList={props.helpCenterListResult.data}
      />
    </div>
  )
}
