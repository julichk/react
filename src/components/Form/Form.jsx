import classNames from "classnames";
import  { useState } from 'react';

function Form({className}) {
  const formClassName = classNames(className);
  console.log(formClassName);

  const [inputText, setInputText] = useState('');
  // const [outputText, setOutputText] = useState('');
  const [checkboxes, setCheckboxes] = useState([]);
  
  const handleClick = (event) => {
    event.preventDefault();
    if (inputText !== '') {
      const newCheckbox = {
        className: 'conteiner_checkbox_check',
        label: inputText,
      };
      setCheckboxes([...checkboxes, newCheckbox]);
      setInputText('');
    }
    
  }

  const handleInput = (event) => {
    setInputText(event.target.value);
  }

  return(
    <div className="note-box">
      <form action="#" className={`${className}`}>
        <input type="text" name="newItem" value={inputText} onChange={handleInput} className="conteiner_form_input" placeholder="Create a new todo..."></input>
        <button type="submit" className="conteiner_form_button" onClick={handleClick}>додати</button>
      </form>
  
      <div>
      {checkboxes.map((checkbox) => (
        <div key={checkbox.className} className="conteiner_checkbox">
        <input type="checkbox" className={checkbox.className} />
        <label htmlFor={checkbox.className} className="conteiner_checkbox_text">{checkbox.label}</label>
      </div>
      ))}
      </div>
    </div>
    
  )
}

export default Form