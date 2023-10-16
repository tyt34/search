import styles from './json-display.module.scss'
import { ChangeTypePage } from '../../components'
import { JsonToHtml } from './components'
import { useDocuments } from '../../store/hook'
import { useUrlFetch } from '../../hooks'

export const JsonDisplay = () => {
  const documents = useDocuments()

  useUrlFetch()

  return (
    <>
      <ChangeTypePage />
      <p>JSON:</p>
      <div className={styles.json}>
        {documents.length ? <JsonToHtml json={documents ?? []} /> : null}
      </div>
    </>
  )
}
