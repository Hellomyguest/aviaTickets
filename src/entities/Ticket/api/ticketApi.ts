import { rootApi } from '@shared/api/rootApi';
import { TICKETS_MOCK } from '../lib/mock';
import { v4 as uuid } from 'uuid';
import { ECurrencies, TTicketWithId } from './types';
import { CURRENCY_RATE_MOCK } from '../lib/currencyMock';
import { wait } from '@shared/lib/utils/wait';

//Fake api

export const ticketApi = rootApi.injectEndpoints({
  endpoints: (build) => ({
    getTickets: build.query<TTicketWithId[], { stopsFilter: number[] }>({
      queryFn: async ({ stopsFilter }) => {
        try {
          await wait(2000);

          const sortedData = TICKETS_MOCK.tickets.sort((a, b) => a.price - b.price);

          if (stopsFilter.length === 0) {
            return { data: sortedData.map((ticket) => ({ ...ticket, id: uuid() })) };
          }

          const filteredDataWithId = sortedData.reduce<TTicketWithId[]>((acc, ticket) => {
            if (stopsFilter.includes(ticket.stops)) {
              return acc.concat({
                ...ticket,
                id: uuid()
              });
            }
            return acc;
          }, []);

          return {
            data: filteredDataWithId
          };
        } catch (error) {
          return { error };
        }
      }
    }),
    getCurrencyRate: build.query<{ [key in ECurrencies]: number }, void>({
      queryFn: async () => {
        try {
          await wait(2000);

          return {
            data: CURRENCY_RATE_MOCK
          };
        } catch (error) {
          return { error };
        }
      }
    })
  }),
  overrideExisting: false
});

export const { useGetTicketsQuery, useGetCurrencyRateQuery } = ticketApi;
