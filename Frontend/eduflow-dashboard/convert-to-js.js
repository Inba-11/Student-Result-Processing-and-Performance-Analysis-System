import { readdir, rename, unlink } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function convertFiles(dir) {
  try {
    const files = await readdir(dir, { withFileTypes: true });
    
    for (const file of files) {
      const fullPath = join(dir, file.name);
      
      if (file.isDirectory()) {
        // Skip node_modules and .git directories
        if (file.name === 'node_modules' || file.name === '.git' || file.name === '.next' || file.name === 'dist') {
          continue;
        }
        await convertFiles(fullPath);
      } else {
        // Convert .tsx to .jsx and .ts to .js
        try {
          if (file.name.endsWith('.tsx')) {
            const newPath = fullPath.replace(/\.tsx$/, '.jsx');
            await rename(fullPath, newPath);
            console.log(`Renamed: ${fullPath} -> ${newPath}`);
          } else if (file.name.endsWith('.ts') && !file.name.endsWith('.d.ts')) {
            const newPath = fullPath.replace(/\.ts$/, '.js');
            await rename(fullPath, newPath);
            console.log(`Renamed: ${fullPath} -> ${newPath}`);
          } else if (file.name.endsWith('.d.ts')) {
            // Remove .d.ts files
            await unlink(fullPath);
            console.log(`Removed: ${fullPath}`);
          }
        } catch (error) {
          console.error(`Error processing ${fullPath}:`, error.message);
        }
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${dir}:`, error.message);
  }
}

// Start conversion from the current directory
(async () => {
  try {
    await convertFiles(__dirname);
    console.log('Conversion completed successfully!');
  } catch (error) {
    console.error('Error during conversion:', error);
    process.exit(1);
  }
})();
