import { Button, ButtonGroup, Stack, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '@shared/lib/hooks';
import { setCurrency, ticketMarketCurrencySelector } from '../../model';
import { useCallback } from 'react';
import { ECurrencies } from '@entities/Ticket/api/types';
import { useGetCurrencyRateQuery } from '@entities/Ticket/api/ticketApi';

export const CurrencyFilter = () => {
  const dispatch = useAppDispatch();
  const currentCurrency = useAppSelector(ticketMarketCurrencySelector);
  const { data: currencyRate } = useGetCurrencyRateQuery();

  const handleClickCurrency = useCallback((currency: ECurrencies) => {
    dispatch(setCurrency(currency));
  }, []);

  return (
    <Stack gap='8px'>
      <Typography variant='h6'>ВАЛЮТА</Typography>
      <ButtonGroup aria-label='Basic button group'>
        {Object.keys(ECurrencies).map((currency) => (
          <Button
            key={currency}
            disabled={!currencyRate}
            variant={currency === currentCurrency ? 'contained' : 'outlined'}
            onClick={() => handleClickCurrency(currency as ECurrencies)}
          >
            {currency}
          </Button>
        ))}
      </ButtonGroup>
    </Stack>
  );
};
