import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [], // Store cart items
    isCartOpen: false,
    islogin: false,
    token: null,
    chaeckOutItems: [],
  },
  reducers: {
    // Add item to cart
    addItem: (state, action) => {
      const item = action.payload;
      const existingItem = state.cartItems.find(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...item, quantity: 1 });
      }
    },

    // Remove item from cart
    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },

    // Increase quantity
    increaseQuantity: (state, action) => {
      const item = state.cartItems.find(
        (cartItem) => cartItem.id === action.payload
      );
      if (item) {
        item.quantity += 1;
      }
    },

    // Decrease quantity (remove if quantity becomes 0)
    decreaseQuantity: (state, action) => {
      const item = state.cartItems.find(
        (cartItem) => cartItem.id === action.payload
      );
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          state.cartItems = state.cartItems.filter(
            (cartItem) => cartItem.id !== action.payload
          );
        }
      }
    },

    toggleCart: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },

    login: (state, action) => {
      console.log(action);
      state.islogin = true;
      state.token = action.payload.token;
    },
    logout: (state) => {
      console.log("check it ");
      state.islogin = false;
      state.token = null;
    },
    checkOut: (state) => {
      // console.log("chsggj")
      state.chaeckOutItems = [...state.cartItems];

      state.cartItems = [];
    },
  },
});

export const {
  addItem,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
  toggleCart,
  login,
  logout,
  checkOut,
} = cartSlice.actions;
export default cartSlice.reducer;
