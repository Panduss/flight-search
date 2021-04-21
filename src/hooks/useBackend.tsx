import {Endpoint} from "../models/Endpoint";
import useSWR from "swr";
import {fetcher} from "../utils/fetcher";
import {AirlinesResponse, FlightsResponse} from "../models/Response";

export const useBackend = () => {
    return {
        SchipholFlightApi: {
            Flights: {
                useGetFlights: (page: number | null, scheduleDate: string | null, airline: string | null) => {
                    const fetchKey = scheduleDate || page || airline ? [Endpoint.Flights, page, scheduleDate, airline] : null;
                    return useSWR<FlightsResponse>(fetchKey, (url, page, scheduleDate, airline) => fetcher(url, {}, "GET", {page, scheduleDate, ...(airline && {airline: airline})}), {revalidateOnFocus: false})
                }
            },
            Airlines: {
                useGetAirlines: (page?: number | null) => {
                    return useSWR<AirlinesResponse>([Endpoint.Airlines, page], (url, page) => fetcher(url, {}, 'GET', {page}), {revalidateOnFocus: false});
                }
            }
        }
    }
}
