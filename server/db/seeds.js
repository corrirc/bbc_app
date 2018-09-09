use landmark-db;
db.dropDatabase();

db.landmarks.insertMany([
  {
    landmark_name: "Great Wall of China",
    landmark_location: "China",
    landmark_picture: "/images/pictures/the-great-wall1.jpeg",
    landmark_facts: "The Great Wall is not actually a single wall but a series of walls that together are more than 13,000 miles long.  The wall is over 2,300 years old and because of that some parts of the wall have been badly damaged or have disappeared completely.  Work to rebuild and protect parts of the wall started in 1957.",
    clipart: "/images/clipart/greatwall.jpeg",
    did_you_know_fact: "There is a famous wall in the United Kingdom, called Hadrian's Wall; it however is only 73 miles long.",
    landmark_url: "https://www.chinahighlights.com/greatwall/"
  },
  {
    landmark_name: "Machu Picchu",
    landmark_location: "Peru",
    landmark_picture: "/images/pictures/machu_picchu.jpg",
    landmark_facts: "Machu Picchu was found in 1911 when an explorer decided to find out if rumours about ancient Inca ruins were true.  It is made up of many buildings and pathways, but no one knows very much about who built it or why it was built.",
    clipart: "/images/clipart/machupicchu.jpeg",
    did_you_know_fact: "Ruins can be found all over the United Kingdom; an example of this is Scotland's Skara Brae, a village from prehistoric times.",
    landmark_url "https://www.lonelyplanet.com/peru/machu-picchu"
  },
  {
    landmark_name: "CodeClan Glasgow",
    landmark_location: "Glasgow",
    // landmark_picture:  "/images/pictures/",
    landmark_facts "Currently there are only the 2 CodeClan locations, the first is in Edinburgh at Castle Terrace.  CodeClan Glasgow is the second location, and it can be found in the Clockwork Building off Renfrew Street.",
    // clipart: ""
    did_you_know_fact:  "It is the first and only digital skills academy in Scotland that is accredited by SQA.",
    landmark_url "https://codeclan.com/"
  },
  {
    landmark_name: "The Statue of Liberty",
    landmark_location: "United States of America",
    landmark_picture:  "/images/pictures/statue-of-liberty.jpg",
    landmark_facts: "The Statue of Liberty was originally a gift from the French; to remember how France and the United States of American worked together during the Amerian Revolution.  She is made out of copper, but her torch was recovered in 1986 with thin 24 carat gold sheets.  Gustave Eiffel, who is famous for another French landmark, helped to work on Lady Liberty's inner metal skeleton.",
    clipart: "/images/clipart/liberty.jpg",
    did_you_know_fact: "Statues are very popular and can be seen all over the United Kingdom; from Winston Churchill to Boudica, to Glasgow's own cone-wearing Duke of Wellington.",
    landmark_url: "https://www.nps.gov/stli/index.htm"
  }

  {
    landmark_name: "Eiffel Tower",
    landmark_location: "France",
    landmark_picture:  "/images/pictures/Eiffel_Tower.jpg",
    landmark_facts: "Finished on the 31st of March 1889, after just over 2 years of construction, the Eiffel Tower was never meant to stand more than 20 years; it is still standing today as it has been used as antennas and transmitters.  For over 40 years, it was the tallest man-made structure in the world, standing at just over 320 metres tall.",
    clipart: "/images/clipart/eiffle.jpeg",
    did_you_know_fact  "A similar looking tower can be seen in Blackpool England, as the mayor of the local area was so impressed when he saw it at the World's Fair in 1889; Las Vegas in America and an amusement park in China also have their own versions of the Eiffel Tower.",
    landmark_url: "https://www.toureiffel.paris/en"
  },
  {
    landmark_name: "Leaning Tower of Pisa",
    landmark_location: "Italy",
    landmark_picture:  "/images/pictures/pisa.jpg",
    landmark_facts: "The Leaning Tower of Pisa was never meant to lean when it was started in August of 1173; it is like this as the ground is too soft and it wasn't well planned.  It took over 300 years to build, because wars kept stopping construction, and it only started to lean when the second floor was added. Two times, first in 1990 and again in 2008, attempts have been made to stop the tower from tipping over further and while it isn't moving right now it could again in the future.",
    clipart: "/images/clipart/pisa.jpeg",
    did_you_know_fact "The Leaning Tower of Pisa is not the only building in the world to be leaning; a number of churches in the United Kingdom have similar tilts, including the Temple Church in Bristol, St Nicholas' Church in Gloucester, St James' Church in Dry Doddington, and Glasgow even has a leaning fountain!",
    landmark_url: "http://www.towerofpisa.org/"
  },
  {
    landmark_name: "Big Ben",
    landmark_location: "United Kingdom",
    landmark_picture:  "/images/pictures/big-ben.jpg",
    landmark_facts: "Big Ben, as it is often called, is not actually the tower; Big Ben is actually the nickname of the 'Great Bell' of the clock that is part of the Elizabeth Tower in London.  Big Ben, the biggest chiming clock with 4 faces, started ticking on the 7th of September 1859. Interstingly, the original bell broke just one day after it was tested, but then it was broken up and pieces of it were put inside the current bell! Like another famous landmark, this tower has begun to lean to one side becauses of the ground it is build on.",
    clipart: "/images/clipart/ben.jpeg",
    did_you_know_fact: "The clocks on Big Ben were not the largest in the United Kingdom, from 1905 to 1963, Clydebank Scotland had the Singer Clock that had a clock face that was actually 5 feet bigger!",
    landmark_url: "https://www.parliament.uk/bigben"
  },
  {
    landmark_name: "Taj Mahal",
    landmark_location: "India",
    landmark_picture: "/images/pictures/tajmahal.jpeg",
    landmark_facts: "The Taj Mahal was built as a burial place (or mausoleum) for one of the wives of the emperor, Shah Jahan.  Built out of white marble, it took just over 20 years to complete. The Taj Mahal was built completely symmetrical, but also has parts tilted outwards so that if it collapsed it would fall away from the burial chambers in the middle.",
    clipart: "/images/clipart/tajmahal.jpeg",
    did_you_know_fact:  "The United Kingdom is well known for its graveyards and cemetaries, and while they rarely contain mausoleums, places like Westminster Abbey, Iona Abbey and Greyfriars Kirkyard attract many visitors.",
    landmark_url: "https://whc.unesco.org/en/list/252"
  },
  {
    landmark_name: "Great Pyramid of Giza",
    landmark_location: "Egypt",
    landmark_picture: "/images/pictures/pyramid.jpeg",
    landmark_facts: "Built for similar reasons as the Taj Mahal, the Great Pyramid of Giza contains 3 burial chambers, the main and highest one was for the Pharaoh Khufu. It took about 20 years to build and needed about 2.3 million stone blocks.  Of the pyramids in Giza the Pyramid of Khufu is the biggest and the oldest. Interestingly, it is the mortar between the bricks that is stronger than the bricks themselves and even with testing no one can figure out how to remake it!?",
    clipart: "/images/clipart/pyramids.jpeg",
    did_you_know_fact: "If you look around the United Kingdom, you can see lots of really old things built out of stone; the most popular is dry stone walls; they don't use any mortar in between the stones and can last hundreds of years sometimes!",
    landmark_url "https://www.nationalgeographic.com/archaeology-and-history/archaeology/giza-pyramids/"
  },
  {
    landmark_name: "Moai Statues",
    landmark_location"Easter Island",
    landmark_picture: "/images/pictures/moai1.jpg",
    landmark_facts: "Unlike some of the other landmarks, the Moai statues are not buildings.  Instead of going inside, you have to go out to see them, on an island in the Pacific Ocean.  They are prehistoric carved figures that range in size from just under 2 metres to about 10 metres tall; although one was found lying down that would have been over 20 metres tall!  There are over 880 known statues almost all positioned along the shores and facing in across the land.",
    clipart: "/images/clipart/moai.jpeg",
    did_you_know_fact: "While they are not carved like people, all across the United Kingdom, ancient standing stones can be found.",
    landmark_url:  "https://www.easterisland.travel/easter-island-facts-and-info/moai-statues/"
  },
  {
    landmark_name: "Parthenon",
    landmark_location: "Greece",
    landmark_picture: "/images/pictures/Parthenon3.jpg",
    landmark_facts: ""
    clipart: "/images/clipart/parthenon.jpeg",
    did_you_know_fact:
    landmark_url: "https://whc.unesco.org/en/list/404"
  },
  {
    landmark_name: "The Colosseum",
    landmark_location"Italy",
    landmark_picture: "/images/pictures/big-ben.jpg",
    landmark_facts: ""
    clipart: "/images/clipart/"
    did_you_know_fact:
    landmark_url "https://www.rome.info/colosseum/"
  },
  //
  // {
  //   landmark_name: "",
  //   landmark_location: "",
  //   landmark_picture:
  //   landmark_facts:
  //   clipart:
  //   did_you_know_fact:
  //   landmark_url:
  // },

])
