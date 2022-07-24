import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
// import { decrementAction, incrementAction } from './Store/Action/Action';

function App() {
  // const state = useSelector(state => state.count)
  // const dispatch = useDispatch();
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        {/* <h1>{state}</h1>
        <button onClick={()=>dispatch(incrementAction(5))}>+</button>  &nbsp;&nbsp;
        <button  onClick={()=>dispatch(decrementAction())}>-</button> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
