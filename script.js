// Sample speaker data

const speakers = [
  {
    "id": 1,
    "name": "John Doe",
    "image": "./pictures/Ellipse 23.svg",
    "role": "Software Engineer",
    "company": "Tech Solutions Inc.",
    "description": "Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas."
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "image": "./pictures/Ellipse 26.svg",
    "role": "Product Manager",
    "company": "Innovatech",
    "description": "Skilled in managing cross-functional teams and delivering successful products."
  },
  {
    "id": 3,
    "name": "Alice Johnson",
    "image": "./pictures/Ellipse 25.svg",
    "role": "UX Designer",
    "company": "Creative Minds Co.",
    "description": "Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas."
  },
  {
    "id": 4,
    "name": "Bob Brown",
    "image": "./pictures/Ellipse 24.svg",
    "role": "Data Scientist",
    "company": "Data Insights Ltd.",
    "description": "Expert in data analysis, machine learning, and transforming data into actionable insights."
  },
  {
    "id": 5,
    "name": "Emma Wilson",
    "image": "./pictures/Ellipse 23.svg",
    "role": "DevOps Engineer",
    "company": "CloudNet",
    "description": "Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas."
  },{
    "id": 6,
    "name": "John Wilson",
    "image": "./pictures/Ellipse 25.svg",
    "role": "DevOps Engineer",
    "company": "Specbee",
    "description": "Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas."
  }
]
  
  // Function to open the popover with speaker details
  function openPopover(speakerId) {

    const Popover = document.querySelector('.popover');
      Popover.style.display='flex'
      
    const speaker = speakers.find((spk) => spk.id === speakerId);
    if (speaker) {
      document.querySelector('.speaker-photo').src=speaker.image
      document.querySelector('.names-main-1').textContent = speaker.name;
      document.querySelector('.names-main-2').textContent = speaker.role;
      document.querySelector(".names-sub").textContent=speaker.company
      document.querySelector(".text").textContent=speaker.description
      
    }
  }
  
  // Function to close the popover
  function closePopover() {
    const Popover = document.querySelector('.popover');
    Popover.style.display='none'
  }
  

  function displayItems() {
    const itemList = document.querySelector('.slider-container');
    const speakerList = speakers
        .map(item =>
           `<article class="speaker-card" data-id="1" onclick="openPopover(${item.id})">
          <article class="inner-block">
            <div class="picture">
              <img src="${item.image}" alt="Speaker ${item.id}'s photo" />
            </div>
            <article class="block-element">
              <p class="name">${item.name}</p>
              <div class="details">
                <p class="role">${item.role}</p>
                <p class="company">${item.company}</p>
              </div>
            </article>
          </article>
        </article>`)
        .join('');
    itemList.innerHTML = speakerList;
}
displayItems()

function slideLeft() {
  const container = document.querySelector('.slider-container');
  container.scrollBy({
    left: -400, 
    behavior: 'smooth'
  });
}

// Function to scroll the slider to the right
function slideRight() {
  const container = document.querySelector('.slider-container');
  container.scrollBy({
    left: 400, 
    behavior: 'smooth'
  });
}