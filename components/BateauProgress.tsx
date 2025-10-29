'use client'
import { motion } from 'framer-motion'
type Props = { progress: number } // 0..1
export default function BateauProgress({ progress }: Props){
  return (
    <div className="w-full h-24 relative bg-dots rounded-2xl">
      <div className="absolute top-1/2 left-6 -translate-y-1/2 text-xs">Matelot</div>
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 text-xs">Bosco</div>
      <div className="absolute top-1/2 left-2/4 -translate-y-1/2 text-xs">Lieutenant</div>
      <div className="absolute top-1/2 left-3/4 -translate-y-1/2 text-xs">Capitaine</div>
      <div className="absolute top-1/2 right-6 -translate-y-1/2 text-xs">Amiral</div>
      <motion.div
        className="absolute bottom-2 left-0"
        animate={{ x: Math.max(0, Math.min(1, progress)) * 600 }}
        transition={{ type: 'spring', stiffness: 60, damping: 12 }}
      >
        <span className="px-3 py-2 bg-white border border-dashed border-pelayaNavy rounded-2xl shadow">⛵</span>
      </motion.div>
    </div>
  )
}
