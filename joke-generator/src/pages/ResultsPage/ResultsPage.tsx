// you will need an interface when parsing over your API results
// similar to CatFact API exercise
import styles from './ResultsPage.module.css';
import { useEffect, type Key } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Joke from '../../components/Joke/Joke';

interface ResultsPageProps {
  search: string;
}

function ResultsPage({search}: ResultsPageProps) {
  const location = useLocation();
  const navigate = useNavigate();
  // console.log("Results", location.state.jokes);
  const receivedState = location.state;

  useEffect(() => {
    if (!receivedState) {
      navigate('/');
    }
  }, [receivedState, navigate, ])

  if (!receivedState) {
    return null;
  }

  const jokes = receivedState.jokes;

  return (
    <div className={styles.body}>
      <h1>Showing results for '{search}'</h1>
      {jokes.length > 0 ? (
        <>
          <div className={styles.jokes_container}> 
            {jokes.map((joke: { id: Key | null | undefined; joke: string; }) => <Joke key={joke.id} joke={joke.joke} />)}
          </div>
        </>
      ) : (<p>No jokes found</p>)}
    </div>
  )
}

export default ResultsPage;
