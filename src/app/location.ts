export class Location {
    private constructor(
        public lat: number,
        public lng: number
    ) { }
    
      static fromJson(json: any): Location {
        return new Location (
          json.coordinates[1],
          json.coordinates[0]
        );
      }
    
      static fromJsonToList(json: any): Location[] {
        return (json as any[]).map((location: any): Location => Location.fromJson(location));
      }

}
