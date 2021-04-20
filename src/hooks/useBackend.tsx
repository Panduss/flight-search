import {Endpoint} from "../models/Endpoint";
import {Flight} from "../models/Flight";
import {Airline} from "../models/Airline";
import useSWR from "swr";
import {fetcher} from "../utils/fetcher";
import {Response} from "../models/Response";

export const useBackend = () => {
    return {
        SchipholFlightApi: {
            Flights: {
                useGetFlights: (scheduleDate: string|null, airline: string|null) => {
                    const fetchKey = scheduleDate ? [Endpoint.Flights, scheduleDate, airline] : null;
                    return useSWR<Response<Flight>>(fetchKey, (url, scheduleDate, airline) => fetcher(url, {}, "GET", {scheduleDate, ...(airline && {airline: airline})}), {revalidateOnFocus: false})}
            },
            Airlines: {
                useGetAirlines: (name: string|null) => {
                    const fetchKey = name ? [Endpoint.Airlines] : null;
                    return useSWR<Response<Airline>>(fetchKey, (url) => fetcher(url, {}, "GET"), {revalidateOnFocus: false})}
            }
        }
    }
}
