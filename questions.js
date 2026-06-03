// ═══════════════════════════════════════════════════════
//  Combitech AW Quiz – Frågedatabas
//  Uppdatera denna fil för att lägga till fler frågor!
//  Format: { q:"Fråga?", o:["A","B","C","D"], a:0, d:1 }
//  d = svårighetsgrad: 1=lätt, 2=medel, 3=svårt
// ═══════════════════════════════════════════════════════

const QUESTION_DB = {

  "🎵 Popmusik": [
    // LÄTT (d:1)
    {q:"Vilket land kommer ABBA ifrån?",o:["Norge","Danmark","Sverige","Finland"],a:2,d:1},
    {q:"Vem sjunger 'Baby One More Time'?",o:["Christina Aguilera","Britney Spears","Madonna","Mariah Carey"],a:1,d:1},
    {q:"Vilket band sjöng 'Wannabe'?",o:["TLC","Destiny's Child","Spice Girls","En Vogue"],a:2,d:1},
    {q:"Vem är känd som 'King of Pop'?",o:["Elvis Presley","Prince","Michael Jackson","David Bowie"],a:2,d:1},
    {q:"Vilket land vann Eurovision 2023?",o:["Sverige","Finland","Ukraina","Italien"],a:0,d:1},
    {q:"Vem sjunger 'Hello'?",o:["Beyoncé","Rihanna","Adele","Lady Gaga"],a:2,d:1},
    {q:"Vilket band sjöng 'Bohemian Rhapsody'?",o:["Led Zeppelin","The Beatles","Queen","Rolling Stones"],a:2,d:1},
    {q:"Vem sjunger 'Shape of You'?",o:["Justin Bieber","Ed Sheeran","Sam Smith","Harry Styles"],a:1,d:1},
    {q:"Vilket år vann ABBA Eurovision med 'Waterloo'?",o:["1972","1974","1976","1978"],a:1,d:1},
    {q:"Vem sjunger 'Rolling in the Deep'?",o:["Amy Winehouse","Adele","Duffy","Paloma Faith"],a:1,d:1},
    {q:"Vilket band sjöng 'Hotel California'?",o:["Fleetwood Mac","Eagles","Dire Straits","The Doors"],a:1,d:1},
    {q:"Vem sjunger 'Toxic'?",o:["Christina Aguilera","Britney Spears","Kylie Minogue","Pink"],a:1,d:1},
    {q:"Vilket år släpptes Michael Jacksons 'Thriller'?",o:["1980","1982","1984","1986"],a:1,d:1},
    {q:"Vem sjunger 'Someone Like You'?",o:["Adele","Amy Winehouse","Duffy","Ellie Goulding"],a:0,d:1},
    {q:"Vilket band sjöng 'Don't Stop Believin''?",o:["Bon Jovi","Journey","Foreigner","REO Speedwagon"],a:1,d:1},
    // MEDEL (d:2)
    {q:"Vilket år släpptes ABBA's album 'Arrival'?",o:["1974","1976","1978","1980"],a:1,d:2},
    {q:"Vem producerade Michael Jacksons 'Thriller'?",o:["Berry Gordy","Quincy Jones","Teddy Riley","Babyface"],a:1,d:2},
    {q:"Vilket land kom Celine Dion ifrån?",o:["Frankrike","Belgien","Schweiz","Kanada"],a:3,d:2},
    {q:"Vad heter Madonnas debutalbum?",o:["True Blue","Like a Virgin","Madonna","Immaculate Collection"],a:2,d:2},
    {q:"Vilket år grundades Spice Girls?",o:["1992","1994","1996","1998"],a:1,d:2},
    {q:"Vem sjöng 'I Will Always Love You' ursprungligen?",o:["Whitney Houston","Dolly Parton","Aretha Franklin","Tina Turner"],a:1,d:2},
    {q:"Vilket band hade hits som 'Waterfall' och 'Don't Look Back in Anger'?",o:["Blur","Pulp","Oasis","Suede"],a:2,d:2},
    {q:"Vad heter Beyoncés soloalbum från 2003?",o:["Lemonade","4","Dangerously in Love","B'Day"],a:2,d:2},
    {q:"Vilket år vann Loreen Eurovision för Sverige första gången?",o:["2010","2012","2014","2016"],a:1,d:2},
    {q:"Vem sjunger 'Chandelier'?",o:["Lorde","Lana Del Rey","Sia","Ellie Goulding"],a:2,d:2},
    {q:"Vilket band sjöng 'Mr. Brightside'?",o:["The Strokes","The Killers","Interpol","Franz Ferdinand"],a:1,d:2},
    {q:"Vad heter Rihannas första singel?",o:["Umbrella","Pon de Replay","SOS","Disturbia"],a:1,d:2},
    // SVÅRT (d:3)
    {q:"På vilket skivbolag debuterade ABBA?",o:["Polar","Epic","CBS","Atlantic"],a:0,d:3},
    {q:"Vem skrev 'I Will Always Love You' som Dolly Parton spelade in?",o:["Dolly Parton","Kenny Rogers","Willie Nelson","Kris Kristofferson"],a:0,d:3},
    {q:"Vilket år bildades Queen?",o:["1968","1970","1972","1974"],a:1,d:3},
    {q:"Vem producerade Madonnas 'Like a Prayer'?",o:["Nile Rodgers","Patrick Leonard","Jellybean Benitez","Steve Bray"],a:1,d:3},
    {q:"Vilket album innehåller låten 'Billie Jean'?",o:["Off the Wall","Bad","Thriller","Dangerous"],a:2,d:3},
    {q:"Vad heter ABBA-medlemmarnas fulla namn – Agnetha?",o:["Agnetha Fältskog","Agnetha Lindqvist","Agnetha Andersson","Agnetha Björk"],a:0,d:3},
  ],

  "🎸 Rock & Metal": [
    // LÄTT (d:1)
    {q:"Vilket band sjöng 'Smells Like Teen Spirit'?",o:["Pearl Jam","Soundgarden","Nirvana","Alice in Chains"],a:2,d:1},
    {q:"Vilket band spelade 'Enter Sandman'?",o:["Slayer","Metallica","Megadeth","Anthrax"],a:1,d:1},
    {q:"Vem kallas 'The Boss' inom rock?",o:["Jon Bon Jovi","Bruce Springsteen","Mick Jagger","Tom Petty"],a:1,d:1},
    {q:"Vilket band sjöng 'Eye of the Tiger'?",o:["Foreigner","Night Ranger","Survivor","Asia"],a:2,d:1},
    {q:"Vem är sångare i AC/DC (klassiska lineup)?",o:["Bon Scott / Brian Johnson","Robert Plant","Roger Daltrey","Steven Tyler"],a:0,d:1},
    {q:"Vilket band sjöng 'Sweet Home Alabama'?",o:["The Allman Brothers","Lynyrd Skynyrd","ZZ Top","38 Special"],a:1,d:1},
    {q:"Vem sjunger i Led Zeppelin?",o:["Roger Plant","Robert Plant","Richard Plant","Ronald Plant"],a:1,d:1},
    {q:"Vilket band sjöng 'Back in Black'?",o:["AC/DC","Aerosmith","Kiss","Motörhead"],a:0,d:1},
    {q:"Vem är sångare i Iron Maiden?",o:["Rob Halford","Ozzy Osbourne","Bruce Dickinson","Dio"],a:2,d:1},
    {q:"Vilket band sjöng 'Welcome to the Jungle'?",o:["Mötley Crüe","Def Leppard","Guns N' Roses","Poison"],a:2,d:1},
    {q:"Vilket band sjöng 'Paranoid'?",o:["Deep Purple","Black Sabbath","Judas Priest","Ozzy Osbourne"],a:1,d:1},
    {q:"Vem är gitarrist i Rolling Stones?",o:["Pete Townshend","Jimmy Page","Keith Richards","Eric Clapton"],a:2,d:1},
    // MEDEL (d:2)
    {q:"Vilket år upplöstes The Beatles?",o:["1968","1970","1972","1974"],a:1,d:2},
    {q:"Vad heter Nirvanas debutalbum?",o:["Nevermind","In Utero","Bleach","Incesticide"],a:2,d:2},
    {q:"Vilket band sjöng 'Man in the Box'?",o:["Pearl Jam","Soundgarden","Alice in Chains","Temple of the Dog"],a:2,d:2},
    {q:"Vem spelade gitarr i The Jimi Hendrix Experience?",o:["Eric Clapton","Jimi Hendrix","Carlos Santana","Jeff Beck"],a:1,d:2},
    {q:"Vilket år kom Metallicas svarta album ut?",o:["1989","1991","1993","1995"],a:1,d:2},
    {q:"Vad heter Dave Grohls band efter Nirvana?",o:["Queens of the Stone Age","Foo Fighters","Tenacious D","Them Crooked Vultures"],a:1,d:2},
    {q:"Vilket band sjöng 'Creep'?",o:["Oasis","Blur","Radiohead","Suede"],a:2,d:2},
    {q:"Vem är sångare i System of a Down?",o:["Serj Tankian","Chino Moreno","Corey Taylor","Jonathan Davis"],a:0,d:2},
    {q:"Vilket år bildades Metallica?",o:["1979","1981","1983","1985"],a:1,d:2},
    {q:"Vad heter soundtracket till Almost Famous?",o:["Almost Famous","Untitled","The Bootleg","Almost Famous OST"],a:1,d:2},
    // SVÅRT (d:3)
    {q:"På vilket skivbolag debuterade Nirvana?",o:["DGC Records","Sub Pop","Geffen","Epitaph"],a:1,d:3},
    {q:"Vem producerade Nevermind av Nirvana?",o:["Steve Albini","Rick Rubin","Butch Vig","Jack Endino"],a:2,d:3},
    {q:"Vilket år spelade Led Zeppelin sitt sista konsertturnén?",o:["1977","1979","1980","1982"],a:0,d:3},
    {q:"Vad heter Iron Maidens maskot?",o:["Vic","Eddie","Spike","Axe"],a:1,d:3},
    {q:"Vilket album innehåller Black Sabbaths låt 'Iron Man'?",o:["Black Sabbath","Paranoid","Master of Reality","Vol. 4"],a:1,d:3},
    {q:"Vem var originaltrummisen i AC/DC?",o:["Phil Rudd","Simon Wright","Chris Slade","Peter Clack"],a:0,d:3},
  ],

  "🇸🇪 Svensk musik": [
    // LÄTT (d:1)
    {q:"Vilket år vann ABBA Eurovision?",o:["1972","1974","1976","1978"],a:1,d:1},
    {q:"Var är Håkan Hellström uppvuxen?",o:["Stockholm","Malmö","Göteborg","Uppsala"],a:2,d:1},
    {q:"Vilket band sjöng 'The Sign'?",o:["Roxette","ABBA","Ace of Base","Robyn"],a:2,d:1},
    {q:"Vad heter Robyn egentligen?",o:["Robin Carlsson","Robyn Andersson","Robin Miriam Carlsson","Robyn Lindqvist"],a:2,d:1},
    {q:"Vilket år vann Loreen Eurovision med 'Euphoria'?",o:["2010","2012","2014","2016"],a:1,d:1},
    {q:"Vem sjunger 'En dag'?",o:["Lars Winnerbäck","Håkan Hellström","Magnus Uggla","Ulf Lundell"],a:0,d:1},
    {q:"Vilket band sjöng 'It Must Have Been Love'?",o:["ABBA","Ace of Base","Roxette","Carola"],a:2,d:1},
    {q:"Vem producerade de flesta av ABBA's hits?",o:["Stig Anderson","Björn Ulvaeus","Benny Andersson","Björn & Benny"],a:3,d:1},
    {q:"Vilket år debuterade Avicii?",o:["2006","2008","2010","2012"],a:2,d:1},
    {q:"Vem sjunger 'Karolina'?",o:["Håkan Hellström","Lars Winnerbäck","Bob Hund","Ulf Lundell"],a:0,d:1},
    // MEDEL (d:2)
    {q:"Vad heter Max Martins riktiga namn?",o:["Martin Sandberg","Max Sandberg","Martin Carlsson","Max Karlsson"],a:0,d:2},
    {q:"Vilket år kom Robyn's självbetitlade album?",o:["1993","1995","1997","1999"],a:2,d:2},
    {q:"Vilket band sjöng 'Lovefool'?",o:["Roxette","The Cardigans","Ace of Base","Sahara Hotnights"],a:1,d:2},
    {q:"Vem vann Melodifestivalen 2012?",o:["Loreen","Eric Saade","Danny Saucedo","Melodifestivalen hölls ej"],a:0,d:2},
    {q:"Vad heter Aviciis riktiga namn?",o:["Tim Bergling","Tim Svensson","Tim Lindqvist","Tim Berg"],a:0,d:2},
    {q:"Vilket år grundades Swedish House Mafia?",o:["2002","2004","2006","2008"],a:2,d:2},
    {q:"Vem sjunger 'Sommartider'?",o:["Gyllene Tider","Roxette","Per Gessle","Bröderna Lindqvist"],a:0,d:2},
    {q:"Vilket år debuterade Robyn?",o:["1993","1995","1997","1999"],a:1,d:2},
    {q:"Vem producerade Ace of Base's 'The Sign'?",o:["Max Martin","Denniz Pop","Rolf Ellmer","Jonas Berggren"],a:1,d:2},
    {q:"Vilket band är Per Gessle med i?",o:["ABBA","Ace of Base","Roxette","The Hellacopters"],a:2,d:2},
    // SVÅRT (d:3)
    {q:"På vilket skivbolag debuterade ABBA?",o:["Polar","Epic","CBS","Atlantic"],a:0,d:3},
    {q:"Vilket år bildades Gyllene Tider?",o:["1974","1976","1978","1980"],a:1,d:3},
    {q:"Vem spelade trummor i ABBA?",o:["Ingen – de använde session-musiker","Björn Ulvaeus","Ola Brunkert","Roger Palm"],a:2,d:3},
    {q:"Vilket år startade Denniz Pop sin karriär som producent?",o:["1983","1985","1987","1989"],a:2,d:3},
    {q:"Vad heter The Cardigans sångerskas fullständiga namn?",o:["Nina Persson","Nina Carlsson","Nina Lindqvist","Nina Svensson"],a:0,d:3},
  ],

  "🏙️ Umeå & Norrland": [
    // LÄTT (d:1)
    {q:"Umeå är beläget vid vilken älv?",o:["Luleälven","Ångermanälven","Umeälven","Skellefte­älven"],a:2,d:1},
    {q:"Vilket år utsågs Umeå till Europas kulturhuvudstad?",o:["2010","2012","2014","2016"],a:2,d:1},
    {q:"Vilket universitet finns i Umeå?",o:["Luleå tekniska","Uppsala","Umeå universitet","Mittuniversitetet"],a:2,d:1},
    {q:"Vad kallas Umeå ibland på grund av sina björkar?",o:["Björkstaden","Trädstaden","Norrlandsstaden","Älvstaden"],a:0,d:1},
    {q:"I vilket landskap ligger Umeå?",o:["Ångermanland","Lappland","Västerbotten","Norrbotten"],a:2,d:1},
    {q:"Vad heter Umeås ishockeylag?",o:["Umeå HC","Björklöven","IF Björklöven","Umeå Cowboys"],a:1,d:1},
    {q:"Vilken E-väg går genom Umeå?",o:["E4","E6","E10","E12"],a:0,d:1},
    {q:"Vilket år grundades Umeå universitet?",o:["1945","1955","1963","1971"],a:2,d:1},
    // MEDEL (d:2)
    {q:"Vad heter Umeås konstmuseum?",o:["Bildmuseet","Umeå konstmuseum","Norrlandsmuseet","Västerbottensmuseet"],a:0,d:2},
    {q:"Vilken kändis från Umeå är känd inom friidrott?",o:["Stefan Holm","Patrik Sjöberg","Kajsa Bergqvist","Carolina Klüft"],a:0,d:2},
    {q:"Vilket år fick Umeå stadsrättigheter?",o:["1588","1622","1640","1700"],a:1,d:2},
    {q:"Vad heter Umeås fotbollslag i allsvenskan?",o:["IFK Umeå","Umeå FC","IK Umeå","Umeå IK"],a:3,d:2},
    {q:"Vilket naturreservat ligger nära Umeå?",o:["Nydalasjön","Gammlia","Ängesträsket","Storberget"],a:0,d:2},
    {q:"Vad heter Umeås stora köpcenter?",o:["Mitt i City","Syd","A6","Utopia"],a:3,d:2},
    // SVÅRT (d:3)
    {q:"Vilket år brann Umeå ned och byggdes upp igen?",o:["1798","1888","1902","1920"],a:1,d:3},
    {q:"Vad heter Umeås äldsta kyrka?",o:["Umeå stadsförsamlings kyrka","Gammlia kyrka","Heliga Trefaldighets kyrka","Umeå landsförsamlings kyrka"],a:3,d:3},
    {q:"Vilket år startade Umeå Open (tennistävling)?",o:["1980","1985","1990","1995"],a:2,d:3},
    {q:"Vad heter Umeås lokaltidning grundad 1917?",o:["Västerbottens-Kuriren","Norrländska Socialdemokraten","Umeå Tidning","Norran"],a:0,d:3},
  ],

  "🎬 Film & Serier": [
    // LÄTT (d:1)
    {q:"Vem spelar Iron Man i MCU?",o:["Chris Evans","Robert Downey Jr.","Chris Hemsworth","Mark Ruffalo"],a:1,d:1},
    {q:"Vilket år kom Titanic (1997)?",o:["1995","1996","1997","1998"],a:2,d:1},
    {q:"Vem regisserade Jurassic Park?",o:["James Cameron","Steven Spielberg","George Lucas","Ridley Scott"],a:1,d:1},
    {q:"Vilket land producerade filmen Parasite (2019)?",o:["Japan","Kina","Sydkorea","Thailand"],a:2,d:1},
    {q:"Vem spelar Katniss i Hunger Games?",o:["Emma Stone","Jennifer Lawrence","Shailene Woodley","Kristen Stewart"],a:1,d:1},
    {q:"Vilket år kom första Star Wars-filmen?",o:["1975","1977","1979","1981"],a:1,d:1},
    {q:"Vem spelar Hermione Granger i Harry Potter?",o:["Emma Roberts","Emma Stone","Emma Watson","Emily Blunt"],a:2,d:1},
    {q:"Vilket land kommer filmen 'Trollkarlen från Oz' ifrån?",o:["England","Australien","USA","Kanada"],a:2,d:1},
    {q:"Vem spelar Jack i Titanic?",o:["Brad Pitt","Johnny Depp","Leonardo DiCaprio","Matt Damon"],a:2,d:1},
    {q:"Vad heter Batmans alter ego?",o:["Clark Kent","Peter Parker","Bruce Wayne","Tony Stark"],a:2,d:1},
    // MEDEL (d:2)
    {q:"Vem regisserade The Dark Knight?",o:["Tim Burton","Joel Schumacher","Christopher Nolan","Zack Snyder"],a:2,d:2},
    {q:"Vilket år kom Breaking Bad?",o:["2006","2008","2010","2012"],a:1,d:2},
    {q:"Vem spelar Walter White i Breaking Bad?",o:["Bryan Cranston","Aaron Paul","Bob Odenkirk","Dean Norris"],a:0,d:2},
    {q:"Vilket år kom Game of Thrones?",o:["2009","2011","2013","2015"],a:1,d:2},
    {q:"Vem regisserade Pulp Fiction?",o:["Martin Scorsese","Quentin Tarantino","Coen Brothers","David Fincher"],a:1,d:2},
    {q:"Vilket år kom The Shawshank Redemption?",o:["1992","1994","1996","1998"],a:1,d:2},
    {q:"Vem spelar Forrest Gump?",o:["Tom Cruise","Tom Hanks","Tom Selleck","Tom Hardy"],a:1,d:2},
    {q:"Vilket år kom första säsongen av Friends?",o:["1992","1994","1996","1998"],a:1,d:2},
    // SVÅRT (d:3)
    {q:"Vem komponerade musiken till Star Wars?",o:["Hans Zimmer","Danny Elfman","John Williams","Ennio Morricone"],a:2,d:3},
    {q:"Vilket år kom Citizen Kane?",o:["1938","1941","1944","1947"],a:1,d:3},
    {q:"Vem regisserade 2001: A Space Odyssey?",o:["Steven Spielberg","Stanley Kubrick","Ridley Scott","Francis Ford Coppola"],a:1,d:3},
    {q:"Vilket produktionsbolag producerade Parasite?",o:["CJ Entertainment","Barunson E&A","Showbox","NEW"],a:1,d:3},
  ],

  "🧒 Barnfilmer & Disney": [
    // LÄTT (d:1)
    {q:"Vad heter lejonungen i Lejonkungen?",o:["Simba","Nala","Mufasa","Pumba"],a:0,d:1},
    {q:"Vad heter fiskens pappa i Hitta Nemo?",o:["Martin","Marlin","Marcel","Marco"],a:1,d:1},
    {q:"Vilket djur är Bambi?",o:["Älg","Rådjur","Hjort","Ren"],a:1,d:1},
    {q:"Vad heter prinsessan i Frost?",o:["Anna och Bella","Elsa och Anna","Elsa och Sofia","Anna och Elsa"],a:3,d:1},
    {q:"Vilket år kom Lejonkungen?",o:["1990","1992","1994","1996"],a:2,d:1},
    {q:"Vad heter Mulan's drake?",o:["Shang","Mushu","Cri-Kee","Khan"],a:1,d:1},
    {q:"Vad heter cowboyen i Toy Story?",o:["Buzz","Woody","Rex","Hamm"],a:1,d:1},
    {q:"Vilket djur är Dumbo?",o:["Häst","Giraff","Elefant","Noshörning"],a:2,d:1},
    {q:"Vad heter prinsessan i Törnrosa?",o:["Aurora","Ariel","Belle","Jasmine"],a:0,d:1},
    {q:"Vad heter Pippi Långstrumps häst?",o:["Lansen","Lansen","Lansen","Lansen"],a:0,d:1},
    {q:"Vilket djur är Simba i Lejonkungen?",o:["Tiger","Leopard","Lejon","Gepard"],a:2,d:1},
    {q:"Vad heter rymdkommandot i Toy Story?",o:["Woody","Buzz Lightyear","Rex","Hamm"],a:1,d:1},
    {q:"Vem är Snövits styvmor?",o:["En häxa","En ond drottning","En trollkvinna","En förgiftad fe"],a:1,d:1},
    {q:"Vad heter hunden i Pricken och hans vänner?",o:["Pricken","Perdita","Rex","Lassie"],a:1,d:1},
    {q:"Vilket år kom Frost?",o:["2011","2013","2015","2017"],a:1,d:1},
    // MEDEL (d:2)
    {q:"Vilket år kom Toy Story?",o:["1993","1995","1997","1999"],a:1,d:2},
    {q:"Vad heter häxan i Lilo och Stitch?",o:["Det finns ingen häxa","Ursula","Madam Mim","Yzma"],a:0,d:2},
    {q:"Vilket år kom Hitta Nemo?",o:["2001","2003","2005","2007"],a:1,d:2},
    {q:"Vad heter prinsessan i Sagan om den magiska kalebassen?",o:["Kida","Moana","Raya","Merida"],a:1,d:2},
    {q:"Vem röstade Woody i Toy Story originalet?",o:["Tom Hanks","Tim Allen","Billy Crystal","John Goodman"],a:0,d:2},
    {q:"Vilket år kom Aladdin?",o:["1990","1992","1994","1996"],a:1,d:2},
    {q:"Vad heter Ariels bästa kompis i Den lilla sjöjungfrun?",o:["Sebastian","Flounder","Scuttle","Louis"],a:1,d:2},
    {q:"Vilket år kom Beauty and the Beast?",o:["1989","1991","1993","1995"],a:1,d:2},
    // SVÅRT (d:3)
    {q:"Vilket år kom Disneys första animerade film Snövit?",o:["1934","1937","1940","1943"],a:1,d:3},
    {q:"Vem komponerade musiken till Lejonkungen?",o:["Alan Menken","Howard Ashman","Hans Zimmer","Elton John"],a:2,d:3},
    {q:"Vilket år kom Fantasia?",o:["1938","1940","1942","1944"],a:1,d:3},
    {q:"Vem röstade Scar i Lejonkungen?",o:["Tim Curry","Jeremy Irons","Ian McKellen","Alan Rickman"],a:1,d:3},
    {q:"Vilket Pixar-film kom först?",o:["A Bug's Life","Toy Story","Monsters Inc","Finding Nemo"],a:1,d:3},
  ],

  "⚽ Sport": [
    // LÄTT (d:1)
    {q:"Vilket land vann fotbolls-VM 2022?",o:["Brasilien","Frankrike","Argentina","Portugal"],a:2,d:1},
    {q:"Vilket land vann fotbolls-VM 2018?",o:["Tyskland","Brasilien","Frankrike","Argentina"],a:2,d:1},
    {q:"Vem vann Ballon d'Or flest gånger?",o:["Cristiano Ronaldo","Lionel Messi","Ronaldinho","Zinedine Zidane"],a:1,d:1},
    {q:"Vilket land vann fotbolls-VM 2014?",o:["Brasilien","Argentina","Frankrike","Tyskland"],a:3,d:1},
    {q:"Hur många spelare finns i ett fotbollslag?",o:["10","11","12","9"],a:1,d:1},
    {q:"Vilket lag vann Champions League 2023?",o:["Real Madrid","Manchester City","Bayern München","PSG"],a:1,d:1},
    {q:"Vilket land är Zlatan Ibrahimović från?",o:["Danmark","Finland","Norge","Sverige"],a:3,d:1},
    {q:"Vilket land vann Olympiska Spelen i fotboll 2020 (Tokyo)?",o:["Brasilien","Frankrike","Mexiko","Spanien"],a:0,d:1},
    // MEDEL (d:2)
    {q:"Vilket år vann Sverige VM-brons i fotboll?",o:["1950","1958","1966","1974"],a:1,d:2},
    {q:"Hur många Grand Slam har Roger Federer vunnit?",o:["18","20","22","24"],a:1,d:2},
    {q:"Vilket lag spelar hemma på Camp Nou?",o:["Real Madrid","Atletico Madrid","FC Barcelona","Valencia"],a:2,d:2},
    {q:"Vilket år vann Sverige EM i fotboll?",o:["Sverige har aldrig vunnit EM","1992","1996","2000"],a:0,d:2},
    {q:"Vem satte 100m-rekordet på 9.58 sekunder?",o:["Carl Lewis","Maurice Greene","Usain Bolt","Justin Gatlin"],a:2,d:2},
    {q:"Vilket år hölls OS i Stockholm?",o:["1908","1912","1920","1924"],a:1,d:2},
    // SVÅRT (d:3)
    {q:"Vilket år grundades FIFA?",o:["1900","1904","1908","1912"],a:1,d:3},
    {q:"Vem är historiens mestmålsgörare i Champions League?",o:["Lionel Messi","Raul","Cristiano Ronaldo","Karim Benzema"],a:2,d:3},
    {q:"Vilket år spelade Sverige sin första VM-match i fotboll?",o:["1930","1934","1938","1950"],a:1,d:3},
    {q:"Vem vann Formel 1-VM 2021?",o:["Lewis Hamilton","Max Verstappen","Valtteri Bottas","Sebastian Vettel"],a:1,d:3},
  ],

  "🍕 Mat & Dryck": [
    // LÄTT (d:1)
    {q:"Vad är huvudingrediensen i guacamole?",o:["Tomat","Avokado","Lime","Koriander"],a:1,d:1},
    {q:"Vilket land kommer sushi ifrån?",o:["Kina","Korea","Japan","Thailand"],a:2,d:1},
    {q:"Vad är en cappuccino gjord på?",o:["Bara mjölk","Espresso och ångad mjölk","Te och mjölk","Kaffe och grädde"],a:1,d:1},
    {q:"Vilket land kommer pizza ifrån?",o:["Frankrike","Spanien","Italien","Grekland"],a:2,d:1},
    {q:"Vad är tacos traditionellt gjort av?",o:["Vete","Majs","Ris","Potatis"],a:1,d:1},
    {q:"Vilket land kommer wienerbrød ifrån?",o:["Österrike","Danmark","Sverige","Norge"],a:1,d:1},
    {q:"Vad kallas den japanska rättenn med rå fisk?",o:["Sushi","Sashimi","Ramen","Udon"],a:1,d:1},
    {q:"Vilket land kommer paella ifrån?",o:["Italien","Portugal","Frankrike","Spanien"],a:3,d:1},
    // MEDEL (d:2)
    {q:"Vad är huvudingrediensen i hummus?",o:["Linser","Kikärtor","Bönor","Ärtor"],a:1,d:2},
    {q:"Vilket land kommer kimchi ifrån?",o:["Japan","Kina","Korea","Vietnam"],a:2,d:2},
    {q:"Vad är en macaron?",o:["En frukt","En fransk kaka","En ost","En pasta"],a:1,d:2},
    {q:"Vilket land kommer croissanten ursprungligen ifrån?",o:["Frankrike","Österrike","Belgien","Schweiz"],a:1,d:2},
    {q:"Vad är Worcestershiresås gjord på?",o:["Tomat","Ansjovis","Pepparrot","Senap"],a:1,d:2},
    {q:"Vilket land producerar mest olivolja?",o:["Italien","Spanien","Grekland","Turkiet"],a:1,d:2},
    // SVÅRT (d:3)
    {q:"Vad är en Maillard-reaktion?",o:["En kemisk reaktion vid jäsning","En brunningsreaktion vid upphettning","En saltningsprocess","En konserveringsmetod"],a:1,d:3},
    {q:"Vilket land producerar Grand Cru-viner?",o:["Italien","Spanien","Frankrike","Portugal"],a:2,d:3},
    {q:"Vad heter den japanska metoden att skära fisk?",o:["Ikejime","Sashimi","Katsu","Mirin"],a:0,d:3},
  ],

  "🌍 Geografi & Historia": [
    // LÄTT (d:1)
    {q:"Vad är Frankrikes huvudstad?",o:["Lyon","Marseille","Paris","Bordeaux"],a:2,d:1},
    {q:"Vilket hav är störst?",o:["Atlantiska","Indiska","Arktiska","Stilla havet"],a:3,d:1},
    {q:"Vilket land är störst till ytan?",o:["USA","Kanada","Kina","Ryssland"],a:3,d:1},
    {q:"Hur många kontinenter finns det?",o:["5","6","7","8"],a:2,d:1},
    {q:"Vad är Australiens huvudstad?",o:["Sydney","Melbourne","Canberra","Brisbane"],a:2,d:1},
    {q:"Vilket år föll Berlinmuren?",o:["1987","1989","1991","1993"],a:1,d:1},
    {q:"Vilket land har flest invånare?",o:["Indien","Kina","USA","Indonesien"],a:0,d:1},
    {q:"Vad är Japans huvudstad?",o:["Osaka","Kyoto","Tokyo","Hiroshima"],a:2,d:1},
    // MEDEL (d:2)
    {q:"Vilket år började andra världskriget?",o:["1937","1939","1941","1943"],a:1,d:2},
    {q:"Vilket land var tidigare känt som Persien?",o:["Irak","Iran","Turkiet","Syrien"],a:1,d:2},
    {q:"Vilket år grundades FN?",o:["1943","1945","1947","1949"],a:1,d:2},
    {q:"Vilket land har flest UNESCO-världsarv?",o:["Kina","Italien","Spanien","Frankrike"],a:1,d:2},
    {q:"Vilket år landade människan på månen?",o:["1967","1969","1971","1973"],a:1,d:2},
    {q:"Vilket land är Sahara störst i?",o:["Egypten","Libyen","Algeriet","Sudan"],a:2,d:2},
    // SVÅRT (d:3)
    {q:"Vilket år grundades Romerska riket?",o:["753 f.Kr.","509 f.Kr.","264 f.Kr.","27 f.Kr."],a:0,d:3},
    {q:"Vilket land var kolonialmakt över Vietnam?",o:["England","Holland","Frankrike","Portugal"],a:2,d:3},
    {q:"Vilket år avskaffades apartheid i Sydafrika?",o:["1988","1990","1992","1994"],a:3,d:3},
  ],

  "🎮 Gaming & Teknik": [
    // LÄTT (d:1)
    {q:"Vilket företag tillverkar PlayStation?",o:["Microsoft","Nintendo","Sony","Sega"],a:2,d:1},
    {q:"Vilket år lanserades första iPhone?",o:["2005","2007","2009","2011"],a:1,d:1},
    {q:"Vilket företag grundade Bill Gates?",o:["Apple","Amazon","Microsoft","Google"],a:2,d:1},
    {q:"Vad står CPU för?",o:["Central Processing Unit","Computer Processing Unit","Central Program Unit","Computer Program Unit"],a:0,d:1},
    {q:"Vilket spel är känt för 'Creeper'?",o:["Roblox","Fortnite","Minecraft","Terraria"],a:2,d:1},
    {q:"Vilket år grundades Google?",o:["1996","1998","2000","2002"],a:1,d:1},
    {q:"Vilket företag tillverkar Xbox?",o:["Sony","Nintendo","Microsoft","Sega"],a:2,d:1},
    {q:"Vad heter Nintendos mest kända karaktär?",o:["Link","Pikachu","Mario","Donkey Kong"],a:2,d:1},
    // MEDEL (d:2)
    {q:"Vilket år grundades Spotify?",o:["2004","2006","2008","2010"],a:1,d:2},
    {q:"Vilket år kom första versionen av Windows?",o:["1981","1983","1985","1987"],a:2,d:2},
    {q:"Vem grundade Tesla?",o:["Elon Musk","Martin Eberhard","Jeff Bezos","Larry Page"],a:1,d:2},
    {q:"Vilket år kom Minecraft?",o:["2007","2009","2011","2013"],a:1,d:2},
    {q:"Vad heter Apples smarta assistent?",o:["Cortana","Alexa","Google","Siri"],a:3,d:2},
    {q:"Vilket år grundades Apple?",o:["1974","1976","1978","1980"],a:1,d:2},
    // SVÅRT (d:3)
    {q:"Vem uppfann World Wide Web?",o:["Bill Gates","Steve Jobs","Tim Berners-Lee","Vint Cerf"],a:2,d:3},
    {q:"Vilket år kom första versionen av Linux?",o:["1989","1991","1993","1995"],a:1,d:3},
    {q:"Vad heter protokollet bakom internet?",o:["HTTP","TCP/IP","FTP","SMTP"],a:1,d:3},
    {q:"Vilket år grundades Amazon?",o:["1992","1994","1996","1998"],a:1,d:3},
  ],

  "🎭 90-talet": [
    // LÄTT (d:1)
    {q:"Vilket band sjöng 'Wannabe' (1996)?",o:["TLC","Destiny's Child","Spice Girls","En Vogue"],a:2,d:1},
    {q:"Vilket TV-program handlade om vänner i New York?",o:["Seinfeld","Friends","Frasier","Will & Grace"],a:1,d:1},
    {q:"Vilket band sjöng 'Smells Like Teen Spirit' (1991)?",o:["Pearl Jam","Soundgarden","Nirvana","Green Day"],a:2,d:1},
    {q:"Vilket år kom filmen Titanic?",o:["1995","1997","1999","2001"],a:1,d:1},
    {q:"Vilket spelkonsol lanserade Sony 1994?",o:["Nintendo 64","Sega Saturn","PlayStation","Dreamcast"],a:2,d:1},
    {q:"Vilket band sjöng 'MMMBop'?",o:["New Kids on the Block","Backstreet Boys","Hanson","NSYNC"],a:2,d:1},
    {q:"Vem spelade Neo i Matrix (1999)?",o:["Brad Pitt","Keanu Reeves","Tom Cruise","Will Smith"],a:1,d:1},
    // MEDEL (d:2)
    {q:"Vilket år kom Nirvanas album Nevermind?",o:["1989","1991","1993","1995"],a:1,d:2},
    {q:"Vilket år startade TV-programmet Big Brother?",o:["1997","1999","2001","2003"],a:1,d:2},
    {q:"Vilket spel lanserades som det mest sålda på SNES?",o:["Super Mario World","Zelda","Donkey Kong","Street Fighter II"],a:0,d:2},
    {q:"Vilket band sjöng 'Basket Case'?",o:["The Offspring","Rancid","Green Day","Blink-182"],a:2,d:2},
    {q:"Vilket år kom Toy Story (första datoranimerade filmen)?",o:["1993","1995","1997","1999"],a:1,d:2},
    // SVÅRT (d:3)
    {q:"Vilket år fick internet sin kommersiella genombrott i Sverige?",o:["1991","1993","1995","1997"],a:2,d:3},
    {q:"Vilket år grundades Google?",o:["1996","1998","2000","2002"],a:1,d:3},
    {q:"Vad hette den populära chatttjänsten på 90-talet?",o:["MSN","ICQ","AOL Instant Messenger","IRC"],a:1,d:3},
  ],
};

// Hjälpfunktion – hämta slumpmässiga frågor
function getQuestions(category, difficulty, count) {
  const allCats = category === 'mix' ? Object.keys(QUESTION_DB) : [category];
  let pool = [];
  allCats.forEach(cat => {
    const qs = QUESTION_DB[cat] || [];
    pool = pool.concat(qs.filter(q => q.d <= difficulty));
  });
  // Crypto-quality shuffle för riktig slumpmässighet varje gång
  const arr = pool.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor((crypto.getRandomValues(new Uint32Array(1))[0] / 0xFFFFFFFF) * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  // Format to quiz format
  return arr.slice(0, count).map(q => ({
    question: q.q,
    options: q.o,
    correct: q.a,
    category: allCats.length > 1 ? '🌈 Mix' : category
  }));
}
