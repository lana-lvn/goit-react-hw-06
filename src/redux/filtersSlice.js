import { createSlice } from "@reduxjs/toolkit";

const initialState = {
       name: ""
};

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        changeFilter: (state, action) => {
            state.name = action.payload;
        }
    }
});

export const filterReducer = filtersSlice.reducer;
export const selectFilter = state => state.filters.name;
export const { changeFilter } = filtersSlice.actions;