# journal1

Demoprojekt för onelab

## Antaganden
- Att filen inte innehåller fel eller är tom
- Att man försöker ladda upp rätt sorts fil

## Förenklingar
- Ingen inloggad användare
- Databasuppdatering sker inte inuti transaktion
- Webapp och backend i samma repository
- Checkar in .env samt webapp/dist i repot
- Inga tester
- Hanterar inte / visar inte felmeddelanden i frontend

## Övriga förbättringar
- Möjlighet att editera i gränssnittet.
- Möjlighet att radera.
- Möjlighet att lägga till ny
- Använda ORM t.ex sequelize
- Liquibase t.ex. för att versionshantera databasändringar
- Typescript


## TEKNIKVAL & dependencies
- Postgres databas
- pg (postgres connector för NodeJS)
- csvtojson
- express
- express fileupload

- Vue för frontend
- vitejs som devserver

## INSTALLATION

### Databas docker
- Installera docker


Kör kommandot:
```
docker run --name journal1_db -e POSTGRES_USER=admin -e POSTGRES_PASSWORD=admin -p 5432:5432 -d postgres
```

- container namn: journal1_db
- användarnamn: admin
- lösenord: admin
- exponera port: 5432

Kör kommando för att köra postgres cli

```
 docker exec -it journal1_db psql -U admin
```

Skapa databasen journaldb1
``` 
CREATE DATABASE journal1;
```

Växla till den skapade databasen
```
\c journal1 
```

Skapa tabellen registry
```
CREATE TABLE IF NOT EXISTS registry(
	personalNumber VARCHAR(255) PRIMARY KEY,
	firstName VARCHAR(255),
	lastName VARCHAR(255),
	birthDay VARCHAR(255),
	address VARCHAR(255),
  changed timestamp with time zone default current_timestamp
);
```

### NodeJS Servern

- Öppna upp en terminal där du vill clona projektet från Github och kör:
```
git clone https://github.com/magnusku/journal1.git
cd journal1
npm install 
npm run start
```

- Öppna upp webbläsaren på localhost:3030

Om anslutningen till databasen inte lirar så kika på inställningarna i .env och säkerställ
att de stämmer överens med hur postgres servern är uppsatt.