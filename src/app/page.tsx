import data from '../../public/data/movie.json'

export default function Home() {
  const movies = data.Filmotech_Films.Film
  return (
    <main>
      <h1>MovieStream</h1>
      {
        movies.map((movie)=>{
          return(
            <p>{movie.TitreVF}</p>
          )
        })
      }
    </main>
  )
}