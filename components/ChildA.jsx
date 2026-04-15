"use client";
import React from 'react'
import { useContext } from 'react';
import { DataContext, GenderContext } from "../app/layout";

const ChildA = () => {
  const name = useContext(DataContext);
  const gender = useContext(GenderContext);
  return (
    <div>
      <h1>{name}</h1>
      <h1>{gender}</h1>
    </div>
  )
}

export default ChildA
