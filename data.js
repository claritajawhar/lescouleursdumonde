// data.js

const countriesData = {
  egypt: {
    id: "egypt",
    name: "Égypte",
    cardImage: "https://i.natgeofe.com/k/109a4e08-5ebc-48a5-99ab-3fbfc1bbd611/Giza_Egypt_KIDS_0123_16x9.jpg",
    heroImage: "https://i.natgeofe.com/k/109a4e08-5ebc-48a5-99ab-3fbfc1bbd611/Giza_Egypt_KIDS_0123_16x9.jpg",
    intro:
      "La vie égyptienne est étroitement liée au Nil, aux rassemblements familiaux et aux célébrations qui tissent l’histoire ancienne dans les rituels quotidiens.",
    sections: [
      {
        smallTitle: "Moulid Celebrations",
        text: "A festival honoring saints with music, sweets and street parades. Bright tents and communal chanting fill neighborhoods.",
        image: "https://www.egypttoday.com/siteimages/Larg/24951.jpg",
      },
      {
        smallTitle: "Fêtes du Moulid",
        text: "Un festival honorant les saints avec musique, douceurs et défilés. Les quartiers s’emplissent de tentes colorées et de chants collectifs.",
        image: "https://images.dailynewsegypt.com/2018/09/henna-night2.jpg",
      },
      {
        smallTitle: "Symbolisme nubien des couleurs",
        text: "Les villages utilisent des façades peintes et des motifs audacieux reflétant l’environnement, l’identité et la célébration.",
        image: "https://www.egypttoursportal.com/images/2025/07/Population-of-Nubia-Egypt-Tours-Portal.jpg",
      },
      {
        smallTitle: "Culture du Koshari",
        text: "Un plat national mêlant riz, lentilles, pâtes et oignons frits, nappé d’une sauce tomate acidulée—symbole de la cuisine de rue pratique.",
        image: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Egyptian_food_Koshary.jpg",
      },
    ],
  },

  brazil: {
    id: "brazil",
    name: "Brésil",
    cardImage: "https://ifmst.org/wp-content/uploads/2025/02/KJ.jpg",
    heroImage: "https://ifmst.org/wp-content/uploads/2025/02/KJ.jpg",
    intro:
      "La culture brésilienne mélange influences autochtones, africaines et européennes, exprimées dans les festivals, les arts martiaux et la communauté.",
    sections: [
      {
        smallTitle: "Roda de capoeira",
        text: "Un cercle rassemblant rythme et autodéfense, où les mouvements suivent le dialogue des berimbaus.",
        image: "https://blog.speak.social/wp-content/uploads/2016/11/Cap-roda-NEEDS-REFERENCE.jpg",
      },
      {
        smallTitle: "Offrandes à Iemanjá",
        text: "Le 2 février, des fleurs sont offertes à l’esprit de la mer, flottant comme prières de protection et gratitude.",
        image: "https://static01.nyt.com/images/2023/01/01/multimedia/01brazil-sea-goddess-promo/01brazil-sea-goddess-jvmk-videoSixteenByNine3000.jpg?year=2023&h=1687&w=3000&s=42e63da8b983a77c8d0d1d8be2c6b8c64c61417f67827f470f3bd5ca66d27bda&k=ZQJBKqZ0VN&tw=1",
      },
      {
        smallTitle: "Communautés du Carnaval",
        text: "Les écoles de samba transforment les rues grâce à des mois de préparation : tambours, danse et costumes.",
        image: "https://media.worldnomads.com/travel-safety/brazil/carnivale-in-ipanema-rio-gettyimages-520278137.jpg",
      },
      {
        smallTitle: "Festa Junina",
        text: "Célébration rurale de juin avec fanions en papier, feux de joie et plats de maïs comme la pamonha.",
        image: "https://www.riotimesonline.com/wp-content/uploads/2017/06/Festa-Junina-photo-courtesy-of-Ministerio-do-Turismo.jpg",
      },
    ],
  },

  lebanon: {
    id: "lebanon",
    name: "Liban",
    cardImage: "images/lebanon-card.jpg",
    heroImage: "images/lebanon-hero.jpg",
    intro:
      "Les traditions libanaises reflètent une hospitalité généreuse, des racines méditerranéennes, des rituels montagnards et des tables partagées.",
    sections: [
      {
        smallTitle: "Buffet de mezzé",
        text: "Les longues tables commencent avec du houmous, du taboulé et du labné — les repas sont lents, partagés et les hôtes insistent pour que l’on mange davantage.",
        image: "images/lebanon-mezze.jpg",
      },
      {
        smallTitle: "Ligne de dabké",
        text: "Une chaîne de danse puissante avec des pas synchronisés menée par un improvisateur, exprimant unité et joie.",
        image: "images/lebanon-dabke.jpg",
      },
      {
        smallTitle: "Identité du cèdre",
        text: "Les cèdres symbolisent la résilience et l’histoire, piliers de l’imaginaire national.",
        image: "images/lebanon-cedars.jpg",
      },
      {
        smallTitle: "Marchés des khans",
        text: "Les khans villageois et urbains accueillaient autrefois les marchands itinérants et inspirent aujourd’hui l’artisanat et les récits commerciaux locaux.",
        image: "images/lebanon-khan.jpg",
      },
    ],
  },


  syria: {
    id: "syria",
    name: "Syrie",
    cardImage: "images/syria-card.jpg",
    heroImage: "images/syria-hero.jpg",
    intro: "La culture syrienne est ancrée dans ses villes anciennes, son hospitalité et ses traditions sucrées.",
    sections: [
      {
        smallTitle: "Café dans les cours",
        text: "Les maisons historiques rassemblent famille et invités dans des cours parfumées au jasmin autour d’un café arabe.",
        image: "images/syria-courtyard.jpg",
      },
      {
        smallTitle: "Art du baklava",
        text: "Les pâtisseries et maisons préparent des plateaux de baklava et de ma’amoul pour les fêtes et les invités.",
        image: "images/syria-baklava.jpg",
      },
      {
        smallTitle: "Patrimoine textile",
        text: "Le bois incrusté, la nacre et les textiles décorés reflètent des générations de savoir-faire.",
        image: "images/syria-textile.jpg",
      },
      {
        smallTitle: "Salutations au marché",
        text: "Les souks résonnent de marchandages et de conversations entre voisins.",
        image: "images/syria-market.jpg",
      },
    ],
  },

  china: {
    id: "china",
    name: "Chine",
    cardImage: "images/china-card.jpg",
    heroImage: "images/china-hero.jpg",
    intro:
      "La Chine équilibre rituel du thé, festivals de lanternes, fluidité de la calligraphie et respect familial des récoltes.",
    sections: [
      {
        smallTitle: "Fête du Printemps",
        text: "Les familles partagent des repas de retrouvailles, des raviolis symboliques et une décoration de lanternes rouges.",
        image: "images/china-spring.jpg",
      },
      {
        smallTitle: "Fête des lanternes",
        text: "Les lanternes en papier portent des énigmes, le rythme des pétards et des reflets nocturnes sur les rivières.",
        image: "images/china-lantern.jpg",
      },
      {
        smallTitle: "Art de la calligraphie",
        text: "La discipline du pinceau mêle rythme et geste, exposée dans les espaces calmes des maisons.",
        image: "images/china-calligraphy.jpg",
      },
      {
        smallTitle: "Temps du thé",
        text: "Les cérémonies vont des tasses de cuisine aux rituels plus formels avec versements élevés.",
        image: "images/china-tea.jpg",
      },
    ],
  },

  greece: {
    id: "greece",
    name: "Grèce",
    cardImage: "images/greece-card.jpg",
    heroImage: "images/greece-hero.jpg",
    intro:
      "La Grèce est façonnée par les horizons marins, l’harmonie bleu et blanc, les rituels aux bougies et les maisons ouvertes liées aux saints.",
    sections: [
      {
        smallTitle: "Fêtes de prénom",
        text: "Les maisons s’ouvrent aux voisins en offrant des douceurs et de petites attentions pour honorer le calendrier des saints.",
        image: "images/greece-name-day.jpg",
      },
      {
        smallTitle: "Bougies de Pâques",
        text: "La flamme de minuit se transmet de bougie en bougie, illuminant les ruelles et les tables familiales.",
        image: "images/greece-easter.jpg",
      },
      {
        smallTitle: "Cafés des îles",
        text: "Le café et les parties de backgammon se partagent face à la mer jusque tard dans la nuit.",
        image: "images/greece-cafe.jpg",
      },
      {
        smallTitle: "Équilibre bleu-blanc",
        text: "L’architecture rend hommage à la clarté de la mer, à l’espace et au jeu de la lumière.",
        image: "images/greece-bluewhite.jpg",
      },
    ],
  },

  india: {
    id: "india",
    name: "Inde",
    cardImage: "images/india-card.jpg",
    heroImage: "images/india-hero.jpg",
    intro:
      "Les traditions indiennes fleurissent à travers les festivals de couleurs, les routes d’épices, les dialogues de percussions et les chapitres de mariages qui durent plusieurs jours.",
    sections: [
      {
        smallTitle: "Lumières de Diwali",
        text: "Des lampes à huile, des motifs et des douceurs sont partagés entre voisins en visite.",
        image: "images/india-diwali.jpg",
      },
      {
        smallTitle: "Couleurs de Holi",
        text: "Une saison de poudres colorées symbolisant le renouveau et un joyeux chaos.",
        image: "images/india-holi.jpg",
      },
      {
        smallTitle: "Chapitre des mariages",
        text: "Des cérémonies sur plusieurs jours où henné, guirlandes et plats partagés relient les générations.",
        image: "images/india-wedding.jpg",
      },
      {
        smallTitle: "Danse classique",
        text: "Des formes de danse centrées sur le geste, comme le Kathak, racontant des histoires par les yeux, les mains et les rythmes de tabla.",
        image: "images/india-dance.jpg",
      },
    ],
  },

  japan: {
    id: "japan",
    name: "Japon",
    cardImage: "images/japan-card.jpg",
    heroImage: "images/japan-hero.jpg",
    intro:
      "Le Japon mêle cérémonies contemplatives, économie des sanctuaires, saisons photographiées et innovation dans l’usage de l’espace.",
    sections: [
      {
        smallTitle: "Cérémonie du thé",
        text: "Des gestes intentionnels invitent les invités à remarquer les textures et les sons.",
        image: "images/japan-tea.jpg",
      },
      {
        smallTitle: "Hanami",
        text: "Les pique-niques sous les cerisiers en fleurs marquent l’impermanence et la beauté.",
        image: "images/japan-hanami.jpg",
      },
      {
        smallTitle: "Matsuri",
        text: "Des festivals de quartier avec sanctuaires portés, tambours et yukatas.",
        image: "images/japan-matsuri.jpg",
      },
      {
        smallTitle: "Minimalisme artisanal",
        text: "La laque, l’ikebana et la poterie reflètent une discipline calme et une précision de l’espace.",
        image: "images/japan-craft.jpg",
      },
    ],
  },

  morocco: {
    id: "morocco",
    name: "Maroc",
    cardImage: "images/morocco-card.jpg",
    heroImage: "images/morocco-hero.jpg",
    intro:
      "La culture marocaine mêle routes du désert, art du zellige, soirées d’encens et étiquette du thé servi.",
    sections: [
      {
        smallTitle: "Rituel du thé à la menthe",
        text: "Le thé à la menthe est versé de haut pour créer une mousse — symbole d’une hospitalité chaleureuse et sans hâte.",
        image: "images/morocco-tea.jpg",
      },
      {
        smallTitle: "Design zellige",
        text: "Des carreaux géométriques taillés à la main forment des mosaïques précises dans les riads et bâtiments publics.",
        image: "images/morocco-zellige.jpg",
      },
      {
        smallTitle: "Rythme des souks",
        text: "Les anciennes médinas abritent cuirs, épices et lanternes où résonnent marchandage et salutations.",
        image: "images/morocco-souk.jpg",
      },
      {
        smallTitle: "Oud et bakhour",
        text: "Les soirées s’ouvrent souvent avec du parfum d’oud et de l’encens brûlé, marquant une ambiance de bienvenue.",
        image: "images/morocco-oud.jpg",
      },
    ],
  },

  mexico: {
    id: "mexico",
    name: "Mexique",
    cardImage: "images/mexico-card.jpg",
    heroImage: "images/mexico-hero.jpg",
    intro:
      "Le Mexique honore les ancêtres avec des couleurs, des aliments à base de maïs, des places publiques et des traditions de satire régionale.",
    sections: [
      {
        smallTitle: "Día de Muertos",
        text: "Les familles construisent des autels colorés avec des fleurs de souci et des crânes en sucre pour honorer et se rappeler les ancêtres avec chaleur.",
        image: "images/mexico-muertos.jpg",
      },
      {
        smallTitle: "Nuits de mariachi",
        text: "Les soirées résonnent de trompettes, de cordes et de concerts sur les places, mêlant fierté et récits de chagrin.",
        image: "images/mexico-mariachi.jpg",
      },
      {
        smallTitle: "Places-salons",
        text: "Les places publiques accueillent familles, nourriture de rue, musique et salutations qui font tomber les barrières.",
        image: "images/mexico-plaza.jpg",
      },
      {
        smallTitle: "Art de la masa",
        text: "La pâte de maïs est moulue à la main pour les tortillas et tamales — base des repas rituels.",
        image: "images/mexico-masa.jpg",
      },
    ],
  },

  france: {
    id: "france",
    name: "France",
    cardImage: "images/france-card.jpg",
    heroImage: "images/france-hero.jpg",
    intro:
      "La France mêle observation en terrasse, repas prolongés, patrimoine du pain et places musicales.",
    sections: [
      {
        smallTitle: "Terrasses de café",
        text: "Les terrasses sont des pauses rituelles pour lire, travailler ou observer le flux de la rue.",
        image: "images/france-cafe.jpg",
      },
      {
        smallTitle: "Marchés régionaux",
        text: "Les marchés hebdomadaires mettent en avant fromages, pains et produits de saison avec des échanges directs avec les producteurs.",
        image: "images/france-market.jpg",
      },
      {
        smallTitle: "Patrimoine du pain",
        text: "Les boulangeries entretiennent des traditions au levain avec des files du matin et des baguettes partagées à table.",
        image: "images/france-bread.jpg",
      },
      {
        smallTitle: "Fête de la Musique",
        text: "En juin, les rues se remplissent de concerts en plein air où les passants s’arrêtent pour danser.",
        image: "images/france-music.jpg",
      },
    ],
  },

  turkey: {
    id: "turkey",
    name: "Turquie",
    cardImage: "images/turkey-card.jpg",
    heroImage: "images/turkey-hero.jpg",
    intro:
      "La Turquie relie les continents par l’étiquette du thé, les silhouettes côtières et l’artisanat intergénérationnel.",
    sections: [
      {
        smallTitle: "Verres de thé",
        text: "Les verres de thé en forme de tulipe marquent des moments de pause dans les marchés et les maisons.",
        image: "images/turkey-tea.jpg",
      },
      {
        smallTitle: "Bazars",
        text: "Les marchés résonnent d’épices, de cuivre et d’histoires de marchandage.",
        image: "images/turkey-bazaar.jpg",
      },
      {
        smallTitle: "Rythme du Bosphore",
        text: "Ferrys, mosquées et pêcheurs partagent la ligne d’horizon et la mer.",
        image: "images/turkey-bosphorus.jpg",
      },
      {
        smallTitle: "Ebru",
        text: "L’art du marbrage sur papier fait flotter des motifs qui symbolisent le mouvement et le flux.",
        image: "images/turkey-ebru.jpg",
      },
    ],
  },

  italy: {
    id: "italy",
    name: "Italie",
    cardImage: "images/italy-card.jpg",
    heroImage: "images/italy-hero.jpg",
    intro:
      "La tradition italienne célèbre les cuisines régionales, l’artisanat et les places ouvertes.",
    sections: [
      {
        smallTitle: "Passeggiata",
        text: "Les promenades du soir sur les places relient familles et amis.",
        image: "images/italy-passeggiata.jpg",
      },
      {
        smallTitle: "Repas lents",
        text: "Les repas se déroulent sur plusieurs plats avec conversation et café.",
        image: "images/italy-meal.jpg",
      },
      {
        smallTitle: "Ateliers artisanaux",
        text: "Cuir, verre et céramique sont façonnés à la main dans de petits ateliers de ville.",
        image: "images/italy-craft.jpg",
      },
      {
        smallTitle: "Processions de fêtes",
        text: "Les fêtes locales remplissent les rues de musique et de défilés.",
        image: "images/italy-festival.jpg",
      },
    ],
  },

  spain: {
    id: "spain",
    name: "Espagne",
    cardImage: "images/spain-card.jpg",
    heroImage: "images/spain-hero.jpg",
    intro:
      "La culture espagnole pulse à travers des fêtes flamboyantes, un chaos communautaire, un art profond et une satire artisanale.",
    sections: [
      {
        smallTitle: "La Tomatina",
        text: "Née en 1945, Buñol se transforme en bataille de tomates — plus de 120 tonnes sont lancées dans la joie avant un grand nettoyage communautaire.",
        image: "images/spain-tomatina.jpg",
      },
      {
        smallTitle: "Art du flamenco",
        text: "Une danse reconnue par l’UNESCO, née en Andalousie, qui mêle jeu de pieds, guitare et expression émotionnelle brute.",
        image: "images/spain-flamenco.jpg",
      },
      {
        smallTitle: "San Fermín",
        text: "Les tenues blanches et rouges marquent la fête du saint patron de Pampelune, avec la course de taureaux électrisante vers l’arène.",
        image: "images/spain-sanfermin.jpg",
      },
      {
        smallTitle: "Las Fallas",
        text: "De grands monuments satiriques sont brûlés chaque mois de mars, symbolisant le lâcher-prise et le renouveau à travers la rébellion et l’artisanat.",
        image: "images/spain-fallas.jpg",
      },
    ],
  },

  south_korea: {
    id: "south_korea",
    name: "Corée du Sud",
    cardImage: "images/south-korea-card.jpg",
    heroImage: "images/south-korea-hero.jpg",
    intro:
      "La Corée du Sud mêle palais anciens, technologie et cuisine de rue.",
    sections: [
      {
        smallTitle: "Chuseok",
        text: "Fête des récoltes pour honorer les ancêtres avec nourriture et chansons.",
        image: "images/south-korea-chuseok.jpg",
      },
      {
        smallTitle: "Fierté du hanbok",
        text: "Le vêtement traditionnel est porté lors des fêtes et des événements spéciaux.",
        image: "images/south-korea-hanbok.jpg",
      },
      {
        smallTitle: "Street food",
        text: "Les marchés servent tteokbokki, kimbap et encas frits.",
        image: "images/south-korea-food.jpg",
      },
      {
        smallTitle: "Visites de palais",
        text: "Familles et amis se promènent dans les palais le week-end.",
        image: "images/south-korea-palace.jpg",
      },
    ],
  },

  saudi_arabia: {
    id: "saudi_arabia",
    name: "Arabie saoudite",
    cardImage: "images/saudi-arabia-card.jpg",
    heroImage: "images/saudi-arabia-hero.jpg",
    intro:
      "La culture saoudienne est façonnée par l’hospitalité du désert, le café et la poésie.",
    sections: [
      {
        smallTitle: "Rencontres au majlis",
        text: "Des pièces tapissées accueillent thé, dattes et poésie pour les invités.",
        image: "images/saudi-arabia-majlis.jpg",
      },
      {
        smallTitle: "Rituel du café",
        text: "Le café à la cardamome est servi aux visiteurs avec une étiquette de la main droite.",
        image: "images/saudi-arabia-coffee.jpg",
      },
      {
        smallTitle: "Courses de chameaux",
        text: "Les festivals du désert proposent des courses de chameaux et de la musique folklorique.",
        image: "images/saudi-arabia-camel.jpg",
      },
      {
        smallTitle: "Festins de l’Aïd",
        text: "Les tables familiales débordent de riz, d’agneau et de douceurs pour l’Aïd.",
        image: "images/saudi-arabia-eid.jpg",
      },
    ],
  },

  kenya: {
    id: "kenya",
    name: "Kenya",
    cardImage: "images/kenya-card.jpg",
    heroImage: "images/kenya-hero.jpg",
    intro:
      "Kenyan life is shaped by markets, music, and tea breaks.",
    sections: [
      {
        smallTitle: "Matatu Art",
        text: "Colorful minibuses pulse with music and hand-painted designs.",
        image: "images/kenya-matatu.jpg",
      },
      {
        smallTitle: "Chai Time",
        text: "Sweet milky tea is shared at home and work.",
        image: "images/kenya-chai.jpg",
      },
      {
        smallTitle: "Market Days",
        text: "Open-air markets bustle with produce, crafts, and greetings.",
        image: "images/kenya-market.jpg",
      },
      {
        smallTitle: "Storytelling",
        text: "Evenings bring songs and tales around village fires.",
        image: "images/kenya-story.jpg",
      },
    ],
  },

  south_africa: {
    id: "south_africa",
    name: "South Africa",
    cardImage: "images/south-africa-card.jpg",
    heroImage: "images/south-africa-hero.jpg",
    intro:
      "South Africa’s culture is a blend of language, music, and outdoor gatherings.",
    sections: [
      {
        smallTitle: "Braai",
        text: "Barbecue tradition for friends and family in gardens or parks.",
        image: "images/south-africa-braai.jpg",
      },
      {
        smallTitle: "Gumboot Dance",
        text: "Mining history inspires energetic boot-stomping dance.",
        image: "images/south-africa-gumboot.jpg",
      },
      {
        smallTitle: "Township Jazz",
        text: "Music clubs and street bands play late into the night.",
        image: "images/south-africa-jazz.jpg",
      },
      {
        smallTitle: "Heritage Day",
        text: "September holiday for celebrating cultural diversity.",
        image: "images/south-africa-heritage.jpg",
      },
    ],
  },

  thailand: {
    id: "thailand",
    name: "Thailand",
    cardImage: "images/thailand-card.jpg",
    heroImage: "images/thailand-hero.jpg",
    intro:
      "Thailand is known for temple festivals, street food, and water rituals.",
    sections: [
      {
        smallTitle: "Songkran",
        text: "New Year’s water festival with playful street splashing.",
        image: "images/thailand-songkran.jpg",
      },
      {
        smallTitle: "Floating Markets",
        text: "Vendors sell fruit and snacks from boats on canals.",
        image: "images/thailand-market.jpg",
      },
      {
        smallTitle: "Muay Thai",
        text: "Traditional boxing matches draw crowds to local arenas.",
        image: "images/thailand-muaythai.jpg",
      },
      {
        smallTitle: "Temple Offerings",
        text: "Flowers and incense are offered at Buddhist temples.",
        image: "images/thailand-temple.jpg",
      },
    ],
  },

  united_arab_emirates: {
    id: "united_arab_emirates",
    name: "United Arab Emirates",
    cardImage: "images/uae-card.jpg",
    heroImage: "images/uae-hero.jpg",
    intro:
      "UAE culture fuses desert roots, pearl diving, and skyscraper innovation.",
    sections: [
      {
        smallTitle: "Falconry",
        text: "Falconry is a prized heritage sport and family pastime.",
        image: "images/uae-falcon.jpg",
      },
      {
        smallTitle: "Majlis",
        text: "Cushioned rooms host tea, dates, and conversation.",
        image: "images/uae-majlis.jpg",
      },
      {
        smallTitle: "Pearl Diving",
        text: "Historic pearl diving shaped coastal communities.",
        image: "images/uae-pearl.jpg",
      },
      {
        smallTitle: "National Day",
        text: "December celebrations include fireworks and parades.",
        image: "images/uae-national.jpg",
      },
    ],
  },

  ethiopia: {
    id: "ethiopia",
    name: "Ethiopia",
    cardImage: "images/ethiopia-card.jpg",
    heroImage: "images/ethiopia-hero.jpg",
    intro:
      "Ethiopia’s culture is built on coffee, markets, and ancient festivals.",
    sections: [
      {
        smallTitle: "Coffee Ceremony",
        text: "Green beans are roasted, ground, and brewed for guests.",
        image: "images/ethiopia-coffee.jpg",
      },
      {
        smallTitle: "Timkat",
        text: "Epiphany festival features processions and river baptisms.",
        image: "images/ethiopia-timkat.jpg",
      },
      {
        smallTitle: "Injera Meals",
        text: "Sourdough flatbread is shared from large communal platters.",
        image: "images/ethiopia-injera.jpg",
      },
      {
        smallTitle: "Market Trading",
        text: "Open-air markets are central to daily life.",
        image: "images/ethiopia-market.jpg",
      },
    ],
  },

  vietnam: {
    id: "vietnam",
    name: "Vietnam",
    cardImage: "images/vietnam-card.jpg",
    heroImage: "images/vietnam-hero.jpg",
    intro:
      "Vietnam’s traditions center on street food, ancestor altars, and seasonal festivals.",
    sections: [
      {
        smallTitle: "Tet",
        text: "Lunar New Year marked by home altars and red envelopes.",
        image: "images/vietnam-tet.jpg",
      },
      {
        smallTitle: "Pho Breakfast",
        text: "Morning soup shared at street stalls and markets.",
        image: "images/vietnam-pho.jpg",
      },
      {
        smallTitle: "Water Puppets",
        text: "Puppet theater tells folk tales over water stages.",
        image: "images/vietnam-puppet.jpg",
      },
      {
        smallTitle: "Cyclo Rides",
        text: "Pedicab rides offer city views and local stories.",
        image: "images/vietnam-cyclo.jpg",
      },
    ],
  },

  united_kingdom: {
    id: "united_kingdom",
    name: "United Kingdom",
    cardImage: "images/uk-card.jpg",
    heroImage: "images/uk-hero.jpg",
    intro:
      "UK culture is a blend of tea, humor, and public parks.",
    sections: [
      {
        smallTitle: "Afternoon Tea",
        text: "Tea with scones and sandwiches in homes and cafés.",
        image: "images/uk-tea.jpg",
      },
      {
        smallTitle: "Pub Quiz",
        text: "Weekly trivia nights at local pubs.",
        image: "images/uk-pub.jpg",
      },
      {
        smallTitle: "Carnival",
        text: "Notting Hill Carnival celebrates Caribbean heritage.",
        image: "images/uk-carnival.jpg",
      },
      {
        smallTitle: "Park Picnics",
        text: "Parks host picnics and music in summer.",
        image: "images/uk-park.jpg",
      },
    ],
  },

  indonesia: {
    id: "indonesia",
    name: "Indonesia",
    cardImage: "images/indonesia-card.jpg",
    heroImage: "images/indonesia-hero.jpg",
    intro:
      "Indonesia mixes island rituals, batik art, and volcanic landscapes.",
    sections: [
      {
        smallTitle: "Wayang Kulit",
        text: "Shadow puppet plays tell epic stories.",
        image: "images/indonesia-wayang.jpg",
      },
      {
        smallTitle: "Batik Craft",
        text: "Wax-resist dyed fabrics express regional identity.",
        image: "images/indonesia-batik.jpg",
      },
      {
        smallTitle: "Rice Harvest",
        text: "Communal harvests and ceremonies mark rice planting.",
        image: "images/indonesia-rice.jpg",
      },
      {
        smallTitle: "Temple Offerings",
        text: "Daily flower offerings decorate homes and shrines.",
        image: "images/indonesia-offering.jpg",
      },
    ],
  },

  peru: {
    id: "peru",
    name: "Peru",
    cardImage: "images/peru-card.jpg",
    heroImage: "images/peru-hero.jpg",
    intro:
      "Peru’s traditions include Andean music, mountain festivals, and potato cuisine.",
    sections: [
      {
        smallTitle: "Inti Raymi",
        text: "June sun festival with Inca-inspired processions.",
        image: "images/peru-inti.jpg",
      },
      {
        smallTitle: "Ceviche",
        text: "Marinated fish dish eaten in coastal regions.",
        image: "images/peru-ceviche.jpg",
      },
      {
        smallTitle: "Weaving",
        text: "Colorful textiles are woven by hand in mountain villages.",
        image: "images/peru-weaving.jpg",
      },
      {
        smallTitle: "Alpaca Herding",
        text: "Rural families raise alpacas for wool and meat.",
        image: "images/peru-alpaca.jpg",
      },
    ],
  },

  argentina: {
    id: "argentina",
    name: "Argentina",
    cardImage: "images/argentina-card.jpg",
    heroImage: "images/argentina-hero.jpg",
    intro:
      "Argentina’s culture is defined by tango, mate, and street art.",
    sections: [
      {
        smallTitle: "Tango",
        text: "Couples dance tango in city plazas and milongas.",
        image: "images/argentina-tango.jpg",
      },
      {
        smallTitle: "Mate Sharing",
        text: "Herbal tea is shared among friends from a common gourd.",
        image: "images/argentina-mate.jpg",
      },
      {
        smallTitle: "Asado",
        text: "Barbecue gatherings are a weekend ritual.",
        image: "images/argentina-asado.jpg",
      },
      {
        smallTitle: "Street Murals",
        text: "Cities are decorated with colorful murals and graffiti.",
        image: "images/argentina-mural.jpg",
      },
    ],
  },

  australia: {
    id: "australia",
    name: "Australia",
    cardImage: "images/australia-card.jpg",
    heroImage: "images/australia-hero.jpg",
    intro:
      "Australian culture values outdoor life, surf, and multicultural festivals.",
    sections: [
      {
        smallTitle: "Barbie",
        text: "Outdoor barbecues are a favorite social event.",
        image: "images/australia-bbq.jpg",
      },
      {
        smallTitle: "Surf Culture",
        text: "Coastal towns gather at beaches for surfing and picnics.",
        image: "images/australia-surf.jpg",
      },
      {
        smallTitle: "Bushwalks",
        text: "Nature walks and camping trips are common getaways.",
        image: "images/australia-bush.jpg",
      },
      {
        smallTitle: "Festival Season",
        text: "Cities host multicultural food and music festivals.",
        image: "images/australia-festival.jpg",
      },
    ],
  },

  nepal: {
    id: "nepal",
    name: "Nepal",
    cardImage: "images/nepal-card.jpg",
    heroImage: "images/nepal-hero.jpg",
    intro:
      "Nepal’s culture is shaped by mountain rituals and vibrant festivals.",
    sections: [
      {
        smallTitle: "Dashain",
        text: "Longest festival with family gatherings and kite flying.",
        image: "images/nepal-dashain.jpg",
      },
      {
        smallTitle: "Prayer Flags",
        text: "Colorful flags flutter on rooftops and trails.",
        image: "images/nepal-flags.jpg",
      },
      {
        smallTitle: "Dal Bhat",
        text: "Rice and lentil meals are daily staples.",
        image: "images/nepal-dal.jpg",
      },
      {
        smallTitle: "Everest Treks",
        text: "Trekking is both pilgrimage and adventure.",
        image: "images/nepal-trek.jpg",
      },
    ],
  },

  russia: {
    id: "russia",
    name: "Russia",
    cardImage: "images/russia-card.jpg",
    heroImage: "images/russia-hero.jpg",
    intro:
      "Russian culture values hospitality, literature, and winter celebrations.",
    sections: [
      {
        smallTitle: "Samovar Tea",
        text: "Tea is brewed in ornate samovars for guests.",
        image: "images/russia-tea.jpg",
      },
      {
        smallTitle: "Maslenitsa",
        text: "Pancake week marks the end of winter with bonfires and games.",
        image: "images/russia-maslenitsa.jpg",
      },
      {
        smallTitle: "Dacha Retreats",
        text: "Summer cottages host family weekends.",
        image: "images/russia-dacha.jpg",
      },
      {
        smallTitle: "Banya",
        text: "Steam baths are a social and health ritual.",
        image: "images/russia-banya.jpg",
      },
    ],
  },

  philippines: {
    id: "philippines",
    name: "Philippines",
    cardImage: "images/philippines-card.jpg",
    heroImage: "images/philippines-hero.jpg",
    intro:
      "Philippines culture is festive, musical, and rooted in bayanihan (community spirit).",
    sections: [
      {
        smallTitle: "Fiesta",
        text: "Town fiestas feature parades, food, and music.",
        image: "images/philippines-fiesta.jpg",
      },
      {
        smallTitle: "Jeepney Rides",
        text: "Colorful jeepneys are a symbol of daily transport.",
        image: "images/philippines-jeepney.jpg",
      },
      {
        smallTitle: "Karaoke",
        text: "Singing with friends is a favorite pastime.",
        image: "images/philippines-karaoke.jpg",
      },
      {
        smallTitle: "Bayanihan",
        text: "Neighbors help each other move houses and solve problems.",
        image: "images/philippines-bayanihan.jpg",
      },
    ],
  },
};

// Order for homepage + navigation (30 countries)
const countriesOrder = [
  "egypt",
  "brazil",
  "lebanon",
  "syria",
  "china",
  "greece",
  "india",
  "japan",
  "morocco",
  "mexico",
  "france",
  "turkey",
  "italy",
  "spain",
  "south_korea",
  "saudi_arabia",
  "kenya",
  "south_africa",
  "thailand",
  "united_arab_emirates",
  "ethiopia",
  "vietnam",
  "united_kingdom",
  "indonesia",
  "peru",
  "argentina",
  "australia",
  "nepal",
  "russia",
  "philippines",
];

const countriesList = countriesOrder
  .map((id) => countriesData[id])
  .filter(Boolean);



// ---- helpers for homepage + country pages ----

// make sure the object is available on window
window.countriesData = countriesData;

// order of the 30 countries you want to show
window.countriesOrder = [
  "egypt",
  "brazil",
  "lebanon",
  "syria",
  "china",
  "greece",
  "india",
  "japan",
  "morocco",
  "mexico",
  "france",
  "turkey",
  "italy",
  "spain",
  "south_korea",
  "saudi_arabia",
  "kenya",
  "south_africa",
  "thailand",
  "united_arab_emirates",
  "ethiopia",
  "vietnam",
  "united_kingdom",
  "indonesia",
  "peru",
  "argentina",
  "australia",
  "nepal",
  "russia",
  "philippines"
];

// build a clean ordered array (ignores helper keys like lebanon_card_page)
window.countriesList = window.countriesOrder
  .map((id) => window.countriesData[id])
  .filter(Boolean);