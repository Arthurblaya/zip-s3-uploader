import { FileUploadUseCase } from "../2. Application/file-upload-use-case";
import { ExpressUi } from "../3. Infrastructure/express-ui";

const ui = new ExpressUi();
export const fileUploadUseCase = new FileUploadUseCase(ui); 