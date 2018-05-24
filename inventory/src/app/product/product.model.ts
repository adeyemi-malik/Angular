export class Product
{
    public sku : string;
    public name : string;
    public imageUrl : string;
    public department : string[];
    public price : number;



    constructor(sku:string, name: string, imageUrl: string, department : string[], price : number)
    {
        this.department = department;
        this.sku = sku;
        this.price = price;
        this.name = name;
        this.imageUrl = imageUrl;
    }
}