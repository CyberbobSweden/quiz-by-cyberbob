// Extra frågor för kategorier med färre än 50
const QUESTION_DB4 = {

  "🏙️ Umeå & Norrland": [
    {q:"Vilket år grundades Umeå energi?",o:["1945","1950","1956","1965"],a:2,d:2},
    {q:"Vilket år invigdes Umeå konserthus?",o:["1982","1986","1990","1994"],a:1,d:3},
    {q:"Vilken stad är Västerbottens residensstad?",o:["Skellefteå","Lycksele","Umeå","Vilhelmina"],a:2,d:1},
    {q:"Vilket år kom Botniabanan till Umeå?",o:["2008","2010","2012","2014"],a:2,d:3},
    {q:"Vad heter älven som rinner genom centrala Umeå?",o:["Ångermanälven","Luleälven","Umeälven","Vindeln"],a:2,d:1},
    {q:"Vilken högskoleutbildning är Umeå extra känt för?",o:["Juridik","Medicin","Konst och design","Ekonomi"],a:1,d:2},
    {q:"Vad heter Norrlandsoperan i Umeå?",o:["Norrlandsoperan","Operan i norr","Umeå Opera","Norrlands Nationalscen"],a:0,d:2},
    {q:"Vilket år öppnade Umeå centralstation?",o:["1892","1902","1912","1922"],a:0,d:3},
    {q:"Vad heter den kände konstnären med atelje i Umeå?",o:["Lars Englund","Carl Eldh","David Wretling","Bror Hjorth"],a:0,d:3},
    {q:"Vilket år grundades Umeå IF ishockey?",o:["1945","1952","1960","1968"],a:1,d:3},
    {q:"Hur kallas området utanför Umeå med konstmuseum?",o:["Bildmuseet","Umedalen","Gammlia","Klockarbäcken"],a:1,d:2},
    {q:"Vilken å rinner genom Umeå universitetsområde?",o:["Umeälven","Röbäcksån","Stadsliden","Tomtebo"],a:1,d:3},
  ],

  "🎭 Allmänkultur & Käpphäst": [
    {q:"Vilket år skrev Shakespeare Hamlet?",o:["1590","1595","1600","1605"],a:2,d:3},
    {q:"Vem skulpterade David?",o:["Raphael","Leonardo da Vinci","Michelangelo","Donatello"],a:2,d:2},
    {q:"Vilket år byggdes Colosseum klart?",o:["70 e.Kr.","80 e.Kr.","90 e.Kr.","100 e.Kr."],a:1,d:3},
    {q:"Vilket år dog Mozart?",o:["1787","1789","1791","1793"],a:2,d:3},
    {q:"Vem skrev Anna Karenina?",o:["Fjodor Dostojevskij","Leo Tolstoj","Anton Tjechov","Ivan Turgenev"],a:1,d:2},
    {q:"Vilket år målade Van Gogh Stjärnenatt?",o:["1885","1887","1889","1891"],a:2,d:2},
    {q:"Vad heter Dantes stora verk?",o:["Iliaden","Odysséen","Divina Commedia","Decameron"],a:2,d:2},
    {q:"Vilket år skrevs Iliaden ner första gången?",o:["800 f.Kr.","500 f.Kr.","300 f.Kr.","100 f.Kr."],a:0,d:3},
    {q:"Vem målade 'Flicka med pärlörhänge'?",o:["Rembrandt","Vermeer","Frans Hals","Jan Steen"],a:1,d:2},
    {q:"Vilket år publicerades Kafkas 'Förvandlingen'?",o:["1910","1912","1914","1916"],a:2,d:3},
    {q:"Vem komponerade Symfoni nr 9?",o:["Mozart","Brahms","Beethoven","Schubert"],a:2,d:1},
    {q:"Vilket år dog Picasso?",o:["1969","1971","1973","1975"],a:2,d:3},
  ],

  "🌈 Blandat / Mix": [
    {q:"Vad heter världens näst högsta berg?",o:["Mont Blanc","Kangchenjunga","K2","Lhotse"],a:2,d:2},
    {q:"Vilket år kom Iphone 1?",o:["2005","2007","2009","2011"],a:1,d:1},
    {q:"Vem sjunger Euphoria (Eurovision 2012)?",o:["Carola","Charlotte Perrelli","Loreen","Petra Mede"],a:2,d:1},
    {q:"Vilket år kom Lejonkungen?",o:["1990","1992","1994","1996"],a:2,d:1},
    {q:"Vem spelar Walter White i Breaking Bad?",o:["Bryan Cranston","Aaron Paul","Bob Odenkirk","Dean Norris"],a:0,d:1},
    {q:"Vilket land vann ishockey-VM 2024?",o:["Sverige","Finland","Kanada","Tjeckien"],a:2,d:2},
    {q:"Vilket år kom Nirvanas Nevermind?",o:["1989","1991","1993","1995"],a:1,d:2},
    {q:"Vilken stad är Australiens folkrikaste?",o:["Canberra","Melbourne","Sydney","Brisbane"],a:2,d:2},
    {q:"Vilket grundämne har atomnummer 1?",o:["Helium","Väte","Litium","Beryllium"],a:1,d:1},
    {q:"Vilket år grundades Twitter?",o:["2004","2006","2008","2010"],a:1,d:2},
    {q:"Vem sjunger 'Blinding Lights'?",o:["Drake","The Weeknd","Post Malone","Travis Scott"],a:1,d:1},
    {q:"Vilket år kom Stranger Things?",o:["2014","2016","2018","2020"],a:1,d:1},
  ],
};

(function() {
  if (typeof QUESTION_DB === 'undefined') return;
  Object.keys(QUESTION_DB4).forEach(cat => {
    if (QUESTION_DB[cat]) {
      QUESTION_DB[cat] = QUESTION_DB[cat].concat(QUESTION_DB4[cat]);
    } else {
      QUESTION_DB[cat] = QUESTION_DB4[cat];
    }
  });
})();
