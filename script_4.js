const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
  ];
  console.log(`_____________________________________________________`);

  function birth(entrepreneurs) {
    return entrepreneurs.year > 1969 && entrepreneurs.year < 1980;
  }
  console.log(`Ici : la liste des entrepreneurs nés entre 70 et 79 :`);
  console.log(entrepreneurs.filter(birth));
  console.log(`_____________________________________________________`);

  function name(entrepreneurs) {
      console.log(`${entrepreneurs.first} ${entrepreneurs.last}`);
  }
  console.log(`Ici : les noms et prénoms de nos capitalistes préférés :`);
  console.log(entrepreneurs.filter(name));
  console.log(`_____________________________________________________`);

  function age(entrepreneurs) {
      console.log(2019 - entrepreneurs.year);
  }
  console.log(`Maintenant, leur âge (oubliez pas leurs anniversaires) :`);
  console.log(entrepreneurs.filter(age));
  console.log(`_____________________________________________________`);

  var alpha = entrepreneurs.sort(function (a, b) {
    if (a.last < b.last) return -1;
    else if (a.last > b.last) return 1;
    return 0;
  });
  console.log(`Mais didonc, ça serait pas génial de les trier par ordre alphabétique ?`);    console.log(`Si toi aussi tu penses que oui, ouvre le array qui suit :`);  
  console.log(alpha);
  console.log(`_____________________________________________________`);