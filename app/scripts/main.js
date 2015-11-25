console.log('\'Allo \'Allo!');

var square = document.querySelector('#js-square'),
    translateCurve = mojs.easing.path('M0,100 L25,99.9999983 C26.2328835,75.0708847 19.7847843,0 100,0'),
    squashCurve = mojs.easing.path('M0,100.004963 C0,100.004963 25,147.596355 25,100.004961 C25,70.7741867 32.2461944,85.3230873 58.484375,94.8579105 C68.9280825,98.6531013 83.2611815,99.9999999 100,100');

new mojs.Tween({
  repeat:   999,
  delay:    2000,
  duration: 1000,
  onUpdate: function (progress) {
    var translateProgress = translateCurve(progress),
        squashProgress = squashCurve(progress),
        scaleX = 1 - 2*squashProgress,
        scaleY = 1 + 2*squashProgress;
    
    square.style.transform = 
      'translateY(' + -446*translateProgress + 'px) '+
      'scaleX(' + scaleX + ') ' + 'scaleY(' + scaleY + ')';
  }
}).run();
