import { DatasetItemI } from '../store/reducers/state.types';

const handleUnflattenArr = (arr: DatasetItemI[], parent?: any) => {
  const out = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i].parentID === parent) {
      const element = arr[i];
      const children = handleUnflattenArr(arr, arr[i].ID);
      if (children.length) {
        element.children = children;
      }
      out.push(arr[i]);
    }
  }
  return out;
};

export default handleUnflattenArr;
