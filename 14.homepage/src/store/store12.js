import {configureStore, createSlice} from '@reduxjs/toolkit';

/*
    과제 : Cart.js에서 + 버튼을 누르면 수량 1씩 증가시키기
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
    ],
    /*  action에 index번호가 들어왔을 때(순서가 바뀌면 다른제품의 수량이 바뀔수 있음)
    reducers : {
        countIncrease(state, action) {
            state[action.payload].count++
        }
    }
    */
   // action에 id가 들어왔을 때
    reducers : {
        countIncrease(state, action) {
            let i = state.findIndex(a => a.id == action.payload)
            state[i].count++
        }
    }
})
export let { countIncrease } = cart.actions

export default configureStore({
    reducer: {
        user : user.reducer,
        stock : stock.reducer,
        cart : cart.reducer
    }
})