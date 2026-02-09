import Head from 'next/head'
import { getStaticHTML } from '../lib/htmlLoader'

export default function Testimonials({ bodyContent, title }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div dangerouslySetInnerHTML={{ __html: bodyContent }} />
    </>
  )
}

export async function getStaticProps() {
  const { bodyContent, title } = getStaticHTML('testimonials.html')
  return {
    props: {
      bodyContent,
      title,
    },
  }
}
