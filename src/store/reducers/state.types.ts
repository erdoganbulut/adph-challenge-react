interface DatasetItemI {
  ID: number;
  Phone: string;
  City: string;
  Name: string;
  parentID?: number;
}

export default interface StateI {
  dataset: DatasetItemI[] | null;
  fetching: boolean | null;
  error: boolean | null;
}
