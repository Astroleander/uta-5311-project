import React, { useEffect, useState } from 'react';
import { route } from '../utils/route';

export default function Selector({ onSelectedChanged }) {
  const addCheckedList = (checked, name) => {
    if (checked) {
      setCheckedList(checkedList.concat(name));
    } else {
      setCheckedList(checkedList.filter(lname => lname !== name))
    }
  }

  const [checkedList, setCheckedList] = useState<string[]>(Array.from(route.keys()));
  useEffect(() => {
    let newMap = new Map();
    for (const [key, path] of route) {
      if (checkedList.indexOf(key) !== -1) {
        newMap.set(key, path);
      }
    }
    onSelectedChanged(newMap);
  }, [checkedList]);
  return (
    <section className={"selector-wrapper"}>
      {
      Array.from(route.keys()).map(
        algo => 
          <div key={algo}  className={"selector"}>
            <input id={algo} type='checkbox' checked={checkedList.indexOf(algo) !== -1} onChange={(e) => addCheckedList(e.target.checked, algo)}/>
            <label htmlFor={algo}>{algo}</label>
          </div>
        )
      }
    </section>
  );
};