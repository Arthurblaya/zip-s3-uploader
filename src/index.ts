import dotenv from 'dotenv';
import { fileUploadUseCase } from "./5. Dependences/container";

dotenv.config();
class Main {
    async run() {
        await fileUploadUseCase.run();
    }
}
new Main().run();