import PropTypes from 'prop-types';
import { useState } from 'react';

function Wilder({wilder}) {
    const [button, setButton] = useState(0)
    
    let handleButton = () => {
        if (button === 0){
            setButton(button + 1)
        } else if (button === 1) {
            setButton(button - 1)
        }
    }
    return (
      (button) ? (
        <div className='eleve'>    
            <img className='bigBrain' src="https://media.tenor.com/jHvyFefhKmcAAAAM/mujikcboro-seriymujik.gif" />
          <p>{wilder.name} is good at React. 👌</p>
          <button className='mood' onClick={handleButton}>change mood</button>
        </div>
    ) : (
      <div className='eleve'>
        <img className='dumb' src='https://media.tenor.com/c_YU3p6py2AAAAAd/meme-crying.gif' />
        <p>{wilder.name} is not good at React.😒 </p>
        <button className='mood' onClick={handleButton}>change mood</button>
      </div>
    )
    );

Wilder.propTypes = {
    wilder: PropTypes.shape({
        name: PropTypes.string.isRequired,
        master: PropTypes.bool.isRequired
    })
}}

export default Wilder;