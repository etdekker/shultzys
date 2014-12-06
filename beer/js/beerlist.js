var beerlist = [
  {
    "name":"21st Amendment",
    "city":"San Francisco, CA",
    "link":'http://www.21st-amendment.com/',
    "img":'21st.jpg'
  },
  {
    "name":"Aecht Schlenkerla",
    "city":"Germany",
    "link":'http://www.schlenkerla.de/indexe.html',
    "img":'aecht.jpg'
  },
  {
    "name":"Alaskan",
    "city":"Juneau, AK",
    "link":'http://www.alaskanbeer.com/',
    "img":'alaskan.jpg'
  },
  {
    "name":"Alpine",
    "city":"Oroville, WA",
    "link":'http://www.alpine-brewing.com/',
    "img":'alpine.jpg'
  },
  {
    "name":"Anchor",
    "city":"San Francisco, CA",
    "link":'http://www.anchorbrewing.com/',
    "img":'anchor.jpg'
  },
  {
    "name":"Anderson Valley", 
    "city":"Boonville, CA", 
    "link":'http://www.avbc.com/',
    "img":'anderson.jpg'
  },
  {
    "name":"Avery", 
    "city":"Boulder, CO",
    "link":'http://www.averybrewing.com/',
    "img":'avery.jpg'
  },
  {
    "name":"Ayinger",
    "city":"Germany",
    "link":'http://en.ayinger-bier.de/',
    "img":'ayinger.png'
  },
  /*{
    //site down, closed?
    "name":"Baron",
    "city":"Seattle, WA",
    "link":'http://www.baronbeer.com/'
  },*/
  {
    //owned by anheuser busch, site redirects to AB
    "name":"Bass Ale",
    "city":"UK",
    "link":'http://www.bass.com/',
    "img":'bass.png'
  },
  {
    "name":"Bayern",
    "city":"Missoula, MT",
    "link":'http://www.bayernbrewery.com/',
    "img":'bayern.png'
  },
  {
    "name":"Bear Republic",
    "city":"Cloverdale, CA",
    "link":'http://www.bearrepublic.com/',
    "img":'bear.jpg'
  },
  {
    "name":"Beck's",
    "city":"Germany",
    "link":'http://www.becks.com/',
    "img":'becks.gif'
  },
  {
    "name":"Big Al Brewing",
    "city":"Seattle, WA",
    "link":'http://www.bigalbrewing.com/seattle-breweries.php',
    "img":'big_al.jpg'
  },
  {
    "name":"Big Sky",
    "city":"Missoula, MT",
    "link":'http://www.bigskybrew.com/',
    "img":'big_sky.jpg'
  },
  {
    "name":"Bitburger",
    "city":"Germany",
    "link":'http://www.bitburger.com/',
    "img":'bitburger.jpg'
  },
  {
    "name":"Boundary Bay",
    "city":"Bellingham, WA",
    "link":'http://www.bbaybrewery.com/',
    "img":'boundary.jpg'
  },
  {
    "name":"Bridgeport",
    "city":"Portland, OR",
    "link":'http://www.bridgeportbrew.com/index.php',
    "img":'bridgeport.jpg'
  },
  {
    "name":"Chuckanut",
    "city":"Bellingham, WA",
    "link":'http://www.chuckanutbreweryandkitchen.com/beer.html',
    "img":'chuckanut.jpg'
  },
  {
    "name":"Czechvar",
    "city":"Czech Republic",
    "link":'http://czechvar.com/web/index.html',
    "img":'czechvar.jpg'
  },
  {
    "name":"Deschutes",
    "city":"Bend, OR",
    "link":'http://www.deschutesbrewery.com/',
    "img":'deschutes.jpg'
  },
  {
    "name":"Dinkel Acker",
    "city":"Germany",
    "link":'http://www.dinkelacker.de/',
    "img":'dinkel.jpg'
  },
  {
    "name":"Dogfish Head",
    "city":"Milton, DE",
    "link":'http://www.dogfish.com/',
    "img":'dogfish.jpg'
  },
  {
    "name":"Einbecker",
    "city":"Germany",
    "link":'http://www.einbecker.com/',
    "img":'einbecker.jpg'
  },
  {
    "name":"Elysian",
    "city":"Seattle, WA",
    "link":'http://www.elysianbrewing.com/',
    "img":'elysian.jpg'
  },
  {
    "name":"Erdinger",
    "city":"Germany",
    "link":'http://www.erdinger.com/',
    "img":'erdinger.jpg'
  },
  {
    "name":"Firestone Walker",
    "city":"Paso Robles, CA",
    "link":'http://www.firestonewalker.com/',
    "img":'firestone.png'
  },
  {
    "name":"Franziskaner",
    "city":"Germany",
    "link":'http://www.franziskaner-weissbier.de/',
    "img":'franziskaner.jpg'
  },
  {
    "name":"Fuller's",
    "city":"UK",
    "link":'http://www.fullers.co.uk/',
    "img":'fullers.jpg'
  },
  {
    "name":"Great Divide",
    "city":"Denver, CO",
    "link":'http://www.greatdivide.com/',
    "img":'great.jpg'
  },
  {
    "name":"Guinness",
    "city":"Ireland",
    "link":'http://www.guinness.com/',
    "img":'guinness.png'
  },
  {
    "name":"Hacker-Pschorr",
    "city":"Germany",
    "link":'http://www.hacker-pschorr.us/',
    "img":'hacker.jpg'
  },
  {
    "name":"Hale's Ales",
    "city":"Seattle, WA",
    "link":'http://www.halesbrewery.com/',
    "img":'hales.png'
  },
  {
    "name":"Hoegaarden",
    "city":"Belgium",
    "link":'http://www.hoegaarden.com/',
    "img":'hoegaarden.jpg'
  },
  {
    "name":"Hofbräu Munchen",
    "city":"Germany",
    "link":'http://www.hofbraeu-muenchen.de/',
    "img":'hofbrau.jpg'
  },
  {
    "name":"König Ludwig",
    "city":"Germany",
    "link":'http://www.kaltenberg.de/',
    "img":'konig.jpg'
  },
  {
    "name":"Köstritzer",
    "city":"Germany",
    "link":'http://www.koestritzer.de/home.html',
    "img":'kostritzer.jpg'
  },
  {
    "name":"Lagunitas",
    "city":"Petaluma, CA",
    "link":'http://www.lagunitas.com/',
    "img":'lagunitas.jpg'
  },
  /*{
    //closed
    "name":"Lang Creek",
    "city":"Marion, MT",
    "link":'http://www.langcreekbrewery.com/'
  },*/
  {
    "name":"Laughing Dog",
    "city":"Sandpoint, ID",
    "link":'http://www.laughingdogbrewing.com/',
    "img":'laughing.jpg'
  },
  {
    "name":"Lazy Boy",
    "city":"Everett, WA",
    "link":'http://www.lazyboybrewing.com/',
    "img":'lazy.jpg'
  },
  {
    "name":"Leffe",
    "city":"Belgium",
    "link":'http://www.leffe.be/index.html',
    "img":'leffe.jpg'
  },
  {
    "name":"Left Hand",
    "city":"Longmont, CO",
    "link":'http://www.lefthandbrewing.com/',
    "img":'left.jpg'
  },
  {
    "name":"Maredsous",
    "city":"Belgium",
    "link":'http://www.maredsousbieres.be/',
    "img":'maredsous.jpg'
  },
  {
    "name":"Maritime Pacific",
    "city":"Seattle, WA",
    "link":'http://maritimebrewery.ypguides.net/',
    "img":'maritime.gif'
  },
  {
    "name":"Ninkasi",
    "city":"Eugene, OR",
    "link":'http://www.ninkasibrewing.com/',
    "img":'ninkasi.png'
  },
  {
    "name":"North Coast",
    "city":"Fort Bragg, CA",
    "link":'http://www.northcoastbrewing.com/',
    "img":'north.jpg'
  },
  {
    "name":"Old Speckled Hen",
    "city":"UK",
    "link":'http://www.oldspeckledhen.co.uk/',
    "img":'old.jpg'
  },
  {
    "name":"Ommegang",
    "city":"Cooperstown, NY",
    "link":'http://www.ommegang.com/',
    "img":'ommegang.png'
  },
  {
    "name":"Paulaner",
    "city":"Germany",
    "link":'http://www.paulaner.com/',
    "img":'paulaner.png'
  },
  {
    "name":"Pike",
    "city":"Seattle, WA",
    "link":'http://www.pikebrewing.com/',
    "img":'pike.gif'
  },
  {
    "name":"Radeberger",
    "city":"Germany",
    "link":'http://www.radeberger.de/index_en.html',
    "img":'radeberger.png'
  },
  {
    "name":"Rogue",
    "city":"Ashland, OR",
    "link":'http://www.rogue.com/',
    "img":'rogue.jpg'
  },
  {
    "name":"Roslyn",
    "city":"Roslyn, WA",
    "link":'http://www.roslynbrewery.com/',
    "img":'roslyn.gif'
  },
  {
    "name":"Schooner Exact",
    "city":"Seattle, WA",
    "link":'http://www.schoonerexact.com/',
    "img":'schooner.jpg'
  },
  {
    "name":"Scuttlebutt",
    "city":"Everett, WA",
    "link":'http://www.scuttlebuttbrewing.com/',
    "img":'scuttle.png'
  },
  {
    "name":"Sierra Nevada",
    "city":"Chico, CA",
    "link":'http://www.sierranevada.com/',
    "img":'sierra.jpg'
  },
  {
    "name":"Snoqualmie",
    "city":"Snoqualmie, WA",
    "link":'http://www.fallsbrew.com/',
    "img":'snoqualmie.jpg'
  },
  {
    "name":"Spaten",
    "city":"Germany",
    "link":'http://www.spatenbeer.com/',
    "img":'spaten.png'
  },
  {
    "name":"Speakeasy",
    "city":"San Francisco, CA",
    "link":'http://www.goodbeer.com/',
    "img":'speakeasy.png'
  },
  {
    "name":"Stone",
    "city":"Escondido, CA",
    "link":'http://www.stonebrew.com/',
    "img":'stone.png'
  },
  {
    "name":"Terminal Gravity",
    "city":"Enterprise, OR",
    "link":'http://www.terminalgravitybrewing.com/',
    "img":'terminal.png'
  },
  {
    "name":"Veltins",
    "city":"Germany",
    "link":'http://www.veltins.com/',
    "img":'veltins.png'
  },
  {
    "name":"Victory",
    "city":"Downington, PA",
    "link":'http://www.victorybeer.com/',
    "img":'victory.png'
  },
  {
    "name":"Walking Man",
    "city":"Stevenson, WA",
    "link":'http://www.walkingmanbeer.com/',
    "img":'walking.jpg'
  },
  {
    "name":"Warsteiner",
    "city":"Germany",
    "link":'http://www.warsteiner-usa.com/',
    "img":'warsteiner.jpg'
  },
  {
    "name":"Weihenstephan",
    "city":"Germany",
    "link":'http://www.brauerei-weihenstephan.de/index.php?page=home_2_1&',
    "img":'weihenstephan.png'
  },
  {
    "name":"Weltenburger Kloster",
    "city":"Germany",
    "link":'http://www.weltenburger.de/',
    "img":'weltenburger.jpg'
  },
  {
    "name":"Whistler",
    "city":"Whistler, BC",
    "link":'http://www.whistlerbeer.com/',
    "img":'whistler.jpg'
  },
  {
    "name":"Widmer",
    "city":"Portland, OR",
    "link":'http://www.widmer.com/',
    "img":'widmer.jpg'
  }
];
