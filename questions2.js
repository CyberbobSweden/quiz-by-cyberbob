// ═══════════════════════════════════════════════════════
//  Combitech AW Quiz – Extrafrågor v1
//  Läses in EFTER questions.js och lägger till fler frågor
//  per kategori + tre nya kategorier
// ═══════════════════════════════════════════════════════

const QUESTION_DB2 = {

  "🎭 Allmänkultur & Käpphäst": [
    {q:"Vem målade Mona Lisa?",o:["Michelangelo","Raphael","Leonardo da Vinci","Botticelli"],a:2,d:1},
    {q:"Vem skrev Romeo och Julia?",o:["Charles Dickens","Jane Austen","William Shakespeare","Homer"],a:2,d:1},
    {q:"Vem var den första att gå på månen?",o:["Buzz Aldrin","Neil Armstrong","Yuri Gagarin","John Glenn"],a:1,d:1},
    {q:"Vilket land uppfann champagnen?",o:["Spanien","Italien","Frankrike","Belgien"],a:2,d:1},
    {q:"Vilket år kom Nobelpriset för första gången?",o:["1895","1901","1905","1910"],a:1,d:1},
    {q:"Vem är känd för teorin om relativitet?",o:["Isaac Newton","Niels Bohr","Albert Einstein","Max Planck"],a:2,d:1},
    {q:"Vad är ett palindrom?",o:["Ord som rhymar","Stavas lika framifrån och bakifrån","Gammalt ord","Lånat ord"],a:1,d:1},
    {q:"Vem skrev Hamlet?",o:["Christopher Marlowe","Ben Jonson","William Shakespeare","John Webster"],a:2,d:1},
    {q:"Vilket är det hårdaste naturliga materialet?",o:["Guld","Granit","Diamant","Järn"],a:2,d:1},
    {q:"Hur många ben har en insekt?",o:["4","6","8","10"],a:1,d:1},
    {q:"Vilket år publicerades första Harry Potter-boken?",o:["1995","1997","1999","2001"],a:1,d:1},
    {q:"Vad heter Eiffeltornets stad?",o:["London","Berlin","Rom","Paris"],a:3,d:1},
    {q:"Vem skapade Sherlock Holmes?",o:["Agatha Christie","Arthur Conan Doyle","Edgar Allan Poe","Wilkie Collins"],a:1,d:2},
    {q:"Vilket år antog Sverige kvinnlig rösträtt?",o:["1915","1921","1927","1933"],a:1,d:2},
    {q:"Vem målade Skrik?",o:["Vincent van Gogh","Paul Gauguin","Edvard Munch","Gustav Klimt"],a:2,d:2},
    {q:"Vilket år publicerades Orwells 1984?",o:["1945","1948","1949","1952"],a:2,d:2},
    {q:"Vem skrev Röda rummet?",o:["Selma Lagerlöf","Hjalmar Söderberg","August Strindberg","Lars Ahlin"],a:2,d:2},
    {q:"Vem komponerade Peer Gynt?",o:["Jean Sibelius","Edvard Grieg","Carl Nielsen","Hugo Alfvén"],a:1,d:2},
    {q:"Vilket år dog Astrid Lindgren?",o:["1998","2000","2002","2004"],a:2,d:2},
    {q:"Vem skapade Don Quijote?",o:["Lope de Vega","Miguel de Cervantes","Francisco de Quevedo","Calderon"],a:1,d:2},
    {q:"Vilket år fick Sverige sin grundlag?",o:["1809","1814","1820","1866"],a:0,d:2},
    {q:"Vem målade Nattvarden?",o:["Raphael","Michelangelo","Leonardo da Vinci","Botticelli"],a:2,d:2},
    {q:"Vilket år kom Gutenbergs bibel?",o:["1440","1450","1455","1460"],a:2,d:3},
    {q:"Vem skapade begreppet absurdism?",o:["Jean-Paul Sartre","Simone de Beauvoir","Albert Camus","Kierkegaard"],a:2,d:3},
    {q:"Vilket år dog Selma Lagerlöf?",o:["1936","1940","1944","1948"],a:1,d:3},
    {q:"Vem komponerade Rite of Spring?",o:["Debussy","Ravel","Stravinsky","Prokofiev"],a:2,d:3},
    {q:"Vilket år grundades Kungliga Operan i Stockholm?",o:["1773","1782","1792","1802"],a:0,d:3},
    {q:"Vilket år avled Ingmar Bergman?",o:["2003","2005","2007","2009"],a:2,d:3},
    {q:"Vem skrev Kejsaren av Portugallien?",o:["Hjalmar Söderberg","August Strindberg","Selma Lagerlöf","Verner von Heidenstam"],a:2,d:3},
    {q:"Vilket år kom första upplagan av Nationalencyklopedin?",o:["1985","1988","1990","1993"],a:2,d:3},
    // Extra för variation
    {q:"Vilket år skrevs Iliaden ner första gången?",o:["800 f.Kr.","500 f.Kr.","300 f.Kr.","100 f.Kr."],a:0,d:3},
    {q:"Vem skrev Anna Karenina?",o:["Fjodor Dostojevskij","Leo Tolstoj","Anton Tjechov","Ivan Turgenev"],a:1,d:2},
    {q:"Vilket år målade Van Gogh Stjärnenatt?",o:["1885","1887","1889","1891"],a:2,d:2},
    {q:"Vad heter Dantes stora verk?",o:["Iliaden","Odysséen","Divina Commedia","Decameron"],a:2,d:2},
    {q:"Vilket år dog Mozart?",o:["1787","1789","1791","1793"],a:2,d:3},
    {q:"Vilket år skrev Shakespeare Hamlet?",o:["1590","1595","1600","1605"],a:2,d:3},
    {q:"Vem skulpterade David?",o:["Raphael","Leonardo da Vinci","Michelangelo","Donatello"],a:2,d:2},
    {q:"Vilket år byggdes Colosseum klart?",o:["70 e.Kr.","80 e.Kr.","90 e.Kr.","100 e.Kr."],a:1,d:3},
  ],

  "🌈 Blandat / Mix": [
    {q:"Vilket land kommer ABBA ifrån?",o:["Norge","Danmark","Sverige","Finland"],a:2,d:1},
    {q:"Vad är världens längsta flod?",o:["Amazonas","Yangtze","Mississipi","Nilen"],a:3,d:1},
    {q:"Vilket land kommer pizza ifrån?",o:["Frankrike","Spanien","Italien","Grekland"],a:2,d:1},
    {q:"Vem målade Mona Lisa?",o:["Michelangelo","Raphael","Leonardo da Vinci","Botticelli"],a:2,d:1},
    {q:"Vilket år föll Berlinmuren?",o:["1987","1989","1991","1993"],a:1,d:1},
    {q:"Vem sjunger Rolling in the Deep?",o:["Amy Winehouse","Adele","Duffy","Paloma Faith"],a:1,d:1},
    {q:"Vem spelar Iron Man i MCU?",o:["Chris Evans","Robert Downey Jr.","Chris Hemsworth","Mark Ruffalo"],a:1,d:1},
    {q:"Vilket land vann fotbolls-VM 2022?",o:["Brasilien","Frankrike","Argentina","Portugal"],a:2,d:1},
    {q:"Vad är DNA?",o:["Proteinkomplex","Ribosomalt RNA","Deoxiribonukleinsyra","Adenosintrifosfat"],a:2,d:1},
    {q:"Vilket spel är känt för Creeper?",o:["Roblox","Fortnite","Minecraft","Terraria"],a:2,d:1},
    {q:"Vilket år landade människan på månen?",o:["1967","1969","1971","1973"],a:1,d:1},
    {q:"Vem sjunger Bad Guy?",o:["Ariana Grande","Billie Eilish","Dua Lipa","Olivia Rodrigo"],a:1,d:1},
    {q:"Vilket år grundades Google?",o:["1996","1998","2000","2002"],a:1,d:2},
    {q:"Vem regisserade Inception?",o:["Ridley Scott","Christopher Nolan","David Fincher","Darren Aronofsky"],a:1,d:2},
    {q:"Vilket år kom Breaking Bad?",o:["2006","2008","2010","2012"],a:1,d:2},
    {q:"Vilket land har flest invånare?",o:["Indien","Kina","USA","Indonesien"],a:0,d:2},
    {q:"Vem vann Formel 1-VM 2021?",o:["Lewis Hamilton","Max Verstappen","Valtteri Bottas","Sebastian Vettel"],a:1,d:2},
    {q:"Vilket grundämne har kemisk symbol Au?",o:["Silver","Aluminium","Guld","Koppar"],a:2,d:2},
    {q:"Vem producerade Michael Jacksons Thriller?",o:["Berry Gordy","Quincy Jones","Teddy Riley","Babyface"],a:1,d:2},
    {q:"Vilket år kom Pixars Up?",o:["2007","2009","2011","2013"],a:1,d:2},
    {q:"Vilket land har vunnit flest OS-guld totalt?",o:["Ryssland","Kina","USA","Tyskland"],a:2,d:2},
    {q:"Vilket år kom Squid Game?",o:["2019","2021","2022","2023"],a:1,d:2},
    {q:"Vem uppfann World Wide Web?",o:["Bill Gates","Steve Jobs","Tim Berners-Lee","Vint Cerf"],a:2,d:3},
    {q:"Vad heter kvantfysikens osäkerhetsprincip?",o:["Einsteins princip","Heisenbergs osäkerhetsprincip","Bohrs princip","Plancks kvantum"],a:1,d:3},
    {q:"Vilket år avskaffades apartheid?",o:["1988","1990","1992","1994"],a:3,d:3},
    {q:"Vilket år kom Citizen Kane?",o:["1938","1941","1944","1947"],a:1,d:3},
    {q:"Vem skapade begreppet absurdism?",o:["Jean-Paul Sartre","Simone de Beauvoir","Albert Camus","Kierkegaard"],a:2,d:3},
    {q:"Vilket år grundades Anthropic?",o:["2019","2021","2022","2023"],a:1,d:3},
    {q:"Vilket år kom Frank Oceans Blonde?",o:["2014","2016","2018","2020"],a:1,d:3},
    {q:"Vad heter Schrödingers tankeexperiment?",o:["Schrödingers paradox","Schrödingers katt","Schrödingers box","Kvantparadoxen"],a:1,d:3},
    // Extra variation
    {q:"Vilket år grundades FN?",o:["1943","1945","1947","1949"],a:1,d:2},
    {q:"Vad heter världens högsta berg?",o:["K2","Mont Blanc","Mount Everest","Kilimanjaro"],a:2,d:1},
    {q:"Vem sjunger Euphoria (Eurovision 2012)?",o:["Carola","Charlotte Perrelli","Loreen","Petra Mede"],a:2,d:1},
    {q:"Vilket år kom Lejonkungen?",o:["1990","1992","1994","1996"],a:2,d:1},
    {q:"Vilket land vann ishockey-VM 2024?",o:["Sverige","Finland","Kanada","Tjeckien"],a:2,d:2},
    {q:"Vilket år kom Nirvanas Nevermind?",o:["1989","1991","1993","1995"],a:1,d:2},
    {q:"Vem spelar Walter White i Breaking Bad?",o:["Bryan Cranston","Aaron Paul","Bob Odenkirk","Dean Norris"],a:0,d:1},
    {q:"Vilket år kom iPhone 1?",o:["2005","2007","2009","2011"],a:1,d:1},
  ],

  "🏙️ Umeå & Norrland": [
    // Extra frågor för variation
    {q:"Vilket år grundades Umeå IF (fotboll)?",o:["1917","1927","1937","1947"],a:0,d:3},
    {q:"Vad heter kullen i centrala Umeå?",o:["Röbäckskullen","Umedalen","Backenkullen","Tomtebo"],a:0,d:3},
    {q:"Vilket år startade Umeå Open tennis?",o:["1980","1985","1990","1995"],a:2,d:3},
    {q:"Vilket år grundades Umeå som stad?",o:["1588","1621","1650","1700"],a:1,d:3},
    {q:"Vad heter Umeås fotbollslag i div 1?",o:["IFK Umeå","Umeå FC","IK Umeå","Umeå IK"],a:3,d:2},
    {q:"Vad heter älven som rinner förbi Umeå?",o:["Ångermanälven","Luleälven","Umeälven","Vindeln"],a:2,d:1},
    {q:"Vilket år kom Botniabanan till Umeå?",o:["2008","2010","2012","2014"],a:2,d:3},
    {q:"Vilken stad är Västerbottens residensstad?",o:["Skellefteå","Lycksele","Umeå","Vilhelmina"],a:2,d:2},
    {q:"Vilket år grundades Umeå energi?",o:["1945","1950","1956","1965"],a:2,d:3},
    {q:"Vilket år invigdes Umeå konserthus?",o:["1982","1986","1990","1994"],a:1,d:3},
  ],
};

// Merge DB2 into main DB
(function() {
  if (typeof QUESTION_DB === 'undefined') return;
  Object.keys(QUESTION_DB2).forEach(cat => {
    if (QUESTION_DB[cat]) {
      QUESTION_DB[cat] = QUESTION_DB[cat].concat(QUESTION_DB2[cat]);
    } else {
      QUESTION_DB[cat] = QUESTION_DB2[cat];
    }
  });
})();
