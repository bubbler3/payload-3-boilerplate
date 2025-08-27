// build-with-env.js
import { execSync } from 'child_process'
import fs from 'fs'

// Debug: afficher les variables disponibles
console.log('Variables disponibles:', Object.keys(process.env))


// Vérification finale
console.log('PAYLOAD_SECRET présent: ' + process.env.PAYLOAD_SECRET, !!process.env.PAYLOAD_SECRET)
console.log('DATABASE_URI présent: ' + process.env.DATABASE_URI, !!process.env.DATABASE_URI)
console.log('RAILWAY_NEXT_PUBLIC_SERVER_URL présent: ' + process.env.RAILWAY_NEXT_PUBLIC_SERVER_URL, !!process.env.RAILWAY_NEXT_PUBLIC_SERVER_URL)
// Lancer le build
execSync('next build', { stdio: 'inherit' })
