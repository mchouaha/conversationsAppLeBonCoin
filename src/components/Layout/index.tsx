import React, { Fragment, ReactNode } from 'react'
import Head from 'next/head'
import Image from 'next/image'

import Logo from '../../assets/lbc-logo.webp'
import styles from '../../styles/Home.module.css'

interface Props {
    children?: ReactNode
    title?: string
  }

const Layout = ( {children, title}: Props) => { 
  
  const year = new Date().getFullYear()

  return (
    <Fragment>
        
        <Head>
            <title>{title}</title>
            <meta name="description" content="Frontend exercise for developpers who want to join us on leboncoin.fr"></meta>
        </Head>

        <div className={styles['logo']}>
            <Image src={Logo} alt="Leboncoin Frontend Team" width={280} height={75} layout="fixed" />
        </div>

        <div className={styles['main']}>
          {children}
        </div>

        <footer className={styles.footer}>
          &copy; leboncoin - {year}
        </footer>

    </Fragment>
  )
}

export default Layout