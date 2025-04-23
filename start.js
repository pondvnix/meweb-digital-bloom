
#!/usr/bin/env node

/**
 * Simple Vite starter script for Lovable environment
 * This script bypasses the need for npm scripts which require package.json editing
 */

const { spawn } = require('child_process');
const fs = require('fs');

console.log('\n🚀 Starting Pond Web development server...\n');

// Make the script executable
try {
  fs.chmodSync(__filename, '755');
} catch (err) {
  // Continue even if we can't make it executable
  console.log('Note: Could not make script executable. You might need to run with node explicitly.');
}

// Run vite directly
const viteProcess = spawn('npx', ['vite'], {
  stdio: 'inherit',
  shell: true
});

viteProcess.on('error', (err) => {
  console.error('\n❌ Failed to start development server:', err);
  console.error('Please try running "npx vite" directly instead.');
  process.exit(1);
});

viteProcess.on('close', (code) => {
  if (code !== 0) {
    console.log(`\n❌ Development server exited with code ${code}`);
    process.exit(code);
  }
});

console.log('✨ To stop the server, press Ctrl+C');
