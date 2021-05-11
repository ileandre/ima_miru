import Layout from '../../components/shared/Layout/Layout'
import {useState, useEffect} from 'react'
import { getShows } from "../../services/shows";
import CarouselContainer from '../../components/CarouselContainer/CarouselContainer'
import './Home.css'

const Home = ({user}) => {
    const [allShows, setAllShows] = useState([])

useEffect(() => {
    const fetchShows = async () => {
      const shows = await getShows()
      setAllShows(shows)
    }
    fetchShows()
  }, [])

    return (
        <div>
            {allShows && <Layout user={user}>
                <h3 className="homeStatement">The number one spot to find the next series to binge watch!</h3>
                <h4 className="homeStatement" id = "fan-favorites">Here are some fan favorites</h4>
            {allShows && < CarouselContainer allShows={allShows} />}
            </Layout>}
        </div>
    )
}

export default Home
