import React from 'react';
import { randImg } from '@ngneat/falso';

export default () => {
  const [number, setNumber] = React.useState(5000);
  const [images, setImages] = React.useState<any[]>([]);
  const [isPending, startTransition] = React.useTransition();

  function showImages() {
    const imgSources = randImg({ length: number }).map((url, index) => (
      <img src={`${url}?v=${index}`} key={index} />
    ));
    startTransition(() => {
      setImages(imgSources);
    });
  }

  return (
    <div
      style={{
        padding: '10px',
      }}>
      <h1>Images</h1>
      <div>
        <label>Number of images</label>
        <input
          type='number'
          min='1'
          max='10000'
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value))}
          style={{
            display: 'block',
            marginTop: '10px',
            width: '3rem',
          }}
        />
        <button type='button' onClick={showImages} style={{ marginTop: '10px' }}>
          Show Images
        </button>
      </div>
      <div>
        <span>Number selected: {number}</span>
        <br />
        <span>Results:</span>
        {isPending && <span>Loading...</span>}
        {!isPending && images.length > 0 && images}
      </div>
    </div>
  );
};
