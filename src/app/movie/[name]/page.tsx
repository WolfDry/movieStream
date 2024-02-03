import Image from "next/image"
import "../../../../public/assets/css/style.css"
import data from '../../../../public/data/movie.json'
import Header from "@/components/header"

interface props{
    params: {name: string}
}

export default function Page({params}: props) {
  const movies = data.Filmotech_Films.Film
  const movie = movies.filter((m) => m.Slug === params.name)[0]
  return(
    <main>
      <Header />
      <section className="movie">
        <div className="basic-infos">
          <Image src={'/affiches/'+movie.ID+'.JPG'} alt='image' width={300} height={450}/>
        </div>
        <div className="main-infos">
          
        </div>
      </section>
    </main>
  )
}