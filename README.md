# it-gen backend
## description
Aplikacja do generowania testowych danych osobowych oraz organizacyjnych.

## features
### Person: 
generowanie nowej osoby. W ramach osoby w zależności od narodowości powinny być zwracane dane:

Osobowe:
Imię, Imię 2, Nazwisko, Narodowość, Data urodzenia, Płeć, Adres email, ?
Identyfikacyjne:
Pesel, Dowód, Paszport, ?
Adresowe:
Miasto, Kod pocztowy, Ulica, Numer Domu, Numer lokalu, ?
Social Media:
twitter, fb, linkedIn, ?
Informacje bankowe:
Konto, Karta kredytowa
Dane zbiorczo w formacie:
CSV, XML, JSON

### Company: 
generowanie danych związanych z firmą, w ramach organizacji w zależności od narodowości powinny być zwracane dane:

Identyfikacyjne:
Nazwa, Forma prawna, NIP, Regon, email, strona www
Adresowe:
Miasto, Kod pocztowy, Ulica, Numer Domu, Numer lokalu, ?
Informacje bankowe:
Konto, Karta kredytowa
Dane zbiorczo w formacie:
CSV, XML, JSON

### Generowanie danych do pliku:
powinna być możliwość wygenerowania wskazanej liczby profili osobowych lub firm do pliku we wskazanym formacie (csv, czy też inne?)

## api endpoints /api
### GET? /person
params: nationality, sex, date_of_birth, age_min, age_max, no_of_profiles, ?

### GET? /company
params: nationality, no_of_profiles, ?

### /vat-ident-number NIP
params: nationality
POST/GET? /generate
POST/GET? /validate

### /national-ident-number PESEL
params: nationality, sex, date_of_birth, age_min, age_max
POST/GET? /generate
POST/GET? /validate

### /bank-account
params: nationality, bank?
POST/GET? /generate
POST/GET? /validate

### /passport
params: nationality
POST/GET? /generate
POST/GET? /validate

### /ident-card Dowód osobisty
params: nationality
POST/GET? /generate
POST/GET? /validate

### /address
params: nationality, city, street?
POST/GET? /generate
POST/GET? /validate
