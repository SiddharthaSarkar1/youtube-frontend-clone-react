// import './App.css';
import Body from "./components/Body";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import { Provider } from 'react-redux';
import store from './store';
import {Outlet} from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Header />
      <div className="flex pt-2">
        <SideBar />
        <Outlet />
        {/* <Body /> */}
      </div>
    </div>
    </Provider>
  );
}

export default App;
