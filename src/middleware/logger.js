/* eslint-disable no-console */
/* from https://redux.js.org/recipes/configuring-your-store/ */

const logger = store => next => action => {
  console.group(action.type)
  console.info('dispatching', action)
  const result = next(action)
  console.log('next state', store.getState())
  console.groupEnd()
  return result
}

export default logger
