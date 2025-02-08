import './App.css'
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer"

// import Home from '../Home'; // Example Home component
// import About from './About'; // Example About component

// App component that includes BrowserRouter for routing
const App: React.FC = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}


export default App;
