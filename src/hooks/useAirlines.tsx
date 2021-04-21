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
                if (data.link.next) setPage(parseInt(data.link.next.page, 10));
                if (!data.link.next && data.link.last) setPage(parseInt(data.link.last.page, 10));
            }
        }
    }, [setState, data])

    return {airlines: state, error}
};

export default useAirlines
