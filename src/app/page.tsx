'use client'

import { Card } from '@/components/card'
import { Button } from '@/components/button';
import data from '../../public/data/movie.json'
import { useState } from 'react';

export default function Home() {

  const [display, setDisplay] = useState(false)


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

  const handleDisplay = () => {
    setDisplay(!display)
  }

  return (
    <main>
      <header>
        <h1 className='title'>MovieStream</h1>
      </header>
      <section>
        <Button title='Quelques informations en plus !' onClick={handleDisplay}/>
        {
          display && 
          <div className='infos'>
            <p>Suite à quelques demandes sur les films que je possède voici un site répertoriant tous les films que j'ai et que je peux vous transmettre.</p>
            <p>Pour informations : </p>
            <ul>
              <li>Le site est en constante évolution et donc recevra des mises à jour afin de l'améliorer.</li>
              <li>La liste de films sera mise à jour à chaque fois que j'ajouterais un nouveau film dans mon disque dur.</li>
              <li>Vous pouvez à tout moment me demander un film qui n'ai pas dans la liste.</li>
              <li>Pour le moment, je peux vous transmettre les films via google drive, swissTransfer (mail) ou en physique.</li>
              <li>Suivant mes disponibilités, vous pouvez recevoir un film au maximum 2/3 jours après la demande.</li>
              <li>Au minimum, un film sera "livré" en 2h.</li>
              <li>Les films que je télécharge sont, sauf exception, en minimum 1080p(environ 4/5Go par film) et maximum 4K(entre 5 et 80Go le film)</li>
              <li>Si les films sont trop gros, pour diverses raisons, ils seront retélécharger pour mieux convenir aux besoins.</li>
              <li>Je suis preneur de tous les retours que vous pouvez me faire (sur le site, sur les films, ect).</li>
            </ul>
            <p>Fonctionnalités à venir : </p>
            <ul>
              <li>Affichage des détails des films.</li>
              <li>Meilleurs rangements des films (une série de films comme mission impossible, par exemple, sera rangée dans l'ordre des films et pas dans l'ordre alphabétique).</li>
              <li>Ajouter une pagination à la page pour n'afficher qu'une dizaine de films par pages.</li>
              <li>Ajout d'un filtre pour affiner la recherche d'un film.</li>
              <li>Ajout de la recherche d'un film précis.</li>
              <li>Meilleurs partage des films (surprise surprise).</li>
            </ul>
          </div>
        }
      </section>
      <section className="content">
        {
          movies.map((movie)=>{
            return(
              <Card key={movie.ID} image={movie.ID} title={movie.TitreVF} annee={movie.Annee} categ={movie.Genre}/>
            )
          })
        }
      </section>
    </main>
  )
}