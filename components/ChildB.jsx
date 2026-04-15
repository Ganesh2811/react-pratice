"use client";
import React, { useState } from 'react'

const ChildB = () => {
  const [add, setAdd] = useState(0);
  return (
    <>
      <h1>Use Callback</h1>
      <button onClick={() => setAdd(add + 1)}>Add</button>
      <span>{add}</span>
    </>
  )
}

export default ChildB
