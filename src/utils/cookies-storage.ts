import Cookies from 'js-cookie'

// Check if we're in a browser environment
const isBrowser = typeof window !== 'undefined'

const cookiesStorage = {
  getItem: (key: string) => {
    if (!isBrowser) return null
    return Cookies.get(key) || null
  },
  setItem: (key: string, value: string) => {
    if (!isBrowser) return
    Cookies.set(key, value, { expires: 30 }) // 30 days expiry
  },
  removeItem: (key: string) => {
    if (!isBrowser) return
    Cookies.remove(key)
  }
}

export default cookiesStorage 