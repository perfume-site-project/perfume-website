import Id from './component/Id'
import Password from './component/Password'
import Passwordcheck from './component/Passwordcheck';
import Name from './component/Name';
import Contact from './component/Contact';
import Birthdate from './component/Birthdate';
import Terms from './component/Terms';
import Join from './component/Join';
import './App.css';

function App() {
    return (
    <div className="App">
        <Id/>
        <Password/>
        <Passwordcheck/>
        <Name/>
        <Contact/>
        <Birthdate/>
        <Terms/>
        <Join/>
    </div>
  );
}


export default App;
