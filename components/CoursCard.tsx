import Link from 'next/link'
export default function CoursCard({ titre, slug, resume }:{titre:string, slug:string, resume:string}){
  return (
    <div className="card space-y-2">
      <h3 className="text-lg font-semibold">{titre}</h3>
      <p className="text-sm opacity-80">{resume}</p>
      <Link href={`/cours/${slug}`} className="inline-block text-white bg-pelayaNavy px-4 py-2 rounded-2xl">Voir le cours</Link>
    </div>
  )
}
