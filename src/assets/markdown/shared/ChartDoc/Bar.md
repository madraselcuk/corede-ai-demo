```jsx
'use client'

import Loading from '@/components/shared/Loading'
import dynamic from 'next/dynamic'

const Chart = dynamic(() => import('@/components/shared/Chart'), {
    ssr: false,
    loading: () => (
        <div className="h-[410px] flex items-center justify-center">
            <Loading loading />
        </div>
    ),
})

const Bar = () => {
    const uniqueVisitorsData = {
        series: [
            {
                name: 'Session Duration',
                data: [45, 52, 38, 24, 33, 26, 21],
            },
            {
                name: 'Page Views',
                data: [35, 41, 62, 42, 13, 18, 29],
            },
        ],
        categories: [
            '01 Jan',
            '02 Jan',
            '03 Jan',
            '04 Jan',
            '05 Jan',
            '06 Jan',
            '07 Jan',
        ],
    }

    return (
        <Chart
            series={uniqueVisitorsData.series}
            xAxis={uniqueVisitorsData.categories}
            height={410}
            type="bar"
            customOptions={{
                colors: ['#ef4444', '#10b981'],
            }}
        />
    )
}

export default Bar
```
