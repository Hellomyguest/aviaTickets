import { Filter } from './Filter/Filter';
import { Stack } from '@mui/material';
import { TicketsList } from './TicketsList';
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';

export const TicketsMarket = () => {
  return (
    <Stack
      sx={{
        height: '100vh',
        overflow: 'hidden',
        padding: '16px 0 16px 16px',
        boxSizing: 'border-box',
        gap: '16px'
      }}
    >
      <ConnectingAirportsIcon
        color='primary'
        fontSize='large'
        sx={{ border: '1px solid #1976d2', borderRadius: '50%', marginInline: 'auto' }}
      />
      <Stack direction='row' gap='24px' flex='1'>
        <Filter />
        <TicketsList />
      </Stack>
    </Stack>
  );
};
