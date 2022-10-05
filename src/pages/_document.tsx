import { Head, Html, Main, NextScript } from 'next/document'

function Document() {
  const googleFonts = ['Merriweather', 'Montserrat', 'Noto Sans TC']

  const googleFontsHref = `https://fonts.googleapis.com/css2?${googleFonts
    .map((name) => `family=${name.split(' ').join('+')}:wght@400;700`)
    .join('&')}&display=swap`

  return (
    <Html>
      <Head>
        <link href={googleFontsHref} rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
