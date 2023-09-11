import React from 'react';

const Iframe = (props:any) => {
  return (
    <iframe
      src={props.src}
      title={props.title}
      width="100%"
      height="600px"
      allowFullScreen
    ></iframe>
  );
};

export default Iframe;