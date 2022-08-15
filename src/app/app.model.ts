export class Games {
    public name: string;
    public releasingDate: number;
    public company: string;
    public genre: string;
    public imagePath: string;

    constructor(name:string, releasingDate: number, company: string, genre: string, imagePath: string){
        this.name = name
        this.releasingDate = releasingDate
        this.company = company
        this.genre = genre
        this.imagePath = imagePath
    }
}