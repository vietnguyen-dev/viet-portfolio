import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

const FirstPost = () => {
    return (
        <>
            <Head>
                <title>Viet Nguyen | Front End Developer</title>
            </Head>
            <h1>My first Post</h1>
            <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
        </>
    )
}

export default FirstPost