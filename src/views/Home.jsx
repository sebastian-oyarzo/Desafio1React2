import torta from '../assets/torta.png'



export const Home = () => {
  return (
    <div className='main' >
      <p className='titulo'>bienvenido a <strong>Happy Cake</strong> </p>
      <p>el lugar de los pasteles felices</p>
      <img src={torta} alt="imagen de torta"/>
    </div>
  )
}
