import classNames from "classnames"; //бібліотека класів

function Header({title, className, color="blue"}) {
  const headerClassName = classNames("header_text", className, `header_text_color-${color}`);
 //console.log(headerClassName);

  return(

    <div className="header">
      <h1 className={`header_text ${className} ${color}`}>{title}</h1>
    </div>
  )
}

export default Header;