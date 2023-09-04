import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { TestsContext } from '../context/TestsContext';
/* import { useSelector } from 'react-redux'; */

import '../css/Home.scss';

function Home() {
  /* const testResponses = useSelector((state) => state.tests.test); */
  const { tests } = useContext( TestsContext );

  return (
    <div className='home'>
      <div className="home-logo">
        <img className='logo' alt='Blinklearning logo' src='assets/img/logo.png' />
      </div>
      <div className="home-buttons">
        <Link className='button' to={`/test`} disabled={tests?.done}>Realizar prueba</Link>
        <Link className='button' to={`/results`} disabled={!tests?.done}>Ver resultados</Link>
      </div>
    </div>
  );
}

export default Home;
