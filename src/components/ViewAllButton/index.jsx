import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import clsx from 'clsx'

import styles from './styles.module.less'
import common from '../../../res/styles/common.module.less'

const ViewAllButton = ({ to, numComments }) => (
  <div className={styles.container}>
    <Link
      to={to}
      className={clsx(common.textButton, styles.viewAllButton)}
    >{`View all ${numComments} comments`}</Link>
  </div>
)

ViewAllButton.propTypes = {
  to: PropTypes.string.isRequired,
  numComments: PropTypes.number.isRequired,
}

export default ViewAllButton
