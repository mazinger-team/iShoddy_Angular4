export class Location {
    private constructor(
        public lat: number,
        public lng: number
    ) { }
    
      static fromJson(json: any): Location {
        if (json) {
          return new Location (
            json.coordinates[1],
            json.coordinates[0]
          );
        } else {
          return new Location(undefined, undefined);
        }
      }
    
      static fromJsonToList(json: any): Location[] {
        return (json as any[]).map((location: any): Location => Location.fromJson(location));
      }

}
