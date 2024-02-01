import { Movie } from "@/Interfaces/Movie"
import "../../../../public/assets/css/style.css"
import data from '../../../../public/data/movie.json'

interface props{
    params: {name: string}
}

export default function Page({params}: props) {
  const movies = data.Filmotech_Films.Film
  const movie = movies.filter((m) => m.Slug === params.name)[0]
  return(
    <main>
      <header>
        <h1 className='title'>MovieStream</h1>
      </header>
      <section>
        <h1>{movie.TitreVF}</h1>
      </section>
    </main>
  )
}