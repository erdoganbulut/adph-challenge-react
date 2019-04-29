import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import Props from './props.types';
import StateI from '../../store/reducers/state.types';

const mapStateToProps = (state: StateI) => {
  return {
    fetching: state.fetching,
    dataset: state.dataset,
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
  return (
    <div>
      <h1>Home page!</h1>
      <button onClick={onRequestDataset}>Request a dataset</button>
      <p data-id={dataset} />
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
