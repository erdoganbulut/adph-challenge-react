import React, { useState } from 'react';
import { DatasetItemI } from '../../store/reducers/state.types';

import './DatasetItem.scss';

interface Props {
  data: DatasetItemI;
}

const DatasetItem: React.FC<Props> = ({ data }) => {
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
        <a href="http://google.com" className="card-header-icon" aria-label="more options">
          <span className="icon" />
        </a>
      </header>
      {data.children && isActive && (
        <div className="card-content">
          {data.children.map(item => {
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
