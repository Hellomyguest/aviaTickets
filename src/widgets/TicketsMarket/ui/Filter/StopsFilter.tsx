import { Checkbox, FormControlLabel, FormGroup, Stack, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '@shared/lib/hooks';
import {
  ticketMarketStopsFilterSelector,
  toggleAllStopFilter,
  toggleStopFilter
} from '@widgets/TicketsMarket/model';
import { useCallback } from 'react';

const STOPS = ['Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки'];

export const StopsFilter = () => {
  const dispatch = useAppDispatch();
  const stopsFilter = useAppSelector(ticketMarketStopsFilterSelector);

  const toggleAll = useCallback(() => {
    dispatch(toggleAllStopFilter());
  }, []);

  const toggleStop = useCallback((stop: number) => {
    dispatch(toggleStopFilter(stop));
  }, []);

  return (
    <Stack>
      <Typography variant='h6'>КОЛИЧЕСТВО ПЕРЕСАДОК</Typography>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox checked={stopsFilter.length === 4} onChange={() => toggleAll()} />}
          label='Все'
          sx={{
            '&:hover': {
              background: 'lightblue'
            }
          }}
        />
        {STOPS.map((stop, index) => (
          <FormControlLabel
            key={stop}
            control={
              <Checkbox checked={stopsFilter.includes(index)} onChange={() => toggleStop(index)} />
            }
            label={stop}
            sx={{
              paddingRight: '8px',
              '&:hover': {
                background: 'lightblue',
                '&::after': {
                  content: '"ТОЛЬКО"',
                  color: 'blue',
                  fontWeight: 'bold',
                  marginLeft: 'auto'
                }
              }
            }}
          />
        ))}
      </FormGroup>
    </Stack>
  );
};
