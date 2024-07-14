import player from '../../assets/player.png'
import './Card.css'
const Card = () => {
  return (
    <>
    <div className="card-container">
        <figure className='card-figure'>
            <img src={player} alt="" />

        </figure>
        <div className="card-action">
            <button>🗑 Borrar</button>
            <button>🖊 Editar</button>
        </div>
    </div>
    
    </>
  )
}

export default Card