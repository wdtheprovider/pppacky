import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const policiesDirectory = path.join(process.cwd(), "data/policies");

export interface Policy {
    slug: string;
    title: string;
    effectiveDate: string;
    content: string;
}

export async function getPolicy(slug: string): Promise<Policy | null> {
    const fullPath = path.join(policiesDirectory, `${slug}.md`);

    if (!fs.existsSync(fullPath)) {
        return null;
    }

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);

    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);
    const contentHtml = processedContent.toString();

    return {
        slug,
        title: matterResult.data.title,
        effectiveDate: matterResult.data.effectiveDate,
        content: contentHtml,
    };
}

export function getAllPolicies(): { slug: string; title: string; effectiveDate: string }[] {
    if (!fs.existsSync(policiesDirectory)) {
        return [];
    }

    const fileNames = fs.readdirSync(policiesDirectory);
    const allPoliciesData = fileNames
        .filter((fileName) => fileName.endsWith(".md"))
        .map((fileName) => {
            const slug = fileName.replace(/\.md$/, "");
            const fullPath = path.join(policiesDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, "utf8");
            const matterResult = matter(fileContents);

            return {
                slug,
                title: matterResult.data.title,
                effectiveDate: matterResult.data.effectiveDate,
            };
        });

    return allPoliciesData;
}
