import express, { Application, Router, Request, Response } from 'express';
import EnvProperties from '@/domain/EnvProperties';
export default class Quickstart {
    private instance: Application;
    private router: Router;
    private config: EnvProperties;

    //TODO specify the type of config
    constructor(config: EnvProperties) {
        this.instance = express();
        this.config = config;
        this.router = Router();
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get('/quickstart', this.handleQuickstart);
        this.instance.use('/api', this.router);
    }

    private handleQuickstart(req: Request, res: Response) {
        res.json({ message: 'Hello, World!' });
    }

    public start() {
        this.instance.listen(this.config.PORT, () => {
            console.log(`Server is running on port ${this.config.PORT}`);
        });
    }
    public getInstance(): Application {
        return this.instance;
    }
    public getRouter(): Router {
        return this.router;
    }
}
