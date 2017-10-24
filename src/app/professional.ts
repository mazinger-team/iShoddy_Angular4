import { Category } from './category';
import { Subcategory } from './subcategory';
import { Location } from './location';
import { Demand } from './demand';
export class Professional {
    private constructor(
        public id: string, 
        public user_name: string,
        public user_id: number, 
        public category: Category,
        public subcategory: Subcategory,
        public corp_name: string,
        public logo_url: string,
        public description: string,
        public fiscal_id: string,
        public street: string,
        public postal_code: string,
        public area: string,
        public city: string, 
        public location: Location,
        public web_url: string,
        public email: string,
        public telephone: string,
        public opening_hours: string,
        public register_date: Date,
        public rate_visit: number,
        public rate_hour: number, 
        public rate_notes: string,
        public rating_accumulated: number,
        public rating_votes: number,
        public rating: number,
        public reviews_number: number,
        public photo_number: number,
        public images_url: string[],
        public demands: Demand[]
    ) { }
    
      static fromJson(json: any): Professional {
        return new Professional(
            json._id,
            json.user_name,
            json.user_id,
            json.category,
            json.subcategory,
            json.corp_name,
            json.logo_url,
            json.description,
            json.fiscal_id,
            json.street,
            json.postal_code,
            json.area,
            json.city,
            Location.fromJson(json.location),
            json.web_url,
            json.email,
            json.telephone,
            json.opening_hours,
            new Date(json.register_date),
            json.rate_visit,
            json.rate_hour,
            json.rate_notes,
            json.rating_accumulated,
            json.rating_votes,
            json.rating,
            json.reviews_number,
            json.photo_number,
            json.images_url,
            json.demands
        );
    }
    
    static fromJsonToList(json: any): Professional[] {
        return (json as any[]).map((Professional: any): Professional => this.fromJson(Professional));
    }

}
