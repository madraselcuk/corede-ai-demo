'use client'

import { useState } from 'react'
import useTheme from '@/utils/hooks/useTheme'
import { MODE_DARK } from '@/constants/theme.constant'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import { IFaqCategoryListItemPublicResult, IFaqListItemPublicResult } from '@/@package/corede'


interface QuestionGroupProps {
  category: IFaqCategoryListItemPublicResult
  questions: IFaqListItemPublicResult[]
}

const QuestionGroup = ({ category, questions }: QuestionGroupProps) => {
  const [expandedQuestions, setExpandedQuestions] = useState<Record<string, boolean>>({})
  const mode = useTheme((state: any) => state.mode)
  const isDark = mode === MODE_DARK

  const toggleQuestion = (questionId: string) => {
    setExpandedQuestions((prev) => ({
      ...prev,
      [questionId]: !prev[questionId]
    }))
  }

  return (
    <div>
      <h3 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-800'}`}>
        {category.name}
      </h3>

      <div className="space-y-4">
        {questions.map((question) => (
          <div
            key={question._id}
            className={`border rounded-xl overflow-hidden transition-all duration-300 ${isDark
                ? 'border-[#3d4da6]/40 bg-[#0f1030]/20'
                : 'border-gray-200 bg-white'
              }`}
          >
            <div
              className={`flex justify-between items-center p-5 cursor-pointer ${expandedQuestions[question._id]
                  ? isDark
                    ? 'bg-[#271e51]'
                    : 'bg-purple-50'
                  : ''
                }`}
              onClick={() => toggleQuestion(question._id)}
            >
              <h4 className={`font-medium text-lg ${isDark ? 'text-white' : 'text-gray-800'}`}>
                {question.question}
              </h4>
              <span className={`text-xl ${isDark ? 'text-white/70' : 'text-gray-600'}`}>
                {expandedQuestions[question._id] ? <FiChevronUp /> : <FiChevronDown />}
              </span>
            </div>

            <AnimatePresence>
              {expandedQuestions[question._id] && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`p-5 border-t ${isDark ? 'border-[#3d4da6]/40 text-white/90' : 'border-gray-200 text-gray-700'
                    }`}>
                    {question.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  )
}

export default QuestionGroup 