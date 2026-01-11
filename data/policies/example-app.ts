import { Policy } from "../policies";

export const exampleAppPolicy: Policy = {
    title: "Privacy Policy for Example App",
    effectiveDate: "January 1, 2024",
    content: `
      <p>Your privacy is important to us. It is Example App's policy to respect your privacy regarding any information we may collect from you across our website, http://example.com, and other sites we own and operate.</p>
      <h3>1. Information We Collect</h3>
      <p>We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.</p>
      <h3>2. How We Use Information</h3>
      <p>We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification.</p>
      <h3>3. Sharing of Information</h3>
      <p>We don't share any personally identifying information publicly or with third-parties, except when required to by law.</p>
    `,
};
