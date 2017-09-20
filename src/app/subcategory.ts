
export class Subcategory {
    private constructor(
        public id: number,
        public name: string,
        public active: boolean,
        public modificationDate: Date,
        public idCategory: number
    ) { }
    
      static fromJson(json: any): Subcategory {
        return new Subcategory(
          json.id,
          json.name,
          json.active,
          new Date(json.modificationDate),
          json.idCategory
        );
      }
    
      static fromJsonToList(json: any): Subcategory[] {
        return (json as any[]).map((subcategory: any): Subcategory => Subcategory.fromJson(subcategory));
      }
    }
