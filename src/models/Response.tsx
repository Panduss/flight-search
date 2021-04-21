import {Airline} from "./Airline";
import {Flight} from "./Flight";
import {Link} from "./Link";

export interface AirlinesResponse {
    airlines: Array<Airline>,
    link?: Link
}

export interface FlightsResponse {
    flights: Array<Flight>,
    link?: Link
}
