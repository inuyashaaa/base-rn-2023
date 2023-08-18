import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface SystemState {
    pinCode: string;
}

const initialState: SystemState = {
    pinCode: '',
};

const systemSlice = createSlice({
    name: 'system',
    initialState: initialState,
    reducers: {
        setPincode(state, action: PayloadAction<string>) {
            state.pinCode = action.payload;
        },
        resetSystem(state, _action: PayloadAction<boolean>) {
            state.pinCode = '';
        },
    },
});

//----------------------------------------------------------------------------------------
// Export all action of this slice
//----------------------------------------------------------------------------------------
export const { setPincode, resetSystem } = systemSlice.actions;

export default systemSlice.reducer;
