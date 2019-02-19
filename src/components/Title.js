import React from 'react';

const Title = (props) => {
  return (
    <h2 style={{ backgroundColor: props.hexCode }}>
      Selected color: {props.label}
    </h2>
  );
}

export default Title;