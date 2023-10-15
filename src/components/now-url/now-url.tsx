import { useLocation } from 'react-router'
import styles from './now-url.module.scss'
import { usePageNumber } from '../../hooks'

export const NowUrl = () => {
  const { pathname, search, state } =
    useLocation()

  const { page } = usePageNumber()

  // console.log({
  //   pathname,
  //   search,
  //   state,
  //   page
  // })

  return (
    <div className={styles.a}>
      #{pathname}
      {search}
    </div>
  )
}
