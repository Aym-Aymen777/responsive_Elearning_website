// Select all counter elements
let counters = document.querySelectorAll(".counter h1");
let section = document.querySelector(".counter");
let started = false; // Flag to ensure the animation runs only once

// Function to start counting
function startCount(el) {
  let goal = parseInt(el.dataset.goal, 10); // Get the goal value
  let count = 0; // Initialize count
  let step = Math.ceil(goal / 100); // Determine the increment step for smooth animation

  // Start interval to increment the count
  let interval = setInterval(() => {
    count += step; // Increment by step
    if (count >= goal) {
      count = goal; // Ensure the counter does not exceed the goal
      clearInterval(interval); // Stop the animation
    }
    el.textContent = count+'k'; // Update the counter text
  }, 20); // Set the speed (adjust 20ms for faster/slower animation)
}

// Scroll event to trigger counting
window.addEventListener("scroll", () => {
  // Check if the user has scrolled to the section
  if (window.scrollY >= section.offsetTop - window.innerHeight + 100) {
    if (!started) {
      counters.forEach((counter) => startCount(counter)); // Start counting for each counter
      started = true; // Set flag to true to prevent re-triggering
    }
  }
});

//function to remove elements from body of small screen 
function checkScreenSize() {
  const targetElement = document.querySelectorAll('.target')
  if (window.innerWidth < 800) {
    targetElement.forEach(element => element.remove());
  } 
}
// Run the function on load
checkScreenSize();
// Add a resize event listener
window.addEventListener('resize', checkScreenSize);



 // Add touch scroll momentum for a better user experience
 const scrollers = document.querySelectorAll('.scroller');

        // Add event listeners to each scroller
        scrollers.forEach((scroller) => {
            let isDown = false;
            let startX;
            let scrollLeft;

            scroller.addEventListener('mousedown', (e) => {
                isDown = true;
                scroller.classList.add('active'); // Add active class
                startX = e.pageX - scroller.offsetLeft;
                scrollLeft = scroller.scrollLeft;
            });

            scroller.addEventListener('mouseleave', () => {
                isDown = false;
                scroller.classList.remove('active'); // Remove active class
            });

            scroller.addEventListener('mouseup', () => {
                isDown = false;
                scroller.classList.remove('active'); // Remove active class
            });

            scroller.addEventListener('mousemove', (e) => {
                if (!isDown) return;
                e.preventDefault();
                const x = e.pageX - scroller.offsetLeft;
                const walk = (x - startX) * 2; // Adjust scrolling speed
                scroller.scrollLeft = scrollLeft - walk;
            });
        });


        const rightsections = document.querySelectorAll('.anim1');
        const leftsections =  document.querySelectorAll('.anim2');
// Create an intersection observer
const observer1 = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Add the animation class when section is in view
        entry.target.classList.add('slide1');
        observer.unobserve(entry.target); // Optional: Stop observing once animated
    }
  });
}, {
  threshold: 0.001 // Trigger when 10% of the section is in view
});


const observer2 = new IntersectionObserver((entrie, observer2) => {
  entrie.forEach(el => {
    if (el.isIntersecting) {
      // Add the animation class when section is in view
        el.target.classList.add('slide2');
        observer2.unobserve(el.target); // Optional: Stop observing once animated
    }
  });
}, {
  threshold: 0.001 // Trigger when 10% of the section is in view
});
// Attach the observer to each section
rightsections.forEach(section => {
  observer1.observe(section);
});
leftsections.forEach(section => {
  observer2.observe(section);
});

//hover effect on cards
/* 
let carte =document.querySelectorAll('.courses .card');
let img =document.querySelector('.courses .img');

carte.forEach((entree) => {
  entree.addEventListener('mousemove', () =>{
    entree.style.backgroundColor ='#000026';
    entree.style.cursor='pointer';
    entree.style.color='aliceblue';
    let spaces = document.querySelectorAll('.space');

     spaces.forEach((space) =>{
       if(entree){
        entree.addEventListener('mousemove',()=>{
          space.style.backgroundColor='#000026';
          
        
        })
       } 
      
    }) 

  })
})

 */

const cards = document.querySelectorAll('.card');

// Loop through each card
cards.forEach((card) => {
  card.addEventListener('mouseenter', () => {
    card.style.backgroundColor='#000026';
    card.style.cursor='pointer';
    card.style.color='aliceblue';
    // Target only the .space inside the hovered .card
    const space = card.querySelector('.space');
    if (space) {
      space.style.backgroundColor = '#000026'; // Change background color
    }
  });

  card.addEventListener('mouseleave', () => {
    card.style.backgroundColor='';
    card.style.cursor='';
    card.style.color='';
    // Reset only the .space inside the hovered .card
    const space = card.querySelector('.space');
    if (space) {
      space.style.backgroundColor = ''; // Reset background
      space.style.color = ''; // Reset text color
    }
  })
})
