import logo from './logo.svg';
import './App.css';
import ListUsers from './components/ListUsers';

function App() {
  return (
    <div className="container border">
      <header>
        <div className="logo">
          <img src="https://devmaster.edu.vn/images/logo.png" alt="Dev"></img>
        </div>
        <ListUsers />
      </header>

      <nav>

      </nav>
    

    </div>
  );
}

export default App;
