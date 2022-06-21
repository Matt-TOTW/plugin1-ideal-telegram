import React from 'react';

export default () => {
  const [inputValue, setInputValue] = React.useState('');
  const [lazyInputValue, setLazyInputValue] = React.useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);

    React.startTransition(() => {
      setLazyInputValue(e.target.value);
    });
  };

  return (
    <>
      <p>Lazily: {lazyInputValue}</p>
      <input type='text' value={inputValue} onChange={handleChange} />
    </>
  );
};
