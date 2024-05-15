new TypeIt("#lyhpby", {
  loop: true,
  cursorSpeed: 1000,
  speed: 100,
})
  .type("LYH && PBY")
  .pause(2000)
  .delete(null, {
    delay: 500,
  })
  .type("这是我们第一个520...")
  .pause(3000)
  .go();

new TypeIt("#talkToPBY", {
  lifeLike: true,
  cursorSpeed: 1000,
  waitUntilVisible: true,
  speed: 100,
}).go();
