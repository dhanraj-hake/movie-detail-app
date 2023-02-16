import './App.css';
import MoviesList from './components/MoviesList';
import NavBar from './components/NavBar';

import 'bootstrap/dist/css/bootstrap.min.css';
import MovieState from './context/MovieState';

function App() {
  return (
    <div>
      <MovieState>
      <NavBar /> 
      <MoviesList />
      </MovieState>
    </div>
  );
}

export default App;
