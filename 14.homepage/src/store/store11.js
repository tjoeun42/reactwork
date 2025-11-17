import {configureStore, createSlice} from '@reduxjs/toolkit';

/*
    변경하는 값이 array/object인 경우
*/
/*
let user = createSlice({
    name : 'user',
    initialState : {name :'kim', age:20},
    reducers : {
        changeName(n) {
            return {name : 'park', age:20}
        }
    }
})
*/
let user = createSlice({
    name : 'user',
    initialState : {name :'kim', age:20},
    reducers : {
        changeAge(state, num) {  // 사용자로 부터 num에 해당하는 값을 받을 수 있음
            state.age += num.payload;
        },
        changeName(state) {
            state.name = 'park';
        }
    }
})
export let { changeAge, changeName } = user.actions

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