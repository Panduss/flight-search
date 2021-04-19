import {Endpoint} from "../models/Endpoint";
import useSWR from "swr";
import {Flight} from "../models/Flight";
import {fetcher} from "../utils/fetcher";
import {Airline} from "../models/Airline";

export const useBackend = () => {
    return {
        SchipholFlightApi: {
            Flights: {
                useGetFlights: (date: Date, airline?: string) => {
                    const fetchKey = date ? [Endpoint.Flights, date, airline] : null;
                    return useSWR<Array<Flight>>(fetchKey, (url, date, airline) => fetcher(url, {date, airline}, "GET"), {revalidateOnFocus: false})}
            },
            Airlines: {
                useGetAirlines: (name: string) => {
                    const fetchKey = name ? [Endpoint.Airlines] : null;
                    return useSWR<Array<Airline>>(fetchKey, (url) => fetcher(url, {}, "GET"), {revalidateOnFocus: false})}
            }
        }
    }
}
