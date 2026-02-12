import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const pagesDirectory = path.join(process.cwd(), "data/pages");

export interface Page {
  slug: string;
  title: string;
  content: string;
}

export function getAllPages(): Page[] {
  const fileNames = fs.readdirSync(pagesDirectory);
  const pages = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(pagesDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title || slug.replace(/_/g, " "),
        content: "",
      };
    });

  return pages;
}

export async function getPage(slug: string): Promise<Page | null> {
  try {
    const fullPath = path.join(pagesDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    // Convert markdown to HTML
    const processedContent = await remark().use(html).process(content);
    const contentHtml = processedContent.toString();

    return {
      slug,
      title: data.title || slug.replace(/_/g, " "),
      content: contentHtml,
    };
  } catch (error) {
    return null;
  }
}
