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
import AuthProvider from './Components/Authentication/AuthContext/AuthProvider';


const queryClient = new QueryClient()

function App() {
  return (
    <div className=' mx-auto'>

      <AuthProvider>
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            <RouterProvider router={router}>
            </RouterProvider>
            <Toaster position="top-right"
              reverseOrder={false}></Toaster>
          </QueryClientProvider>
        </Provider>
      </AuthProvider>



    </div >
  );
}

export default App;
