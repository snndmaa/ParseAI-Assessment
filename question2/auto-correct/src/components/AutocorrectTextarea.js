import React, {useContext, useRef, useState, useEffect} from 'react'
import AutoContext from '../stateManage/AutoContext'


function AutocorrectTextarea() {
  const textRef = useRef()
  const [areaText, setAreaText] = useState('')
  
  const {corrections, textArray, dispatch} = useContext(AutoContext)

  const onWrite = (e) => {
    setAreaText(e.target.value)
    dispatch({type: 'TEXTARRAY_CREATE', payload: (e.target.value).split(' ')})
  }

  useEffect(() => {
    for(const key in corrections){
      try {
        textArray.forEach((word) => {
          if(key === word){
            const correctText = areaText.replace(word, corrections[key])
            setAreaText(correctText)
          }
        })
      } 
      catch (error) {
        console.log(error)
      }
    }
  }, [areaText, corrections, textArray])

  

  return (
    <div className="textareaDiv">
        <textarea ref={textRef} name="textArea" id="textArea" cols={50} rows={17} onChange={onWrite} value={areaText} />
    </div>  
      )
}

export default AutocorrectTextarea