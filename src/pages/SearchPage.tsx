import React, {useEffect, useState} from 'react';
import {useStyles} from "../theme";
import SearchBar from "../components/SearchBar";
import {SearchForm} from "../models/SearchForm";

function SearchPage(): JSX.Element {

    const [form, setForm] = useState<SearchForm>({scheduleDate: null, airline: null});
    const classes = useStyles();

    useEffect(() => {console.log('FORM', form)}, [form])

    return (
        <div className={classes.fullHeight} >
            <div className={classes.header}>
                <SearchBar onSubmitForm={(form: SearchForm) => {setForm(form)}}/>
            </div>
        </div>
    );
}

export default SearchPage;
