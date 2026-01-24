import { setQuery, setActiveTab, setResults, setLoading, setError } from "../redux/feautres/searchSlice"
import { fetchGif, fetchPhotos, fetchVideos } from "../api/mediaAPi"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import ResultCard from "./ResultCard"

const ResultGrid = () => {
  const dispatch = useDispatch()
  const { query, activeTab, results, loading, error } = useSelector((store) => store.search)

  useEffect(function () {
    if (!query) return
    dispatch(setLoading())
    try {
      let data = []
      const getData = async () => {
        if (activeTab == "photos") {
          const response = await fetchPhotos(query)
          data = response.results.map(function (elem) {
            return {
              id: elem.id,
              title: elem.alt_description,
              type: "photo",
              thumbnail: elem.urls.small,
              src: elem.urls.full,
              url: elem.links.html
            }
          })
        }
        if (activeTab == "videos") {
          const response = await fetchVideos(query)
          data = response.videos.map(function (elem) {
            return {
              id: elem.id,
              title: elem.user.name || "video",
              type: "video",
              thumbnail: elem.image,
              src: elem.video_files[0].link,
              url: elem.url
            }
          })
        }
        if (activeTab == "gif") {
          const response = await fetchGif(query)
          data = response.map(function (elem) {
            return {
              id: elem.id,
              title: elem.title || "gif",
              type: "gif",
              thumbnail: "GIF",
              src: elem.images.preview_gif.url,
              url: elem.url
            }
          })
        }
        dispatch(setResults(data))
      }
      getData()
    } catch (err) {
      dispatch(setError(err))
    }
  }, [query, activeTab])

  if (error) return <h1>Error</h1>
  if (loading) return <h1>Loading...</h1>

  return (
  <div
    className="
      flex flex-col sm:flex-row
      sm:flex-wrap
      overflow-auto
      gap-4 sm:gap-8
      p-4 sm:p-5
    "
  >
    {results.map(function (elem, idx) {
      return (
        <div key={idx} className="w-full sm:w-auto">
          <ResultCard elem={elem} />
        </div>
      )
    })}
  </div>
)

}

export default ResultGrid
