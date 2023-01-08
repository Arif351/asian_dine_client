import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Components/Router/Router';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { Provider } from 'react-redux';
import store from './Components/APP/Store/Store';
import 'react-day-picker/dist/style.css';


const queryClient = new QueryClient()

function App() {
  return (
    <div className=' mx-auto'>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router}>
          </RouterProvider>
          <Toaster></Toaster>
        </QueryClientProvider>
      </Provider>


    </div >
  );
}

export default App;
