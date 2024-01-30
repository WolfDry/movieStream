import Image from 'next/image'
import { useState } from 'react'

export function Card(props: {
    title: string,
     image: number,
     annee: string,
     categ: string
}) {
    const [display, setDisplay] = useState('')
    const image = props.image
    const title = props.title
    const annee = props.annee
    const categ = props.categ

    const handleDisplay = () => {
      if(display)
        setDisplay('')
      if(!display)
        setDisplay('active')
    }
    console.log(display)
  return (
    <div className={`card ${display}`} onClick={handleDisplay}>
        <Image src={'/affiches/'+image+'.JPG'} alt='image' width={300} height={450}/>
        <h1 className='card_title'>{ title }</h1>
        <div className='card_desc'>
          <p>{ annee }</p>
          <p id='categ'>{ categ }</p>
        </div>
    </div>
  )
}