export type TResponse<T> = {
  data: T;
  metadata?: {
    total_items: number;
    total_pages: number;
    page: number;
    size: number;
    next_page: number;
    prev_page: number;
  };
};

export type TAudioBookEntity = {
  _id: {
    $oid: string;
  };
  title: string | null;
  duration: number;
  audio_url: string;
  transcription: string;
};

type DistribPick<T, K extends keyof T> = T extends unknown
  ? { [P in K]: T[P] }
  : never;
export type TAudioBooksAllResponse = TResponse<
  Array<DistribPick<TAudioBookEntity, '_id' | 'title' | 'duration'>>
>;

export type TAudioBookByIdResponse = TResponse<TAudioBookEntity>;

export type TAudioBookUpload = TResponse<TAudioBookEntity>;
