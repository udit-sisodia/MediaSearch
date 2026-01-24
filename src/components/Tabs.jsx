import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTab } from '../redux/feautres/searchSlice'

const Tabs = () => {
  const tabs = ["photos", "videos", "gif"]
  const dispatch = useDispatch()
  const activeTab = useSelector((state) => state.search.activeTab)

  return (
    <div className="flex flex-wrap sm:flex-nowrap p-4 sm:p-10 gap-4 sm:gap-10">
      {tabs.map(function (elem, idx) {
        return (
          <button
            key={idx}
            className={`
              ${activeTab == elem ? "bg-blue-500" : "bg-gray-600"}
              px-4 sm:px-5
              py-2 sm:py-3
              rounded
              active:scale-95
              cursor-pointer
              uppercase
              text-sm sm:text-base
              w-full sm:w-auto
            `}
            onClick={() => {
              dispatch(setActiveTab(elem))
            }}
          >
            {elem}
          </button>
        )
      })}
    </div>
  )
}

export default Tabs
