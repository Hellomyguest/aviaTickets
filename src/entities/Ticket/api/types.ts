export type TTicket = {
  origin: string;
  origin_name: string;
  destination: string;
  destination_name: string;
  departure_date: string;
  departure_time: string;
  arrival_date: string;
  arrival_time: string;
  carrier: string;
  stops: number;
  price: number;
};

export type TTicketWithId = TTicket & { id: string };

export type TTicketsResponse = {
  tickets: TTicket[];
};

export enum ECurrencies {
  RUB = 'RUB',
  USD = 'USD',
  EUR = 'EUR'
}
