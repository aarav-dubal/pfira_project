const quarterbacks = [
    { Player_Name: 'Lamar Jackson', Season_Injury_Probability: 42.5, Team: 'BAL' },{ Player_Name: 'Josh Allen', Season_Injury_Probability: 11.8, Team: 'BUF' },
    { Player_Name: 'Jalen Hurts', Season_Injury_Probability: 55.7, Team: 'PHI' },{ Player_Name: 'Jayden Daniels', Season_Injury_Probability: 28.3, Team: 'WAS' },
    { Player_Name: 'Patrick Mahomes', Season_Injury_Probability: 11.4, Team: 'KC' },{ Player_Name: 'Dak Prescott', Season_Injury_Probability: 26.1, Team: 'DAL' },
    { Player_Name: 'Kyler Murray', Season_Injury_Probability: 32.6, Team: 'ARI' },{ Player_Name: 'Joe Burrow', Season_Injury_Probability: 63.3, Team: 'CIN' },
    { Player_Name: 'CJ Stroud', Season_Injury_Probability: 25.7, Team: 'HOU' },{ Player_Name: 'Geno Smith', Season_Injury_Probability: 52.5, Team: 'SEA' },
    { Player_Name: 'Brock Purdy', Season_Injury_Probability: 25.3, Team: 'SF' },{ Player_Name: 'Baker Mayfield', Season_Injury_Probability: 27.1, Team: 'TB' },
    { Player_Name: 'Jared Goff', Season_Injury_Probability: 20.1, Team: 'DET' },{ Player_Name: 'Caleb Williams', Season_Injury_Probability: 26.0, Team: 'CHI' },
    { Player_Name: 'Sam Darnold', Season_Injury_Probability: 30.7, Team: 'MIN' },{ Player_Name: 'Jordan Love', Season_Injury_Probability: 19.9, Team: 'GB' },
    { Player_Name: 'Justin Fields', Season_Injury_Probability: 86.6, Team: 'PIT' },{ Player_Name: 'Trevor Lawrence', Season_Injury_Probability: 38.1, Team: 'JAX' },
    { Player_Name: 'Kirk Cousins', Season_Injury_Probability: 17.2, Team: 'ATL' },{ Player_Name: 'Anthony Richardson', Season_Injury_Probability: 40.4, Team: 'IND' },
    { Player_Name: 'Daniel Jones', Season_Injury_Probability: 43.8, Team: 'NYG' },{ Player_Name: 'Aaron Rodgers', Season_Injury_Probability: 35.8, Team: 'NYJ' },
    { Player_Name: 'Justin Herbert', Season_Injury_Probability: 69.2, Team: 'LAC' },{ Player_Name: 'Deshaun Watson', Season_Injury_Probability: 20.8, Team: 'CLE' },
    { Player_Name: 'Bo Nix', Season_Injury_Probability: 21.2, Team: 'DEN' }, { Player_Name: 'Tua Tagovailoa', Season_Injury_Probability: 49.1, Team: 'MIA' },
    { Player_Name: 'Derek Carr', Season_Injury_Probability: 29.2, Team: 'NO' },{ Player_Name: 'Will Levis', Season_Injury_Probability: 40.7, Team: 'TEN' },
    { Player_Name: 'Matthew Stafford', Season_Injury_Probability: 80.3, Team: 'LAR' },{ Player_Name: 'Andy Dalton', Season_Injury_Probability: 19.7, Team: 'CAR' },
    { Player_Name: 'Drake Maye', Season_Injury_Probability: 20.1, Team: 'NE' },{ Player_Name: 'Gardner Minshew', Season_Injury_Probability: 13.4, Team: 'LV' },
    { Player_Name: 'Russell Wilson', Season_Injury_Probability: 38.4, Team: 'PIT' },{ Player_Name: 'Joe Flacco', Season_Injury_Probability: 14.7, Team: 'IND' },
    { Player_Name: 'Spencer Rattler', Season_Injury_Probability: 5.8, Team: 'NO' }
];

const runningBacks = [
    { Player_Name: 'Breece Hall', Season_Injury_Probability: 48.1, Team: 'NYJ' },{ Player_Name: 'Bijan Robinson', Season_Injury_Probability: 41.9, Team: 'ATL' },{ Player_Name: 'Saquon Barkley', Season_Injury_Probability: 57.5, Team: 'PHI' },
    { Player_Name: 'Alvin Kamara', Season_Injury_Probability: 88.3, Team: 'NO' },{ Player_Name: 'Kyren Williams', Season_Injury_Probability: 88.7, Team: 'LAR' },{ Player_Name: 'Jahmyr Gibbs', Season_Injury_Probability: 62.6, Team: 'DET' },
    { Player_Name: 'Derrick Henry', Season_Injury_Probability: 29.4, Team: 'BAL' },{ Player_Name: 'DeVon Achane', Season_Injury_Probability: 83.4, Team: 'MIA' }, { Player_Name: 'Josh Jacobs', Season_Injury_Probability: 79.8, Team: 'GB' },
    { Player_Name: 'James Conner', Season_Injury_Probability: 88.4, Team: 'ARI' },{ Player_Name: 'James Cook', Season_Injury_Probability: 31.5, Team: 'BUF' },{ Player_Name: 'David Montgomery', Season_Injury_Probability: 80.5, Team: 'DET' },
    { Player_Name: 'Jonathan Taylor', Season_Injury_Probability: 65.3, Team: 'IND' },{ Player_Name: 'Tony Pollard', Season_Injury_Probability: 34.7, Team: 'TEN' },{ Player_Name: 'Aaron Jones', Season_Injury_Probability: 87.6, Team: 'MIN' },
    { Player_Name: 'Kenneth Walker III', Season_Injury_Probability: 41.8, Team: 'SEA' },{ Player_Name: 'Rhamondre Stevenson', Season_Injury_Probability: 55.5, Team: 'NE' },{ Player_Name: 'Joe Mixon', Season_Injury_Probability: 68.4, Team: 'HOU' },
    { Player_Name: 'JK Dobbins', Season_Injury_Probability: 24.0, Team: 'LAC' },{ Player_Name: 'DAndre Swift', Season_Injury_Probability: 67.3, Team: 'CHI' },{ Player_Name: 'Travis Etienne', Season_Injury_Probability: 39.6, Team: 'JAX' },
    { Player_Name: 'Brian Robinson Jr.', Season_Injury_Probability: 45.9, Team: 'WAS' },{ Player_Name: 'Najee Harris', Season_Injury_Probability: 28.2, Team: 'PIT' },{ Player_Name: 'Jordan Mason', Season_Injury_Probability: 13.6, Team: 'SF' },
    { Player_Name: 'Javonte Williams', Season_Injury_Probability: 79.6, Team: 'DEN' },{ Player_Name: 'Zack Moss', Season_Injury_Probability: 68.7, Team: 'CIN' },{ Player_Name: 'Rachaad White', Season_Injury_Probability: 43.2, Team: 'TB' },
    { Player_Name: 'Chuba Hubbard', Season_Injury_Probability: 29.6, Team: 'CAR' },{ Player_Name: 'Devin Singletary', Season_Injury_Probability: 38.5, Team: 'NYG' },{ Player_Name: 'Chase Brown', Season_Injury_Probability: 23.5, Team: 'CIN' },
    { Player_Name: 'Rico Dowdle', Season_Injury_Probability: 21.2, Team: 'DAL' },{ Player_Name: 'Jerome Ford', Season_Injury_Probability: 41.2, Team: 'CLE' },{ Player_Name: 'Alexander Mattison', Season_Injury_Probability: 33.5, Team: 'MIA' },
    { Player_Name: 'Bucky Irving', Season_Injury_Probability: 29.2, Team: 'MIN' },{ Player_Name: 'Austin Ekeler', Season_Injury_Probability: 36.3, Team: 'DEN' },{ Player_Name: 'Tyjae Spears', Season_Injury_Probability: 29.2, Team: 'BAL' },
    { Player_Name: 'Zach Charbonnet', Season_Injury_Probability: 64.0, Team: 'KC' },{ Player_Name: 'Jaylen Warren', Season_Injury_Probability: 48.7, Team: 'NYJ' },{ Player_Name: 'Isiah Pacheco', Season_Injury_Probability: 90.4, Team: 'NE' },
    { Player_Name: 'Braelon Allen', Season_Injury_Probability: 34.5, Team: 'JAX' },{ Player_Name: 'Antonio Gibson', Season_Injury_Probability: 81.0, Team: 'LV' },{ Player_Name: 'Tank Bigsby', Season_Injury_Probability: 14.9, Team: 'TB' },
    { Player_Name: 'Zamir White', Season_Injury_Probability: 29.5, Team: 'WAS' },{ Player_Name: 'Christian McCaffrey', Season_Injury_Probability: 63.6, Team: 'TEN' },{ Player_Name: 'Nick Chubb', Season_Injury_Probability: 74.1, Team: 'SEA' },
    { Player_Name: 'Raheem Mostert', Season_Injury_Probability: 88.8, Team: 'PIT' },{ Player_Name: 'Ty Chandler', Season_Injury_Probability: 29.2, Team: 'KC' },{ Player_Name: 'Jaleel McLaughlin', Season_Injury_Probability: 21.0, Team: 'NE' },
    { Player_Name: 'Justice Hill', Season_Injury_Probability: 33.1, Team: 'JAX' },{ Player_Name: 'Kareem Hunt', Season_Injury_Probability: 31.0, Team: 'LV' },{ Player_Name: 'Ezekiel Elliott', Season_Injury_Probability: 38.1, Team: 'SF' },
    { Player_Name: 'Jonathon Brooks', Season_Injury_Probability: 29.9, Team: 'CLE' },{ Player_Name: 'Roschon Johnson', Season_Injury_Probability: 31.3, Team: 'MIA' },{ Player_Name: 'Tyler Allgier', Season_Injury_Probability: 17.6, Team: 'MIN' },
    { Player_Name: 'Blake Corum', Season_Injury_Probability: 23.3, Team: 'DEN' },{ Player_Name: 'Samaje Perine', Season_Injury_Probability: 33.5, Team: 'BAL' },{ Player_Name: 'Gus Edwards', Season_Injury_Probability: 31.0, Team: 'KC' },
    { Player_Name: 'Trey Benson', Season_Injury_Probability: 31.0, Team: 'DAL' },
];


const wideReceivers = [
    { Player_Name: 'CeeDee Lamb', Season_Injury_Probability: 50.2, Team: 'DAL' },{ Player_Name: 'JaMarr Chase', Season_Injury_Probability: 75.1, Team: 'CIN' },{ Player_Name: 'Amon-Ra St. Brown', Season_Injury_Probability: 39.9, Team: 'DET' },
    { Player_Name: 'Justin Jefferson', Season_Injury_Probability: 66.9, Team: 'MIN' },{ Player_Name: 'Tyreek Hill', Season_Injury_Probability: 58.9, Team: 'MIA' },{ Player_Name: 'DK Metcalf', Season_Injury_Probability: 31.1, Team: 'SEA' },
    { Player_Name: 'Garrett Wilson', Season_Injury_Probability: 38.1, Team: 'NYJ' },{ Player_Name: 'Malik Nabers', Season_Injury_Probability: 29.2, Team: 'NYG' },{ Player_Name: 'Chris Godwin', Season_Injury_Probability: 73.5, Team: 'TB' },
    { Player_Name: 'Drake London', Season_Injury_Probability: 86.6, Team: 'ATL' },{ Player_Name: 'Deebo Samuel', Season_Injury_Probability: 86.6, Team: 'SF' },{ Player_Name: 'Mike Evans', Season_Injury_Probability: 81.5, Team: 'TB' },
    { Player_Name: 'DJ Moore', Season_Injury_Probability: 44.8, Team: 'CHI' },{ Player_Name: 'DeVonta Smith', Season_Injury_Probability: 81.8, Team: 'PHI' },{ Player_Name: 'Diontae Johnson', Season_Injury_Probability: 80.3, Team: 'CAR' },
    { Player_Name: 'Jayden Reed', Season_Injury_Probability: 82.8, Team: 'GB' },{ Player_Name: 'Brandon Aiyuk', Season_Injury_Probability: 45.3, Team: 'SF' },{ Player_Name: 'Stefon Diggs', Season_Injury_Probability: 31.5, Team: 'HOU' },
    { Player_Name: 'AJ Brown', Season_Injury_Probability: 70.5, Team: 'PHI' },{ Player_Name: 'Nico Collins', Season_Injury_Probability: 82.1, Team: 'HOU' },{ Player_Name: 'Chris Olave', Season_Injury_Probability: 68.7, Team: 'NO' },
    { Player_Name: 'Marvin Harrison Jr.', Season_Injury_Probability: 42.8, Team: 'ARI' },{ Player_Name: 'Zay Flowers', Season_Injury_Probability: 35.6, Team: 'BAL' },{ Player_Name: 'Terry McLaurin', Season_Injury_Probability: 42.7, Team: 'WAS' },
    { Player_Name: 'Cooper Kupp', Season_Injury_Probability: 53.8, Team: 'LAR' },{ Player_Name: 'Jaylen Waddle', Season_Injury_Probability: 55.4, Team: 'MIA' },{ Player_Name: 'Jaxon Smith-Njigba', Season_Injury_Probability: 39.9, Team: 'SEA' },
    { Player_Name: 'George Pickens', Season_Injury_Probability: 34.7, Team: 'PIT' },{ Player_Name: 'Tank Dell', Season_Injury_Probability: 36.2, Team: 'HOU' },{ Player_Name: 'Amari Cooper', Season_Injury_Probability: 73.7, Team: 'BUF' },
    { Player_Name: 'Michael Pittman Jr.', Season_Injury_Probability: 70.1, Team: 'IND' },{ Player_Name: 'Brian Thomas Jr.', Season_Injury_Probability: 30.1, Team: 'JAX' },{ Player_Name: 'Xavier Worthy', Season_Injury_Probability: 36.9, Team: 'TB' },
    { Player_Name: 'Christian Kirk', Season_Injury_Probability: 86.1, Team: 'JAX' },{ Player_Name: 'Tee Higgins', Season_Injury_Probability: 89.2, Team: 'CIN' },{ Player_Name: 'Puka Nacua', Season_Injury_Probability: 68.2, Team: 'LAR' },
    { Player_Name: 'Rashid Shaheed', Season_Injury_Probability: 65.9, Team: 'NO' },{ Player_Name: 'Jameson Williams', Season_Injury_Probability: 43.4, Team: 'DET' },{ Player_Name: 'Tyler Lockett', Season_Injury_Probability: 25.7, Team: 'SEA' },
    { Player_Name: 'Courtland Sutton', Season_Injury_Probability: 70.4, Team: 'DEN' },{ Player_Name: 'Davante Adams', Season_Injury_Probability: 43.6, Team: 'NYJ' },{ Player_Name: 'Rome Odunze', Season_Injury_Probability: 61.3, Team: 'CHI' },
    { Player_Name: 'Darnell Mooney', Season_Injury_Probability: 85.0, Team: 'ATL' },{ Player_Name: 'WanDale Robinson', Season_Injury_Probability: 39.4, Team: 'NYG' },{ Player_Name: 'Calvin Ridley', Season_Injury_Probability: 29.4, Team: 'TEN' },
    { Player_Name: 'Keenan Allen', Season_Injury_Probability: 74.9, Team: 'CHI' },{ Player_Name: 'Khalil Shakir', Season_Injury_Probability: 29.9, Team: 'BUF' },{ Player_Name: 'Jakobi Meyers', Season_Injury_Probability: 67.3, Team: 'LV' },
    { Player_Name: 'Jordan Addison', Season_Injury_Probability: 69.8, Team: 'MIN' },{ Player_Name: 'DeAndre Hopkins', Season_Injury_Probability: 73.7, Team: 'KC' },{ Player_Name: 'JuJu Smith-Schuster', Season_Injury_Probability: 72.1, Team: 'KC' },
    { Player_Name: 'Ladd McConkey', Season_Injury_Probability: 55.4, Team: 'LAC' },{ Player_Name: 'Jerry Jeudy', Season_Injury_Probability: 45.2, Team: 'CLE' },{ Player_Name: 'Demario Douglas', Season_Injury_Probability: 62.6, Team: 'NE' },
    { Player_Name: 'Christian Watson', Season_Injury_Probability: 74.9, Team: 'GB' },{ Player_Name: 'Josh Downs', Season_Injury_Probability: 57.6, Team: 'IND' },{ Player_Name: 'Romeo Doubs', Season_Injury_Probability: 43.2, Team: 'GB' },
    { Player_Name: 'Allen Lazard', Season_Injury_Probability: 29.4, Team: 'NYJ' },{ Player_Name: 'Michael Wilson', Season_Injury_Probability: 44.8, Team: 'ARI' },{ Player_Name: 'Keon Coleman', Season_Injury_Probability: 37.6, Team: 'BUF' },
    { Player_Name: 'Gabe Davis', Season_Injury_Probability: 41.5, Team: 'JAX' },{ Player_Name: 'Xavier Legette', Season_Injury_Probability: 44.4, Team: 'CAR' },{ Player_Name: 'Greg Dortch', Season_Injury_Probability: 36.3, Team: 'ARI' },
    { Player_Name: 'Josh Palmer', Season_Injury_Probability: 73.7, Team: 'LAC' },{ Player_Name: 'Quentin Johnston', Season_Injury_Probability: 37.6, Team: 'LAC' },{ Player_Name: 'Alec Pierce', Season_Injury_Probability: 39.2, Team: 'IND' },
    { Player_Name: 'Mike Williams', Season_Injury_Probability: 79.7, Team: 'NYJ' },{ Player_Name: 'Jauan Jennings', Season_Injury_Probability: 13.5, Team: 'SF' },{ Player_Name: 'Rashod Bateman', Season_Injury_Probability: 64.7, Team: 'BAL' },
    { Player_Name: 'Darius Slayton', Season_Injury_Probability: 74.2, Team: 'NYG' },{ Player_Name: 'Curtis Samuel', Season_Injury_Probability: 82.7, Team: 'BUF' },{ Player_Name: 'Dontayvion Wicks', Season_Injury_Probability: 44.2, Team: 'GB' },
    { Player_Name: 'Andrei Iosivas', Season_Injury_Probability: 13.9, Team: 'CIN'}
];

const tightEnds = [
    { Player_Name: 'Travis Kelce', Season_Injury_Probability: 35.6, Team: 'KC' },{ Player_Name: 'Brock Bowers', Season_Injury_Probability: 29.2, Team: 'LV' },{ Player_Name: 'Trey McBride', Season_Injury_Probability: 46.9, Team: 'ARI' },
    { Player_Name: 'Dalton Kincaid', Season_Injury_Probability: 52, Team: 'BUF' },{ Player_Name: 'Sam LaPorta', Season_Injury_Probability: 53.6, Team: 'DET' },{ Player_Name: 'George Kittle', Season_Injury_Probability: 80.6, Team: 'SF' },
    { Player_Name: 'Jake Ferguson', Season_Injury_Probability: 40.9, Team: 'DAL' },{ Player_Name: 'Kyle Pitts', Season_Injury_Probability: 61.6, Team: 'ATL' },{ Player_Name: 'Mark Andrews', Season_Injury_Probability: 61.0, Team: 'BAL' },
    { Player_Name: 'Dallas Goedert', Season_Injury_Probability: 76.4, Team: 'PHI' },{ Player_Name: 'Tucker Kraft', Season_Injury_Probability: 26.1, Team: 'GB' },{ Player_Name: 'Cole Kmet', Season_Injury_Probability: 51.9, Team: 'CHI' },
    { Player_Name: 'Pat Freiermuth', Season_Injury_Probability: 88.3, Team: 'PIT' },{ Player_Name: 'David Njoku', Season_Injury_Probability: 51.4, Team: 'CLE' },{ Player_Name: 'Isaiah Likely', Season_Injury_Probability: 26.3, Team: 'BAL' },
    { Player_Name: 'Dalton Schultz', Season_Injury_Probability: 36.1, Team: 'HOU' },{ Player_Name: 'Tyler Conklin', Season_Injury_Probability: 29.2, Team: 'NYJ' },{ Player_Name: 'TJ Hockenson', Season_Injury_Probability: 40.4, Team: 'MIN' },
    { Player_Name: 'Cade Otton', Season_Injury_Probability: 29.8, Team: 'TB' },{ Player_Name: 'Evan Engram', Season_Injury_Probability: 33.1, Team: 'JAX' },{ Player_Name: 'Zach Ertz', Season_Injury_Probability: 83.6, Team: 'WAS' },
    { Player_Name: 'Hunter Henry', Season_Injury_Probability: 39.6, Team: 'NE' },{ Player_Name: 'Noah Fant', Season_Injury_Probability: 63.6, Team: 'SEA' },{ Player_Name: 'Juwan Johnson', Season_Injury_Probability: 39.2, Team: 'NO' },
    { Player_Name: 'Jonnu Smith', Season_Injury_Probability: 59.6, Team: 'MIA' },{ Player_Name: 'Chigoziem Okonkwo', Season_Injury_Probability: 29.2, Team: 'TEN' },{ Player_Name: 'Mike Gesicki', Season_Injury_Probability: 22.6, Team: 'CIN' },
    { Player_Name: 'Theo Johnson', Season_Injury_Probability: 20.3, Team: 'NYG' },{ Player_Name: 'Foster Moreau', Season_Injury_Probability: 19.9, Team: 'NO' },{ Player_Name: 'Will Dissly', Season_Injury_Probability: 23.9, Team: 'LAC' },
    { Player_Name: 'Hayden Hurst', Season_Injury_Probability: 44.1, Team: 'LAC' },{ Player_Name: 'Luke Musgrave', Season_Injury_Probability: 32.4, Team: 'GB' },{ Player_Name: 'Kylen Granson', Season_Injury_Probability: 20.3, Team: 'IND' },
    { Player_Name: 'Gerald Everett', Season_Injury_Probability: 38.1, Team: 'CHI' },{ Player_Name: 'Dawson Knox', Season_Injury_Probability: 63.6, Team: 'BUF' },{ Player_Name: 'Austin Hooper', Season_Injury_Probability: 19.9, Team: 'NE' },
    { Player_Name: 'Brenton Strange', Season_Injury_Probability: 19.9, Team: 'JAX' },{ Player_Name: 'Mo Alie-Cox', Season_Injury_Probability: 24.0, Team: 'IND' },{ Player_Name: 'Greg Dulcich', Season_Injury_Probability: 77.8, Team: 'DEN' }
];

const defensiveLinemen = [
    { Player_Name: 'Joshua Hines-Allen', Season_Injury_Probability: 13.2, Team: 'JAX' },
    { Player_Name: 'Khalil Mack', Season_Injury_Probability: 22.1, Team: 'LAC' },
    { Player_Name: 'Joey Bosa', Season_Injury_Probability: 78.9, Team: 'LAC' },
    { Player_Name: 'Jadeveon Clowney', Season_Injury_Probability: 41, Team: 'CAR' },
    { Player_Name: 'Dante Fowler', Season_Injury_Probability: 6.5, Team: 'WAS' },
    { Player_Name: 'Leonard Williams', Season_Injury_Probability: 24.4, Team: 'SEA' },
    { Player_Name: 'Calais Campbell', Season_Injury_Probability: 5.0, Team: 'MIA' },
    { Player_Name: 'Von Miller', Season_Injury_Probability: 17.0, Team: 'BUF' },
    { Player_Name: 'Uchenna Nwosu', Season_Injury_Probability: 17.9, Team: 'SEA' },
    { Player_Name: 'David Ojabo', Season_Injury_Probability: 19.4, Team: 'BAL' },
    { Player_Name: 'Daron Payne', Season_Injury_Probability: 13.2, Team: 'WAS' },
    { Player_Name: 'Jonathan Allen', Season_Injury_Probability: 17.6, Team: 'WAS' }
];

const linebackers = [
    { Player_Name: 'Roquan Smith', Season_Injury_Probability: 20.1, Team: 'BAL' },
    { Player_Name: 'Logan Wilson', Season_Injury_Probability: 29.2, Team: 'CIN' },
    { Player_Name: 'Bobby Wagner', Season_Injury_Probability: 18, Team: 'WAS' },
    { Player_Name: 'Jeremiah Owusu-Koramoah', Season_Injury_Probability: 29.6, Team: 'CLE' },
    { Player_Name: 'Frankie Luvu', Season_Injury_Probability: 20.6, Team: 'WAS' },
    { Player_Name: 'Tremaine Edmunds', Season_Injury_Probability: 80.0, Team: 'CHI' },
    { Player_Name: 'Eric Kendricks', Season_Injury_Probability: 20.3, Team: 'DAL' },
    { Player_Name: 'Josey Jewell', Season_Injury_Probability: 40.7, Team: 'CAR' },
    { Player_Name: 'Jordan Hicks', Season_Injury_Probability: 8.9, Team: 'CLE' },
    { Player_Name: 'Troy Andersen', Season_Injury_Probability: 30.1, Team: 'ATL' },
    { Player_Name: 'Denzel Perryman', Season_Injury_Probability: 42.0, Team: 'LAC' },
    { Player_Name: 'Shaq Thompson', Season_Injury_Probability: 32.4, Team: 'CAR' },
    { Player_Name: 'Kyle Van Noy', Season_Injury_Probability: 22.0, Team: 'BAL' },
    { Player_Name: 'Matt Milano', Season_Injury_Probability: 18.2, Team: 'BUF' }
];

const defensiveBacks = [
    { Player_Name: 'Marlon Humphrey', Season_Injury_Probability: 50.8, Team: 'BAL' },
    { Player_Name: 'Carlton Davis', Season_Injury_Probability: 64.9, Team: 'DET' },
    { Player_Name: 'Stephon Gilmore', Season_Injury_Probability: 82.9, Team: 'MIN' },
    { Player_Name: 'Trevon Diggs', Season_Injury_Probability: 31.3, Team: 'DAL' },
    { Player_Name: 'Jaycee Horn', Season_Injury_Probability: 41.5, Team: 'CAR' },
    { Player_Name: 'Denzel Ward', Season_Injury_Probability: 45.6, Team: 'CLE' },
    { Player_Name: 'AJ Terrell', Season_Injury_Probability: 30.3, Team: 'ATL' },
    { Player_Name: 'Mike Hughes', Season_Injury_Probability: 19.7, Team: 'ATL' },
    { Player_Name: 'Devon Witherspoon', Season_Injury_Probability: 29.4, Team: 'SEA' },
    { Player_Name: 'Derwin James', Season_Injury_Probability: 65.8, Team: 'LAC' },
    { Player_Name: 'Budda Baker', Season_Injury_Probability: 37.9, Team: 'ARI' },
    { Player_Name: 'Kyle Hamilton', Season_Injury_Probability: 75.3, Team: 'BAL' },
    { Player_Name: 'Brandon Jones', Season_Injury_Probability: 35.8, Team: 'DEN' },
    { Player_Name: 'Grant Delpit', Season_Injury_Probability: 18.9, Team: 'CLE' },
    { Player_Name: 'Jeremy Chinn', Season_Injury_Probability: 29.2, Team: 'CAR' },
    { Player_Name: 'Vonn Bell', Season_Injury_Probability: 28.2, Team: 'CIN' },
    { Player_Name: 'Jordan Fuller', Season_Injury_Probability: 28.2, Team: 'CAR' },
    { Player_Name: 'Malik Hooker', Season_Injury_Probability: 16.0, Team: 'DAL' }
];
