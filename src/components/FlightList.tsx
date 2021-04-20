import {useBackend} from "../hooks/useBackend";
import {useStyles} from "../theme";
import {SearchForm} from "../models/SearchForm";
import React, {useEffect, useState} from "react";
import {Flight} from "../models/Flight";
import FlightCard from "./FlightCard";

export interface Props {
    data: SearchForm
}

function FlightList(props: Props): JSX.Element|null {

    const classes = useStyles();
    const {SchipholFlightApi} = useBackend();
    const [page, setPage] = useState<number|null>(0)
    const {data, error} = SchipholFlightApi.Flights.useGetFlights(page, props.data.scheduleDate, props.data.airline);

    useEffect(() => {
        // if (data && data.link) {
        //     if (data.link.next) setPage(data.link.next.page);
        //     if (!data.link.next && data.link.last) setPage(data.link.last.page);
        // }
    }, [data])

    return (
        data ? <div className={classes.box}>
            {
                data.flights.map((flight: Flight) => (
                    <FlightCard flight={flight} key={flight.id}/>
                ))}
        </div> : null
    )
}

export default FlightList;
