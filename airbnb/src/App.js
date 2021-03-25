import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home';
import './App.css';
import GoToCard from './components/GoToCard';
import LiveCard from './components/LiveCard';
import MainNav from './components/MainNav';

function App() {
  return (
 
    <div className="bg-1">
      <MainNav />
      {/* <Navbar /> */}
      <Home />
      <GoToCard />
      <LiveCard />
    </div>
  );
}

export default App;
