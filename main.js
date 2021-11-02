// const TypeWriter = function (txtElement, words, wait = 3000) {
//   this.txtElement = txtElement;
//   this.words = words;
//   this.txt = "";
//   this.wordIndex = 0;
//   this.wait = parseInt(wait, 10);
//   this.type();
//   this.isDeleting = false;
// };

// // Type method
// TypeWriter.prototype.type = function () {
//   // Current index of words
//   const currentIndex = this.wordIndex % this.words.length;
//   // Get full text of currentIndex words
//   const fullTxt = this.words[currentIndex];
//   // Check if deleting
//   if (this.isDeleting) {
//     // Remove character
//     this.txt = fullTxt.substring(0, this.txt.length - 1);
//   } else {
//     // Add character
//     this.txt = fullTxt.substring(0, this.txt.length + 1);
//   }

//   // Insert txt into element
//   this.txtElement.innerHTML = `<span class='txt'>${this.txt}</span>`;

//   // Initial Type speed
//   let typeSpeed = 300;
//   if (this.isDeleting) {
//     typeSpeed /= 2;
//   }

//   // If word is completed
//   if (!this.isDeleting && this.txt === fullTxt) {
//     // Make pause et the end
//     typeSpeed = this.wait;
//     // Set delete to true
//     this.isDeleting = true;
//   } else if (this.isDeleting && this.txt === "") {
//     this.isDeleting = false;
//     // Move to next word
//     this.wordIndex++;
//     // Pause before typing
//     typeSpeed = 500;
//   }

//   setTimeout(() => this.type(), typeSpeed);
// };

// ES6 classes

class TypeWriter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = "";
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }
  type() {
    // Current index of words
    const currentIndex = this.wordIndex % this.words.length;
    // Get full text of currentIndex words
    const fullTxt = this.words[currentIndex];
    // Check if deleting
    if (this.isDeleting) {
      // Remove character
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      // Add character
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    // Insert txt into element
    this.txtElement.innerHTML = `<span class='txt'>${this.txt}</span>`;

    // Initial Type speed
    let typeSpeed = 300;
    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    // If word is completed
    if (!this.isDeleting && this.txt === fullTxt) {
      // Make pause et the end
      typeSpeed = this.wait;
      // Set delete to true
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      // Move to next word
      this.wordIndex++;
      // Pause before typing
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}

// Init on DOM load
document.addEventListener("DOMContentLoaded", init);

// Init app
function init() {
  // Grab couple of things
  const txtElement = document.querySelector(".txt-type");
  const words = JSON.parse(txtElement.getAttribute("data-words"));
  const wait = txtElement.getAttribute("data-wait");
  //   Init typewriter
  new TypeWriter(txtElement, words, wait);
}
