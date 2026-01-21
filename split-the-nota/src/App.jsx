import './App.css'
import Header from './components/Header.jsx'
import Form from './components/Form.jsx'
import Results from './pages/Results.jsx'

import { Route, Routes } from 'react-router-dom'


function App() {

  return (
    <>
      <Header />
      <Routes>
      <Route path='/' element={<Form />} />
      <Route path='/results' element={<Results />} />
      </Routes>
    </>
  )
}

export default App
