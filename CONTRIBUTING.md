# Contributing to PPPacky

We welcome developers to host their application privacy policies on PPPacky! Adding your own policy is quick, easy, and completely free.

## How to Add Your Privacy Policy

### 1. Fork and Clone the Repository
Fork the repository on GitHub and clone it to your local machine.

### 2. Add a Markdown File
Create a new Markdown (`.md`) file inside the `data/policies/` directory. 
We suggest naming the file after your application: `<app-name>-app.md`. For example: `my-awesome-app.md` or `helpcom-app.md`.

### 3. Add Front Matter Metadata
At the very top of your markdown file, add the YAML front matter with `title` and `effectiveDate`:

```yaml
---
title: "Privacy Policy for My Awesome App"
effectiveDate: "June 15, 2026"
---
```

### 4. Write/Paste the Policy Content
Paste the rest of your privacy policy in standard Markdown below the front matter. For example:

```markdown
This privacy policy includes all the details about the data collected in **My Awesome App** and how it's used.

### Information Collection and Use
We do not collect any personal information...
```

### 5. Verify Locally (Optional)
Run the project locally to preview your page:
```bash
npm install
npm run dev
```
Open `http://localhost:3000` to make sure your app's policy is listed and loads correctly.

### 6. Submit a Pull Request
Commit your new markdown file, push it to your fork, and submit a Pull Request to the main repository. Once merged, it will automatically build and host your policy!
