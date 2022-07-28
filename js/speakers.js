const moreSpeakers = document.querySelector('#speakers-btn');
const speakersList = document.getElementById('speakers-list');

const speakers = [
  {
    name: 'Babajide Sanwoolu',
    image: './images/sanwoolu.jpg',
    designation: 'Governor, Lagos state.',
    profile:
      'Babajide Olusola Sanwo-Olu is a Nigerian politician and the current Governor of Lagos State.',
  },
  {
    name: 'Babatunde Fashola',
    image: './images/fashola.jpg',
    designation: 'Federal Minister of Works and Housing',
    profile:
      'Babatunde Raji Fashola, SAN is a Nigerian lawyer and current Federal Minister of Works and Housing.',
  },
  {
    name: 'Folorunsho Alakija',
    image: './images/alakija.jpg',
    designation: 'Businesswoman and Philanthropist',
    profile:
      'Folorunsho Alakija is a Nigerian billionaire. She is involved in the fashion, oil, real estate and printing industries.',
  },
  {
    name: 'Tony Elumelu',
    image: './images/toe.jpg',
    designation: 'Economist and Philanthropist',
    profile:
      'Tony Elumelu CON MFR is a Nigerian economist. He chairs Heirs Holdings, Transcorp and founder of The Tony Elumelu Foundation. ',
  },
  {
    name: 'Mitchell Elegbe',
    image: './images/elegbe.jpg',
    designation: 'MD/CEO of Interswitch',
    profile:
      'Mitchell Elegbe is the MD/CEO of Interswitch, an integrated payment and transaction company in Nigeria. He is a graduate of Electrical Engineering from the University of Benin. ',
  },
  {
    name: 'Olugbenga Agboola',
    image: './images/agboola.jpg',
    designation: 'CEO and co-founder of Flutterwave',
    profile: 'Olugbenga Agboola is a Nigerian software engineer and entrepreneur. He is the CEO and co-founder of Flutterwave.',
  },
];

speakers.forEach((speaker, index) => {
  const frag = document.createRange().createContextualFragment(`
        <li>
            <div class='speaker-img'>
                <img class='squaredbg' src='./images/squared-bg.png' alt=''>
                <img class='speakers' src='${speaker.image}' alt='Mark Zukerberg'>
            </div>
            <div class='speaker-bio'>
                <h4 class='speaker-name'>${speaker.name}</h4>
                <p class='speaker-prof'>${speaker.designation}</p>
                <p class='speaker-description'>
                    ${speaker.profile}
                </p>
            </div>
        </li>
    `);
  if (window.innerWidth < 768) {
    if (index < 2) {
      speakersList.append(frag);
    }
  } else {
    speakersList.append(frag);
  }
});

window.addEventListener('resize', () => {
  speakersList.innerHTML = '';
  speakers.forEach((speaker, index) => {
    const frag = document.createRange().createContextualFragment(`
        <li>
            <div class='speaker-img'>
                <img class='squaredbg' src='./images/squared-bg.png' alt=''>
                <img class='speakers' src='${speaker.image}' alt='Mark Zukerberg'>
            </div>
            <div class='speaker-bio'>
                <h4 class='speaker-name'>${speaker.name}</h4>
                <p class='speaker-prof'>${speaker.designation}</p>
                <p class='speaker-description'>
                    ${speaker.profile}
                </p>
            </div>
        </li>
    `);
    if (window.innerWidth < 768) {
      if (index < 2) {
        speakersList.append(frag);
        moreSpeakers.style.display = 'block';
      }
    } else {
      speakersList.append(frag);
      moreSpeakers.style.display = 'none';
    }
  });
});

moreSpeakers.addEventListener('click', () => {
  speakers.forEach((speaker, index) => {
    const frag = document.createRange().createContextualFragment(`
        <li>
            <div class='speaker-img'>
                <img class='squaredbg' src='./images/squared-bg.png' alt=''>
                <img class='speakers' src='${speaker.image}' alt='Mark Zukerberg'>
            </div>
            <div class='speaker-bio'>
                <h4 class='speaker-name'>${speaker.name}</h4>
                <p class='speaker-prof'>${speaker.designation}</p>
                <p class='speaker-description'>
                    ${speaker.profile}
                </p>
            </div>
        </li>
    `);

    if (index >= 2) {
      speakersList.append(frag);
    }
  });

  moreSpeakers.style.display = 'none';
});
