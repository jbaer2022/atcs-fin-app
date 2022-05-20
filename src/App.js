import './App.css';
import { Routes, Route } from "react-router-dom";
import NewItemComponent from './j-components/NewItemComponent';
import UpdateItemComponent from './j-components/UpdateItemComponent';
import Home from './j-components/Home';


import { 
  NavBar
} from './ui-components';





function App() {
  return (
    <div className="App">

      <NavBar />

      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/new" element={<NewItemComponent/>}/>
        <Route exact path="/edit/:cid" element={<UpdateItemComponent/>}/>
      </Routes>




    </div>
  );
}

export default App;
