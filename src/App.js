import { useState } from 'react';
import logoImg from './img/imagen.png'
import derechaImg from './img/=_.png'

function App() {

  function Avanzar() {
    return <>
      <button type='button' onClick={Add} className='btn btn-info btn-circle'>
        <img src={derechaImg} alt="Logo" />
      </button>
    </>
  }

  function Retroceder() {
    return <>
      <button type='button' onClick={Dism} className='btn btn-info btn-circle'>
        <img src={derechaImg} alt="Logo" className='izquierda' />
      </button>
    </>
  }

  const [contador, setContador] = useState(0);
  const logos = [0, 1, 2, 3]

  const Add = () => {
    if (contador + 1 > logos.length - 1) {
      setContador(0)
    } else {
      setContador(contador + 1)
    }
  }

  const Dism = () => {
    if (contador - 1 < 0) {
      setContador(logos.length - 1)
    } else {
      setContador(contador - 1)
    }
  }

  return (
    <>
      <div className="container mt-3 ">
        <div className="row text-center">
          <div className="col-sm-1 mt-5">
            <Retroceder />
          </div>

          {logos.map((item, index) =>
            <div key={index} className={'col-sm-2 text-center fondo ' + (contador === index ? 'resaltado' : '')}>
              <img src={logoImg} alt="Logo" />
            </div>
          )}

          <div className="col-sm-1 mt-5">
            <Avanzar />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
