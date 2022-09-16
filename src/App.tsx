import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation';
import Circuits from './pages/Circuits';
import Drivers from './pages/Drivers';
import Home from './pages/Home'


const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <Navigation></Navigation>
      <BrowserRouter>
        <Routes>
         <Route path="/" element={<Home />}/>
         <Route path="/Circuits" element={<Circuits />}/>
         <Route path="/Drivers" element={<Drivers />}/>
         <Route/>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
