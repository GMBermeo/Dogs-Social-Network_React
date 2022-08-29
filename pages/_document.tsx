import { Footer, Header } from "@components/common";
import { ModalStorage } from "@contexts/ModalContext";
import { UserStorage } from "@contexts/UserContext";
import Document, { Html, Head, NextScript, Main } from "next/document";
import Script from "next/script";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "http://schema.org",
                "@type": "Person",
                name: "Guilherme Bermêo",
                url: "http://www.bermeo.dev",
                sameAs: [
                  "https://github.com/GMBermeo",
                  "https://www.linkedin.com/in/gmbermeo/",
                  "https://guilhermebermeo.com",
                  "https://gmbermeo.com",
                  "https://bermeo.com.br",
                  "https://open.spotify.com/artist/4cdJMNyV0fp9j3RjKosbFd",
                  "https://www.youtube.com/channel/UCSsc5f356wsiB8OlNcya3zA",
                  "https://www.instagram.com/guilherme.bermeo",
                  "https://www.deezer.com/artist/101164342?utm_source=deezer&utm_content=artist-101164342&utm_term=3783706082_1596109592&utm_medium=web",
                  "https://music.apple.com/br/artist/guilherme-bermeo/1522907458?uo=4&app=music",
                  "https://play.google.com/store/music/artist/Guilherme_Bermeo?id=Asdnaa4jt7s5g7sc24obfigamr4",
                  "https://guilhermebermeo.bandcamp.com/",
                  "https://www.behance.net/guilhermebermeo",
                  "https://music.163.com/#/artist?id=36028747",
                  "http://www.kuwo.cn/singer_detail/5532015",
                  "https://y.qq.com/n/yqq/singer/002TUXMq1927t7.html",
                ],
                email: "mailto:guilherme@bermeo.dev",
                image: "/avatar1.jpg",
                jobTitle: "Front-end Developer",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Brasília",
                  addressRegion: "DF",
                },
              }),
            }}
          />
          <meta name="author" content="Guilherme Bermêo" />
          <meta name="language" content="Portuguese" />
          <meta
            name="keywords"
            content="HTML, CSS, JavaScript, React, Next.js, Typescript, Front-end, Brasília, Roraima, Guilherme Bermêo, Bermeo, Vue.js, Tailwind CSS, Bootstrap"
          />
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          {/* <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          /> */}
          {/* <Script id="google-analytics" strategy="afterInteractive">
            {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
        `}
          </Script> */}
        </Head>
        <body>
          <UserStorage>
            <ModalStorage>
              <Header />
              <Main />
              <NextScript />
              <script type="application/ld+json"></script>
              <Footer />
            </ModalStorage>
          </UserStorage>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
