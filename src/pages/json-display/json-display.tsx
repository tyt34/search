import { ChangeTypePage } from '../../components'
import { JsonToHtml } from './components'
import { useDocuments } from '../../store/hook'
import { useUrlFetch } from '../../hooks'
import styles from './json-display.module.scss'

export const JsonDisplay = () => {
  const documents = useDocuments()

  useUrlFetch()

  return (
    <section className={styles.section}>
      <ChangeTypePage />
      <p>JSON:</p>
      <div className={styles.json}>
        {documents.length ? <JsonToHtml json={documents ?? []} /> : null}
      </div>
    </section>
  )
}
