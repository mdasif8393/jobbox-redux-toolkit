import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import {onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import auth from "./firebase/firebase.config";
import { getUser, setUser, toggleLoading } from "./features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";

function App() {
  const dispatch = useDispatch();
  const {isLoading} = useSelector(state => state.auth);
  
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user){
        dispatch(getUser(user.email));
      }
      else{
        dispatch(toggleLoading())
      }
    })
  },[])
  return (
    <>
      <RouterProvider router={routes} />
      <Toaster/>
    </>
  );
}

export default App;
