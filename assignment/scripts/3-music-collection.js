console.log("***** Music Collection *****");
// Safe Zone -- Write code below this line

let myCollection = [];

function addToCollection(collection, title, artist, yearPublished) {
  const musicDetail = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
  };
  collection.push(musicDetail);

  return musicDetail;
}

function showCollection(collection) {
  for (musicDetail of collection)
    console.log(
      `${musicDetail.title} by ${musicDetail.artist}, published in ${musicDetail.yearPublished}`
    );
}

function findByArtist(collection, artist) {
  let matchingArtist = [];
  for (musicDetail of collection) {
    if (musicDetail.artist === artist) {
      matchingArtist.push(musicDetail);
    }
  }
  return matchingArtist;
}

addToCollection(myCollection, "seasons", "wave to earth", 2020);
addToCollection(myCollection, "Summertime In Paris", "Jaden, WILLOW", 2019);
addToCollection(myCollection, "Anytime Anywhere", "milet", 2023);
addToCollection(myCollection, "ガジュマル ～Heaven in the Rain～", "ReoNa", 2024);
addToCollection(myCollection, "I'm Fine", "Hentaidesu", 2018);
addToCollection(myCollection, "slowly, surely", "Blurred Figures, another silent weekend", 2024);

console.log("My Collection:", myCollection);
showCollection(myCollection);
let foundArtist = findByArtist(myCollection, "ReoNa");
console.log("Found Artist:", foundArtist);

// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection:
      typeof myCollection !== "undefined" ? myCollection : undefined,
    addToCollection:
      typeof addToCollection !== "undefined" ? addToCollection : undefined,
    showCollection:
      typeof showCollection !== "undefined" ? showCollection : undefined,
    findByArtist:
      typeof findByArtist !== "undefined" ? findByArtist : undefined,
    search: typeof search !== "undefined" ? search : undefined,
  };
} catch (e) {
  // Do nothing
}
