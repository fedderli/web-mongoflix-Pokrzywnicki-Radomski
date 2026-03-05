db = db.getSiblingDB('DBmovies')

print("\n--- RAPORT ANALITYCZNY MONGOFLIX ---");
const wszystko = db.movies.find()
print(wszystko)

