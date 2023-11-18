const Category = require("../models/category.model");
const Product = require("../models/product.model");

const data = [
  {
    name: "JEANS CARROT",
    price: 149900,
    images: [
      "https://static.pullandbear.net/2/photos//2023/I/0/2/p/7686/530/434/7686530434_2_1_8.jpg?t=1695024701144&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/2/p/7686/530/434/7686530434_2_2_8.jpg?t=1695024701144&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/2/p/7686/530/434/7686530434_2_3_8.jpg?t=1695024701144&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/2/p/7686/530/434/7686530434_2_4_8.jpg?t=1695025125685&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/2/p/7686/530/434/7686530434_2_5_8.jpg?t=1695025125685&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/2/p/7686/530/434/7686530434_2_6_8.jpg?t=1690792581270&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/2/p/7686/530/434/7686530434_2_20_8.jpg?t=1690792581270&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/2/p/7686/530/434/7686530434_2_8_8.jpg?t=1690792581270&imwidth=750",
    ],
    description:
      "Jeans carrot fit con diseño de cinco bolsillos, cintura con trabillas y cierre de cremallera y botón, confeccionados en tejido elástico.",
    categoryName: "ropa-hombre",
  },
  {
    name: "JEANS SKINNY",
    price: 199900,
    images: [
      "https://static.pullandbear.net/2/photos//2023/I/0/2/p/9686/500/800/9686500800_2_1_8.jpg?t=1683102321357&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/2/p/9686/500/800/9686500800_2_2_8.jpg?t=1683102321357&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/2/p/9686/500/800/9686500800_2_3_8.jpg?t=1683102321357&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/2/p/9686/500/800/9686500800_2_4_8.jpg?t=1683102321357&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/2/p/9686/500/800/9686500800_2_5_8.jpg?t=1683102321357&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/2/p/9686/500/800/9686500800_2_6_8.jpg?t=1683102321357&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/2/p/9686/500/800/9686500800_2_8_8.jpg?t=1683102321357&imwidth=750",
    ],
    description:
      "jeans skinny con diseño de cinco bolsillos, cintura con trabillas, cierre de cremallera y botón, confeccionados en tejido ligeramente elástico.",
    categoryName: "ropa-hombre",
  },
  {
    name: "JEANS BAGGY",
    price: 229900,
    images: [
      "https://static.pullandbear.net/2/photos//2023/I/0/2/p/8686/518/922/8686518922_2_1_8.jpg?t=1690808671458&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/2/p/8686/518/922/8686518922_2_2_8.jpg?t=1690808671458&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/2/p/8686/518/922/8686518922_2_3_8.jpg?t=1690808671458&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/2/p/8686/518/922/8686518922_2_4_8.jpg?t=1691407607621&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/2/p/8686/518/922/8686518922_2_5_8.jpg?t=1690808671458&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/2/p/8686/518/922/8686518922_2_6_8.jpg?t=1693212187192&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/2/p/8686/518/922/8686518922_2_20_8.jpg?t=1687963806628&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/2/p/8686/518/922/8686518922_2_8_8.jpg?t=1687963806628&imwidth=750",
    ],
    description:
      "Jeans baggy fit con diseño de cinco bolsillos, cintura con trabillas, cierre de cremallera y botón, en tejido de 100% algodón.",
    categoryName: "ropa-hombre",
  },
  {
    name: "CAMISETA MARRÓN PRINT STWD",
    price: 99900,
    images: [
      "https://static.pullandbear.net/2/photos//2023/I/0/2/p/7241/555/717/7241555717_2_1_8.jpg?t=1685952682571&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/2/p/7241/555/717/7241555717_2_2_8.jpg?t=1685952682571&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/2/p/7241/555/717/7241555717_2_3_8.jpg?t=1685952682571&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/2/p/7241/555/717/7241555717_2_4_8.jpg?t=1685952682571&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/2/p/7241/555/717/7241555717_2_5_8.jpg?t=1685952682571&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/2/p/7241/555/717/7241555717_2_6_8.jpg?t=1686728510377&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/2/p/7241/555/717/7241555717_2_20_8.jpg?t=1686728902966&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/2/p/7241/555/717/7241555717_2_8_8.jpg?t=1686728902966&imwidth=750",
    ],
    description:
      "Camiseta de color marrón con print STWD en contraste, de manga corta, con cuello redondo y en 100% algodón.",
    categoryName: "ropa-hombre",
  },
  {
    name: "CAMISETA OVERSIZE MANGA CORTA",
    price: 99900,
    images: [
      "https://static.pullandbear.net/2/photos//2023/I/0/2/p/4239/500/703/4239500703_2_1_8.jpg?t=1676033305637&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/2/p/4239/500/703/4239500703_2_2_8.jpg?t=1676033305637&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/2/p/4239/500/703/4239500703_2_3_8.jpg?t=1676033305637&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/2/p/4239/500/703/4239500703_2_4_8.jpg?t=1676033305637&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/2/p/4239/500/703/4239500703_2_6_8.jpg?t=1678270019511&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/2/p/4239/500/703/4239500703_2_8_8.jpg?t=1675415247860&imwidth=750",
    ],
    description:
      "Camiseta oversize de manga corta y cuello redondo con detalle de etiqueta y confeccionado en algodón.",
    categoryName: "ropa-hombre",
  },
  {
    name: "CAMISETA GREEN DAY",
    price: 129900,
    images: [
      "https://static.pullandbear.net/2/photos//2023/I/0/2/p/4239/509/300/4239509300_2_1_8.jpg?t=1688128738217&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/2/p/4239/509/300/4239509300_2_2_8.jpg?t=1688128738217&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/2/p/4239/509/300/4239509300_2_3_8.jpg?t=1688128738217&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/2/p/4239/509/300/4239509300_2_4_8.jpg?t=1688128738217&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/2/p/4239/509/300/4239509300_2_5_8.jpg?t=1688128738217&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/2/p/4239/509/300/4239509300_2_6_8.jpg?t=1688398178347&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/2/p/4239/509/300/4239509300_2_20_8.jpg?t=1688398178347&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/2/p/4239/509/300/4239509300_2_8_8.jpg?t=1688398178347&imwidth=750",
    ],
    description:
      "Camiseta licencia Green Day con print central delantero y en espalda, diseño de manga corta y cuello redondo, confeccionada en tejido de 100% algodón.",
    categoryName: "ropa-hombre",
  },
  {
    name: "CAMISA MANGA CORTA GIRASOLES",
    price: 179900,
    images: [
      "https://static.pullandbear.net/2/photos//2023/I/0/2/p/3473/704/800/3473704800_2_1_8.jpg?t=1689592130748&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/2/p/3473/704/800/3473704800_2_2_8.jpg?t=1689591965061&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/2/p/3473/704/800/3473704800_2_3_8.jpg?t=1689592177242&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/2/p/3473/704/800/3473704800_2_4_8.jpg?t=1689591976936&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/2/p/3473/704/800/3473704800_2_6_8.jpg?t=1687527298947&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/2/p/3473/704/800/3473704800_2_8_8.jpg?t=1687527298947&imwidth=750",
    ],
    description:
      "Camisa de manga corta y cuello solapa con detalle de print de girasoles, cierre de botones y confeccionada en tejido de viscosa.",
    categoryName: "ropa-hombre",
  },
  {
    name: "PANTALÓN CARGO SLIM",
    price: 229000,
    images: [
      "https://static.pullandbear.net/2/photos//2023/I/0/2/p/4678/513/710/4678513710_2_1_8.jpg?t=1691502564186&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/2/p/4678/513/710/4678513710_2_2_8.jpg?t=1691502564186&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/2/p/4678/513/710/4678513710_2_3_8.jpg?t=1691502564186&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/2/p/4678/513/710/4678513710_2_5_8.jpg?t=1691502564186&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/2/p/4678/513/710/4678513710_2_6_8.jpg?t=1692885857613&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/2/p/4678/513/710/4678513710_2_15_8.jpg?t=1691502564186&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/2/p/4678/513/710/4678513710_2_4_8.jpg?t=1691502564186&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/2/p/4678/513/710/4678513710_2_8_8.jpg?t=1692885857613&imwidth=750",
    ],
    description:
      "Pantalón cargo slim con cintura con trabillas, cierre de botón y cremallera y bolsillos en la pernera con tapeta.",
    categoryName: "ropa-hombre",
  },
  {
    name: "PANTALÓN JOGGER BÁSICO",
    price: 179900,
    images: [
      "https://static.pullandbear.net/2/photos//2023/I/0/2/p/8678/504/409/8678504409_2_1_8.jpg?t=1689004282983&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/2/p/8678/504/409/8678504409_2_2_8.jpg?t=1689004282983&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/2/p/8678/504/409/8678504409_2_3_8.jpg?t=1689004282983&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/2/p/8678/504/409/8678504409_2_4_8.jpg?t=1689004282983&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/2/p/8678/504/409/8678504409_2_5_8.jpg?t=1689004282983&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/2/p/8678/504/409/8678504409_2_15_8.jpg?t=1689004282983&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/2/p/8678/504/409/8678504409_2_6_8.jpg?t=1693306671420&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/2/p/8678/504/409/8678504409_2_20_8.jpg?t=1693306671420&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/2/p/8678/504/409/8678504409_2_8_8.jpg?t=1693306671420&imwidth=750",
    ],
    description:
      "Pantalón jogger fit básico, con cintura elástica con cordón ajustable, bolsillos laterales, confeccionado en tejido ligeramente elástico y disponible en varios colores.",
    categoryName: "ropa-hombre",
  },
  {
    name: "BERMUDA VAQUERA SLIM FIT ROTOS",
    price: 179900,
    images: [
      "https://static.pullandbear.net/2/photos//2023/I/0/2/p/4691/510/802/4691510802_2_1_8.jpg?t=1682667424689&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/2/p/4691/510/802/4691510802_2_2_8.jpg?t=1682667424689&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/2/p/4691/510/802/4691510802_2_3_8.jpg?t=1682667424689&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/2/p/4691/510/802/4691510802_2_4_8.jpg?t=1682667424689&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/2/p/4691/510/802/4691510802_2_5_8.jpg?t=1682667424689&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/2/p/4691/510/802/4691510802_2_6_8.jpg?t=1682667424689&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/2/p/4691/510/802/4691510802_2_8_8.jpg?t=1682667424689&imwidth=750",
    ],
    description:
      "Bermuda vaquera de corte slim fit con detalle de rotos en la pernera, diseño de cinco bolsillos, cintura con trabillas y cierre de botón y cremallera.",
    categoryName: "ropa-hombre",
  },
  {
    name: "CAZADORA BOMBER LIGERA",
    price: 179900,
    images: [
      "https://static.pullandbear.net/2/photos//2023/I/0/2/p/4710/533/400/4710533400_2_1_8.jpg?t=1678188310527&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/2/p/4710/533/400/4710533400_2_2_8.jpg?t=1678188310527&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/2/p/4710/533/400/4710533400_2_3_8.jpg?t=1678188310527&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/2/p/4710/533/400/4710533400_2_4_8.jpg?t=1678188310527&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/2/p/4710/533/400/4710533400_2_5_8.jpg?t=1678188310527&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/2/p/4710/533/400/4710533400_2_6_8.jpg?t=1677598908971&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/2/p/4710/533/400/4710533400_2_8_8.jpg?t=1677598908971&imwidth=750",
    ],
    description:
      "Cazadora bomber ligera con cierre de cremallera, bolsillos y de manga larga.",
    categoryName: "ropa-hombre",
  },
  {
    name: "SOBRECAMISA ANTELINA",
    price: 229900,
    images: [
      "https://static.pullandbear.net/2/photos//2023/I/0/2/p/8710/707/800/8710707800_2_1_8.jpg?t=1689004323505&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/2/p/8710/707/800/8710707800_2_2_8.jpg?t=1689004323505&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/2/p/8710/707/800/8710707800_2_3_8.jpg?t=1689004323505&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/2/p/8710/707/800/8710707800_2_4_8.jpg?t=1689004323505&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/2/p/8710/707/800/8710707800_2_5_8.jpg?t=1689004323505&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/2/p/8710/707/800/8710707800_2_6_8.jpg?t=1688543448905&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/2/p/8710/707/800/8710707800_2_8_8.jpg?t=1688543448905&imwidth=750",
    ],
    description:
      "Sobrecamisa de antelina con bolsillos de solapa en pecho, cierre de botones, cuello clásico y disponible en varios colores.",
    categoryName: "ropa-hombre",
  },
  {
    name: "CHAQUETA BOLSILLO CANGURO",
    price: 229900,
    images: [
      "https://static.pullandbear.net/2/photos//2023/I/0/2/p/8710/514/401/8710514401_2_1_8.jpg?t=1692605166363&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/2/p/8710/514/401/8710514401_2_2_8.jpg?t=1692605597470&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/2/p/8710/514/401/8710514401_2_3_8.jpg?t=1692605597470&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/2/p/8710/514/401/8710514401_2_4_8.jpg?t=1692605597470&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/2/p/8710/514/401/8710514401_2_5_8.jpg?t=1692605597470&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/2/p/8710/514/401/8710514401_2_6_8.jpg?t=1692023197670&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/2/p/8710/514/401/8710514401_2_20_8.jpg?t=1693903218276&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/2/p/8710/514/401/8710514401_2_8_8.jpg?t=1692023197670&imwidth=750",
    ],
    description:
      "Chaqueta con bolsillo tipo canguro, detalle de etiqueta tejida en frontal, con capucha, forro interior acolchado y cierre de cremallera en el pecho. Disponible en varios colores.",
    categoryName: "ropa-hombre",
  },
  {
    name: "SUDADERA BÁSICA CUELLO REDONDO",
    price: 129900,
    images: [
      "https://static.pullandbear.net/2/photos//2023/I/0/2/p/7592/514/501/7592514501_2_1_8.jpg?t=1690545050185&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/2/p/7592/514/501/7592514501_2_2_8.jpg?t=1690545050185&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/2/p/7592/514/501/7592514501_2_3_8.jpg?t=1690545050185&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/2/p/7592/514/501/7592514501_2_4_8.jpg?t=1690545050185&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/2/p/7592/514/501/7592514501_2_6_8.jpg?t=1688053147083&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/2/p/7592/514/501/7592514501_2_8_8.jpg?t=1688053147083&imwidth=750",
    ],
    description:
      "Sudadera básica de cuello redondo disponible en varios tonos.",
    categoryName: "ropa-hombre",
  },
  {
    name: "CAMISA NARANJA ESTAMPADO PALMERAS",
    price: 179900,
    images: [
      "https://static.pullandbear.net/2/photos//2023/I/0/2/p/3473/707/615/3473707615_2_1_8.jpg?t=1693816162569&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/2/p/3473/707/615/3473707615_2_2_8.jpg?t=1693816162569&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/2/p/3473/707/615/3473707615_2_3_8.jpg?t=1693816162569&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/2/p/3473/707/615/3473707615_2_4_8.jpg?t=1693816162569&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/2/p/3473/707/615/3473707615_2_5_8.jpg?t=1693816162569&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/2/p/3473/707/615/3473707615_2_6_8.jpg?t=1690792585221&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/2/p/3473/707/615/3473707615_2_8_8.jpg?t=1690792585221&imwidth=750",
    ],
    description:
      "Camisa de color naranja con estampado de palmeras, de manga corta, con cierre de botones y confeccionada en viscosa.",
    categoryName: "ropa-hombre",
  },
  {
    name: "CAMISA MANGA CORTA SEERSUCKER",
    price: 199900,
    images: [
      "https://static.pullandbear.net/2/photos//2023/I/0/2/p/4471/527/609/4471527609_2_1_8.jpg?t=1683543947107&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/2/p/4471/527/609/4471527609_2_2_8.jpg?t=1683543947107&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/2/p/4471/527/609/4471527609_2_3_8.jpg?t=1683543947107&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/2/p/4471/527/609/4471527609_2_4_8.jpg?t=1683543947107&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/2/p/4471/527/609/4471527609_2_5_8.jpg?t=1683543947107&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/2/p/4471/527/609/4471527609_2_6_8.jpg?t=1683100717215&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/2/p/4471/527/609/4471527609_2_8_8.jpg?t=1683100717215&imwidth=750",
    ],
    description:
      "Camisa de manga corta y cuello clásico, con cierre de botones y confeccionada en tejido de algodón seersucker.",
    categoryName: "ropa-hombre",
  },
  {
    name: "MINIFALDA CHIFÓN ESTAMPADA VOLANTES",
    price: 179900,
    images: [
      "https://static.pullandbear.net/2/photos//2023/I/0/1/p/7395/328/605/7395328605_2_1_8.jpg?t=1691144829843&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/1/p/7395/328/605/7395328605_2_2_8.jpg?t=1691144829843&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/1/p/7395/328/605/7395328605_2_3_8.jpg?t=1691144829843&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/1/p/7395/328/605/7395328605_2_4_8.jpg?t=1691753109365&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/1/p/7395/328/605/7395328605_2_6_8.jpg?t=1684938658355&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/1/p/7395/328/605/7395328605_2_8_8.jpg?t=1684938658355&imwidth=750",
    ],
    description:
      "Minifalda estampada en tejido chifón, con cintura ancha y detalle de volantes.",
    categoryName: "ropa-mujer",
  },
  {
    name: "MINIFALDA VAQUERA CARGO",
    price: 179900,
    images: [
      "https://static.pullandbear.net/2/photos//2023/I/0/1/p/7395/327/406/7395327406_2_1_8.jpg?t=1686050234461&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/1/p/7395/327/406/7395327406_2_2_8.jpg?t=1686050234461&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/1/p/7395/327/406/7395327406_2_3_8.jpg?t=1686050234461&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/1/p/7395/327/406/7395327406_2_4_8.jpg?t=1686050234461&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/1/p/7395/327/406/7395327406_2_6_8.jpg?t=1684859871968&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/1/p/7395/327/406/7395327406_2_8_8.jpg?t=1684859871968&imwidth=750",
    ],
    description:
      "Minifalda vaquera cargo con detalle de bolsillos girados con solapa, cintura con trabillas, cierre de cremallera y botón, confeccionada en tejido de 100% algodón.",
    categoryName: "ropa-mujer",
  },
  {
    name: "SOBRECAMISA CUADROS",
    price: 249000,
    images: [
      "https://static.pullandbear.net/2/photos//2023/I/0/1/p/8715/352/711/8715352711_2_1_8.jpg?t=1692805902747&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/1/p/8715/352/711/8715352711_2_2_8.jpg?t=1692805902747&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/1/p/8715/352/711/8715352711_2_3_8.jpg?t=1692805902747&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/1/p/8715/352/711/8715352711_2_4_8.jpg?t=1692805902747&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/1/p/8715/352/711/8715352711_2_5_8.jpg?t=1692805902747&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/1/p/8715/352/711/8715352711_2_6_8.jpg?t=1692347009842&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/1/p/8715/352/711/8715352711_2_8_8.jpg?t=1692347014178&imwidth=750",
    ],
    description:
      "Sobrecamisa de cuadros en tonos beis con bolsillos delanteros y de manga larga.",
    categoryName: "ropa-mujer",
  },
  {
    name: "CAMISA CUADROS MANGA LARGA",
    price: 179900,
    images: [
      "https://static.pullandbear.net/2/photos//2023/I/0/1/p/7473/374/401/7473374401_2_1_8.jpg?t=1694612348383&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/1/p/7473/374/401/7473374401_2_2_8.jpg?t=1694612348383&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/1/p/7473/374/401/7473374401_2_3_8.jpg?t=1694612348383&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/1/p/7473/374/401/7473374401_2_4_8.jpg?t=1694612348383&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/1/p/7473/374/401/7473374401_2_6_8.jpg?t=1692885994710&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/1/p/7473/374/401/7473374401_2_8_8.jpg?t=1692885994710&imwidth=750",
    ],
    description:
      "Camisa de cuadros de manga larga con cuello clásico, cierre de botones y bolsillo.",
    categoryName: "ropa-mujer",
  },
  {
    name: "CAMISA CROPPED MANGA CORTA",
    price: 149900,
    images: [
      "https://static.pullandbear.net/2/photos//2023/I/0/1/p/4471/327/620/4471327620_2_1_8.jpg?t=1683723802248&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/1/p/4471/327/620/4471327620_2_2_8.jpg?t=1683723802248&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/1/p/4471/327/620/4471327620_2_3_8.jpg?t=1683723802248&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/1/p/4471/327/620/4471327620_2_4_8.jpg?t=1683723802248&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/1/p/4471/327/620/4471327620_2_6_8.jpg?t=1681746569605&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/1/p/4471/327/620/4471327620_2_8_8.jpg?t=1681746569605&imwidth=750",
    ],
    description:
      "Camisa cropped de manga corta, con cierre de botones y cuello clásico, confeccionada en 100% algodón.",
    categoryName: "ropa-mujer",
  },
  {
    name: "CAMISA OVERSIZE RÚSTICA",
    price: 179900,
    images: [
      "https://static.pullandbear.net/2/photos//2023/I/0/1/p/7473/326/500/7473326500_2_1_8.jpg?t=1685702358160&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/1/p/7473/326/500/7473326500_2_2_8.jpg?t=1685702320597&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/1/p/7473/326/500/7473326500_2_3_8.jpg?t=1685702385720&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/1/p/7473/326/500/7473326500_2_4_8.jpg?t=1685702329361&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/1/p/7473/326/500/7473326500_2_6_8.jpg?t=1685702305270&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/1/p/7473/326/500/7473326500_2_8_8.jpg?t=1685702391649&imwidth=750",
    ],
    description:
      "Camisa oversize estilo rústico, con cuello clásico, cierre de botones, manga larga y confeccionada en tejido de 100% algodón.",
    categoryName: "ropa-mujer",
  },
  {
    name: "VESTIDO CORTO TIRANTES CANALÉ",
    price: 79900,
    images: [
      "https://static.pullandbear.net/2/photos//2023/I/0/1/p/7392/240/600/7392240600_2_1_8.jpg?t=1694766527399&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/1/p/7392/240/600/7392240600_2_2_8.jpg?t=1694766527399&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/1/p/7392/240/600/7392240600_2_3_8.jpg?t=1694766527399&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/1/p/7392/240/600/7392240600_2_4_8.jpg?t=1694766527399&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/1/p/7392/240/600/7392240600_2_6_8.jpg?t=1694418357945&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/1/p/7392/240/600/7392240600_2_8_8.jpg?t=1694418357945&imwidth=750",
    ],
    description:
      "Vestido corto con tirantes finos y silueta ajustada, confeccionado en tejido de canalé ligeramente elástico.",
    categoryName: "ropa-mujer",
  },
  {
    name: "MONO LARGO CUT OUT",
    price: 179900,
    images: [
      "https://static.pullandbear.net/2/photos//2023/I/0/1/p/7639/316/800/7639316800_2_1_8.jpg?t=1691403470669&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/1/p/7639/316/800/7639316800_2_2_8.jpg?t=1686753826076&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/1/p/7639/316/800/7639316800_2_3_8.jpg?t=1691403470669&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/1/p/7639/316/800/7639316800_2_4_8.jpg?t=1691403470669&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/1/p/7639/316/800/7639316800_2_6_8.jpg?t=1686297671644&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/1/p/7639/316/800/7639316800_2_8_8.jpg?t=1686297671644&imwidth=750",
    ],
    description:
      "Mono largo con detalle de cut out lateral, escote en pico, tirante fino y confeccionado en tejido ligeramente elástico.",
    categoryName: "ropa-mujer",
  },
  {
    name: "VESTIDO MIDI CANALÉ TIRANTES",
    price: 99900,
    images: [
      "https://static.pullandbear.net/2/photos//2023/I/0/1/p/7392/339/613/7392339613_2_1_8.jpg?t=1689766061522&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/1/p/7392/339/613/7392339613_2_2_8.jpg?t=1689766070656&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/1/p/7392/339/613/7392339613_2_3_8.jpg?t=1689766066938&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/1/p/7392/339/613/7392339613_2_4_8.jpg?t=1689766056941&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/1/p/7392/339/613/7392339613_2_6_8.jpg?t=1685029760690&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/1/p/7392/339/613/7392339613_2_8_8.jpg?t=1685029760690&imwidth=750",
    ],
    description:
      "Vestido midi de canalé y tirantes confeccionado en tejido ligeramente elástico y disponible en varios colores.",
    categoryName: "ropa-mujer",
  },
  {
    name: "VESTIDO MIDI EFECTO PIEL",
    price: 229900,
    images: [
      "https://static.pullandbear.net/2/photos//2023/I/0/1/p/7393/407/800/7393407800_2_1_8.jpg?t=1695292477303&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/1/p/7393/407/800/7393407800_2_2_8.jpg?t=1695292477303&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/1/p/7393/407/800/7393407800_2_3_8.jpg?t=1695292477303&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/1/p/7393/407/800/7393407800_2_4_8.jpg?t=1695292477303&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/1/p/7393/407/800/7393407800_2_6_8.jpg?t=1691507460352&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/1/p/7393/407/800/7393407800_2_8_8.jpg?t=1691507460352&imwidth=750",
    ],
    description:
      "Vestido midi efecto piel palabra de honor con silueta ajustada.",
    categoryName: "ropa-mujer",
  },
  {
    name: "BAMBA RETRO CONTRASTE",
    price: 169900,
    images: [
      "https://static.pullandbear.net/2/photos//2023/I/1/2/p/2214/240/002/2214240002_2_1_8.jpg?t=1691480781894&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/1/2/p/2214/240/002/2214240002_2_10_8.jpg?t=1687422004280&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/1/2/p/2214/240/002/2214240002_2_2_8.jpg?t=1691480781894&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/1/2/p/2214/240/002/2214240002_2_3_8.jpg?t=1686565506005&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/1/2/p/2214/240/002/2214240002_2_4_8.jpg?t=1686565506005&imwidth=750",
    ],
    description:
      "Zapatillas deportivas tipo bamba, disponibles en varios colores. Detalles a contraste. Cierre mediante cordones.",
    categoryName: "zapatos-hombre",
  },
  {
    name: "BAMBA URBAN DETALLE",
    price: 149900,
    images: [
      "https://static.pullandbear.net/2/photos//2023/I/1/2/p/2216/240/004/2216240004_2_1_8.jpg?t=1691480816200&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/1/2/p/2216/240/004/2216240004_2_10_8.jpg?t=1694525104975&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/1/2/p/2216/240/004/2216240004_2_2_8.jpg?t=1691480816200&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/1/2/p/2216/240/004/2216240004_2_3_8.jpg?t=1687963812095&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/1/2/p/2216/240/004/2216240004_2_4_8.jpg?t=1687963812095&imwidth=750",
    ],
    description:
      "Bamba básica estilo urban, disponible en varios colores. Detalle de piezas en diferentes colores. Cierre mediante cordones.",
    categoryName: "zapatos-hombre",
  },
  {
    name: "ZAPATILLAS DEPORTIVAS RUNNING",
    price: 149900,
    images: [
      "https://static.pullandbear.net/2/photos//2023/I/1/2/p/2303/040/040/2303040040_2_1_8.jpg?t=1691480829750&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/1/2/p/2303/040/040/2303040040_2_10_8.jpg?t=1673446624868&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/1/2/p/2303/040/040/2303040040_2_2_8.jpg?t=1691480829750&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/1/2/p/2303/040/040/2303040040_2_3_8.jpg?t=1678982952164&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/1/2/p/2303/040/040/2303040040_2_4_8.jpg?t=1678982952164&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/1/2/p/2303/040/040/2303040040_2_5_8.jpg?t=1678982952164&imwidth=750",
    ],
    description:
      "Zapatillas deportivas tipo running, disponibles en varios colores. En combinación de materiales. Tirador en la talonera. Cierre mediante cordones. Detalle de suela con relieves.",
    categoryName: "zapatos-hombre",
  },
  {
    name: "ZAPATILLAS DEPORTIVAS COMBINADAS",
    price: 129900,
    images: [
      "https://static.pullandbear.net/2/photos//2023/V/1/2/p/2303/140/002/2303140002_2_1_8.jpg?t=1669106445770&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/V/1/2/p/2303/140/002/2303140002_2_2_8.jpg?t=1669106445770&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/V/1/2/p/2303/140/002/2303140002_2_3_8.jpg?t=1669106445770&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/V/1/2/p/2303/140/002/2303140002_2_4_8.jpg?t=1669106445770&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/V/1/2/p/2303/140/002/2303140002_2_5_8.jpg?t=1669106445770&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/V/1/2/p/2303/140/002/2303140002_2_6_8.jpg?t=1669106445770&imwidth=750",
    ],
    description:
      "Zapatillas deportivas en combinación de materiales y colores en el corte. Cierre mediante cordones. Suela dentada. STARFIT®. Plantilla técnica flexible de espuma compuesta de poliuretano, diseñada para ofrecer un mayor confort.",
    categoryName: "zapatos-hombre",
  },
  {
    name: "BOTINES CHELSEA",
    price: 249000,
    images: [
      "https://static.pullandbear.net/2/photos//2023/I/1/1/p/1009/240/100/1009240100_2_1_8.jpg?t=1692278236607&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/1/1/p/1009/240/100/1009240100_2_2_8.jpg?t=1692278236607&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/1/1/p/1009/240/100/1009240100_2_3_8.jpg?t=1692278236607&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/1/1/p/1009/240/100/1009240100_2_4_8.jpg?t=1692278236607&imwidth=750",
    ],
    description:
      "Botín plano estilo chelsea con tirador en la parte trasera y punta redondeada",
    categoryName: "zapatos-mujer",
  },
  {
    name: "BOTINES BIKER",
    price: 299000,
    images: [
      "https://static.pullandbear.net/2/photos//2023/I/1/1/p/1002/240/040/1002240040_2_1_8.jpg?t=1691485040961&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/1/1/p/1002/240/040/1002240040_2_11_8.jpg?t=1692287232380&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/1/1/p/1002/240/040/1002240040_2_2_8.jpg?t=1691485040961&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/1/1/p/1002/240/040/1002240040_2_3_8.jpg?t=1691485040961&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/1/1/p/1002/240/040/1002240040_2_4_8.jpg?t=1691485040961&imwidth=750",
    ],
    description:
      "Botín plano estilo biker, disponible en color negro. Detalle de hebillas en la caña. Suela tipo track. AIRFIT®. Plantilla técnica flexible de espuma compuesta de látex, diseñada para ofrecer un mayor confort.",
    categoryName: "zapatos-mujer",
  },
  {
    name: "BAMBA TIRAS",
    price: 129900,
    images: [
      "https://static.pullandbear.net/2/photos//2023/I/1/1/p/1312/140/203/1312140203_2_1_8.jpg?t=1691654435513&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/1/1/p/1312/140/203/1312140203_2_2_8.jpg?t=1691654435513&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/1/1/p/1312/140/203/1312140203_2_3_8.jpg?t=1685349141440&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/1/1/p/1312/140/203/1312140203_2_4_8.jpg?t=1685349141440&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/1/1/p/1312/140/203/1312140203_2_5_8.jpg?t=1685349141440&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/1/1/p/1312/140/203/1312140203_2_6_8.jpg?t=1689235245414&imwidth=750",
    ],
    description:
      "Zapatilla casual blanca y detalle trasero. Cierre mediante tiras adherentes ajustables.",
    categoryName: "zapatos-mujer",
  },
  {
    name: "BAMBA RETRO",
    price: 169900,
    images: [
      "https://static.pullandbear.net/2/photos//2023/I/1/1/p/1306/240/001/1306240001_2_1_8.jpg?t=1694513714620&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/1/1/p/1306/240/001/1306240001_2_10_8.jpg?t=1694775976134&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/1/1/p/1306/240/001/1306240001_2_2_8.jpg?t=1694513714620&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/1/1/p/1306/240/001/1306240001_2_3_8.jpg?t=1694513714620&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/1/1/p/1306/240/001/1306240001_2_4_8.jpg?t=1694513714620&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/1/1/p/1306/240/001/1306240001_2_5_8.jpg?t=1694513714620&imwidth=750",
    ],
    description:
      "Zapatillas tipo bamba de estilo retro, disponible en varios colores. Detalles a contraste. Suela engomada. Cierre mediante cordones. STARFIT®. Plantilla técnica flexible de espuma compuesta de poliuretano, diseñada para ofrecer un mayor confort.",
    categoryName: "zapatos-mujer",
  },
  {
    name: "MOCHILA CITY",
    price: 229000,
    images: [
      "https://static.pullandbear.net/2/photos//2023/I/1/2/p/5013/140/040/5013140040_2_1_8.jpg?t=1674052031259&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/1/2/p/5013/140/040/5013140040_2_10_8.jpg?t=1674735570559&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/1/2/p/5013/140/040/5013140040_2_2_8.jpg?t=1674052031259&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/1/2/p/5013/140/040/5013140040_2_3_8.jpg?t=1674052031259&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/1/2/p/5013/140/040/5013140040_2_4_8.jpg?t=1674052031259&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/1/2/p/5013/140/040/5013140040_2_5_8.jpg?t=1674052031259&imwidth=750",
    ],
    description:
      "Mochila engomada disponible en varios colores. Corte soft. Cierre mediante cremallera. Detalle de bolsillos laterales en la parte externa y bolsillo con cremallera en la parte interna. La parte superior se dobla hacia delante y se ajusta mediante cierre de clip. Asa corta de mano y asas de hombro ajustables.",
    categoryName: "accesorios",
  },
  {
    name: "RIÑONERA STWD",
    price: 99900,
    images: [
      "https://static.pullandbear.net/2/photos//2023/I/1/2/p/5005/140/040/5005140040_2_1_8.jpg?t=1674556813290&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/1/2/p/5005/140/040/5005140040_2_10_8.jpg?t=1687790352177&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/1/2/p/5005/140/040/5005140040_2_2_8.jpg?t=1674556813290&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/1/2/p/5005/140/040/5005140040_2_3_8.jpg?t=1674556813290&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/1/2/p/5005/140/040/5005140040_2_4_8.jpg?t=1674556813290&imwidth=750",
    ],
    description:
      "Bolso tipo riñonera STWD disponible en varios colores. Construcción soft con corte en nylon. Detalle de bolsillo delantero. Cierre mediante cremallera. Asa larga ajustable.",
    categoryName: "accesorios",
  },
  {
    name: "BANDOLERA ENGOMADA",
    price: 109900,
    images: [
      "https://static.pullandbear.net/2/photos//2023/I/1/2/p/5033/240/004/5033240004_2_1_8.jpg?t=1692001206395&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/1/2/p/5033/240/004/5033240004_2_2_8.jpg?t=1692001206395&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/1/2/p/5033/240/004/5033240004_2_3_8.jpg?t=1692001206395&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/1/2/p/5033/240/004/5033240004_2_4_8.jpg?t=1692001206395&imwidth=750",
    ],
    description:
      "Bandolera en tejido engomado, disponible en varios colores. Detalle de bolsillo con cremallera delantera. Cierre mediante cremallera.",
    categoryName: "accesorios",
  },
  {
    name: "VESTIDO LARGO ESPALDA DESCUBIERTA",
    price: 129900,
    images: [
      "https://static.pullandbear.net/2/photos//2023/I/0/1/p/7395/389/438/7395389438_2_2_8.jpg?t=1693911472579&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/1/p/7395/389/438/7395389438_2_3_8.jpg?t=1693911472579&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/1/p/7395/389/438/7395389438_2_4_8.jpg?t=1693911472579&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/1/p/7395/389/438/7395389438_2_6_8.jpg?t=1693496993188&imwidth=750",
      "https://static.pullandbear.net/2/photos//2023/I/0/1/p/7395/389/438/7395389438_2_8_8.jpg?t=1693496993188&imwidth=750",
    ],
    description:
      "Vestido largo de manga sisa con espalda descubierta, cuello redondo y confeccionado en poliamida.",
    categoryName: "ropa-mujer",
  },
];

const loadProducts = async () => {
  try {
    const productCount = await Product.count();

    if (productCount <= 0) {
      for (producData in data) {
        product = data[producData];
        const categoriesId = await Category.findOne({
          where: {
            name: product.categoryName,
          },
        });
        console.log(product.categoryName, categoriesId.dataValues.id);
        const producDataWithCategoriesId = {
          ...product,
          categoriesId: categoriesId.dataValues.id,
        };
        await Product.create(producDataWithCategoriesId);
      }
      console.log("Productos cargados correctamente");
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = loadProducts;
