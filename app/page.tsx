"use client"
import { useMemo, useState } from "react";
import ChildA from "../components/ChildA";
import ChildB from "../components/ChildB";

export default function Home() {
  const[add, setAdd] = useState(0);
  const [minus, setMinus] = useState(100);

  // function multiply(){
  //   console.log("******************");
  //   return add*10;
  // }
  
  // store the result of function in memory and cache the result of function
  const multiply = useMemo(() => {
    console.log("******************");
    return add * 9
  },[add])

  return (
    <>
      {/* <h1>hello world</h1>
      <ChildA />
      <h1>Use Memo</h1>
      {multiply}
      <button onClick={() => { setAdd(add + 1) }}>Add</button>
      <span>{add}</span>
      <button onClick={() =>{ setMinus(minus - 1) }}>Sub</button>
      <span>{minus}</span> */}
      <ChildB />
    </>
  );
} 