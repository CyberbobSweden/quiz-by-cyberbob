// questions13.js – Toppar upp svaga kategorier + extra för alla
const QUESTION_DB13 = {

"🕺 70-tals musik": [
  // LÄTT
  {q:"Vilket band sjöng 'September' (Earth Wind & Fire)?",o:["Kool & the Gang","Earth Wind & Fire","Chic","Parliament"],a:1,d:1},
  {q:"Vem sjunger 'Heart of Gold' (1972)?",o:["James Taylor","Cat Stevens","Neil Young","Jim Croce"],a:2,d:1},
  {q:"Vilket band sjöng 'Whole Lotta Love' (Led Zeppelin)?",o:["Deep Purple","Black Sabbath","Led Zeppelin","Uriah Heep"],a:2,d:1},
  {q:"Vem sjunger 'You're So Vain'?",o:["Carole King","Joni Mitchell","Carly Simon","Linda Ronstadt"],a:2,d:1},
  {q:"Vilket band sjöng 'Go Your Own Way' (Fleetwood Mac)?",o:["Fleetwood Mac","Eagles","Crosby Stills Nash","America"],a:0,d:1},
  {q:"Vem sjunger 'Superstition' (1972)?",o:["Earth Wind & Fire","Stevie Wonder","Marvin Gaye","Curtis Mayfield"],a:1,d:1},
  {q:"Vilket band sjöng 'Waterloo' (ABBA)?",o:["Boney M","ABBA","Brotherhood of Man","Middle of the Road"],a:1,d:1},
  {q:"Vem sjunger 'Take Me Home Country Roads'?",o:["Glen Campbell","John Denver","Kenny Rogers","Kris Kristofferson"],a:1,d:1},
  {q:"Vilket band sjöng 'Long Train Runnin'' (Doobie Brothers)?",o:["Doobie Brothers","Eagles","Little Feat","Lynyrd Skynyrd"],a:0,d:1},
  {q:"Vem sjunger 'Cat's in the Cradle'?",o:["James Taylor","Harry Chapin","Gordon Lightfoot","Dan Fogelberg"],a:1,d:1},
  {q:"Vilket band sjöng 'Fame' (David Bowie)?",o:["T.Rex","David Bowie","Roxy Music","Mott the Hoople"],a:1,d:1},
  {q:"Vem sjunger 'Mamma Mia' (ABBA)?",o:["Donna Summer","ABBA","Boney M","Brotherhood of Man"],a:1,d:1},
  // MEDEL
  {q:"Vilket år kom Led Zeppelins 'IV'?",o:["1969","1971","1973","1975"],a:1,d:2},
  {q:"Vilket band sjöng 'Roundabout' (Yes)?",o:["Yes","Emerson Lake & Palmer","Genesis","King Crimson"],a:0,d:2},
  {q:"Vem sjunger 'Blue Eyes Crying in the Rain'?",o:["Waylon Jennings","Johnny Cash","Willie Nelson","Kris Kristofferson"],a:2,d:2},
  {q:"Vilket år kom Eagles 'Hotel California'?",o:["1975","1977","1979","1981"],a:1,d:2},
  {q:"Vilket band sjöng 'School's Out' (Alice Cooper)?",o:["Alice Cooper","Kiss","Aerosmith","Ted Nugent"],a:0,d:2},
  {q:"Vilket år kom Bowie 'Aladdin Sane'?",o:["1971","1973","1975","1977"],a:1,d:2},
  {q:"Vilket band sjöng 'Love Train' (O'Jays)?",o:["Temptations","Four Tops","O'Jays","Spinners"],a:2,d:2},
  {q:"Vilket år kom Steely Dan 'Aja'?",o:["1975","1977","1979","1981"],a:1,d:2},
  {q:"Vilket band sjöng 'Rock and Roll Hoochie Koo'?",o:["Ted Nugent","Grand Funk Railroad","MC5","Bob Seger"],a:0,d:2},
  {q:"Vilket år kom The Sex Pistols 'Never Mind the Bollocks'?",o:["1975","1977","1979","1981"],a:1,d:2},
  {q:"Vem sjunger 'Both Sides Now' (Joni Mitchell)?",o:["Carole King","Joni Mitchell","Carly Simon","Joan Baez"],a:1,d:2},
  {q:"Vilket band sjöng 'Baker Street'?",o:["Gerry Rafferty","Supertramp","10cc","Steely Dan"],a:0,d:2},
  // SVÅRT
  {q:"Vilket år kom Kraftwerks 'Autobahn'?",o:["1972","1974","1976","1978"],a:1,d:3},
  {q:"Vilket år kom Brian Enos 'Another Green World'?",o:["1973","1975","1977","1979"],a:1,d:3},
  {q:"Vilket band sjöng 'Moonage Daydream' (Bowie)?",o:["Bowie som Ziggy Stardust","T.Rex","Roxy Music","Sweet"],a:0,d:3},
  {q:"Vilket år kom Van Morrisons 'Astral Weeks'?",o:["1966","1968","1970","1972"],a:1,d:3},
  {q:"Vilket band sjöng 'In the Court of the Crimson King'?",o:["Yes","Genesis","King Crimson","Emerson Lake & Palmer"],a:2,d:3},
  {q:"Vilket år kom Marvin Gayes 'What's Going On'?",o:["1969","1971","1973","1975"],a:1,d:3},
  {q:"Vem producerade ABBA i studion?",o:["Phil Spector","Giorgio Moroder","Benny Andersson och Björn Ulvaeus","ABBA producerade sig själva"],a:2,d:3},
  {q:"Vilket år kom Patti Smith 'Horses'?",o:["1973","1975","1977","1979"],a:1,d:3},
],

"🎤 K-pop & Asiatisk musik": [
  // LÄTT
  {q:"Vilket K-pop band sjöng 'Boy With Luv'?",o:["EXO","BLACKPINK","BTS","TWICE"],a:2,d:1},
  {q:"Vilket K-pop band sjöng 'Lovesick Girls'?",o:["EXO","BLACKPINK","BTS","TWICE"],a:1,d:1},
  {q:"Vem sjunger 'Through the Night' (IU)?",o:["TWICE","IU","aespa","MAMAMOO"],a:1,d:1},
  {q:"Vilket K-pop band sjöng 'LOVE DIVE' (IVE)?",o:["aespa","IVE","NMIXX","NewJeans"],a:1,d:1},
  {q:"Vilket K-pop band sjöng 'God's Menu' (Stray Kids)?",o:["Stray Kids","ATEEZ","MONSTA X","VICTON"],a:0,d:1},
  {q:"Vilket K-pop band sjöng 'Hype Boy' (NewJeans)?",o:["aespa","IVE","FIFTY FIFTY","NewJeans"],a:3,d:1},
  {q:"Vilket K-pop band sjöng 'Savage' (aespa)?",o:["TWICE","BLACKPINK","Red Velvet","aespa"],a:3,d:1},
  {q:"Vilket K-pop band sjöng 'Permission to Dance'?",o:["EXO","BLACKPINK","BTS","TWICE"],a:2,d:1},
  {q:"Vilket K-pop band sjöng 'I AM' (IVE)?",o:["aespa","IVE","NMIXX","NewJeans"],a:1,d:1},
  {q:"Vilket K-pop band sjöng 'Nxde' (G I-DLE)?",o:["G I-DLE","aespa","IVE","NMIXX"],a:0,d:1},
  {q:"Vad heter BLACKPINK-memberens soloalbum 'LALISA'?",o:["Jennie","Rosé","Lisa","Jisoo"],a:2,d:1},
  {q:"Vilket K-pop band sjöng 'Run BTS'?",o:["EXO","BLACKPINK","BTS","TWICE"],a:2,d:1},
  // MEDEL
  {q:"Vilket år grundades HYBE (BTS skivbolag)?",o:["2003","2005","2007","2009"],a:2,d:2},
  {q:"Vilket K-pop band sjöng 'Growl' (EXO)?",o:["EXO","SHINee","Super Junior","GOT7"],a:0,d:2},
  {q:"Vilket K-pop band sjöng 'Beautiful' (Monsta X)?",o:["Stray Kids","ATEEZ","MONSTA X","VICTON"],a:2,d:2},
  {q:"Vilket år debuterade EXO?",o:["2010","2012","2014","2016"],a:1,d:2},
  {q:"Vad heter SM Entertainment artisten 'Queen of K-pop'?",o:["BoA","Taeyeon","IU","Lee Hyori"],a:0,d:2},
  {q:"Vilket K-pop band sjöng 'Wave' (ATEEZ)?",o:["Stray Kids","ATEEZ","MONSTA X","VICTON"],a:1,d:2},
  {q:"Vilket år debuterade SHINee?",o:["2006","2008","2010","2012"],a:1,d:2},
  {q:"Vilket K-pop band sjöng 'Cheer Up' (TWICE)?",o:["TWICE","BLACKPINK","Red Velvet","ITZY"],a:0,d:2},
  {q:"Vilket K-pop band sjöng 'Dalla Dalla' (ITZY)?",o:["ITZY","IVE","aespa","NMIXX"],a:0,d:2},
  {q:"Vad heter JYP Entertainments mest kända manliga grupp?",o:["BTS","EXO","2PM","SHINee"],a:2,d:2},
  {q:"Vilket år debuterade Girls' Generation?",o:["2005","2007","2009","2011"],a:1,d:2},
  {q:"Vad heter BLACKPINK-memberens soloalbum 'SOLO'?",o:["Jennie","Rosé","Lisa","Jisoo"],a:0,d:2},
  // SVÅRT
  {q:"Vilket K-pop band sjöng 'Gee' (Girls Generation)?",o:["SNSD/Girls Generation","2NE1","KARA","After School"],a:0,d:3},
  {q:"Vilket K-pop band sjöng 'Fire' (2NE1)?",o:["SNSD","2NE1","KARA","4Minute"],a:1,d:3},
  {q:"Vilket år debuterade 2NE1?",o:["2007","2009","2011","2013"],a:1,d:3},
  {q:"Vilket K-pop band sjöng 'Candy' (H.O.T.)?",o:["H.O.T.","Sechs Kies","g.o.d","Shinhwa"],a:0,d:3},
  {q:"Vilket år debuterade BIGBANG?",o:["2004","2006","2008","2010"],a:1,d:3},
  {q:"Vad heter K-popfenomenet med idolträning kallat?",o:["Trainee System","Idol Academy","K-pop School","Music Factory"],a:0,d:3},
  {q:"Vilket K-pop band sjöng 'Blood Sweat and Tears' (BTS)?",o:["EXO","BLACKPINK","BTS","TWICE"],a:2,d:3},
  {q:"Vilket år debuterade Psy med Gangnam Style?",o:["2010","2011","2012","2013"],a:2,d:3},
],

"🌌 Astronomi & Rymden": [
  // LÄTT
  {q:"Vad heter den planet som är närmast solen?",o:["Venus","Merkurius","Mars","Saturnus"],a:1,d:1},
  {q:"Hur många månader har Saturnus?",o:["Fler än 80","50-60","30-40","10-20"],a:0,d:1},
  {q:"Vad heter den stjärna vi ser på daghimlen?",o:["Sirius","Polstjärnan","Solen","Vega"],a:2,d:1},
  {q:"Vad heter den process där stjärnor skapar energi?",o:["Fusion","Fission","Klyvning","Radioaktivitet"],a:0,d:1},
  {q:"Hur lång tid tar det för månen att kretsa runt jorden?",o:["7 dagar","14 dagar","28 dagar","365 dagar"],a:2,d:1},
  {q:"Vad heter den typ av stjärna solen är?",o:["Röd jätte","Vit dvärg","Gul dvärg","Blå jätte"],a:2,d:1},
  {q:"Vilket år landade Apollo 11 på månen?",o:["1967","1969","1971","1973"],a:1,d:1},
  {q:"Vad heter planeten som är längst från solen?",o:["Saturnus","Uranus","Pluto","Neptunus"],a:3,d:1},
  {q:"Hur lång tid tar jordens rotation runt solen?",o:["182 dagar","365 dagar","400 dagar","730 dagar"],a:1,d:1},
  {q:"Vad är ett meteoritnedslag?",o:["En asteroid i bana","En komet","En meteor som når marken","Ett svart hål"],a:2,d:1},
  {q:"Vilket land skickade upp den första satelliten Sputnik?",o:["USA","Kina","Sovjet","Frankrike"],a:2,d:1},
  {q:"Vad heter NASAs rymdteleskop som togs ur drift 2022?",o:["Hubble","Spitzer","Kepler","Chandra"],a:0,d:1},
  // MEDEL
  {q:"Vilket år lanserades Hubble-teleskopet?",o:["1986","1988","1990","1992"],a:2,d:2},
  {q:"Vad heter den starkaste typen av rymdexplosion?",o:["Nova","Supernova","Gammablixt","Hypernovaexplosion"],a:2,d:2},
  {q:"Vilket år sände Voyager 2 ut?",o:["1975","1977","1979","1981"],a:1,d:2},
  {q:"Vad heter den region utanför Neptunus med asteroider?",o:["Asteroidbältet","Kuiperbältet","Oorttskyen","Heliosfären"],a:1,d:2},
  {q:"Hur lång tid tar Mars att kretsa runt solen?",o:["1.3 år","1.5 år","1.9 år","2.2 år"],a:2,d:2},
  {q:"Vad heter den rymdstation som funnits sedan 1998?",o:["Mir","Skylab","ISS","Tiangong"],a:2,d:2},
  {q:"Vad är en kvasar?",o:["En döende stjärna","Extremt ljust aktivt galaxkärnor","En typ av nebulosa","En dvärgplanet"],a:1,d:2},
  {q:"Vilket år kom Cassini-sonden till Saturnus?",o:["1999","2001","2003","2004"],a:3,d:2},
  {q:"Vad heter Jupiters röda fläck?",o:["Den röda ögat","Den stora röda fläcken","Jupiter Spot","Röda stormen"],a:1,d:2},
  {q:"Hur lång är jordens diameter?",o:["Ca 8000 km","Ca 10000 km","Ca 12700 km","Ca 15000 km"],a:2,d:2},
  {q:"Vilket år kom New Horizons-sonden till Pluto?",o:["2011","2013","2015","2017"],a:2,d:2},
  {q:"Vad heter den komet som är synlig från jorden vart 75-76 år?",o:["Halleys komet","Shoemaker-Levy","Hale-Bopp","Churyumov-Gerasimenko"],a:0,d:2},
  // SVÅRT
  {q:"Vad heter teorin om universums accelererande expansion?",o:["Mörk energi","Mörk materia","Inflationsteorin","Steady State"],a:0,d:3},
  {q:"Hur lång är ett parsec?",o:["Ca 3.09 biljoner km","Ca 9.46 biljoner km","Ca 30 biljoner km","Ca 100 biljoner km"],a:0,d:3},
  {q:"Vad heter den massa ett svart hål måste ha för att existera?",o:["Chandrasekhargränsen","Schwarzschild-radien","Eddingtonluminansen","Hawking-massan"],a:0,d:3},
  {q:"Vilket år bevisades gravitationsvågor experimentellt?",o:["2013","2015","2017","2019"],a:1,d:3},
  {q:"Vad heter Neptuns störst måne?",o:["Nereid","Triton","Proteus","Larissa"],a:1,d:3},
  {q:"Hur lång tid tar det för Pluto att kretsa runt solen?",o:["165 år","200 år","248 år","300 år"],a:2,d:3},
  {q:"Vad heter den fenomen där ljus böjs av gravitation?",o:["Gravitationslinser","Doppler-effekten","Röd förskjutning","Cherenkov-strålning"],a:0,d:3},
  {q:"Vilket år dog Stephen Hawking?",o:["2014","2016","2018","2020"],a:2,d:3},
],

"🏈 Amerikansk fotboll": [
  {q:"Vad kallas en säkerhet (safety) i NFL?",o:["2 poäng till försvarslaget","1 poäng","3 poäng","6 poäng"],a:0,d:1},
  {q:"Vad kallas en extra poäng efter touchdown via spark?",o:["Point after touchdown","Field goal","Safety","Two-point conversion"],a:0,d:2},
  {q:"Vilket lag spelar hemma på MetLife Stadium?",o:["NY Jets och Giants","New England Patriots","Dallas Cowboys","Philadelphia Eagles"],a:0,d:2},
  {q:"Vad heter den position som skyddar QB?",o:["Tight End","Offensive Line","Wide Receiver","Linebacker"],a:1,d:2},
  {q:"Vilket lag vann Super Bowl 2020?",o:["Kansas City Chiefs","SF 49ers","New England Patriots","Baltimore Ravens"],a:0,d:2},
  {q:"Vilket lag spelar hemma på Soldier Field?",o:["Green Bay Packers","Minnesota Vikings","Chicago Bears","Detroit Lions"],a:2,d:2},
  {q:"Hur lång är en NFL-quarter?",o:["10 min","12 min","15 min","20 min"],a:2,d:2},
  {q:"Vad heter All-Star-matchen i NFL?",o:["Pro Bowl","Super Bowl Pre","NFL All-Stars","Championship Bowl"],a:0,d:2},
  {q:"Vilket år bildades AFC och NFC?",o:["1968","1970","1972","1974"],a:1,d:3},
  {q:"Hur många Super Bowls har Pittsburgh Steelers vunnit?",o:["4","5","6","7"],a:2,d:3},
  {q:"Vem håller rekordet för flest NFL-TD passes?",o:["Brett Favre","Peyton Manning","Tom Brady","Drew Brees"],a:2,d:3},
  {q:"Vilket år vann San Francisco 49ers sin senaste Super Bowl?",o:["1989","1992","1994","1995"],a:2,d:3},
],

"🎵 80-tals musik": [
  {q:"Vem sjunger 'Karma Chameleon'?",o:["Duran Duran","Spandau Ballet","Culture Club","ABC"],a:2,d:1},
  {q:"Vilket band sjöng 'Abracadabra'?",o:["Steve Miller Band","Tom Petty","John Mellencamp","Bob Seger"],a:0,d:1},
  {q:"Vem sjunger 'Jump' (Van Halen)?",o:["Van Halen","Bon Jovi","Aerosmith","Def Leppard"],a:0,d:1},
  {q:"Vilket band sjöng 'Hungry Like the Wolf'?",o:["Spandau Ballet","Duran Duran","Culture Club","ABC"],a:1,d:1},
  {q:"Vem sjunger 'What's Love Got to Do with It' (1984)?",o:["Aretha Franklin","Diana Ross","Tina Turner","Donna Summer"],a:2,d:2},
  {q:"Vilket år kom Michaels 'Thriller' (albumet)?",o:["1980","1982","1984","1986"],a:1,d:2},
  {q:"Vilket band sjöng 'Don't You Want Me'?",o:["Erasure","Pet Shop Boys","Human League","Yazoo"],a:2,d:2},
  {q:"Vem sjunger 'Bette Davis Eyes'?",o:["Pat Benatar","Kim Carnes","Laura Branigan","Stevie Nicks"],a:1,d:2},
  {q:"Vilket band sjöng 'True' (Spandau Ballet)?",o:["Duran Duran","Spandau Ballet","Culture Club","ABC"],a:1,d:2},
  {q:"Vilket år kom U2 'The Joshua Tree'?",o:["1985","1987","1989","1991"],a:1,d:3},
  {q:"Vilket band sjöng 'The Safety Dance'?",o:["Men Without Hats","A Flock of Seagulls","Kajagoogoo","Haircut 100"],a:0,d:3},
  {q:"Vilket år kom Prince 'Purple Rain'?",o:["1982","1984","1986","1988"],a:1,d:2},
],

"🎶 90-tals musik": [
  {q:"Vilket band sjöng 'Zombie' (The Cranberries)?",o:["Sinead O'Connor","The Cranberries","Enya","The Corrs"],a:1,d:1},
  {q:"Vem sjunger 'Ironic' (Alanis Morissette)?",o:["Alanis Morissette","Sheryl Crow","Jewel","Shania Twain"],a:0,d:1},
  {q:"Vilket band sjöng 'Basket Case' (Green Day)?",o:["The Offspring","Rancid","Green Day","Blink-182"],a:2,d:1},
  {q:"Vem sjunger 'I Will Always Love You' (filmversionen)?",o:["Dolly Parton","Celine Dion","Whitney Houston","Mariah Carey"],a:2,d:1},
  {q:"Vilket band sjöng 'Wonderwall' (Oasis)?",o:["Blur","Pulp","Oasis","Suede"],a:2,d:1},
  {q:"Vilket år kom Oasis 'Definitely Maybe'?",o:["1992","1994","1996","1998"],a:1,d:2},
  {q:"Vilket band sjöng 'Lovefool' (The Cardigans)?",o:["Roxette","The Cardigans","Ace of Base","Sahara Hotnights"],a:1,d:2},
  {q:"Vilket år kom Jay-Zs 'Reasonable Doubt'?",o:["1994","1996","1998","2000"],a:1,d:2},
  {q:"Vilket band sjöng 'Losing My Religion' (REM)?",o:["U2","REM","Radiohead","Pearl Jam"],a:1,d:2},
  {q:"Vilket år kom Sonic Youth 'Dirty'?",o:["1990","1992","1994","1996"],a:1,d:3},
  {q:"Vilket skivbolag var Nirvana på vid 'Nevermind'?",o:["Sub Pop","DGC Records","Geffen","Epitaph"],a:1,d:3},
  {q:"Vilket år kom PJ Harveys 'Rid of Me'?",o:["1991","1993","1995","1997"],a:1,d:3},
],

"🎤 Ny musik (2010-idag)": [
  {q:"Vem sjunger 'Uptown Funk'?",o:["Bruno Mars","Mark Ronson ft Bruno Mars","Pharrell","Justin Timberlake"],a:1,d:1},
  {q:"Vem sjunger 'Happy' (Pharrell Williams)?",o:["Bruno Mars","Justin Timberlake","Pharrell Williams","Jason Derulo"],a:2,d:1},
  {q:"Vem sjunger 'Shape of You' (Ed Sheeran)?",o:["Justin Bieber","Ed Sheeran","Sam Smith","Harry Styles"],a:1,d:1},
  {q:"Vem sjunger 'Levitating' (Dua Lipa)?",o:["Dua Lipa","Doja Cat","Olivia Rodrigo","Ariana Grande"],a:0,d:1},
  {q:"Vilket år kom Taylor Swifts 'Red (Taylor's Version)'?",o:["2019","2021","2022","2023"],a:1,d:2},
  {q:"Vem sjunger 'Easy on Me' (Adele 2021)?",o:["Adele","Dua Lipa","Olivia Rodrigo","Taylor Swift"],a:0,d:2},
  {q:"Vilket år kom Doja Cats 'Planet Her'?",o:["2019","2021","2022","2023"],a:1,d:2},
  {q:"Vem sjunger 'Shivers' (Ed Sheeran 2021)?",o:["Harry Styles","Ed Sheeran","Sam Smith","Lewis Capaldi"],a:1,d:2},
  {q:"Vilket år kom Kendrick Lamars 'Section.80'?",o:["2009","2011","2013","2015"],a:1,d:3},
  {q:"Vem producerade Drakes 'Take Care'?",o:["Noah Shebib 40","Boi-1da","T-Minus","Nineteen85"],a:0,d:3},
  {q:"Vilket år kom Frank Oceans 'Channel Orange'?",o:["2010","2012","2014","2016"],a:1,d:3},
  {q:"Vilket år kom Solange 'A Seat at the Table'?",o:["2014","2016","2018","2020"],a:1,d:3},
],

"🎵 Popmusik (allmänt)": [
  {q:"Vem sjunger 'Crazy in Love' (Beyoncé)?",o:["Rihanna","Beyoncé","Alicia Keys","Mary J Blige"],a:1,d:1},
  {q:"Vem sjunger 'Titanium' (Sia ft David Guetta)?",o:["Sia ft David Guetta","Rihanna","Beyoncé","Alicia Keys"],a:0,d:1},
  {q:"Vem sjunger 'Rolling in the Deep' (Adele)?",o:["Amy Winehouse","Adele","Duffy","Paloma Faith"],a:1,d:1},
  {q:"Vilket år kom Lady Gagas 'Born This Way' album?",o:["2009","2011","2013","2015"],a:1,d:2},
  {q:"Vilket år kom Amy Winehouse 'Back to Black'?",o:["2004","2006","2008","2010"],a:1,d:2},
  {q:"Vem sjunger 'Crazy' (Gnarls Barkley 2006)?",o:["Cee Lo Green","Bruno Mars","John Legend","Common"],a:0,d:2},
  {q:"Vilket år kom Usher 'Yeah!'?",o:["2002","2004","2006","2008"],a:1,d:2},
  {q:"Vad heter Beyoncés skivbolag?",o:["Parkwood Entertainment","Ivy Park Records","Lemonade Records","Lion Babe"],a:0,d:3},
  {q:"Vilket år kom Kylie Minogues 'Can't Get You Out of My Head'?",o:["1999","2001","2003","2005"],a:1,d:3},
  {q:"Vem producerade Rihannas 'Umbrella'?",o:["Timbaland","Tricky Stewart och The-Dream","Stargate","Rodney Jerkins"],a:1,d:3},
  {q:"Vilket år kom Aaliyahs 'Are You That Somebody'?",o:["1996","1998","2000","2002"],a:1,d:3},
  {q:"Vem sjunger 'My Immortal' (Evanescence)?",o:["Paramore","Evanescence","Flyleaf","Within Temptation"],a:1,d:3},
],

"🎸 Rock & Metal": [
  {q:"Vilket band sjöng 'Livin' on a Prayer' (Bon Jovi)?",o:["Aerosmith","Bon Jovi","Journey","Def Leppard"],a:1,d:1},
  {q:"Vem sjunger 'Born to Run' (Springsteen)?",o:["Tom Petty","Bruce Springsteen","John Mellencamp","Bob Seger"],a:1,d:1},
  {q:"Vilket band sjöng 'Patience' (Guns N' Roses)?",o:["Mötley Crüe","Guns N' Roses","Poison","Warrant"],a:1,d:1},
  {q:"Vilket år kom Green Days 'American Idiot'?",o:["2002","2004","2006","2008"],a:1,d:2},
  {q:"Vilket band sjöng 'Maps' (Yeah Yeah Yeahs)?",o:["The Strokes","Interpol","Yeah Yeah Yeahs","Franz Ferdinand"],a:2,d:2},
  {q:"Vilket år kom Radioheads 'OK Computer'?",o:["1995","1997","1999","2001"],a:1,d:2},
  {q:"Vilket år kom Queens of the Stone Age 'Songs for the Deaf'?",o:["2000","2002","2004","2006"],a:1,d:2},
  {q:"Vilket år kom Pixies 'Surfer Rosa'?",o:["1986","1988","1990","1992"],a:1,d:3},
  {q:"Vilket år kom My Bloody Valentine 'Isn't Anything'?",o:["1986","1988","1990","1992"],a:1,d:3},
  {q:"Vad heter The Edges riktiga namn i U2?",o:["Dave Evans","David Howell Evans","Paul Hewson","Adam Clayton"],a:1,d:3},
  {q:"Vilket år kom Nick Cave 'Murder Ballads'?",o:["1994","1996","1998","2000"],a:1,d:3},
  {q:"Vilket år kom The National 'Alligator'?",o:["2003","2005","2007","2009"],a:1,d:3},
],

"🔥 Heavy Metal": [
  {q:"Vilket band sjöng 'Master of Puppets' (Metallica)?",o:["Slayer","Megadeth","Metallica","Anthrax"],a:2,d:1},
  {q:"Vem är sångare i Iron Maiden?",o:["Rob Halford","Ozzy Osbourne","Bruce Dickinson","Dio"],a:2,d:1},
  {q:"Vilket band sjöng 'War Pigs' (Black Sabbath)?",o:["Deep Purple","Black Sabbath","Judas Priest","Led Zeppelin"],a:1,d:1},
  {q:"Vilket band sjöng 'Raining Blood' (Slayer)?",o:["Metallica","Megadeth","Slayer","Anthrax"],a:2,d:1},
  {q:"Vilket år kom Metallicas 'Kill Em All'?",o:["1981","1983","1985","1987"],a:1,d:2},
  {q:"Vilket år kom Iron Maidens 'Number of the Beast'?",o:["1980","1982","1984","1986"],a:1,d:2},
  {q:"Vilket band sjöng 'Cowboys from Hell' (Pantera)?",o:["Slayer","Pantera","Sepultura","Machine Head"],a:1,d:2},
  {q:"Vad heter basisten i Metallica som dog 1986?",o:["Jason Newsted","Robert Trujillo","Ron McGovney","Cliff Burton"],a:3,d:3},
  {q:"Vilket år kom Slayers 'South of Heaven'?",o:["1986","1988","1990","1992"],a:1,d:3},
  {q:"Vilket år kom Bathory 'Under the Sign of the Black Mark'?",o:["1985","1987","1989","1991"],a:1,d:3},
  {q:"Vilket år kom Entombed 'Left Hand Path'?",o:["1988","1990","1992","1994"],a:1,d:3},
  {q:"Vem producerade Metallicas 'Master of Puppets'?",o:["Rick Rubin","Flemming Rasmussen","Bob Rock","James Hetfield"],a:1,d:3},
],

"🇸🇪 Svensk musik": [
  {q:"Vilket band sjöng 'The Sign' (Ace of Base)?",o:["Roxette","ABBA","Ace of Base","Robyn"],a:2,d:1},
  {q:"Vad heter Aviciis riktiga namn?",o:["Tim Bergling","Tim Svensson","Tim Lindqvist","Tim Berg"],a:0,d:1},
  {q:"Vilket band sjöng 'It Must Have Been Love' (Roxette)?",o:["ABBA","Ace of Base","Roxette","Carola"],a:2,d:1},
  {q:"Vad heter Max Martins riktiga namn?",o:["Martin Sandberg","Max Sandberg","Martin Carlsson","Max Karlsson"],a:0,d:2},
  {q:"Vilket år grundades Swedish House Mafia?",o:["2002","2004","2006","2008"],a:2,d:2},
  {q:"Vilket år kom Lykke Lis debutalbum 'Youth Novels'?",o:["2006","2008","2010","2012"],a:1,d:2},
  {q:"Vilket år kom Kents debutalbum?",o:["1993","1995","1997","1999"],a:1,d:3},
  {q:"Vem är sångare i Soundtrack of Our Lives?",o:["Björn Olsson","Ebbot Lundberg","Martin Hederos","Ian Person"],a:1,d:3},
  {q:"Vilket år grundades ABBA?",o:["1970","1972","1974","1976"],a:1,d:3},
  {q:"Vilket år kom Zara Larssons debut-EP?",o:["2011","2012","2013","2014"],a:1,d:3},
  {q:"Vem sjunger 'Den vassa eggen' (Kent)?",o:["Joakim Berg","Martin Rindell","Sami Sirviö","Markus Mustonen"],a:0,d:3},
  {q:"Vilket år kom The Knifes 'Deep Cuts'?",o:["2001","2003","2005","2007"],a:1,d:3},
],

"🎬 Movie Quiz": [
  {q:"Vem spelar Forrest Gump?",o:["Tom Cruise","Tom Hanks","Tom Selleck","Tom Hardy"],a:1,d:1},
  {q:"Vem regisserade Jurassic Park?",o:["James Cameron","Steven Spielberg","George Lucas","Ridley Scott"],a:1,d:1},
  {q:"Vilket år kom The Matrix?",o:["1997","1999","2001","2003"],a:1,d:1},
  {q:"Vem regisserade The Dark Knight?",o:["Tim Burton","Joel Schumacher","Christopher Nolan","Zack Snyder"],a:2,d:2},
  {q:"Vilket år vann Parasite Oscar för bästa film?",o:["2018","2019","2020","2021"],a:2,d:2},
  {q:"Vem regisserade Pulp Fiction?",o:["Martin Scorsese","Quentin Tarantino","Coen Brothers","David Fincher"],a:1,d:2},
  {q:"Vilket år kom Jordan Peeles Get Out?",o:["2015","2017","2019","2021"],a:1,d:2},
  {q:"Vilket år kom Bergmans 'Det sjunde inseglet'?",o:["1955","1957","1959","1961"],a:1,d:3},
  {q:"Vem regisserade '2001 A Space Odyssey'?",o:["Steven Spielberg","Stanley Kubrick","Ridley Scott","Francis Ford Coppola"],a:1,d:3},
  {q:"Vilket år kom Terrence Malicks 'Badlands'?",o:["1971","1973","1975","1977"],a:1,d:3},
  {q:"Vem komponerade musiken till Psycho (1960)?",o:["Bernard Herrmann","Ennio Morricone","Henry Mancini","John Williams"],a:0,d:3},
  {q:"Vilket år kom Robert Altmans 'Nashville'?",o:["1973","1975","1977","1979"],a:1,d:3},
],

"📺 TV-serier": [
  {q:"Vilket TV-program handlade om vänner i New York?",o:["Seinfeld","Friends","Frasier","Will & Grace"],a:1,d:1},
  {q:"Vem spelar Tony Soprano i The Sopranos?",o:["Joe Pesci","Robert De Niro","James Gandolfini","Al Pacino"],a:2,d:1},
  {q:"Vem spelar Sheldon Cooper i The Big Bang Theory?",o:["Johnny Galecki","Jim Parsons","Kunal Nayyar","Simon Helberg"],a:1,d:1},
  {q:"Vilket år kom The Office USA?",o:["2003","2005","2007","2009"],a:1,d:1},
  {q:"Vilket år kom Six Feet Under?",o:["1999","2001","2003","2005"],a:1,d:2},
  {q:"Vilket år kom Severance?",o:["2020","2022","2023","2024"],a:1,d:2},
  {q:"Vilket år kom Mr Robot?",o:["2013","2015","2017","2019"],a:1,d:2},
  {q:"Vem skapade Breaking Bad?",o:["David Chase","David Simon","Vince Gilligan","Matthew Weiner"],a:2,d:3},
  {q:"Vem skapade The Wire?",o:["David Chase","David Simon","Vince Gilligan","Ed Burns"],a:1,d:3},
  {q:"Vem skapade The Sopranos?",o:["David Chase","David Simon","Vince Gilligan","Matthew Weiner"],a:0,d:3},
  {q:"Vilket år kom Treme (HBO)?",o:["2008","2010","2012","2014"],a:1,d:3},
  {q:"Vilket år kom Deadwood (HBO)?",o:["2002","2004","2006","2008"],a:1,d:3},
],
};

(function() {
  if (typeof QUESTION_DB === 'undefined') return;
  const existing = new Set();
  Object.values(QUESTION_DB).forEach(qs => qs.forEach(q => existing.add(q.q.toLowerCase().trim())));
  let added = 0, skipped = 0;
  Object.keys(QUESTION_DB13).forEach(cat => {
    const newQs = QUESTION_DB13[cat].filter(q => {
      const key = q.q.toLowerCase().trim();
      if (existing.has(key)) { skipped++; return false; }
      existing.add(key);
      return true;
    });
    if (QUESTION_DB[cat]) { QUESTION_DB[cat] = QUESTION_DB[cat].concat(newQs); }
    else { QUESTION_DB[cat] = newQs; }
    added += newQs.length;
  });
  console.log('questions13.js: ' + added + ' added, ' + skipped + ' dupes skipped');
})();
