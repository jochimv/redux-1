import {createSlice} from '@reduxjs/toolkit'

//we need to add a new slice, because the new slice has nothing to do with the old slice
const initialCounterState = { counter: 0, showCounter: false };

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter = state.counter + action.payload;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        }
    }
});


export const counterActions = counterSlice.actions;
//we need to export just the reducer part
export default counterSlice.reducer;
