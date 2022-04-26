import React, {useRef} from 'react'

function ScreenItem(props) {
  const preRef = useRef()

  if (props.object){
    preRef.current.innerHTML = JSON.stringify(props.object, undefined, 4)
  }

  return (<pre ref={preRef}>Please enter a correction</pre>)

}

export default ScreenItem