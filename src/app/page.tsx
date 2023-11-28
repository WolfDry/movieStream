import { Card } from '@/components/card'
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
            <Card image={movie.ID} title={movie.TitreVF} annee={movie.Annee} categ={movie.Genre}/>
          )
        })
      }
    </main>
  )
}