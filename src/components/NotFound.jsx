import React from "react";
import { useHistory } from "react-router-dom";

export default function NotFound() {
  let history = useHistory();

  const redirect = () => {
    history.push("/")
  }
  return (
    <div className='body'>
      <section className='wrapper'>

        <div className='container'>

          <div id='scene' className='scene' data-hover-only='false'>


            <div className='circle' data-depth='1.2'></div>

            <div className='one' data-depth='0.9'>
              <div className='content'>
                <span className='piece'></span>
                <span className='piece'></span>
                <span className='piece'></span>
              </div>
            </div>

            <div className='two' data-depth='0.60'>
              <div className='content'>
                <span className='piece'></span>
                <span className='piece'></span>
                <span className='piece'></span>
              </div>
            </div>

            <div className='three' data-depth='0.40'>
              <div className='content'>
                <span className='piece'></span>
                <span className='piece'></span>
                <span className='piece'></span>
              </div>
            </div>

            <p className='p404' data-depth='0.50'>404</p>
            <p className='p404' data-depth='0.10'>404</p>

          </div>

          <div className='text'>
            <article>
              <p>Volver a la pagina principal</p>
              <button onClick={()=>redirect()}>Volver</button>
            </article>
          </div>

        </div>
      </section>
    </div>
  );
}
