export interface Link {
    last: {
        page: number,
        rel: string,
        url: string
    },
    next?: {
        page: number,
        rel: string,
        url: string
    }
}
