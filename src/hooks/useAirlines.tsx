import React, {createContext, useContext, useEffect, useState} from "react";
import {Airline} from "../models/Airline";
import {useBackend} from "./useBackend";

interface AirlineContextInterface {
    airlines: Array<Airline>;
    error: string;
}

export const AirlineContext = createContext({} as AirlineContextInterface)

export const AirlineProvider = ({children}: { children: React.ReactNode }): JSX.Element => {

    const {SchipholFlightApi} = useBackend();
    const [page, setPage] = useState<number|null>(0)
    const [airlines, setAirlines] = useState<Array<Airline>>([])
    const {data, error} = SchipholFlightApi.Airlines.useGetAirlines(page);

    useEffect( () => {
        if(data?.airlines) setAirlines((prev: Array<Airline>) => ([...prev || [], ...data?.airlines.filter(airline => airline.icao)]));
    }, [data?.airlines])

    useEffect( () => {
        if (data?.link?.next) setPage(parseInt(data.link.next.page, 10));
        if (!data?.link?.next && data?.link?.last) setPage(parseInt(data.link.last.page, 10));
    }, [data?.link])

    return (
        <AirlineContext.Provider value={{airlines, error}}>
            {children}
        </AirlineContext.Provider>
    );
};

export const useAirlines = () => {
    return useContext(AirlineContext);
};
