import React, {useState} from 'react';
import {useStyles} from "../theme";
import SearchBar from "../components/SearchBar";
import {SearchForm} from "../models/SearchForm";
import FlightList from "../components/FlightList";

function SearchPage(): JSX.Element {

    const [form, setForm] = useState<SearchForm>({scheduleDate: null, airline: null});
    const classes = useStyles();

    return (
        <div className={classes.fullHeight} >
            <div className={classes.header}>
                <SearchBar onSubmitForm={(form: SearchForm) => {setForm(form)}}/>
            </div>
            <FlightList form={form} />
        </div>
    );
}

export default SearchPage;
