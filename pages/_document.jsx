import Document, { Html, Head, Main, NextScript } from "next/document";

// This custom <Document /> is only to set lang="en" on the <html> tag!

export default class CustomDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
