import { Card } from '@/components/card'
import data from '../../public/data/movie.json'
import Image from 'next/image'

export default function Home() {
  const movies = data.Filmotech_Films.Film
  return (
    <main>
      <header>
        <h1 className='title'>MovieStream</h1>
      </header>
      <section className="content">
        {
          movies.map((movie)=>{
            return(
              <Card image={movie.ID} title={movie.TitreVF} annee={movie.Annee} categ={movie.Genre}/>
            )
          })
        }
      </section>
    </main>
  )
}