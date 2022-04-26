import React, {useState, useContext} from 'react'
import AutoContext from '../stateManage/AutoContext'
import ScreenItem from './ScreenItem'


function CorrectionDiv() {
  const [wrongText, setWrongText] = useState('')
  const [rightText, setRightText] = useState('')

  const {corrections, dispatch} = useContext(AutoContext)

  const onChangeError = (e) => {
      setWrongText(e.target.value)
    }

    const onChangeCorrect = (e) => {
        setRightText(e.target.value)
      }

  const onAdd = () => {
    dispatch({type: 'ADD_CORRECTION', payload: {...corrections, [wrongText]: rightText}})
    setWrongText('')
    setRightText('')
  }

  const onRemove = () => {
    dispatch({type: 'ADD_CORRECTION', payload: {}})
  }
  

  return (
    <div className="correctionDiv">
        <div className="screen">
          <div className="screenText">
            <ScreenItem object={corrections}/>
          </div>
        </div>

        <div className="correctionInput">
          <label htmlFor="wrongText">Enter Error:</label>
          <input type="text" name="wrongText" id="wrongText" className="wrongText" onChange={onChangeError} value={wrongText}/>
          <label htmlFor="rightText">Enter Correction:</label>
          <input type="text" name="rightText" id="rightText" className="rightText" onChange={onChangeCorrect} value={rightText}/>
        </div>

        <div className="buttons">
          <button className="remove" onClick={onRemove}>REMOVE</button>
          <button className="add" onClick={onAdd}>ADD</button>
        </div>
    </div>
  )
}

export default CorrectionDiv