$(function(){

  var $car = $('.js-alarm_car');
  /**
   *
   * @param {Number} count
   * @param {Number} [current]
   */
  function blink(count, current) {
    if(!current) current = 1;
    $car.delay(250).fadeTo(150, 1, function(){
      $car.delay(250).fadeTo(250, 0, function(){
        if(count > current) {
          blink(count, current+1);
        }
        else {
          $car.delay(250).fadeTo(150, 1);
        }
      });
    });
  }

  var img1 = new Image();
  img1.onload = function() {
    blink(5);
  };
  img1.src = $car.css('background-image').replace(/(url\(|\)|"|')/ig, '');

});