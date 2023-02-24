export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  stock: number;
  images:string [];
}

export const products = [
  {
    id: 1,
    name: '¡Phone XR',
    price: 799,
    description: 'La pantalla del iPhone XR tiene esquinas redondeadas que siguen el elegante diseño curvo del teléfono, y las esquinas se encuentran dentro de un rectángulo estándar.',
    stock: 23,
    images: ['PhoneXr.jpg'],
  },
  {
    id: 2,
    name: '¡Phone 13 Mini',
    price: 699,
    description: 'La pantalla del iPhone 13 mini tiene esquinas redondeadas que siguen el elegante diseño curvo del teléfono, y las esquinas se encuentran dentro de un rectángulo estándar.',
    stock: 34,
    images: ['Phone13.jpeg'],
  },
  {
    id: 3,
    name: 'Celular Samsung',
    price: 701,
    description: 'Con el éxito de su negocio de electrónica, Samsung ha sido reconocida a nivel mundial como líder de la industria en tecnología y ahora está clasificada como una de las 10 mejores marcas globales.',
    stock: 25,
    images: ['Samsung.jpg'],
  },
  {
    id: 5,
    name: 'Celular Motorola',
    price: 299,
    description: 'Presenta un diseño cuidado y elegante que da la sensación de un teléfono de mayor precio y cuenta con una batería de 5000 mAh que da una autonomía bastante aceptable.',
    stock: 76,
    images: ['Motorola.jpg'],
  },
  {
    id: 7,
    name: 'Celular Sony',
    price: 1000,
    description: 'Presenta un diseño cuidado y elegante que da la sensación de un teléfono de mayor precio y cuenta con una batería de 5000 mAh que da una autonomía bastante aceptable.',
    stock: 5,
    images: ['Sony.jpg'],
  },
];