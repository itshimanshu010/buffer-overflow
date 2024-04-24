import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router,Routes, Route, Navigate,Outlet
} from 'react-router-dom'
import Question from './components/Add-Question';
import ViewQuestion from "./components/ViewQuestion"
import BufferOverflow from './components/BufferOverFlow';
import About from './components/About';
import Auth from './components/Auth'
import { login, logout, selectUser } from './features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './firebase';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            displayName: authUser.displayName,
            email: authUser.email,
          })
        );
      } else {
        dispatch(logout());
      }
      // console.log(authUser);
    });
  }, [dispatch]);

  const PrivateRoute = ({ component: Component, ...rest }) => {
    //console.log(user)
    return user ? <Outlet/>:<Navigate to="/auth"/>
    // <Route
    //   {...rest}
    //   render={(props) =>
    //     user ? (
    //       <Component {...props} />
    //     ) : (
    //       <Navigate
    //         replace to={{
    //           pathname: "/auth",
    //           state: {
    //             from: props.location,
    //           },
    //         }}
    //       />
    //     )
    //   }
    // />
  };
  
  return (
    <div className="App">
      <Router>
      <Header />
        <Routes>
        <Route exact path={user ? "/" : "/auth"} element={user ? <BufferOverflow/> : <Auth/>}/>

        <Route exact path="/" element={<PrivateRoute/>}>
          <Route exact path="/" element={<BufferOverflow/>}/>
        </Route>

        

        <Route exact path="/add-question" element={<PrivateRoute/>}>
        <Route exact path="/add-question" element={<Question/>}/>
        </Route>
        
        <Route exact path="/question" element={<PrivateRoute/>}>
        <Route exact path="/question" element={<ViewQuestion/>}/>
        </Route>

       
        <Route exact path="/about" Component={About}></Route>
        
          
          
          
          
        </Routes>
      </Router>
     
     
    </div>
  );
}

export default App;
