import produto1 from '@/public/produto-01.png'
import produto2 from '@/public/produto-02.png'
import produto3 from '@/public/produto-03.png'
import produto4 from '@/public/produto-04.png'
import produto5 from '@/public/produto-05.png'
import produto6 from '@/public/produto-06.png'

interface Plant {
    name: string,
    price: number
    image: string,
}

const plants: Array<Plant> = [
    {
        name: "Ajuga reptans",
        price: 20,
        image: produto1.src
    },
    {
        name: "Cordyline fruticosa",
        price: 20,
        image: produto2.src
    },
    {
        name: "Crassula ovata",
        price: 20,
        image: produto3.src
    },
    {
        name: "Cyperus rotundus",
        price: 20,
        image: produto4.src
    },
    {
        name: "Delairea odorata",
        price: 20,
        image: produto5.src
    },
    {
        name: "Daturra metel",
        price: 20,
        image: produto6.src
    },
];

export { plants };