import {useBackend} from './useBackend';
import {useState, useEffect} from 'react';
import {useStore} from "./useStore";

const useAirlines = () => {

    const {SchipholFlightApi} = useBackend();
    const {state, setState} = useStore();
    const [page, setPage] = useState<number|null>(0)
    const {data, error} = SchipholFlightApi.Airlines.useGetAirlines(page);

    useEffect( () => {
        if (data) {
            if (data.airlines) {
                setState((prev) => ({airlines: [...prev.airlines || [], ...data.airlines.filter(airline => airline.icao)]}));
            }
            if (data.link) {
                if (data.link.next) setPage(data.link.next.page);
                if (!data.link.next && data.link.last) setPage(data.link.last.page);
            }
        }
    }, [setState, data])

    return {data: state, error}
};

export default useAirlines
