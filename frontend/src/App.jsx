
import './App.css'
import EmployeeComponents from './components/EmployeeComponents'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
     <BrowserRouter>
       <HeaderComponent/>
       <Routes>
          {/* // http://localhost:3000 */}
          <Route path='/' element = {<ListEmployeeComponent/>}></Route>
          {/* // http://localhost:3000/employees */}
          <Route path='/employees' element = {<ListEmployeeComponent/>}></Route>
          {/* // http://localhost:3000/add-employee */}
          <Route path='/add-employee' element = {<EmployeeComponents/>}></Route>
       </Routes>
      <FooterComponent/>
     </BrowserRouter>
      
    </>
  )
}

export default App
