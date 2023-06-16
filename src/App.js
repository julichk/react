// import logo from './logo.svg';
import './assets/styles/normalize.scss'
import './assets/styles/header.scss'
import './assets/styles/form.scss'
import Header from "./components/Header";
import Form from './components/Form';
import Total from './components/Total';

function App() {
  return (
    <div className="App">
    <div className="content">
      <Header 
        title={"TO DO"}
        className = "header_text-title"
        color="pink"
        />
      </div>
      <div className='conteiner'>
        <Form className = "conteiner_form"/>
      </div>
      <div className='conteiner-total'>
        <Total className = "conteiner-total_block"/>
      </div>
    </div>
  );
}

export default App;
