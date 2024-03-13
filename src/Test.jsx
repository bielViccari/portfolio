import { StackCard } from './components/StackCard.jsx';
import { Header } from './components/Header.jsx';
import { Works } from './components/Works.jsx';
import { Project } from './components/Projects.jsx';
import { Footer } from './components/Footer.jsx';
import { TimeLine } from './components/TimeLine.jsx';

export const Test = () => {
    return (
        <div>
            <Header />
            <StackCard />
            <Works />
            <TimeLine />
            <Footer />
        </div>
    )
}