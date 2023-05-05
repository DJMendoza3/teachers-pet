import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface WindowState {
    width: number;
    height: number;
}

const initialState: WindowState = {
    width: 0,
    height: 0,
};

export const windowSlice = createSlice({
    name: 'window',
    initialState,
    reducers: {
        setWidth: (state, action: PayloadAction<number>) => {
            state.width = action.payload;
        },
        setHeight: (state, action: PayloadAction<number>) => {
            state.height = action.payload;
        },
    },
});

export const { setWidth, setHeight } = windowSlice.actions;

export default windowSlice.reducer;