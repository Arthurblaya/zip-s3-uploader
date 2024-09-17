import { UIInterface } from "./ui-interface";
import { File } from "../1. Domain/file";
import { FileRepository } from "./file-repository";

export class FileUploadUseCase {
    constructor(private userInterface: UIInterface, private fileRepository: FileRepository) {
        userInterface.upload(async (req: any, res: any) => {
            const file = req.file;
            if (!file) {
                return res.status(400).json({ message: "No file uploaded" });
            }

            if (file.mimetype === 'application/zip') {
                const fileBuffer = file.buffer;
                const fileName = file.originalname;
                const fileEntity = new File({
                    name: fileName,
                    content: fileBuffer,
                    extension: 'zip'
                });

                await this.fileRepository.uploadFile(fileEntity);

                return res.status(200).json({
                    message: "File uploaded successfully",
                    file: {
                        name: fileEntity.name,
                        extension: fileEntity.extension
                    }
                });
            } else {
                return res.status(400).json({ message: "Only zip files are accepted" });
            }
        });
    }

    async run() {
        console.log("running");
    }
}