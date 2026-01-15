import React from 'react'
import { useDispatch } from 'react-redux'
import { removeCollection , toastRemoved } from '../redux/feautres/collectionSlice'

const Collection = ({elem}) => {
    const dispatch=useDispatch()

    const removeFromCollection=(elem)=>{
        dispatch(removeCollection(elem))
        dispatch(toastRemoved())
    }
  return (
    <div className='bg-white relative h-[18vw] w-[22vw] rounded'>
      <a target="_blank" className='h-full' href={elem.url}>
        {elem.type == "photo" ? <img className='h-full w-full object-center object-cover' src={elem.src} alt="" /> : ""}
        {elem.type == "video" ? <video className='h-full w-full object-center object-cover' src={elem.src} autoPlay muted></video> : ""}
        {elem.type == "gif" ? <img className='h-full w-full object-center object-cover' src={elem.src} alt="" /> : ""}
      </a>
      <div id='bottom' className='absolute bottom-0 h-[40%] w-full p-7 text-white flex justify-between items-center gap-3'>
        <h2 className='text-md  font-semibold leading-tight'>{elem.title}</h2>
        <button
        onClick={()=>{
          removeFromCollection(elem)
        }}
          className='bg-indigo-500  px-3 py-1 rounded cursor-pointer '
        >
          Remove
        </button>
      </div>
    </div>
  )
}

export default Collection
