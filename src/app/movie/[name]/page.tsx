import Image from "next/image"
import "../../../../public/assets/css/style.css"
import data from '../../../../public/data/movie.json'
import Header from "@/components/header"

import '../../../../public/assets/css/movie.css'

interface props {
  params: { name: string }
}

export default function Page({ params }: props) {
  const movies = data.Filmotech_Films.Film
  const movie = movies.filter((m) => m.Slug === params.name)[0]
  return (
    <main>
      <Header />
      <section className="movie">
        <div className="basic-infos">
          <div>
            <Image src={'/affiches/' + movie.ID + '.JPG'} alt='image' width={525} height={787.5} />
          </div>
          <div>
            <p>
              Genre : {movie.Genre}
            </p>
          </div>
          <div>
            <p>
              Réalisateur : {movie.Realisateurs}
            </p>
            <p>
              Acteurs : {movie.Acteurs}
            </p>
          </div>
        </div>
        <div className="main-infos">
          <div>
            <h2>{movie.TitreVF}</h2>
            <p>{movie.Annee}</p>
          </div>
          <div>
            <p>
              {movie.Synopsis}
            </p>
          </div>
          <div>
            <p>
              Qualité : {movie.Support}
            </p>
            <p>
              Langues : {movie.Langues}
            </p>
            <p>
              Sous-titre : {movie.SousTitres}
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}