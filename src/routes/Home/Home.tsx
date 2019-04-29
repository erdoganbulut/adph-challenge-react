import React from 'react';
import { connect } from 'react-redux';

interface Props {
  fetching: any;
  dataset: any;
  onRequestDataset: any;
  error: any;
}

const mapStateToProps = (state: any) => {
  return {
    fetching: state.fetching,
    dataset: state.dataset,
    error: state.error,
  };
};

const mapDispatchToProps = (dispatch: any) => {
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
