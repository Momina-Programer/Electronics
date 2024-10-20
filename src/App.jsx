import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'

import Contact from './Pages/Contact'
import Login from './Pages/Login'
// function App () {
//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           <Route path='/' element={<Home />}>
//             <Route path='/About' element={<About />} />
//             <Route path='/Contact' element={<Contact />} />
//             <Route path='/Login' element={<Login />} />
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     </>
//   )
// }

// export default App

const App = () => {
  return (
     <>
        <Routes>
           <Route path="/" element={<Home />} />
           <Route path='/About' element={<About />} />
           <Route path='/Contact' element={<Contact />} />
           <Route path='/Login' element={<Login />} />
        </Routes>
     </>
  );
};

export default App;
