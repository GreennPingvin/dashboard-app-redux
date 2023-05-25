import PropTypes from 'prop-types'

const Stack = ({ children, pos }) => (
  <div
    className='stack'
    style={{
      justifyContent: pos ?? 'center'
    }}>
    {children}
  </div>
)

export { Stack }

Stack.propTypes = {
  children: PropTypes.node.isRequired,
}
