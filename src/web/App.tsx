import React, { useState } from 'react';
import Input from './Input';
import Output from './Output';

export default function App() {
  const [input, setInput] = useState(() => new Array(10).map(() => ~~Math.random()));
  const onInputChanged = (newInput) => {
    setInput(newInput);
  }

  return (
    <article>
      {/* <ViewRouter /> */}Final Project
      <Input input={input} onInputChanged={onInputChanged} />
      <Output input={input} />
    </article>
  )
}
