import './App.css';
import Header from './Components';
import Footer from './Components/Footer';
import Home from './Modules/Home';
import { Route, Routes } from 'react-router-dom';
import Product from './Modules/Home/Product';
import Products from './Modules/Home/Products';
import CategoryProducts from './Modules/CategoryProducts';
import Cart from './Modules/Cart';
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/products/:id' element={<Product />}></Route>
        <Route path='/products' element={<Products />}></Route>
        <Route path="/categories/:name" element={<CategoryProducts />}></Route>
        <Route path="cart" element={<Cart />}></Route>
        <Route path='*' element={<div className=''> <p className='my-10 text-2xl font-semibold'>Error 404</p><img className='w-1/2 h-96 m-auto' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfyU7HyM-LWRxTdKWMj0mviIW0MQ4hVepdy1POfbdFAJY6Pg26FQUYnNene3DNwRVZ78k&usqp=CAU" alt="" /></div>}></Route>

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
