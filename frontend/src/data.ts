import { Product } from "./types/Product";

export const SampleProducts: Product[] = [
    {
        name: 'Coffee Table',
        slug: "Coffee Table",
        image: "public\\images\\coffee table.jpg",
        category: "Tables",
        brand: "Swedish",
        price: 180,
        CountInStock: 15,
        description: "high quality",
        rating: 4.0,
        numReviews: 10,
    },
    {
        name: 'Conference Table',
        slug: "Conference Table",
        image: "public\\images\\conference table.jpg",
        category: "Tables",
        brand: "Swedish",
        price: 540,
        CountInStock: 10,
        description: "high quality",
        rating: 4.2,
        numReviews: 15,
    },
    {
        name: 'Dinning Table',
        slug: "Dining Table",
        image: "public\\images\\dinning table.jpg",
        category: "Tables",
        brand: "Swedish",
        price: 480,
        CountInStock: 6,
        description: "high quality",
        rating: 4.7,
        numReviews: 12,
    },
];
