db = db.getSiblingDB('DBmovies')

print("\n--- RAPORT ANALITYCZNY MONGOFLIX ---");


print("Srednia cena dla kazdego gatunku")
const AvgRaitingGenre = db.movies.aggregate([
        {$lookup: {from: "raiting", localField: "tytul" ,foreignField: "tytul_filmu", as: "film_raiting"}},
        {$unwind: "$film_raiting"},
        {$unwind: "$gatunek"},
        {$group: {_id: "$gatunek", avgRaiting: {$avg : "$film_raiting.ocena"}}},
    ])
print(AvgRaitingGenre)


print("aktualizacja wyswietlen o 100 w kazdym filmie")

db.movies.updateMany({}, { $inc: { wyswietlenia: 100 } },)

const updatedViews =  db.movies.find()
print(updatedViews)