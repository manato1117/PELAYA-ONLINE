'use client'
import { useState } from 'react'
type Q = { type: 'QCM'|'VraiFaux'|'RéponseCourte', enonce: string, options?: string[], bonne_reponse: string, explication?: string }
export default function QuizPlayer({ questions, seuil=70 }:{questions:Q[], seuil?:number}){
  const [answers, setAnswers] = useState<string[]>([])
  const [score, setScore] = useState<number|null>(null)
  const submit = () => {
    let s = 0
    questions.forEach((q, i) => {
      if ((answers[i]||'').trim().toLowerCase() === q.bonne_reponse.trim().toLowerCase()) s += 1
    })
    const pct = Math.round((s/questions.length)*100)
    setScore(pct)
  }
  return (
    <div className="card">
      {questions.map((q, i)=> (
        <div key={i} className="mb-4">
          <p className="font-medium">{i+1}. {q.enonce}</p>
          {q.type === 'QCM' && q.options && (
            <div className="mt-2 space-y-1">
              {q.options.map((opt, k)=>(
                <label key={k} className="block">
                  <input type="radio" name={`q${i}`} onChange={()=>{
                    const arr=[...answers]; arr[i]=opt; setAnswers(arr)
                  }}/> <span className="ml-2">{opt}</span>
                </label>
              ))}
            </div>
          )}
          {q.type === 'VraiFaux' && (
            <div className="mt-2 space-x-2">
              <button className="px-3 py-1 border rounded" onClick={()=>{const a=[...answers]; a[i]='Vrai'; setAnswers(a)}}>Vrai</button>
              <button className="px-3 py-1 border rounded" onClick={()=>{const a=[...answers]; a[i]='Faux'; setAnswers(a)}}>Faux</button>
            </div>
          )}
          {q.type === 'RéponseCourte' && (
            <input className="mt-2 border rounded px-2 py-1 w-full" placeholder="Ta réponse"
              onChange={(e)=>{const a=[...answers]; a[i]=e.target.value; setAnswers(a)}}/>
          )}
        </div>
      ))}
      <button className="bg-pelayaNavy text-white px-4 py-2 rounded-2xl" onClick={submit}>Valider</button>
      {score!==null && (
        <p className="mt-3 font-semibold">Score : {score}% — {score>=seuil ? "Réussi ✅" : "À retravailler ❌"}</p>
      )}
    </div>
  )
}
