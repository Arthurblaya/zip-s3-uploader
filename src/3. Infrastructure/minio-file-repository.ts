import * as Minio from 'minio';
import { FileRepository } from '../2. Application/file-repository';
import { File } from '../1. Domain/file';

export class MinioFileRepository implements FileRepository {
    private minioClient: Minio.Client;

    constructor() {
        this.minioClient = new Minio.Client({
            endPoint: process.env.MINIO_ENDPOINT || "",
            useSSL: true,
            accessKey: process.env.MINIO_ACCESS_KEY || "",
            secretKey: process.env.MINIO_SECRET_KEY || "",
        });
    }

    async uploadFile(file: File): Promise<void> {
        const bucket = 'zip-s3-uplader';
        const objectName = file.name;
        const fileContentBuffer = Buffer.from(file.content, 'utf-8');

        const bucketExists = await this.minioClient.bucketExists(bucket);
        if (!bucketExists) {
            await this.minioClient.makeBucket(bucket, 'eu-west-1');
        }

        await this.minioClient.putObject(bucket, objectName, fileContentBuffer, fileContentBuffer.length, {
            'Content-Type': 'application/zip',
        });

        console.log(`File ${file.name} uploaded to bucket ${bucket}`);
    }
}