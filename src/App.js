import { RouterProvider } from 'react-router-dom';
import './App.css';
import route from './components/Route/Route';

function App() {
  return (
    <div className='max-w-6xl mx-auto'>
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
