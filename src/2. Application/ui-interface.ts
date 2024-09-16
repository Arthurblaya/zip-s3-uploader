export interface UIInterface {
    upload(callback: (req: any, res: any) => Promise<void>): Promise<void>;
}