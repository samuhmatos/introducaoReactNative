import { ImageProps } from "react-native";
export interface Coffee {
  name: string;
  image: ImageProps["source"];
  description: string;
}

export const coffeeList: Coffee[] = [
  {
    name: "Espresso",
    image: {
      uri: "https://www.istockphoto.com/br/foto/copo-de-caf%C3%A9-com-fuma%C3%A7a-e-gr%C3%A3os-de-caf%C3%A9-em-fundo-de-madeira-velho-gm1303583671-394996018",
    },
    description:
      "A concentrated coffee beverage brewed by forcing hot water under high pressure through finely ground coffee.",
  },
  {
    name: "Cappuccino",
    image: {
      uri: "https://www.teclasap.com.br/wp-content/uploads/2008/09/coffee.jpg",
    },
    description:
      "An espresso-based coffee drink that originated in Italy, prepared with steamed milk and a thick layer of foam.",
  },
  {
    name: "Latte",
    image: { uri: "https://en.wikipedia.org/wiki/Coffee_bean" },
    description:
      "A coffee drink made with espresso and steamed milk, topped with a small amount of milk foam.",
  },
  {
    name: "Americano",
    image: {
      uri: "https://blog.coffeemais.com/wp-content/uploads/2022/07/granulometria-topo.jpg",
    },
    description:
      "A popular espresso-based coffee drink in which hot water is added to espresso, giving it a similar strength to traditional American-style coffee.",
  },
  {
    name: "Macchiato",
    image: {
      uri: "https://www.tastingtable.com/img/gallery/coffee-brands-ranked-from-worst-to-best/l-intro-1645231221.jpg",
    },
    description:
      "An espresso-based coffee drink with a small amount of milk, usually foamed, added.",
  },
  {
    name: "Mocha",
    image: {
      uri: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/flat-white-3402c4f.jpg",
    },
    description:
      "A chocolate-flavored coffee drink made with espresso, milk, and chocolate syrup or powder, often topped with whipped cream.",
  },
  {
    name: "Cold Brew",
    image: {
      uri: "https://images.absolutdrinks.com/drink-images/Raw/Kahlua/8317f0a2-a13e-4eeb-954a-ae1d603537a6.jpg",
    },
    description:
      "A method of brewing coffee that uses cold water over an extended period, resulting in a smooth and less acidic beverage.",
  },
  {
    name: "Iced Coffee",
    image: {
      uri: "https://www.acouplecooks.com/wp-content/uploads/2020/09/Latte-Art-066s.jpg",
    },
    description:
      "Regular brewed coffee served over ice, often sweetened and flavored with milk, cream, or syrups.",
  },
  {
    name: "Turkish Coffee",
    image: {
      uri: "https://www.acouplecooks.com/wp-content/uploads/2021/08/Cafe-Au-Lait-001s.jpg",
    },
    description:
      "A traditional method of preparing unfiltered coffee, finely ground coffee beans are boiled in a pot, producing a strong and rich beverage.",
  },
  {
    name: "Decaf",
    image: {
      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb5NJ8Ss67IyyLEEXMJoEWu6H-WxZTKGYEJQ&usqp=CAU",
    },
    description:
      "Coffee that has had most or all of its caffeine removed, suitable for those who want to enjoy the taste of coffee without the stimulating effects of caffeine.",
  },
];
