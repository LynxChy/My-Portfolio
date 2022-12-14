import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet"/>
        </Head>
        <body className='bg-gradient-to-r from-teal-300 to-blue-500'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument