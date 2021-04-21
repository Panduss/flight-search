import axios, {AxiosError, AxiosResponse, Method} from 'axios';
const parse = require('parse-link-header');

const defaultEndpoint = 'https://api.schiphol.nl/public-flights';

export interface Headers {
    ResourceVersion: string,
    Accept: string
    'app_id': string,
    'app_key': string
}

export const fetcher = async (endpoint: string, body: any, method: Method, params?: {}): Promise<any> => {
    const headers = {
        'ResourceVersion': 'v4',
        'Accept': 'application/json',
        'app_id': '84626348',
        'app_key': '0305db49bc6bb0627d216271ec479d71'
    } as Headers;

    return axios(defaultEndpoint + endpoint, {method: method, headers: headers, params})
        .then(async (response: AxiosResponse) => {
            if (response.headers.link) {
                return {
                    ...response.data,
                    link: parse(response.headers.link)
                };
            } else if (response.status === 204) {
                if (response.config.url?.endsWith('/airlines')) {
                    return {
                        airlines: []
                    }
                } else if (response.config.url?.endsWith('/flights')) {
                    return {
                        flights: []
                    }
                }
            } else {
                return response.data
            }
        })
        .catch(async (error: AxiosError) =>  error);
};
