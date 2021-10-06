import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Viet Nguyen | Front End Developer</title>
        <meta name="description" content="Viet Nguyen Front End Web Developer Portfolio | Javascript React HTMl5 CSS3 SASS Next.js three.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className='title'>Look at this {" "}<Link href='/post/post'><a>page!</a></Link></h1>
        <Image 
          src='/images/nguyen_50.jpeg'
          height={250}
          width={250}
          alt='Profile shot of Viet Nguyen'
        />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
