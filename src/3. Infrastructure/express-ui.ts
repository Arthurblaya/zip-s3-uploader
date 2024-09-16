import express, { Request, Response } from 'express';
import { UIInterface } from '../2. Application/ui-interface';

export class ExpressUi implements UIInterface {
    private app = express();
    constructor() {
        this.app.use(express.json());
        this.app.listen(3000, () => { console.log('listening http://localhost:3000') });
    }
    async upload(callback: (req: any, res: any) => Promise<void>): Promise<void> {
        this.app.post('/upload', async (req: Request, res: Response) => {
            await callback(req, res);
        });
    }

}