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

type CartItem = {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
  }