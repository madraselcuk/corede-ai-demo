// Local Imports
// import Writer from "@/assets/illustrations/writer.svg?react"
// import { useThemeContext } from "@/app/contexts/theme/context"
import { AuthorCard } from "./AuthorCard"

// Types
interface Author {
  uid: string
  cover: string
  avatar: string | null
  color: "primary" | "secondary" | "success" | "warning" | "error"
  socialLinks: {
    twitter: string
    instagram: string
    facebook: string
    [key: string]: string
  }
  name: string
  location: string
  chartData: number[]
  postsCount: string
  follows: {
    uid: string
    name: string
    avatar: string | null
  }[]
}

// ----------------------------------------------------------------------

const authors: Author[] = [
  {
    uid: "1",
    cover: "/images/800x600.png",
    avatar: "/images/200x200.png",
    color: "primary",
    socialLinks: {
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
      facebook: "https://facebook.com"
    },
    name: "Konnor Guzman",
    location: "USA, Washington DC",
    chartData: [1765, 2357, 4215, 3971, 3841, 4221],
    postsCount: "24",
    follows: [
      {
        uid: "5",
        name: "Katrina West",
        avatar: "/images/200x200.png"
      },
      {
        uid: "6",
        name: "Henry Curtis",
        avatar: "/images/200x200.png"
      },
      {
        uid: "7",
        name: "Raul Bradley",
        avatar: "/images/200x200.png"
      }
    ]
  },
  {
    uid: "2",
    cover: "/images/800x600.png",
    avatar: "/images/200x200.png",
    color: "secondary",
    socialLinks: {
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
      facebook: "https://facebook.com"
    },
    name: "Travis Fuller",
    location: "UK, London",
    chartData: [2357, 4215, 1765, 4221, 3841, 5665],
    postsCount: "11",
    follows: [
      {
        uid: "8",
        name: "Samantha Shelton",
        avatar: null
      },
      {
        uid: "9",
        name: "Corey Evans",
        avatar: "/images/200x200.png"
      },
      {
        uid: "10",
        name: "Lance Tucker",
        avatar: null
      }
    ]
  },
  {
    uid: "3",
    cover: "/images/800x600.png",
    avatar: "/images/200x200.png",
    color: "success",
    socialLinks: {
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
      facebook: "https://facebook.com"
    },
    name: "Alfredo Elliott",
    location: "Australia, Sydney",
    chartData: [6153, 7020, 5659, 3422, 5439, 6081],
    postsCount: "171",
    follows: [
      {
        uid: "11",
        name: "Anthony Jensen",
        avatar: "/images/200x200.png"
      },
      {
        uid: "12",
        name: "Anthony Jensen",
        avatar: "/images/200x200.png"
      }
    ]
  },
  {
    uid: "4",
    cover: "/images/800x600.png",
    avatar: "/images/200x200.png",
    color: "error",
    socialLinks: {
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
      facebook: "https://facebook.com"
    },
    name: "Derrick Simmons",
    location: "Austria, Vienna",
    chartData: [1499, 2303, 2857, 1791, 2194, 1351],
    postsCount: "67",
    follows: [
      {
        uid: "5",
        name: "Katrina West",
        avatar: "/images/200x200.png"
      },
      {
        uid: "6",
        name: "Henry Curtis",
        avatar: "/images/200x200.png"
      },
      {
        uid: "7",
        name: "Raul Bradley",
        avatar: "/images/200x200.png"
      }
    ]
  },
  {
    uid: "5",
    cover: "/images/800x600.png",
    avatar: "/images/200x200.png",
    color: "warning",
    socialLinks: {
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
      facebook: "https://facebook.com"
    },
    name: "Samantha Shelton",
    location: "Germany, Berlin",
    chartData: [1765, 2357, 4215, 3971, 3841, 4221],
    postsCount: "36",
    follows: [
      {
        uid: "8",
        name: "Samantha Shelton",
        avatar: null
      },
      {
        uid: "9",
        name: "Corey Evans",
        avatar: "/images/200x200.png"
      },
      {
        uid: "10",
        name: "Lance Tucker",
        avatar: null
      }
    ]
  }
]

export function TopAuthors() {
  // const { primaryColorScheme: primary, darkColorScheme: dark } =
  //   useThemeContext()

  return (
    <div className="mt-4 sm:mt-5 lg:mt-6">
      <div className="transition-content flex h-8 w-full items-center justify-between px-[--margin-x]">
        <h2 className="dark:text-dark-100 text-base font-medium tracking-wide text-gray-800">
          Top Authors
        </h2>
        <a
          href="##"
          className="text-primary-600 hover:text-primary-600/70 focus:text-primary-600/70 dark:text-primary-400 dark:hover:text-primary-400/70 dark:focus:text-primary-400/70 border-b border-dotted border-current pb-0.5 text-xs+ font-medium outline-none transition-colors duration-300"
        >
          View All
        </a>
      </div>
      <div className="mt-3 grid grid-cols-12 gap-4 sm:gap-5 lg:gap-6">
        <div className="transition-content mt-4 hidden pl-[--margin-x] lg:col-span-3 lg:flex">
          <div className="flex items-center justify-center px-3">
            {/* <Writer
              className="w-full"
              style={
                {
                  "--primary": primary[500],
                  "--dark": dark[600]
                } as React.CSSProperties
              }
            /> */}
          </div>
        </div>
        <div className="hide-scrollbar col-span-12 flex space-x-4 overflow-x-auto px-[--margin-x] lg:col-span-9 lg:pl-0 rtl:space-x-reverse">
          {authors.map((author) => (
            <AuthorCard
              key={author.uid}
              avatar={author.avatar}
              cover={author.cover}
              color={author.color}
              socialLinks={author.socialLinks}
              name={author.name}
              chartData={author.chartData}
              location={author.location}
              postsCount={author.postsCount}
              follows={author.follows}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
