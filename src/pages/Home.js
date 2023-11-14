// Import Footer, Hero, Movies, Navbar Components
import React, { useState } from 'react'
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Navbar from '../components/Navbar/Navbar';
import Movies from '../components/Movies/Movies';
import AddMovie from '../components/AddMovie/AddMovie';
import DataMovie from '../utils/DataMovie';

function Main() {
  // state
  const [item, setItem] = useState(DataMovie)

  return (
    <main>
     <Hero />
     <Movies item={item} setItem={setItem}/>
     <AddMovie movies={item} setMovies={setItem}/> 
    </main>
  )
}
/**
 * Membuat Component Home.
 * Menampilkan Halaman Home.
 * Menampung Navbar, Main, dan Footer Component
 */

function Home() {
  return (
    <>
      <Navbar/>
      <Main/>
      <Footer/> 
        
    </>
  )
}
export default Home