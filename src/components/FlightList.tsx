import {useBackend} from "../hooks/useBackend";
import {useStyles} from "../theme";
import {SearchForm} from "../models/SearchForm";
import React, {useEffect, useState} from "react";
import {Flight} from "../models/Flight";
import FlightCard from "./FlightCard";
import {Button} from "@material-ui/core";
import StyledText from "./StyledText";

export interface Props {
    form: SearchForm
}

function FlightList(props: Props): JSX.Element | null {

    const classes = useStyles();
    const {SchipholFlightApi} = useBackend();
    const [page, setPage] = useState<number | null>(0);
    const [moreResults, setMoreResult] = useState<boolean>(false);
    const [flights, setFlights] = useState<Array<Flight>>([]);
    const {data, error} = SchipholFlightApi.Flights.useGetFlights(page, props.form.scheduleDate, props.form.airline);

    useEffect(() => {
        if(data) {
            if(data.flights) {
                const flights = data.flights.filter(flight => flight.prefixICAO);
                if(page !== 0) setFlights((prev) => ([...prev || [], ...flights]));
                else setFlights(() => (flights));
            }
            if(data.link) {
                if(data.link.next) setMoreResult(() => true);
                else setMoreResult(() => false);
            }
        }
    }, [data, page])

    const loadMoreResults = () => {
        if(data && data.link) {
            if(data.link.next) {
                setPage(parseInt(data.link.next.page, 10));
            }
            if(!data.link.next && data.link.last) {
                setPage(parseInt(data.link.last.page, 10));
            }
        }
    }

    if(error) {
        return (
            <div className={classes.box}>
                <div className={classes.card}>
                    <div className={classes.container}>
                        <div className={classes.item} style={{flex: 1}}>
                            <StyledText content={'An error occurred, please try again later!'} variant={'h3'}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            flights.length ? <div className={classes.box}>
                    {
                        flights.filter((flight) => flight.prefixICAO).map((flight: Flight) => (
                            <FlightCard flight={flight} key={flight.id}/>
                        ))
                    }
                    {moreResults &&
                    <div className={classes.container}>
                        <div className={classes.item} style={{flex: 1}}>
                            <Button onClick={() => loadMoreResults()} variant='contained' color='primary'>Load more</Button>
                        </div>
                    </div>
                    }
                </div> :
                <div className={classes.box}>
                    <div className={classes.card}>
                        <div className={classes.container}>
                            <div className={classes.item} style={{flex: 1}}>
                                {(!props.form.scheduleDate && !props.form.airline) ?
                                    <StyledText content={'Set date or airline filters to see results.'}
                                                variant={'h3'}/> :
                                    <StyledText content={'No results find, try searching for something else.'}
                                                variant={'h3'}/>
                                }
                            </div>
                        </div>
                    </div>
                </div>
        )
    }

}

export default FlightList;
