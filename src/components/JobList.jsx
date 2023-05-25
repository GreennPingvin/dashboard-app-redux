import { useDispatch, useSelector } from 'react-redux'
import { JobPosition } from './JobPosition'
import { selectVisiblePositions } from 'store/position/position-selectors'
import { addFilter } from 'store/filters/filters-actions'
import { selectFilters } from 'store/filters/filters-selectors'

const JobList = () => {
  const dispatch = useDispatch()
  const currentFilters = useSelector(selectFilters)
  const positions = useSelector((state) =>
    selectVisiblePositions(state, currentFilters)
  )

  const addFilterHandler = (filter) => {
    dispatch(addFilter(filter))
  }

  return (
    <div className='job-list'>
      {positions.map((item) => (
        <JobPosition key={item.id} onAddFilter={addFilterHandler} {...item} />
      ))}
    </div>
  )
}

export { JobList }
