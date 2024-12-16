import { create } from "zustand";

interface CartStore {
  cart: CartItem[];
  totalItems: number;
  totalPrice: number;
  addToCart: (item: CartItem) => void;
  decreaseQuantity: (id: string) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartStore>((set) => ({
  cart: [],
  totalItems: 0,
  totalPrice: 0,

  addToCart: (item) => {
    set((state) => {
      const existingItem = state.cart.find((cartItem) => cartItem.id === item.id);

      const updatedCart = existingItem
        ? state.cart.map((cartItem) =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          )
        : [...state.cart, { ...item, quantity: 1 }];

      const totalItems = updatedCart.reduce((sum, cartItem) => sum + cartItem.quantity, 0);
      const totalPrice = updatedCart.reduce((sum, cartItem) => sum + cartItem.price * cartItem.quantity, 0);

      return {
        cart: updatedCart,
        totalItems,
        totalPrice,
      };
    });
  },

  decreaseQuantity: (id) => {
    set((state) => {
      const updatedCart = state.cart.filter((cartItem) => {
        if (cartItem.id === id) {
          if (cartItem.quantity > 1) {
            cartItem.quantity -= 1;
            return true;
          }
          return false; 
        }
        return true;
      });

      const totalItems = updatedCart.reduce((sum, cartItem) => sum + cartItem.quantity, 0);
      const totalPrice = updatedCart.reduce((sum, cartItem) => sum + cartItem.price * cartItem.quantity, 0);

      return {
        cart: updatedCart,
        totalItems,
        totalPrice,
      };
    });
  },

  clearCart: () => {
    set(() => ({ cart: [], totalItems: 0, totalPrice: 0 }));
  },
}));
