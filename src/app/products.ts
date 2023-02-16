export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  stock: number;
}

export const products = [
  {
    id: 1,
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens',
    stock: 23,
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras',
    stock: 34,
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 701,
    description: 'A large phone with one of the best screens',
    stock: 25,
  },
  {
    id: 5,
    name: 'Phone Motorola',
    price: 299,
    description: 'A large phone with one of the best screens',
    stock: 76,
  },
  {
    id: 7,
    name: 'Phone Sony',
    price: 1000,
    description: 'A large phone with one of the best screens',
    stock: 5,
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
