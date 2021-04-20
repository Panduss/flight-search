import React, {useEffect, useState} from 'react';
import {useBackend} from "../hooks/use-backend";
import Datepicker from '../components/Datepicker';
import {Button} from '@material-ui/core';
import StyledText from '../components/StyledText';
import {useStyles} from "../theme";
import StyledInput from "../components/StyledInput";
import {Airline} from "../models/Airline";
import {SearchForm} from "../models/SearchForm";

interface Props {
    onSubmitForm: Function;
}

function SearchBar(props: Props): JSX.Element {

    const classes = useStyles();
    const today = new Date().toISOString().slice(0, 10);
    const {SchipholFlightApi} = useBackend();
    const [formState, setFormState] = useState<SearchForm>({scheduleDate: today, airline: null});
    const [searchResults, setSearchResults] = useState<Array<Airline>>([]);
    const {data, error} = SchipholFlightApi.Airlines.useGetAirlines(formState.airline||null);

    useEffect( () => {
        const searchValue = formState?.airline;
        const airlines = data?.airlines;
        if (searchValue && airlines) {
            const results = airlines.filter((airline: Airline) => airline.publicName.toLowerCase().includes(searchValue));
            setSearchResults(results);
        }

    }, [data, formState.airline])

    return (
        <div className={classes.box}>
            <StyledText content={'Find a flight'} align={'left'} title />
            <div className={classes.container}>
                <div className={classes.item}>
                    <Datepicker onSelectDate={(date: string) => {setFormState({...formState, scheduleDate: date})}}/>
                </div>
                <div className={classes.item}>
                    <StyledInput
                        label="Filter on airlines"
                        onValueChange={(airline: string) => {setFormState({...formState, airline: airline})}}
                        airlines={searchResults}
                    />
                </div>
            </div>
            <div className={classes.container}>
                <div className={classes.item}>
                    <Button onClick={() => props.onSubmitForm(formState)} variant='contained' color='secondary'>Search</Button>
                </div>
            </div>
        </div>
    );
}

export default SearchBar;
