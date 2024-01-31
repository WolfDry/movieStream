import { Movie } from '@/Interfaces/Movie'
import Image from 'next/image'
import Link from 'next/link';

interface IMovie {
  movie: Movie;
}

export function Card({movie}: IMovie) {

  return (
    <Link href={"/movie"}>
      <div className={"card"}>
        <div className="card_info">
            <Image src={'/affiches/'+movie.ID+'.JPG'} alt='image' width={300} height={450}/>
            <h1 className='card_title'>{ movie.TitreVF }</h1>
            <div className='card_desc'>
              <p>{ movie.Annee }</p>
              <p id='categ'>{ movie.Genre }</p>
            </div>
        </div>
      </div>
    </Link>
  )
}