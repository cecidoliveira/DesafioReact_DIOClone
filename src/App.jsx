import { Route, Routes } from "react-router-dom";

import HomeScreen from "./pages/HomeScreen"
import LoggedScreen from "./pages/LoggedScreen"
import SingInScreen from "./pages/SignInScreen"
import SingUpScreen from "./pages/SignUpScreen"

export function App() {
   return <Routes>
        <Route path="/"  element = { <HomeScreen/> } />
        <Route path="/home" element = { <LoggedScreen/> } />
        <Route path="/login" element = { <SingInScreen/> } />
        <Route path="/cadastro" element = { <SingUpScreen/> } />
   </Routes>
}

export default App
