import { RouterProvider } from 'react-router-dom';
import './App.css';
import route from './components/Route/Route';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className='max-w-6xl mx-auto App'>
      <RouterProvider router={route}></RouterProvider>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
