import { Professional } from './../professional';

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ishoddy-professional-detail',
  templateUrl: './professional-detail.component.html',
  styleUrls: ['./professional-detail.component.scss']
})
export class ProfessionalDetailComponent implements OnInit {

  @Input() item: Professional;
  
  constructor() { }

  ngOnInit() {
    this.item = Professional.fromJson(
      {
        _id: "59ba5ffa6a210a1fc2a84432",
        user_id: "1",
        user_name: "Chispas Manolo",
        category: {},
        subcategory: {},
        corp_name: "El Chispas Corp.",
        logo_url: "http://www.mylittlebusiness.biz/img/portfolio/8.jpg",
        description: "El mejor chipas a su alcance",
        fiscal_id: "B83994052",
        street: "Pernambuco, 69",
        postal_code: "28010",
        area: "Latina",
        city: "Madrid",
        province: "Madrid",
        location: {
          type: "Point",
          coordinates: [
            -3.7037902,
            40.4167754
          ]
        },
        web_url: "www.kronox.es",
        email: "chispasmanolo@chispas.com",
        telephone: "913334455",
        opening_hours: "De 8 a 19h ",
        register_date: "2017-12-09T00:00:00.000Z",
        rate_visit: 45,
        rate_hour: 25,
        rate_notes: "precios sin iva",
        rating_accumulated: 1201,
        rating_votes: 2533,
        rating: 2.11,
        reviews_number: 107,
        photo_number: 14,
        images_url: [
          "image1_url",
          "image2_url"
        ],
        demands: [ ]
        }
    )
  }

}
