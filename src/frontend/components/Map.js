import React from 'react';

function Map(props) {
  const url = `https://www.google.com/maps/embed/v1/place?q=${props.lat},${props.lng}&key=AIzaSyD161oFsIXfVN6bWVeXubY3PA1e83UgzjM`;
  return (
    <iframe
        title={props.title}
      width="600"
      height="450"
      frameBorder="0"
      style={{border:0}}
      src={url}
      zoom="10"
      allowFullScreen
    />
  );
}

export default Map;
