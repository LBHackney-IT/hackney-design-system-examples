import Document, { Html, Head, Main, NextScript } from "next/document";

class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en" class="govuk-template lbh-template">
        <Head />
        <body className="govuk-template__body">
          {/* Skip link goes here */}
          {/* Cookie banner goes here */}
          {/* Header goes here */}
          {/* Phase banner goes here */}
          {/* Announcements go here */}
          {/* Breadcrumbs go here */}
          <main className="lbh-main-wrapper" id="main-content" role="main">
            <div className="lbh-container">
              {/* Main content components go here */}
              <Main />
            </div>
          </main>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
