import express, {Application, Router, Request, Response} from 'express'

export default class Quickstart {

    private instance: Application
    private router: Router

    //TODO specify the type of config
    constructor(config:any) {
        this.instance = express()
        this.router = Router()
        this.initializeRoutes()
    }

    private initializeRoutes() {
        this.router.get('/quickstart', this.handleQuickstart)
        this.instance.use('/api', this.router)
    }

    private handleQuickstart(req: Request, res: Response) {
        res.json({message: 'Hello, World!'})
    }

    public start(port: number) {
        this.instance.listen(port, () => {
            console.log(`Server is running on port ${port}`)
        })
    }
    public getInstance(): Application {
        return this.instance
    }
    public getRouter(): Router {
        return this.router
    }
}