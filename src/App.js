import React , {Component}from 'react';
import { HashRouter ,Route, Routes, Navigate} from 'react-router-dom';
import Home from './views/Homepage';
import Testseries from './views/Testseriespage';
import Mentorship from './views/Mentorshippage';
import Tensorsexam from './views/Tensorsexampage';
import Josaa from './views/Josaapage';
import JEE from './views//Jeemain';
import JEEAdv from './views/Jeeadv';


class App extends Component {
  render(){
    return (
      <HashRouter>
        <div className="App">

            <Routes>
              <Route exact path='/' element={<Home/>} />
              <Route exact path='/home' element={<Home/>} />
              <Route exact path='/testseries' element={<Testseries/>} />
              <Route exact path='/testseries' element={<Testseries/>} />
              <Route exact path='/jee' element={<JEE/>} />
              <Route exact path='/jeeadv' element={<JEEAdv/>} />

              <Route exact path='/mentorship' element={<Mentorship/>} />
              <Route exact path='/tensorsexam' element={<Tensorsexam/>} />
              <Route exact path='/josaa' element={<Josaa/>} />
              <Route path="*" element={<Navigate to='/' />}/>
            </Routes>
        </div>
      </HashRouter>
  
    );
  
  }
}

export default App;
