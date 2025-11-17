import {configureStore, createSlice} from '@reduxjs/toolkit';

/*
  * 변경하기
    reducers : {
        함수명(기존의 값) {
            return 변경값;
        }
    }
*/
let user = createSlice({
    name : 'user',
    initialState : 'tjoeun',
    reducers : {
        changeName(n) {
            return n + ' 3차'
        }
    }
})

export let { changeName } = user.actions

let stock = createSlice({
    name : 'stock',
    initialState : [5, 10, 9]
})

let cart = createSlice({
    name : 'cart',
    initialState : [
        {id:1, name:'jacket', count:1},
        {id:3, name:'knit', count:2}
    ]
})

export default configureStore({
    reducer: {
        user : user.reducer,
        stock : stock.reducer,
        cart : cart.reducer
    }
})