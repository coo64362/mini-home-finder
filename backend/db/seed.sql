/*Saved in projects not just manually in my SQL*/
USE mini_home_finder;

INSERT INTO properties
(title, address, city, state, zip, price, beds, baths, square_feet, image_url, description)
VALUES
(
  'Modern Family Home',
  '125 Maple Street',
  'Atlanta',
  'GA',
  '30318',
  425000,
  4,
  2.5,
  2200,
  'https://placehold.co/600x400',
  'A spacious home with modern finishes and a large backyard.'
),
(
  'Cozy Townhouse',
  '88 Peachtree Lane',
  'Decatur',
  'GA',
  '30030',
  315000,
  3,
  2,
  1600,
  'https://placehold.co/600x400',
  'A comfortable townhouse close to shops, restaurants, and parks.'
),
(
  'Downtown Condo',
  '42 City View Drive',
  'Atlanta',
  'GA',
  '30303',
  280000,
  2,
  2,
  1100,
  'https://placehold.co/600x400',
  'A bright condo with city views and easy access to downtown.'
);