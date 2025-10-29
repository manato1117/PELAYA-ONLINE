import BateauProgress from '@/components/BateauProgress'
import CoursCard from '@/components/CoursCard'
import fs from 'fs'
import path from 'path'
type Cours = { titre:string, slug:string, resume:string }
export default async function Home(){
  const coursPath = path.join(process.cwd(), 'content', 'cours')
  const files = fs.readdirSync(coursPath).filter(f=>f.endsWith('.md'))
  const cours: Cours[] = files.map(f=>{
    const raw = fs.readFileSync(path.join(coursPath,f), 'utf-8')
    const titre = (raw.match(/^#\s+(.+)$/m)?.[1]) || f
    const resume = (raw.match(/^>\s+(.+)$/m)?.[1]) || 'Cours Pelaya'
    const slug = f.replace('.md','')
    return { titre, slug, resume }
  })
  return (
    <div className="space-y-8">
      <section className="section p-6 rounded-2xl bg-dots">
        <h2 className="text-xl font-semibold mb-2">Progressez du matelot à l’amiral</h2>
        <BateauProgress progress={0.4}/>
      </section>
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cours.map(c=>(<CoursCard key={c.slug} {...c}/>))}
      </section>
    </div>
  )
}
