use landmark-db;
db.dropDatabase();

db.landmarks.insertMany([
  {
    name: "Great Wall of China",
    country: "China"
    },
  {
    name: "Machu Pichu",
    country: "Peru"
  },
  {
    name: "The Statue of Liberty",
    country: "USA"
  }
])