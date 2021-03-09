## Next.js example

An example of how to use the Hackney design system with [Next.js](https://nextjs.org/docs/api-reference/create-next-app).

It uses [global stylesheet](https://nextjs.org/docs/basic-features/built-in-css-support#adding-a-global-stylesheet) to import components, but if you need to write your own additional styles you are best using Next's built-in [CSS modules support](https://nextjs.org/docs/basic-features/built-in-css-support#adding-component-level-css).

You will need to use a custom `_app.js` and `_document.js` file to apply the right classes to the <html/> and <body/> elements.

## Installation

You need Node.js and npm installed.

```
npm install
npm run dev
```

It will be on `localhost:3000`
