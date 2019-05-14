import React, { useEffect } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import Props from './props.types';
import StateI, { DatasetItemI } from '../../store/reducers/state.types';
import DatasetItem from '../../components/DatasetItem/DatasetItem';
import handleUnflattenArr from '../../helpers/unflatten';
import { API_CALL_REQUEST } from '../../store/actions/actions.types';

const mapStateToProps = (state: StateI) => {
  return {
    dataset: state.dataset,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onRequestDataset: () => dispatch({ type: API_CALL_REQUEST }),
  };
};

const Home: React.FC<Props> = props => {
  const { dataset, onRequestDataset } = props;

  const unflatdataset = handleUnflattenArr(dataset);

  useEffect(() => {
    onRequestDataset();
  }, []);
  return (
    <div>
      {unflatdataset.map(item => {
        return <DatasetItem key={item.ID} data={item} />;
      })}
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
