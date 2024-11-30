import { BrowserRouter, Link } from 'react-router-dom';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Link to="/">
        <Login />
      </Link>

    </BrowserRouter>
  );
}

export default App;
