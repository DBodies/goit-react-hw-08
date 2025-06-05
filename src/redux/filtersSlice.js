import { createSlice } from "@reduxjs/toolkit";


const slice = createSlice({
    name: "filter",
    initialState: {
        items: ""
    },
    reducers: {
        filterContact: (state, action) => {
            state.name = action.payload
        }
    }
})

export const selectNameFilter = (state) => state.filter.name;

export const { filterContact } = slice.actions
export default slice.reducer