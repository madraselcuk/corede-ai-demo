import type { Routes } from '@/@types/routes'

const otherRoute: Routes = {
    '/access-denied': {
        key: 'access-denied',
        authority: [],
        meta: {
            pageBackgroundType: 'plain',
            pageContainerType: 'contained',
        },
    },
}

export default otherRoute
