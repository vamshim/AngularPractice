(function(){

    var book = function(bookId,bookName,author,price){
        this.bookId = bookId;
        this.bookName = bookName;
        this.author = author;
        this.price = price;
    }
  book.prototype.toString = function(){
      return this.bookName+","+this.author;
  }

  book.prototype.discount = function(){
      return this.price * .10;
  }


  var javaBook = new book(101,'Head first java','kathy',400);
  var netBook = new book(102,'C#','Orilee',550);

  var bookList = [javaBook,netBook];



  bookList.forEach(function(eachBook,idx){
    console.log(eachBook.toString());
    console.log(eachBook.discount());

  });

})();