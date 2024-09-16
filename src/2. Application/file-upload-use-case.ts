import { UIInterface } from "./ui-interface";

export class FileUploadUseCase {
    constructor(private userInterface: UIInterface) {
        userInterface.upload(async (req: any, res: any) => {

            return res.status(200).json({
                message: "File uploaded"
            });
        })
    }

    async run() {
        console.log("running")
    }

}