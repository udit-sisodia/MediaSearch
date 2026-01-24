import { useDispatch, useSelector } from "react-redux"
import CollectionCard from "../components/Collection"
import { clearCollection } from '../redux/feautres/collectionSlice'

const CollectionPage = () => {
  const collection = useSelector(state => state.collection.items)
  const dispatch = useDispatch()

  const clearAll = () => {
    dispatch(clearCollection())
  }

  return (
    <div className="overflow-auto px-4 py-4 sm:px-10 sm:py-6">

      {collection.length > 0 ? (
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
          <h2 className="text-2xl sm:text-3xl font-medium text-center sm:text-left">
            Your Collection
          </h2>

          <button
            onClick={() => {
              clearAll()
            }}
            className="active:scale-95 transition cursor-pointer bg-red-600 px-5 sm:px-8 py-2 sm:py-3 text-sm sm:text-lg font-medium rounded w-full sm:w-auto"
          >
            Clear Collection
          </button>
        </div>
      ) : (
        <h2 className="text-3xl sm:text-5xl py-10 text-gray-300 text-center font-medium">
          Collection is Empty
        </h2>
      )}

      <div className='flex flex-col sm:flex-row justify-start w-full flex-wrap gap-4 sm:gap-6'>
        {collection.map((elem, idx) => {
          return (
            <div key={idx} className="w-full sm:w-auto">
              <CollectionCard elem={elem} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CollectionPage
