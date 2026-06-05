// questions7.js – 200+ nya unika frågor, kontrollerade mot befintliga
const QUESTION_DB7 = {

"🎵 80-tals musik": [
  {q:"Vilket band sjöng 'Don't You Forget About Me'?",o:["The Cure","Simple Minds","New Order","Depeche Mode"],a:1,d:1},
  {q:"Vem sjunger 'Careless Whisper'?",o:["Boy George","George Michael","Simon Le Bon","Howard Jones"],a:1,d:1},
  {q:"Vilket band sjöng 'Rock Me Amadeus'?",o:["Nena","Falco","Modern Talking","Alphaville"],a:1,d:1},
  {q:"Vem sjunger 'Walking on Sunshine'?",o:["Katrina and the Waves","Bananarama","Go-Go's","The Weather Girls"],a:0,d:1},
  {q:"Vilket band sjöng 'Land of Confusion'?",o:["Yes","Genesis","ELO","10cc"],a:1,d:1},
  {q:"Vem sjunger 'Maniac' från Flashdance?",o:["Irene Cara","Laura Branigan","Michael Sembello","Kim Carnes"],a:2,d:1},
  {q:"Vilket band sjöng 'Message in a Bottle'?",o:["Dire Straits","The Police","U2","REM"],a:1,d:1},
  {q:"Vilket år kom Talking Heads 'Once in a Lifetime'?",o:["1979","1980","1981","1982"],a:1,d:2},
  {q:"Vem producerade David Bowies 'Scary Monsters'?",o:["Brian Eno","Tony Visconti","Nile Rodgers","Iggy Pop"],a:1,d:3},
  {q:"Vilket band sjöng 'Atmosphere'?",o:["Joy Division","The Cure","Bauhaus","Wire"],a:0,d:3},
  {q:"Vilket band sjöng 'True Colors'?",o:["Wham!","Human League","Cyndi Lauper","Blondie"],a:2,d:2},
  {q:"Vilket band sjöng 'Everybody Wants to Rule the World'?",o:["Simple Minds","Tears for Fears","OMD","The Alarm"],a:1,d:2},
],

"🎶 90-tals musik": [
  {q:"Vilket band sjöng 'All I Wanna Do'?",o:["Alanis Morissette","Sheryl Crow","Jewel","Shania Twain"],a:1,d:1},
  {q:"Vem sjunger 'Vogue'?",o:["Whitney Houston","Mariah Carey","Madonna","Janet Jackson"],a:2,d:1},
  {q:"Vilket band sjöng 'Breakfast at Tiffany's'?",o:["Hootie & the Blowfish","Blues Traveler","Deep Blue Something","Barenaked Ladies"],a:2,d:2},
  {q:"Vem sjunger 'Candle in the Wind 1997'?",o:["George Michael","Elton John","Rod Stewart","Eric Clapton"],a:1,d:1},
  {q:"Vem sjunger 'When You Believe'?",o:["Whitney Houston & Mariah Carey","Celine Dion & Barbra Streisand","TLC & Destiny's Child","Lauryn Hill & Mary J. Blige"],a:0,d:2},
  {q:"Vilket band sjöng 'Closing Time'?",o:["Third Eye Blind","Counting Crows","Semisonic","The Wallflowers"],a:2,d:2},
  {q:"Vem sjunger 'Doo Wop (That Thing)'?",o:["Missy Elliott","Lauryn Hill","Erykah Badu","Lil Kim"],a:1,d:2},
  {q:"Vilket år kom Massive Attacks 'Mezzanine'?",o:["1996","1998","2000","2002"],a:1,d:3},
  {q:"Vilket år kom Portishead's 'Dummy'?",o:["1992","1994","1996","1998"],a:1,d:3},
  {q:"Vilket band sjöng 'Flagpole Sitta'?",o:["Harvey Danger","Third Eye Blind","Semisonic","Fastball"],a:0,d:2},
  {q:"Vilket år kom Lauryn Hills 'The Miseducation'?",o:["1996","1998","2000","2002"],a:1,d:2},
  {q:"Vem sjunger 'Baby Got Back'?",o:["MC Hammer","Vanilla Ice","Sir Mix-a-Lot","Coolio"],a:2,d:1},
],

"🎤 Ny musik (2010-idag)": [
  {q:"Vem sjunger 'Circles'?",o:["Drake","Post Malone","The Weeknd","Travis Scott"],a:1,d:1},
  {q:"Vem sjunger 'Peaches' (2021)?",o:["Ed Sheeran ft Bruno Mars","Justin Bieber ft Daniel Caesar","The Weeknd","Drake"],a:1,d:1},
  {q:"Vilket band sjöng 'Believer'?",o:["Imagine Dragons","Twenty One Pilots","Fall Out Boy","Panic At The Disco"],a:0,d:1},
  {q:"Vem sjunger 'Therefore I Am'?",o:["Olivia Rodrigo","Billie Eilish","Dua Lipa","Ariana Grande"],a:1,d:1},
  {q:"Vem sjunger 'WAP'?",o:["Nicki Minaj","Cardi B ft Megan Thee Stallion","Doja Cat","Lizzo"],a:1,d:2},
  {q:"Vilket år kom Weeknds 'Starboy'?",o:["2014","2016","2018","2020"],a:1,d:2},
  {q:"Vilket år kom Billie Eilishs 'When We All Fall Asleep'?",o:["2017","2019","2021","2023"],a:1,d:2},
  {q:"Vem sjunger 'All the Stars'?",o:["Kendrick Lamar ft SZA","Drake ft Rihanna","J Cole ft Jhene Aiko","Travis Scott ft Beyoncé"],a:0,d:3},
  {q:"Vilket år kom Tyler the Creators 'Call Me If You Get Lost'?",o:["2019","2021","2022","2023"],a:1,d:3},
  {q:"Vilket år kom Kacey Musgraves 'Golden Hour'?",o:["2016","2018","2020","2022"],a:1,d:3},
  {q:"Vem sjunger 'Love Story (Taylors Version)'?",o:["Taylor Swift","Katy Perry","Selena Gomez","Demi Lovato"],a:0,d:1},
  {q:"Vilket år kom The Weeknds 'Trilogy'?",o:["2010","2012","2014","2016"],a:1,d:3},
],

"🎵 Popmusik (allmänt)": [
  {q:"Vem sjunger 'Bad Romance'?",o:["Katy Perry","Rihanna","Lady Gaga","Kesha"],a:2,d:1},
  {q:"Vem sjunger 'Crazy in Love'?",o:["Rihanna","Beyoncé","Alicia Keys","Mary J Blige"],a:1,d:1},
  {q:"Vilket band sjöng 'Apologize'?",o:["Maroon 5","Matchbox Twenty","OneRepublic","The Script"],a:2,d:1},
  {q:"Vem sjunger 'Firework'?",o:["Lady Gaga","Pink","Katy Perry","Kesha"],a:2,d:1},
  {q:"Vilket år vann Maneskin Eurovision?",o:["2019","2021","2022","2023"],a:1,d:2},
  {q:"Vilket land kommer Maneskin ifrån?",o:["Spanien","Frankrike","Italien","Portugal"],a:2,d:2},
  {q:"Vilket år kom Britneys 'Oops I Did It Again'?",o:["1999","2000","2001","2002"],a:1,d:2},
  {q:"Vem sjunger 'Stronger' (2011 Kelly Clarkson)?",o:["Katy Perry","Kelly Clarkson","Pink","Rihanna"],a:1,d:2},
  {q:"Vilket år kom Adeles '30'?",o:["2019","2020","2021","2022"],a:2,d:2},
  {q:"Vilket skivbolag är Taylor Swift på (nu)?",o:["Big Machine","Republic Records","Columbia","Universal"],a:1,d:3},
  {q:"Vem sjunger 'Just Dance'?",o:["Katy Perry","Rihanna","Lady Gaga","Kesha"],a:2,d:1},
  {q:"Vem sjunger 'As Long as You Love Me' (Bieber)?",o:["One Direction","NSYNC","Backstreet Boys","Justin Bieber"],a:3,d:2},
],

"🎸 Rock & Metal": [
  {q:"Vilket band sjöng 'Killing in the Name'?",o:["Rage Against the Machine","Soundgarden","Tool","System of a Down"],a:0,d:1},
  {q:"Vilket band sjöng 'Smoke on the Water'?",o:["Led Zeppelin","Black Sabbath","Deep Purple","Uriah Heep"],a:2,d:1},
  {q:"Vilket band sjöng 'Alive' (Pearl Jam)?",o:["Soundgarden","Alice in Chains","Pearl Jam","Stone Temple Pilots"],a:2,d:1},
  {q:"Vilket band sjöng 'Dirty Deeds Done Dirt Cheap'?",o:["AC/DC","Aerosmith","Rose Tattoo","Accept"],a:0,d:1},
  {q:"Vilket band sjöng 'Schism'?",o:["Rage Against the Machine","Tool","System of a Down","Mastodon"],a:1,d:2},
  {q:"Vilket år kom Queens of the Stone Age 'Songs for the Deaf'?",o:["2000","2002","2004","2006"],a:1,d:2},
  {q:"Vilket band sjöng 'Do I Wanna Know'?",o:["The Black Keys","Arctic Monkeys","The Strokes","Interpol"],a:1,d:2},
  {q:"Vilket år kom Radioheads 'In Rainbows'?",o:["2005","2007","2009","2011"],a:1,d:2},
  {q:"Vilket band sjöng 'Comfortably Numb'?",o:["Led Zeppelin","Deep Purple","Pink Floyd","Genesis"],a:2,d:2},
  {q:"Vilket band sjöng 'A Design for Life'?",o:["Oasis","Manic Street Preachers","Blur","Suede"],a:1,d:3},
  {q:"Vilket år kom My Bloody Valentines 'Loveless'?",o:["1989","1991","1993","1995"],a:1,d:3},
  {q:"Vilket år kom Led Zeppelins 'Physical Graffiti'?",o:["1973","1975","1977","1979"],a:1,d:3},
],

"🔥 Heavy Metal": [
  {q:"Vilket band sjöng 'One' (Metallica)?",o:["Slayer","Metallica","Megadeth","Anthrax"],a:1,d:1},
  {q:"Vilket band sjöng 'Painkiller'?",o:["Iron Maiden","Saxon","Judas Priest","Motörhead"],a:2,d:1},
  {q:"Vilket band sjöng 'Crazy Train'?",o:["Black Sabbath","Ozzy Osbourne","Dio","Rainbow"],a:1,d:1},
  {q:"Vilket band sjöng 'Seek and Destroy'?",o:["Slayer","Metallica","Megadeth","Anthrax"],a:1,d:1},
  {q:"Vilket band sjöng 'Iron Fist'?",o:["Judas Priest","Saxon","Iron Maiden","Motörhead"],a:3,d:2},
  {q:"Vilket band sjöng 'Dyers Eve'?",o:["Slayer","Megadeth","Metallica","Anthrax"],a:2,d:2},
  {q:"Vilket band sjöng 'Caught in a Mosh'?",o:["Slayer","Metallica","Megadeth","Anthrax"],a:3,d:2},
  {q:"Vilket år kom Meshuggah 'Destroy Erase Improve'?",o:["1993","1995","1997","1999"],a:1,d:3},
  {q:"Vilket år kom Opeth 'Blackwater Park'?",o:["1999","2001","2003","2005"],a:1,d:3},
  {q:"Vilket band sjöng 'Harvester of Sorrow'?",o:["Slayer","Megadeth","Metallica","Anthrax"],a:2,d:3},
  {q:"Vilket år kom Tool 'Aenima'?",o:["1994","1996","1998","2000"],a:1,d:3},
  {q:"Vem är sångare i Mastodon?",o:["Troy Sanders & Brann Dailor","Randy Blythe","Phil Labonte","Claudio Sanchez"],a:0,d:3},
],

"🎬 Movie Quiz": [
  {q:"Vilket år kom Christopher Nolans 'Dunkirk'?",o:["2015","2017","2019","2021"],a:1,d:1},
  {q:"Vem spelar Thanos i MCU?",o:["Idris Elba","Tom Hiddleston","Josh Brolin","Michael Shannon"],a:2,d:1},
  {q:"Vem spelar Black Widow i MCU?",o:["Zoe Saldana","Scarlett Johansson","Brie Larson","Elizabeth Olsen"],a:1,d:1},
  {q:"Vilket år kom Nolans 'Oppenheimer'?",o:["2021","2022","2023","2024"],a:2,d:1},
  {q:"Vem spelar i 'Barbie' (2023)?",o:["Margot Robbie","Scarlett Johansson","Emma Stone","Jennifer Lawrence"],a:0,d:1},
  {q:"Vilket år kom Scorseses 'The Departed'?",o:["2004","2006","2008","2010"],a:1,d:2},
  {q:"Vem regisserade 'Once Upon a Time in Hollywood'?",o:["Martin Scorsese","Quentin Tarantino","Paul Thomas Anderson","Wes Anderson"],a:1,d:2},
  {q:"Vilket år kom Paul Thomas Andersons 'Magnolia'?",o:["1997","1999","2001","2003"],a:1,d:3},
  {q:"Vem regisserade '12 Angry Men'?",o:["Stanley Kubrick","Billy Wilder","Sidney Lumet","John Huston"],a:2,d:3},
  {q:"Vilket år kom 'Mulholland Drive'?",o:["1999","2001","2003","2005"],a:1,d:3},
  {q:"Vem regisserade 'Eyes Wide Shut'?",o:["Roman Polanski","Stanley Kubrick","Ridley Scott","Michael Mann"],a:1,d:3},
  {q:"Vem spelar Katniss Everdeen i Mockingjay?",o:["Emma Stone","Jennifer Lawrence","Shailene Woodley","Kristen Stewart"],a:1,d:1},
],

"📺 TV-serier": [
  {q:"Vilket år kom Andor (Star Wars)?",o:["2020","2022","2023","2024"],a:1,d:1},
  {q:"Vem spelar drottning Elizabeth i The Crown säsong 1?",o:["Helena Bonham Carter","Olivia Colman","Claire Foy","Imelda Staunton"],a:2,d:2},
  {q:"Vilket år kom House of the Dragon?",o:["2020","2022","2023","2024"],a:1,d:1},
  {q:"Vilket år kom The Bear?",o:["2020","2022","2023","2024"],a:1,d:1},
  {q:"Vilket år kom Yellowstone?",o:["2016","2018","2020","2022"],a:1,d:2},
  {q:"Vem spelar Kendall Roy i Succession?",o:["Matthew Macfadyen","Jeremy Strong","Kieran Culkin","Nicholas Braun"],a:1,d:2},
  {q:"Vilket år kom Barry (HBO)?",o:["2016","2018","2020","2022"],a:1,d:2},
  {q:"Vem skapade The Bear?",o:["Lena Waithe","Christopher Storer","Aziz Ansari","Donald Glover"],a:1,d:3},
  {q:"Vilket år kom Atlanta?",o:["2014","2016","2018","2020"],a:1,d:3},
  {q:"Vem spelar Roman Roy i Succession?",o:["Matthew Macfadyen","Jeremy Strong","Kieran Culkin","Nicholas Braun"],a:2,d:3},
  {q:"Vilket år kom Hacks (HBO Max)?",o:["2019","2021","2022","2023"],a:1,d:3},
  {q:"Vilket år kom Rings of Power (Amazon)?",o:["2020","2022","2023","2024"],a:1,d:2},
],

"🏈 Amerikansk fotboll": [
  {q:"Vilket lag spelar hemma på MetLife Stadium?",o:["New York Jets & Giants","New England Patriots","Dallas Cowboys","Philadelphia Eagles"],a:0,d:2},
  {q:"Vem är NFL:s all-time rushing leader?",o:["Barry Sanders","Emmitt Smith","Walter Payton","Jim Brown"],a:1,d:2},
  {q:"Vilket lag vann Super Bowl 2018?",o:["New England Patriots","Philadelphia Eagles","Los Angeles Rams","Minnesota Vikings"],a:1,d:2},
  {q:"Vem kallas 'The Refrigerator' i NFL-historien?",o:["William Perry","Refrigerator White","Lawrence Taylor","Mean Joe Greene"],a:0,d:3},
  {q:"Vilket lag spelar hemma på Gillette Stadium?",o:["New York Giants","New England Patriots","Buffalo Bills","Miami Dolphins"],a:1,d:2},
  {q:"Hur lång är en NFL-match normalt?",o:["2 timmar","3 timmar","3.5 timmar","4 timmar"],a:1,d:1},
  {q:"Vad heter All-Star-matchen i NFL?",o:["NFL All-Stars","Super Bowl Pro","Pro Bowl","NFL Classic"],a:2,d:1},
  {q:"Vilket lag har flest förlorade Super Bowls?",o:["New England Patriots","Denver Broncos","Dallas Cowboys","Buffalo Bills"],a:3,d:2},
  {q:"Vad heter NFL-draften?",o:["NFL Combine","NFL Draft","NFL Selection","Pro Bowl Draft"],a:1,d:1},
  {q:"Vilket år grundades NFL?",o:["1910","1920","1930","1940"],a:1,d:2},
  {q:"Vilket lag spelar hemma på Arrowhead Stadium?",o:["Denver Broncos","Kansas City Chiefs","Dallas Cowboys","Houston Texans"],a:1,d:2},
  {q:"Vem vann Super Bowl LVII 2023?",o:["Kansas City Chiefs","Philadelphia Eagles","San Francisco 49ers","Dallas Cowboys"],a:0,d:2},
],

"⚽ Fotboll": [
  {q:"Vilket lag spelar hemma på Etihad Stadium?",o:["Manchester United","Liverpool","Manchester City","Everton"],a:2,d:1},
  {q:"Vem vann VM-guldet 2006?",o:["Frankrike","Brasilien","Italien","Portugal"],a:2,d:1},
  {q:"Vilket år vann Brasilien sitt senaste VM?",o:["1994","1998","2002","2006"],a:2,d:2},
  {q:"Vilket lag spelar hemma på Allianz Arena?",o:["Borussia Dortmund","Bayern München","RB Leipzig","Bayer Leverkusen"],a:1,d:2},
  {q:"Vem vann Champions League 2016?",o:["Barcelona","Bayern München","Real Madrid","Atletico Madrid"],a:2,d:2},
  {q:"Vilken nation vann fotbolls-VM 2010?",o:["Brasilien","Argentina","Spanien","Holland"],a:2,d:2},
  {q:"Vem var toppscorar i VM 2022?",o:["Messi","Mbappe","Benzema","Neymar"],a:1,d:2},
  {q:"Vilket år grundades UEFA?",o:["1950","1954","1958","1962"],a:1,d:3},
  {q:"Vilket lag har flest La Liga-titlar?",o:["Barcelona","Atletico Madrid","Real Madrid","Valencia"],a:2,d:3},
  {q:"Vem vann Ballon d'Or 2018?",o:["Cristiano Ronaldo","Lionel Messi","Luka Modric","Kylian Mbappe"],a:2,d:3},
  {q:"Vilket lag vann Champions League 2014?",o:["Bayern München","Barcelona","Atletico Madrid","Real Madrid"],a:3,d:3},
  {q:"Vem var Europas mestmålsgörare (Guldskons) 2023?",o:["Erling Haaland","Kylian Mbappe","Harry Kane","Victor Osimhen"],a:0,d:3},
],

"🏒 Ishockey": [
  {q:"Vilket lag vann Stanley Cup 2019?",o:["Boston Bruins","St Louis Blues","Tampa Bay Lightning","Washington Capitals"],a:1,d:2},
  {q:"Vilket lag spelar i Skelleftea i SHL?",o:["Lulea HF","Skelleftea AIK","MODO","Timra IK"],a:1,d:1},
  {q:"Vilket land vann OS-guld i ishockey 2018 herrar?",o:["Sverige","Finland","Kanada","Ryssland OAR"],a:3,d:2},
  {q:"Vad heter NHL-trofén för bäste defenseman?",o:["Vezina","Hart","Norris","Calder"],a:2,d:2},
  {q:"Vilket lag vann Stanley Cup 2018?",o:["Pittsburgh Penguins","Washington Capitals","Vegas Golden Knights","Tampa Bay Lightning"],a:1,d:2},
  {q:"Vilket år kom Elias Pettersson till NHL?",o:["2016","2018","2020","2022"],a:1,d:3},
  {q:"Vilket lag spelar i Timra i SHL?",o:["Lulea HF","Skelleftea AIK","MODO","Timra IK"],a:3,d:2},
  {q:"Vad heter trofén till Eastern Conference-vinnaren?",o:["Clarence Campbell Bowl","Presidents Trophy","Prince of Wales Trophy","OBrien Trophy"],a:2,d:3},
  {q:"Hur lång är en NHL-period?",o:["15 min","20 min","25 min","30 min"],a:1,d:1},
  {q:"Vilket lag vann Stanley Cup 2017?",o:["Pittsburgh Penguins","Nashville Predators","Ottawa Senators","Anaheim Ducks"],a:0,d:3},
  {q:"Vilket år vann Sverige VM i ishockey 2018?",o:["Ja Sverige vann 2018","Sverige vann silver","Sverige kom trea","Sverige kom fyra"],a:0,d:2},
  {q:"Vilket lag spelar hemma på Wells Fargo Center?",o:["New York Rangers","Boston Bruins","Philadelphia Flyers","Pittsburgh Penguins"],a:2,d:3},
],

"🏅 Sport (allmänt)": [
  {q:"Vilket år kom boxaren Muhammad Ali tillbaka från sin avstängning?",o:["1968","1970","1972","1974"],a:1,d:2},
  {q:"Vem vann Tour de France 2024?",o:["Tadej Pogacar","Jonas Vingegaard","Egan Bernal","Primoz Roglic"],a:0,d:2},
  {q:"Vilket år hölls OS i Barcelona?",o:["1988","1992","1996","2000"],a:1,d:2},
  {q:"Vilket land dominerar i badminton?",o:["Japan","Indien","Kina","Indonesien"],a:2,d:2},
  {q:"Vem vann Formel 1-VM 2024?",o:["Lewis Hamilton","Max Verstappen","Charles Leclerc","Lando Norris"],a:1,d:3},
  {q:"Vilket år hölls OS i Seoul?",o:["1984","1988","1992","1996"],a:1,d:3},
  {q:"Vem vann Wimbledon herrar 2021?",o:["Rafael Nadal","Roger Federer","Novak Djokovic","Matteo Berrettini"],a:2,d:2},
  {q:"Vilket år kom snooker med i World Championship?",o:["1927","1937","1947","1957"],a:0,d:3},
  {q:"Vem vann Wimbledon herrar 2022?",o:["Rafael Nadal","Novak Djokovic","Nick Kyrgios","Jannik Sinner"],a:1,d:2},
  {q:"Vilket land dominerar sumo?",o:["Kina","Korea","Japan","Mongolia"],a:2,d:1},
  {q:"Vilket år hölls OS i Los Angeles senast?",o:["1980","1984","1988","1992"],a:1,d:2},
  {q:"Vad heter världsmästerskapet i cricket?",o:["Cricket World Cup","ICC World Cup","Test Championship","The Ashes"],a:1,d:1},
],

"💻 Teknik & IT": [
  {q:"Vilket år köpte Microsoft Activision Blizzard?",o:["2021","2022","2023","2024"],a:2,d:2},
  {q:"Vilket år lanserades Vision Pro?",o:["2022","2023","2024","2025"],a:2,d:2},
  {q:"Vilket år kom Gemini från Google?",o:["2021","2022","2023","2024"],a:3,d:2},
  {q:"Vilket år köpte Elon Musk Twitter?",o:["2021","2022","2023","2024"],a:1,d:1},
  {q:"Vad heter Metas VR-headset?",o:["HoloLens","Vision Pro","Quest","Vive"],a:2,d:1},
  {q:"Vilket år lanserades ChatGPT-4?",o:["2022","2023","2024","2025"],a:1,d:2},
  {q:"Vilket år grundades DeepMind?",o:["2008","2010","2012","2014"],a:2,d:3},
  {q:"Vilket år köpte Google DeepMind?",o:["2012","2014","2016","2018"],a:1,d:3},
  {q:"Vad heter Samsungs AI-assistent?",o:["Siri","Bixby","Cortana","Google"],a:1,d:1},
  {q:"Vilket år lanserades Apples M1-chip?",o:["2018","2020","2022","2024"],a:1,d:2},
  {q:"Vilket år grundades TikToks moderbolag ByteDance?",o:["2010","2012","2014","2016"],a:1,d:3},
  {q:"Vad heter Microsofts AR-headset?",o:["HoloLens","Quest","Vision Pro","Vive"],a:0,d:2},
],

"🔬 Vetenskap & Natur": [
  {q:"Vilket år skickades Hubble-teleskopet ut?",o:["1986","1990","1994","1998"],a:1,d:2},
  {q:"Vad heter den process där proteiner bildas?",o:["Transkription","Translation","Replikation","Transduktion"],a:1,d:3},
  {q:"Vad heter den starkaste naturkraften?",o:["Elektromagnetism","Svag kärnkraft","Stark kärnkraft","Gravitation"],a:2,d:2},
  {q:"Vad är absolut nollpunkt i Kelvin?",o:["0 K","minus 100 K","100 K","273 K"],a:0,d:2},
  {q:"Vilket år sände James Webb-teleskopet sina första bilder?",o:["2020","2021","2022","2023"],a:2,d:2},
  {q:"Vad är ljusets hastighet?",o:["200 000 km/s","300 000 km/s","400 000 km/s","500 000 km/s"],a:1,d:1},
  {q:"Hur gammal är universum ungefär?",o:["8 miljarder år","10 miljarder år","13.8 miljarder år","20 miljarder år"],a:2,d:2},
  {q:"Vilket grundämne är vanligast i jordskorpan?",o:["Järn","Syre","Kisel","Aluminium"],a:1,d:2},
  {q:"Vad heter Homo sapiens närmaste utdöda släkting?",o:["Homo erectus","Homo habilis","Denisovamänniskan","Neandertalmänniskan"],a:3,d:2},
  {q:"Vad heter den process där atomer klyvs?",o:["Fusion","Fission","Klyvning","Radioaktivitet"],a:1,d:2},
  {q:"Vilket år lanserades första satelliten (Sputnik)?",o:["1953","1955","1957","1959"],a:2,d:2},
  {q:"Vad är den kemiska formeln för koldioxid?",o:["CO","CO2","C2O","C2O2"],a:1,d:1},
],

"🌍 Geografi & Historia": [
  {q:"Vilket är världens minsta land?",o:["Monaco","San Marino","Vatikanstaten","Liechtenstein"],a:2,d:1},
  {q:"Vilket år kollapade Västromerska riket?",o:["376 e.Kr.","410 e.Kr.","455 e.Kr.","476 e.Kr."],a:3,d:3},
  {q:"Vilket år startade Koreakriget?",o:["1948","1950","1952","1954"],a:1,d:2},
  {q:"Vilket år startade Vietnamkriget?",o:["1953","1955","1957","1959"],a:1,d:3},
  {q:"Vilket är Afrikas längsta flod?",o:["Kongo","Niger","Zambezi","Nilen"],a:3,d:1},
  {q:"Vilket år kom Magna Carta?",o:["1204","1215","1228","1240"],a:1,d:3},
  {q:"Vilket år kom den ryska revolutionen?",o:["1915","1917","1919","1921"],a:1,d:2},
  {q:"Vilket land har flest öar?",o:["Indonesia","Sverige","Finland","Norge"],a:1,d:2},
  {q:"Vilket år grundades Kinas kommunistparti?",o:["1919","1921","1925","1930"],a:1,d:3},
  {q:"Vilket är världens folkrikaste stad?",o:["Mumbai","Sao Paulo","Tokyo","Shanghai"],a:2,d:2},
  {q:"Vilket år atombombades Hiroshima?",o:["1943","1945","1947","1949"],a:1,d:2},
  {q:"Vilket år grundades USA?",o:["1774","1776","1778","1780"],a:1,d:2},
],

"🍕 Mat & Dryck": [
  {q:"Vilket land uppfann nachos?",o:["USA","Mexiko","Spanien","Guatemala"],a:1,d:1},
  {q:"Vilket år öppnade det första Starbucks?",o:["1967","1971","1975","1979"],a:1,d:2},
  {q:"Vad heter den japanska rätten av risnudlar med buljong?",o:["Udon","Soba","Ramen","Somen"],a:2,d:1},
  {q:"Vilket land kommer dim sum ifrån?",o:["Japan","Vietnam","Korea","Kina"],a:3,d:1},
  {q:"Vad heter den indiska rätten gjord på linser?",o:["Tikka masala","Dal","Biryani","Korma"],a:1,d:1},
  {q:"Vilket land kom kebab ifrån?",o:["Libanon","Turkiet","Irak","Iran"],a:1,d:2},
  {q:"Vilket år grundades Coca-Cola?",o:["1876","1886","1896","1906"],a:1,d:2},
  {q:"Vad heter den mexikanska rätten med fylld tortilla som stekes?",o:["Burrito","Taco","Quesadilla","Enchilada"],a:2,d:1},
  {q:"Vad heter den schweiziska rätten av smält ost?",o:["Raclette","Fondue","Rösti","Schnitzel"],a:1,d:1},
  {q:"Vilket land uppfann spaghetti?",o:["Frankrike","Kina","Italien","Spanien"],a:2,d:2},
  {q:"Vad heter den japanska drycken gjord på ris?",o:["Mirin","Sake","Shochu","Amazake"],a:1,d:2},
  {q:"Vilket land är ursprunget till baklava?",o:["Grekland","Libanon","Turkiet","Iran"],a:2,d:3},
],

"🎭 Allmänkultur & Käpphäst": [
  {q:"Vilket år dog Sokrates?",o:["379 f.Kr.","399 f.Kr.","419 f.Kr.","439 f.Kr."],a:1,d:3},
  {q:"Vem komponerade Symfoni nr 9?",o:["Mozart","Brahms","Beethoven","Schubert"],a:2,d:1},
  {q:"Vilket år dog Beethoven?",o:["1820","1823","1827","1831"],a:2,d:2},
  {q:"Vem skulpterade 'Tänkaren'?",o:["Michelangelo","Bernini","Auguste Rodin","Donatello"],a:2,d:2},
  {q:"Vem målade 'Nattvakt'?",o:["Vermeer","Rembrandt","Frans Hals","Jan van Eyck"],a:1,d:2},
  {q:"Vilket år kom Kafkas 'Processen'?",o:["1915","1920","1925","1930"],a:2,d:3},
  {q:"Vilket år dog Shakespeare?",o:["1610","1613","1616","1619"],a:2,d:2},
  {q:"Vem målade 'Flicka med pärlörhänge'?",o:["Rembrandt","Vermeer","Frans Hals","Jan Steen"],a:1,d:2},
  {q:"Vilket år kom Oscar Wildes 'The Picture of Dorian Gray'?",o:["1888","1890","1892","1894"],a:1,d:3},
  {q:"Vilket år dog Picasso?",o:["1969","1971","1973","1975"],a:2,d:3},
  {q:"Vilket år kom Dostojevskijs 'Bröderna Karamazov'?",o:["1875","1880","1885","1890"],a:1,d:3},
  {q:"Vem komponerade 'Finlandia'?",o:["Grieg","Sibelius","Nielsen","Alfvén"],a:1,d:2},
],

"🌈 Blandat / Mix": [
  {q:"Vilket land kom Ikea ifrån?",o:["Danmark","Norge","Finland","Sverige"],a:3,d:1},
  {q:"Vilket år dog Elvis Presley?",o:["1975","1977","1979","1981"],a:1,d:1},
  {q:"Vad är PI ungefär?",o:["2.14","3.14","3.41","4.14"],a:1,d:1},
  {q:"Vilket år grundades FN?",o:["1943","1945","1947","1949"],a:1,d:1},
  {q:"Vad heter det minsta landet i världen?",o:["Monaco","San Marino","Vatikanstaten","Liechtenstein"],a:2,d:1},
  {q:"Vilket år köpte Elon Musk Twitter?",o:["2020","2021","2022","2023"],a:2,d:1},
  {q:"Vem sjunger 'Halo'?",o:["Alicia Keys","Rihanna","Beyoncé","Mariah Carey"],a:2,d:1},
  {q:"Vilket land vann fotbolls-EM 2024?",o:["Frankrike","England","Spanien","Portugal"],a:2,d:2},
  {q:"Vilket år skedde månlandningen?",o:["1967","1969","1971","1973"],a:1,d:1},
  {q:"Vad heter Googles sökmotoralgoritm?",o:["PageRank","SearchRank","WebCrawl","IndexBot"],a:0,d:2},
  {q:"Vilket år kom Spotify?",o:["2004","2006","2008","2010"],a:2,d:1},
  {q:"Hur många bitar ingår i en byte?",o:["4","6","8","10"],a:2,d:2},
],

"🏙️ Umeå & Norrland": [
  {q:"Vilken älv rinner igenom Lycksele?",o:["Umeälven","Vindelälven","Skellefte­älven","Ångermanälven"],a:0,d:2},
  {q:"Vad heter Umeå universitets sjukhus?",o:["Norrlands universitetssjukhus","Umeå universitetssjukhus","Norrlandssjukhuset","Norr sjukhuset"],a:0,d:2},
  {q:"Vilket år grundades Luleå tekniska universitet?",o:["1961","1966","1971","1976"],a:2,d:3},
  {q:"Vad heter konstinstallationsparken nära Umeå?",o:["Bildmuseet utomhus","Umedalen Skulptur","Konst i det fria","Skulpturparken"],a:1,d:2},
  {q:"Vilket år grundades Skellefteå stad?",o:["1845","1901","1912","1929"],a:1,d:3},
  {q:"Vilket år öppnade Northvolt-fabriken i Skellefteå?",o:["2019","2021","2022","2023"],a:1,d:2},
  {q:"Vad heter Umeås naturnära friluftsområde?",o:["Gammliaskogen","Nydala","Stadsliden","Umeälvenstigen"],a:2,d:2},
  {q:"Hur många kommuner finns det i Västerbotten?",o:["10","15","20","25"],a:1,d:3},
  {q:"Vad heter kommunen norr om Umeå längs kusten?",o:["Skellefteå","Vindeln","Robertsfors","Nordmaling"],a:2,d:2},
  {q:"Vilket år grundades Umeå energi?",o:["1945","1950","1956","1965"],a:2,d:3},
  {q:"Vad heter Umeås fullständiga gatuadress till universitetet?",o:["Biblioteksgatan 1","Universitetsgatan 1","MIT-huset","NUS-campus"],a:1,d:3},
  {q:"Vilket år hölls kulturfestivalen i Umeå som Europas kulturhuvudstad?",o:["2012","2013","2014","2015"],a:2,d:2},
],
};

(function() {
  if (typeof QUESTION_DB === 'undefined') return;
  let added = 0;
  // Collect all existing questions for dedup check
  const existing = new Set();
  Object.values(QUESTION_DB).forEach(qs => {
    qs.forEach(q => existing.add(q.q.toLowerCase().trim()));
  });
  Object.keys(QUESTION_DB7).forEach(cat => {
    const newQs = QUESTION_DB7[cat].filter(q => !existing.has(q.q.toLowerCase().trim()));
    if (QUESTION_DB[cat]) {
      QUESTION_DB[cat] = QUESTION_DB[cat].concat(newQs);
    } else {
      QUESTION_DB[cat] = newQs;
    }
    added += newQs.length;
  });
  console.log('questions7.js: ' + added + ' unique questions added');
})();
