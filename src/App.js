import { useEffect, useState } from 'react';
import './App.css';
import ModalSigIn from './components/ModalSignIn';
import Nav from './components/Nav';
import Today from './pages/Today';
import { ModalAddTask } from './components/ModalAddTask';
import { BASE_URL } from './assets/js/variable';

function App() {
  const [sigIn, setSignIn] = useState(true)
  return (
    <main className='main'>
      <div className="px-4 py-8 flex flex-col justify-between h-full sm:container">
        <ModalSigIn signin={sigIn} onClick={setSignIn}/>
      </div>
    </main>
  );
}

export default App;
