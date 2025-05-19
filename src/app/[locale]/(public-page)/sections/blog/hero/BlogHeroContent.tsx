'use client'
import React, { useState, useEffect } from 'react'
import { Search, ListFilter } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/co/dropdown-menu'
import {
  IBlogCategoriesItemPublicResult,
  IBlogCategoriesPublicResult,
} from '@/@package/corede'
import { BlogWithSearchPublicFilters } from '@/domains/blog/views/blog/list-public-with-search/types'
export interface BlogHeroContentProps {
  blogCategoryList: IBlogCategoriesPublicResult
  blogCategoryListIsLoading: boolean
  // filters: BlogWithSearchPublicFilters
  setFilters: (filters: BlogWithSearchPublicFilters) => void
  
  toggleVisibilityFilteredPosts: (
    toggleVisibilityFilteredPosts: boolean,
  ) => void
  handleCategorySelect: (category: IBlogCategoriesItemPublicResult) => void
}
import { useTranslations } from 'next-intl'

const BlogHeroContent: React.FC<BlogHeroContentProps> = ({
  blogCategoryList,
  blogCategoryListIsLoading,
  // filters,
  setFilters,
  toggleVisibilityFilteredPosts,
  handleCategorySelect
}) => {
  const t = useTranslations('pages.blog.hero')
  const [selectedCategory, setSelectedCategory] = useState<
    IBlogCategoriesItemPublicResult | undefined
  >(undefined)
  const [searchQuery, setSearchQuery] = useState('')
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  const displayCategories = !blogCategoryListIsLoading
    ? blogCategoryList?.data?.slice(0, 5)
    : []
  const dropdownCategories = !blogCategoryListIsLoading
    ? blogCategoryList?.data
    : []

  // client-side mount check for portal
  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!searchQuery && !selectedCategory) {
      toggleVisibilityFilteredPosts(false)
    }
  }, [searchQuery, selectedCategory, toggleVisibilityFilteredPosts])

  const handleStateChange = (category?: IBlogCategoriesItemPublicResult) => {
    const titleFilter = searchQuery ? searchQuery : undefined
    //catgeoryId  seçilmediyse selectedCategory'i kullan. handleSearch değiştiğinde burası kullanılmış olur.
    const categoryId = category ? category._id : selectedCategory?._id
    setIsFilterOpen(false)
    setFilters({
      title: titleFilter,
      categoryIds: categoryId ? [categoryId] : undefined,
    })
    toggleVisibilityFilteredPosts(true)
  }

  // Kategori seçildiğinde çalışacak fonksiyon
  const handleCategoryClick = (category: IBlogCategoriesItemPublicResult) => {
    const newCategory =
      selectedCategory?._id === category?._id ? undefined : category
    setSelectedCategory(newCategory)
    handleStateChange(category)
    handleCategorySelect(category)
  }

  // Arama yapıldığında çalışacak fonksiyon
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Arama işlemi burada yapılacak
    handleStateChange()
  }

  return (
    <div className="flex flex-col items-center py-14 md:py-10">
      <h1 className="text-5xl md:text-8xl font-bold mb-6 text-center animate-slide-in opacity-0 dark:text-white text-transparent bg-clip-text bg-gradient-to-r from-secondary via-tertiary to-primary-deep pb-2">
        {t('title')}
      </h1>
      <p className="text-lg md:text-xl text-center max-w-3xl mx-auto mb-10 dark:text-slate-200 text-slate-700 animate-slide-in opacity-0 [animation-delay:200ms]">
        {t('description')}
      </p>

      {/* Arama form */}
      <form
        onSubmit={handleSearch}
        className="w-full max-w-2xl mb-5 animate-slide-in opacity-0 [animation-delay:400ms] flex justify-between gap-4"
      >
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search Blog"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-12 px-5 pl-14 rounded-xl dark:bg-slate-800/50 bg-white/40 backdrop-blur-sm border
             border-slate-200 dark:border-slate-700 focus:outline-none focus:ring focus:ring-secondary 
             focus:border-secondary focus:border-solid dark:text-white text-slate-800 dark:placeholder:text-slate-400 placeholder:text-slate-500"
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <Search className="h-5 w-5 text-slate-400" />
          </div>
        </div>

        {isMounted && (
          <DropdownMenu open={isFilterOpen} onOpenChange={setIsFilterOpen}>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                className={`bg-gradient-to-r rounded-xl hover:opacity-90 transition-opacity border
                flex items-center justify-center w-12 h-12 border-solid
                ${
                  isFilterOpen
                    ? 'border-secondary bg-secondary/10'
                    : 'border-slate-200 dark:border-slate-700 dark:bg-slate-800/50 bg-white/40'
                }`}
              >
                <ListFilter
                  className={`h-7 w-7 ${isFilterOpen ? 'text-secondary' : 'text-slate-500 dark:text-white'}`}
                />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-44">
              {dropdownCategories.map((category) => (
                <DropdownMenuItem
                  key={category.name}
                  onClick={() => handleCategoryClick(category)}
                  className={`${
                    selectedCategory?._id === category._id
                      ? 'bg-secondary/10 text-secondary dark:text-secondary'
                      : 'hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-800 dark:text-white'
                  }`}
                >
                  {category.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </form>

      {/* Kategori butonları */}
      <div className="flex flex-wrap w-full max-w-2xl gap-3 animate-slide-in opacity-0 [animation-delay:600ms]">
        {displayCategories.map((category) => (
          <button
            key={category.name}
            onClick={() => handleCategoryClick(category)}
            className={`px-2 py-2 rounded-xl border-[0.5px] flex-1 min-w-[100px] text-center
            ${
              selectedCategory?.name === category.name
                ? 'border-secondary bg-secondary/10 text-secondary dark:text-secondary dark:border-secondary'
                : 'border-slate-200 dark:border-slate-600 bg-white/40 dark:bg-slate-800 text-slate-800 dark:text-white'
            } 
            text-lg font-medium 
            hover:bg-slate-100 dark:hover:bg-slate-700 backdrop-blur-sm transition-colors`}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  )
}

export default BlogHeroContent
