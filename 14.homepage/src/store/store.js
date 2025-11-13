import {configureStore, createSlice} from '@reduxjs/toolkit';

/*
let 이름마음대로 = createSlice({
    name : 이름내마음대로,
    initialState : 값
})
*/
let user = createSlice({
    name : 'user',
    initialState : 'tjoeun'
})

let stock = createSlice({
    name : 'stock',
    initialState : [5, 10, 9]
})

export default configureStore({
    reducer: {
        user : user.reducer,
        stock : stock.reducer
    }
})