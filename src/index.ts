import dotenv from 'dotenv';
import { fileUploadUseCase } from "./5. Dependences/container";


class Main {
    async run() {
        dotenv.config();
        await fileUploadUseCase.run();
    }
}
new Main().run();