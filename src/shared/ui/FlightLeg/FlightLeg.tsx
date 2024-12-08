import { Stack, Typography } from '@mui/material';
import { dateFormatter } from '@shared/lib/utils/dateFormatter';

type TProps = {
  airport: string;
  airportName: string;
  date: string;
  time: string;
  isArrive?: boolean;
};

export const FlightLeg = ({ isArrive, airport, airportName, date, time }: TProps) => {
  return (
    <Stack sx={{ position: 'relative' }}>
      <Typography variant='h3'>{time}</Typography>
      <Stack sx={{ position: 'absolute', top: '56px', right: isArrive ? 0 : 'unset' }}>
        <Typography variant='body1' noWrap fontWeight='bold'>
          {isArrive ? ` ${airportName}, ${airport}` : `${airport}, ${airportName}`}
        </Typography>
        <Typography variant='body1' noWrap>
          {dateFormatter(date)}
        </Typography>
      </Stack>
    </Stack>
  );
};
