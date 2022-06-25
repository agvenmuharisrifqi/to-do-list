import { useState } from 'react';
import Nav from './components/Nav';
import Today from './pages/Today';
import { ModalAddTask } from './components/ModalAddTask';
import './App.css';

function App() {
  const [task, setTask] = useState([]);
  const [id, setId] = useState(0);
  const [modalTask, setModalTask] = useState(false);
  document.title = "TO DO LIST";

  return (
    <main className='main'>
      <div className="px-4 py-8 flex flex-col justify-between h-full sm:container">
        <Nav />
        <Today task={task} settask={setTask}/>
        <div>
            <button className="add-task" onClick={() => setModalTask(true)}>
                <i className="bx bx-plus"></i>
                Add Task
            </button>
        </div>
        <ModalAddTask id={id} setid={setId} addtask={modalTask} onClick={setModalTask} task={task} settask={setTask} />
      </div>
    </main>
  );
}

export default App;
