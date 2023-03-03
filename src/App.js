import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import auth from "./firebase/firebase.config";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { getUser, setUser, toggleLoading } from "./features/auth/authSlice";
import { Toaster } from "react-hot-toast";

function App() {
  const {isLoading} = useSelector(state => state.auth);
  console.log(isLoading)
  const dispatch = useDispatch();
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(getUser((user.email)))
      }
      else{
        dispatch(toggleLoading());
      }
    });
  },[])
  return (
    <>
      <RouterProvider router={routes} />
      <Toaster />
    </>
  );
}

export default App;
