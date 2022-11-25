import Head from 'next/head'
import type {NextPage} from 'next'
import AdventCalender from "../components/AdventCalender/AdventCalender";

const Home: NextPage = () => {
  return (
      <div>
        <Head>
          <title>Advent calendar</title>
          <meta name="description" content="Advent calendar app"/>
          <link rel="icon" href="/favicon.ico"/>
        </Head>

        <main>
            <AdventCalender/>
        </main>
      </div>
  )
}
export default Home