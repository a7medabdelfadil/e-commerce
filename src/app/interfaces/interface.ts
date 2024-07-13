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
  };
}

interface IImageAttributes {
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: {
    thumbnail: IImageFormat;
  };
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
  };
  createdAt: string;
  updatedAt: string;
}

interface IImageData {
  data: {
    id: number;
    attributes: IImageAttributes;
  };
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
    data: null; // Consider defining a proper type for files if needed
  };
}

export interface IProduct {
  id: number;
  attributes: IProductAttributes;
}

export interface IApiResponse {
  data: IProduct[];
}

export interface ICartData {
  username: string | null;
  email?: string | null;
  products: number[];
}

export interface IAddToCartData {
  data: ICartData;
}

// Define the structure of the inner attributes object for the cart
interface ICartAttributes {
  username: string;
  email?: string; // Made optional to allow for null
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  publishedAt: string; // ISO date string
}

// Define the structure of the data object for the cart
interface ICartResponseData {
  id: number;
  attributes: ICartAttributes;
}

// Define the meta structure (currently empty)
interface ICartMeta { }

// Define the main API response structure for cart
export interface ICartApiResponse {
  data: {
    data: ICartResponseData;
    meta: ICartMeta;
  };
  status: number;
  statusText: string;
  headers: {
    'content-length': string;
    'content-type': string;
  };
  config: {
    transitional: {
      silentJSONParsing: boolean;
      forcedJSONParsing: boolean;
      clarifyTimeoutError: boolean;
    };
    adapter: string[];
    transformRequest: (null | any)[];
    transformResponse: (null | any)[];
    timeout: number;
    xsrfCookieName: string;
    xsrfHeaderName: string;
    maxContentLength: number;
    maxBodyLength: number;
    env: Record<string, any>;
    headers: {
      Accept: string;
      'Content-Type': string;
      Authorization: string;
    };
    baseURL: string;
    method: string;
    url: string;
    data: string; // JSON string
  };
  request: Record<string, any>;
}
