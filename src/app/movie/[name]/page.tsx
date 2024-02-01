import "../../../../public/assets/css/style.css"

interface props{
    params: {name: string}
}

export default function Page({params}: props) {
  return(
    <main>
      <header>
        <h1 className='title'>MovieStream</h1>
      </header>
      <section>
        <h1>{params.name}</h1>
      </section>
    </main>
  )
}