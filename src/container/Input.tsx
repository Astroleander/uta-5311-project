import React from 'react';

export default function Input({ input, onInputChanged }) {
  return <section>
    <h1>Input</h1>
    {String(input)}
  </section>
}