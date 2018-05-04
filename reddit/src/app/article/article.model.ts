export class Article
{
    title : string;
    votes : number;
    link : string;

    constructor(title:string, link: string, votes? : number)
    {
        this.votes = votes || 0;
        this.title = title;
        this.link = link;
    }

    voteUp(): void
    {
      this.votes += 1;
    }
 
    voteDown(): void
    {
      this.votes -= 1;
    }

    domain(): string
    {
        try{
            const path:string = this.link.split('//')[1];
            return path.split('/')[0];
        }
        catch(err)
        {
            return null;
        }
    }
}