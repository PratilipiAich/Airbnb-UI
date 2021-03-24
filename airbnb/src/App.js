import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home';
import './App.css';
import ContentNav from './components/ContentNav';
import GoToCard from './components/GoToCard';

function App() {
  return (
 
    <div className="bg-1">
      <Navbar />
      <ContentNav />     
      <Home />
      <GoToCard />
    </div>
  );
}

export default App;
