class Media {
    constructor (title) {
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    }
    get title () {
      return this._title;
    }
    get isCheckedOut () {
      return this._isCheckedOut;
    }
    get ratings () {
      return this._ratings;
    }
    set isCheckedOut (checkout) {
      this._isCheckedOut = checkout;
    }
  
    getAverageRating () {
      const reducer = (accumulator, currentValue) => accumulator + currentValue;
      let sum = this.ratings.reduce(reducer);
      return sum/this.ratings.length
    }
  
    toggleCheckOutStatus() {
      this._isCheckedOut = !this._isCheckedOut;
    }
  
    addRating(rate) {
      if (rate >=1 && rate <=5) {
      this.ratings.push(rate) 
      }
      else {
        console.log("Please rate between 1 - 5!")
      }
    }
  }
  
  class Book extends Media {
    constructor (author, pages, title) {
      super (title);
      this._author = author;
      this._pages = pages;
    }
    get author () {
      return this._author;
    }
    get pages () {
      return this._pages;
    }
  }
  
  class Movie extends Media {
    constructor (director, runTime, title) {
      super(title);
      this._director = director;
      this._runTime = runTime;
    }
    get director () {
      return this._director;
    }
    get runTime () {
      return this._runTime;
    }
  }
  
  class CD extends Media {
    constructor (artist, songs, title) {
      super (title);
      this._artist = artist;
      this.songs = [songs];
    }
    get artist () {
      return this._artist;
    }
    get songs () {
      return this.songs;
    }
  }
  
 
  const historyOfEverything = new Book ("Bill Bryson", 544, "A Short History of Nearly Everything");
  
  
  historyOfEverything.toggleCheckOutStatus();
  
  console.log(historyOfEverything.isCheckedOut);
  
 
  historyOfEverything.addRating(4);
  historyOfEverything.addRating(5);
  historyOfEverything.addRating(5);
  
  console.log(historyOfEverything.getAverageRating());
  

  const speed = new Movie ("Jan de Bont", 116, "Speed");
  
  
  speed.toggleCheckOutStatus();
  
 
  console.log(speed.isCheckedOut);
  

  speed.addRating (1);
  speed.addRating (1);
  speed.addRating (5);
  

  console.log(speed.getAverageRating());