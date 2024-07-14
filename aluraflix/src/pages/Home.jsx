import '../assets/css/index.css'
import banner from '../assets/BannerMain.png'
import Team from '../components/Team/Team'
import {teamMain} from '../utils/team.js'
const Home = () => {
  return (
    <>
    <section className="container">
        <div className='banner'>
           <img src={banner} alt="" />
        </div>
    </section>
    {
      teamMain.map(team=><Team title={team.title} color={team.colorPrimary} key={team.id}/>)

    }
    </>
  )
}

export default Home