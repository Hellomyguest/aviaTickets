import { Box, Stack, Typography } from '@mui/material';
import FlightIcon from '@mui/icons-material/Flight';

enum EStopsMap {
  'Без пересадок',
  '1 пересадка',
  '2 пересадки',
  '3 пересадки'
}

type TProps = {
  stops: number;
};

export const Transfer = ({ stops }: TProps) => {
  return (
    <Stack sx={{ height: 'fit-content', flex: 1, paddingTop: '8px' }}>
      <Typography color='textDisabled' variant='body2' align='center'>
        {EStopsMap[stops]}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flex: 1,
          position: 'relative',
          justifyContent: 'flex-end',
          '&::before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            background: 'lightgrey',
            left: 0,
            top: '45%',
            height: '2px',
            width: 'calc(100% - 21px)'
          }
        }}
      >
        <FlightIcon
          sx={{
            transform: 'rotate(90deg)'
          }}
          color='disabled'
        />
      </Box>
    </Stack>
  );
};
