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
    <div>
        <Image src={'/affiches/'+image+'.JPG'} alt='image' width={300} height={450}/>
        <h1>{title}</h1>
        <p>{annee}</p>
        <p>{categ}</p>
    </div>
  )
}