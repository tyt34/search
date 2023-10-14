import {
  HashRouter,
  Route,
  Routes
} from 'react-router-dom'
import { configRoutes } from './app-routes.constants'
import { Provider } from 'react-redux'
import { store } from '../store/store'

export const AppRoutes = () => {
  return (
    <section className="app">
      <Provider store={store}>
        <HashRouter basename="/">
          <Routes>
            {configRoutes.map((route) => {
              return (
                <Route
                  key={route.key}
                  path={route.path}
                  element={route.element}
                />
              )
            })}
          </Routes>
        </HashRouter>
      </Provider>
    </section>
  )
}
