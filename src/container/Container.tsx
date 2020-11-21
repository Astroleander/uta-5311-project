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
  const [err, setErr] = useState<string>(null);
  useEffect(() => {
    import('../code/' + path).then(module => {
      setErr(null)
      let func = module.default;
      let args = [].concat(input)
      setStart(performance.now());
      let res = func(args);
      setEnd(performance.now());
      setResult(res);
    }).catch(e => {
      setErr(e)
    })
  }, [input]);
  if (err) {
    return <section>
      <h2 className="error">{name}</h2>
      {String(err)}
    </section>
  }
  return (
    <section>
      <h2>{name}</h2>
      <div><strong>Runtime: </strong>{runtime.toFixed(4)} ms</div>
      {result && <div><code>{String(result)}</code></div>}
    </section>
  )
}