export interface ProductData {
    title: string;
    description: string;
    price: number;
    stock: number;
    brand: string;
    category: string;
    image: string;
}

export const productList: ProductData[] = [
    //1
    {
        title: "Nike mercury",
        description: "nike mercury 12 limited edition",
        price: 200,
        stock: 94,
        brand: "nike",
        category: "sneakers",
        image: "../src/components/landingpage/lp_images/1.jpg"
    },
    //2
    {
        title: "Nike mercury fly",
        description: "nike mercury fly air jordan",
        price: 200,
        stock: 94,
        brand: "nike",
        category: "sneakers",
        image: "../src/components/landingpage/lp_images/2.jpg"
    },
    //3
    {
        title: "Nike lebrons",
        description: "nike lebrons 2022 fly",
        price: 200,
        stock: 94,
        brand: "nike",
        category: "sneakers",
        image: "../src/components/landingpage/lp_images/3.jpg"
    },
    //4
    {
        title: "Nike lebrons",
        description: "nike lebrons 2023 fly",
        price: 200,
        stock: 94,
        brand: "nike",
        category: "sneakers",
        image: "../src/components/landingpage/lp_images/4.jpg"
    },
    //5
    {
        title: "laker jersey",
        description: "nike lebrons lacker jersey 2022",
        price: 80,
        stock: 94,
        brand: "nike",
        category: "jerseys",
        image: "../src/components/landingpage/lp_images/7.jpg"
    },
    //6
    {
        title: "golden state jersey",
        description: "Steph Curry nike golden state jersey",
        price: 80,
        stock: 94,
        brand: "nike",
        category: "jerseys",
        image: "../src/components/landingpage/lp_images/8.jpg"
    },
    //7
    {
        title: "PSG jersey",
        description: "mbappe jersey",
        price: 80,
        stock: 94,
        brand: "nike",
        category: "jerseys",
        image: "../src/components/landingpage/lp_images/10.jpg"
    },
    //8
    {
        title: "Ronaldo jersey",
        description: "christiano ronaldo jersey",
        price: 80,
        stock: 94,
        brand: "nike",
        category: "jerseys",
        image: "../src/components/landingpage/lp_images/11.jpg"
    },
    //9
    {
        title: "Messi jersey",
        description: "Messi jersey",
        price: 80,
        stock: 94,
        brand: "addidas",
        category: "jerseys",
        image: "../src/components/landingpage/lp_images/12.jpg"
    }
];
