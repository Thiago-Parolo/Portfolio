import './global.css';

import { About } from './components/About';
import { Projects } from './components/Projects/';
import { Profile } from './components/Profile';
import { Header } from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Profile />
      <About />
      <Projects />
    </div>
  );
}

export default App;
