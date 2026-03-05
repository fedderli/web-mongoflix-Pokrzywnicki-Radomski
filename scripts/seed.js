db = db.getSiblingDB('movies')

db.actors.drop()
db.movies.drop()
db.raiting.drop()

console.log("--- Start inicialitation of database movies---")

db.actors.insertMany([
    {
        tytul_filmu: "Incepcja",
        rezyser: "Christopher Nolan",
        aktorzy: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"]
    },
    {
        tytul_filmu: "Titanic",
        rezyser: "James Cameron",
        aktorzy: ["Leonardo DiCaprio", "Kate Winslet", "Billy Zane"]
    },
    {
        tytul_filmu: "Matrix",
        rezyser: "Lana Wachowski, Lilly Wachowski",
        aktorzy: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"]
    },
    {
        tytul_filmu: "Gladiator",
        rezyser: "Ridley Scott",
        aktorzy: ["Russell Crowe", "Joaquin Phoenix", "Connie Nielsen"]
    },
    {
        tytul_filmu: "Avengers: Koniec gry",
        rezyser: "Anthony Russo, Joe Russo",
        aktorzy: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"]
    },
    {
        tytul_filmu: "Joker",
        rezyser: "Todd Phillips",
        aktorzy: ["Joaquin Phoenix", "Robert De Niro", "Zazie Beetz"]
    },
    {
        tytul_filmu: "Król Lew",
        rezyser: "Roger Allers, Rob Minkoff",
        aktorzy: ["Matthew Broderick", "Jeremy Irons", "James Earl Jones"]
    },
    {
        tytul_filmu: "Interstellar",
        rezyser: "Christopher Nolan",
        aktorzy: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"]
    },
    {
        tytul_filmu: "Forrest Gump",
        rezyser: "Robert Zemeckis",
        aktorzy: ["Tom Hanks", "Robin Wright", "Gary Sinise"]
    },
    {
        tytul_filmu: "Avatar",
        rezyser: "James Cameron",
        aktorzy: ["Sam Worthington", "Zoe Saldana", "Sigourney Weaver"]
    }
]);

db.movies.insertMany([
        {
            tytul: "Incepcja",
            data: "16.07.2010",
            gatunek: ["Sci-Fi", "Thriller"],
            czy_premium: true,
            wyswietlenia: 1523
        },
        {
            tytul: "Titanic",
            data: "19.12.1997",
            gatunek: ["Dramat", "Romans"],
            czy_premium: false,
            wyswietlenia: 2345
        },
        {
            tytul: "Matrix",
            data: "31.03.1999",
            gatunek: ["Sci-Fi", "Akcja"],
            czy_premium: true,
            wyswietlenia: 3120
        },
        {
            tytul: "Gladiator",
            data: "05.05.2000",
            gatunek: ["Akcja", "Dramat", "Historyczny"],
            czy_premium: false,
            wyswietlenia: 1890
        },
        {
            tytul: "Avengers: Koniec gry",
            data: "26.04.2019",
            gatunek: ["Akcja", "Sci-Fi", "Przygodowy"],
            czy_premium: true,
            wyswietlenia: 4210
        },
        {
            tytul: "Joker",
            data: "04.10.2019",
            gatunek: ["Dramat", "Kryminał"],
            czy_premium: true,
            wyswietlenia: 2765
        },
        {
            tytul: "Król Lew",
            data: "15.06.1994",
            gatunek: ["Animacja", "Familijny", "Przygodowy"],
            czy_premium: false,
            wyswietlenia: 3890
        },
        {
            tytul: "Interstellar",
            data: "07.11.2014",
            gatunek: ["Sci-Fi", "Dramat"],
            czy_premium: true,
            wyswietlenia: 2987
        },
        {
            tytul: "Forrest Gump",
            data: "06.07.1994",
            gatunek: ["Dramat", "Komedia"],
            czy_premium: false,
            wyswietlenia: 3456
        },
        {
            tytul: "Avatar",
            data: "18.12.2009",
            gatunek: ["Sci-Fi", "Przygodowy"],
            czy_premium: true,
            wyswietlenia: 4123
        }
    ]
)

db.raiting.insertinsertMany(
    [
        {
            tytul_filmu: "Incepcja",
            ocena: 9,
            urzytkownik: "Kamil",
            komentarz: "swietny film, mocno zmusza do myslenia"
        },
        {
            tytul_filmu: "Titanic",
            ocena: 8,
            urzytkownik: "Anna",
            komentarz: "klasyczny romans, bardzo emocjonalny"
        },
        {
            tytul_filmu: "Matrix",
            ocena: 10,
            urzytkownik: "Bartek",
            komentarz: "rewolucyjny film sci fi"
        },
        {
            tytul_filmu: "Gladiator",
            ocena: 9,
            urzytkownik: "Marta",
            komentarz: "epicki klimat i dobra historia"
        },
        {
            tytul_filmu: "Avengers: Koniec gry",
            ocena: 8,
            urzytkownik: "Piotr",
            komentarz: "dobry final serii marvel"
        },
        {
            tytul_filmu: "Joker",
            ocena: 9,
            urzytkownik: "Kasia",
            komentarz: "mroczny i bardzo dobrze zagrany"
        },
        {
            tytul_filmu: "Król Lew",
            ocena: 10,
            urzytkownik: "Ola",
            komentarz: "jedna z najlepszych animacji"
        },
        {
            tytul_filmu: "Interstellar",
            ocena: 9,
            urzytkownik: "Tomek",
            komentarz: "niesamowita muzyka i historia"
        },
        {
            tytul_filmu: "Forrest Gump",
            ocena: 10,
            urzytkownik: "Adam",
            komentarz: "film ponadczasowy"
        },
        {
            tytul_filmu: "Avatar",
            ocena: 8,
            urzytkownik: "Natalia",
            komentarz: "swietne efekty wizualne"
        },
        {
            tytul_filmu: "Matrix",
            ocena: 9,
            urzytkownik: "Daniel",
            komentarz: "bardzo dobry scenariusz"
        },
        {
            tytul_filmu: "Incepcja",
            ocena: 8,
            urzytkownik: "Michal",
            komentarz: "troche skomplikowany ale dobry"
        }
    ]
)

console.log("---successful addition of data to the database--- ")