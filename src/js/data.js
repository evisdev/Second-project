const itemTypes = ["paint", "sculpture", "digital", "custom", "painting"];

const items = [
  {
    id: 1,
    title: "Silent Echoes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    type: "paint",
    image:
      "https://www.pexels.com/photo/photo-of-multicolored-abstract-paint-1193743/",
    price: 1315,
    artist: "Leanne Graham",
    dateCreated: "2023-08-09T02:00:48.989Z",
    isPublished: false,

    dateSold: "2023-08-11T02:00:48.989Z",
    priceSold: 2030,
  },
  {
    id: 2,
    title: "Whispers of Color",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    type: "sculpture",
    image:
      "https://www.pexels.com/photo/photo-of-multicolored-abstract-paint-1193743/",
    price: 530,
    artist: "Ervin Howell",
    dateCreated: "2023-08-14T02:00:48.989Z",
    isPublished: false,

    dateSold: "2023-08-14T02:00:48.989Z",
    priceSold: 350,
  },
  {
    id: 3,
    title: "Nature's Palette",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    type: "digital",
    image:
      "https://www.pexels.com/photo/photo-of-multicolored-abstract-paint-1193743/",
    price: 495,
    artist: "Clementine Bauch",
    dateCreated: "2023-08-11T02:00:48.989Z",
    isPublished: false,

    dateSold: "2023-08-14T02:00:48.989Z",
    priceSold: 2810,
  },
  {
    id: 4,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    image:
      "https://www.pexels.com/photo/orange-red-and-green-abstract-paint-1585325/",
    price: 1290,
    artist: "Patricia Lebsack",
    dateCreated: "2023-08-14T02:00:48.989Z",
    isPublished: false,

    dateSold: "2023-08-14T02:00:48.989Z",
    priceSold: 4840,
    title: "Dancing Shadows",
    type: "custom",
  },
  {
    id: 5,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    image:
      "https://www.pexels.com/photo/orange-red-and-green-abstract-paint-1585325/",
    price: 1480,
    artist: "Chelsey Dietrich",
    dateCreated: "2023-08-01T02:00:48.989Z",
    isPublished: false,

    dateSold: "2023-08-14T02:00:48.989Z",
    priceSold: 14730,
    title: "Silent Echoes",
    type: "paint",
  },
  {
    id: 6,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    image:
      "https://www.pexels.com/photo/orange-red-and-green-abstract-paint-1585325/",
    price: 1305,
    artist: "Mrs. Dennis Schulist",
    dateCreated: "2023-08-30T02:00:48.989Z",
    isPublished: false,

    dateSold: "2023-08-11T02:00:48.989Z",
    priceSold: 2935,
    title: "Whispers of Color",
    type: "sculpture",
  },
  {
    id: 7,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    image:
      "https://www.pexels.com/photo/orange-red-and-green-abstract-paint-1585325/",
    price: 50,
    artist: "Kurtis Weissnat",
    dateCreated: "2023-08-02T02:00:48.989Z",
    isPublished: false,

    dateSold: "2023-08-08T02:00:48.990Z",
    priceSold: 75,
    title: "Nature's Palette",
    type: "digital",
  },
  {
    id: 8,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    image:
      "https://www.pexels.com/photo/orange-red-and-green-abstract-paint-1585325/",
    price: 1095,
    artist: "Nicholas Runolfsdottir V",
    dateCreated: "2023-08-11T02:00:48.990Z",
    isPublished: false,

    dateSold: "2023-08-14T02:00:48.990Z",
    priceSold: 3465,
    title: "Dancing Shadows",
    type: "custom",
  },
  {
    id: 9,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    image:
      "https://www.pexels.com/photo/orange-red-and-green-abstract-paint-1585325/",
    price: 600,
    artist: "Glenna Reichert",
    dateCreated: "2023-08-14T02:00:48.990Z",
    isPublished: false,

    dateSold: "2023-08-14T02:00:48.990Z",
    priceSold: 4220,
    title: "Silent Echoes",
    type: "paint",
  },
  {
    id: 10,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    image:
      "https://www.pexels.com/photo/orange-red-and-green-abstract-paint-1585325/",
    price: 855,
    artist: "Clementina DuBuque",
    dateCreated: "2023-08-04T02:00:48.990Z",
    isPublished: true,

    dateSold: "2023-08-14T02:00:48.990Z",
    priceSold: 4540,
    title: "Whispers of Color",
    type: "sculpture",
  },
  {
    id: 11,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    image:
      "https://www.pexels.com/photo/orange-red-and-green-abstract-paint-1585325/",
    price: 670,
    artist: "Leanne Graham",
    dateCreated: "2023-08-11T02:00:48.990Z",
    isPublished: true,
    dateSold: "2023-08-14T02:00:48.990Z",
    priceSold: 1940,
    title: "Nature's Palette",
    type: "digital",
  },
  {
    id: 12,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    image: "https://www.pexels.com/photo/brown-wooden-planks-889839/",
    price: 975,
    artist: "Ervin Howell",
    dateCreated: "2023-08-14T02:00:48.990Z",
    isPublished: true,

    dateSold: "2023-08-14T02:00:48.990Z",
    priceSold: 1165,
    title: "Dancing Shadows",
    type: "custom",
  },
  {
    id: 13,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    image:
      "https://www.pexels.com/photo/female-character-illustration-2525483/",
    price: 1480,
    artist: "Clementine Bauch",
    dateCreated: "2023-08-06T02:00:48.990Z",
    isPublished: true,

    dateSold: "2023-08-14T02:00:48.990Z",
    priceSold: 8270,
    title: "Silent Echoes",
    type: "paint",
  },
  {
    id: 14,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    image: "https://www.pexels.com/photo/brown-wooden-planks-889839/",
    price: 995,
    artist: "Patricia Lebsack",
    dateCreated: "2023-08-11T02:00:48.990Z",
    isPublished: true,

    dateSold: "2023-08-14T02:00:48.990Z",
    priceSold: 6630,
    title: "Whispers of Color",
    type: "sculpture",
  },
  {
    id: 15,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    image: "https://www.pexels.com/photo/brown-wooden-planks-889839/",
    price: 810,
    artist: "Chelsey Dietrich",
    dateCreated: "2023-08-02T02:00:48.990Z",
    isPublished: true,

    dateSold: "2023-08-11T02:00:48.990Z",
    priceSold: 840,
    title: "Nature's Palette",
    type: "digital",
  },
  {
    id: 16,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    image: "https://www.pexels.com/photo/brown-wooden-planks-889839/",
    price: 570,
    artist: "Mrs. Dennis Schulist",
    dateCreated: "2023-08-11T02:00:48.990Z",
    isPublished: true,

    dateSold: "2023-08-14T02:00:48.990Z",
    priceSold: 3660,
    title: "Dancing Shadows",
    type: "custom",
  },
  {
    id: 17,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    image: "https://www.pexels.com/photo/brown-wooden-planks-889839/",
    price: 105,
    artist: "Kurtis Weissnat",
    dateCreated: "2023-08-14T02:00:48.990Z",
    isPublished: true,

    dateSold: "2023-08-14T02:00:48.990Z",
    priceSold: 765,
    title: "Silent Echoes",
    type: "paint",
  },
  {
    id: 18,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    image:
      "https://www.pexels.com/photo/female-character-illustration-2525483/",
    price: 1270,
    artist: "Nicholas Runolfsdottir V",
    dateCreated: "2023-08-14T02:00:48.990Z",
    isPublished: true,

    dateSold: "2023-08-14T02:00:48.990Z",
    priceSold: 1500,
    title: "Whispers of Color",
    type: "sculpture",
  },
  {
    id: 19,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    image:
      "https://www.pexels.com/photo/female-character-illustration-2525483/",
    price: 1050,
    artist: "Glenna Reichert",
    dateCreated: "2023-08-11T02:00:48.990Z",
    isPublished: true,

    dateSold: "2023-08-14T02:00:48.990Z",
    priceSold: 3675,
    title: "Nature's Palette",
    type: "digital",
  },
  {
    id: 20,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    image:
      "https://www.pexels.com/photo/female-character-illustration-2525483/",
    price: 1430,
    artist: "Clementina DuBuque",
    dateCreated: "2023-08-11T02:00:48.990Z",
    isPublished: true,

    dateSold: "2023-08-11T02:00:48.990Z",
    priceSold: 1305,
    title: "Dancing Shadows",
    type: "custom",
  },
  {
    id: 21,
    title: "Silent Echoes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    type: "paint",
    image:
      "https://www.pexels.com/photo/photo-of-multicolored-abstract-paint-1193743/",
    price: 525,
    artist: "Leanne Graham",
    dateCreated: "2023-08-11T02:00:48.990Z",
    isPublished: true,

    dateSold: "2023-08-14T02:00:48.990Z",
    priceSold: 5225,
  },
  {
    id: 22,
    title: "Whispers of Color",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    type: "sculpture",
    image:
      "https://www.pexels.com/photo/photo-of-multicolored-abstract-paint-1193743/",
    price: 130,
    artist: "Ervin Howell",
    dateCreated: "2023-08-14T02:00:48.990Z",
    isPublished: true,

    dateSold: "2023-08-14T02:00:48.990Z",
    priceSold: 160,
  },
  {
    id: 23,
    title: "Nature's Palette",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    type: "digital",
    image:
      "https://www.pexels.com/photo/photo-of-multicolored-abstract-paint-1193743/",
    price: 985,
    artist: "Clementine Bauch",
    dateCreated: "2023-08-08T02:00:48.990Z",
    isPublished: true,

    dateSold: "2023-08-11T02:00:48.990Z",
    priceSold: 880,
  },
  {
    id: 24,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    image:
      "https://www.pexels.com/photo/orange-red-and-green-abstract-paint-1585325/",
    price: 740,
    artist: "Patricia Lebsack",
    dateCreated: "2023-08-11T02:00:48.990Z",
    isPublished: true,

    dateSold: "2023-08-14T02:00:48.990Z",
    priceSold: 825,
    title: "Dancing Shadows",
    type: "custom",
  },
  {
    id: 25,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    image:
      "https://www.pexels.com/photo/orange-red-and-green-abstract-paint-1585325/",
    price: 610,
    artist: "Chelsey Dietrich",
    dateCreated: "2023-08-14T02:00:48.990Z",
    isPublished: true,

    dateSold: "2023-08-14T02:00:48.990Z",
    priceSold: 2255,
    title: "Silent Echoes",
    type: "paint",
  },
  {
    id: 26,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    image:
      "https://www.pexels.com/photo/orange-red-and-green-abstract-paint-1585325/",
    price: 970,
    artist: "Mrs. Dennis Schulist",
    dateCreated: "2023-08-11T02:00:48.990Z",
    isPublished: true,

    dateSold: "2023-08-14T02:00:48.990Z",
    priceSold: 5225,
    title: "Whispers of Color",
    type: "sculpture",
  },
  {
    id: 27,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    image:
      "https://www.pexels.com/photo/orange-red-and-green-abstract-paint-1585325/",
    price: 695,
    artist: "Kurtis Weissnat",
    dateCreated: "2023-08-01T02:00:48.990Z",
    isPublished: true,

    dateSold: "2023-08-07T02:00:48.990Z",
    priceSold: 390,
    title: "Nature's Palette",
    type: "digital",
  },
  {
    id: 28,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    image:
      "https://www.pexels.com/photo/orange-red-and-green-abstract-paint-1585325/",
    price: 65,
    artist: "Nicholas Runolfsdottir V",
    dateCreated: "2023-08-03T02:00:48.990Z",
    isPublished: true,

    dateSold: "2023-08-14T02:00:48.990Z",
    priceSold: 175,
    title: "Dancing Shadows",
    type: "custom",
  },
  {
    id: 29,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    image:
      "https://www.pexels.com/photo/orange-red-and-green-abstract-paint-1585325/",
    price: 905,
    artist: "Glenna Reichert",
    dateCreated: "2023-08-09T02:00:48.990Z",
    isPublished: true,

    dateSold: "2023-08-11T02:00:48.990Z",
    priceSold: 3740,
    title: "Silent Echoes",
    type: "paint",
  },
  {
    id: 30,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    image:
      "https://www.pexels.com/photo/orange-red-and-green-abstract-paint-1585325/",
    price: 1025,
    artist: "Clementina DuBuque",
    dateCreated: "2023-08-14T02:00:48.990Z",
    isPublished: true,

    dateSold: "2023-08-14T02:00:48.990Z",
    priceSold: 1670,
    title: "Whispers of Color",
    type: "sculpture",
  },
  {
    id: 31,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    image:
      "https://www.pexels.com/photo/orange-red-and-green-abstract-paint-1585325/",
    price: 380,
    artist: "Leanne Graham",
    dateCreated: "2023-08-11T02:00:48.990Z",
    isPublished: true,

    dateSold: "2023-08-11T02:00:48.990Z",
    priceSold: 2420,
    title: "Nature's Palette",
    type: "digital",
  },
  {
    id: 32,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    image: "https://www.pexels.com/photo/brown-wooden-planks-889839/",
    price: 1375,
    artist: "Ervin Howell",
    dateCreated: "2023-08-14T02:00:48.990Z",
    isPublished: true,

    dateSold: "2023-08-14T02:00:48.990Z",
    priceSold: 5010,
    title: "Dancing Shadows",
    type: "custom",
  },
  {
    id: 33,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    image:
      "https://www.pexels.com/photo/female-character-illustration-2525483/",
    price: 1175,
    artist: "Clementine Bauch",
    dateCreated: "2023-08-11T02:00:48.990Z",
    isPublished: true,

    dateSold: "2023-08-14T02:00:48.990Z",
    priceSold: 1630,
    title: "Silent Echoes",
    type: "paint",
  },
  {
    id: 34,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    image: "https://www.pexels.com/photo/brown-wooden-planks-889839/",
    price: 1370,
    artist: "Patricia Lebsack",
    dateCreated: "2023-08-14T02:00:48.990Z",
    isPublished: true,

    dateSold: "2023-08-14T02:00:48.990Z",
    priceSold: 3655,
    title: "Whispers of Color",
    type: "sculpture",
  },
  {
    id: 35,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    image: "https://www.pexels.com/photo/brown-wooden-planks-889839/",
    price: 395,
    artist: "Chelsey Dietrich",
    dateCreated: "2023-08-03T02:00:48.990Z",
    isPublished: true,

    dateSold: "2023-08-11T02:00:48.990Z",
    priceSold: 2190,
    title: "Nature's Palette",
    type: "digital",
  },
  {
    id: 36,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    image: "https://www.pexels.com/photo/brown-wooden-planks-889839/",
    price: 1345,
    artist: "Mrs. Dennis Schulist",
    dateCreated: "2023-08-01T02:00:48.990Z",
    isPublished: true,

    dateSold: "2023-08-11T02:00:48.990Z",
    priceSold: 10595,
    title: "Dancing Shadows",
    type: "custom",
  },
  {
    id: 37,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    image: "https://www.pexels.com/photo/brown-wooden-planks-889839/",
    price: 955,
    artist: "Kurtis Weissnat",
    dateCreated: "2023-08-14T02:00:48.990Z",
    isPublished: true,

    dateSold: "2023-08-14T02:00:48.990Z",
    priceSold: 1210,
    title: "Silent Echoes",
    type: "paint",
  },
  {
    id: 38,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    image:
      "https://www.pexels.com/photo/female-character-illustration-2525483/",
    price: 930,
    artist: "Nicholas Runolfsdottir V",
    dateCreated: "2023-08-11T02:00:48.990Z",
    isPublished: true,

    dateSold: "2023-08-14T02:00:48.990Z",
    priceSold: 3220,
    title: "Whispers of Color",
    type: "sculpture",
  },
  {
    id: 39,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    image:
      "https://www.pexels.com/photo/female-character-illustration-2525483/",
    price: 755,
    artist: "Glenna Reichert",
    dateCreated: "2023-08-03T02:00:48.990Z",
    isPublished: true,

    dateSold: "2023-08-14T02:00:48.990Z",
    priceSold: 1105,
    title: "Nature's Palette",
    type: "digital",
  },
  {
    id: 40,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    image:
      "https://www.pexels.com/photo/female-character-illustration-2525483/",
    price: 745,
    artist: "Clementina DuBuque",
    dateCreated: "2023-08-11T02:00:48.990Z",
    isPublished: true,

    dateSold: "2023-08-11T02:00:48.990Z",
    priceSold: 2340,
    title: "Dancing Shadows",
    type: "custom",
  },
  {
    id: 41,
    title: "Silent Echoes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    type: "paint",
    image:
      "https://www.pexels.com/photo/photo-of-multicolored-abstract-paint-1193743/",
    price: 1095,
    artist: "Leanne Graham",
    dateCreated: "2023-08-03T02:00:48.990Z",
    isPublished: true,

    dateSold: "2023-08-04T02:00:48.990Z",
    priceSold: 5340,
  },
  {
    id: 42,
    title: "Whispers of Color",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    type: "sculpture",
    image:
      "https://www.pexels.com/photo/photo-of-multicolored-abstract-paint-1193743/",
    price: 635,
    artist: "Ervin Howell",
    dateCreated: "2023-08-11T02:00:48.990Z",
    isPublished: true,

    dateSold: "2023-08-11T02:00:48.990Z",
    priceSold: 1550,
  },
  {
    id: 43,
    title: "Nature's Palette",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    type: "digital",
    image:
      "https://www.pexels.com/photo/photo-of-multicolored-abstract-paint-1193743/",
    price: 165,
    artist: "Clementine Bauch",
    dateCreated: "2023-08-11T02:00:48.990Z",
    isPublished: true,

    dateSold: "2023-08-11T02:00:48.990Z",
    priceSold: 1060,
  },
  {
    id: 44,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    image:
      "https://www.pexels.com/photo/orange-red-and-green-abstract-paint-1585325/",
    price: 115,
    artist: "Patricia Lebsack",
    dateCreated: "2023-08-14T02:00:48.990Z",
    isPublished: true,

    dateSold: "2023-08-14T02:00:48.990Z",
    priceSold: 755,
    title: "Dancing Shadows",
    type: "custom",
  },
  {
    id: 45,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    image:
      "https://www.pexels.com/photo/orange-red-and-green-abstract-paint-1585325/",
    price: 205,
    artist: "Chelsey Dietrich",
    dateCreated: "2023-08-11T02:00:48.990Z",
    isPublished: true,

    dateSold: "2023-08-11T02:00:48.990Z",
    priceSold: 870,
    title: "Silent Echoes",
    type: "paint",
  },
  {
    id: 46,
    description:
      "https://www.pexels.com/photo/orange-red-and-green-abstract-paint-1585325/psum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    image: "",
    price: 1390,
    artist: "Mrs. Dennis Schulist",
    dateCreated: "2023-08-07T02:00:48.990Z",
    isPublished: true,

    dateSold: "2023-08-11T02:00:48.990Z",
    priceSold: 8125,
    title: "Whispers of Color",
    type: "sculpture",
  },
  {
    id: 47,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    image:
      "https://www.pexels.com/photo/orange-red-and-green-abstract-paint-1585325/",
    price: 600,
    artist: "Kurtis Weissnat",
    dateCreated: "2023-08-11T02:00:48.990Z",
    isPublished: true,

    dateSold: "2023-08-14T02:00:48.990Z",
    priceSold: 935,
    title: "Nature's Palette",
    type: "digital",
  },
  {
    id: 48,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    image:
      "https://www.pexels.com/photo/orange-red-and-green-abstract-paint-1585325/",
    price: 1330,
    artist: "Nicholas Runolfsdottir V",
    dateCreated: "2023-08-11T02:00:48.990Z",
    isPublished: true,

    dateSold: "2023-08-14T02:00:48.990Z",
    priceSold: 2320,
    title: "Dancing Shadows",
    type: "custom",
  },
  {
    id: 49,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    image:
      "https://www.pexels.com/photo/orange-red-and-green-abstract-paint-1585325/",
    price: 1430,
    artist: "Glenna Reichert",
    dateCreated: "2023-08-14T02:00:48.990Z",
    isPublished: true,

    dateSold: "2023-08-14T02:00:48.990Z",
    priceSold: 4115,
    title: "Silent Echoes",
    type: "paint",
  },
  {
    id: 50,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    image:
      "https://www.pexels.com/photo/orange-red-and-green-abstract-paint-1585325/",
    price: 440,
    artist: "Clementina DuBuque",
    dateCreated: "2023-08-11T02:00:48.990Z",
    isPublished: true,

    dateSold: "2023-08-14T02:00:48.990Z",
    priceSold: 3535,
    title: "Whispers of Color",
    type: "sculpture",
  },
  {
    id: 51,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    image:
      "https://www.pexels.com/photo/orange-red-and-green-abstract-paint-1585325/",
    price: 455,
    artist: "Leanne Graham",
    dateCreated: "2023-08-11T02:00:48.990Z",
    isPublished: true,

    dateSold: "2023-08-14T02:00:48.990Z",
    priceSold: 840,
    title: "Nature's Palette",
    type: "digital",
  },
  {
    id: 52,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    image: "https://www.pexels.com/photo/brown-wooden-planks-889839/",
    price: 90,
    artist: "Ervin Howell",
    dateCreated: "2023-08-11T02:00:48.990Z",
    isPublished: true,

    dateSold: "2023-08-14T02:00:48.990Z",
    priceSold: 115,
    title: "Dancing Shadows",
    type: "custom",
  },
  {
    id: 53,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    image:
      "https://www.pexels.com/photo/female-character-illustration-2525483/",
    price: 545,
    artist: "Clementine Bauch",
    dateCreated: "2023-08-11T02:00:48.990Z",
    isPublished: true,

    dateSold: "2023-08-14T02:00:48.990Z",
    priceSold: 1620,
    title: "Silent Echoes",
    type: "paint",
  },
  {
    id: 54,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    image: "https://www.pexels.com/photo/brown-wooden-planks-889839/",
    price: 510,
    artist: "Patricia Lebsack",
    dateCreated: "2023-08-02T02:00:48.990Z",
    isPublished: true,

    dateSold: "2023-08-14T02:00:48.990Z",
    priceSold: 5490,
    title: "Whispers of Color",
    type: "sculpture",
  },
  {
    id: 55,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    image: "https://www.pexels.com/photo/brown-wooden-planks-889839/",
    price: 395,
    artist: "Chelsey Dietrich",
    dateCreated: "2023-08-11T02:00:48.990Z",
    isPublished: true,

    dateSold: "2023-08-14T02:00:48.990Z",
    priceSold: 1180,
    title: "Nature's Palette",
    type: "digital",
  },
  {
    id: 56,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    image: "https://www.pexels.com/photo/brown-wooden-planks-889839/",
    price: 670,
    artist: "Mrs. Dennis Schulist",
    dateCreated: "2023-08-14T02:00:48.990Z",
    isPublished: true,

    dateSold: "2023-08-14T02:00:48.990Z",
    priceSold: 1935,
    title: "Dancing Shadows",
    type: "custom",
  },
  {
    id: 57,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    image: "https://www.pexels.com/photo/brown-wooden-planks-889839/",
    price: 660,
    artist: "Kurtis Weissnat",
    dateCreated: "2023-08-04T02:00:48.990Z",
    isPublished: true,

    dateSold: "2023-08-07T02:00:48.990Z",
    priceSold: 525,
    title: "Silent Echoes",
    type: "paint",
  },
  {
    id: 58,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    image:
      "https://www.pexels.com/photo/female-character-illustration-2525483/",
    price: 1385,
    artist: "Nicholas Runolfsdottir V",
    dateCreated: "2023-08-11T02:00:48.990Z",
    isPublished: true,

    dateSold: "2023-08-14T02:00:48.990Z",
    priceSold: 1565,
    title: "Whispers of Color",
    type: "sculpture",
  },
  {
    id: 59,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    image:
      "https://www.pexels.com/photo/female-character-illustration-2525483/",
    price: 1395,
    artist: "Glenna Reichert",
    dateCreated: "2023-08-11T02:00:48.990Z",
    isPublished: true,

    dateSold: "2023-08-11T02:00:48.990Z",
    priceSold: 10640,
    title: "Nature's Palette",
    type: "digital",
  },
  {
    id: 60,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    image:
      "https://www.pexels.com/photo/female-character-illustration-2525483/",
    price: 475,
    artist: "Clementina DuBuque",
    dateCreated: "2023-08-07T02:00:48.990Z",
    isPublished: true,

    dateSold: "2023-08-14T02:00:48.990Z",
    priceSold: 395,
    title: "Dancing Shadows",
    type: "custom",
  },
];
