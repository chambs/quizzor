import React from 'react';

const SideLayer = (props) => {
  return (
    <div className="mdl-cell mdl-cell--4-col">
      {props.children}
    </div>
  );
};
export default SideLayer;
