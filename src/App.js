import { FilterPanel } from 'components/FilterPanel'
import { JobList } from 'components/JobList'
import { TheHeader } from 'components/TheHeader'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addPositions } from 'store/position/position-actions'
import data from './mock/data.json'
import { selectFilters } from 'store/filters/filters-selectors'

function App() {
  const dispatch = useDispatch()
  const currentFilters = useSelector(selectFilters)

  useEffect(() => {
    dispatch(addPositions(data))
  })

  return (
    <>
      <TheHeader />
      <div className='container'>
        <FilterPanel />
        <JobList />
      </div>
    </>
  )
}

export default App
