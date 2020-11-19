import React, { useEffect, useState } from 'react';

const useTimer: () => any[] = () => {
  const [start, setStart] = useState<number>(null);
  const [end, setEnd] = useState<number>(null);
  const [t, setT] = useState<number>(0);
  useEffect(()=>{
    end && start && setT(end - start);
  }, [start, end])
  return [t, setStart, setEnd];
}

export default function Container({ path, input, name }) {
  if (!input) return null;

  const [runtime, setStart, setEnd] = useTimer();
  const [result, setResult] = useState<number[]>();
  useEffect(() => {
    import('../code/' + path).then(module => {
      let func = module.default;
      let args = JSON.parse(JSON.stringify(input))
      setStart(performance.now());
      let res = func(args);
      setEnd(performance.now());
      setResult(res);
    })
  }, [input]);
  return (
    <section>
      <h2>{name}</h2>
      <div>{runtime}</div>
      {result && <div><code>{String(result)}</code></div>}
    </section>
  )
}