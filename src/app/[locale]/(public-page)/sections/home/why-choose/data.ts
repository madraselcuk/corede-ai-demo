export const rulerPositions = [73, 135, 195, 249] 

export type FeatureData = {
    image: string
    description: string
}

export const getFeatureData = (t: any) => {
    return [
        {
            image: '/img/others/why-choose-section/img-1.png',
            description: t('whyChoose.features.0.description')
        },
        {
            image: '/img/others/why-choose-section/img-2.png',
            description: t('whyChoose.features.1.description')
        },
        {
            image: '/img/others/why-choose-section/img-1.png',
            description: t('whyChoose.features.2.description')
        },
        {
            image: '/img/others/why-choose-section/img-2.png',
            description: t('whyChoose.features.3.description')
        }
    ]
}
