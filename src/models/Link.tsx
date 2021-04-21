export interface Link {
    last: {
        page: string,
        rel: string,
        url: string
    },
    next?: {
        page: string,
        rel: string,
        url: string
    }
}
