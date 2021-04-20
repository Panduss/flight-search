import React from "react";
import {useStyles} from "../theme";
import {Flight} from "../models/Flight";
import StyledText from "./StyledText";
import {useStore} from "../hooks/useStore";

export interface Props {
    flight: Flight;
    key: string
}

function FlightCard(props: Props): JSX.Element {
    const classes = useStyles();
    const { state } = useStore();

    const getAirline = (icao: string) => {
        return state.airlines?.find(airline => airline.icao === icao)?.publicName || icao;
    }

    return (
        <div className={classes.card}>
            <div className={classes.container}>
                <div className={classes.item}>
                    <StyledText content={props.flight.scheduleTime} variant={'h3'}/>
                    <StyledText content={props.flight.scheduleDate} variant={'h4'}/>
                </div>
                <div className={classes.item}>
                    <StyledText content={getAirline(props.flight.prefixICAO)} variant={'h3'}/>
                    <StyledText content={props.flight.scheduleDate} variant={'h4'}/>
                </div>
            </div>

        </div>
    )
}

export default FlightCard;
