import React, {Dispatch, SetStateAction, useContext, useState} from "react";
import {Airline} from "../models/Airline";

export interface ApplicationState {
    airlines: Array<Airline>
}

interface StoreProviderInterface {
    children: React.ReactNode;
    value?: Partial<ApplicationState>;
}

export const StoreContext = React.createContext({
    state: {} as Partial<ApplicationState>,
    setState: {} as Dispatch<SetStateAction<Partial<ApplicationState>>>,
})

const StoreProvider = (

    {children, value = {} as ApplicationState}: StoreProviderInterface) => {
    const [state, setState] = useState(value);

    return (
        <StoreContext.Provider value={{state, setState}}>
            {children}
        </StoreContext.Provider>
    );
};

const useStore = () => {
    return useContext(StoreContext);
};

export {StoreProvider, useStore};
