import './App.css';
import { useState } from 'react';
// Add the following import
import { Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import MovieDetailPage from '../pages/MovieDetailPage'
import MoviesListPage from '../pages/MoviesListPage'
import ActorListPage from '../pages/ActorListPage';
import NavBar from '../components/NavBar';


export default function App() {

  const [user, setUser] = useState(null)
 
  return (
    <main className="App">
      {
        user?(
          <>
          <NavBar />
          <Routes>
            
             <Route path='/movies/:movieName' element={<MovieDetailPage />}/>  
             <Route path='/actors' element={<ActorListPage />}/>    
             <Route path='/' element={<MoviesListPage />} />    
          </Routes>
          </>
        ):(
          <>
          <NavBar />
          <Routes>
          <Route path='/' element={<LoginPage user={user} setUser={setUser} />}/>
          </Routes>
          </>
        )
      }
    </main>
  );
}