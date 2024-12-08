import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TTicketsMarketState } from './types';
import { ECurrencies } from '@entities/Ticket/api/types';

const initialState: TTicketsMarketState = {
  currency: ECurrencies.RUB,
  filter: {
    stops: []
  }
};

export const ticketsMarketSlice = createSlice({
  name: 'ticketsMarket',
  initialState,
  reducers: {
    setCurrency: (state, { payload }: PayloadAction<ECurrencies>) => {
      if (state.currency !== payload) {
        state.currency = payload;
      }
    },
    toggleStopFilter: (state, { payload }: PayloadAction<number>) => {
      state.filter.stops = state.filter.stops.includes(payload)
        ? state.filter.stops.filter((stop) => stop !== payload)
        : [...state.filter.stops, payload];
    },
    toggleAllStopFilter: (state) => {
      state.filter.stops = state.filter.stops.length === 4 ? [] : [0, 1, 2, 3];
    }
  }
});

export const { setCurrency, toggleStopFilter, toggleAllStopFilter } = ticketsMarketSlice.actions;
