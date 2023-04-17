import React, { useContext } from 'react'
import { CardContext } from '../../App'

export default function Card({url, id}) {
  const {shuffleImages} = useContext(CardContext)
  return (
    <div onClick={()=> shuffleImages(id)} >
        <img 
            className="flex justify-center w-[250px] h-[250px] rounded-lg border-[10px] m-10 p-1 hover:opacity-80"
            alt="zebra"
            src={url}
        />
    </div>
  )
}
