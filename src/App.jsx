import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useReducer, useState } from 'react';
import { DataUSer, reducer, initialState } from './reducer/context';
import { BASE_URL } from './assets/js/variable';
import Nav from './components/Nav';
import Page404 from './pages/Page404';
import PageSearch from './pages/PageSearch';
import PageCompleted from './pages/PageCompleted';
import PageImportant from './pages/PageImportant';
import PageAll from './pages/PageAll';
import PageToday from './pages/PageToday';


function App() {
  const [signIn, setSignIn] = useState(false)
  const [state, dispatch] = useReducer(reducer, initialState)

  const getData = async (token) => {
    const hitAPI = await fetch(`${BASE_URL}/user?token=${token}`);
    const response = await hitAPI.json()
    if (hitAPI.ok) {
      const result = response;
      dispatch({ type: "UPDATE_NAME", name: result.name })
      dispatch({ type: "UPDATE_STATUS", status: result.status })
      dispatch({ type: "INITIALIZATION_TODO_ITEM", todo: result.todo })
      setSignIn(false)
    } else {
      setSignIn(true);
    }
  }

  useEffect(() => {
    let token = sessionStorage.getItem("token")
    if (token) {
      getData(token);
    } else {
      setSignIn(true)
    }

  }, [signIn]);

  // Set TITLE DOCUMENT
  document.title = "To Do List App"

  return (
    <DataUSer.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <Routes>
          <Route path="/to-do-list" element={<Nav signIn={signIn} setSignIn={setSignIn} />}>
            <Route index element={<PageToday />} />
            <Route path="/to-do-list/all" element={<PageAll />} />
            <Route path="/to-do-list/important" element={<PageImportant />} />
            <Route path="/to-do-list/completed" element={<PageCompleted />} />
            <Route path="/to-do-list/search" element={<PageSearch />} />
            <Route path="/to-do-list/*" element={<Page404 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </DataUSer.Provider>
  );
}

export default App;


