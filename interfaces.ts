export type TProductId =
  | '2zd33b8c'
  | '6trfgkkj'
  | '7bcr49em'
  | '098323ks'
  | 'b8uthe2y'
  | 'ewxsd6xb'
  | 'fpr72m9k'
  | 't9dv25gs'
  | 't345w48y'

export interface TProduct {
  name: string
  id: string
  sku: string
  price: number
  image: string
  attributes: {
    description: string
    shape: string
    hardiness: string
    taste: string
  }
}
