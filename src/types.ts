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
    backgroundColor?: string
    textColor?: string
    draft?: boolean
    draftText?: string
}