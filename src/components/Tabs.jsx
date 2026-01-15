import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTab } from '../redux/feautres/searchSlice'

const Tabs = () => {
    const tabs = ["photos","videos","gif"]

    const dispatch=useDispatch()
    const activeTab=useSelector((state)=>state.search.activeTab)
  return (
    <div className='flex p-10 gap-10'>
      {tabs.map(function(elem,idx){
        return (
        <button key={idx}
        className={`${(activeTab==elem?"bg-blue-500":"bg-gray-600")} px-5 py-3 rounded active:scale-95 cursor-pointer uppercase`}
        onClick={()=>{
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
