export class Route {
    RouteName:string;
    imagenUrl:string;
    descriptionRoute:string;

    constructor(n:string,u:string,descriptionRoute:string){
        this.RouteName = n;
        this.imagenUrl = u;
        this.descriptionRoute = descriptionRoute;
    }
}