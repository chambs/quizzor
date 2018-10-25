import React from 'react';

const MainLayer = (props) => {
  return (
    <div className="mdl-cell mdl-cell--8-col">
      {props.children}
    </div>
  );
};
export default MainLayer;
