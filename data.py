import numpy as np
import tkinter as tk
from tkinter import ttk
import pandas as pd


qb = {"Player_Name":['Lamar Jackson','Josh Allen','Jalen Hurts','Jayden Daniels','Patrick Mahomes','Dak Prescott','Kyler Murray','Joe Burrow','CJ Stroud','Geno Smith','Brock Purdy','Baker Mayfield','Jared Goff','Caleb Williams','Sam Darnold','Jordan Love','Justin Fields','Trevor Lawrence',
                     'Kirk Cousins','Anthony Richardson','Daniel Jones','Aaron Rodgers','Justin Herbert','Deshaun Watson','Bo Nix','Tua Tagovailoa','Derek Carr','Will Levis','Matthew Stafford','Andy Dalton','Drake Maye','Gardner Minshew','Russell Wilson','Joe Flacco','Spencer Rattler'], 
      "Season_Injury_Probability":[42.5,11.8,55.7,28.3,11.4,26.1,32.6,63.3,25.7,52.5,25.3,27.1,20.1,26,30.7,19.9,86.6,38.1,17.2,40.4,43.8,35.8,69.2,20.8,21.2,49.1,29.2,40.7,80.3,19.7,20.1,13.4,38.4,14.7,5.8], 
      "Team":['BAL','BUF','PHI','WAS','KC','DAL','ARI','CIN','HOU','SEA','SF','TB','DET','CHI','MIN','GB','PIT','JAX','ATL','IND','NYG','NYJ','LAC','CLE','DEN','MIA','NO','TEN','LAR','CAR','NE','LV','PIT','IND','NO']}
print(pd.DataFrame(qb))

rb = {"Player_Name":['Breece Hall','Bijan Robinson','Saquon Barkley','Alvin Kamara','Kyren Williams','Jahmyr Gibbs','Derrick Henry','DeVon Achane','Josh Jacobs','James Conner','James Cook','David Montgomery','Jonathan Taylor','Tony Pollard','Aaron Jones','Kenneth Walker III','Rhamondre Stevenson','Joe Mixon','JK Dobbins',
                     'DAndre Swift','Travis Etienne','Brian Robinson Jr.','Najee Harris','Jordan Mason','Javonte Williams','Zack Moss','Rachaad White','Chuba Hubbard','Devin Singletary','Chase Brown','Rico Dowdle','Jerome Ford','Alexander Mattison','Bucky Irving','Austin Ekeler','Tyjae Spears','Zach Charbonnet','Jaylen Warren',
                     'Isiah Pacheco','Braelon Allen','Antonio Gibson','Tank Bigsby','Zamir White','Christian McCaffrey','Nick Chubb','Raheem Mostert','Ty Chandler','Jaleel McLaughlin','Justice Hill','Kareem Hunt','Ezekiel Elliott','Jonathon Brooks','Roschon Johnson','Tyler Allgier','Blake Corum','Samaje Perine','Gus Edwards','Trey Benson'], 
      "Season_Injury_Probability":[48.1,41.9,57.5,88.3,88.7,62.6,29.4,83.4,79.8,88.4,31.5,80.5,65.3,34.7,87.6,41.8,55.5,68.4,24,67.3,39.6,45.9,28.2,13.6,79.6,68.7,43.2,29.6,38.5,23.5,21.2,41.2,33.5,29.2,36.3,29.2,64,48.7,90.4,34.5,81,14.9,29.5,63.6,74.1,88.8,29.2,21,33.1,31,38.1,29.9,31.1,20.5,31.3,17.6,49.8,23.3], 
      "Team":['NYJ','ATL','PHI','NO','LAR','DET','BAL','MIA','GB','ARI','BUF','DET','IND','TEN','MIN','SEA','NE','HOU','LAC','CHI','JAX','WAS','PIT','SF','DEN','CIN','TB','CAR','NYG','CIN','DAL','CLE','LV','TB','WAS','TEN','SEA','PIT','KC','NYJ','NE','JAX','LV','SF','CLE','MIA','MIN','DEN','BAL','KC','DAL','CAR','CHI','ATL','LAR','KC','LAC','ARI']}
print(pd.DataFrame(rb))

wr = {"Player_Name":['CeeDee Lamb','JaMarr Chase','Amon-Ra St. Brown','Justin Jefferson','Tyreek Hill','DK Metcalf','Garrett Wilson','Malik Nabers','Chris Godwin','Drake London','Deebo Samuel','Mike Evans','DJ Moore','DeVonta Smith','Diontae Johnson','Jayden Reed',
                     'Brandon Aiyuk','Stefon Diggs','AJ Brown','Nico Collins','Chris Olave','Marvin Harrison Jr.','Zay Flowers','Terry McLaurin','Cooper Kupp','Jaylen Waddle','Jaxon Smith-Njigba','George Pickens','Tank Dell','Amari Cooper','Michael Pittman Jr.',
                     'Brian Thomas Jr.','Xavier Worthy','Christian Kirk','Tee Higgins','Puka Nacua','Rashid Shaheed','Jameson Williams','Tyler Lockett','Courtland Sutton','Davante Adams','Rome Odunze','Darnell Mooney','WanDale Robinson','Calvin Ridley','Keenan Allen','Khalil Shakir',
                     'Jakobi Meyers','Jordan Addison','DeAndre Hopkins','JuJu Smith-Schuster','Ladd McConkey','Jerry Jeudy','Demario Douglas','Christian Watson','Josh Downs','Romeo Doubs','Allen Lazard','Michael Wilson','Keon Coleman','Gabe Davis','Xavier Legette','Greg Dortch','Josh Palmer',
                     'Quentin Johnston','Alec Pierce','Mike Williams','Jauan Jennings','Rashod Bateman','Darius Slayton','Curtis Samuel','Dontayvion Wicks','Andrei Iosivas'], 
      "Season_Injury_Probability":[50.2,75.1,39.9,66.9,58.9,31.1,38.1,29.2,73.5,86.6,86.6,81.5,44.8,81.8,80.3,82.8,45.3,31.5,70.5,82.1,68.7,42.8,35.6,42.7,53.8,55.4,39.9,34.7,36.2,73.7,70.1,30.1,36.9,86.1,89.2,68.2,65.9,43.4,25.7,70.4,43.6,61.3,85,39.4,29.4,74.9,29.9,
                                   67.3,69.8,73.7,72.1,55.4,45.2,62.6,74.9,57.6,43.2,29.4,44.8,37.6,41.5,44.4,36.3,73.7,37.6,39.2,79.7,13.5,64.7,74.2,82.7,44.2,13.9],
      "Team":['DAL','CIN','DET','MIN','MIA','SEA','NYJ','NYG','TB','ATL','SF','TB','CHI','PHI','CAR','GB','SF','HOU','PHI','HOU','NO','ARI','BAL','WAS','LAR','MIA','SEA','PIT','HOU','BUF','IND','JAX','TB','JAX','CIN','LAR','NO','DET','SEA','DEN','NYJ','CHI','ATL','NYG',
              'TEN','CHI','BUF','LV','MIN','KC','KC','LAC','CLE','NE','GB','IND','GB','NYJ','ARI','BUF','JAX','CAR','ARI','LAC','LAC','IND','NYJ','SF','BAL','NYG','BUF','GB','CIN']}
print(pd.DataFrame(wr))

te = {"Player_Name":['Travis Kelce','Brock Bowers','Trey McBride','Dalton Kincaid','Sam LaPorta','George Kittle','Jake Ferguson','Kyle Pitts','Mark Andrews','Dallas Goedert','Tucker Kraft','Cole Kmet','Pat Freiermuth','David Njoku','Isaiah Likely','Dalton Schultz','Tyler Conklin','TJ Hockenson','Cade Otton',
                     'Evan Engram','Zach Ertz','Hunter Henry','Noah Fant','Juwan Johnson','Jonnu Smith','Chigoziem Okonkwo','Mike Gesicki','Theo Johnson','Foster Moreau','Will Dissly','Hayden Hurst','Luke Musgrave','Kylen Granson','Gerald Everett','Dawson Knox','Austin Hooper','Brenton Strange','Mo Alie-Cox','Greg Dulcich'], 
      "Season_Injury_Probability":[35.6,29.2,46.9,52,53.6,80.6,40.9,61.6,61,76.4,26.1,51.9,88.3,51.4,26.3,36.1,29.2,40.4,29.8,33.1,83.6,39.6,63.6,39.2,59.6,29.2,22.6,20.3,19.9,23.9,44.1,32.4,20.3,38.1,63.6,19.9,19.9,24,77.8], 
      "Team":['KC','LV','ARI','BUF','DET','SF','DAL','ATL','BAL','PHI','GB','CHI','PIT','CLE','BAL','HOU','NYJ','MIN','TB','JAX','WAS','NE','SEA','NO','MIA','TEN','CIN','NYG','NO','LAC','LAC','GB','IND','CHI','BUF','NE','JAX','IND','DEN']}
print(pd.DataFrame(te))

dl = {"Player_Name":['Joshua Hines-Allen','Khalil Mack','Joey Bosa','Jadeveon Clowney','Dante Fowler','Leonard Williams','Calais Campbell','Von Miller','Uchenna Nwosu','David Ojabo','Daron Payne','Jonathan Allen'],
      "Season_Injury_Probability":[13.2,22.1,78.9,41,6.5,24.4,5,17,17.9,19.4,13.2,17.6], 
      "Team":['JAX','LAC','LAC','CAR','WAS','SEA','MIA','BUF','SEA','BAL','WAS','WAS']} 
print(pd.DataFrame(dl))

lb = {"Player_Name":['Roquan Smith','Logan Wilson','Bobby Wagner','Jeremiah Owusu-Koramoah','Frankie Luvu','Tremaine Edmunds','Eric Kendricks','Josey Jewell','Jordan Hicks','Troy Andersen','Denzel Perryman','Shaq Thompson','Kyle Van Noy','Matt Milano'], 
      "Season_Injury_Probability":[20.1,29.2,18,29.6,20.6,80,20.3,40.7,8.9,30.1,42,32.4,22,18.2], 
      "Team":['BAL','CIN','WAS','CLE','WAS','CHI','DAL','CAR','CLE','ATL','LAC','CAR','BAL','BUF']} 
print(pd.DataFrame(lb))

db = {"Player_Name":['Marlon Humphrey','Carlton Davis','Stephon Gilmore','Trevon Diggs','Jaycee Horn','Denzel Ward','AJ Terrell','Mike Hughes','Devon Witherspoon','Derwin James','Budda Baker','Kyle Hamilton','Brandon Jones','Grant Delpit','Jeremy Chinn','Vonn Bell','Jordan Fuller','Malik Hooker'], 
      "Season_Injury_Probability":[50.8,64.9,82.9,31.3,41.5,45.6,30.3,19.7,29.4,65.8,37.9,75.3,35.8,18.9,29.2,28.2,28.2,16], 
      "Team":['BAL','DET','MIN','DAL','CAR','CLE','ATL','ATL','SEA','LAC','ARI','BAL','DEN','CLE','CAR','CIN','CAR','DAL']} 
print(pd.DataFrame(db))

positions = {
      'quarterbacks': pd.DataFrame(qb),
      'running backs': pd.DataFrame(rb),
      'wide recievers': pd.DataFrame(wr),
      'tight ends': pd.DataFrame(te),
      'defensive linemen': pd.DataFrame(dl),
      'linebackers': pd.DataFrame(lb),
      'defensive backs': pd.DataFrame(db)
}

def update_table(selection):
    # Clear existing rows in the table
    for row in tree.get_children():
        tree.delete(row)
    
    # Add new rows from the selected position's DataFrame
    for _, row in positions[selection].iterrows():
        tree.insert("", "end", values=(row['Player_Name'], row['Season_Injury_Probability'], row['Team']))

# Create the main window
root = tk.Tk()
root.title("NFL Player Injury Data")

# Create a dropdown for selecting the position
position_label = tk.Label(root, text="Select a Player Category")
position_label.pack(pady=10)

position_var = tk.StringVar()
position_dropdown = ttk.Combobox(root, textvariable=position_var)
position_dropdown['values'] = ["Quarterbacks","Running Backs","Wide Receivers","Tight Ends","Defensive Linemen","Linebackers","Defensive Backs"]
position_dropdown.pack(pady=5)
position_dropdown.current(0)  # Set default to first option

# Create a Treeview (table) to display player data
tree = ttk.Treeview(root, columns=("Player", "Season Injury Probability", "Team"), show="headings", height=10)
tree.heading("Player", text="Player Name")
tree.heading("Injury Probability", text="Injury Probability (%)")
tree.heading("Team", text="Team")
tree.pack(pady=20)

update_table("Quarterbacks")

position_dropdown.bind("<<ComboboxSelected>>", lambda event: update_table(position_var.get()))

root.mainloop()
