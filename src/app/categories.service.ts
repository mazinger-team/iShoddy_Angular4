import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/map";

import { environment } from './../environments/environment';
import { Category } from './category';

@Injectable()
export class CategoriesService {

  constructor(private _http: Http) { }

  getLocalCategories(): Category[] {
    return [
      {
        "id": 0,
        "name": "HOGAR_plof",
        "active": true,
        "modificationDate": null,
        "urlLogo":"http://www.serviziexpress24.it/templates/images/ellectricista/electro2.jpg",
        "subcategories": [
            {
              "id": 0,
              "name": "Servicios de aire acondicionado \/ calefacci\u00f3n",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 1,
              "name": "Alarma y CCTV",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 2,
              "name": "Carpintero",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 3,
              "name": "Construcci\u00f3n y Renovaci\u00f3n",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 4,
              "name": "Contratista \/ Manitas",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 5,
              "name": "Cortinas, persianas y barandillas",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 6,
              "name": "Instalaci\u00f3n de puertas",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 7,
              "name": "Electricista",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 8,
              "name": "Instalaci\u00f3n de Ventilador y Luz",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 9,
              "name": "Servicios de Pisos",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 10,
              "name": "Reparaci\u00f3n y mantenimiento de muebles",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 11,
              "name": "Jardinero",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 12,
              "name": "Trabajo de vidrio",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 13,
              "name": "Limpieza de canalones",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 14,
              "name": "Limpieza del hogar",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 15,
              "name": "Servicios de limpieza",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 16,
              "name": "Dise\u00f1ador de interiores",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 17,
              "name": "Cerrajero",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 18,
              "name": "Trabajo de Metal",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 19,
              "name": "Mudanza (Local <100km)",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 20,
              "name": "Mudanza (Outstation> 100km)",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 21,
              "name": "Jardiner\u00eda y dise\u00f1o al aire libre",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 22,
              "name": "Pintor",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 23,
              "name": "Control de plagas y malezas",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 24,
              "name": "Fontanero",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 25,
              "name": "Servicios de carreteras y pavimentos",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 26,
              "name": "Eliminaci\u00f3n y transporte de basura",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 27,
              "name": "Servicios S\u00e9pticos",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 28,
              "name": "Servicios De Piscinas",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 29,
              "name": "Limpieza a fondo",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 30,
              "name": "Servicios de Abastecimiento de Agua",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            }
          ]
      },
      {
        "id": 1,
        "name": "EVENTOS",
        "active": true,
        "modificationDate": null,
        "urlLogo":"http://ec2-54-202-209-58.us-west-2.compute.amazonaws.com/images/eventos.jpg",
        "subcategories":  [
            {
              "id": 31,
              "name": "Barman",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 32,
              "name": "Estilista de cabello nupcial",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 33,
              "name": "Estilista de eventos corporativos",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 34,
              "name": "Maquillador de eventos corporativos",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 35,
              "name": "Deejay",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 36,
              "name": "Alquiler de equipos para eventos",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 37,
              "name": "Estilista de eventos",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 38,
              "name": "Artista de maquillaje de eventos",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 39,
              "name": "Modelo de evento",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 40,
              "name": "Organizador de eventos",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 41,
              "name": "Talentos de eventos",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 42,
              "name": "Catering de alimentos",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 43,
              "name": "Banda en vivo",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 44,
              "name": "Mago",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 45,
              "name": "Servicios para fiestas",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 46,
              "name": "Fot\u00f3grafo",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 47,
              "name": "Catering de la boda",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 48,
              "name": "Oficiante de boda",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 49,
              "name": "Planificador de la boda",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            }
          ]
      },
      {
        "id": 2,
        "name": "BIENESTAR",
        "active": true,
        "modificationDate": null,
        "urlLogo":"http://ec2-54-202-209-58.us-west-2.compute.amazonaws.com/images/bienestar.jpg",
        "subcategories": [
            {
              "id": 50,
              "name": "Esteticistas",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 51,
              "name": "Quiropr\u00e1ctico",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 52,
              "name": "Cuidado de la Salud Colsultant",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 53,
              "name": "Cuidados en el hogar",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 54,
              "name": "Manicura y pedicura",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 55,
              "name": "Servicios de masaje",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 56,
              "name": "Nitricionista",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 57,
              "name": "Entrenador personal",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 58,
              "name": "Instructor de Yoga",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            }
          ]
      },
      {
        "id": 3,
        "name": "CLASES",
        "active": true,
        "modificationDate": null,
        "urlLogo":"http://ec2-54-202-209-58.us-west-2.compute.amazonaws.com/images/clases.jpg",
        "subcategories":  [
            {
              "id": 59,
              "name": "Instructor de Danza de Ballet",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 60,
              "name": "Instructor de baile de sal\u00f3n",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 61,
              "name": "Instructor de Danza del Vientre",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 62,
              "name": "Instructor de Danza de Bollywood",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 63,
              "name": "Colegio \/ Universidad",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 64,
              "name": "Colegio \/ Universidad Tutor\u00eda, Tutor",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 65,
              "name": "Clases de cocina",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 66,
              "name": "RCP Trining",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 67,
              "name": "Clases de conducir",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 68,
              "name": "Techer de Idioma Extranjero",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 69,
              "name": "Profesores de guitarra",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 70,
              "name": "Lecciones de Gimnasia",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 71,
              "name": "Hip Hop \/ RnB Danza Instructir",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 72,
              "name": "Instructor de baile latino instructor de baile",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 73,
              "name": "Profesor de piano",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 74,
              "name": "Preescolar",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 75,
              "name": "Ayuda de la Tarea de la Escuela Primaria",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 76,
              "name": "Primery School Tuition, Tutor",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 77,
              "name": "Maestro del Cor\u00e1n",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 78,
              "name": "Instructor de Danza Salsa \/ Bachata \/ Zouk",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 79,
              "name": "Tutor\u00eda de la escuela secundaria",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 80,
              "name": "Lecciones de canto",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 81,
              "name": "Clases de natacion",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 82,
              "name": "Lecciones de viol\u00edn",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            }
          ]
      },
      {
        "id": 4,
        "name": "COMUNIDAD DE VECINOS",
        "active": true,
        "modificationDate": null,
        "urlLogo":"http://ec2-54-202-209-58.us-west-2.compute.amazonaws.com/images/comunidad.jpg",
        "subcategories": [
            {
              "id": 83,
              "name": "Control de animales y rescate",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 84,
              "name": "Mantenimiento del acuario",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 85,
              "name": "Reparaci\u00f3n \/ mantenimiento de bicicletas",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 86,
              "name": "Agente Trabajador Extranjero",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 87,
              "name": "Adivino",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 88,
              "name": "Servicios Funerarios y Cementerios",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 89,
              "name": "Gas y Propano",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 90,
              "name": "Vendedor de helados",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 91,
              "name": "Reparaci\u00f3n de joyas",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 92,
              "name": "Afilado de cuchillos",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 93,
              "name": "Servicios de instrumentos musicales",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 94,
              "name": "Servicios de Ni\u00f1era y Beb\u00e9",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 95,
              "name": "Patry Cheff",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 96,
              "name": "Cocinero personal",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 97,
              "name": "Servicios de impresi\u00f3n",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 98,
              "name": "Servicios De Reciclaje",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 99,
              "name": "Costura y sastrer\u00eda",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 100,
              "name": "Reparaci\u00f3n de zapatos, Reparaci\u00f3n",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 101,
              "name": "Remoci\u00f3n de nieve",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 102,
              "name": "Consejer\u00eda Espiritual",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 103,
              "name": "Servicio Tatto",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 104,
              "name": "Servicio de \u00e1rbol",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 105,
              "name": "Servicio veterinario y de cuidado de mascotas",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 106,
              "name": "Reparaci\u00f3n de relojes",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 107,
              "name": "Entrega de agua",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            }
          ]
      },
      {
        "id": 5,
        "name": "VEH\u00cdCULOS",
        "active": true,
        "modificationDate": null,
        "urlLogo":"http://ec2-54-202-209-58.us-west-2.compute.amazonaws.com/images/vehiculos.jpg",
        "subcategories":  [
            {
              "id": 108,
              "name": "Bater\u00eda de coche",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 109,
              "name": "Limpieza y pulido de coches",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 110,
              "name": "Vendedor de autos",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 111,
              "name": "Agente de la placa registradora del coche",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 112,
              "name": "Remolque de coches",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 113,
              "name": "Distribuidor de veh\u00edculos comerciales",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 114,
              "name": "Mec\u00e1nico",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 115,
              "name": "Asistencia en carretera",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 116,
              "name": "Servicio de neum\u00e1ticos",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 117,
              "name": "Recambio del veh\u00edculo",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 118,
              "name": "Servicio de tintado de ventana del veh\u00edculo",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            }
          ]
      },
      {
        "id": 6,
        "name": "LIMPIEZA",
        "active": true,
        "modificationDate": null,
        "urlLogo":"http://ec2-54-202-209-58.us-west-2.compute.amazonaws.com/images/limpieza.jpg",
        "subcategories":  [
            {
              "id": 119,
              "name": "Limpieza Comercial",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 120,
              "name": "Servicio de tintorer\u00eda y lavander\u00eda",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 121,
              "name": "graffiti Limpieza",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 122,
              "name": "Limpieza a Presi\u00f3n",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            }
          ]
      },
      {
        "id": 7,
        "name": "PAQUETER\u00cdA",
        "active": true,
        "modificationDate": null,
        "urlLogo":"http://ec2-54-202-209-58.us-west-2.compute.amazonaws.com/images/paqueteria.jpg",
        "subcategories":  [
            {
              "id": 123,
              "name": "Entrega Express de Documentos",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 124,
              "name": "Entrega de Paquetes Express",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 125,
              "name": "Florista",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 126,
              "name": "Entrega de comida",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 127,
              "name": "Compras y entrega de comestibles",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 128,
              "name": "Corredor",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 129,
              "name": "Entrega de documentos a corta distancia",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 130,
              "name": "Shost Distancia Paquetes Entrega",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            }
          ]
      },
      {
        "id": 8,
        "name": "ELECTR\u00d3NICA",
        "active": true,
        "modificationDate": null,
        "urlLogo":"http://ec2-54-202-209-58.us-west-2.compute.amazonaws.com/images/electronica.jpg",
        "subcategories": [
            {
              "id": 131,
              "name": "Servicio de Hardware",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 132,
              "name": "Servicio de inform\u00e1tica",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 133,
              "name": "Servicio de electrodom\u00e9sticos",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 134,
              "name": "Servicio de dispositivo m\u00f3vil",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 135,
              "name": "Otros servicios de equipos electr\u00f3nicos",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            }
          ]
      },
      {
        "id": 9,
        "name": "FINANZAS",
        "active": true,
        "modificationDate": null,
        "urlLogo":"http://ec2-54-202-209-58.us-west-2.compute.amazonaws.com/images/finanzas.jpg",
        "subcategories": [
            {
              "id": 136,
              "name": "Banquero",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 137,
              "name": "Asesor financiero",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 138,
              "name": "Agente de seguros",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 139,
              "name": "Agente de pr\u00e9stamo",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            }
          ]
      },
      {
        "id": 10,
        "name": "TRABAJOS OCASIONALES",
        "active": true,
        "modificationDate": null,
        "urlLogo":"http://ec2-54-202-209-58.us-west-2.compute.amazonaws.com/images/ocacionales.jpg",
        "subcategories":  [
            {
              "id": 140,
              "name": "Ni\u00f1eras de l\u00ednea",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 141,
              "name": "Promotor",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 142,
              "name": "Ujier",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 143,
              "name": "Camarero camarera",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            }
          ]
      },
      {
        "id": 11,
        "name": "PROFESIONALES",
        "active": true,
        "modificationDate": null,
        "urlLogo":"http://ec2-54-202-209-58.us-west-2.compute.amazonaws.com/images/profesionales.jpg",
        "subcategories":  [
            {
              "id": 144,
              "name": "Contador",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 145,
              "name": "Servicio Administrativo",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 146,
              "name": "Dise\u00f1ador de animaci\u00f3n",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 147,
              "name": "Arquitecto",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 148,
              "name": "Servicio de escritura comercial",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 149,
              "name": "Servicio de secretaria de la empresa",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 150,
              "name": "Entrada de datos",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 151,
              "name": "Dise\u00f1ador Gr\u00e1fico",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 152,
              "name": "Dise\u00f1ador industrial",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 153,
              "name": "Consultor\u00eda de TI",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 154,
              "name": "Legal, IP y marcas registradas",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 155,
              "name": "Servicio de Marketing y SEO",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 156,
              "name": "Orador motivacional",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 157,
              "name": "Fisioterapeuta",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 158,
              "name": "Investigador privado",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 159,
              "name": "Servicio de seguridad",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 160,
              "name": "Top\u00f3grafo",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 161,
              "name": "Agente tributario",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 162,
              "name": "Entrenador",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 163,
              "name": "Traductor",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 164,
              "name": "Vide\u00f3grafo",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 165,
              "name": "dise\u00f1ador web",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 166,
              "name": "Escritor",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            }
          ]
      },
      {
        "id": 12,
        "name": "PROPIEDADES",
        "active": true,
        "modificationDate": null,
        "urlLogo":"http://ec2-54-202-209-58.us-west-2.compute.amazonaws.com/images/propiedades.jpg",
        "subcategories":[
            {
              "id": 167,
              "name": "Agente de propiedad",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 168,
              "name": "Servicio de Inspeccion de Propiedades",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 169,
              "name": "Servicio de Inversi\u00f3n Inmobiliaria",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 170,
              "name": "Servicio de administraci\u00f3n de propiedades",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            }
          ]
        
      },
      {
        "id": 13,
        "name": "TRANSPORTE",
        "active": true,
        "modificationDate": null,
        "urlLogo":"http://ec2-54-202-209-58.us-west-2.compute.amazonaws.com/images/transporte.jpg",
        "subcategories":  [
            {
              "id": 171,
              "name": "Servicio de taxi del aeropuerto",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 172,
              "name": "Alquiler de coches",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 173,
              "name": "Servicio de taxis de larga distancia",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 174,
              "name": "Servicio de taxi a corta distancia",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 175,
              "name": "Alquiler de Van y Bus",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            }
          ]
      },
      {
        "id": 14,
        "name": "VIAJES",
        "active": true,
        "modificationDate": null,
        "urlLogo":"http://ec2-54-202-209-58.us-west-2.compute.amazonaws.com/images/viajes.jpg",
        "subcategories":  [
            {
              "id": 176,
              "name": "Gu\u00eda tur\u00edstico",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 177,
              "name": "Agencia de viajes",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 178,
              "name": "Acuerdo de viaje",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            },
            {
              "id": 179,
              "name": "Transporte de viajes",
              "active": true,
              "modificationDate": null,
              "idCategory": 0
            }
          ]
      }
    ];
  }

  getCategories(): Observable<Category[]> {
    return this._http
        .get(environment.url)
        .map((data: Response) => {
          return data.json();
        })
        .map((json: any) => {
          return json.listCategoriesOutputType.categories as Category[];
        });
  }
}
