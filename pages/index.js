import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'

// export default function FirstPost() {
//   return (
//     <Layout>    
//        <Head>
//         <title>Home page</title>
//       </Head>
//       <h1>Home page</h1>

//       <h2>
//         <Link href="/posts/first-post">
//           <a>fisrt post</a>
//         </Link>
//       </h2>
//       </Layout>
//   )
// }

// import Head from 'next/head'
// import Layout, { siteTitle } from '../components/layout'
// import utilStyles from '../styles/utils.module.css'
// import Link from 'next/link'
// export default function Home() {
//   return (
//     <Layout home>
//       <Head>
//         <title>{siteTitle}</title>
//       </Head>
//       <section className={utilStyles.headingMd}>
//         <h2>Blog</h2>
//         <p><Link href="/posts/first-post"><a>When to Use static Generation V.S server-Side Rendring</a></Link></p>
//           (This is a sample website - you’ll be building a site like this on{' '}
//           <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
       
//       </section>
//     </Layout>
//   )
// }


import Link from 'next/link'
import Date from '../components/date'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}