import { useLocation } from 'react-router'
import styles from './now-url.module.scss'

export const NowUrl = () => {
  const { pathname, search, state } =
    useLocation()

  const queryParams = new URLSearchParams(search)

  const numberPage = queryParams.get('page')

  const page = numberPage || 1

  console.log({
    pathname,
    search,
    state,
    queryParams,
    numberPage,
    page
  })

  return (
    <div className={styles.a}>
      #{pathname}
      {search}
    </div>
  )
}
