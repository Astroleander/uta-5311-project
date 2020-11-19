import React, { useState } from 'react';
import Input from './Input';
import Output from './Output';
import Selector from './Selector';

import './style.less';

export default function App() {
  const [input, setInput] = useState(() => new Array(15000).fill(0).map(() => ~~(200 * Math.random())));
  const [selected, setSelected] = useState<Map<string,string>|null>(null);
  const onInputChanged = (newInput) => {
    setInput(newInput);
  }
  const onSelectedChanged = (newSelected) => {
    setSelected(newSelected);
  }
  return (
    <article>
      <Input input={input} onInputChanged={onInputChanged} />
      <Selector onSelectedChanged={onSelectedChanged}/>
      <Output input={input} selected={selected} />
    </article>
  )
}
