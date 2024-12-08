import { Button, Card, Stack, Typography } from '@mui/material';
import { ECurrencies, TTicketWithId } from '../api/types';
import TALogo from '@shared/assets/images/taLogo.png';
import { Transfer, FlightLeg } from '@shared/ui';

type TProps = {
  ticket: TTicketWithId;
  currentCurrency: ECurrencies;
  currencyRate?: number;
};

export const Ticket = ({ ticket, currentCurrency, currencyRate }: TProps) => {
  const formatter = new Intl.NumberFormat('ru', {
    style: 'currency',
    currency: currentCurrency
  });

  return (
    <Card sx={{ display: 'flex', flex: 1, height: '150px', marginRight: '16px' }}>
      <Stack direction='row' flex={1}>
        <Stack width={150} padding='16px' gap='16px'>
          <img src={TALogo} />
          <Button variant='contained'>
            <Stack>
              <Typography variant='body2'>Купить</Typography>
              <Typography>{`за ${formatter.format(ticket.price / (currencyRate || 1))}`}</Typography>
            </Stack>
          </Button>
        </Stack>
        <Stack direction='row' justifyContent='space-between' flex={1} gap='16px' padding='16px'>
          <FlightLeg
            airport={ticket.origin}
            airportName={ticket.origin_name}
            date={ticket.departure_date}
            time={ticket.departure_time}
          />
          <Transfer stops={ticket.stops} />
          <FlightLeg
            isArrive
            airport={ticket.destination}
            airportName={ticket.destination_name}
            date={ticket.arrival_date}
            time={ticket.arrival_time}
          />
        </Stack>
      </Stack>
    </Card>
  );
};
