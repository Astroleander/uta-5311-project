import React from 'react';
import { route } from '../utils/route';
import Container from './Container';

export default function Output({ input, selected } : { input: number[], selected: Map<string, string>|null }) {
  if (!selected || !input ) return <>require inputs</>;
  return (
  <section>
    {
      Array.from(selected.keys()).map(key => {
        return <Container key={selected.get(key)} name={key} path={selected.get(key)} input={input} />
      })
    }
  </section>
  );
}