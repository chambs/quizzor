import React from 'react';

const OuterLayer = (props) => {
  return (
    <div className="mdl-grid app-content">
      {props.children}
    </div>
  );
};

export default OuterLayer;
