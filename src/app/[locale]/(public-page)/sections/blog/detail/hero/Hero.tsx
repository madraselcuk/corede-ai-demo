import React from 'react'
import SocialShareButton from './SocialShareButton'
import { BlogDetailPublicContainerUIProps } from '@/domains/blog/views/blog/detail-public/blog-detail-public.func.container'
import { format } from 'date-fns'
import Loading from '@/components/shared/Loading'

interface IHeroProps extends BlogDetailPublicContainerUIProps {}

const Hero: React.FC<IHeroProps> = ({
  blogDetailResult,
  blogDetailIsLoading,
}: IHeroProps) => {
  return (
    //TODO: blogDetailIsLoading loading skeleton ekle
    blogDetailIsLoading ? (
      <div className="flex justify-center items-center h-full">
        <Loading loading={blogDetailIsLoading} />
      </div>
    ) : (
      <header className="relative h-[360px] md:h-[560px] w-full mt-20">
        {blogDetailResult?.image?.publicUrl && (
          <img
            src={blogDetailResult?.image?.publicUrl}
            alt={blogDetailResult?.title ?? ''}
            className="object-cover w-full h-full"
          />
        )}
        <div className="absolute top-0 left-0 bg-gradient-to-t from-gray-100 to-transpatent dark:from-slate-950 dark:to-slate-950/20 size-full" />
        <div className="flex absolute top-1/4 md:top-2/4 md:left-2/4 flex-col gap-4 items-center md:-translate-x-2/4 md:-translate-y-1/16 max-md:gap-3 max-sm:gap-2.5 max-md:px-4">
          <span className="px-7 py-2 text-xl font-medium rounded-xl border-purple-600 border-solid bg-white/60 dark:bg-white/10 border-[0.5px] text-slate-800 dark:text-slate-200 max-md:text-lg max-sm:px-5 max-sm:py-1.5 max-sm:text-base">
            {blogDetailResult?.category?.name ?? ''}
          </span>
          <h1 className="text-4xl font-semibold text-center text-black dark:text-white max-md:text-3xl max-sm:text-3xl">
            {blogDetailResult?.title ?? ''}
          </h1>
          <div className="text-lg font-medium text-center text-black dark:text-slate-100 max-md:text-base max-sm:text-sm">
            {blogDetailResult?.author?.name ?? ''} ·{' '}
            {format(blogDetailResult?.createdAt ?? new Date(), 'dd MMM yyyy')} ·{' '}
            {blogDetailResult?.readingTime ?? ''}
          </div>
          <div className="flex gap-2.5">
            <SocialShareButton
              platform="slack"
              title={blogDetailResult?.title ?? ''}
            >
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="icon-svg"
                style={{ width: '24px', height: '24px', fill: '#E2E8F0' }}
              >
                <g clipPath="url(#clip0_316_3589)">
                  <path
                    d="M5.57238 15.1657C5.57238 16.5533 4.43883 17.6869 3.0512 17.6869C1.66358 17.6869 0.530029 16.5533 0.530029 15.1657C0.530029 13.7781 1.66358 12.6445 3.0512 12.6445H5.57238V15.1657Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M6.84277 15.1657C6.84277 13.7781 7.97632 12.6445 9.36395 12.6445C10.7515 12.6445 11.8851 13.7781 11.8851 15.1657V21.4784C11.8851 22.866 10.7515 23.9996 9.36395 23.9996C7.97632 23.9996 6.84277 22.866 6.84277 21.4784V15.1657Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M9.36395 5.04235C7.97632 5.04235 6.84277 3.9088 6.84277 2.52117C6.84277 1.13355 7.97632 0 9.36395 0C10.7516 0 11.8852 1.13355 11.8852 2.52117V5.04235H9.36395Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M9.36391 6.3125C10.7515 6.3125 11.885 7.44605 11.885 8.83367C11.885 10.2213 10.7515 11.3548 9.36391 11.3548H3.0512C1.66358 11.3548 0.530029 10.2213 0.530029 8.83367C0.530029 7.44605 1.66358 6.3125 3.0512 6.3125H9.36391Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M19.4875 8.83367C19.4875 7.44605 20.6211 6.3125 22.0087 6.3125C23.3963 6.3125 24.5299 7.44605 24.5299 8.83367C24.5299 10.2213 23.3963 11.3548 22.0087 11.3548H19.4875V8.83367Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M18.2173 8.83388C18.2173 10.2215 17.0838 11.355 15.6961 11.355C14.3085 11.355 13.175 10.2215 13.175 8.83388V2.52117C13.175 1.13355 14.3085 0 15.6961 0C17.0838 0 18.2173 1.13355 18.2173 2.52117V8.83388Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M15.6961 18.957C17.0838 18.957 18.2173 20.0906 18.2173 21.4782C18.2173 22.8658 17.0838 23.9994 15.6961 23.9994C14.3085 23.9994 13.175 22.8658 13.175 21.4782V18.957H15.6961Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M15.6961 17.6869C14.3085 17.6869 13.175 16.5533 13.175 15.1657C13.175 13.7781 14.3085 12.6445 15.6961 12.6445H22.0088C23.3965 12.6445 24.53 13.7781 24.53 15.1657C24.53 16.5533 23.3965 17.6869 22.0088 17.6869H15.6961Z"
                    fill="currentColor"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_316_3589">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="translate(0.530029)"
                    ></rect>
                  </clipPath>
                </defs>
              </svg>
            </SocialShareButton>
            <SocialShareButton
              platform="twitter"
              title={blogDetailResult?.title ?? ''}
            >
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="icon-svg"
                style={{ width: '24px', height: '24px', fill: '#E2E8F0' }}
              >
                <g clipPath="url(#clip0_316_3599)">
                  <path
                    d="M19.4216 1H23.0842L15.0842 10.2048L24.53 22.6867H17.1083L11.3252 15.1205L4.67461 22.6867H1.01196L9.59027 12.8554L0.530029 1H8.14449L13.3975 7.93976L19.4216 1ZM18.1204 20.4699H20.1445L7.03605 3.07229H4.81919L18.1204 20.4699Z"
                    fill="currentColor"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_316_3599">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="translate(0.530029)"
                    ></rect>
                  </clipPath>
                </defs>
              </svg>
            </SocialShareButton>
            <SocialShareButton
              platform="linkedin"
              title={blogDetailResult?.title ?? ''}
            >
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="icon-svg"
                style={{ width: '24px', height: '24px', fill: '#E2E8F0' }}
              >
                <g clipPath="url(#clip0_316_3602)">
                  <mask
                    id="mask0_316_3602"
                    style={{ maskType: 'luminance' }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="25"
                    height="24"
                  >
                    <path d="M24.53 0H0.530029V24H24.53V0Z" fill="white"></path>
                  </mask>
                  <g mask="url(#mask0_316_3602)">
                    <path
                      d="M20.9526 20.2213H17.4012V14.7144C17.4012 13.4012 17.3775 11.7107 15.5541 11.7107C13.7044 11.7107 13.4214 13.1415 13.4214 14.6188V20.2209H9.86994V8.89645H13.2793V10.4441H13.327C13.6682 9.86642 14.1613 9.39123 14.7537 9.06909C15.346 8.74696 16.0156 8.58994 16.6909 8.61476C20.2905 8.61476 20.9541 10.9591 20.9541 14.0089L20.9526 20.2213ZM5.86274 7.34847C5.45512 7.34854 5.05663 7.22893 4.71767 7.00476C4.3787 6.78059 4.11451 6.46193 3.95845 6.08908C3.8024 5.71623 3.7615 5.30593 3.84095 4.91007C3.9204 4.51421 4.11663 4.15056 4.4048 3.86512C4.69298 3.57968 5.06017 3.38526 5.45994 3.30645C5.85971 3.22764 6.2741 3.26798 6.65072 3.42236C7.02733 3.57675 7.34926 3.83825 7.57578 4.17379C7.8023 4.50933 7.92325 4.90385 7.92332 5.30745C7.92337 5.57544 7.8701 5.8408 7.76657 6.0884C7.66305 6.336 7.51129 6.56099 7.31995 6.75052C7.12861 6.94004 6.90142 7.0904 6.6514 7.19299C6.40137 7.29559 6.13339 7.34842 5.86274 7.34847ZM7.63846 20.2213H4.08332V8.89645H7.63846V20.2213ZM22.7232 0.0016169H2.29873C1.83515 -0.00356306 1.38843 0.173702 1.05679 0.49446C0.725138 0.815217 0.535687 1.25322 0.530029 1.71223V22.0195C0.535493 22.4787 0.724833 22.917 1.05647 23.2381C1.38811 23.5592 1.83492 23.7368 2.29873 23.7319H22.7232C23.1879 23.7377 23.636 23.5606 23.9689 23.2395C24.3019 22.9184 24.4925 22.4796 24.4989 22.0195V1.71077C24.4923 1.25085 24.3015 0.812343 23.9686 0.491594C23.6356 0.170844 23.1877 -0.00591465 22.7232 0.000151116"
                      fill="currentColor"
                    ></path>
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_316_3602">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="translate(0.530029)"
                    ></rect>
                  </clipPath>
                </defs>
              </svg>
            </SocialShareButton>
            <SocialShareButton
              platform="link"
              title={blogDetailResult?.title ?? ''}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="icon-svg"
                style={{ width: '24px', height: '24px', fill: '#E2E8F0' }}
              >
                <path
                  d="M15.7289 3.88438C17.1629 2.44438 19.2609 2.41438 20.4219 3.58038C21.5859 4.74838 21.5549 6.86038 20.1189 8.30038L17.6959 10.7334C17.5595 10.875 17.4842 11.0646 17.4862 11.2612C17.4881 11.4579 17.5673 11.6459 17.7065 11.7848C17.8458 11.9236 18.034 12.0022 18.2307 12.0037C18.4273 12.0051 18.6167 11.9292 18.7579 11.7924L21.1819 9.35938C23.0929 7.44038 23.3329 4.37738 21.4849 2.52138C19.6349 0.664382 16.5779 0.906382 14.6649 2.82538L9.81895 7.69238C7.90795 9.61138 7.66795 12.6744 9.51595 14.5294C9.58497 14.6012 9.66759 14.6585 9.759 14.698C9.8504 14.7375 9.94876 14.7584 10.0483 14.7595C10.1479 14.7606 10.2467 14.7418 10.3389 14.7043C10.4312 14.6668 10.5151 14.6114 10.5856 14.5411C10.6562 14.4709 10.7121 14.3873 10.75 14.2952C10.788 14.2031 10.8072 14.1044 10.8065 14.0048C10.8059 13.9053 10.7855 13.8068 10.7464 13.7152C10.7073 13.6236 10.6504 13.5407 10.5789 13.4714C9.41495 12.3034 9.44695 10.1914 10.8819 8.75138L15.7289 3.88438Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M14.485 9.46962C14.3444 9.32866 14.1536 9.24931 13.9545 9.24902C13.7555 9.24874 13.5644 9.32755 13.4235 9.46812C13.2825 9.60868 13.2032 9.79949 13.2029 9.99856C13.2026 10.1976 13.2814 10.3887 13.422 10.5296C14.586 11.6976 14.555 13.8086 13.119 15.2496L8.27197 20.1156C6.83697 21.5556 4.73897 21.5856 3.57797 20.4196C2.41397 19.2516 2.44597 17.1396 3.88097 15.6996L6.30497 13.2666C6.37451 13.1968 6.42961 13.114 6.46714 13.0229C6.50467 12.9318 6.5239 12.8342 6.52371 12.7357C6.52353 12.6372 6.50394 12.5397 6.46606 12.4487C6.42819 12.3578 6.37277 12.2752 6.30297 12.2056C6.23317 12.1361 6.15036 12.081 6.05927 12.0434C5.96817 12.0059 5.87058 11.9867 5.77206 11.9869C5.67353 11.9871 5.57601 12.0067 5.48506 12.0445C5.39411 12.0824 5.31151 12.1378 5.24197 12.2076L2.81797 14.6406C0.906971 16.5606 0.666971 19.6226 2.51497 21.4786C4.36497 23.3366 7.42197 23.0936 9.33497 21.1746L14.182 16.3076C16.093 14.3896 16.333 11.3246 14.485 9.46962Z"
                  fill="currentColor"
                ></path>
              </svg>
            </SocialShareButton>
          </div>
        </div>
      </header>
    )
  )
}

export default Hero
