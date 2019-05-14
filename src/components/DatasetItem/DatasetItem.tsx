import React, { useState } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { DatasetItemI } from '../../store/reducers/state.types';
import { DELETE_ITEM_FROM_DATASET } from '../../store/actions/actions.types';

import './DatasetItem.scss';

interface Props {
  data: DatasetItemI;
  handleClickDelete: Function;
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    handleClickDelete: (id: number) => dispatch({ type: DELETE_ITEM_FROM_DATASET, id }),
  };
};

const DatasetItem: React.FC<Props> = ({ data, handleClickDelete }) => {
  const [isActive, setIsActive] = useState(false);
  const handleChange = () => setIsActive(!isActive);
  return (
    <div className="DatasetItem card">
      <header className="card-header" onClick={handleChange}>
        <p className="card-header-title">
          <span>
            <b>ID:</b>
            &nbsp;
            {data.ID}
          </span>
          <span>
            <b>Name:</b>
            &nbsp;
            {data.Name}
          </span>
          <span>
            <b>City:</b>
            &nbsp;
            {data.City}
          </span>
          <span>
            <b>Phone:</b>
            &nbsp;
            {data.Phone}
          </span>
          {data.parentID && (
            <span>
              <b>ParentID:</b>
              &nbsp;
              {data.parentID}
            </span>
          )}
        </p>
      </header>
      {data.children && isActive && (
        <div className="card-content">
          {data.children.map(item => {
            return <DatasetItem key={item.ID} data={item} handleClickDelete={handleClickDelete} />;
          })}
        </div>
      )}
      {isActive && (
        <footer className="card-footer">
          <a
            onClick={() => {
              handleClickDelete(data.ID);
            }}
            className="card-footer-item"
          >
            Delete
          </a>
        </footer>
      )}
    </div>
  );
};

export default connect(
  null,
  mapDispatchToProps,
)(DatasetItem);
