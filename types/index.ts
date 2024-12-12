type Categories = "Electronics" | "Wearables" | "Home & Kitchen" | "Sports & Outdoors" | "Computers" | "Clothing" | "All";

type ShoppingCard = {
    id: string,
    name: string,
    price: number,
    description: string,
    rating: number,
    category: string,
    image: string,
    inStock: boolean
}
