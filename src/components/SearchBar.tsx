import React, {useEffect, useState} from 'react';
import Datepicker from '../components/Datepicker';
import {Button} from '@material-ui/core';
import StyledText from '../components/StyledText';
import {useStyles} from "../theme";
import StyledInput from "../components/StyledInput";
import {Airline} from "../models/Airline";
import {SearchForm} from "../models/SearchForm";
import {useAirlines} from "../hooks/useAirlines";
import {uniqueObjectsSet} from "../utils/uniqueArrayOfObjects";

interface Props {
    onSubmitForm: Function;
}

function SearchBar(props: Props): JSX.Element {

    const classes = useStyles();
    const today = new Date().toISOString().slice(0, 10);
    const {airlines} = useAirlines();
    const [page, setPage] = useState<number>(0);
    const [formState, setFormState] = useState<SearchForm>({page: page, scheduleDate: today, airline: null});
    const [searchResults, setSearchResults] = useState<Array<Airline>>([]);
    const searchValue = formState?.airline;

    useEffect(() => {
        if(searchValue && airlines) {
            const uniqueAirlines = uniqueObjectsSet(airlines)
            const results = uniqueAirlines.filter((airline: Airline) => airline.publicName.toLowerCase().startsWith(searchValue));
            setSearchResults(results);
        }
    }, [searchValue, airlines])

    useEffect(() => {
        setPage(() => 0);
    }, [formState])

    return (
        <div className={classes.box}>
            <StyledText content={'Find a flight from Schiphol'} align={'left'} variant={'h4'}/>
            <form onSubmit={(e) => {
                e.preventDefault();
                props.onSubmitForm(formState);
            }} noValidate autoComplete="off">
                <div className={classes.container}>
                    <div className={classes.item} style={{flex: 1}}>
                        <Datepicker onSelectDate={(date: string) => {
                            setFormState({...formState, scheduleDate: date})
                        }}/>
                    </div>
                    <div className={classes.item} style={{flex: 1}}>
                        <StyledInput
                            label="Filter on airlines"
                            onValueChange={(airline: string) => {
                                setFormState({...formState, airline: airline})
                            }}
                            airlines={searchResults}
                        />
                    </div>
                </div>
                <div className={classes.container}>
                    <div className={classes.item} style={{flex: 1}}>
                        <Button type="submit" variant='contained' color='primary'>Search</Button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default SearchBar;
