import config from '../envs/Config';
import { jest, describe, expect, afterEach, it } from '@jest/globals';



describe('Config', () => {
    const mockEnv = {
        NODE_ENV: 'test',
        PORT: 4000,
        JOKE_API_URL: 'https://api.example.com/jokes',
    }
    afterEach(() => {
        jest.clearAllMocks();
    })

    it('should load the configuration correctly', () => {
        expect(config).toEqual(mockEnv);
    })
    
    it('should update process.env with values from the environment file', () => {
        expect(process.env.NODE_ENV).toBe('test');
        expect(process.env.PORT).toBe('4000');
        expect(process.env.JOKE_API_URL).toBe('https://api.example.com/jokes');
    })
   
});