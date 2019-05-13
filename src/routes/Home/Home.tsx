import React, { useEffect } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import Props from './props.types';
import StateI, { DatasetItemI } from '../../store/reducers/state.types';
import DatasetItem from '../../components/DatasetItem/DatasetItem';
import handleUnflattenArr from '../../helpers/unflatten';

const mapStateToProps = (state: StateI) => {
  return {
    fetching: state.fetching,
    dataset: handleUnflattenArr(state.dataset),
    error: state.error,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onRequestDataset: () => dispatch({ type: 'API_CALL_REQUEST' }),
  };
};

const Home: React.FC<Props> = props => {
  const { fetching, dataset, onRequestDataset, error } = props;

  useEffect(() => {
    onRequestDataset();
  }, []);
  return (
    <div>
      {dataset.map(item => {
        return <DatasetItem key={item.ID} data={item} />;
      })}
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
