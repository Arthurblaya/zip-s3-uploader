import { FileUploadUseCase } from "../2. Application/file-upload-use-case";
import { ExpressUi } from "../3. Infrastructure/express-ui";
import { MinioFileRepository } from "../3. Infrastructure/minio-file-repository";
import dotenv from 'dotenv';

dotenv.config();
const ui = new ExpressUi();
const fileRepository = new MinioFileRepository();

export const fileUploadUseCase = new FileUploadUseCase(ui, fileRepository);