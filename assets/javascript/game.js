window.onload = function () {

  var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
        'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S',
        'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  
  var categories;         // Array of topics
  var chosenCategory;     // Selected catagory
  var getHint ;          // Word getHint
  var word ;              // Selected word
  var guess ;             // Geuss
  var geusses = [ ];      // Stored geusses
  var lives ;             // Lives
  var counter ;           // Count correct geusses
  var space;              // Number of spaces in word '-'

  // Get elements
  var showLives = document.getElementById("mylives");
  var showCatagory = document.getElementById("scatagory");
  var getHint = document.getElementById("hint");
  var showClue = document.getElementById("clue");
  var wrongGuesses = [];


  // Game counters
  var winCounter  = 0;
  var lossCounter = 0;
  var numGuesses  = 15;

  // create alphabet ul
  var buttons = function () {
    myButtons = document.getElementById('buttons');
    letters = document.createElement('ul');

    for (var i = 0; i < alphabet.length; i++) {
      letters.id = 'alphabet';
      list = document.createElement('li');
      list.id = 'letter';
      list.innerHTML = alphabet[i];
      check();
      myButtons.appendChild(letters);
      letters.appendChild(list);
    }
  }
    
  
  // Select Catagory
  var selectCat = function () {
    if (chosenCategory === categories[0]) {
      catagoryName.innerHTML = "The Chosen Category Is Most Extreme Rides";
    } else if (chosenCategory === categories[1]) {
      catagoryName.innerHTML = "The Chosen Category Is All About Harry Potter";
    } else if (chosenCategory === categories[2]) {
      catagoryName.innerHTML = "The Chosen Category Is Movie Inspired Adventures";
    }
  }


  // Create geusses ul
   result = function () {
    wordHolder = document.getElementById('hold');
    correct = document.createElement('ul');

    for (var i = 0; i < word.length; i++) {
      correct.setAttribute('id', 'my-word');
      guess = document.createElement('li');
      guess.setAttribute('class', 'guess');
      if (word[i] === "-") {
        guess.innerHTML = "-";
        space = 1;
      } else {
        guess.innerHTML = "_";
      }

      geusses.push(guess);
      wordHolder.appendChild(correct);
      correct.appendChild(guess);
    }
  }
  
  // Show lives
   comments = function () {
    showLives.innerHTML = "You have " + lives + " lives";
    if (lives < 1) {
      showLives.innerHTML = "Game Over";
    }
    for (var i = 0; i < geusses.length; i++) {
      if (counter + space === geusses.length) {
        showLives.innerHTML = "You Win!";
      }
    }
  }

 
  // OnClick Function
   check = function () {
    list.onclick = function () {
      var geuss = (this.innerHTML);
      this.setAttribute("class", "active");
      this.onclick = null;
      for (var i = 0; i < word.length; i++) {
        if (word[i] === geuss) {
          geusses[i].innerHTML = geuss;
          counter += 1;
        } 
      }
      var j = (word.indexOf(geuss));
      if (j === -1) {
        lives -= 1;
        comments();
        // animate();
      } else {
        comments();
      }
    }
  }
  
    
  // Play
    // 0. Most Extreme Rides
    // 1. All About Harry Potter
    // 2. Movie Inspired Adventures
  play = function () {

    categories = [
        ["INCREDIBLE HULK", "THE MUMMY", "RIP RIDE ROCKIT", "MIB ALIEN ATTACK", "DOCTOR DOOM", "TRANSFORMERS", "SPIDER-MAN"],
        ["DRAGON CHALLENGE", "HOGSMEADE", "HOGWARTS EXPRESS", "DIAGON ALLEY", "PUMPKIN JUICE"],
        ["MEN IN BLACK", "SPIDER-MAN", "HARRY POTTER", "JURRASIC PARK", "TRANSFORMERS"]
    ];

    chosenCategory = categories[Math.floor(Math.random() * categories.length)];
    word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
    word = word.replace(/\s/g, "-");
    console.log(word);
    buttons();

    geusses = [ ];
    lives = 15;
    counter = 0;
    space = 0;
    result();
    comments();
    selectCat();
  }

    play();
  
    // Hint
      // 0. Most Extreme Rides
      // 1. All About Harry Potter
      // 2. Movie Inspired Adventures
      hint.onclick = function() {

        hints = [
         ["Enter the lab of Dr. Bruce Banner", "The curse of Imhotep is real and he has risen again", "65mph of music thumping excitment on Hollywood's RRR", 
          "Interactive ride through MIB headquarters zapping Aliens", "The Fantastic Four's arch-nemesis has taken fear to new heights!", "Greatest 3-D battle you’ll ever ride with Bumblebee at your side", 
          "HD animation, 3-D glasses and crime stopping web shooters!"],

          ["Red & Blue racing to the finish line", "Snow covered shopping for young wizards", "King's Cross & Platform 9 3/4", 
          "Only place for all Wizard needs and banking at Gringotts", "Only pint all the kids love"],

          ["TBD", "TBD", "TBD", "TBD", "TBD"],
    ];

    var catagoryIndex = categories.indexOf(chosenCategory);
    var hintIndex = chosenCategory.indexOf(word);
    showClue.innerHTML = "Clue: - " +  hints [catagoryIndex][hintIndex];
  };

   // Restart

  document.getElementById('restart').onclick = function() {
    correct.parentNode.removeChild(correct);
    letters.parentNode.removeChild(letters);
    showClue.innerHTML = "";
    context.clearRect(0, 0, 400, 400);
    play();
  }
}


