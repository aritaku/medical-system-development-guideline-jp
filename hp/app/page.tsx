import Link from "next/link"
import UpdateHistory from "./components/UpdateHistory"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
      <main className="max-w-4xl w-full">
        <div className="mb-8">
          <div className="mb-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-center md:text-left">
              医療情報システム<br />開発ガイドライン
            </h1>
            <p className="text-sm sm:text-base mb-4 text-center md:text-left">
              クラウドを前提とした次世代の医療情報システムの開発指針
            </p>
          </div>
        </div>

        <section className="mb-8">
          <div className="flex justify-center md:justify-start">
            <Link
              href="https://github.com/aritaku/medical-system-development-guideline-jp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-black font-bold py-2 px-4 rounded hover:bg-gray-200 transition-colors text-sm sm:text-base"
            >
              GitHubリポジトリを見る
            </Link>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">概要・目的</h2>
          <ul className="list-disc list-inside space-y-2 text-sm sm:text-base">
            <li>クラウドを前提とした医療情報システムの開発ガイドラインを整備</li>
            <li>医療機関におけるシステム運用負担の削減</li>
            <li>サイバーセキュリティ対策の向上</li>
            <li>医療情報のシームレスな活用</li>
            <li>医療情報を活用した臨床試験・治験環境の活性化</li>
            <li>日本の医療システム産業をオールジャパンで活性化</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">対象システム</h2>
          <p className="text-sm sm:text-base">
            診療所・病院及び、薬局や歯科などの医療機関において利用される全ての医療情報システム
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">更新履歴</h2>
          <UpdateHistory />
        </section>

      </main>
    </div>
  )
}

