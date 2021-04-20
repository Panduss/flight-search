import "react-datepicker/dist/react-datepicker.css";
import React, {useState} from "react";
import {useStyles} from "../theme";

interface Props {
    onSelectDate: Function
}

function Datepicker(props: Props): JSX.Element {
    const today = new Date().toISOString().substr(0, 10);
    const classes = useStyles();
    const [startDate, setStartDate] = useState(today);

    const handleChange = (event: React.FormEvent<EventTarget>) => {
        let target = event.target as HTMLInputElement;
        setStartDate(target.value);
        props.onSelectDate(target.value);
    }

    return (
        <input type="date" value={startDate} min={today} className={classes.field} onChange={handleChange}/>
    )
}

export default Datepicker;
