export class Professional {
    private constructor(
        public id: string, 
        public user_name: string, 
        public category_id: string,
        public category_name: string,
        public corp_name: string,
        public logo_url: string,
        public rating: number,
        public reviews_number: number,
        public photo_number: number
    ) { }
    
      static fromJson(json: any): Professional {
        return new Professional(
            json.id,
            json.user_name,
            json.category.id,
            json.category.name,
            json.corp_name,
            json.logo_url,
            json.rating,
            json.reviews_number,
            json.photo_number
        );
    }
    
    static fromJsonToList(json: any): Professional[] {
        return (json as any[]).map((Proffessional: any): Professional => Proffessional.fromJson(Proffessional));
    }

}
