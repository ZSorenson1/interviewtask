import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Register from './components/Register.jsx'
import SideContent from './components/SideContent.jsx'
function App() {
  return (
    <div className="App d-flex flex-row">
      <Register />
      <SideContent />
    </div>
  );
}

export default App;
