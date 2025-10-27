import styles from './LandingPage.module.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

interface LandingPageProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>
}

function LandingPage({search, setSearch}: LandingPageProps) {
  const navigate = useNavigate();

  const handleSearch = () => {
    axios
      .get(`https://icanhazdadjoke.com/search?term=${search}`, { headers: {'Accept': 'application/json' } })
      .then(response => {
        const jokesToPass = {
          jokes: response.data.results
        }
      
        navigate('/results', { state: jokesToPass });
        setSearch('');
      })
      .catch(error => console.error(error))
  }

  return (
    <div className={styles.body}>
      <div className={styles.search_box}>
        <h3> Search for an amazing joke! </h3>
        <div className={styles.input_field}>
          <input type="text" value={search} onChange={(event) => setSearch(event.target.value)}/>
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>
    </div>
  )
}

export default LandingPage;
