use landmark-db;
db.dropDatabase();

db.landmarks.insertMany([
  {
    landmark_name: "Great Wall of China",
    landmark_location: "China",
    landmark_picture:
    landmark_facts: "The Great Wall is not actually a single wall but a series of walls that together are more than 13,000 miles long.  The wall is over 2,300 years old and because of that some parts of the wall been badly damaged or have disappeared completely.  Work to rebuild and protect parts of the wall started in 1957.",
    clipart: "/images/clipart/greatwall.jpeg",
    did_you_know_fact: "There is a famous wall in the United Kingdom, called Hadrian's Wall; it however is only 73 miles long.",
    landmark_url: "https://www.chinahighlights.com/greatwall/"
  },
  {
    landmark_name: "Machu Picchu",
    landmark_location: "Peru",
    landmark_picture:
    landmark_facts: "Machu Picchu was found in 1911 when an explorer decided to find out if rumours about ancient Inca ruins were true.  It is made up of many buildings and pathways, but no one knows very much about who built it or why it was built.",
    clipart: "/images/clipart/machupicchu.jpeg",
    did_you_know_fact: "Ruins can be found all over the United Kingdom; an example of this is Scotland's Skara Brae, a village from prehistoric times.",
    landmark_url "https://www.lonelyplanet.com/peru/machu-picchu"
  },
  {
    landmark_name: "CodeClan Glasgow",
    landmark_location: "Glasgow",
    landmark_picture:
    landmark_facts "Currently there are only the 2 CodeClan locations, the first is in Edinburgh at Castle Terrace.  CodeClan Glasgow is the second location, and it can be found in the Clockwork Building off Renfrew Street.",
    clipart: ""
    did_you_know_fact:  "It is the first and only digital skills academy in Scotland that is accredited by SQA.",
    landmark_url "https://codeclan.com/"
  },
  {
    landmark_name: "The Statue of Liberty",
    landmark_location: "United States of America",
    landmark_picture:
    landmark_facts: "The Statue of Liberty was originally a gift from the French; to remember of how France and the United States of American worked together during the Amerian Revolution.  She is made out of copper, but her torch was recovered in 1986 with thin 24 carat gold sheets.  Gustave Eiffel, who is famous for another French landmark, helped to work on Lady Liberty's inner metal skeleton.",
    clipart: "/images/clipart/liberty.jpg",
    did_you_know_fact: "Statues are very popular and can be seen all over the United Kingdom; from Winston Churchill to Boudica, to Glasgow's own cone-wearing Duke of Wellington.",
    landmark_url: "https://www.nps.gov/stli/index.htm"
  }

  {
    landmark_name: "Eiffel Tower",
    landmark_location: "France",
    landmark_picture:
    landmark_facts: "Finished on the 31st of March 1889, after just over 2 years of construction, the Eiffel Tower was never meant to stand more than 20 years; it is still standing today as it has been used as antennas and transmitters.  For over 40 years, it was the tallest man-made structure in the world, standing at just over 320 metres tall.",
    clipart: "/images/clipart/eiffle.jpeg",
    did_you_know_fact  "A similar looking tower can be seen in Blackpool England, as the mayor of the local area was so impressed when he saw it at the World's Fair in 1889; Las Vegas in America and an amusement park in China also have their own versions of the Eiffel Tower.",
    landmark_url: "https://www.toureiffel.paris/en"
  },
  {
    landmark_name: "Leaning Tower of Pisa",
    landmark_location: "Italy",
    landmark_picture:
    landmark_facts: "The Leaning Tower of Pisa was never meant to lean when it was started in August of 1173; it is like this as the ground is too soft and it wasn't well planned.  It took over 300 years to build, because wars kept stopping construction, and only started to lean when the second floor was added. Two times, first in 1990 and again in 2008, attempts have been made to stop the tower from tipping over further and while it isn't moving right now it could again in the future.",
    clipart: "/images/clipart/pisa.jpeg",
    did_you_know_fact "The Leaning Tower of Pisa is not the only building in the world to be leaning; a number of churches in the United Kingdom have similar tilts, including the Temple Church in Bristol, St Nicholas' Church in Gloucester, St James' Church in Dry Doddington, and Glasgow even has a leaning fountain!",
    landmark_url: "http://www.towerofpisa.org/"
  },
  {
    landmark_name: "Big Ben",
    landmark_location: "United Kingdom",
    landmark_picture:
    landmark_facts: ""
    clipart: "/images/clipart/ben.jpeg",
    did_you_know_fact:
    landmark_url: "https://www.parliament.uk/bigben"
  },
  {
    landmark_name: "Taj Mahal",
    landmark_location: "India",
    landmark_picture:
    landmark_facts: ""
    clipart: "/images/clipart/tajmahal.jpeg",
    did_you_know_fact:
    landmark_url: "https://whc.unesco.org/en/list/252"
  },
  {
    landmark_name: "Great Pyramid of Giza",
    landmark_location: "Egypt",
    landmark_picture:
    landmark_facts: ""
    clipart: "/images/clipart/pyramids.jpeg",
    did_you_know_fact:
    landmark_url "https://www.nationalgeographic.com/archaeology-and-history/archaeology/giza-pyramids/"
  },
  {
    landmark_name: "Moai Statues",
    landmark_location"Easter Island",
    landmark_picture:
    landmark_facts: ""
    clipart: "/images/clipart/moai.jpeg",
    did_you_know_fact:
    landmark_url: "https://www.easterisland.travel/easter-island-facts-and-info/moai-statues/"
  },
  {
    landmark_name: "Acropolis",
    landmark_location: "Greece",
    landmark_picture:
    landmark_facts: ""
    clipart: "/images/clipart/acropolis.jpeg",
    did_you_know_fact:
    landmark_url: "https://whc.unesco.org/en/list/404"
  },
  {
    landmark_name: "The Colosseum",
    landmark_location"Italy",
    landmark_picture:
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
