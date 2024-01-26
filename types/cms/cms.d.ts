declare namespace CMS {
  interface IImageCropping {
    crops: null | string;
    focalPoint: { top: number; left: number };
    url: string;
  }
  interface IImage {
    cmscode: number;
    cmsname: string;
    extension: string;
    height: number;
    id: string;
    imageCropping: IImageCropping;
    label: null | string;
    sourceUrl: string;
    type: string;
    width: number;
  }
  export interface IData {
    PageNo?: number;
    PageResults: IArticle[];
    PageSize?: number;
    Skip?: number;
    Success?: boolean;
    TotalCount: number;
    items?: Array<IDictionaryItem>;
    page?: CMS.IArticle;
  }
  // links
  export interface IContentURL {
    url: string;
    label: string;
    target: string | null;
    linkType: string;
  }
  // api main response type
  export interface IResponse {
    page: CMS.IArticle;
    statusCode: number;
    message: string;
    data: IData;
    response: IData;
    cached?: boolean;
  }
  // api main response type
  export interface ICategoryResponse {
    response: IData;
  }
  // dictionary items
  export interface IDictionaryItem {
    culture: string;
    key: string;
    value: string;
    type: string;
  }
  // dictionary item page type
  export interface IDictionaryItemPage {
    cmscode: string;
    pageSlug: string;
  }
  // categories
  export interface ICategory {
    articles: Array<IArticle>;
    id: string;
    thumbnailUrl: string;
    name: string;
    cmscode: number;
    pageSlug: string;
    pageNumber?: number;
    totalCount?: number;
  }
  interface IUrls {
    pageUrl: string;
  }
  // single article
  export interface IArticle {
    id: string;
    cmscode: number;
    culture: string;
    title: string;
    pageUrl: string;
    abstract: string;
    coverImage?: IImage;
    date: string;
    items?: [];
    pageSlug?: string;
    urls?: CMS.IUrls;
    components: any;
  }
  // tracked page numbers
  export interface ITrackedPages {
    cmscode: number;
    pageNumber: number;
    hasMoreArticles?: boolean;
    fetchedAmount: number;
  }
}
