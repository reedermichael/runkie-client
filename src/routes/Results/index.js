// import HomeView from './components/HomeView'
//
// // Sync route definition
// export default {
//   component : HomeView
// }

import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: 'results',
  /*  Async getComponent is only invoked when route matches   */
  getComponent(nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Index = require('./containers/ResultsContainer').default
      const reducer = require('./modules/song-list').default

      /*  Add the reducer to the store on key 'results'  */
      injectReducer(store, { key: 'results', reducer })

      /*  Return getComponent   */
      cb(null, Index)

    /* Webpack named bundle   */
    }, 'results')
  }
})
