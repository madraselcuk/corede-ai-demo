'use client'
import MediaPress from './MediaPress'
import { similarBlogPosts } from './mockData'

const MediaPressSection = () => {
  return <MediaPress relatedPosts={similarBlogPosts} />
}

export default MediaPressSection 