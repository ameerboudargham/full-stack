import { Key } from "react"

export type Product =
 {
    countInStock: number
    id: Key | null | undefined
    name: string 
    slug: string
    image: string
    category: string
    brand: string
    price: number
    CountInStock: number
    description: string
    rating: number
    numReviews: number

}