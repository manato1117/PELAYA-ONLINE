import fs from 'fs'
import path from 'path'
import QuizPlayer from '@/components/QuizPlayer'
export async function generateStaticParams(){
  const p = path.join(process.cwd(),'content','quiz','index.json')
  const list = JSON.parse(fs.readFileSync(p,'utf-8')) as any[]
  return list.map(q=>({ id: q.id }))
}
export default function QuizPage({ params }:{params:{id:string}}){
  const p = path.join(process.cwd(),'content','quiz','index.json')
  const list = JSON.parse(fs.readFileSync(p,'utf-8')) as any[]
  const quiz = list.find(q=> q.id === params.id)
  const questions = quiz?.questions || []
  const seuil = quiz?.score_requis || 70
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">{quiz?.titre || 'Quiz'}</h2>
      <QuizPlayer questions={questions} seuil={seuil}/>
    </div>
  )
}
