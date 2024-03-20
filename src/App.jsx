import './assets/css/main.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import './assets/css/all.min.css'
import { TimeLine } from './components/TimeLine.jsx';
import { Header } from './components/Header.jsx';
import { Footer } from './components/Footer.jsx';
import { StackCard } from './components/StackCard.jsx';
import { Works } from './components/Works.jsx';

function App() {
  return (
      <>
        <Header />
        <StackCard />
        <Works />
        <TimeLine />
        <Footer />
        
      </>
  )
}

export default App
