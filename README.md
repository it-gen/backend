# it-gen backend
## description
Aplikacja do generowania testowych danych osobowych oraz organizacyjnych.

## features
### Person: 
generowanie nowej osoby. W ramach osoby w zależności od narodowości powinny być zwracane dane:

<br>Osobowe:
<br>Imię, Imię 2, Nazwisko, Narodowość, Data urodzenia, Płeć, Adres email, ?
<br>Identyfikacyjne:
<br>Pesel, Dowód, Paszport, ?
<br>Adresowe:
<br>Miasto, Kod pocztowy, Ulica, Numer Domu, Numer lokalu, ?
<br>Social Media:
<br>twitter, fb, linkedIn, ?
<br>Informacje bankowe:
<br>Konto, Karta kredytowa
<br>Dane zbiorczo w formacie:
<br>CSV, XML, JSON

### Company: 
generowanie danych związanych z firmą, w ramach organizacji w zależności od narodowości powinny być zwracane dane:

<br>Identyfikacyjne:
<br>Nazwa, Forma prawna, NIP, Regon, email, strona www
<br>Adresowe:
<br>Miasto, Kod pocztowy, Ulica, Numer Domu, Numer lokalu, ?
<br>Informacje bankowe:
<br>Konto, Karta kredytowa
<br>Dane zbiorczo w formacie:
<br>CSV, XML, JSON

### Generowanie danych do pliku:
powinna być możliwość wygenerowania wskazanej liczby profili osobowych lub firm do pliku we wskazanym formacie (csv, czy też inne?)

## api endpoints /api
### GET? /person
params: nationality, sex, date_of_birth, age_min, age_max, no_of_profiles, ?

### GET? /company
params: nationality, no_of_profiles, ?

### /vat-ident-number NIP
params: nationality
<br>POST/GET? /generate
<br>POST/GET? /validate

### /national-ident-number PESEL
params: nationality, sex, date_of_birth, age_min, age_max
<br>POST/GET? /generate
<br>POST/GET? /validate

### /bank-account
params: nationality, bank?
<br>POST/GET? /generate
<br>POST/GET? /validate

### /passport
params: nationality
<br>POST/GET? /generate
<br>POST/GET? /validate

### /ident-card Dowód osobisty
params: nationality
<br>POST/GET? /generate
<br>POST/GET? /validate

### /address
params: nationality, city, street?
<br>POST/GET? /generate
<br>POST/GET? /validate
