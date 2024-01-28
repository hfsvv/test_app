import { Routes, Route ,BrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import './App.css';
// import Navbar from './components/navbar';
import Home from './pages/home';
import NavBar from './components/navbar';

// const Home = lazy(()=> import('./pages/home'))
const NoMatch = lazy(()=> import('./pages/nomatch'))



function App() {
  return (
    <div className="App">
     <NavBar/>
     <Home />
       {/* <BrowserRouter>
     <Suspense fallback={<div className="container">Loading...</div>}>
     <Routes>
					<Route path="home" element={<Home />} />
					<Route path="*" element={<NoMatch />} />
				</Routes>
     </Suspense>  
     </BrowserRouter> */}

    </div>
  );
}

export default App;
