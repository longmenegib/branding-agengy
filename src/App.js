
import React,  {useState, useEffect, useMemo, createContext}  from "react";
import { useLocation, Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import {deleteStorage, setInstorage, getFromStorage} from './utils/Storage'
import routes from "./routes.js";
import Login from "./views/Login";

export const AuthContext = createContext();

const Admin = () => {
  const mainContent = React.useRef(null);
  
  const [isSigning, setSigning] = useState(false);

  useEffect(()=>{
    
    getToken();
  },[])

  const getToken = async()=>{
    const isAuthenticate = getFromStorage('user');
    // console.log(user);
    if(isAuthenticate == null){
      setSigning(false);
    }else{
      setSigning(true);
    }
  }

  const authContext = useMemo(
    ()=>({
      signIn: async () =>{
        // const user = await AsyncStorage.getItem('userToken');
        getToken();
        console.log("i am log in");
      },
      signOut: async()=>{
        console.log("i am logged out");
       
        getToken();
      },
      signUp: async () =>{
        console.log("account created");
      }
    })
  )
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
        return (
          <Route
            path={prop.path}
            element={prop.component}
            key={key}
            exact
          />
        );
    });
  };

  return (
    <AuthContext.Provider value={authContext}>
      <BrowserRouter>
          <Routes>
            {getRoutes(routes)}
            <Route path="/" element={<Navigate replace to="/home" />} />
          </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
};

function ProtectedRoute({component: Component, ...restProps}){
  const isAuthenticate = getFromStorage('user');

  return (
    <Route 
      {...restProps}
    >
    {isAuthenticate ?
    <div>
      
      <Component />
      
    </div>
    : <Route path="/" element={<Navigate replace to="/home" />} />
    }
    </Route>
  )
}

export default Admin;
