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
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">目的</h2>
              <p className="text-sm sm:text-base">
                  本開発ガイドラインは、クラウドを前提とした医療情報システムの開発指針を提供します。
              </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">期待される効果</h2>
              <p className="text-sm sm:text-base">
                  本ガイドラインに準拠した開発により、以下のメリットを社会全体で享受できます：
              </p>
              <ul className="list-disc pl-6 space-y-2">
                  <li className="text-sm sm:text-base">医療機関におけるシステム運用負担の削減</li>
                  <li className="text-sm sm:text-base">サイバーセキュリティ対策の向上</li>
                  <li className="text-sm sm:text-base">医療情報のシームレスな活用</li>
                  <li className="text-sm sm:text-base">医療情報を活用した臨床試験・治験環境の活性化</li>
              </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">ビジョン</h2>
            <p className="text-sm sm:text-base">
                オープンソースとして管理・運用され、以下を目指します：
            </p>
            <ul className="list-disc pl-6 space-y-2">
                <li className="text-sm sm:text-base">日本国内の医療情報システム開発企業の開発力向上</li>
                <li className="text-sm sm:text-base">医療システム産業のオールジャパンでの活性化</li>
            </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">対象システム</h2>
          <p className="text-sm sm:text-base">
            診療所・病院及び、薬局や歯科などの医療機関において利用される全ての医療情報システム
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">対象読者</h2>
          <p className="text-sm sm:text-base">
          既存の医療情報システムの開発企業及び、これから新規参入を検討しているベンチャー企業
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">対応関連法規</h2>
          <p className="text-sm sm:text-base">
          本ガイドラインに沿った開発を行うことで、以下の関連法きに対応できることを目指します。
          </p>
          <ul className="list-disc list-inside space-y-2 text-sm sm:text-base">
            <li>個人情報保護法への対応</li>
            <li>3省2ガイドラインへの対応</li>
            <li>ISO/IEC 27001(ISMS)への対応</li>
            <li>セキュリティ・バイ・デザインガイドラインへの対応</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">対象クラウドインフラ等(IaaS, PaaS)</h2>
          <p className="text-sm sm:text-base">
            以下のクラウドインフラを対象とします。
          </p>
          <ul className="list-disc list-inside space-y-2 text-sm sm:text-base">
            <li>AWS</li>
            <li>GCP</li>
            <li>Azure</li>
            <li>Cloudflare</li>
            <li>Vercel</li>
            <li>Supabase</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">対象言語及びフレームワーク</h2>
          <p className="text-sm sm:text-base">
            以下の言語及びフレームワークを対象とします。
          </p>
          <ul className="list-disc list-inside space-y-2 text-sm sm:text-base">
            <li>フロントエンド</li>
              <li>React.js</li>
              <li>Next.js</li>
            <li>バックエンド</li>
              <li>TypeScript(Node.js)</li>
              <li>Go</li>
              <li>Rust</li>
              <li>Ruby on Rails</li>
              <li>PHP / Laravel</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">更新履歴</h2>
          <UpdateHistory />
        </section>

      </main>
    </div>
  )
}

