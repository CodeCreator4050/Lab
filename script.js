
const speakers = [
    {
      name: "Gianni Infantino",
      title: "FIFA President",
      bio: "Leading FIFA to the 2022 World Cup with groundbreaking reforms.",
      image: "images/Gianni.jpeg" 
    },
    {
      name: "Lionel Messi",
      title: "Argentinian Captain",
      bio: "Inspirational leader, aiming to bring glory to Argentina.",
      image: "images/Messi.webp"
    },
    {
      name: "Didier Deschamps",
      title: "Coach of France",
      bio: "Coaching France towards another potential World Cup victory.",
      image: "images/Didier.jpeg"
    },
    {
      name: "Megan Rapinoe",
      title: "Advocate for Equal Pay",
      bio: "Speaking about equality and football’s power to drive change.",
      image: "images/Meghan.jpeg"
    }
  ];
  
  const speakersContainer = document.getElementById('speakers-container');
  
  speakers.forEach(speaker => {
    const speakerCard = document.createElement('div');
    speakerCard.classList.add('speaker-card');

    speakerCard.innerHTML = `
      <img src="${speaker.image}" alt="${speaker.name}" width="100%">
      <h3>${speaker.name}</h3>
      <p><strong>${speaker.title}</strong></p>
      <p>${speaker.bio}</p>
    `;
  
    speakersContainer.appendChild(speakerCard);
  });
  