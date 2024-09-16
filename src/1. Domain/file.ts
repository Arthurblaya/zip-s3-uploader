export class File {
    public readonly name: string;
    public readonly content: string;
    public readonly extension: string;

    constructor(data: any) {
        this.name = data.name;
        this.extension = data.extension;
        this.content = data.content;
    }
}