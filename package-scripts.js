
/**
 * This file provides script commands since package.json is read-only in Lovable.
 * To use these scripts, run: node package-scripts.js [command]
 * Available commands: dev, build, build:dev, preview
 */

const { spawn } = require('child_process');

const scripts = {
  dev: () => spawn('npx', ['vite'], { stdio: 'inherit', shell: true }),
  build: () => spawn('npx', ['vite', 'build'], { stdio: 'inherit', shell: true }),
  'build:dev': () => spawn('npx', ['vite', 'build', '--mode', 'development'], { stdio: 'inherit', shell: true }),
  preview: () => spawn('npx', ['vite', 'preview'], { stdio: 'inherit', shell: true })
};

function runScript(scriptName) {
  if (!scripts[scriptName]) {
    console.error(`Unknown script "${scriptName}". Available scripts: ${Object.keys(scripts).join(', ')}`);
    process.exit(1);
  }
  
  console.log(`Running ${scriptName} script...`);
  const proc = scripts[scriptName]();
  
  proc.on('error', (err) => {
    console.error(`Script ${scriptName} failed:`, err);
    process.exit(1);
  });
}

if (process.argv.length < 3) {
  console.log('\n📋 IMPORTANT: HOW TO RUN SCRIPTS 📋');
  console.log('----------------------------------');
  console.log('Since package.json is read-only in Lovable, use these alternatives:');
  console.log('\n1. Start development server:');
  console.log('   node package-scripts.js dev');
  console.log('   OR');
  console.log('   node start-project.js');
  console.log('   OR');
  console.log('   npx vite');
  console.log('\n2. Build for production:');
  console.log('   node package-scripts.js build');
  console.log('\n3. Build for development:');
  console.log('   node package-scripts.js build:dev');
  console.log('\n4. Preview production build:');
  console.log('   node package-scripts.js preview');
  console.log('\nTo fully resolve the "Missing script: dev" error, download the project,');
  console.log('add the required scripts to package.json, and re-upload it.');
  process.exit(0);
}

const scriptName = process.argv[2];
runScript(scriptName);
