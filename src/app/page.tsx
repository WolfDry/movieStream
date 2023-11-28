import data from '../../public/data/movie.json'
import Image from 'next/image'

export default function Home() {
  const movies = data.Filmotech_Films.Film
  return (
    <main>
      <h1>MovieStream</h1>
      {
        movies.map((movie)=>{
          return(
            <>
              <p key={movie.ID}>{movie.TitreVF}</p>
              <Image src={`/affiches/${movie.ID}.JPG`} alt='image' width={100} height={100}/>
            </>
          )
        })
      }
    </main>
  )
}