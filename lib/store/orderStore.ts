import { create } from "zustand"


interface Order {
    items: CartItem[];
    paymentMethod: string;
    deliveryPlace: DeliveryPlace;
    totalPrice: number;
  }

  interface OrderStore {
    currentOrder: Order;
    orderHistory: Order[];
    setItems: (items: CartItem[]) => void;
    setPaymentMethod: (method: string) => void;
    setDeliveryPlace: (place: DeliveryPlace) => void;
    setTotalPrice: (price: number) => void;
    confirmOrder: () => void;
    getDetailedOrder: () => Order; 
  }

  export const useOrderStore = create<OrderStore>((set, get) => ({
    currentOrder: {
      items: [],
      paymentMethod: "",
      deliveryPlace: {
        country: "",
        region: "",
        city: "",
        street: "",
        zip: "",
      },
      totalPrice: 0,
    },
    orderHistory: [], 
    setItems: (items) =>
      set((state) => ({
        currentOrder: { ...state.currentOrder, items },
      })),
    setPaymentMethod: (method) =>
      set((state) => ({
        currentOrder: { ...state.currentOrder, paymentMethod: method },
      })),
    setDeliveryPlace: (place) =>
      set((state) => ({
        currentOrder: { ...state.currentOrder, deliveryPlace: place },
      })),
    setTotalPrice: (price) =>
      set((state) => ({
        currentOrder: { ...state.currentOrder, totalPrice: price },
      })),
    confirmOrder: () =>
      set((state) => ({
        orderHistory: [...state.orderHistory, state.currentOrder],
        currentOrder: {
          items: [],
          paymentMethod: "",
          deliveryPlace: {
            country: "",
            region: "",
            city: "",
            street: "",
            zip: "",
          },
          totalPrice: 0,
        },
      })),
    getDetailedOrder: () => get().currentOrder,
  }));