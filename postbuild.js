const fs = require('fs');
const path = require('path');

function copyDir(src, dest) {
  if (!fs.existsSync(src)) return;
  
  fs.mkdirSync(dest, { recursive: true });
  let entries = fs.readdirSync(src, { withFileTypes: true });

  for (let entry of entries) {
    let srcPath = path.join(src, entry.name);
    let destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

const standaloneDir = path.join(__dirname, '.next', 'standalone');
const staticSrc = path.join(__dirname, '.next', 'static');
const staticDest = path.join(standaloneDir, '.next', 'static');
const publicSrc = path.join(__dirname, 'public');
const publicDest = path.join(standaloneDir, 'public');

console.log('Starting post-build copy...');

try {
    // Copy .next/static to .next/standalone/.next/static
    if (fs.existsSync(staticSrc)) {
        console.log(`Copying ${staticSrc} to ${staticDest}`);
        copyDir(staticSrc, staticDest);
    } else {
        console.warn(`Warning: ${staticSrc} does not exist.`);
    }

    // Copy public to .next/standalone/public
    if (fs.existsSync(publicSrc)) {
        console.log(`Copying ${publicSrc} to ${publicDest}`);
        copyDir(publicSrc, publicDest);
    } else {
        console.warn(`Warning: ${publicSrc} does not exist.`);
    }
    
    console.log('Post-build copy complete.');
} catch (error) {
    console.error('Error during post-build copy:', error);
    process.exit(1);
}
