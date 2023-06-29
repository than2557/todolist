'use strict'
import React,{useState} from 'react'
import { useApp } from '../context/context';
import reactCSS from 'reactcss'
import { SwatchesPicker } from 'react-color'
function Color() {
    const {color,
        setColor,
        formTodoData,
        setFormDataTodo
    } = useApp();
    const [state,setState] = useState({
        displayColorPicker: false,
        color: '#ff5722',
    })
 
    const  handleClick = () => {
        setState({ displayColorPicker: ! state.displayColorPicker })
      };
    
    const  handleClose = () => {
        setState({ displayColorPicker: false })
      };
    
    const  handleChangeColor = (color,) => {
        setFormDataTodo({ ...formTodoData, "Todocolor" : color.hex  });
        console.log(formTodoData)
        console.log(color)
        setColor(color.hex)
        setState({ color: color.hex })
      };
    // rgba(${ state.color.r }, ${ state.color.g }, ${ state.color.b }, ${ state.color.a })
      const styles = reactCSS({
        'default': {
          color: {
            width: '36px',
            height: '14px',
            borderRadius: '2px',
            background: state.color,
          },
          swatch: {
            padding: '5px',
            background: '#fff',
            borderRadius: '1px',
            boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
            display: 'inline-block',
            cursor: 'pointer',
          },
          popover: {
            position: 'absolute',
            zIndex: '2',
          },
          cover: {
            position: 'fixed',
            top: '0px',
            right: '0px',
            bottom: '0px',
            left: '0px',
          },
        },
      });
    
  return (
    <div>
    <div style={ styles.swatch } onClick={ handleClick }>
      <div style={ styles.color } />
    </div>
    { state.displayColorPicker ? <div style={ styles.popover }>
      <div style={ styles.cover } onClick={ handleClose }/>
      <SwatchesPicker color={ state.color } onChange={ handleChangeColor } name="Todocolor" />
    </div> : null }

  </div>
  )
}

export default Color