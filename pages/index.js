import Head from 'next/head'
import Marquee from 'react-fast-marquee';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Tate the dog</title>
        <link rel="icon" href="/favicon.ico"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
      </Head>

      <main>
        <div className="top">
          <h3>Tate the dog</h3>
          <img src="/tate-banner.jpg" alt="see tate smile"/>
          <h1>A very very good boy</h1>
        </div>
        <div className="middle">
          <div className="left">
          <h3>Hi, I'm Tate</h3>
            <p>LET'S GO FOR A WALK. ALSO, CAN I HAVE SOME OF YOUR FOOD? NO? OKAY.  I'M READY TO PLAY WITH MY FAVORITE TOY AND GET SOME BELLY RUBS.</p>
            <p>LOVE YOU UNCONDITIONALLY,</p>
            <p>TATE R. TOT</p>
          </div>
          <div className="right">
            <img src="/tate-forest.jpg" alt="see tate walk" />
          </div>
        </div>
        <Marquee className="scroller" autoFill={true} pauseOnHover={true} speed={90}>
          <p>Squeaky Toys</p>
          <p>Lots of Walks</p>
          <p>Belly Rubs</p>
          <p>Treats</p>
          <p>Ear Scratches</p>
          <p>Butt Sniffs</p>
        </Marquee>
      </main>

      <footer>
        <p>Tate is a puppy dog from Beaverton, OR</p>
        <p>
          <a href="mailto:colehafner@gmail.com?subject=tatedogg.com inquiry">EMAIL</a>
        </p>
      </footer>
    </div>
  )
}
