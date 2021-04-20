import axios, {AxiosError, AxiosResponse, Method} from 'axios';

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
        .then(async (response: AxiosResponse) => response.data)
        .catch(async (error: AxiosError) =>  error);
};
