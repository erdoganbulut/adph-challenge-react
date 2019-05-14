import { DatasetItemI } from '../store/reducers/state.types';

const handleUnflattenArr = (arr: DatasetItemI[], parent?: any) => {
  const out = [];
  const Arr = JSON.parse(JSON.stringify(arr));
  for (let i = 0; i < Arr.length; i += 1) {
    if (Arr[i].parentID === parent) {
      const element = Arr[i];
      const children = handleUnflattenArr(Arr, Arr[i].ID);
      if (children.length) {
        element.children = children;
      }
      out.push(Arr[i]);
    }
  }
  return out;
};

export default handleUnflattenArr;
