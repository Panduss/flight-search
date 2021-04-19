import axios, {AxiosError, AxiosResponse, Method} from 'axios';

const defaultEndpoint = 'https://api.schiphol.nl';

export interface Headers {
    'Content-Type': string,
    'app-id': '84626348',
    'app-key': '0305db49bc6bb0627d216271ec479d71'
}

export const fetcher = async (endpoint: string, body: any, method: Method = 'POST', params: any = {}): Promise<any> => {
    const headers = {
        'Content-Type': 'application/json'
    } as Headers;

    return axios(defaultEndpoint + endpoint, {method: method, headers: headers, data: body, params: params})
        .then(async (response: AxiosResponse) => response.data)
        .catch(async (error: AxiosError) =>  error);
};
