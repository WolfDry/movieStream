import { Card } from '@/components/card'
import data from '../../public/data/movie.json'

export default function Home() {
  const movies = data.Filmotech_Films.Film
  movies.sort((a, b) => {
      const champA = a.TitreVF.toUpperCase(); // Convertir en majuscules pour ignorer la casse
      const champB = b.TitreVF.toUpperCase(); // Convertir en majuscules pour ignorer la casse

      if (champA < champB) {
          return -1; // Retourne un nombre négatif si a précède b
      }
      if (champA > champB) {
          return 1; // Retourne un nombre positif si b précède a
      }
      return 0; // Retourne 0 si les deux sont égaux
  });
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