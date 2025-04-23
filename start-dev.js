
#!/usr/bin/env node

const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

console.log('Starting development server...');

// Make the script executable
try {
  fs.chmodSync(__filename, '755');
} catch (err) {
  console.log('Note: Could not make script executable. You might need to run with node explicitly.');
}

// Run vite directly without relying on npm scripts
const viteProcess = spawn('npx', ['vite'], {
  stdio: 'inherit',
  shell: true
});

viteProcess.on('error', (err) => {
  console.error('Failed to start development server:', err);
  process.exit(1);
});

console.log('To stop the server, press Ctrl+C');
