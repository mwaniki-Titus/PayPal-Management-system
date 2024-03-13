import './App.scss';


import Navbar from './Layout/Navbar';
import Sidebar from './Layout/Sidebar';
import MainContent from './Layout/MainContent';

function App() {
  return (
    <div className='mainContainer'>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="mainBottom">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="mainContent">
            <MainContent />
        </div>
      </div>
    </div>
  );
}

export default App;
