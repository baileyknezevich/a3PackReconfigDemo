import './App.css';
import ExampleGridContainer from "./table";
import { useCookies } from 'react-cookie';
import {getToken,getSession} from './sso'

function App() {
  const [cookies, setCookie] = useCookies(['name']);

  setCookie(getSession());
  console.log(cookies)
  if(cookies != null){
    return (
      <div className="App">
      <ExampleGridContainer/> 
      </div>
    );
  }
}



export default App;
