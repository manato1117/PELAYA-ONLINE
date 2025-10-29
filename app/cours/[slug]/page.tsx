import fs from 'fs'
import path from 'path'
import VideoPlayer from '@/components/VideoPlayer'
import quizData from '@/content/quiz/index.json'
export async function generateStaticParams(){
  const dir = path.join(process.cwd(),'content','cours')
  const files = fs.readdirSync(dir).filter(f=>f.endsWith('.md'))
  return files.map(f=>({ slug: f.replace('.md','') }))
}
export default function CoursPage({ params }:{params:{slug:string}}){
  const file = path.join(process.cwd(),'content','cours',`${params.slug}.md`)
  const raw = fs.readFileSync(file,'utf-8')
  // naive md render
  const html = raw.replace(/^#\s+(.+)$/m,'<h1>$1</h1>').replace(/^>\s+(.+)$/m,'<p><em>$1</em></p>').replace(/\n\n/g,'<br/><br/>' )
  const videos = JSON.parse(fs.readFileSync(path.join(process.cwd(),'content','videos.json'),'utf-8'))
    .filter((v:any)=> v.cours === params.slug)
  const qz = (quizData as any[]).find(q=> q.cible_slug === params.slug)
  return (
    <div className="space-y-6">
      <article className="prose max-w-none card">
        <div dangerouslySetInnerHTML={{__html: html}}/>
      </article>
      <div className="grid md:grid-cols-2 gap-6">
        {videos.map((v:any)=>(<VideoPlayer key={v.id} url={v.url} title={v.titre}/>))}
      </div>
      {qz && (<a href={`/quiz/${qz.id}`} className="inline-block bg-pelayaNavy text-white px-4 py-2 rounded-2xl">Passer le quiz</a>)}
    </div>
  )
}
