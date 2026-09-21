const photo = (id: string, w: number, h: number) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;

export const images = {
  hero: photo("1663530761401-15eefb544889", 1100, 1400),
  how: photo("1507048331197-7d4ac70811cf", 1100, 1400),
  produce: photo("1591586116988-62fe65164f8d", 1400, 1200),
  prep: photo("1466637574441-749b8f19452f", 900, 900),
};

export type Meal = {
  name: string;
  diet: string;
  time: number;
  kcal: number;
  price: string;
  image: string;
  alt: string;
};

export const meals: Meal[] = [
  {
    name: "Miso-Glazed Salmon",
    diet: "Pescatarian",
    time: 25,
    kcal: 640,
    price: "$11.90",
    image: photo("1539136788836-5699e78bfc75", 900, 1125),
    alt: "Herb-crusted salmon fillet over quinoa with roasted broccoli",
  },
  {
    name: "Lemon Basil Rigatoni",
    diet: "Vegetarian",
    time: 20,
    kcal: 720,
    price: "$9.40",
    image: photo("1515003197210-e0cd71810b5f", 900, 1125),
    alt: "Rigatoni pasta plated on a brown ceramic dish",
  },
  {
    name: "Harvest Grain Bowl",
    diet: "Vegan",
    time: 15,
    kcal: 560,
    price: "$9.90",
    image: photo("1512621776951-a57141f2eefd", 900, 1125),
    alt: "A bowl of mixed vegetable salad with grains",
  },
  {
    name: "Charred Greens & Egg",
    diet: "Vegetarian",
    time: 20,
    kcal: 480,
    price: "$8.90",
    image: photo("1490645935967-10de6ba17061", 900, 1125),
    alt: "Poached egg over charred vegetables and tomatoes on a blue plate",
  },
];

export const steps = [
  {
    title: "Pick your dinners",
    body: "Choose two to six meals from a menu of twelve new recipes, refreshed every Wednesday.",
  },
  {
    title: "We prep, you cook",
    body: "Produce arrives washed, portioned and chilled, with sauces and spice blends ready to go.",
  },
  {
    title: "Dinner in half an hour",
    body: "Follow the card, plate it up and get on with your evening. Most dinners finish in one pan.",
  },
];

export const reviews = [
  {
    quote:
      "Dinner stopped being a nightly negotiation. The box shows up and we just cook.",
    name: "Tomas R.",
    place: "Austin",
  },
  {
    quote:
      "The produce is better than what I was buying at my grocery store, and I am not throwing anything away.",
    name: "Priya N.",
    place: "Seattle",
  },
];

export const plans = [
  {
    name: "Two dinners a week",
    blurb: "For couples and smaller households.",
    price: "$9.50",
    tag: null as string | null,
  },
  {
    name: "Four dinners a week",
    blurb: "Our most popular box, and the best value per serving.",
    price: "$7.90",
    tag: "Most popular",
  },
  {
    name: "Six dinners a week",
    blurb: "For families and anyone who cooks ahead.",
    price: "$6.90",
    tag: null as string | null,
  },
];

export const tickerWords = [
  "No food waste",
  "Chef-designed",
  "Farm-direct produce",
  "Twelve new recipes weekly",
  "Pre-portioned",
  "Skip any week",
  "Ready in 30 minutes",
];
