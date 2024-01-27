type Prop = {
    name: string,
    image: string
}

export type data = {
    data: Prop
}

export type product = {
    product: productType
}

type productType = {
    id: number
    name: string
    description: string
    price: number
    image: string

}