import { Typewriter } from "react-simple-typewriter"

export const AnimatedPhrase = () => {


    return (
        <h6>
         {' '}
        <span style={{ color: '#F55139', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['<Gabriel Dev />']}
            loop={''}
            cursor
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />

        </span>
      </h6>
    );
}