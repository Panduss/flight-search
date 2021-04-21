import React from "react";
import {useStyles} from "../theme";
import {Flight} from "../models/Flight";
import StyledText from "./StyledText";
import {useStore} from "../hooks/useStore";
import {AirportCodes, airportCodes} from '../utils/airportCodes';

export interface Props {
    flight: Flight;
    key: string
}

function FlightCard(props: Props): JSX.Element {
    const classes = useStyles();
    const { state } = useStore();

    const getDestination = (destinations: Array<string>) => {
        return airportCodes.find((airportCode: AirportCodes) => airportCode.iata === destinations[destinations.length - 1])?.name || destinations[destinations.length - 1];
    }

    const getAirline = (icao: string) => {
        return state.airlines?.find(airline => airline.icao === icao)?.publicName || icao;
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
                    <StyledText content={getAirline(props.flight.prefixICAO)} variant={'h3'} align={'left'}/>
                </div>
            </div>

        </div>
    )
}

export default FlightCard;
