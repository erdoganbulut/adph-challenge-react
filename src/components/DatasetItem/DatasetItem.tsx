import React, { useState } from 'react';
import { DatasetItemI } from '../../store/reducers/state.types';

import './DatasetItem.scss';

interface Props {
  data: DatasetItemI;
}

const DatasetItem: React.FC<Props> = props => {
  const [isActive, setIsActive] = useState(false);
  const handleChange = () => setIsActive(!isActive);
  return (
    <div className="DatasetItem card">
      <header className="card-header" onClick={handleChange}>
        <p className="card-header-title">
          <span>
            <b>ID:</b>
            &nbsp;
            {props.data.ID}
          </span>
          <span>
            <b>Name:</b>
            &nbsp;
            {props.data.Name}
          </span>
          <span>
            <b>City:</b>
            &nbsp;
            {props.data.City}
          </span>
          <span>
            <b>Phone:</b>
            &nbsp;
            {props.data.Phone}
          </span>
          {props.data.parentID && (
            <span>
              <b>ParentID:</b>
              &nbsp;
              {props.data.parentID}
            </span>
          )}
        </p>
        <a href="http://google.com" className="card-header-icon" aria-label="more options">
          <span className="icon" />
        </a>
      </header>
      {props.data.children && isActive && (
        <div className="card-content">
          {props.data.children.map(item => {
            return <DatasetItem key={item.ID} data={item} />;
          })}
        </div>
      )}
      {isActive && (
        <footer className="card-footer">
          <a href="http://google.com" className="card-footer-item">
            Delete
          </a>
        </footer>
      )}
    </div>
  );
};

export default DatasetItem;
