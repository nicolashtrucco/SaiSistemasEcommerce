/** @format */

const data = [
   {
      id: 1,
      img: "/img/Siemen-S1200-G2.jpg",
      nameProduct: "SIEMEN S1200-G2",
      price: 80,
      quantity: 1,
      category: "PLC",
      description:
         "PLC compacto de nueva generación para automatización flexible, ideal para aplicaciones medianas con funciones avanzadas de control y seguridad.",
   },
   {
      id: 2,
      img: "/img/SIMATIC-S7-1500.jpg",
      nameProduct: "SIMATIC S7-1500",
      price: 50,
      quantity: 1,
      category: "PLC",
      description:
         "Controlador modular y de alto rendimiento para aplicaciones industriales complejas, diseñado para facilitar la transformación digital.",
   },
   {
      id: 3,
      img: "/img/SIMATIC-ET-200SP.webp",
      nameProduct: "SIMATIC ET-200SP",
      price: 90,
      quantity: 1,
      category: "PLC",
      description:
         "Compacto y modular, el ET 200SP es un PLC de diseño optimizado para sistemas distribuidos en espacios reducidos. Ofrece flexibilidad para aplicaciones de control descentralizado y soporta varios módulos de expansión​",
   },
   {
      id: 4,
      img: "/img/laser-de-triangulacion-WENGLOR-OCP.jpg",
      nameProduct: "LASER DE TRIANGULACIÓN WENGLOR OCP",
      price: 50,
      quantity: 1,
      category: "LASER",
      description: `El láser de triangulación WENGLOR OCP está pensado para todo tipo de aplicaciones, tanto industriales como de ensayos, gracias a sus características de rango, precisión y su adaptación a todo tipo de superficies. Su tecnología de fotodiodo CMOS de gran resolución calculan la distancia a través de la medición del ángulo, lo que elimina virtualmente los problemas debidos al tipo de material, color o brillo de los mismos. Los rangos disponibles para estos láser de triangulación son tres, 50mm, 120mm y 300mm, todos ellos con salida analógica en voltaje 0…10V o corriente 4…20mA y muestreos medios de 500 o 1000 muestras/s, que permiten un ajuste gracias a su interfaz digital.`,
   },
   {
      id: 5,
      img: "/img/pantalla-panel-simatic-hmi-ktp400.webp",
      nameProduct: "PANTALLA SIMATIC HMI KTP400",
      price: 20,
      quantity: 1,
      category: "PANTALLA",
      description: "La pantalla SIMATIC HMI KTP400 es una interfaz hombre-máquina (HMI) compacta diseñada para aplicaciones industriales. Forma parte de la familia de dispositivos Siemens y está especialmente adaptada para entornos donde se requiere un control y monitoreo sencillo, eficiente y confiable.",
   },
];

const getProducts = () => {
   return new Promise((resolve, reject) => {
      // setTimeout(()=> {
         resolve(data);
      // }, 1500)
      
   });
};

export { getProducts, data };
