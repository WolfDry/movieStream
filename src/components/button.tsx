import Image from 'next/image'

export function Button(props: {
    title: string,
    onClick: any
}) {
    const title = props.title
    const onclick = props.onClick
  return (
    <button className='button' onClick={onclick}>
        {title}
    </button>
  )
}