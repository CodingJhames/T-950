import { Navigate, Route, Routes } from "react-router-dom"
import AboutPage from "./AboutPage"
import UserProvider from "./context/UserProvider"
import HomePage from "./Homepage"
import LoginPage from "./LoginPage"
import NavBar from "./NavBar"


const MainApp = () => {

  return (
    <UserProvider>
        {/* <h1>MainApp</h1> */}
            < NavBar />
        <hr></hr>

        <Routes>
            <Route path="/" element={ <HomePage /> }/>
            <Route path="login" element={ <LoginPage /> }/>
            <Route path="about" element={ <AboutPage /> }/>
            {/* <Route path="/*" element={ <HomePage /> }/> */}
            <Route path="/*" element={ <Navigate to="/about" /> }/>

        </Routes>
    </UserProvider>
  )
}

export default MainApp