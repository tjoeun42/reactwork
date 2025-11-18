import {configureStore, createSlice} from '@reduxjs/toolkit';

/*
    과제 : Cart.js에서 + 버튼을 누르면 수량 1씩 증가시키기
*/
let stock = createSlice({
    name : 'stock',
    initialState : [5, 10, 9]
})

let cart = createSlice({
    name : 'cart',
    initialState : [],
    reducers : {
        addItem(state, action) {
            state.push(action.payload)
        },
        countIncrease(state, action) {
            let i = state.findIndex(a => a.id == action.payload)
            state[i].count++
        }
    }
})
export let { countIncrease, addItem } = cart.actions

export default configureStore({
    reducer: {
        stock : stock.reducer,
        cart : cart.reducer
    }
})