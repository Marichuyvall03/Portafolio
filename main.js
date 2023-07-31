let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Aprendiendo a programar sitios web y dibujante de hobbie :).')
  .pauseFor(200)
  .deleteChars(10)
  .start();
