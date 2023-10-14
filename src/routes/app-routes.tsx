import { HashRouter, Route, Routes } from 'react-router-dom'
import { configRoutes } from './app-routes.constants'

export const AppRoutes = () => {
  return (
    <section className="app">
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
    </section>
  )
}
