import { ReactNode } from 'react'
// import Split from '@/components/layouts/AuthLayout/Split'
// import Simple from '@/components/layouts/AuthLayout/Simple'
import InternifAuth from '@/components/layouts/AuthLayout/InternifAuth'

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="flex flex-auto flex-col h-[100vh] bg-gray-800">
            <InternifAuth>{children}</InternifAuth>
        </div>
    )
}

export default Layout
