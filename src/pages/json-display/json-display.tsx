import { ChangeMode } from '../../components'
import {
  useDocuments,
  useTotal
} from '../../store/hook'

import styles from './json-display.module.scss'
import { useUrlFetch } from '../../hooks'

export const JsonDisplay = () => {
  const total = useTotal()
  const documents = useDocuments()

  console.log({ T: total, D: documents })

  useUrlFetch()

  return (
    <div className={styles.a}>
      <ChangeMode />
      This is component: JsonDisplay
    </div>
  )
}
