var TLParamsInheritance = anime.timeline({
  targets: '#bird2',
  //delay: function(el, i) { return i * 2000 },
  duration: 400,
  //easing: 'easeOutExpo',
  //direction: 'alternate',
  loop: true,
});

TLParamsInheritance
  .add({
  //  translateX: 600,
  })
  .add({
    //opacity: .5,
    delay:2000,
 translateX: 500,
 
  //translateY:50,
  //scaleX: -1,
   scale: 1,
  })
  .add({
  translateX: 1700,  
    scaleX: -1,
    scale: 1,
    delay:1000,
  })
.add({
  translateX: 1200,  
    scaleX: -1,
    //scale: 1,
    //delay:500,
  })

var lineDrawing = anime({
  targets: '#lineDrawing .flower path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 1500,
  delay: function(el, i) { return i * 250 },
  direction: 'alternate',
  loop: true
});


