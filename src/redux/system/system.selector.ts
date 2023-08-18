import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

const systemSelector = (state: RootState) => state.system;

export const pincode = createSelector(systemSelector, systemState => systemState.pinCode);
