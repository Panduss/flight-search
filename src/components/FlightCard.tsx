import React from "react";
import {useStyles} from "../theme";
import {Flight} from "../models/Flight";
import StyledText from "./StyledText";
import {AirportCodes, airportCodes} from '../utils/airportCodes';
import {useAirlines} from "../hooks/useAirlines";
import { Airline } from "../models/Airline";

export interface Props {
    flight: Flight;
    key: string
}

function FlightCard(props: Props): JSX.Element {

    const classes = useStyles();
    const { airlines } = useAirlines();

    const getDestination = (destinations: Array<string>) => {
        return airportCodes.find((airportCode: AirportCodes) => airportCode.iata === destinations[destinations.length - 1])?.name || destinations[destinations.length - 1];
    }

    const getAirline = (icao: string) => {
        return airlines.find((airline: Airline) => airline.icao === icao)?.publicName || icao;
    }

    return (
        <div className={classes.card}>
            <div className={classes.container}>
                <div className={classes.item} style={{ flex: 1}}>
                    <StyledText content={props.flight.scheduleTime.slice(0,5)} variant={'h2'}/>
                    {props.flight.terminal && <>
                        <hr className={classes.divider} />
                        <StyledText content={'Terminal ' + props.flight.terminal} variant={'h3'}/>
                    </>}
                </div>
                <div className={classes.item} style={{ flex: 3}}>
                    <StyledText content={getDestination(props.flight.route.destinations)} variant={'h2'} align={'left'}/>
                    <StyledText content={props.flight.flightName + ` (${getAirline(props.flight.prefixICAO)})`} variant={'h3'} align={'left'}/>
                </div>
            </div>

        </div>
    )
}

export default FlightCard;
