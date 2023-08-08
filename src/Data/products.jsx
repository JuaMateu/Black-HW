const products = [
  {
    id: 1,
    title: "Motherboard AM4 - Asrock A520M HDV",
    description: "Marca: Asrock Modelo: A520M-HDV",
    img: "/public/products/mother/Motherboard-1.jpeg",
    stock: 20,
    price: 43000,
    categoryName: "Motherboard",
    categoryid: 1,
  },
  {
    id: 2,
    title: "Motherboard AM4 - Msi A320M-A PRO",
    description: "Marca: Asrock Modelo: A520M-HDV",
    img: "/public/products/mother/Motherboard-1.jpeg",
    stock: 30,
    price: 143000,
    categoryName: "Motherboard",
    categoryid: 1,
  },
  {
    id: 3,
    title: "Motherboard 1700 13°Gen - Msi Z790-P WIFI DDR4",
    description: "Marca: Asrock Modelo: A520M-HDV",
    img: "/public/products/mother/Motherboard-1.jpeg",
    stock: 10,
    price: 44000,
    categoryName: "Motherboard",
    categoryid: 1,
  },
  {
    id: 4,
    title: "Memoria Ram DDR4 - 8Gb 3200 Mhz Corsair Vengeance Rgb Pro Negro",
    description: "Marca: Asrock Modelo: A520M-HDV",
    img: "/public/products/mother/Motherboard-1.jpeg",
    stock: 50,
    price: 45700,
    categoryName: "Memorias Ram",
    categoryid: 2,
  },
  {
    id: 5,
    title: "Memoria Ram SODIMM DDR4 - 16Gb 2666 Mhz Kingston",
    description: "Marca: Asrock Modelo: A520M-HDV",
    img: "/public/products/mother/Motherboard-1.jpeg",
    stock: 12,
    price: 35000,
    categoryName: "Memorias Ram",
    categoryid: 2,
  },
  {
    id: 6,
    title: "Memoria Ram DDR4 - 16Gb 3200 Mhz Kingston Fury Beast Rgb",
    description: "Marca: Asrock Modelo: A520M-HDV",
    img: "/public/products/mother/Motherboard-1.jpeg",
    stock: 15,
    price: 47000,
    categoryName: "Memorias Ram",
    categoryid: 2,
  },
  {
    id: 7,
    title: "Procesador intel Core i3 10105 ",
    description: "Marca: Asrock Modelo: A520M-HDV",
    img: "/public/products/mother/Motherboard-1.jpeg",
    stock: 43,
    price: 89000,
    categoryName: "Procesadores",
    categoryid: 3,
  },
  {
    id: 8,
    title: "Procesador intel Core i5 13600k",
    description: "Marca: Asrock Modelo: A520M-HDV",
    img: "/public/products/mother/Motherboard-1.jpeg",
    stock: 0,
    price: 92000,
    categoryName: "Procesadores",
    categoryid: 3,
  },
  {
    id: 9,
    title: "Procesador intel Core i7 22600k",
    description: "Marca: Asrock Modelo: A520M-HDV",
    img: "/public/products/mother/Motherboard-1.jpeg",
    stock: 34,
    price: 103000,
    categoryName: "Procesadores",
    categoryid: 3,
  },
  {
    id: 10,
    title: "Disco Rigido 1Tb Seagate",
    description: "Marca: Asrock Modelo: A520M-HDV",
    img: "/public/products/mother/Motherboard-1.jpeg",
    stock: 5,
    price: 60000,
    categoryName: "Almacenamiento",
    categoryid: 4,
  },
  {
    id: 11,
    title: "Disco Rigido 2Tb Seagate",
    description: "Marca: Asrock Modelo: A520M-HDV",
    img: "/public/products/mother/Motherboard-1.jpeg",
    stock: 34,
    price: 63000,
    categoryName: "Almacenamiento",
    categoryid: 4,
  },
  {
    id: 12,
    title: "Fuente CTx 700W",
    description: "Marca: Asrock Modelo: A520M-HDV",
    img: "/public/products/mother/Motherboard-1.jpeg",
    stock: 34,
    price: 52000,
    categoryName: "Fuentes",
    categoryid: 5,
  },
  {
    id: 13,
    title: "Fuente Solarmax Kc-DAA-500w",
    description: "Marca: Asrock Modelo: A520M-HDV",
    img: "/public/products/mother/Motherboard-1.jpeg",
    stock: 12,
    price: 24000,
    categoryName: "Fuentes",
    categoryid: 5,
  },
  {
    id: 14,
    title: "Gabinete fullTower Gigabyte 3000",
    description: "Marca: Asrock Modelo: A520M-HDV",
    img: "/public/products/mother/Motherboard-1.jpeg",
    stock: 0,
    price: 39000,
    categoryName: "Gabinetes",
    categoryid: 6,
  },
  {
    id: 15,
    title: "Gabinete Superespacial mega80x",
    description: "Marca: Asrock Modelo: A520M-HDV",
    img: "/public/products/mother/Motherboard-1.jpeg",
    stock: 2,
    price: 34000,
    categoryName: "Gabinetes",
    categoryid: 6,
  },
  {
    id: 16,
    title: "Refrigeracion Liquida 8 ventiladores",
    description: "Marca: Asrock Modelo: A520M-HDV",
    img: "/public/products/mother/Motherboard-1.jpeg",
    stock: 39,
    price: 28000,
    categoryName: "Refrigeracion",
    categoryid: 7,
  },
  {
    id: 17,
    title: "Refrigeracion dispersor ventiladorcito",
    description: "Marca: Asrock Modelo: A520M-HDV",
    img: "/public/products/mother/Motherboard-1.jpeg",
    stock: 8,
    price: 22000,
    categoryName: "Refrigeracion",
    categoryid: 7,
  },
  {
    id: 18,
    title: "Monitor Samsung 32 pulgadas 144hz",
    description: "Marca: Asrock Modelo: A520M-HDV",
    img: "/public/products/mother/Motherboard-1.jpeg",
    stock: 5,
    price: 82000,
    categoryName: "Monitores",
    categoryid: 8,
  },
  {
    id: 19,
    title: "Auriculares vuela tímpanos",
    description: "Marca: Asrock Modelo: A520M-HDV",
    img: "/public/products/mother/Motherboard-1.jpeg",
    stock: 10,
    price: 30000,
    categoryName: "Accesorios",
    categoryid: 9,
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
};

export const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id == productId));
    }, 1000);
  });
};

export const getProductByCategory = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.map((prod) => prod.categoryid == category));
    }, 1000);
  });
};
