import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Register from './pages/Register';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import CreateListings from './pages/CreateListings';


const App = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
      <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/create-listing' element={<CreateListings />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App