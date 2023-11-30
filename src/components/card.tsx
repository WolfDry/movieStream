import Image from 'next/image'

export function Card(props: {
    title: string,
     image: string,
     annee: string,
     categ: string
}) {
    const image = props.image
    const title = props.title
    const annee = props.annee
    const categ = props.categ
  return (
    <div className='card'>
        <Image src={'/affiches/'+image+'.JPG'} alt='image' width={300} height={450}/>
        <h1 className='card_title'>{ title }</h1>
        <div className='card_desc'>
          <p>{ annee }</p>
          <p id='categ'>{ categ }</p>
        </div>
    </div>
  )
}