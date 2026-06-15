# PPPacky

PPPacky is a lightweight, open-source hosting platform for application privacy policies. It allows developers to easily, quickly, and dynamically host privacy policies for their apps for free by contributing a simple Markdown file.

## Features
- **Markdown-Based Policies**: Policies are simple Markdown files located in the `data/policies/` directory.
- **Fast Static Pages**: Leverages Next.js static site generation (SSG) for fast-loading, highly optimized, SEO-friendly policy pages.
- **Searchable Landing Page**: Instantly search for any hosted app's privacy policy.
- **Easy Collaboration**: Open source model where developers can host their policy by opening a Pull Request.

## How to Host Your Policy
If you want to host your app's privacy policy on PPPacky, please check out our [Contributing Guide](CONTRIBUTING.md).

## Local Development
To run this project locally:

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build and Export
To compile the static pages:
```bash
npm run build
```
