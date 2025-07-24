// import { Button } from "@/components/ui/button"
// import Link from "next/link"

// export default function Component() {
//   return (
//     <div className="min-h-screen bg-white text-gray-800" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
//       {/* ヘッダー */}
//       <header className="bg-white border-b border-gray-100">
//         <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
//           <h1 className="text-2xl font-bold text-black">合同会社A.K.NET</h1>
//           <Link href="#contact" className="text-sm text-gray-600 hover:text-black transition-colors">
//             オンライン面談予約(無料)
//           </Link>
//         </div>
//       </header>


//       {/* --- ▼▼▼ ここから変更 ▼▼▼ --- */}
//       {/* ヒーローセクション */}
//       <section 
//         className="relative h-[60vh] bg-cover bg-center flex items-center justify-center text-center text-white"
//         style={{ backgroundImage: `url('/aknet_logo.jpg')` }} // アップロードされた画像を指定
//       >
//         {/* 背景画像の上に重ねるオーバーレイ */}
//         <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20"></div>
        
//         {/* テキストコンテンツ */}
//         <div className="relative z-10 px-6">
//           <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight tracking-wider">
//             合同会社A.K.NET
//           </h1>
//         </div>
//       </section>
//       {/* --- ▲▲▲ ここまで変更 ▲▲▲ --- */}


//       {/* 事業概要セクション */}
//       <section className="bg-white pt-10">
//         <div className="max-w-4xl mx-auto px-6">
//           <h2 className="text-3xl font-bold text-black mb-16 text-center">＜創業信念＞</h2>
//           <h3 className="text-2xl font-bold text-black mb-6 text-center">社会健全運営の実現</h3>
//         </div>
//       </section>
//       <section className="bg-white py-20 text-center">
//         <div className="max-w-4xl mx-auto px-6">
//           <h2 className="text-3xl font-bold text-black mb-16 text-center">＜事業概要＞</h2>

//           <div className="space-y-16">
//             <div>
//               <h3 className="text-2xl font-bold text-black mb-6">① 経営・新規事業コンサルティング</h3>
//               <p className="text-lg text-gray-700 leading-relaxed">
//                 経験豊富なコンサルタントが多角的な視点から経営と新規事業の推進に伴走します。
//                 現状分析→戦略立案から、実行まで一貫したコンサルティングを提供。
//                 市場調査、競合分析、ビジネスモデル構築、事業計画策定、組織変革やDX推進まで、持続的な企業価値向上に貢献します。
//               </p>
//             </div>

//             <div>
//               <h3 className="text-2xl font-bold text-black mb-6">② 入札活用による売上アップ支援（AKNETWORK）</h3>
//               <p className="text-lg text-gray-700 leading-relaxed">
//                 私たちは、このサービスを通じてAKNET Partner（中小企業の皆様）とAKNET
//                 Supporter（個人事業主、フリーランスの皆様）の売上アップに貢献します。
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* AKNETWORK詳細セクション */}
//       <section className="bg-white pb-20 text-center">
//         <div className="max-w-4xl mx-auto px-6">

//           <div className="mb-16">
//             <h3 className="text-2xl font-bold text-black mb-6">AKNET Partner</h3>
//             <p className="text-lg text-gray-700 leading-relaxed">
//               落札した入札案件を請け負っていただく、中小企業の皆様を指します。 事前登録制（2025年末まで登録無料）です。
//             </p>
//           </div>

//           <div>
//             <h3 className="text-2xl font-bold text-black mb-6">AKNET Supporter</h3>
//             <p className="text-lg text-gray-700 leading-relaxed">
//               入札案件を落札するまでの一連の業務を担当いただきます。 現在は、成果報酬型の業務委託で募集しております。
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* オンライン面談CTAセクション */}
//       <section id="contact" className="bg-gray-50 py-20">
//         <div className="max-w-4xl mx-auto px-6 text-center">
//           <h2 className="text-3xl font-bold text-black mb-8">＜オンライン面談＞</h2>
//           <p className="text-lg text-gray-700 leading-relaxed mb-12">
//             詳しい事業説明をご希望の方は、下記よりオンライン面談（30分）をご予約ください。
//             代表の青木が直接ご対応いたします。
//           </p>
//           <Button className="bg-black text-white hover:bg-gray-800 px-8 py-4 text-lg font-medium" size="lg">
//             「オンライン面談(無料)はこちら」
//           </Button>
//         </div>
//       </section>

//       {/* 会社情報セクション */}
//       <section className="bg-white py-20">
//         <div className="max-w-4xl mx-auto px-6">
//           <h2 className="text-3xl font-bold text-black mb-12 text-center">会社概要</h2>

//           <div className="max-w-2xl mx-auto">
//             <dl className="grid grid-cols-1 gap-y-4 md:grid-cols-[150px_1fr] md:gap-x-8 md:gap-y-6">
              
//               <dt className="font-bold text-black">代表者</dt>
//               <dd className="text-gray-700">青木昌典</dd>

//               <dt className="font-bold text-black">設立</dt>
//               <dd className="text-gray-700">2025年6月6日</dd>

//               <dt className="font-bold text-black">所在地</dt>
//               <dd className="text-gray-700">
//                 〒160-0022 東京都新宿区新宿2丁目12番13号
//                 <br />
//                 新宿アントレサロンビル2階
//               </dd>

//               <dt className="font-bold text-black">事業内容</dt>
//               <dd className="text-gray-700">中小企業向けコンサルティング事業</dd>
              
//             </dl>
//           </div>
//         </div>
//       </section>

//       {/* フッター */}
//       <footer className="bg-black py-8">
//         <div className="max-w-6xl mx-auto px-6 text-center">
//           <p className="text-white text-sm">© 2025 A.K.NET LLC.</p>
//         </div>
//       </footer>
//     </div>
//   )
// }

import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Component() {
  return (
    <div className="min-h-screen bg-white text-gray-800" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
      {/* ヘッダー */}
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-black">合同会社A.K.NET</h1>
          <Link href="#contact" className="text-sm text-gray-600 hover:text-black transition-colors">
            オンライン面談予約(無料)
          </Link>
        </div>
      </header>


      {/* ヒーローセクション */}
      <section
        className="relative h-[60vh] bg-cover bg-center flex items-center justify-center text-center text-white"
        style={{ backgroundImage: `url('/aknet_logo.jpg')` }} // アップロードされた画像を指定
      >
        {/* 背景画像の上に重ねるオーバーレイ */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20"></div>

        {/* テキストコンテンツ */}
        <div className="relative z-10 px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight tracking-wider">
            合同会社A.K.NET
          </h1>
        </div>
      </section>


      {/* 事業概要セクション */}
      <section className="bg-white pt-10">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-black mb-16 text-center">〈創業信念〉</h2>
          <h3 className="text-2xl font-bold text-black mb-6 text-center">社会健全運営の実現</h3>
        </div>
      </section>
      <section className="bg-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-black mb-16 text-center">〈事業概要〉</h2>

          <div className="space-y-16">
            <div>
              <h3 className="text-2xl font-bold text-black mb-6">① 経営・新規事業コンサルティング</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                経験豊富なコンサルタントが多角的な視点から経営と新規事業の推進に伴走します。
                現状分析→戦略立案から、実行まで一貫したコンサルティングを提供。
                市場調査、競合分析、ビジネスモデル構築、事業計画策定、組織変革やDX推進まで、持続的な企業価値向上に貢献します。
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-black mb-6">② 入札活用による売上アップ支援（AKNETWORK）</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                私たちは、このサービスを通じてAKNET Partner（中小企業の皆様）とAKNET
                Supporter（個人事業主、フリーランスの皆様）の売上アップに貢献します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AKNETWORK詳細セクション */}
      <section className="bg-white pb-20 text-center">
        <div className="max-w-4xl mx-auto px-6">

          <div className="mb-16">
            <h3 className="text-2xl font-bold text-black mb-6">AKNET Partner</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              落札した入札案件を請け負っていただく、中小企業の皆様を指します。 事前登録制（2025年末まで登録無料）です。
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-black mb-6">AKNET Supporter</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              入札案件を落札するまでの一連の業務を担当いただきます。 現在は、成果報酬型の業務委託で募集しております。
            </p>
          </div>
        </div>
      </section>

      {/* オンライン面談CTAセクション */}
      <section id="contact" className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-black mb-8">〈オンライン面談〉</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-12">
            詳しい事業説明をご希望の方は、下記よりオンライン面談（30分）をご予約ください。
            代表の青木が直接ご対応いたします。
          </p>
          <Link href="https://forms.gle/yGiMbMUdpRWSza3r5" target="_blank" rel="noopener noreferrer">
            <Button className="bg-black text-white hover:bg-gray-800 px-8 py-4 text-lg font-medium" size="lg">
              オンライン面談(無料)はこちら
            </Button>
          </Link>
        </div>
      </section>

      {/* 会社情報セクション */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-black mb-12 text-center">会社概要</h2>

          <div className="max-w-2xl mx-auto">
            <dl className="grid grid-cols-1 gap-y-4 md:grid-cols-[150px_1fr] md:gap-x-8 md:gap-y-6">

              <dt className="font-bold text-black">代表者</dt>
              <dd className="text-gray-700">青木昌典</dd>

              <dt className="font-bold text-black">設立</dt>
              <dd className="text-gray-700">2025年6月6日</dd>

              <dt className="font-bold text-black">所在地</dt>
              <dd className="text-gray-700">
                〒160-0022 東京都新宿区新宿2丁目12番13号
                <br />
                新宿アントレサロンビル2階
              </dd>

              <dt className="font-bold text-black">事業内容</dt>
              <dd className="text-gray-700">中小企業向けコンサルティング事業</dd>

            </dl>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-black py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-white text-sm">© 2025 A.K.NET LLC.</p>
        </div>
      </footer>
    </div>
  )
}
