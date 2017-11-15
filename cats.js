document.addEventListener("DOMContentLoaded", function(){
  var summon = document.querySelector('.summon-cats');
  var catBox = document.querySelectorAll('.cat-box');

  summon.addEventListener('click', function(){
    $.ajax({
      url: 'http://bitkittens.herokuapp.com/cats.json',
      method: 'GET',
      dataType: 'JSON'
    }).done(function(responseData){
      var array = responseData.cats
      array.forEach(function(kitty){
        // Creates a new <img> tag
        var newImg = document.createElement('img');
        // Sets the src attribute of the <img> to the cat's photo
        newImg.src  = kitty['photo']
        // Sets the alt attribute of the <img> to "Photo of (insert cat name here)"
        newImg.alt = "Photo of " + kitty.name
        // Inserts that <img> into one of the empty .cat-box divs
        catBox.forEach(function(box){
          if (box.innerHTML === ""){
            box.append(newImg)
          }
        })
      })
    })
  });
});
