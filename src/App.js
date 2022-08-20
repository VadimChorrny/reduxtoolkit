// import Main from './pages/Main.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Todo from './pages/Todo.jsx';
import TodoList from './pages/TodoList';
import Main from './pages/Main';
import Header from './components/Header.jsx';
import NoPage from './pages/NoPage.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/todo' element={<Todo />} />
            <Route path='/todoList' element={<TodoList />} />
            <Route path='*' element={<NoPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
