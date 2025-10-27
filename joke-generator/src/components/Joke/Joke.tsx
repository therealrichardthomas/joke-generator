// Props will need their own interface
// remember to import styles
import styles from './Joke.module.css'

interface JokeProps {
  joke: string;
}

const Joke = ({joke}: JokeProps) => {
  return (
    <div className={styles.joke}>
      {joke}
    </div>
  )
};

export default Joke;
