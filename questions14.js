// questions14.js – Formel 1 (ny kategori) + lite extra överallt
const QUESTION_DB14 = {

"🏎️ Formel 1": [
  // ── LÄTT – alla racingfans vet ──
  {q:"Vem vann Formel 1-VM 2023?",o:["Lewis Hamilton","Max Verstappen","Charles Leclerc","Sergio Perez"],a:1,d:1},
  {q:"Vem vann Formel 1-VM 2024?",o:["Lewis Hamilton","Max Verstappen","Charles Leclerc","Lando Norris"],a:1,d:1},
  {q:"Vilket team kör Max Verstappen för?",o:["Ferrari","Mercedes","Red Bull","McLaren"],a:2,d:1},
  {q:"Vilket team kör Lewis Hamilton för (2024)?",o:["Ferrari","Mercedes","Red Bull","McLaren"],a:1,d:1},
  {q:"Vem har vunnit flest F1-VM totalt?",o:["Ayrton Senna","Michael Schumacher","Lewis Hamilton","Sebastian Vettel"],a:2,d:1},
  {q:"Hur många VM har Lewis Hamilton vunnit?",o:["5","6","7","8"],a:2,d:1},
  {q:"Hur många VM har Michael Schumacher vunnit?",o:["5","6","7","8"],a:2,d:1},
  {q:"Vilket land är Formel 1 grundat i?",o:["USA","Frankrike","Storbritannien","Italien"],a:2,d:1},
  {q:"Vilket år startade Formel 1-VM?",o:["1946","1950","1954","1958"],a:1,d:1},
  {q:"Vilket team är känt för sin röda färg och heter efter en häst?",o:["Alfa Romeo","Ferrari","Maserati","Lamborghini"],a:1,d:1},
  {q:"Vem vann F1-VM 2021?",o:["Lewis Hamilton","Max Verstappen","Valtteri Bottas","Sebastian Vettel"],a:1,d:1},
  {q:"Vilket team vann konstruktörs-VM 2023?",o:["Ferrari","Mercedes","Red Bull","McLaren"],a:2,d:1},
  // ── MEDEL ──
  {q:"Vem vann F1-VM 2022?",o:["Lewis Hamilton","Max Verstappen","Charles Leclerc","Sergio Perez"],a:1,d:2},
  {q:"Vilket år kom Lewis Hamilton till Mercedes?",o:["2010","2012","2014","2016"],a:1,d:2},
  {q:"Vilket team kör Charles Leclerc för?",o:["Ferrari","Mercedes","Red Bull","McLaren"],a:0,d:2},
  {q:"Vem vann F1-VM 2020?",o:["Lewis Hamilton","Valtteri Bottas","Max Verstappen","Sebastian Vettel"],a:0,d:2},
  {q:"Hur många poäng ger en F1-seger?",o:["10","15","25","30"],a:2,d:2},
  {q:"Vilket team kör Lando Norris för?",o:["Ferrari","Mercedes","Red Bull","McLaren"],a:3,d:2},
  {q:"Vad heter F1-banan i Monaco?",o:["Circuit de Monaco","Monte Carlo Circuit","Monaco GP Circuit","Princes Circuit"],a:0,d:2},
  {q:"Vilket team kör Carlos Sainz Jr för (2024)?",o:["Ferrari","Mercedes","Red Bull","McLaren"],a:0,d:2},
  {q:"Vem vann F1-VM 2019?",o:["Lewis Hamilton","Valtteri Bottas","Max Verstappen","Sebastian Vettel"],a:0,d:2},
  {q:"Vilket år kom Verstappen till Red Bull?",o:["2014","2016","2018","2020"],a:1,d:2},
  {q:"Vilken bana är känd som Temple of Speed?",o:["Silverstone","Spa","Monza","Suzuka"],a:2,d:2},
  {q:"Vem vann F1-VM 2016?",o:["Lewis Hamilton","Nico Rosberg","Sebastian Vettel","Kimi Raikkonen"],a:1,d:2},
  // ── SVÅRT ──
  {q:"Vilket år vann Ayrton Senna sitt första F1-VM?",o:["1986","1988","1990","1992"],a:1,d:3},
  {q:"Hur många F1-VM vann Ayrton Senna?",o:["2","3","4","5"],a:1,d:3},
  {q:"Vilket år dog Ayrton Senna?",o:["1992","1994","1996","1998"],a:1,d:3},
  {q:"Vilket land är Ayrton Senna ifrån?",o:["Argentina","Colombia","Brasilien","Venezuela"],a:2,d:3},
  {q:"Vad heter det system som ger förare 10 sek extra boost?",o:["KERS","DRS","ERS","Turbo"],a:2,d:3},
  {q:"Vad betyder DRS i F1?",o:["Drag Reduction System","Drive Race System","Dynamic Racing Sensor","Direct Race Speed"],a:0,d:3},
  {q:"Vilket team vann konstruktörs-VM flest gånger?",o:["Ferrari","McLaren","Mercedes","Williams"],a:0,d:3},
  {q:"Vilket år kom nuvarande tekniska F1-regler (ground effect)?",o:["2018","2020","2022","2024"],a:2,d:3},
  {q:"Vem vann F1-VM 2009?",o:["Lewis Hamilton","Jenson Button","Sebastian Vettel","Felipe Massa"],a:1,d:3},
  {q:"Vilket år vann Michael Schumacher sitt sista VM?",o:["2002","2004","2006","2008"],a:1,d:3},
  {q:"Vilken bana är känd som The Cathedral?",o:["Silverstone","Spa-Francorchamps","Monza","Suzuka"],a:1,d:3},
  {q:"Vem vann F1-VM 2005?",o:["Michael Schumacher","Fernando Alonso","Kimi Raikkonen","Jenson Button"],a:1,d:3},
  // Extra lätta för volym
  {q:"Vad heter F1-teamet från österrike?",o:["Ferrari","Mercedes","Red Bull","McLaren"],a:2,d:1},
  {q:"Vilket team är orangefärgat i F1?",o:["McLaren","Ferrari","Red Bull","Haas"],a:0,d:1},
  {q:"Vad heter det svarta teamet i F1 (Mercedes)?",o:["Svart","Silvergrå","Röd","Blå"],a:1,d:1},
  {q:"Hur många poäng ger en snabbaste varv i F1?",o:["0","1","2","3"],a:1,d:2},
  {q:"Vilket år introducerades DRS i F1?",o:["2009","2011","2013","2015"],a:1,d:3},
  {q:"Vem vann F1-VM 2018?",o:["Lewis Hamilton","Sebastian Vettel","Max Verstappen","Kimi Raikkonen"],a:0,d:3},
],

"🏅 Sport (allmänt)": [
  {q:"Vad heter världsmästerskapet i rugby?",o:["Rugby World Cup","IRB Championship","Rugby Nations Cup","Global Rugby Trophy"],a:0,d:1},
  {q:"Vilket år kom cricket-VM (ICC) igång?",o:["1970","1975","1980","1985"],a:1,d:2},
  {q:"Vilket land har vunnit flest OS-guld i simning?",o:["Australien","Kina","Ryssland","USA"],a:3,d:2},
  {q:"Vem vann Australian Open herrar 2024?",o:["Novak Djokovic","Carlos Alcaraz","Jannik Sinner","Daniil Medvedev"],a:2,d:2},
  {q:"Vilket år kom Bryson DeChambeau till LIV Golf?",o:["2021","2022","2023","2024"],a:1,d:3},
  {q:"Vad heter OS-grenen där man åker på en bräda i snö?",o:["Slalom","Snowboard","Freestyle","Giant slalom"],a:1,d:1},
  {q:"Vilket land vann Rugby World Cup 2023?",o:["Nya Zeeland","Sydafrika","England","Frankrike"],a:1,d:2},
  {q:"Hur lång är ett simma 400m individuell medley?",o:["400m","4x100m","16 längder","Alla stämmer"],a:3,d:2},
],

"💻 Teknik & IT": [
  {q:"Vilket år grundades Spotify?",o:["2004","2006","2008","2010"],a:2,d:1},
  {q:"Vilket företag tillverkar Xbox?",o:["Sony","Nintendo","Microsoft","Sega"],a:2,d:1},
  {q:"Vem grundade Amazon?",o:["Bill Gates","Steve Jobs","Jeff Bezos","Elon Musk"],a:2,d:1},
  {q:"Vilket år grundades Twitter (nu X)?",o:["2004","2006","2008","2010"],a:1,d:2},
  {q:"Vilket år lanserades React (Facebook/Meta)?",o:["2011","2013","2015","2017"],a:1,d:3},
  {q:"Vilket år kom Kubernetes?",o:["2012","2014","2016","2018"],a:1,d:3},
  {q:"Vilket år grundades Slack?",o:["2011","2013","2015","2017"],a:1,d:2},
  {q:"Vad heter Microsofts AR-headset?",o:["HoloLens","Quest","Vision Pro","Vive"],a:0,d:2},
],

"🌍 Geografi & Historia": [
  {q:"Vilket är världens folkrikaste stad?",o:["Mumbai","Sao Paulo","Tokyo","Shanghai"],a:2,d:2},
  {q:"Vilket år inträffade folkmordet i Rwanda?",o:["1990","1992","1994","1996"],a:2,d:2},
  {q:"Vilket land hade flest kolonier historiskt?",o:["Spanien","Portugal","Frankrike","Storbritannien"],a:3,d:2},
  {q:"Vilket land kom Kopernikusteorin ifrån?",o:["Tjeckien","Polen","Ungern","Österrike"],a:1,d:3},
  {q:"Vilket år grundades Folkförbundet?",o:["1917","1919","1921","1923"],a:1,d:3},
  {q:"Vilket år slutade Trettioåriga kriget?",o:["1638","1643","1648","1653"],a:2,d:3},
  {q:"Vilket land har flest grannar?",o:["Kina","Ryssland","Brasilien","USA"],a:0,d:2},
  {q:"Vilket år fick Finland självständighet?",o:["1915","1917","1919","1921"],a:1,d:2},
],
};

(function() {
  if (typeof QUESTION_DB === 'undefined') return;
  const existing = new Set();
  Object.values(QUESTION_DB).forEach(qs => qs.forEach(q => existing.add(q.q.toLowerCase().trim())));
  let added = 0, skipped = 0;
  Object.keys(QUESTION_DB14).forEach(cat => {
    const newQs = QUESTION_DB14[cat].filter(q => {
      const key = q.q.toLowerCase().trim();
      if (existing.has(key)) { skipped++; return false; }
      existing.add(key);
      return true;
    });
    if (QUESTION_DB[cat]) { QUESTION_DB[cat] = QUESTION_DB[cat].concat(newQs); }
    else { QUESTION_DB[cat] = newQs; }
    added += newQs.length;
  });
  console.log('questions14.js: ' + added + ' added, ' + skipped + ' dupes skipped');
})();
