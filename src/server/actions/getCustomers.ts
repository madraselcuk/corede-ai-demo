import { userDetailData } from '@/mock/data/usersData'
import wildCardSearch from '@/utils/wildCardSearch'
import sortBy, { Primer } from '@/utils/sortBy'
import paginate from '@/utils/paginate'

const getCustomers = async (_queryParams: {
    [key: string]: string | string[] | undefined
}) => {
    const queryParams = _queryParams

    const {
        pageIndex = '1',
        pageSize = '10',
        sortKey = '',
        order,
        query,
    } = queryParams

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const customers = userDetailData as any[]

    let data = structuredClone(customers)
    let total = customers.length

    if (sortKey) {
        if (sortKey !== 'totalSpending') {
            data.sort(
                sortBy((sortKey || '') as string, order === 'desc', (a) =>
                    (a as string).toUpperCase(),
                ),
            )
        } else {
            data.sort(
                sortBy(sortKey as string, order === 'desc', parseInt as Primer),
            )
        }
    }

    if (query) {
        data = wildCardSearch(data, query as string)
        total = data.length
    }

    data = paginate(
        data,
        parseInt(pageSize as string),
        parseInt(pageIndex as string),
    )

    return {
        list: data,
        total: total,
    }
}

export default getCustomers
