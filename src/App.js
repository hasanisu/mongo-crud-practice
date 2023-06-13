import './App.css';
import {RouterProvider} from "react-router-dom";
import { router } from './routes/Routes';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;
