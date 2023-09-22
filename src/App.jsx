import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./Component/Header"
import AddUser from "./Pages/AddUser"
import Home from "./Home"
import EditPage from "./Pages/EditPage"


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="add/user" element={<AddUser />}/>
        <Route path="edit/:id" element={<EditPage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App