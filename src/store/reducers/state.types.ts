export interface DatasetItemI {
  ID: number;
  Phone: string;
  City: string;
  Name: string;
  parentID?: number;
  children?: DatasetItemI[];
}

export default interface StateI {
  dataset: DatasetItemI[];
  fetching: boolean | null;
  error: boolean | null;
}
