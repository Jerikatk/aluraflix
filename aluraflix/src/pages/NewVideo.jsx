import '../assets/css/index.css'

export const NewVideo = () => {
  return (
    <div className='new-video'>
    <h1>NUEVO VIDEO</h1>
    <p>COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA TARJETA DE VIDEO</p>
    <form action="" className='new-video-form'>
      <h2>Crear Targeta</h2>
      <hr />
      <div className='new-video-form-container'>
      <label htmlFor="">Titulo</label>
      <input type="text" />

      </div>
      <div className='new-video-form-container'>

      <label htmlFor="">Categoria</label>
      <input type="text" />
      </div>
      <div className='new-video-form-container'>
      <label htmlFor="">Imagen</label>
      <input type="text" />

      </div>
      <div className='new-video-form-container'>

      <label htmlFor="">Video</label>
      <input type="text" />
      </div>
      <div className='new-video-form-container'>
      <label htmlFor="">Descripcion</label>
      <textarea placeholder='¿de que se trata el vídeo?'/>

      </div>
      <div className='new-video-form__action'>
        <input type="submit" value="GUARDAR" />
        <input type="reset" value="LIMPIAR" />
      </div>

    </form>
    </div>
  )
}
