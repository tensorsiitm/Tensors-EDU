import React , {Component}from 'react';
import { HashRouter ,Switch,Route,Redirect} from 'react-router-dom';
import Home from './views/Homepage';
import Testseries from './views/Testseriespage';
import Mentorship from './views/Mentorshippage';
import Tensorsexam from './views/Tensorsexampage';
import Josaa from './views/Josaapage';



class App extends Component {
  render(){
    return (
      <HashRouter>
        <div className="App">

            <Switch>
              <Route exact path='/' component={() => <Home/>} />
              <Route exact path='/home' component={() => <Home/>} />
              <Route exact path='/testseries' component={() => <Testseries/>} />
              <Route exact path='/mentorship' component={() => <Mentorship/>} />
              <Route exact path='/tensorsexam' component={() => <Tensorsexam/>} />
              <Route exact path='/josaa' component={() => <Josaa/>} />
              <Redirect to='/'/>
            </Switch>
        </div>
      </HashRouter>
  
    );
  
  }
}

export default App;
