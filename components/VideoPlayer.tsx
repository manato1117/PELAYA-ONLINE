export default function VideoPlayer({ url, title }:{url:string, title:string}){
  return (
    <div className="card">
      <p className="font-medium mb-2">{title}</p>
      <div className="aspect-video">
        <iframe src={url} title={title} className="w-full h-full rounded-2xl border border-dashed border-pelayaNavy" allowFullScreen/>
      </div>
    </div>
  )
}
