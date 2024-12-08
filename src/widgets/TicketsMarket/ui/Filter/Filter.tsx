import { Card, Stack } from '@mui/material';
import { CurrencyFilter } from './CurrencyFilter';
import { StopsFilter } from './StopsFilter';

export const Filter = () => {
  return (
    <Card>
      <Stack p='16px' gap='16px'>
        <CurrencyFilter />
        <StopsFilter />
      </Stack>
    </Card>
  );
};
