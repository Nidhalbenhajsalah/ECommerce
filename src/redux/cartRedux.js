import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        quantity: 0,
        total: 0
    },
    reducers: {
        addProduct: (state, action) => {
            state.quantity += 1;
            state.products.push(action.payload);
            state.total += action.payload.price * action.payload.quantity;
        },
        removeProduct: (state, action) => {
            state.quantity -= 1;
            state.products = state.products.filter(product => product.id !== action.payload.id);
            state.total -= action.payload.price * action.payload.quantity;
        },
        emptyCart: (state) => {
            state.products = [];
            state.quantity = 0;
            state.total = 0;
        }
    }
})

export const { addProduct, removeProduct, emptyCart } = cartSlice.actions;
export default cartSlice.reducer;