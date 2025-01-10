// components/MainLayout.jsx

import Navbar from "./Navbar";
import Footer from "./Footer"

const MainLayout = ({ children }) => {
    return (
      <>
        <Navbar />
        {children}
        <Footer />
      </>
    )
  }
  
  export default MainLayout