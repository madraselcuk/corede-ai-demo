'use client'

import { useState } from 'react'
import CategoryList from './CategoryList'
import QuestionGroup from './QuestionGroup'
import { FaqListPublicContainerUIProps } from '@/domains/faq/views/faq/list-public'
import { IFaqCategoryListItemPublicResult } from '@/@package/corede'

export const Questions: React.FC<FaqListPublicContainerUIProps> = (
  props: FaqListPublicContainerUIProps,
) => {
  const [selectedCategory, setSelectedCategory] = useState<
    IFaqCategoryListItemPublicResult | undefined
  >(undefined)

  const currentCategory = props.faqCategoryList.data.find(
    (category) => category._id === selectedCategory?._id,
  )

  const currentQuestions = props.faqListResult.data.filter(
    (question) => question.category._id === selectedCategory?._id,
  )

  return (
    <div className="w-full pt-24 pb-24" id="faq-questions">
      <div className="flex flex-col md:flex-row gap-8 md:gap-12">
        {/* Kategori Listesi */}
        <div className="md:w-1/4">
          <CategoryList
            questions={props.faqListResult.data}
            categories={props.faqCategoryList.data}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </div>

        {/* Soru ve Cevaplar */}
        <div className="md:w-3/4">
          {currentCategory && (
            <QuestionGroup
              category={currentCategory}
              questions={currentQuestions}
            />
          )}
        </div>
      </div>
    </div>
  )
}
