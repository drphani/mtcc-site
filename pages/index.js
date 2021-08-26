import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Mother Theresa Chest Clinic</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Mother Theresa Chest Clinic" />
        <a href="mailto:drbathiphanikumar@mothertheresachestclinic.org.in">drbathiphanikumar@mothertheresachestclinic.org.in</a>
        <a href="mailto:bathi70@gmail.com">bathi70@gmail.com</a>
      </main>

      <Footer />
    </div>
  )
}
