import Head from 'next/head'
import type {NextPage} from 'next'
import ChristmasCalender from "../components/ChristmasCalender/ChristmasCalender";

const Home: NextPage = () => {
  return (
      <div>
        <Head>
          <title>Christmas calendar</title>
          <meta name="description" content="Christmas calendar app"/>
          <link rel="icon" href="/favicon.ico"/>
        </Head>

        <main>
            <ChristmasCalender/>
        </main>
      </div>
  )
}
export default Home