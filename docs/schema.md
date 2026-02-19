### 1.  Kolekcja: `filmy`
| Pole           | Typ         | Opis                                          | Przykład                                        |
|:---------------|:------------|:----------------------------------------------|:------------------------------------------------|
| `tytul`        | **String**  | Unikalny tytul filmu                          | `"Harry Potter i isygnia smierci"`              |
| `data`         | **String**  | Data Premiery Filmu                           | `12.02.2012`                                    |
| `gatunek`      | **Array**   | Lista garunkow filmu.                         | `["mąka żytnia", "sól"]`                        |
| `ocena`        | **Array**   | Dane uzytkownika - Ocena Filmu oraz komentarz | `["Marek , "7" , "tak srednio bym powiedzial"]` |
| `czy_premium`  | **Boolean** | czy film jest premium                         | `true`                                          |
| `wyswietlenia` | **Int**     | Ilość Wyswietlen Filmu                        | `42`                                            |


### 2.  Kolekcja: `obsada`
| Pole           | Typ        | Opis                  | Przykład                           |
|:---------------|:-----------|:----------------------|:-----------------------------------|
| `tytul_filmu`  | **String** | Unikalny tytul filmu. | `"Harry Potter i isygnia smierci"` |
| `rezyser`      | **String** | rezyser filmu         | `"Alfonso Cuaron"`                 |
| `aktorzy`      | **Array**  | Lista surowców.       | `["Harry Potter", "Ron Wesley"]`   |
