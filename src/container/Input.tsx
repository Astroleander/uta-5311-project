import React, { useEffect, useRef, useState } from 'react';

export default function Input({ onInputChanged }) {
  const updateSettings = () => {
    const len = length.current.value;
    const order = 
      asc.current.checked && asc.current.value ||
      des.current.checked && des.current.value ||
      ran.current.checked && ran.current.value;
    switch (order) {
      case 'asc':
        setInput(new Array(Number(len)).fill(0).map((v,i) => i));
        break;
      case 'des':
        setInput(new Array(Number(len)).fill(0).map((v,i) => Number(len)-i));
        break;
      case 'random':
      default:
        setInput(new Array(Number(len)).fill(0).map(() => ~~(Number(len) * 5 * Math.random())));
    }
  }

  const [input, setInput] = useState<number[]>(() => new Array(1000).fill(0).map(() => ~~(5000 * Math.random())));

  const length = useRef<HTMLInputElement>(null);
  const asc  = useRef<HTMLInputElement>(null);
  const des  = useRef<HTMLInputElement>(null);
  const ran  = useRef<HTMLInputElement>(null);

  useEffect(() => {
    onInputChanged(input);
  }, [input])
  return <section>
    <h1>Input</h1>
    <div>
      <label htmlFor='length'>Length: </label>
      <input id='length'  type="number" min="0" step="1" defaultValue={input.length} ref={length}/>
      <button onClick={updateSettings}>GO</button>
    </div>
    <div className={"selector-wrapper"}>
      <div>
        <input id='asc' type='radio' name='order' value="asc" ref={asc}/>
        <label htmlFor='asc'>Ascending</label>
      </div>
      <div>
        <input id='des' type='radio' name='order' value="des" ref={des}/>
        <label htmlFor='des'>Descending</label>
      </div>
      <div>
        <input id='random' type='radio' name='order' value="random" defaultChecked ref={ran}/>
        <label htmlFor='random'>Random</label>
      </div>
    </div>
    <pre><code>{String(input)}</code></pre>
  </section>
}