export class Proffessional {
    private constructor(
        public id: string, 
        public user_id: number,
        public user_name: string, 
        public category: string,
        public subcategory: string,
        public corp_name: string,
        public logo_url: string,
        public description: string,
        public fiscal_id: string,
        public street: string,
        public postal_code: number,
        public area: string,
        public city: string,
        public province: string,
        public location: Location,
        public web_url: string,
        public email: string,
        public telephone: string,
        public opening_hours: string,
        public register_date: DateTime,
        public rate_visit: 
        public images_url: 
        public rating_accumulated: 
        public rating_votes: 
        public rating: 
        public reviews_number: 
        public photo_number: 
        public demands: 
        
        
    ) { }
    
      static fromJson(json: any): Proffessional {
        return new Proffessional(
            json.id,
            json.name,
            json.active,
            new Date(json.modificationDate),
            json.urlLogo
        );
    }
    
    static fromJsonToList(json: any): Proffessional[] {
        return (json as any[]).map((Proffessional: any): Proffessional => Proffessional.fromJson(Proffessional));
    }

    {
        "_id":"59ba5ffa6a210a1fc2a84432","user_id":"1","user_name":"Chispas Manolo","category":"Hogar","subcategory":"Electricista","corp_name":"El Chispas Corp.","logo_url":"http://www.mylittlebusiness.biz/img/portfolio/8.jpg","description":"El mejor chipas a su alcance","fiscal_id":"B83994052","street":"Pernambuco, 69","postal_code":28010,"area":"Latina","city":"Madrid","province":"Madrid","location":{"type":"Point","coordinates":[-3.7037902,40.4167754]},"web_url":"www.kronox.es","email":"chispasmanolo@chispas.com","telephone":913334455,"opening_hours":"De 8 a 19h ","register_date":"2017-12-09T00:00:00.000Z","rate_visit":45,"rate_hour":25,"rate_notes":"precios sin iva","images_url":"image1_url,image2_url","rating_accumulated":1201,"rating_votes":2533,"rating":2.11,"reviews_number":107,"photo_number":14,"demands":[]}
    }

