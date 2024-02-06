import { Key } from "react"

export type Product =
 {
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