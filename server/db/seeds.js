use landmark-db;
db.dropDatabase();

db.landmarks.insertMany([
  {
    landmark_name: "Great Wall of China",
    landmark_location: "China",
    continent: "Asia",
    landmark_picture: "/images/pictures/the-great-wall1.jpeg",
    landmark_facts: "The Great Wall is not actually a single wall but a series of walls that together are more than 13,000 miles long.  The wall is over 2,300 years old and because of that some parts of the wall have been badly damaged or have disappeared completely.  Work to rebuild and protect parts of the wall started in 1957.",
    clipart: "/images/clipart/greatwall.jpeg",
    did_you_know_fact: "There is a famous wall in the United Kingdom, called Hadrian's Wall; it however is only 73 miles long.",
    landmark_url: "https://www.chinahighlights.com/greatwall/",
    been_there: false
  },
  {
    landmark_name: "Machu Picchu",
    landmark_location: "Peru",
    continent: "South America",
    landmark_picture: "/images/pictures/machu_picchu.jpg",
    landmark_facts: "Machu Picchu was found in 1911 when an explorer decided to find out if rumours about ancient Inca ruins were true.  It is made up of many buildings and pathways, but no one knows very much about who built it or why it was built.",
    clipart: "/images/clipart/machupicchu.jpeg",
    did_you_know_fact: "Ruins can be found all over the United Kingdom; an example of this is Scotland's Skara Brae, a village from prehistoric times.",
    landmark_url: "https://www.lonelyplanet.com/peru/machu-picchu",
    been_there: false
  },
  {
    landmark_name: "CodeClan Glasgow",
    landmark_location: "United Kingdom",
    continent: "Europe",
    landmark_picture:  "/images/pictures/codeclandglasgow.png",
    landmark_facts: "Currently there are only the 2 CodeClan locations, the first is in Edinburgh at Castle Terrace.  CodeClan Glasgow is the second location, and it can be found in the Clockwork Building off Renfrew Street.",
    clipart: "/images/clipart/cc.png",
    did_you_know_fact:  "It is the first and only digital skills academy in Scotland that is accredited by SQA.",
    landmark_url: "https://codeclan.com/",
    been_there: false
  },
  {
    landmark_name: "The Statue of Liberty",
    landmark_location: "United States of America",
    continent: "North America",
    landmark_picture:  "/images/pictures/statue-of-liberty.jpg",
    landmark_facts: "The Statue of Liberty was originally a gift from the French; to remember how France and the United States of American worked together during the Amerian Revolution.  She is made out of copper, but her torch was recovered in 1986 with thin 24 carat gold sheets.  Gustave Eiffel, who is famous for another French landmark, helped to work on Lady Liberty's inner metal skeleton.",
    clipart: "/images/clipart/liberty.jpeg",
    did_you_know_fact: "Statues are very popular and can be seen all over the United Kingdom; from Winston Churchill to Boudica, to Glasgow's own cone-wearing Duke of Wellington.",
    landmark_url: "https://www.nps.gov/stli/index.htm",
    been_there: false
  },
  {
    landmark_name: "Eiffel Tower",
    landmark_location: "France",
    continent: "Europe",
    landmark_picture:  "/images/pictures/Eiffel_Tower.jpg",
    landmark_facts: "Finished on the 31st of March 1889, after just over 2 years of construction, the Eiffel Tower was never meant to stand more than 20 years; it is still standing today as it has been used as antennas and transmitters.  For over 40 years, it was the tallest man-made structure in the world, standing at just over 320 metres tall.",
    clipart: "/images/clipart/eiffel.jpeg",
    did_you_know_fact:  "A similar looking tower can be seen in Blackpool England, as the mayor of the local area was so impressed when he saw it at the World's Fair in 1889; Las Vegas in America and an amusement park in China also have their own versions of the Eiffel Tower.",
    landmark_url: "https://www.toureiffel.paris/en",
    been_there: false
  },
  {
    landmark_name: "Leaning Tower of Pisa",
    landmark_location: "Italy",
    continent: "Europe",
    landmark_picture:  "/images/pictures/pisa.jpg",
    landmark_facts: "The Leaning Tower of Pisa was never meant to lean when it was started in August of 1173; it is like this as the ground is too soft and it wasn't well planned.  It took over 300 years to build, because wars kept stopping construction, and it only started to lean when the second floor was added. Two times, first in 1990 and again in 2008, attempts have been made to stop the tower from tipping over further and while it isn't moving right now it could again in the future.",
    clipart: "/images/clipart/pisa.jpeg",
    did_you_know_fact: "The Leaning Tower of Pisa is not the only building in the world to be leaning; a number of churches in the United Kingdom have similar tilts, including the Temple Church in Bristol, St Nicholas' Church in Gloucester, St James' Church in Dry Doddington, and Glasgow even has a leaning fountain!",
    landmark_url: "http://www.towerofpisa.org/",
    been_there: false
  },
  {
    landmark_name: "Big Ben",
    landmark_location: "United Kingdom",
    continent: "Europe",
    landmark_picture:  "/images/pictures/big-ben.jpg",
    landmark_facts: "Big Ben, as it is often called, is not actually the tower; Big Ben is actually the nickname of the 'Great Bell' of the clock that is part of the Elizabeth Tower in London.  Big Ben, the biggest chiming clock with 4 faces, started ticking on the 7th of September 1859. Interstingly, the original bell broke just one day after it was tested, but then it was broken up and pieces of it were put inside the current bell! Like another famous landmark, this tower has begun to lean to one side becauses of the ground it is build on.",
    clipart: "/images/clipart/ben.jpeg",
    did_you_know_fact: "The clocks on Big Ben were not the largest in the United Kingdom, from 1905 to 1963, Clydebank Scotland had the Singer Clock that had a clock face that was actually 5 feet bigger!",
    landmark_url: "https://www.parliament.uk/bigben",
    been_there: false
  },
  {
    landmark_name: "Taj Mahal",
    landmark_location: "India",
    continent: "Asia",
    landmark_picture: "/images/pictures/tajmahal.jpeg",
    landmark_facts: "The Taj Mahal was built as a burial place (or mausoleum) for one of the wives of the emperor, Shah Jahan.  Built out of white marble, it took just over 20 years to complete. The Taj Mahal was built completely symmetrical, but also has parts tilted outwards so that if it collapsed it would fall away from the burial chambers in the middle.",
    clipart: "/images/clipart/tajmahal.jpeg",
    did_you_know_fact:  "The United Kingdom is well known for its graveyards and cemetaries, and while they rarely contain mausoleums, places like Westminster Abbey, Iona Abbey and Greyfriars Kirkyard attract many visitors.",
    landmark_url: "https://whc.unesco.org/en/list/252",
    been_there: false
  },
  {
    landmark_name: "Great Pyramid of Giza",
    landmark_location: "Egypt",
    continent: "Africa",
    landmark_picture: "/images/pictures/pyramid.jpeg",
    landmark_facts: "Built for similar reasons as the Taj Mahal, the Great Pyramid of Giza contains 3 burial chambers, the main and highest one was for the Pharaoh Khufu. It took about 20 years to build and needed about 2.3 million stone blocks.  Of the pyramids in Giza the Pyramid of Khufu is the biggest and the oldest. Interestingly, it is the mortar between the bricks that is stronger than the bricks themselves and even with testing no one can figure out how to remake it!?",
    clipart: "/images/clipart/pyramids.JPG",
    did_you_know_fact: "If you look around the United Kingdom, you can see lots of really old things built out of stone; the most popular is dry stone walls; they don't use any mortar in between the stones and can last hundreds of years sometimes!",
    landmark_url: "https://www.nationalgeographic.com/archaeology-and-history/archaeology/giza-pyramids/",
    been_there: false
  },
  {
    landmark_name: "Moai Statues",
    landmark_location: "Easter Island",
    continent: "South America",
    landmark_picture: "/images/pictures/moai1.jpg",
    landmark_facts: "Unlike some of the other landmarks, the Moai statues are not buildings.  Instead of going inside, you have to go out to see them, on an island in the Pacific Ocean.  They are prehistoric carved figures that range in size from just under 2 metres to about 10 metres tall; although one was found lying down that would have been over 20 metres tall!  There are over 880 known statues almost all positioned along the shores and facing in across the land.",
    clipart: "/images/clipart/moai.jpeg",
    did_you_know_fact: "While they are not carved like people, all across the United Kingdom, ancient standing stones can be found.",
    landmark_url:  "https://www.easterisland.travel/easter-island-facts-and-info/moai-statues/",
    been_there: false
  },
  {
    landmark_name: "Parthenon",
    landmark_location: "Greece",
    continent: "Europe",
    landmark_picture: "/images/pictures/Parthenon3.jpg",
    landmark_facts: "Built around 450 BC out of limestone, the Parthenon was a temple to worship the Greek Goddess Athena.  It is believed that once a large gold statue of the goddess once stood inside the temple, but that it was either lost or destroyed by the Romans.  Although it was built as a temple, in later times it was also used as a church and a mosque.",
    clipart: "/images/clipart/parthenon.JPG",
    did_you_know_fact: "The National Monument of Scotland, in Edinburgh, started in 1826, was supposed to look like the Parthenon, however only the base and 12 columns were ever completed and then the project was abandoned.",
    landmark_url: "https://whc.unesco.org/en/list/404",
    been_there: false
  },
  {
    landmark_name: "The Colosseum",
    landmark_location: "Italy",
    continent: "Europe",
    landmark_picture: "/images/pictures/colosseum.jpg",
    landmark_facts: "The Colosseum only took 8 years to build, using concrete and stone, and was completed around 80 AD. An amphitheatre is an ancient sports arena where gladiators used to fight.  The Colosseum was different to most Greek amphitheatres as they were usually built into the sides of hills, but the Colosseum stood all by itself in the middle of Rome.  Over the years, the Colosseum has been damaged by fires, earthquakes, wars, people stealing the bricks to use for other buildings, and even by plants. It is believed that that it is in places such as the ancient Colosseum that the event we now know as the Olympic Games was born.",
    clipart: "/images/clipart/colosseum.jpeg",
    did_you_know_fact: "Shakespear's Globe Theatre in London was built as a smaller version of the Colosseum, in the same round shape and with seating on different levels as the Colosseum once had.",
    landmark_url: "https://www.rome.info/colosseum/",
    been_there: false
  },
  {
    landmark_name: "Christ the Redeemer",
    landmark_location: "Brazil",
    continent: "South America",
    landmark_picture: "/images/pictures/christ_redeemer.jpg",
    landmark_facts: "Started in the 1920s, the Christ the Redeemer statue finally opened in October 1931.  His arms are spread, one reaching north and the other south, as if ready to welcome and hug everyone who visits. He stands about 38 metres tall, and his arms stretch 28 metres wide.",
    clipart: "/images/clipart/christ.jpeg",
    did_you_know_fact: "The United Kingdom does not have a statue of Christ as big as Christ the Redeemer, but it does have the Angel of the North statue in Northern England with its wings outstretched. It is believed to be the largest angel statue in the world.",
    landmark_url: "https://www.britannica.com/topic/Christ-the-Redeemer",
    been_there: false
  },
  {
    landmark_name: "Angkor Wat",
    landmark_location: "Cambodia",
    continent: "Asia",
    landmark_picture: "/images/pictures/angkor.jpg",
    landmark_facts: "Angkor Wat is the largest religious landmark in the world.  At 1,626,000 square metres, it was built originally as a Hindu temple for the god Vishnu.  The name actually translates to 'City of Temples'.",
    clipart: "/images/clipart/angkorwat.jpeg",
    did_you_know_fact: "The United Kingdom does not have a whole city of temples, but everywhere you look there are ancient monuments and religious places of worship.",
    landmark_url: "https://www.tourismcambodia.com/attractions/angkor/angkor-wat.htm",
    been_there: false
  },
  {
    landmark_name: "Hollywood Sign",
    landmark_location: "United States of America",
    continent: "North America",
    landmark_picture: "/images/pictures/hollywood.jpg",
    landmark_facts: "Built in 1923, the original sign was not meant to be a landmark, but an advertising billboard for houses being built, and was only supposed to be there for a year and a half.  Originally it said 'HOLLYWOODLAND' in 50 foot metal letters, lit by approximately 4,000 light bulbs that falshed.  The H was destroyed when it was hit by a car, and then the sign itself was almost torn down, but instead the city fixed the H and removed the LAND.",
    clipart: "/images/clipart/hollywood.JPG",
    did_you_know_fact: "While the United Kingdom doesn't have a sign like Hollywood, lights and billboards are a part of some of our landmarks, such as Piccadilly Circus in London.",
    landmark_url: "https://hollywoodsign.org/",
    been_there: false
  },
  {
    landmark_name: "Stonehenge",
    landmark_location: "United Kingdom",
    continent: "Europe",
    landmark_picture: "/images/pictures/stonehenge.jpeg",
    landmark_facts: "The giant ring of standing stones, is one of the most famous prehistoric stone landmarks in the world.  Built over 4,000 years ago, we are still unsure of why it was built. Scientists have found bones buried around the landmark which means it might have been a burial ground; but they also noticed how well it lines up with the midsummer sunrise and midwinter sunset so think it might have been used as some kind of calendar or place to study the sun and the moon. What is really interesting is that the stones have been brought from all over the U.K. and are not just from that area. Hundreds of stone circles are located all around the United Kingdom; but there is also a Woodhenge (near Stonehenge) and a Seahenge in Norfolk which are both made from wooden logs.",
  // clipart: "/images/clipart/",
    did_you_know_fact: "Do you know of any other great circles? Maybe you live near one or maybe you see important circles somewhere else (like roundabouts or as part of your favourite game).",
    landmark_url: "https://www.natgeokids.com/uk/discover/history/general-history/stonehenge-facts/",
    been_there: false
  },
  {
    landmark_name: "Sphinx",
    landmark_location: "Egypt",
    continent: "Africa",
    landmark_picture: "/images/pictures/sphinx.jpg",
    landmark_facts: "Built more than 4,500 years ago, the Sphinx is the biggest, oldest statues in the world, standing 20 metres tall.  A sphinx is a creature with a human head and lion-like body.  In Egypt, it guarded many important places, including the Great Pyramid. It is surprising that anything it left of the Sphinx as sand, water, wind, and Mother Nature have slowly damaged this ancient landmark, and no way has been found to protect it or stop the damage that continues to happen.",
    // clipart: "/images/clipart/",
    did_you_know_fact: "The United Kingdom has many mythical creatures, from unicorns and kelpies to trolls, fairies, giants and witches, or even a Loch Ness Monster!",
    landmark_url: "https://www.history.com/topics/ancient-egypt/the-sphinx",
    been_there: false
  },
  {
    landmark_name: "Forbidden City",
    landmark_location: "China",
    continent: "Asia",
    landmark_picture: "/images/pictures/forbiddencity.jpeg",
    landmark_facts: "The forbidden city is HUMONGOUS! But it's not really a city, it is a palace complex and fortress in the middle of Beijing City where the Emperor's of China used to live. It took around 500 years to build and has about 980 buildings with almost 9,000 rooms!",
    // clipart: "/images/clipart/",
    did_you_know_fact: "There are many palaces around the United Kingdom, including Buckingham Palace in London and Holyrood Palace in Edinburgh, which are both still lived in by the Royal Family.",
    landmark_url: "https://www.travelchinaguide.com/cityguides/beijing/forbidden.htm",
    been_there: false
  },
  {
    landmark_name: "CN Tower",
    landmark_location: "Canada",
    continent: "North America",
    landmark_picture: "/images/pictures/cntower.jpg",
    landmark_facts: "Construction started in 1973 and it opened in 1976 as the World's tallest free-standing structure at just over 550 metres tall, with no wires helping to hold it up.  It held that record for 30 years, until 2007 when structures in other parts of the world were built taller.  The tower was by the Canadian National Railway and which is where the CN part of its name came from (which is actually the shortened name, its full name is Canada's National Tower). Today it is not just a place to visit, but like the Eiffel Tower is an electronic transmitter for phone and tv signals.",
    clipart: "/images/clipart/cntower.jpeg",
    did_you_know_fact: "The tallest tower in the UK is the Emley Moor transmitter tower in Yorkshire standing at just over 330 metres tall.  Do you know of any other towers?",
    landmark_url: "https://www.cntower.ca/intro.html",
    been_there: false
  },
  // {
  //   landmark_name: "",
  //   landmark_location: "",
  //   landmark_picture: "/images/pictures/",
  //   landmark_facts: "",
  //   clipart: "/images/clipart/",
  //   did_you_know_fact: "",
  //   landmark_url: "",
  //   been_there: false
  // },

])
