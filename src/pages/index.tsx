import type { FC } from 'react'
import { useRouter } from 'next/router'

import styles from '../styles/Home.module.css'

import Layout from '../components/Layout'

const Home: FC = () => {

  const router = useRouter()

  const goToConversationList = () => router.push( { pathname: 'list-conversations/'})

  return (
    <div className={styles.container}>

    <Layout title={'Frontend Technical test - Leboncoin'}>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome !
        </h1>

          <p className={styles.description}>
            This test is based on a <a title="Next.js documentation" href="https://nextjs.org/docs/getting-started" target="_blank" rel="noopener noreferrer">Next.js</a> application.<br />
            Fork the repository and use the <code className={styles.code}>main</code> branch as your starting point.
            <br /><br />

            Get started by reading{' '}
            <code className={styles.code}>README.md</code> and editing <code className={styles.code}>src/pages/index.js</code>
            <br />
            Once you are done, send the repository link to your HR contact.
          </p>

          <div className={styles.grid}>
            <article className={styles.card}>
              <p onClick={goToConversationList}>click here to See Demo !</p>
            </article>
          </div>
       
      </main>

      </Layout>
    </div>
  )
}

export default Home