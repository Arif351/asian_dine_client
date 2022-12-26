import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Components/Router/Router';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import ProductProvider from './Components/Context/ProductProvider';

const queryClient = new QueryClient()

function App() {
  return (
    <div className=' mx-auto'>
      <ProductProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router}>
          </RouterProvider>
          <Toaster></Toaster>
        </QueryClientProvider>
      </ProductProvider>
    </div >
  );
}

export default App;
