import useTheme from '@/utils/hooks/useTheme'
import { MODE_DARK } from '@/constants/theme.constant'
import {
  IFaqCategoryListItemPublicResult,
  IFaqListItemPublicResult,
} from '@corede_package'

interface CategoryListProps {
  questions: IFaqListItemPublicResult[]
  categories: IFaqCategoryListItemPublicResult[]
  selectedCategory: IFaqCategoryListItemPublicResult | undefined
  onSelectCategory: (category: IFaqCategoryListItemPublicResult) => void
}

const CategoryList = ({
  questions,
  categories,
  selectedCategory,
  onSelectCategory,
}: CategoryListProps) => {
  const mode = useTheme((state: any) => state.mode)
  const isDark = mode === MODE_DARK

  return (
    <div
      className={`rounded-xl overflow-hidden border ${isDark ? 'border-[#3d4da6]/40' : 'border-gray-200'}`}
    >
      {categories.map((category) => (
        <div
          key={category._id}
          onClick={() => onSelectCategory(category)}
          className={`py-4 px-5 cursor-pointer transition-all duration-300 ${
            selectedCategory?._id === category._id
              ? isDark
                ? 'bg-[#271e51] text-white'
                : 'bg-purple-100 text-purple-700'
              : isDark
                ? 'bg-transparent text-white/80 hover:bg-[#271e51]/50'
                : 'bg-white text-gray-700 hover:bg-gray-50'
          } ${
            isDark ? 'border-b border-[#3d4da6]/40' : 'border-b border-gray-200'
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="font-medium">{category.name}</span>
            <span className="bg-gray-200 text-gray-700 text-xs font-medium rounded-full py-1 px-2">
              {
                questions.filter(
                  (question) => question.category._id === category._id,
                ).length
              }
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CategoryList
