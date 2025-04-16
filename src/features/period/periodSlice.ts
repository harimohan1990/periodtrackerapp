import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type PeriodEntry = {
  startDate: string;
  endDate: string;
  mood?: string;
};
interface PeriodState {
  entries: PeriodEntry[];
}

const initialState: PeriodState = {
  entries: [],
};

const periodSlice = createSlice({
  name: 'period',
  initialState,
  reducers: {
    addPeriod(state, action: PayloadAction<PeriodEntry>) {
      state.entries.push(action.payload);
    },
    deletePeriod(state, action: PayloadAction<number>) {
      state.entries.splice(action.payload, 1); // remove by index
    },
  },
});

export const { addPeriod, deletePeriod } = periodSlice.actions;
export default periodSlice.reducer;
