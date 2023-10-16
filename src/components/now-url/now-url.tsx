import { useLocation } from 'react-router'
import styles from './now-url.module.scss'

export const NowUrl = () => {
  const { pathname, search } = useLocation()

  const arrSearch = search.split('&')

  return (
    <div className={styles.url}>
      #{pathname}
      {arrSearch.map((el) => {
        return <p key={el}>{el}</p>
      })}
    </div>
  )
}
