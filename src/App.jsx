
import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import SixHourOffer from './pages/SixHourOffer/SixHourOffer'

const App = () => {
  return (
    <>
      <Header/>
      <Hero/>
      <div className='main_container'>
        <SixHourOffer/>
      </div>
    </>
  )
}

export default App