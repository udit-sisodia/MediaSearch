import React from 'react'
import { useDispatch } from 'react-redux'
import { removeCollection, toastRemoved } from '../redux/feautres/collectionSlice'

const Collection = ({ elem }) => {
  const dispatch = useDispatch()

  const removeFromCollection = (elem) => {
    dispatch(removeCollection(elem))
    dispatch(toastRemoved())
  }

  return (
    <div className='
      bg-white relative
      w-full h-[60vw]
      sm:h-[18vw] sm:w-[22vw]
      rounded overflow-hidden
    '>
      <a target="_blank" className='h-full block' href={elem.url}>
        {elem.type == "photo" && (
          <img className='h-full w-full object-cover' src={elem.src} alt="" />
        )}
        {elem.type == "video" && (
          <video className='h-full w-full object-cover' src={elem.src} autoPlay muted />
        )}
        {elem.type == "gif" && (
          <img className='h-full w-full object-cover' src={elem.src} alt="" />
        )}
      </a>

      <div className='
        absolute bottom-0 w-full
        h-[45%] sm:h-[40%]
        p-3 sm:p-7
        text-white flex justify-between items-center gap-2 sm:gap-3
        bg-gradient-to-t from-black/70 to-transparent
      '>
        <h2 className='text-sm sm:text-md font-semibold leading-tight line-clamp-2'>
          {elem.title}
        </h2>

        <button
          onClick={() => {
            removeFromCollection(elem)
          }}
          className='bg-indigo-500 px-2 sm:px-3 py-1 rounded cursor-pointer text-xs sm:text-sm'
        >
          Remove
        </button>
      </div>
    </div>
  )
}

export default Collection
