import classNames from "classnames"; 


const totalClassName = classNames(className);

function Total({className}){

  const renderCounterText = () => {
    console.log("froggy")
  } 
  return(
    <div>
    <p className={`${totalClassName}`}>{renderCounterText()}</p>
    </div>
  )
};

export default Total;
