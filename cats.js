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
        catBox.forEach(function(box, index){
          var newImg = document.createElement('img');
          // Sets the src attribute of the <img> to the cat's photo
          newImg.src  = array[index]['photo']
          // Sets the alt attribute of the <img> to "Photo of (insert cat name here)"
          newImg.alt = "Photo of " + array[index].name
          // Inserts that <img> into one of the empty .cat-box divs
          box.innerHTML = ""
            box.append(newImg)
        });
    });
  });
});
