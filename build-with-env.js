// build-with-env.js
import { execSync } from 'child_process'
import fs from 'fs'

// Debug: afficher les variables disponibles
console.log('Variables disponibles:', Object.keys(process.env))

// Transférer les variables Railway
if (process.env.RAILWAY_PAYLOAD_SECRET) {
  process.env.PAYLOAD_SECRET = process.env.RAILWAY_PAYLOAD_SECRET
  console.log('✓ PAYLOAD_SECRET injecté')
}

if (process.env.RAILWAY_DATABASE_URI) {
  process.env.DATABASE_URI = process.env.RAILWAY_DATABASE_URI
  console.log('✓ DATABASE_URI injecté')
}

if (process.env.RAILWAY_NEXT_PUBLIC_SERVER_URL) {
  process.env.NEXT_PUBLIC_SERVER_URL = process.env.RAILWAY_NEXT_PUBLIC_SERVER_URL
  console.log('✓ NEXT_PUBLIC_SERVER_URL injecté')
}

// Vérification finale
console.log('PAYLOAD_SECRET présent:' + process.env.PAYLOAD_SECRET, !!process.env.PAYLOAD_SECRET)
console.log('DATABASE_URI présent:' + process.env.DATABASE_URI, !!process.env.DATABASE_URI)

// Lancer le build
execSync('next build', { stdio: 'inherit' })
