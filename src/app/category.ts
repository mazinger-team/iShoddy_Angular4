import { Subcategory } from './subcategory';


export class Category {
    private constructor(
        public _id: string,
        public name: string,
        public active: boolean,
        public modificationDay: Date,
        public urlLogo: string, 
        public subcategories: [Subcategory]

    ) { }
    
      static fromJson(json: any): Category {
        return new Category(
          json._id,
          json.name,
          json.active,
          new Date(json.modificationDay),
          json.urlLogo,
          json.subcategories
        );
      }
    
      static fromJsonToList(json: any): Category[] {
        return (json as any[]).map((category: any): Category => Category.fromJson(category));
      }
    }
