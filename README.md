# Pelaya École de Croisière — E‑learning & Réservation

Plateforme e‑learning Next.js + Tailwind + Supabase (auth + contenu), avec progression gamifiée (bateau/îles), cours, quiz, vidéos, et style Pelaya (pointillés bleu marine sur fond beige clair).

## Démarrage rapide

```bash
pnpm i   # ou npm i / yarn
cp .env.example .env.local
# Renseignez les clés Supabase + Stripe
pnpm dev # http://localhost:3000
```

## Tech
- Next.js (app router) + TypeScript
- Tailwind CSS + shadcn/ui (install à compléter)
- Supabase (auth, storage)
- Stripe (paiement abonnement premium)

## Contenu
- 5 niveaux (Matelot → Amiral)
- 5 cours (markdown) dans `content/cours`
- 5 quiz (JSON) dans `content/quiz`
- 10 vidéos (JSON) dans `content/videos.json`
- Pattern SVG `public/pelaya_pattern.svg`

## À faire (rapide)
1. Créez un projet Supabase et remplissez `.env.local` (voir `.env.example`).
2. (Optionnel) Créez vos tables à partir du contenu ou utilisez les fichiers comme source statique.
3. Lancez `pnpm dev` et testez.
