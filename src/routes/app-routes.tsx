import { HashRouter, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import { configRoutes } from './app-routes.constants'
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
