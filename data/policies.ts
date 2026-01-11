import { exampleAppPolicy } from "./policies/example-app";
import { anotherAppPolicy } from "./policies/another-app";
import { uniapsAppPolicy } from "./policies/uniaps-app";

export interface Policy {
  title: string;
  effectiveDate: string;
  content: string;
}

export const policies: Record<string, Policy> = {
  "example-app": exampleAppPolicy,
  "another-app": anotherAppPolicy,
  "uniaps-app": uniapsAppPolicy,
};

