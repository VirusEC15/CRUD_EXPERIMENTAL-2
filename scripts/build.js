const fs = require('node:fs');
const path = require('node:path');

const projectRoot = path.resolve(__dirname, '..');
const outputDirectory = path.join(projectRoot, 'dist');
const filesToBuild = ['CRUD.html', 'style.css', 'script.js'];

fs.rmSync(outputDirectory, { recursive: true, force: true });
fs.mkdirSync(outputDirectory, { recursive: true });

for (const file of filesToBuild) {
    const source = path.join(projectRoot, file);
    if (!fs.existsSync(source)) {
        throw new Error(`Required build file not found: ${file}`);
    }

    fs.copyFileSync(source, path.join(outputDirectory, file));
}

console.log(`Build completed: ${filesToBuild.length} files copied to dist/.`);