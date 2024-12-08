import { ECurrencies } from "@entities/Ticket/api/types"

export type TTicketsMarketState = {
    currency: ECurrencies,
    filter: {
        stops: number[]
    }
}