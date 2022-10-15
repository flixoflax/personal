export interface CaseStudy {
    client: string
    thumbnailUrl: string
    header: {
        headline: string
        content?: string
    }
    description: {
        short: string;
        long: string;
    }
    services: string[]
    position: number
    draft?: boolean
    draftText?: string
}