import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation';
import Circuits from './pages/Circuits';
import Constructors from './pages/Constructors';
import Driver from './pages/Driver';
import Drivers from './pages/Drivers';
import Home from './pages/Home'
import Rankings from './pages/Rankings';
import Season from './pages/Season';
import Seasons from './pages/Seasons';


const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
      <Navigation></Navigation>
        <Routes>
         <Route path="/" element={<Home />}/>
         <Route path="/Circuits" element={<Circuits />}/>
         <Route path="/Drivers" element={<Drivers />}/>
         <Route path="/Drivers/:driver" element={<Driver />}/>
         <Route path="/Constructors" element={<Constructors />}/>
         <Route path="/Seasons" element={<Seasons />}/>
         <Route path="/Seasons/:year" element={<Season/>}/>
         <Route path="/Rankings" element={<Rankings />}/>
         <Route/>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
