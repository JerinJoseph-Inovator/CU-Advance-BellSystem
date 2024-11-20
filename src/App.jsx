import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';  
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Midsem from './components/Midsem/DESKTOP/midsem';
import Endsem from './components/Endsem/DESKTOP/endsem';
import Holiday from './components/Holiday/DESKTOP/holiday';
import Emergency from './components/Emergency/Emergency';

function App() {
  return (
    <Router>
      {/* Render the Header on every page */}
      <Header />
      <Routes>
        {/* Render the Login page only */}
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/midsem" element={<Midsem />} />
        <Route path="/endsem" element={<Endsem />} />
        <Route path="/holiday" element={<Holiday />} />
        <Route path="/emergency" element={<Emergency />} />
      </Routes>
    </Router>
  );
}

export default App;




// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './Header';
// import Footer from './Footer';
// import Login from './components/Login/Login';
// import Home from './components/Home/Home';
// import Midsem from './components/Midsem/DESKTOP/midsem';
// import Endsem from './components/Endsem/DESKTOP/endsem';
// import Holiday from './components/Holiday/DESKTOP/holiday';
// import Emergency from './components/Emergency/Emergency';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         {/* Login page route */}
//         <Route path="/" element={<Login />} />
        
//         {/* Protected routes wrapped with Header and Footer */}
//         <Route
//           element={
//             <>
//               <Header />
//               <Footer />
//             </>
//           }
//         >
//           <Route path="/home" element={<Home />} />
//           <Route path="/midsem" element={<Midsem />} />
//           <Route path="/endsem" element={<Endsem />} />
//           <Route path="/holiday" element={<Holiday />} />
//           <Route path="/emergency" element={<Emergency />} />
//         </Route>
//       </Routes>
//     </Router>
//   );
// }

// export default App;
