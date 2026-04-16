import React from 'react'

// lifiting state up concept
const ChildD = (props) => {
  const data = "Ganesh Pawar"
  return (
    <div>
      {/* <h1>{props?.name}</h1> */}
      <button onClick={() => { props.getData(data) }}>click</button>
    </div>
  )
}

export default ChildD
