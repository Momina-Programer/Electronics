import Navbar from '../Components/Navbar'
import Header from '../Components/Header'

import Footer from '../Components/Footer'
import Main from '../Components/Main'
const Home = () => {
  return (
    <>
      <Navbar />
      <Header />

      <Main />
      <div className='mt-20'>
        <Footer />
      </div>
    </>
  )
}

export default Home
