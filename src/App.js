import Inicio from './components/Inicio/Inicio';
import Principal from './templates/Principal';
import Projects from './components/Projects/Projects';
import Students from './components/Students/Students';
import Leaders from './components/Leaders/Leaders'


import {Router, Route, IndexRoute,browserHistory} from 'react-router-3';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router history={browserHistory}>
      <Route path="/" component={Inicio}/>
      <Route path="/" component={Principal}>
          <Route path="/projects" component={Projects}/>
          <Route path="/leaders" component={Leaders}/>
          <Route path="/students" component={Students}/>
          <IndexRoute component={Projects}/>
        </Route>
      </Router>    
    </div>
  );
}

export default App;
