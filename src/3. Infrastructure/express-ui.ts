import express, { NextFunction, Request, Response } from 'express';
import { UIInterface } from '../2. Application/ui-interface';

export class ExpressUi implements UIInterface {
    private app = express();
    constructor() {
        this.app.use(express.json());
        this.app.use(this.basicAuth);
        this.app.listen(3000, () => { console.log('listening http://localhost:3000') });
    }
    async upload(callback: (req: any, res: any) => Promise<void>): Promise<void> {
        this.app.post('/upload', async (req: Request, res: Response) => {
            await callback(req, res);
        });
    }

    private basicAuth = (req: any, res: any, next: NextFunction) => {
        const authHeader = req.headers['authorization'];

        if (!authHeader) {
            res.setHeader('WWW-Authenticate', 'Basic');
            return res.status(401).send('Auth required');
        }

        const base64Credentials = authHeader.split(' ')[1];
        const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
        const [username, password] = credentials.split(':');

        const USERNAME = process.env.BASIC_USERNAME;
        const PASSWORD = process.env.BASIC_PASSWORD;

        if (username === USERNAME && password === PASSWORD) {
            return next();
        }

        return res.status(401).send('Bad credentials');
    };

}