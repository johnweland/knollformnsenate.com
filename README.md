This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Newsletter configuration

The newsletter signup flow is wired to the Mailchimp Marketing API through a server action.

Create a local `.env.local` with:

```bash
MAILCHIMP_API_KEY=your-mailchimp-api-key
MAILCHIMP_AUDIENCE_ID=your-mailchimp-audience-id
MAILCHIMP_API_SERVER=usX
MAILCHIMP_SUBSCRIBE_STATUS=pending
MAILCHIMP_NEWSLETTER_TAG=Newsletter
```

Notes:

- `MAILCHIMP_API_SERVER` is the Mailchimp data center prefix such as `us6`.
- `MAILCHIMP_SUBSCRIBE_STATUS` can be `pending` for double opt-in or `subscribed` for immediate subscription.
- In production on Amplify, store these values as Amplify secrets rather than committing env files.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
