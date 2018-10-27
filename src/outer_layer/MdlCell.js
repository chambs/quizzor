import React from 'react';

const MdlCell = (props) => {
  let cellLength = props.cellLength || 1;
  let classes = `mdl-cell mdl-cell--${cellLength}-col`;
  return (
    <div className={classes}>
      {props.children}
    </div>
  );
};
export default MdlCell;
