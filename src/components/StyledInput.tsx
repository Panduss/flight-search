import React, {useState} from 'react';
import {useStyles} from "../theme";
import {Airline} from "../models/Airline";

interface FieldProps {
    label: string;
    onValueChange: Function;
    airlines?: Array<Airline>
}

export default function StyledInput(props: FieldProps): JSX.Element {

    const classes = useStyles();
    const [value, setValue] = useState('');

    const handleChange = (event: React.FormEvent<EventTarget>) => {
        let target = event.target as HTMLInputElement;
        setValue(target.value);
        props.onValueChange(target.value);
    }

    return (
        <>
            <input
                type="text"
                placeholder={props.label}
                className={classes.field}
                onChange={handleChange}
                value={value}
            />
            {
                (value && props.airlines && props.airlines.length !== 0) &&
                <div className={classes.dropdownContent}>{
                    props.airlines.map((airline: Airline) => (
                        <div key={airline.publicName}>
                            <button className={classes.listButton} type="button" value={airline.icao} onClick={handleChange}>{airline.publicName + ` (${airline.icao})`}</button>
                        </div>
                    ))}
                </div>
            }
    </>
    )
}
