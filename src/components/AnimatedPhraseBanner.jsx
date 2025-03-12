import { Typewriter } from "react-simple-typewriter"

export const AnimatedPhraseBanner = () => {


    return (
        <>
            <h4>
            {' '}
            <span style={{ color: '#F55139', fontWeight: 'bold' }}>
            <Typewriter
                words={['<PHP DEVELOPER />', '<NODE DEVELOPER/>', '<REACT.JS DEVELOPER/>']}
                loop={''}
                cursor
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
            />

            </span>
        </h4>
        </>
    );
}