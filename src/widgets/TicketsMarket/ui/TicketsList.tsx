import { useGetCurrencyRateQuery, useGetTicketsQuery } from '@entities/Ticket/api/ticketApi';
import { Ticket } from '@entities/Ticket/ui/Ticket';
import { useAppSelector } from '@shared/lib/hooks';
import { AutoSizer, List, ListRowRenderer } from 'react-virtualized';
import { ticketMarketCurrencySelector, ticketMarketStopsFilterSelector } from '../model';
import { Box, Skeleton, Stack, Typography } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';

const noRowsRenderer = () => (
  <Stack height='100%' alignItems='center' justifyContent='center'>
    <CancelIcon />
    <Typography variant='h6'>По вашему запросу ничего не найдено</Typography>
    <Typography variant='h6'>Попробуйте изменить параметры поиска</Typography>
  </Stack>
);

export const TicketsList = () => {
  const currentCurrency = useAppSelector(ticketMarketCurrencySelector);
  const stopsFilter = useAppSelector(ticketMarketStopsFilterSelector);
  const { data, isFetching } = useGetTicketsQuery({ stopsFilter });
  const { data: currencyRate } = useGetCurrencyRateQuery();

  console.log(stopsFilter);

  const rowRenderer: ListRowRenderer = ({ key, index, style }) => {
    const ticketData = data?.[index];

    return (
      <div style={style} key={key}>
        {isFetching ? (
          <Skeleton variant='rounded' height={150} />
        ) : (
          <Ticket
            ticket={ticketData!}
            currentCurrency={currentCurrency}
            currencyRate={currencyRate?.[currentCurrency]}
          />
        )}
      </div>
    );
  };

  return (
    <Box sx={{ flex: '1 1 auto' }}>
      <AutoSizer>
        {({ height, width }) => (
          <List
            height={height}
            width={width}
            rowRenderer={rowRenderer}
            rowHeight={166}
            noRowsRenderer={noRowsRenderer}
            rowCount={isFetching ? 5 : data!.length}
          />
        )}
      </AutoSizer>
    </Box>
  );
};
