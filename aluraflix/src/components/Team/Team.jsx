import './Team.css'
import Card from '../Card/Card'
const Team = ({title,color}) => {
  return (
    <>
    <h2 className='team-title' style={{'background':`${color}`}}>{title}</h2>
    <section className='team-main'> 
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        </section>
    </>
  )
}

export default Team