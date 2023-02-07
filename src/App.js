import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import {onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import auth from "./firebase/firebase.config";
import { setUser } from "./features/auth/authSlice";
import { useDispatch } from "react-redux";
import { Toaster } from "react-hot-toast";

function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user){
        console.log(user)
        dispatch(setUser(user));
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
