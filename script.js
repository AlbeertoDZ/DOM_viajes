const data = [
    {
        title: "Example Title 1",
        description: "Example Description 1",
        url_img: "./assets/banner/1.jpg"
    },
    {
        title: "Example Title 2",
        description: "Example Description 2",
        url_img: "./assets/banner/2.jpg"
    },
    {
        title: "Example Title 3",
        description: "Example Description 3",
        url_img: "./assets/banner/3.jpg"
    },
    {
        title: "Example Title 4",
        description: "Example Description 4",
        url_img: "./assets/banner/4.jpg"
    },
    {
        title: "Example Title 5",
        description: "Example Description 5",
        url_img: "./assets/banner/5.jpg"
    },
    {
        title: "Example Title 6",
        description: "Example Description 6",
        url_img: "./assets/banner/6.jpg"
    },
    {
        title: "Example Title 7",
        description: "Example Description 7",
        url_img: "./assets/banner/7.jpg"
    },
    {
        title: "Example Title 8",
        description: "Example Description 8",
        url_img: "./assets/banner/8.jpg"
    },
];

const dataViajes = [
    {
        title: "Titulo 1",
        description: "Foto 1",
        url_img: "./assets/viajes/viajes-1.jpg",
    },
    {
        title: "Titulo 2",
        description: "Foto 2",
        url_img: "./assets/viajes/viajes-2.jpg",
    },
    {
        title: "Titulo 3",
        description: "Foto 3",
        url_img: "./assets/viajes/viajes-3.jpg",
    },
    {
        title: "Titulo 4",
        description: "Foto 4",
        url_img: "./assets/viajes/viajes-4.jpg",
    },
    {
        title: "Titulo 5",
        description: "Foto 5",
        url_img: "./assets/viajes/viajes-5.jpg",
    },
    {
        title: "Titulo 6",
        description: "Foto 6",
        url_img: "./assets/viajes/viajes-6.jpg",
    },
    {
        title: "Titulo 7",
        description: "Foto 7",
        url_img: "./assets/viajes/viajes-7.jpg",
    },
]

const cities = [
    "Madrid",
    "Barcelona",
    "Valencia",
    "Seville",
    "Bilbao",
    "Granada",
    "Malaga",
    "Palma de Mallorca",
    "Alicante",
    "Zaragoza"
];


const getRandom = function (array) {
    return array[Math.floor(Math.random() * array.length)];
};

document.querySelectorAll("#container2 div img").forEach((fotos) => {
    fotos.setAttribute("src", getRandom(dataViajes).url_img);
});

document
    .querySelector("#container1 > figure > img")
    .setAttribute("src", getRandom(data).url_img);

let ciudades = document.getElementById("destinos");
cities.forEach((city) => {
    ciudades.innerHTML += `<option value="${city}">${city}</option>`;
});
