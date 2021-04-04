import React from 'react'
import PropTypes from 'prop-types'


const PageLayout = ({ children }) => {
  return (
    <div>
      <h2>Layout</h2>
      {children}
    </div>
  )
}

PageLayout.propTypes = {
  children: PropTypes.any
}

export default PageLayout
