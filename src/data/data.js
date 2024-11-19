const data = [
	{
		id: 1,
		img: '/img/Siemen-S1200-G2.jpg',
		nameProduct: 'SIEMEN S1200-G2',
		price: 80,
		quantity: 1,
         category: 'PLC',
		description: 'PLC compacto de nueva generación para automatización flexible, ideal para aplicaciones medianas con funciones avanzadas de control y seguridad.'
	},
	{
		id: 2,
		img: '/img/SIMATIC-S7-1500.jpg',
		nameProduct: 'SIMATIC S7-1500',
		price: 50,
		quantity: 1,
         category: 'PLC',
		description: 'Controlador modular y de alto rendimiento para aplicaciones industriales complejas, diseñado para facilitar la transformación digital.'
	},
	{
		id: 3,
		img: '/img/SIMATIC-ET-200SP.webp',
		nameProduct: 'SIMATIC ET-200SP',
		price: 90,
		quantity: 1,
        category: 'PLC',
		description: 'Compacto y modular, el ET 200SP es un PLC de diseño optimizado para sistemas distribuidos en espacios reducidos. Ofrece flexibilidad para aplicaciones de control descentralizado y soporta varios módulos de expansión​'
	},
	{
		id: 4,
		img: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
		nameProduct: 'Perfume',
		price: 50,
		quantity: 1,
        category: 'perfume',
		description: 'Perfurme Lindos'
	},
	{
		id: 5,
		img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
		nameProduct: 'Audifonos',
		price: 20,
		quantity: 1,
        category: 'audifonos',
		description: 'Audifonos Lindos'
	},
	
];

const getProducts = () => {
    return new Promise((resolve, reject) => {
        resolve(data)
    })
  }

export {getProducts }
