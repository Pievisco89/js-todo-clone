$(function(){

  var arrThings = [
    "Fare la spesa",
    "Comprare il giornale",
    "Fare l'esercizio Boolean",
    "Ripassare lezione Boolean",
    "Allenamento ore 18 e 30",
  ];

  for(var i = 0; i < arrThings.length; i++){
    var strThings = arrThings[i];
    console.log(strThings);

    /* uso clone per clonare il template e poi con append aggiungo alla classe text l'elemento dell'array */
    var item = $('.template li').clone();
    $(item).find('.text').append(strThings);
    $('.container ul').append(item);

  }

  /* click su cestino per eliminare elemento della lista */
  $(document).on('click', '.fas', function(){
    $(this).parent().remove();
  });

  /* intercetto l'input e lo aggiungo nell'elenco e ripulisco l'input */
  $('. container input').keyup(function(event){
  
    if(event.which === 13){

      var item = $('.template li').clone();
      $(item).find('.text').append($(this).val());
      $('.container ul').append(item);

    }

  });

});