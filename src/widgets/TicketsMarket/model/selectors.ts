import { TRootState } from '@app/appStore';

export const ticketMarketCurrencySelector = ({ ticketsMarket }: TRootState) =>
  ticketsMarket.currency;
export const ticketMarketStopsFilterSelector = ({ ticketsMarket }: TRootState) =>
  ticketsMarket.filter.stops;
