import EnvProperties from './src/domain/EnvProperties';
import fs from 'fs';
import path from 'path';

const NODE_BASE_DIR = __dirname;
const fileName = `/src/envs/${process.env.NODE_ENV}.json`;
const filePath = path.join(NODE_BASE_DIR, fileName);

if (!fs.existsSync(filePath)) {
    throw new Error(`Environment file not found: ${filePath}`);
}
const fileContent = fs.readFileSync(filePath, 'utf-8');

const parsedContent = JSON.parse(fileContent);
for (const key in parsedContent) {
    if (parsedContent[key] !== process.env[key]) {
        process.env[key] = parsedContent[key];
    }
}

const config: EnvProperties = {
    NODE_ENV: process.env.NODE_ENV || 'development',
    PORT: parseInt(process.env.PORT || '3000', 10),
    JOKE_API_URL: process.env.JOKE_API_URL ?? '',
};
console.log(`Config loaded: ${JSON.stringify(config)}`);
export default config;
