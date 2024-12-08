import { combineReducers } from '@reduxjs/toolkit';
import { rootApi } from '@shared/api/rootApi';
import { ticketsMarketSlice } from '@widgets/TicketsMarket/model';

export const rootReducer = combineReducers({
  [ticketsMarketSlice.name]: ticketsMarketSlice.reducer,
  [rootApi.reducerPath]: rootApi.reducer
});
