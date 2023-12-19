import UserList from './UserList';
import './App.css';
import NavBar from './NavBar';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
       {/* The main App component */}
      <NavBar />
     <UserList />
    </div>
  );
}

export default App;

// This is the root component of the application, rendering the navigation bar and user list components
