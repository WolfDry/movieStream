import Image from 'next/image'
import { useState } from 'react'

export function Card(props: {
    movie: object
}) {
    const [display, setDisplay] = useState('')
    const movie = props.movie

    const handleDisplay = () => {
      if(display)
        setDisplay('')
      if(!display)
        setDisplay('active')
    }
  return (
    <div className={`card ${display}`} onClick={handleDisplay}>
      <div className="card_info">
        <Image src={'/affiches/'+movie.ID+'.JPG'} alt='image' width={300} height={450}/>
        <h1 className='card_title'>{ movie.titreVF }</h1>
        <div className='card_desc'>
          <p>{ movie.Annee }</p>
          <p id='categ'>{ movie.Genre }</p>
        </div>
      </div>
      {display && 
      <div className="card_details">
        <p>{movie.Synopsis}</p>
      </div>
      }
    </div>
  )
}