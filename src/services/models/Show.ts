export class Show {
    id: number;
    title: string;
    image: string;
    year: Date;
    averageLength: number;
    rating: number;
    description: string;
    externalLink: string;
    isTonightWatch: boolean;

    constructor(id: number, title: string, image: string | null , year: Date, averageLength: number, rating: number, description: string, externalLink: string) {
        this.id = id;
        this.title = title;
        this.image = image? image : "";
        this.year = year;
        this.averageLength = averageLength;
        this.rating = rating;
        this.description = description;
        this.externalLink = externalLink;
        this.isTonightWatch = false;
    }
}
