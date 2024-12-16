export const calculateTotal = (cart: CartItem[]): number => {
    return cart.reduce((total, item) => total + item.price * (item.quantity || 1), 0);
  };