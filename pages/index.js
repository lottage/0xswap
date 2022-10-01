import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Good Gains Exchange</title>
        <meta name="Good Gains Defi Exchange" content="Powered by 0x" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}
