import { useLocation } from 'react-router'
import styles from './now-url.module.scss'

export const NowUrl = () => {
  const { pathname, search, state } =
    useLocation()

  console.log({ pathname, search, state })

  return (
    <div className={styles.a}>/{pathname}</div>
  )
}
