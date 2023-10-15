import { ChangeMode } from '../../components'
import { useUrlFetch } from '../../hooks'
import {
  useDocuments,
  useTotal
} from '../../store/hook'
import styles from './table.module.scss'

export const Table = () => {
  const total = useTotal()
  const documents = useDocuments()

  console.log({ Tt: total, Dt: documents })

  useUrlFetch()
  return (
    <div className={styles.a}>
      <ChangeMode />
      This is component: Table
    </div>
  )
}
