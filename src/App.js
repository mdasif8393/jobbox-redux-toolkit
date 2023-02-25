import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import auth from "./firebase/firebase.config";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./features/auth/authSlice";
import { Toaster } from "react-hot-toast";

function App() {
  const {isLoading} = useSelector(state => state.auth);
  console.log(isLoading)
  const dispatch = useDispatch();
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser((user.email)))
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
