// References to DOM elements
const prevBtn = document.querySelector('#prev-btn');
const nextBtn = document.querySelector('#next-btn');
const book = document.querySelector('#book');

// add more papers as needed
const papers = document.querySelectorAll('.paper');
const pages = [];
papers.forEach(paper => {
   const page = paper.getAttribute('data-page');
   pages.push(page);
});

// Testing
console.log(pages);

// Business Logic
let currentState = 0;
let numOfPapers = pages.length;
let maxState = numOfPapers + 1;

// Testing
console.log(numOfPapers);
console.log(maxState);

// Event listeners
prevBtn.addEventListener('click', goPrevious);
nextBtn.addEventListener('click', goNext);

function openBook() {
   book.style.transform = 'translateX(50%)';
   prevBtn.style.transform = 'translateX(-180px)';
   nextBtn.style.transform = 'translateX(180px)';

   // Testing
   console.log('book opened');
}

function closeBook(isFirstPage) {
   if (isFirstPage) {
      book.style.transform = 'translateX(0%)';
   } else {
      book.style.transform = 'translateX(100%)';
   }
   prevBtn.style.transform = 'translateX(0px)';
   nextBtn.style.transform = 'translateX(0px)';

   // Testing
   console.log('book closed');
}

function goNext() {
   if (currentState < maxState) {
      const paper = papers[currentState];

      paper.classList.add('flipped');
      paper.style.zIndex = currentState + 1;
      paper.style.visibility = 'visible';

      if (currentState === 0) {
         openBook();
      } else if (currentState === numOfPapers - 1) {
         closeBook(false);
         console.log('entered');
      }

      currentState++;

      // Testing
      console.log('CS: ' + currentState);
      console.log('z: ' + (currentState + 1));
   }
}

function goPrevious() {
   if (currentState > 0) {
      const paper = papers[currentState - 1];

      paper.classList.remove('flipped');
      paper.style.zIndex = maxState - currentState - 1;

      if (currentState === 1) {
         closeBook(true);
      } else if (currentState === numOfPapers) {
         openBook();
      }
      currentState--;

      // Testing
      console.log(currentState);
      console.log('z:' + (maxState - currentState - 1));
   }
}
