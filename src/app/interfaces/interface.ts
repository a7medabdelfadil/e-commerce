interface ITextChild {
    type: string;
    text: string;
}

interface IDescription {
    type: string;
    children: ITextChild[];
}

interface IWhatsIncluded {
    type: string;
    children: ITextChild[];
}

interface IImageFormat {
    name: string;
    hash: string;
    ext: string;
    mime: string;
    path: string | null;
    width: number;
    height: number;
    size: number;
    sizeInBytes?: number;
    url: string;
    provider_metadata: {
        public_id: string;
        resource_type: string;
    }
}

interface IImageAttributes {
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    formats: {
        thumbnail: IImageFormat;
    }
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null;
    provider: string;
    provider_metadata: {
        public_id: string;
        resource_type: string;
    }
    createdAt: string;
    updatedAt: string;
}

interface IImageData {
    data: {
        id: number;
        attributes: IImageAttributes;
    }
}

export interface IProductAttributes {
    title: string;
    description: IDescription[];
    price: number;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    instantDelivery: boolean;
    whatsIncluded: IWhatsIncluded[];
    category: string;
    banner: IImageData;
    files: {
        data: null;
    }
}

export interface IProduct {
    id: number;
    attributes: IProductAttributes;
}

interface IApiResponse {
    data: IProduct[];
}
