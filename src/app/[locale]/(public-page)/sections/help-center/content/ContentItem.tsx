import React from 'react'

interface ContentItemProps {
  name: string
  content: string
}

const ContentItem = ({ name, content }: ContentItemProps) => {
  return (
    <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-primary transition-colors duration-200">
      <h3 className="text-xl font-semibold mb-3 text-white">{name}</h3>
      <p className="text-gray-400">{content}</p>
    </div>
  )
}

export default ContentItem 