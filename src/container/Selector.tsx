import React, { useEffect } from 'react';
import { route } from '../utils/route';

export default function Selector({ onSelectedChanged }) {
  useEffect(() => {
    onSelectedChanged(route);
  }, []);
  return (
    <section>
      Selector
      {
      Array.from(route.keys()).map(algo => <div key={algo}>
        <input id={algo} type='checkbox' />
        <label htmlFor={algo}>{algo}</label>
      </div>)
      }
    </section>
  );
};