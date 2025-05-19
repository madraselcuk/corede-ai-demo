export const rulerPositions = [73, 135, 195, 249]

export type FeatureData = {
  image: string
  description: string
}

export const getFeatureData = (t: any) => {
  return [
    {},
    {
      image: '/img/others/why-choose-section/img-1.png',
      description: t('description-2'),
    },
    {
      image: '/img/others/why-choose-section/img-2.png',
      description: t('description-3'),
    },
    {
      image: '/img/others/why-choose-section/img-3.png',
      description: t('description-1'),
    },
  ]
}
