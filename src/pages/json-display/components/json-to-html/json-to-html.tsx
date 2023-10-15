import { FC } from 'react'
import styles from './json-to-html.module.scss'
import { TypeDocument } from '../../../../store/slice'

type Props = {
  json: TypeDocument[]
}

const partOfObject = (
  k: string,
  v: string,
  begin: boolean,
  end: boolean
) => {
  const typeValue =
    k === 'id' || k === 'postId' ? 'num' : 'str'

  return (
    <section key={`${v}${k}`}>
      <p className={styles.brackets}>
        {begin ? '{' : ''}
      </p>
      <p className={styles.value}>
        <b>"{k}"</b>:{' '}
        {typeValue === 'num' ? (
          <span className={styles.number}>
            {v}
          </span>
        ) : (
          <span className={styles.text}>
            "{v}"
          </span>
        )}
      </p>
      <p className={styles.brackets}>
        {end ? '},' : ''}
      </p>
    </section>
  )
}

export const JsonToHtml: FC<Props> = ({
  json
}) => {
  return (
    <>
      {'['}
      {json.map((doc) => {
        const arrKeys = Object.keys(doc)
        const arrValue = Object.values(doc)
        const htmlDocument: JSX.Element[] =
          arrKeys.reduce<JSX.Element[]>(
            (acc, el, i) => {
              const begin = i === 0
              const end =
                i === arrValue.length - 1
              const newEl = partOfObject(
                el,
                arrValue[i].toString(),
                begin,
                end
              )
              return [...acc, newEl]
            },
            []
          )
        return htmlDocument
      })}
      {']'}
    </>
  )
}
