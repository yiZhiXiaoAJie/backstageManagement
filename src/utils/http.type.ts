export interface HttpData<T> {
  code: number | string;
  data: T;
  msg: string;
}
