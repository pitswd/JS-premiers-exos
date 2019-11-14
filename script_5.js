const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
  ];
  console.log(`_____________________________________________________`);
  function hasBeenRented(books) {
      if (books.rented > 0) {
      console.log(`Oui, ce livre a été emprunté au moins une fois !`);
    } else {
      console.log(`Non ce livre n'a pas encore été emprunté`);
    }
  }
  console.log(`Tous les livres ont-ils été empruntés ?`);
  console.log(books.filter(hasBeenRented));
  console.log(`Oui, sinon on aurait eu un autre message (tu peux tester en modifiant les chiffres du tableau.)`);
  console.log(`_____________________________________________________`);

  var max = books.reduce(function(a,b) {
    return (a.rented > b.rented) ? a : b;
  });
  console.log(`Quel livre a été emprunté le plus ?`);
  console.log(max);
  console.log(`Big up à Jane Austen`);
  console.log(`_____________________________________________________`);

  var min = books.reduce(function(a,b) {
    return (a.rented < b.rented) ? a : b;
  });
  console.log(`Quel livre a été emprunté le moins ?`);
  console.log(min);
  console.log(`Mdr Sylvain Tesson la grosse dech`);
  console.log(`_____________________________________________________`);

  function found(books) {
    return books.id === 873495;
  }
  console.log(`Ici, LE livre avec la fameuse référence 873495 :`);
  console.log(books.filter(found));
  console.log(`Jane Austen toujours au top, vivement son prochain roman !`);
  console.log(`_____________________________________________________`);

  console.log(`Hop hop on supprime le livre avec la référence 133712`); 
  var bookDelete = books.findIndex(books => books.id === 133712);
  books.splice(bookDelete,1);
  console.log(`Ciao Gatsby !`);
  console.log(books);
  console.log(`_____________________________________________________`);

  var alpha = books.sort(function (a, b) {
    if (a.title < b.title) return -1;
    else if (a.title > b.title) return 1;
    return 0;
  });
  console.log(`C'est pas une bibliothèque pour rien, on va trier tout ça.`);    
  console.log(`Par ordre alphabétique, donc, si c'était pas clair.`);  
  console.log(alpha);
  console.log(`_____________________________________________________`);