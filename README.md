
# Pond Web - Digital Solutions

## ⚠️ IMPORTANT: How to Start the Development Server

Due to Lovable environment limitations where package.json is read-only, you must use one of these alternative methods to run the project:

### Option 1: Run directly with Node (RECOMMENDED)
```bash
node start-project.js
```

### Option 2: Use npx directly
```bash
npx vite
```

### Option 3: Use the package-scripts.js helper
```bash
# Start development server
node package-scripts.js dev

# Build for production
node package-scripts.js build

# Build for development mode
node package-scripts.js build:dev

# Preview production build
node package-scripts.js preview

# See all available commands
node package-scripts.js
```

## 🔴 REQUIRED: Fix Missing Scripts Error

To fully resolve the "Missing script: dev" error, you must:

1. Download this project to your local machine
2. Add the following scripts to package.json:
   ```json
   "scripts": {
     "dev": "vite",
     "build": "vite build",
     "build:dev": "vite build --mode development", 
     "preview": "vite preview"
   }
   ```
3. Re-upload the project

**Note**: The `build:dev` script is particularly important for Lovable to function properly.
