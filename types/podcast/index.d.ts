// Type definitions for podcast v0.1.0
// Project: https://github.com/maxnowack/node-podcast
// Definitions originally by: Niklas Mollenhauer <https://github.com/nikeee>
// Definitions based on: https://github.com/DefinitelyTyped/DefinitelyTyped

interface IFeedOptions {
    title: string;
    description?: string;
    generator?: string;
    feed_url: string;
    site_url: string;
    image_url?: string;
    docs?: string;
    author?: string;
    managingEditor?: string;
    webMaster?: string;
    copyright?: string;
    language?: string;
    categories?: string[];
    pubDate?: Date;
    ttl?: number;
    itunesAuthor?: string;
    itunesSubtitle?: string;
    itunesSummary?: string;
    itunesOwner?: IItunesOwner;
    itunesExplicit?: boolean;
    itunesCategory?: IItunesCategory;
    itunesImage?: string;
}

interface IItunesOwner {
    name: string;
    email: string;
}
interface IItunesCategory {
    name: string;
    subcats: IItunesSubCategory[];
}
interface IItunesSubCategory {
    name: string;
    subcat: string[]; /* ? */
}

interface IItemOptions {
    title: string;
    description: string;
    url: string;
    guid: string;
    categories?: string[];
    author?: string;
    date: Date;
    lat?: number;
    long?: number;
    enclosure?: {
        url: string;
        file?: string;
        size?: number;
        type?: string;
    };
    itunesAuthor?: string;
    itunesExplicit?: boolean;
    itunesSubtitle?: string;
    itunesSummary?: string;
    itunesDuration?: number;
    itunesKeywords?: string[];
}

declare class Podcast {
    constructor(options: IFeedOptions);

    public addItem(options: IItemOptions): void;
    public buildXml(indent?: string): string;
}

declare module 'podcast' {
    export = Podcast;
}
