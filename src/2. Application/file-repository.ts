import { File } from "../1. Domain/file";

export interface FileRepository {
    uploadFile(file: File): Promise<void>;
}