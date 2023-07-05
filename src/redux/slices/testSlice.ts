import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {Test, Question, Answer} from 'shared/types';

interface TestState {
    currentTest: Test;
}

const initialState: TestState = {
    currentTest: {
        TestName: "",
        TestDescription: "",
        Topic: "",
        Questions: [],
    }
};

export const testSlice = createSlice({
    name: 'currentTest',
    initialState,
    reducers: {
        setTest: (state, action: PayloadAction<Test>) => {
            state.currentTest = action.payload;
        },
    },
});

export const { setTest } = testSlice.actions;

export default testSlice.reducer;