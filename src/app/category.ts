import { Subcategory } from './subcategory';


export class Category {
    private constructor(
        public id: string,
        public name: string,
        public active: boolean,
        public modificationDate: Date,
        public urlLogo: string, 
        public subcategories: [Subcategory]

    ) { }
    
      static fromJson(json: any): Category {
        return new Category(
          json.id,
          json.name,
          json.active,
          new Date(json.modificationDate),
          json.urlLogo,
          json.subcategories
        );
      }
    
      static fromJsonToList(json: any): Category[] {
        return (json as any[]).map((category: any): Category => Category.fromJson(category));
      }
    }
