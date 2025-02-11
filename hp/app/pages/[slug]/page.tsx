import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { remark } from "remark"
import html from "remark-html"
import Link from "next/link"
import '../../globals.css'

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join(process.cwd(), "app/pages"))
  return files
    .filter((filename) => filename.endsWith(".md"))
    .map((filename) => ({
      slug: filename.replace(".md", ""),
    }))
}

export default async function UpdatePage({ params }: { params: { slug: string } }) {
  const { slug } = params
  const filePath = path.join(process.cwd(), "app/pages", `${slug}.md`)

  // ファイルが存在しない場合のエラー処理
  if (!fs.existsSync(filePath)) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
        <main className="max-w-3xl w-full">
          <Link href="/" className="text-blue-400 hover:underline mb-4 inline-block">
            &larr; ホームに戻る
          </Link>
          <h1 className="text-3xl font-bold mb-4">ページが見つかりません</h1>
          <p>申し訳ありませんが、指定された更新情報は存在しません。</p>
        </main>
      </div>
    )
  }

  const markdownWithMeta = fs.readFileSync(filePath, "utf-8")
  const { data: frontmatter, content } = matter(markdownWithMeta)
  const processedContent = await remark().use(html).process(content)
  const contentHtml = processedContent.toString()

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
      <main className="max-w-3xl w-full">
        <Link href="/" className="text-blue-400 hover:underline mb-4 inline-block">
          &larr; ホームに戻る
        </Link>
        <h1 className="text-3xl font-bold mb-4">{frontmatter.title}</h1>
        <p className="text-gray-400 mb-8">{frontmatter.date}</p>
        <div className="prose prose-invert" dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </main>
    </div>
  )
}
