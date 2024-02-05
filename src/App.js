import { Routes, Route ,BrowserRouter } from 'react-router-dom';
import { lazy, Suspense, useRef } from 'react';
import './App.css';
import Home from './pages/home';
import NavBar from './components/navbar';
import {  ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NoMatch = lazy(()=> import('./pages/nomatch'))



function App() {
 
  const refs = useRef(null)
  const serviceRef = useRef(null)
  const aboutUsRef = useRef(null)
  const scrollCallContactUs = ()=>{
    console.log("work222");
    console.log(refs);
    refs.current.scrollIntoView({
      block:"start",
      behavior: 'smooth'
    })
  }
  const scrollService = () =>{
    serviceRef.current.scrollIntoView(
      {
        block:"center",
        behavior: 'smooth'
      }
    )
  }
  const scrollAboutUs = () =>{
    aboutUsRef.current.scrollIntoView({
      block:"center",
      behavior: 'smooth'
    })
  }
  return (  
    <div className="App">
     <NavBar scrollCall={scrollCallContactUs} scrollService={scrollService} scrollAboutUs = {scrollAboutUs}/>
     {/* <Home 
     /> */}
       <BrowserRouter>
     <Suspense fallback={<div className="container">Loading...</div>}>
     <Routes>
					<Route path="" element={<Home childRef = {refs} serviceRef = {serviceRef} aboutUsRef ={aboutUsRef} />} />
					<Route path="*" element={<NoMatch />} />
				</Routes>
     </Suspense>  
     </BrowserRouter>
     <ToastContainer />

    </div>
  );
}

export default App;
