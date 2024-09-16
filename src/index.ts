import { fileUploadUseCase } from "./5. Dependences/container";

class Main {
    async run() {
        await fileUploadUseCase.run();
    }
}
new Main().run();