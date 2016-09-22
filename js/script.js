// variable global accesible en todos lados.
var quotes = [
  {
    quote: 'When 900 years old, you reach… Look as good, you will not.',
    source: 'Yoda',
    movie: 'Star Wars - Return Of The Jedi',
    urlPhoto: 'http://5.darkroom.shortlist.com/640/5b1441f716c3a403bb5345d87aceeab4:6f287899573d541dfbb27e7b723ed72f/yoda-return-of-the-jedi'
  },
  {
    quote: 'The Dark Side of the Force is the pathway to many abilities some consider to be… Unnatural.',
    source: 'Senator Palpatine ',
    movie: 'Star Wars - Revenge Of The Sith',
    urlPhoto: 'http://6.darkroom.shortlist.com/640/7197007980562bdf30e5264633913deb:f3f4274b84552f1f0e3c9c632dc0c5f3/senator-palpatine-revenge-of-the-sith'
  },
  {
    quote: 'You don’t know how hard I found it, signing the order to terminate your life',
    source: 'Governor ‘Grand Moff’ Tarkin',
    movie: 'Star Wars - A New Hope',
    urlPhoto: 'http://1.darkroom.shortlist.com/640/4d21c686853d0d06c12616e4c2294a40:bc99e50d92d58a706cd9170f23ccc6f1/governor-grand-moff-tarkin-a-new-hope'
  },
  {
    quote: 'He’s holding a thermal detonator!',
    source: 'C-3PO',
    movie: 'Star Wars - Return Of The Jedi',
    urlPhoto: 'http://2.darkroom.shortlist.com/640/81b62accdd2c0c6fa328524cbafe1f01:753e1cc74e82735cfc1c183b3e8b964e/c-3po-return-of-the-jedi'
  },
  {
    quote: 'I sense great fear in you, Skywalker. You have hate… you have anger… but you don’t use them.',
    source: 'Count Dooku',
    movie: 'Star Wars - Attack Of The Clones',
    urlPhoto: 'http://3.darkroom.shortlist.com/640/c511ee532772e861946570ca502fd6b7:bb8d65129276dff649f71f81a3f3fa7c/count-dooku-attack-of-the-clones'
  },
  {
    quote: 'Great, kid. Don’t get cocky',
    source: 'Han Solo',
    movie: 'Star Wars - A New Hope',
    urlPhoto: 'http://4.darkroom.shortlist.com/640/7dffac8f20ea5c0b0650bdaec0520fd4:3a35b278fb4b16cf1e903dc3cd6ba3de/han-solo-a-new-hope'
  },
  {
    quote: 'Luke, you can destroy the Emperor. He has foreseen this. It is your destiny. Join me, and together we can rule the galaxy as father and son.',
    source: 'Darth Vader',
    movie: 'Star Wars - The Empire Strikes Back',
    urlPhoto: 'http://5.darkroom.shortlist.com/640/5113f4381595a983202c88322736bc80:336e70f2c3a0f95706cf31c760b211ff/darth-vader-the-empire-strikes-back'
  },
  {
    quote: 'You can’t win, Darth. Strike me down, and I will become more powerful than you could possibly imagine.',
    source: 'Obi Wan Kenobi ',
    movie: 'Star Wars - A New Hope',
    urlPhoto: 'http://6.darkroom.shortlist.com/640/f415a094ac5f2284d23584f4b2ffb7f4:5eeffcfd45fc53839afe557f696c114d/obi-wan-kenobi-a-new-hope'
  },
  {
    quote: 'It\'s a trap!',
    source: 'Admiral Ackbar',
    movie: 'Star Wars - Return Of The Jedi',
    urlPhoto: 'http://2.darkroom.shortlist.com/640/3be09d0932b32ac8a7be6bf885723c45:d8b77f15c81a971f901a1fecbbeb1f40/admiral-ackbar-return-of-the-jedi'
  },
  {
    quote: 'Aren\'t you a little short for a storm trooper?',
    source: 'Princess Leia',
    movie: 'Star Wars - A New Hope',
    urlPhoto: 'http://3.darkroom.shortlist.com/640/4a24c3f8bcfe5443242296e75a6e882b:a2a6bbfcb7b219b934e3bb902c603153/princess-leia-a-new-hope'
  },
  {
    quote: 'These aren’t the droids you’re looking for...',
    source: 'Obi Wan Kenobi ',
    movie: 'Star Wars - A New Hope',
    urlPhoto: 'http://1.darkroom.shortlist.com/640/4bd2971d035054fca3943570c58c8915:e16009281d8a3beac57426024589e0fc/obi-wan-kenobi-a-new-hope'
  },
  {
    quote: 'Fear is the path to the dark side.',
    source: 'Yoda',
    movie: 'Star Wars - The Phantom Menace',
    urlPhoto: 'http://4.darkroom.shortlist.com/640/9ece1fe4efd9a947deab1736db3e17c0:aa856dd035f962c5e736d6ff26288ba6/yoda-the-phantom-menace'
  },
  {
    quote: 'Anakin, you’re breaking my heart! And you’re going down a path I cannot follow!',
    source: 'Padme',
    movie: 'Star Wars - Revenge Of The Sith',
    urlPhoto: 'http://6.darkroom.shortlist.com/640/f6a1f209c3d53495f91dc6aa350ef945:016dc388949c55776285921944131533/padme-revenge-of-the-sith'
  },
  {
    quote:'You were the chosen one! It was said that you would destroy the Sith, not join them.',
    source: 'Obi Wan Kenobi',
    movie: 'Star Wars - Revenge Of The Sith',
    urlPhoto: 'http://2.darkroom.shortlist.com/640/f47dd95f6c98a790010f7785e217d188:2c3db97cd90ee361cdee77db012893be/obi-wan-kenobi-revenge-of-the-sith'
  },
  {
    quote:'I’ve been waiting for you, Obi-Wan. We meet again, at last. The circle is now complete. When I left you, I was but the learner; now I am the master.',
    source: 'Darth Vader',
    movie: 'Star Wars - A New Hope',
    urlPhoto: 'http://4.darkroom.shortlist.com/640/68a03cff15735cc5a79a55949036a65e:afe46964af2bf2feedb06412a9089203/darth-vader-a-new-hope'
  },
  {
    quote:'The Force is strong with you. A powerful Sith you will become. Henceforth, you shall be known as Darth… Vader.',
    source: 'Darth Sidious',
    movie: 'Star Wars - Revenge Of The Sith',
    urlPhoto: 'http://1.darkroom.shortlist.com/640/647b18a1a400ecb6b466c0786521425e:662a2a1dfaf2d5714b2bfd58d3b63613/darth-sidious-revenge-of-the-sith'
  },
  {
    quote:'Obi-Wan Kenobi. Obi-Wan. Now that\'s a name I have not heard in a long time. A long time.',
    source: 'Obi Wan Kenobi',
    movie: 'Star Wars - A New Hope',
    urlPhoto: 'http://3.darkroom.shortlist.com/640/c5d14cfd6086bf0c799252f7e72baa75:ef6bd8e22e55e0dae96b05528af8284c/obi-wan-kenobi-a-new-hope'
  },
  {
    quote:'No. I am your Father.',
    source: 'Darth Vader',
    movie: 'Star Wars - The Empire Strikes Back',
    urlPhoto: 'http://1.darkroom.shortlist.com/640/f83b6e0a16b12d6b06f9c1e8cbe63bdb:d929fd781eb4608be6d91d3538204b8a/darth-vader-the-empire-strikes-back'
  },
  {
    quote:'Death is a natural part of life. Rejoice for those around you who transform into the Force.',
    source: 'Yoda',
    movie: 'Star Wars - Revenge of the Sith',
    urlPhoto: 'http://1.darkroom.shortlist.com/640/aa92fc5c340e539f14bfba4ba7598416:31a407aa8a0d0ddf15db851380c4af9d/yoda-revenge-of-the-sith'
  }
];
/*****************************************************************/

/*IMPORTANT:  im a spanish speaker student so maybe some of mi coments its a little weird,
but i hope anyone can understand mi code with mi comments. PD: i dont know many names in english for my variables
so sometimes i just used letters. */

/*****************************************************************/

//getRandomNumber: the function generates a random number only
function getRandomNumber(){
  //console.log("dentro de getRandomNumber");
  return Math.floor(Math.random() * quotes.length);

}
/*****************************************************************/

var indexes = []; // this array will save the index of the objects used

/*****************************************************************/

function guardarNumeros (rand){
  //console.log("dentro de guardarNumeros");
  //console.log(rand);//print the random number
  var a = true;//If "a" its "True" it means the number havent been used
  for(var i = 0; i < indexes.length; i += 1 ){
    if (rand == indexes[i]){
      a = false;//change "a" to false, so i know is a repeated number
    }
  }
  if (a){//if "a" is "true" then we push the number to de index array
    indexes.push(rand);
    return rand;
  }
  //console.log(indexes.join(', '));
}

/*****************************************************************/

function reniciar(){
    //console.log("dentro de reiniciar");
    if(indexes.length == quotes.length){//When all the objects have been used then we reset the indexes array
      indexes = [];
    }
}
/*****************************************************************/
/* This function makes that when you click the button, find a number that havent been used*/
function dontRepeat (){
  //console.log("dentro de dontRepeat");
  while(true){
    var x = getRandomNumber();//gets the random number
    var quo = guardarNumeros(x);//if the number isnt in the array this push it
    if(quo != undefined){
      return quo;//if the quote number is undefine it means is a repeated number so this just printe the numbers havent been used
    }
  }
}
/*****************************************************************/

function getRandomQuote(){
    //console.log("dentro de getRandomQuote");
    var index = dontRepeat();//dontRepeat give us a number that havent been used
    reniciar();//if all the objects have been used, then we reset the array
    //console.log(index);
    return index;//we returne the index of the objet we will display
}
//getRandomQuote();

/*****************************************************************/

function printQuote(){// then we just send to print the Quote finaly :D
  //console.log("dentro de printQuote");
  var num = getRandomQuote();
  //console.log(num);
  var message = '<p class="quote">' + quotes[num].quote + '</p>' + '<p class="source">' + quotes[num].source + '<span class="citation">' + quotes[num].movie + '</span>' + '</p>';
  var img = '<img src="' + quotes[num].urlPhoto + '"/>'
   document.getElementById("quote-box").innerHTML = message;
   document.getElementById("img").innerHTML = img;
   console.log(message);
}

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
