
#!/usr/bin/env node

/**
 * This script directly starts the Vite development server
 * without relying on npm scripts since package.json is read-only in Lovable.
 */

const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

// Make the script executable
try {
  fs.chmodSync(__filename, '755');
} catch (err) {
  console.log('Note: Could not make script executable. You might need to run with node explicitly.');
}

// Display clear instructions
console.log('\n📋 IMPORTANT INSTRUCTIONS 📋');
console.log('---------------------------');
console.log('Since package.json is read-only in this environment, we\'re using this direct starter script.');
console.log('To fully resolve the "Missing script: dev" error, you\'ll need to download the project and');
console.log('add the required scripts to package.json, then re-upload it.\n');

console.log('🚀 Starting development server...');

// Run vite directly
const viteProcess = spawn('npx', ['vite'], {
  stdio: 'inherit',
  shell: true
});

viteProcess.on('error', (err) => {
  console.error('\n❌ Failed to start development server:', err);
  console.error('\nPlease try:');
  console.error('  1. Running "npx vite" directly');
  console.error('  2. Using "node package-scripts.js dev"');
  process.exit(1);
});

viteProcess.on('close', (code) => {
  if (code !== 0) {
    console.log(`\n❌ Development server exited with code ${code}`);
    console.log('\nPlease try:');
    console.log('  1. Running "npx vite" directly');
    console.log('  2. Using "node package-scripts.js dev"');
  }
});

console.log('✨ To stop the server, press Ctrl+C');
