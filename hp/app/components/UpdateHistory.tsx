import Link from "next/link"
import fs from "fs"
import path from "path"
import matter from "gray-matter"

type Update = {
  date: string
  title: string
  slug: string
}

export default function UpdateHistory() {
  const updatesDirectory = path.join(process.cwd(), "app/pages")
  const files = fs.readdirSync(updatesDirectory)
  const updates: Update[] = files
    .filter((filename) => filename.endsWith(".md"))
    .map((filename) => {
      const filePath = path.join(updatesDirectory, filename)
      const fileContents = fs.readFileSync(filePath, "utf8")
      const { data } = matter(fileContents)
      return {
        date: data.date,
        title: data.title,
        slug: filename.replace(".md", ""),
      }
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return (
    <div className="relative">
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-600"></div>
      {updates.map((update, index) => (
        <div key={index} className="mb-8 flex items-center">
          <div className="absolute left-4 w-3 h-3 bg-blue-500 rounded-full -translate-x-1.5"></div>
          <div className="ml-10">
            <time className="mb-1 text-sm font-normal leading-none text-gray-400">{update.date}</time>
            <h3 className="text-lg font-semibold text-white">
              <Link href={`/pages/${update.slug}`} className="hover:text-blue-400 transition-colors">
                {update.title}
              </Link>
            </h3>
          </div>
        </div>
      ))}
    </div>
  )
}

