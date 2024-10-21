const NAICS = [
  {
    code: 111120,
    title: 'Oilseed (except Soybean) Farming',
    description:
      'This industry comprises establishments primarily engaged in growing fibrous oilseed producing plants and/or producing oilseed seeds, such as sunflower, safflower, flax, rape, canola, and sesame.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 111130,
    title: 'Dry Pea and Bean Farming',
    description:
      'This industry comprises establishments primarily engaged in growing dry peas, beans, and/or lentils.\n\nCross-References.',
  },
  {
    code: 111140,
    title: 'Wheat Farming',
    description:
      'This industry comprises establishments primarily engaged in growing wheat and/or producing wheat seeds.\n\nCross-References.',
  },
  {
    code: 111150,
    title: 'Corn Farming',
    description:
      'This industry comprises establishments primarily engaged in growing corn (except sweet corn) and/or producing corn seeds.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 111160,
    title: 'Rice Farming',
    description:
      'This industry comprises establishments primarily engaged in growing rice (except wild rice) and/or producing rice seeds.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 111191,
    title: 'Oilseed and Grain Combination Farming',
    description:
      "This U.S. industry comprises establishments engaged in growing a combination of oilseed(s) and grain(s) with no one oilseed (or family of oilseeds) or grain (or family of grains) accounting for one-half of the establishment's agricultural production (value of crops for market).  These establishments may produce oilseed(s) and grain(s) seeds and/or grow oilseed(s) and grain(s).\n\nCross-References.",
  },
  {
    code: 111199,
    title: 'All Other Grain Farming',
    description:
      'This U.S. industry comprises establishments primarily engaged in growing grains and/or producing grain(s) seeds (except wheat, corn, rice, and oilseed(s) and grain(s) combinations).\n\nIllustrative Examples:\n\nBarley farming\nSorghum farming\nOat farming\nWild rice farming\nRye farming\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 111211,
    title: 'Potato Farming',
    description:
      'This U.S. industry comprises establishments primarily engaged in growing potatoes and/or producing seed potatoes.\n\nCross-References.',
  },
  {
    code: 111219,
    title: 'Other Vegetable (except Potato) and Melon Farming',
    description:
      'This U.S. industry comprises establishments primarily engaged in one or more of the following: (1) growing melons and/or vegetables (except potatoes; dry peas; dry beans; field, silage, or seed corn; and sugar beets); (2) producing vegetable and/or melon seeds; and (3) growing vegetable and/or melon bedding plants.\n\nIllustrative Examples:\n\nCarrot farming\nSquash farming\nGreen bean farming\nTomato farming\nWatermelon farming \nMelon farming (e.g., cantaloupe, casaba, honeydew, watermelon)\nVegetable (except potato) farming\nPepper farming (e.g., bell, chili, green, red, sweet peppers)\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 111310,
    title: 'Orange Groves',
    description: 'This industry comprises establishments primarily engaged in growing oranges.',
  },
  {
    code: 111320,
    title: 'Citrus (except Orange) Groves',
    description:
      'This industry comprises establishments primarily engaged in growing citrus fruits (except oranges).\n\nIllustrative Examples:\n\nCitrus groves (except oranges)\nMandarin groves\nGrapefruit groves\t\nTangelo groves\nLemon groves\nTangerine groves\n\n\nCross-References.',
  },
  {
    code: 111331,
    title: 'Apple Orchards',
    description:
      'This U.S. industry comprises establishments primarily engaged in growing apples.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 111332,
    title: 'Grape Vineyards',
    description:
      'This U.S. industry comprises establishments primarily engaged in growing grapes and/or growing grapes to sun dry into raisins.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 111333,
    title: 'Strawberry Farming',
    description:
      'This U.S. industry comprises establishments primarily engaged in growing strawberries.\n\nCross-References.',
  },
  {
    code: 111334,
    title: 'Berry (except Strawberry) Farming',
    description:
      'This U.S. industry comprises establishments primarily engaged in growing berries.\n\nIllustrative Examples:\n\nBerry (except strawberries) farming\t\nCranberry farming\nBlackberry farming\nCurrant farming\nBlueberry farming\nRaspberry farming\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 111335,
    title: 'Tree Nut Farming',
    description:
      'This U.S. industry comprises establishments primarily engaged in growing tree nuts.\n\nIllustrative Examples:\n\nAlmond farming\nPistachio farming\nFilbert farming\nTree nut farming\nMacadamia farming\nWalnut farming\nPecan farming\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 111336,
    title: 'Fruit and Tree Nut Combination Farming',
    description:
      "This U.S. industry comprises establishments primarily engaged in growing a combination of fruit(s) and tree nut(s) with no one fruit (or family of fruit) or family of tree nuts accounting for one-half of the establishment's agricultural production (i.e., value of crops for market).\n\nCross-References.",
  },
  {
    code: 111339,
    title: 'Other Noncitrus Fruit Farming',
    description:
      'This U.S. industry comprises establishments primarily engaged in growing noncitrus fruits (except apples, grapes, berries, and fruit(s) and tree nut(s) combinations).\n\nIllustrative Examples:\n\nApricot farming\nFig farming\nBanana farming\nNoncitrus fruit farming\nCherry farming\nPeach farming\nCoffee farming\nPineapple farming\nDate farming\nPrune farming\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 111411,
    title: 'Mushroom Production',
    description:
      'This U.S. industry comprises establishments primarily engaged in growing mushrooms under cover in mines underground, or in other controlled environments.\n',
  },
  {
    code: 111419,
    title: 'Other Food Crops Grown Under Cover',
    description:
      'This U.S. industry comprises establishments primarily engaged in growing food crops (except mushrooms) under glass or protective cover.\n\nIllustrative Examples:\n\nAlfalfa sprout farming, grown under cover\nMelon farming, grown under cover\nVegetable farming, grown under cover\nHydroponic crop farming\nFruit farming, grown under cover\n\n\nCross-References.',
  },
  {
    code: 111421,
    title: 'Nursery and Tree Production',
    description:
      'This U.S. industry comprises establishments primarily engaged in (1) growing nursery products, nursery stock, shrubbery, bulbs, fruit stock, sod, and so forth, under cover or in open fields and/or (2) growing short rotation woody trees with a growth and harvest cycle of 10 years or less for pulp or tree stock.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 111422,
    title: 'Floriculture Production',
    description:
      'This U.S. industry comprises establishments primarily engaged in growing and/or producing floriculture products (e.g., cut flowers and roses, cut cultivated greens, potted flowering and foliage plants, and flower seeds) under cover and in open fields.\n\nCross-References.',
  },
  {
    code: 111910,
    title: 'Tobacco Farming',
    description: 'This industry comprises establishments primarily engaged in growing tobacco.',
  },
  {
    code: 111920,
    title: 'Cotton Farming',
    description:
      'This industry comprises establishments primarily engaged in growing cotton.\n\nCross-References.',
  },
  {
    code: 111930,
    title: 'Sugarcane Farming',
    description: 'This industry comprises establishments primarily engaged in growing sugarcane.',
  },
  {
    code: 111940,
    title: 'Hay Farming',
    description:
      'This industry comprises establishments primarily engaged in growing hay, alfalfa, clover, and/or mixed hay.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 111991,
    title: 'Sugar Beet Farming',
    description:
      'This U.S. industry comprises establishments primarily engaged in growing sugar beets.\n\nCross-References.',
  },
  {
    code: 111992,
    title: 'Peanut Farming',
    description:
      'This U.S. industry comprises establishments primarily engaged in growing peanuts.',
  },
  {
    code: 111998,
    title: 'All Other Miscellaneous Crop Farming',
    description:
      "This U.S. industry comprises establishments primarily engaged in one of the following: (1) growing crops (except oilseeds and/or grains; vegetables and/or melons; fruits and/or tree nuts; greenhouse, nursery, and/or floriculture products; tobacco; cotton; sugarcane; hay; sugar beets; or peanuts); (2) growing a combination of crops (except a combination of oilseed(s) and grain(s); and a combination of fruit(s) and tree nut(s)) with no one crop or family of crops accounting for one-half of the establishment's agricultural production (i.e., value of crops for market); or (3) gathering tea or maple sap.\n\nIllustrative Examples:\n\nAgave farming\nMint farming\nGeneral combination crop farming (except oilseed and grain; vegetables and melons; fruit and tree nut combinations)\nHay seed farming\nGrass seed farming\nHop farming\nSpice farming\n\n\nCross-References. Establishments primarily engaged in--",
  },
  {
    code: 112111,
    title: 'Beef Cattle Ranching and Farming',
    description:
      'This U.S. industry comprises establishments primarily engaged in raising cattle (including cattle for dairy herd replacements).\n\nCross-References.',
  },
  {
    code: 112112,
    title: 'Cattle Feedlots',
    description:
      'This U.S. industry comprises establishments primarily engaged in feeding cattle for fattening.\n\nCross-References.',
  },
  {
    code: 112120,
    title: 'Dairy Cattle and Milk Production',
    description:
      'This industry comprises establishments primarily engaged in milking dairy cattle.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 112130,
    title: 'Dual-Purpose Cattle Ranching and Farming',
    description:
      'This industry comprises establishments primarily engaged in raising cattle for both milking and meat production.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 112210,
    title: 'Hog and Pig Farming',
    description:
      'This industry comprises establishments primarily engaged in raising hogs and pigs.  These establishments may include farming activities, such as breeding, farrowing, and the raising of weanling pigs, feeder pigs, or market size hogs.\n\nCross-References.',
  },
  {
    code: 112310,
    title: 'Chicken Egg Production',
    description:
      'This industry comprises establishments primarily engaged in raising chickens for egg production.  The eggs produced may be for use as table eggs or hatching eggs.\n\nCross-References.',
  },
  {
    code: 112320,
    title: 'Broilers and Other Meat Type Chicken Production',
    description:
      'This industry comprises establishments primarily engaged in raising broilers, fryers, roasters, and other meat type chickens.\n\nCross-References.',
  },
  {
    code: 112330,
    title: 'Turkey Production',
    description:
      'This industry comprises establishments primarily engaged in raising turkeys for meat or egg production.',
  },
  {
    code: 112340,
    title: 'Poultry Hatcheries',
    description:
      'This industry comprises establishments primarily engaged in hatching poultry of any kind.',
  },
  {
    code: 112390,
    title: 'Other Poultry Production',
    description:
      'This industry comprises establishments primarily engaged in raising poultry (except chickens for meat or egg production and turkeys).\n\nIllustrative Examples:\n\nDuck production\nOstrich production\nEmu production\nPheasant production\nGeese production\nQuail production\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 112410,
    title: 'Sheep Farming',
    description:
      'This industry comprises establishments primarily engaged in raising sheep and lambs, or feeding lambs for fattening.  The sheep or lambs may be raised for sale or wool production.\n\nCross-References.',
  },
  {
    code: 112420,
    title: 'Goat Farming',
    description: 'This industry comprises establishments primarily engaged in raising goats.',
  },
  {
    code: 112511,
    title: 'Finfish Farming and Fish Hatcheries',
    description:
      'This U.S. industry comprises establishments primarily engaged in (1) farm raising finfish (e.g., catfish, trout, goldfish, tropical fish, minnows) and/or (2) hatching fish of any kind.\n\nCross-References.',
  },
  {
    code: 112512,
    title: 'Shellfish Farming',
    description:
      'This U.S. industry comprises establishments primarily engaged in farm raising shellfish (e.g., crayfish, shrimp, oysters, clams, mollusks).\n\nCross-References.',
  },
  {
    code: 112519,
    title: 'Other Aquaculture',
    description:
      'This U.S. industry comprises establishments primarily engaged in (1) farm raising of aquatic animals (except finfish and shellfish) and/or (2) farm raising of aquatic plants.  Alligator, algae, frog, seaweed, or turtle production is included in this industry.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 112910,
    title: 'Apiculture',
    description:
      "This industry comprises establishments primarily engaged in raising bees.  These establishments may collect and gather honey; and/or sell queen bees, packages of bees, royal jelly, bees' wax, propolis, venom, pollen, and/or other bee products.\n",
  },
  {
    code: 112920,
    title: 'Horses and Other Equine Production',
    description:
      'This industry comprises establishments primarily engaged in raising horses, mules, donkeys, and other equines.\n\nCross-References.',
  },
  {
    code: 112930,
    title: 'Fur-Bearing Animal and Rabbit Production',
    description:
      'This industry comprises establishments primarily engaged in raising fur-bearing animals including rabbits.  These animals may be raised for sale or for their pelt production.\n\nCross-References.',
  },
  {
    code: 112990,
    title: 'All Other Animal Production',
    description:
      "This industry comprises establishments primarily engaged in (1) raising animals (except cattle, hogs and pigs, poultry, sheep and goats, aquaculture, apiculture, horses and other equines; and fur-bearing animals including rabbits) or (2) raising a combination of animals, with no one animal or family of animals accounting for one-half of the establishment's agricultural production (i.e., value of animals for market).\n\nIllustrative Examples:\n\nBird production (e.g., canaries, parakeets, parrots)\nLaboratory animal production (e.g., rats, mice, guinea pigs)\nDeer production\nCombination animal farming (except dairy, poultry)\nCompanion animals production (e.g., cats, dogs)\nWorm production\nLlama production\n\n\nCross-References. Establishments primarily engaged in--",
  },
  {
    code: 113110,
    title: 'Timber Tract Operations',
    description:
      'This industry comprises establishments primarily engaged in the operation of timber tracts for the purpose of selling standing timber.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 113210,
    title: 'Forest Nurseries and Gathering of Forest Products',
    description:
      'This industry comprises establishments primarily engaged in (1) growing trees for reforestation and/or (2) gathering forest products, such as gums, barks, balsam needles, rhizomes, fibers, Spanish moss, ginseng, and truffles.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 113310,
    title: 'Logging',
    description:
      'This industry comprises establishments primarily engaged in one or more of the following: (1) cutting timber; (2) cutting and transporting timber; and (3) producing wood chips in the field.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 114111,
    title: 'Finfish Fishing',
    description:
      'This U.S. industry comprises establishments primarily engaged in the commercial catching or taking of finfish (e.g., bluefish, salmon, trout, tuna) from their natural habitat.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 114112,
    title: 'Shellfish Fishing',
    description:
      'This U.S. industry comprises establishments primarily engaged in the commercial catching or taking of shellfish (e.g., clams, crabs, lobsters, mussels, oysters, sea urchins, shrimp) from their natural habitat.\n\nCross-References.',
  },
  {
    code: 114119,
    title: 'Other Marine Fishing',
    description:
      'This U.S. industry comprises establishments primarily engaged in the commercial catching or taking of marine animals (except finfish and shellfish).\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 114210,
    title: 'Hunting and Trapping',
    description:
      'This industry comprises establishments primarily engaged in one or more of the following: (1) commercial hunting and trapping; (2) operating commercial game preserves, such as game retreats; and (3) operating hunting preserves.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 115111,
    title: 'Cotton Ginning',
    description: 'This U.S. industry comprises establishments primarily engaged in ginning cotton.',
  },
  {
    code: 115112,
    title: 'Soil Preparation, Planting, and Cultivating',
    description:
      'This U.S. industry comprises establishments primarily engaged in performing a soil preparation activity or crop production service, such as plowing, fertilizing, seed bed preparation, planting, cultivating, and crop protecting services.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 115113,
    title: 'Crop Harvesting, Primarily by Machine',
    description:
      'This U.S. industry comprises establishments primarily engaged in mechanical harvesting, picking, and combining of crops, and related activities.  The machinery used is provided by the servicing establishment.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 115114,
    title: 'Postharvest Crop Activities (except Cotton Ginning)',
    description:
      'This U.S. industry comprises establishments primarily engaged in performing services on crops, subsequent to their harvest, with the intent of preparing them for market or further processing.  These establishments provide postharvest activities, such as crop cleaning, sun drying, shelling, fumigating, curing, sorting, grading, packing, and cooling.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 115115,
    title: 'Farm Labor Contractors and Crew Leaders',
    description:
      'This U.S. industry comprises establishments primarily engaged in supplying labor for agricultural production or harvesting.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 115116,
    title: 'Farm Management Services',
    description:
      'This U.S. industry comprises establishments primarily engaged in providing farm management services on a contract or fee basis usually to citrus groves, orchards, or vineyards.  These establishments always provide management and may arrange or contract for the partial or the complete operations of the farm establishment(s) they manage.  Operational activities may include cultivating, harvesting, and/or other specialized agricultural support activities.\n\nCross-References.',
  },
  {
    code: 115210,
    title: 'Support Activities for Animal Production',
    description:
      'This industry comprises establishments primarily engaged in performing support activities related to raising livestock (e.g., cattle, goats, hogs, horses, poultry, sheep).  These establishments may perform one or more of the following: (1) breeding services for animals, including companion animals (e.g., cats, dogs, pet birds); (2) pedigree record services; (3) boarding horses; (4) dairy herd improvement activities; (5) livestock spraying; and (6) sheep dipping and shearing.\n\nCross-References.',
  },
  {
    code: 115310,
    title: 'Support Activities for Forestry',
    description:
      'This industry comprises establishments primarily engaged in performing particular support activities related to timber production, wood technology, forestry economics and marketing, and forest protection.  These establishments may provide support activities for forestry, such as estimating timber, forest firefighting, forest pest control, treating burned forests from the air for reforestation or on an emergency basis, and consulting on wood attributes and reforestation.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 211120,
    title: 'Crude Petroleum Extraction',
    description:
      'This industry comprises establishments primarily engaged in (1) the exploration, development, and/or the production of petroleum from wells in which the hydrocarbons will initially flow or can be produced using normal or enhanced drilling and extraction techniques or (2) the production of crude petroleum from surface shales or tar sands or from reservoirs in which the hydrocarbons are semisolids.  Establishments in this industry operate oil wells on their own account or for others on a contract or fee basis.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 211130,
    title: 'Natural Gas Extraction',
    description:
      'This industry comprises establishments primarily engaged in (1) the exploration, development, and/or the production of natural gas from wells in which the hydrocarbons will initially flow or can be produced using normal or enhanced drilling and extraction techniques or (2) the recovery of liquid hydrocarbons from oil and gas field gases.  Establishments primarily engaged in sulfur recovery from natural gas are included in this industry.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 212114,
    title: 'Surface Coal Mining',
    description:
      'This U.S. industry comprises establishments primarily engaged in one or more of the following: (1) surface mining of bituminous coal, lignite, and anthracite coal; (2) developing bituminous coal, lignite, and anthracite coal surface mine sites; (3) surface mining and beneficiating (e.g., cleaning, washing, screening, and sizing) of bituminous coal, lignite, and anthracite coal; or (4) beneficiating (e.g., cleaning, washing, screening, and sizing), but not mining, bituminous coal, lignite, and anthracite coal.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 212115,
    title: 'Underground Coal Mining',
    description:
      'This U.S. industry comprises establishments primarily engaged in one or more of the following: (1) underground mining of bituminous and anthracite coal; (2) developing bituminous and anthracite coal underground mine sites; and (3) underground mining and beneficiating (e.g., cleaning, washing, screening, and sizing) of bituminous and anthracite coal.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 212210,
    title: 'Iron Ore Mining',
    description:
      'This industry comprises establishments primarily engaged in (1) developing mine sites, mining, and/or beneficiating (i.e., preparing) iron ores and manganiferous ores valued chiefly for their iron content and/or (2) producing sinter iron ore (except iron ore produced in iron and steel mills) and other iron ore agglomerates.\n\nCross-References.',
  },
  {
    code: 212220,
    title: 'Gold Ore and Silver Ore Mining',
    description:
      'This industry comprises establishments primarily engaged in developing the mine site, mining, and/or beneficiating (i.e., preparing) ores valued chiefly for their gold and/or silver content.  Establishments primarily engaged in the transformation of the gold and silver into bullion or dore bar in combination with mining activities are included in this industry.\n\nCross-References.',
  },
  {
    code: 212230,
    title: 'Copper, Nickel, Lead, and Zinc Mining',
    description:
      'This industry comprises establishments primarily engaged in developing the mine site, mining, and/or beneficiating (i.e., preparing) ores valued chiefly for their copper, nickel, lead, or zinc content.  Beneficiating includes the transformation of ores into concentrates.  Establishments primarily engaged in recovering copper concentrates by the precipitation, leaching, or electrowinning of copper ore are included in this industry.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 212290,
    title: 'Other Metal Ore Mining',
    description:
      'This industry comprises establishments primarily engaged in developing the mine site, mining, and/or beneficiating (i.e., preparing) metal ores (except iron and manganiferous ores valued for their iron content, gold ore, silver ore, copper, nickel, lead, and zinc ore).\n\nIllustrative Examples:\n\nAntimony ores mining and/or beneficiating\nTantalum ores mining and/or beneficiating\nColumbite ores mining and/or beneficiating\nTungsten ores mining and/or beneficiating\nIlmenite ores mining and/or beneficiating\nUranium-radium-vanadium ores mining and/or beneficiating\nMolybdenum ores mining and/or beneficiating\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 212311,
    title: 'Dimension Stone Mining and Quarrying',
    description:
      'This U.S. industry comprises establishments primarily engaged in developing the mine site and/or mining or quarrying dimension stone (i.e., rough blocks and/or slabs of stone).\n\nCross-References.',
  },
  {
    code: 212312,
    title: 'Crushed and Broken Limestone Mining and Quarrying',
    description:
      'This U.S. industry comprises (1) establishments primarily engaged in developing the mine site, mining or quarrying crushed and broken limestone (including related rocks, such as dolomite, cement rock, marl, travertine, and calcareous tufa) and (2) preparation plants primarily engaged in beneficiating limestone (e.g., grinding or pulverizing).\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 212313,
    title: 'Crushed and Broken Granite Mining and Quarrying',
    description:
      'This U.S. industry comprises (1) establishments primarily engaged in developing the mine site, and/or mining or quarrying crushed and broken granite (including related rocks, such as gneiss, syenite (except nepheline), and diorite) and (2) preparation plants primarily engaged in beneficiating granite (e.g., grinding or pulverizing).\n',
  },
  {
    code: 212319,
    title: 'Other Crushed and Broken Stone Mining and Quarrying',
    description:
      'This U.S. industry comprises: (1) establishments primarily engaged in developing the mine site and/or mining or quarrying crushed and broken stone (except limestone and granite); (2) preparation plants primarily engaged in beneficiating (e.g., grinding and pulverizing) stone (except limestone and granite); and (3) establishments primarily engaged in mining or quarrying bituminous limestone and bituminous sandstone.\n\nIllustrative Examples:\n\nBituminous limestone mining and/or beneficiating\nMarble crushed and broken stone mining and/or beneficiating\nBituminous sandstone mining and/or beneficiating\nSandstone crushed and broken stone mining and/or beneficiating\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 212321,
    title: 'Construction Sand and Gravel Mining',
    description:
      'This U.S. industry comprises establishments primarily engaged in one or more of the following: (1) operating commercial grade (i.e., construction) sand and gravel pits; (2) dredging for commercial grade sand and gravel; and (3) washing, screening, or otherwise preparing commercial grade sand and gravel.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 212322,
    title: 'Industrial Sand Mining',
    description:
      'This U.S. industry comprises establishments primarily engaged in one or more of the following: (1) operating industrial grade sand pits; (2) dredging for industrial grade sand; and (3) washing, screening, or otherwise preparing industrial grade sand.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 212323,
    title: 'Kaolin, Clay, and Ceramic and Refractory Minerals Mining',
    description:
      "This U.S. industry comprises (1) establishments primarily engaged in developing the mine site and/or mining clay (e.g., china clay, paper clay and slip clay) or ceramic and refractory minerals and (2) establishments primarily engaged in beneficiating (i.e., preparing) clay or ceramic and refractory minerals.\n\nIllustrative Examples:\n\nBentonite mining and/or beneficiating\nFuller's earth mining and/or beneficiating\nCommon clay mining and/or beneficiating\nKaolin mining and/or beneficiating\nFeldspar mining and/or beneficiating\nBall clay mining and/or beneficiating\nFire clay mining and/or beneficiating\nShale (except oil shale) mining and/or beneficiating\n\n\nCross-References. Establishments primarily engaged in--",
  },
  {
    code: 212390,
    title: 'Other Nonmetallic Mineral Mining and Quarrying',
    description:
      'This industry comprises establishments primarily engaged in developing the mine site, mining, and/or milling or otherwise beneficiating (i.e., preparing) nonmetallic minerals (except coal, stone, sand, gravel, clay, and ceramic and refractory minerals).  Drylake brine operations are included in this industry, as well as establishments engaged in producing the specified minerals from underground and open pit mines.\n\nIllustrative Examples:\n\nBarite mining and/or beneficiating\nPhosphate rock mining and/or beneficiating\nBorate, natural, mining and/or beneficiating\nPotash mining and/or beneficiating\nPeat mining and/or beneficiating\nRock salt mining and/or beneficiating\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 213111,
    title: 'Drilling Oil and Gas Wells',
    description:
      'This U.S. industry comprises establishments primarily engaged in drilling oil and gas wells for others on a contract or fee basis.  This industry includes contractors that specialize in spudding in, drilling in, redrilling, and directional drilling.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 213112,
    title: 'Support Activities for Oil and Gas Operations',
    description:
      'This U.S. industry comprises establishments primarily engaged in performing support activities, on a contract or fee basis, for oil and gas operations (except geophysical surveying and mapping, site preparation, construction, and transportation activities).  Services included are exploration; excavating slush pits and cellars, well surveying; running, cutting, and pulling casings, tubes, and rods; cementing wells, shooting wells; perforating well casings; acidizing and chemically treating wells; and cleaning out, bailing, and swabbing wells.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 213113,
    title: 'Support Activities for Coal Mining',
    description:
      'This U.S. industry comprises establishments primarily engaged in providing support activities for coal mining (except geophysical surveying and mapping, site preparation, construction, and transportation activities) on a contract or fee basis.  Exploration for coal is included in this industry.  Exploration services include traditional prospecting methods, such as taking core samples and making geological observations at prospective sites.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 213114,
    title: 'Support Activities for Metal Mining',
    description:
      'This U.S. industry comprises establishments primarily engaged in providing support activities (except geophysical surveying and mapping, site preparation, construction, and transportation activities), on a contract or fee basis, for the mining and quarrying of metallic minerals and for the extraction of metal ores.  Exploration for these minerals is included in this industry.  Exploration services include traditional prospecting methods, such as taking core samples and making geological observations at prospective sites.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 213115,
    title: 'Support Activities for Nonmetallic Minerals (except Fuels) Mining',
    description:
      'This U.S. industry comprises establishments primarily engaged in providing support activities, on a contract or fee basis, for the mining and quarrying of nonmetallic minerals (except fuel) and for the extraction of nonmetallic minerals (except geophysical surveying and mapping, site preparation, construction, and transportation activities).  Exploration for these minerals is included in this industry.  Exploration services include traditional prospecting methods, such as taking core samples and making geological observations at prospective sites.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 221111,
    title: 'Hydroelectric Power Generation',
    description:
      'This U.S. industry comprises establishments primarily engaged in operating hydroelectric power generation facilities.  These facilities use water power to drive a turbine and produce electric energy.  The electric energy produced in these establishments is provided to electric power transmission systems or to electric power distribution systems.\n',
  },
  {
    code: 221112,
    title: 'Fossil Fuel Electric Power Generation',
    description:
      'This U.S. industry comprises establishments primarily engaged in operating fossil fuel powered electric power generation facilities.  These facilities use fossil fuels, such as coal, oil, or gas, in internal combustion or combustion turbine conventional steam process to produce electric energy.  The electric energy produced in these establishments is provided to electric power transmission systems or to electric power distribution systems.\n',
  },
  {
    code: 221113,
    title: 'Nuclear Electric Power Generation',
    description:
      'This U.S. industry comprises establishments primarily engaged in operating nuclear electric power generation facilities.  These facilities use nuclear power to produce electric energy.  The electric energy produced in these establishments is provided to electric power transmission systems or to electric power distribution systems.\n',
  },
  {
    code: 221114,
    title: 'Solar Electric Power Generation',
    description:
      'This U.S. industry comprises establishments primarily engaged in operating solar electric power generation facilities.  These facilities use energy from the sun to produce electric energy.  The electric energy produced in these establishments is provided to electric power transmission systems or to electric power distribution systems.\n\nCross-References.',
  },
  {
    code: 221115,
    title: 'Wind Electric Power Generation',
    description:
      'This U.S. industry comprises establishments primarily engaged in operating wind electric power generation facilities.  These facilities use wind power to drive a turbine and produce electric energy.  The electric energy produced in these establishments is provided to electric power transmission systems or to electric power distribution systems.\n',
  },
  {
    code: 221116,
    title: 'Geothermal Electric Power Generation',
    description:
      'This U.S. industry comprises establishments primarily engaged in operating geothermal electric power generation facilities.  These facilities use heat derived from the Earth to produce electric energy.  The electric energy produced in these establishments is provided to electric power transmission systems or to electric power distribution systems.\n',
  },
  {
    code: 221117,
    title: 'Biomass Electric Power Generation',
    description:
      'This U.S. industry comprises establishments primarily engaged in operating biomass electric power generation facilities.  These facilities use biomass (e.g., wood, waste, alcohol fuels) to produce electric energy.  The electric energy produced in these establishments is provided to electric power transmission systems or to electric power distribution systems.\n\nCross-References.',
  },
  {
    code: 221118,
    title: 'Other Electric Power Generation',
    description:
      'This U.S. industry comprises establishments primarily engaged in operating electric power generation facilities (except hydroelectric, fossil fuel, nuclear, solar, wind, geothermal, biomass).  These facilities convert other forms of energy, such as tidal power, into electric energy.  The electric energy produced in these establishments is provided to electric power transmission systems or to electric power distribution systems.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 221121,
    title: 'Electric Bulk Power Transmission and Control',
    description:
      'This U.S. industry comprises establishments primarily engaged in operating electric power transmission systems and/or controlling (i.e., regulating voltages) the transmission of electricity from the generating source to distribution centers or other electric utilities.  The transmission system includes lines and transformer stations.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 221122,
    title: 'Electric Power Distribution',
    description:
      'This U.S. industry comprises electric power establishments primarily engaged in either (1) operating electric power distribution systems (i.e., consisting of lines, poles, meters, and wiring) or (2) operating as electric power brokers or agents that arrange the sale of electricity via power distribution systems operated by others.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 221210,
    title: 'Natural Gas Distribution',
    description:
      'This industry comprises: (1) establishments primarily engaged in operating gas distribution systems (e.g., mains, meters); (2) establishments known as gas marketers that buy gas from the well and sell it to a distribution system; (3) establishments known as gas brokers or agents that arrange the sale of gas over gas distribution systems operated by others; and (4) establishments primarily engaged in transmitting and distributing gas to final consumers.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 221310,
    title: 'Water Supply and Irrigation Systems',
    description:
      'This industry comprises establishments primarily engaged in operating water treatment plants and/or operating water supply systems.  The water supply system may include pumping stations, aqueducts, and/or distribution mains.  The water may be used for drinking, irrigation, or other uses.\n\nCross-References.',
  },
  {
    code: 221320,
    title: 'Sewage Treatment Facilities',
    description:
      'This industry comprises establishments primarily engaged in operating sewer systems or sewage treatment facilities that collect, treat, and dispose of waste.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 221330,
    title: 'Steam and Air-Conditioning Supply',
    description:
      'This industry comprises establishments primarily engaged in providing steam, heated air, or cooled air.  The steam distribution may be through mains.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 236115,
    title: 'New Single-Family Housing Construction (except For-Sale Builders)',
    description:
      'This U.S. industry comprises general contractor establishments primarily responsible for the entire construction of new single-family housing, such as single-family detached houses and town houses or row houses where each housing unit (1) is separated from its neighbors by a ground-to-roof wall and (2) has no housing units constructed above or below.  This industry includes general contractors responsible for the on-site assembly of modular and prefabricated houses.  Single-family housing design-build firms and single-family construction management firms acting as general contractors are included in this industry.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 236116,
    title: 'New Multifamily Housing Construction (except For-Sale Builders)',
    description:
      'This U.S. industry comprises general contractor establishments primarily responsible for the construction of new multifamily residential housing units (e.g., high-rise, garden, town house apartments, and condominiums where each unit is not separated from its neighbors by a ground-to-roof wall).  Multifamily design-build firms and multifamily housing construction management firms acting as general contractors are included in this industry.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 236117,
    title: 'New Housing For-Sale Builders',
    description:
      'This U.S. industry comprises establishments primarily engaged in building new homes on land that is owned or controlled by the builder rather than the homebuyer or investor.  The land is included with the sale of the home.  Establishments in this industry build single-family and/or multifamily homes.  These establishments are often referred to as merchant builders, but are also known as production or for-sale builders.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 236118,
    title: 'Residential Remodelers',
    description:
      'This U.S. industry comprises establishments primarily responsible for the remodeling construction (including additions, alterations, reconstruction, maintenance, and repairs) of houses and other residential buildings, single-family and multifamily.  Included in this industry are remodeling general contractors, for-sale remodelers, remodeling design-build firms, and remodeling project construction management firms.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 236210,
    title: 'Industrial Building Construction',
    description:
      'This industry comprises establishments primarily responsible for the construction (including new work, additions, alterations, maintenance, and repairs) of industrial buildings (except warehouses).  The construction of selected additional structures, whose production processes are similar to those for industrial buildings (e.g., incinerators, cement plants, blast furnaces, and similar nonbuilding structures), is included in this industry.  Included in this industry are industrial building general contractors, industrial building for-sale builders, industrial building design-build firms, and industrial building construction management firms.\n\nIllustrative Examples:\n\nAssembly plant construction\nFurnace, industrial plant, construction\nCannery construction\nMine loading and discharging station construction\nCement plant construction\nPaper or pulp mill construction\nSteel mill construction\nChemical plant (except petrochemical) construction\nPharmaceutical manufacturing plant construction\nFactory construction\nFood processing plant construction\nWaste disposal plant (except sewage treatment) construction\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 236220,
    title: 'Commercial and Institutional Building Construction',
    description:
      'This industry comprises establishments primarily responsible for the construction (including new work, additions, alterations, maintenance, and repairs) of commercial and institutional buildings and related structures, such as stadiums, grain elevators, and indoor swimming facilities.  This industry includes establishments responsible for the on-site assembly of modular or prefabricated commercial and institutional buildings.  Included in this industry are commercial and institutional building general contractors, commercial and institutional building for-sale builders, commercial and institutional building design-build firms, and commercial and institutional building project construction management firms.\n\nIllustrative Examples:\n\nAirport building construction\nOffice building construction\nArena construction\nParking garage construction\nBarrack construction\nPrison construction\nFarm building construction\nRadio and television broadcast studio construction\nFire station construction\nGrain elevator or bin construction\nData center construction\nReligious building (e.g., church, synagogue, mosque, temple) construction\nRestaurant construction\nHospital construction\nSchool building construction\nHotel construction\nShopping mall construction\nIndoor swimming facility construction\nWarehouse construction (e.g., commercial, industrial, manufacturing, private)\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 237110,
    title: 'Water and Sewer Line and Related Structures Construction',
    description:
      'This industry comprises establishments primarily engaged in the construction of water and sewer lines, mains, pumping stations, treatment plants, and storage tanks.  The work performed may include new work, reconstruction, rehabilitation, and repairs.  Specialty trade contractors are included in this industry if they are engaged in activities primarily related to water, sewer line, and related structures construction.  All structures (including buildings) that are integral parts of water and sewer networks (e.g., storage tanks, pumping stations, water treatment plants, and sewage treatment plants) are included in this industry.\n\nIllustrative Examples:\n\nDistribution line, sewer and water, construction\nSewer main, pipe and connection, construction\nFire hydrant installation\nStorm sewer construction\nIrrigation systems construction\nWater main and line construction\nSewage disposal plant construction\nWater treatment plant construction\nPumping station, water and sewage system, construction\nWater system storage tank and tower construction\nReservoir construction\nWater well drilling, digging, boring, or sinking (except water intake wells in oil and gas fields)\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 237120,
    title: 'Oil and Gas Pipeline and Related Structures Construction',
    description:
      'This industry comprises establishments primarily engaged in the construction of oil and gas lines, mains, refineries, and storage tanks.  The work performed may include new work, reconstruction, rehabilitation, and repairs.  Specialty trade contractors are included in this industry if they are engaged in activities primarily related to oil and gas pipeline and related structures construction.  All structures (including buildings) that are integral parts of oil and gas networks (e.g., storage tanks, pumping stations, and refineries) are included in this industry.\n\nIllustrative Examples:\n\nDistribution line, gas and oil, construction\nOil refinery construction\nGas main construction\nPetrochemical plant construction\nGathering line, gas and oil field, construction\nNatural gas pipeline construction\nPumping station, gas and oil transmission, construction\nStorage tank, natural gas or oil, tank farm or field, construction\nNatural gas processing plant construction\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 237130,
    title: 'Power and Communication Line and Related Structures Construction',
    description:
      'This industry comprises establishments primarily engaged in the construction of power lines and towers, power plants, and radio, television, and telecommunications transmitting/receiving towers.  The work performed may include new work, reconstruction, rehabilitation, and repairs.  Specialty trade contractors are included in this industry if they are engaged in activities primarily related to power and communication line and related structures construction.  All structures (including buildings) that are integral parts of power and communication networks (e.g., transmitting towers, substations, and power plants) are included.\n\nIllustrative Examples:\n\nAlternative energy (e.g., geothermal, ocean wave, solar, wind) structure construction\nPower line stringing\nCellular phone tower construction\nRadio transmitting tower construction\nCo-generation plant construction\nSatellite receiving station construction\nCommunication tower construction\nNuclear power plant construction\nTelephone line stringing\nElectric light and power plant (except hydroelectric) construction\nTransformer station and substation, electric power, construction\nElectric power transmission line and tower construction\nUnderground cable (e.g., fiber optic, electricity, telephone, cable television) laying\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 237210,
    title: 'Land Subdivision',
    description:
      'This industry comprises establishments primarily engaged in servicing land and subdividing real property into lots, for subsequent sale to builders.  Servicing of land may include excavation work for the installation of roads and utility lines.  The extent of work may vary from project to project.  Land subdivision precedes building activity and the subsequent building is often residential, but may also be commercial tracts and industrial parks.  These establishments may do all the work themselves or subcontract the work to others.  Establishments that perform only the legal subdivision of land are not included in this industry.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 237310,
    title: 'Highway, Street, and Bridge Construction',
    description:
      'This industry comprises establishments primarily engaged in the construction of highways (including elevated), streets, roads, airport runways, public sidewalks, or bridges.  The work performed may include new work, reconstruction, rehabilitation, and repairs.  Specialty trade contractors are included in this industry if they are engaged in activities primarily related to highway, street, and bridge construction (e.g., installing guardrails on highways).\n\nIllustrative Examples:\n\nAirport runway construction\nHighway line painting\nCauseway construction\nPainting traffic lanes or parking lot lines\nCulverts, highway, road, and street, construction\nPothole filling, highway, road, street, or bridge\nElevated highway construction\nResurfacing, highway, road, street, or bridge\nGuardrail construction\nSign erection, highway, road, street, or bridge \n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 237990,
    title: 'Other Heavy and Civil Engineering Construction',
    description:
      'This industry comprises establishments primarily engaged in heavy and civil engineering construction projects (excluding highway, street, bridge, and distribution line construction).  The work performed may include new work, reconstruction, rehabilitation, and repairs.  Specialty trade contractors are included in this industry if they are engaged in activities primarily related to heavy and civil engineering construction projects (excluding highway, street, bridge, distribution line, oil and gas structure, and utilities building and structure construction).  Construction projects involving water resources (e.g., dredging and land drainage), development of marine facilities, and projects involving open space improvement (e.g., parks and trails) are included in this industry.\n\nIllustrative Examples:\n\nChannel construction\nLand drainage contractors\nDam construction\nMarine construction\nDock construction\nMicrotunneling contractors\nDredging (e.g., canal, channel, ditch, waterway)\nNuclear waste disposal site construction\nEarth retention system construction\nFlood control project construction\nPark ground and recreational open space improvement construction\nRailroad construction\nGolf course construction\nSubway construction\nHorizontal drilling (e.g., cable, pipeline, sewer installation)\nTrenching, underwater\nHydroelectric generating station construction\nTunnel construction \n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 238110,
    title: 'Poured Concrete Foundation and Structure Contractors',
    description:
      'This industry comprises establishments primarily engaged in pouring and finishing concrete foundations and structural elements.  This industry also includes establishments performing grout and shotcrete work.  The work performed may include new work, additions, alterations, maintenance, and repairs.\n\nIllustrative Examples:\n\nConcrete pouring and finishing\nGunite contractors\nConcrete pumping (i.e., placement)\nMud-jacking contractors\nConcrete work (except paving)\nShotcrete contractors\nFooting and foundation concrete contractors\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 238120,
    title: 'Structural Steel and Precast Concrete Contractors',
    description:
      'This industry comprises establishments primarily engaged in (1) erecting and assembling structural parts made from steel or precast concrete (e.g., steel beams, structural steel components, and similar products of precast concrete) and/or (2) assembling and installing other steel construction products (e.g., steel rods, bars, rebar, mesh, and cages) to reinforce poured-in-place concrete.  The work performed may include new work, additions, alterations, maintenance, and repairs.\n\nIllustrative Examples:\n\nConcrete product (e.g., structural precast, structural prestressed) installation\nRebar contractors\nErecting structural steel\nReinforcing steel contractors\nPlacing and tying reinforcing rod at a construction site\nStructural steel contractors\nPrecast concrete panel, slab, or form installation\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 238130,
    title: 'Framing Contractors',
    description:
      'This industry comprises establishments primarily engaged in structural framing and sheathing using materials other than structural steel or concrete.  The work performed may include new work, additions, alterations, maintenance, and repairs.\n\nIllustrative Examples:\n\nBuilding framing (except structural steel)\nPost framing contractors\nFoundation, building, wood, contractors\nSteel framing contractors\nFraming contractors\nWood frame component (e.g., truss) fabrication on site\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 238140,
    title: 'Masonry Contractors',
    description:
      'This industry comprises establishments primarily engaged in masonry work, stone setting, bricklaying, and other stone work. The work performed may include new work, additions, alterations, maintenance, and repairs.\n\nIllustrative Examples:\n\nBlock laying\nMarble, granite, and slate, exterior, contractors\nBricklaying\nMasonry pointing, cleaning, or caulking\nConcrete block laying\nStucco contractors\nFoundation (e.g., brick, block, stone), building, contractors\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 238150,
    title: 'Glass and Glazing Contractors',
    description:
      'This industry comprises establishments primarily engaged in installing glass panes in prepared openings (i.e., glazing work) and other glass work for buildings.  The work performed may include new work, additions, alterations, maintenance, and repairs.\n\nIllustrative Examples:\n\nDecorative glass and mirror installation\nGlazing contractors\nGlass cladding installation\nStained glass installation\nWindow pane or sheet installation\nGlass coating and tinting (except automotive) contractors\nGlass installation (except automotive) contractors\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 238160,
    title: 'Roofing Contractors',
    description:
      'This industry comprises establishments primarily engaged in roofing.  This industry also includes establishments treating roofs (i.e., spraying, painting, or coating) and installing skylights.  The work performed may include new work, additions, alterations, maintenance, and repairs.\n\nIllustrative Examples:\n\nPainting, spraying, or coating, roof\nSheet metal roofing installation\nShake and shingle, roof, installation\t\nSkylight installation\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 238170,
    title: 'Siding Contractors',
    description:
      'This industry comprises establishments primarily engaged in installing siding of wood, aluminum, vinyl, or other exterior finish material (except brick, stone, stucco, or curtain wall).  This industry also includes establishments installing gutters and downspouts.  The work performed may include new work, additions, alterations, maintenance, and repairs.\n\nIllustrative Examples:\n\nDownspout, gutter, and gutter guard installation\nFascia and soffit installation\nSiding (e.g., vinyl, wood, aluminum) installation\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 238190,
    title: 'Other Foundation, Structure, and Building Exterior Contractors',
    description:
      'This industry comprises establishments primarily engaged in building foundation and structure trades work (except poured concrete, structural steel, precast concrete, framing, masonry, glass and glazing, roofing, and siding).  The work performed may include new work, additions, alterations, maintenance, and repairs.\n\nIllustrative Examples:\n\nCurtain wall, metal, installation\nForms for poured concrete, erecting and dismantling\nWelding, on-site, contractors\nOrnamental metal work installation\nFire escape installation\nDecorative steel and wrought iron work installation\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 238210,
    title: 'Electrical Contractors and Other Wiring Installation Contractors',
    description:
      'This industry comprises establishments primarily engaged in installing and servicing electrical wiring and equipment.  Contractors included in this industry may include both the parts and labor when performing work.  These contractors may perform new work, additions, alterations, maintenance, and repairs.\n\nIllustrative Examples:\n\nAirport runway lighting contractors\nFiber optic cable (except transmission line) contractors\nAlarm system (e.g., fire, burglar), electric, installation only\nHighway, street, and bridge lighting and electrical signal installation\nAudio equipment (except automotive) installation contractors\nHome automation system installation\nLighting system installation\nCable television hookup contractors\nTelecommunications equipment and wiring (except transmission line) installation contractors\nComputer and network cable installation\nTraffic signal installation\nEnvironmental control system installation\nCable splicing, electrical or fiber optic\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 238220,
    title: 'Plumbing, Heating, and Air-Conditioning Contractors',
    description:
      'This industry comprises establishments primarily engaged in installing and servicing plumbing, heating, and air-conditioning equipment.  Contractors in this industry may provide both parts and labor when performing work.  The work performed may include new work, additions, alterations, maintenance, and repairs.\n\nIllustrative Examples:\n\nCooling tower installation\nHeating, ventilation, and air-conditioning (HVAC) contractors\nDuct work (e.g., cooling, dust collection, exhaust, heating, ventilation) installation\nLawn sprinkler system installation\nFire sprinkler system installation\nMechanical contractors\nFireplace, natural gas, installation\nRefrigeration system (e.g., commercial, industrial, scientific) installation\nFurnace installation\nSewer hookup and connection, building\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 238290,
    title: 'Other Building Equipment Contractors',
    description:
      'This industry comprises establishments primarily engaged in installing or servicing building equipment (except electrical, plumbing, heating, cooling, or ventilation equipment).  The repair and maintenance of miscellaneous building equipment is included in this industry.  The work performed may include new work, additions, alterations, maintenance, and repairs.\n\nIllustrative Examples:\n\nAutomated and revolving door installation\nLightning protection equipment (e.g., lightning rod) installation\nBoiler and pipe insulation installation\nMachine rigging\nCommercial-type door installation\nMillwrights\nConveyor system installation\nRevolving door installation\nOverhead door, commercial- or industrial-type, installation\nDismantling large-scale machinery and equipment\nElevator installation\nSatellite dish, household-type, installation\nEscalator installation\nVacuum cleaning system, built-in, installation\nGasoline pump, service station, installation\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 238310,
    title: 'Drywall and Insulation Contractors',
    description:
      'This industry comprises establishments primarily engaged in drywall, plaster work, and building insulation work.  Plaster work includes applying plain or ornamental plaster, and installation of lath to receive plaster.  The work performed may include new work, additions, alterations, maintenance, and repairs.  Establishments primarily engaged in providing firestop services are included in this industry.\n\nIllustrative Examples:\n\nAcoustical ceiling tile and panel installation\nLathing contractors\nDrop ceiling installation\nPlastering (i.e., ornamental, plain) contractors\nDrywall contractors\nSoundproofing contractors\nFirestop contractors\nFresco (i.e., decorative plaster finishing) contractors\nTaping and finishing drywall\nGypsum board installation\nWall cavity and attic space insulation installation\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 238320,
    title: 'Painting and Wall Covering Contractors',
    description:
      'This industry comprises establishments primarily engaged in interior or exterior painting or interior wall covering.  The work performed may include new work, additions, alterations, maintenance, and repairs.\n\nIllustrative Examples:\n\nBridge painting\nPaperhanging or removal contractors\nHouse painting\nShip painting contractors\nPaint and wallpaper stripping\nWallpaper hanging and removal contractors\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 238330,
    title: 'Flooring Contractors',
    description:
      'This industry comprises establishments primarily engaged in the installation of resilient floor tile, carpeting, linoleum, and hardwood flooring.  The work performed may include new work, additions, alterations, maintenance, and repairs.\n\nIllustrative Examples:\n\nCarpet, installation only\nResilient floor tile or sheet (e.g., linoleum, rubber, vinyl), installation only\nVinyl flooring contractors\nResurfacing hardwood flooring\nHardwood flooring, installation only\nFloor laying, scraping, finishing, and refinishing\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 238340,
    title: 'Tile and Terrazzo Contractors',
    description:
      'This industry comprises establishments primarily engaged in setting and installing ceramic tile, stone (interior only), and mosaic and/or mixing marble particles and cement to make terrazzo at the job site.  The work performed may include new work, additions, alterations, maintenance, and repairs.\n\nIllustrative Examples:\n\nCeramic tile installation\nMosaic work\nMantel, marble or stone, installation\nTile (except resilient) laying and setting\nStone flooring installation\nMarble, granite, and slate, interior installation contractors\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 238350,
    title: 'Finish Carpentry Contractors',
    description:
      'This industry comprises establishments primarily engaged in finish carpentry work.  The work performed may include new work, additions, alterations, maintenance, and repairs.\n\nIllustrative Examples:\n\nBuilt-in wood cabinets constructed on site\nMolding or trim, wood or plastic, installation\nCountertop (except ceramic tile or stone), residential-type, installation\nPaneling installation\nDoor and window frame construction\nGarage door, residential-type, installation\nPrefabricated kitchen and bath cabinet, residential-type, installation\nShip joinery contractors\nMillwork installation\nWindow and door, residential-type, of any material, prefabricated, installation\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 238390,
    title: 'Other Building Finishing Contractors',
    description:
      'This industry comprises establishments primarily engaged in building finishing trade work (except drywall, plaster, and insulation work; painting and wall covering work; flooring work; tile and terrazzo work; and finish carpentry work).  The work performed may include new work, additions, alterations, maintenance, and repairs.\n\nIllustrative Examples:\n\nBathtub refinishing, on-site\nFabricating metal cabinets or countertops on site\nCloset organizer system installation\nModular furniture system attachment and installation\nConcrete coating, glazing, or sealing\nTrade show exhibit installation and dismantling\nCountertop and cabinet, metal (except residential-type), installation\nWaterproofing contractors\nDrapery fixture (e.g., hardware, rods, tracks) installation\nWindow shade and blind installation\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 238910,
    title: 'Site Preparation Contractors',
    description:
      'This industry comprises establishments primarily engaged in site preparation activities, such as excavating and grading, demolition of buildings and other structures, and septic system installation.  Earthmoving and land clearing for all types of sites (e.g., building, nonbuilding, mining) is included in this industry.  Establishments primarily engaged in construction equipment rental with operator (except cranes) are also included.\n\nIllustrative Examples:\n\nBlasting, building demolition\nBuilding interior gutting and stripping\nConcrete breaking and cutting for demolition\nCutting new rights of way\nDemolition, building and structure\nExterior demolition contractors\nFoundation digging (i.e., excavation)\nFoundation drilling contractors\nGrading construction sites\nInterior demolition contractors\nDewatering contractors\nDirt moving for construction\nEquipment rental (except crane), construction, with operator\nExcavating, earthmoving, or land clearing contractors\nLine slashing or cutting (except maintenance)\nSeptic system contractors\nTrenching (except underwater)\nUnderground tank (except hazardous) removal\nWrecking, building or other structure\nWhole building deconstruction\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 238990,
    title: 'All Other Specialty Trade Contractors',
    description:
      'This industry comprises establishments primarily engaged in specialized trades (except foundation, structure, and building exterior contractors; building equipment contractors; building finishing contractors; and site preparation contractors).  The specialty trade work performed includes new work, additions, alterations, maintenance, and repairs.\n\nIllustrative Examples:\n\nBillboard erection\nOutdoor swimming pool construction\nPaver, brick (e.g., driveway, patio, sidewalk), installation\nCrane rental with operator\nPaving, residential and commercial driveway and parking lot\nSandblasting building exteriors\nFence installation\nScaffold erecting and dismantling\nInterlocking brick and block installation\nSteeplejack work\nManufactured (mobile) home set up and tie-down work\nDriveway paving or sealing\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 311111,
    title: 'Dog and Cat Food Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing dog and cat food from ingredients, such as grains, oilseed mill products, and meat products.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 311119,
    title: 'Other Animal Food Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing animal food (except dog and cat) from ingredients, such as grains, oilseed mill products, and meat products.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 311211,
    title: 'Flour Milling',
    description:
      'This U.S. industry comprises establishments primarily engaged in (1) milling flour or meal from grains (except rice) or vegetables and/or (2) milling flour and preparing flour mixes or doughs.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 311212,
    title: 'Rice Milling',
    description:
      'This U.S. industry comprises establishments primarily engaged in one of the following: (1) milling rice; (2) cleaning and polishing rice; or (3) milling, cleaning, and polishing rice.  The establishments in this industry may package the rice they mill with other ingredients.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 311213,
    title: 'Malt Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing malt from barley, rye, or other grains.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 311221,
    title: 'Wet Corn Milling and Starch Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in wet milling corn and other vegetables (except to make ethyl alcohol).  Examples of products made in these establishments are corn sweeteners, such as glucose, dextrose, and fructose; corn oil; and starches (except laundry).\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 311224,
    title: 'Soybean and Other Oilseed Processing',
    description:
      'This U.S. industry comprises establishments primarily engaged in crushing oilseeds and tree nuts, such as soybeans, cottonseeds, linseeds, peanuts, and sunflower seeds.  Examples of products produced in these establishments are oilseed oils, cakes, meals, and protein isolates and concentrates.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 311225,
    title: 'Fats and Oils Refining and Blending',
    description:
      'This U.S. industry comprises establishments primarily engaged in one or more of the following: (1) manufacturing shortening and margarine from purchased fats and oils; (2) refining and/or blending vegetable, oilseed, and tree nut oils from purchased oils; and (3) blending purchased animal fats with purchased vegetable fats.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 311230,
    title: 'Breakfast Cereal Manufacturing',
    description:
      'This industry comprises establishments primarily engaged in manufacturing breakfast cereal foods.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 311313,
    title: 'Beet Sugar Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing refined beet sugar from sugar beets.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 311314,
    title: 'Cane Sugar Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in (1) processing sugarcane and/or (2) refining cane sugar from raw cane sugar.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 311340,
    title: 'Nonchocolate Confectionery Manufacturing',
    description:
      'This industry comprises establishments primarily engaged in manufacturing nonchocolate confectioneries.  Included in this industry are establishments primarily engaged in retailing nonchocolate confectionery products not for immediate consumption made on the premises.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 311351,
    title: 'Chocolate and Confectionery Manufacturing from Cacao Beans',
    description:
      'This U.S. industry comprises establishments primarily engaged in shelling, roasting, and grinding cacao beans and making chocolate cacao products and chocolate confectioneries.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 311352,
    title: 'Confectionery Manufacturing from Purchased Chocolate',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing chocolate confectioneries from chocolate produced elsewhere.  Included in this industry are establishments primarily engaged in retailing chocolate confectionery products not for immediate consumption made on the premises from chocolate made elsewhere.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 311411,
    title: 'Frozen Fruit, Juice, and Vegetable Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing frozen fruits; frozen vegetables; and frozen fruit juices, ades, drinks, cocktail mixes and concentrates.\n\nCross-References.',
  },
  {
    code: 311412,
    title: 'Frozen Specialty Food Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing frozen specialty foods (except seafood), such as frozen dinners, entrees, and side dishes; frozen pizza; frozen whipped topping; and frozen waffles, pancakes, and French toast.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 311421,
    title: 'Fruit and Vegetable Canning',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing canned, pickled, and brined fruits and vegetables.  Examples of products made in these establishments are canned juices; canned jams and jellies; canned tomato-based sauces, such as catsup, salsa, chili sauce, spaghetti sauce, barbeque sauce, and tomato paste; and pickles, relishes, and sauerkraut.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 311422,
    title: 'Specialty Canning',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing canned specialty foods.  Examples of products made in these establishments are canned baby food, canned baked beans, canned soups (except seafood), canned spaghetti, and other canned nationality foods.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 311423,
    title: 'Dried and Dehydrated Food Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in (1) drying (including freeze-dried) and/or dehydrating fruits, vegetables, and soup mixes and bouillon and/or (2) drying and/or dehydrating ingredients and packaging them with other purchased ingredients, such as rice and dry pasta.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 311511,
    title: 'Fluid Milk Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in (1) manufacturing processed milk products, such as pasteurized milk or cream and sour cream and/or (2) manufacturing fluid milk dairy substitutes from soybeans and other nondairy substances.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 311512,
    title: 'Creamery Butter Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing creamery butter from milk and/or processed milk products.\n\nCross-References.',
  },
  {
    code: 311513,
    title: 'Cheese Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in (1) manufacturing cheese products (except cottage cheese) from raw milk and/or processed milk products and/or (2) manufacturing cheese substitutes from soybean and other nondairy substances.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 311514,
    title: 'Dry, Condensed, and Evaporated Dairy Product Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing dry, condensed, and evaporated milk and dairy substitute products.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 311520,
    title: 'Ice Cream and Frozen Dessert Manufacturing',
    description:
      'This industry comprises establishments primarily engaged in manufacturing ice cream, frozen yogurts, frozen ices, sherbets, frozen tofu, and other frozen desserts (except bakery products).\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 311611,
    title: 'Animal (except Poultry) Slaughtering',
    description:
      'This U.S. industry comprises establishments primarily engaged in slaughtering animals (except poultry and small game).  Establishments that slaughter and prepare meats are included in this industry.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 311612,
    title: 'Meat Processed from Carcasses',
    description:
      'This U.S. industry comprises establishments primarily engaged in processing or preserving meat and meat byproducts (except poultry and small game) from purchased meats.  This industry includes establishments primarily engaged in assembly cutting and packing of meats (i.e., boxed meats) from purchased meats.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 311613,
    title: 'Rendering and Meat Byproduct Processing',
    description:
      'This U.S. industry comprises establishments primarily engaged in rendering animal fat, bones, and meat scraps.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 311615,
    title: 'Poultry Processing',
    description:
      'This U.S. industry comprises establishments primarily engaged in (1) slaughtering poultry and small game and/or (2) preparing processed poultry and small game meat and meat byproducts.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 311710,
    title: 'Seafood Product Preparation and Packaging',
    description:
      'This industry comprises establishments primarily engaged in one or more of the following: (1) canning seafood (including soup); (2) smoking, salting, and drying seafood; (3) eviscerating fresh fish by removing heads, fins, scales, bones, and entrails; (4) shucking and packing fresh shellfish; (5) processing marine fats and oils; and (6) freezing seafood.  Establishments known as "floating factory ships" that are engaged in the gathering and processing of seafood into canned seafood products are included in this industry.\n',
  },
  {
    code: 311811,
    title: 'Retail Bakeries',
    description:
      'This U.S. industry comprises establishments primarily engaged in retailing bread and other bakery products not for immediate consumption made on the premises from flour, not from prepared dough.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 311812,
    title: 'Commercial Bakeries',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing fresh and frozen bread and bread-type rolls and other fresh bakery (except cookies and crackers) products.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 311813,
    title: 'Frozen Cakes, Pies, and Other Pastries Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing frozen bakery products (except bread), such as cakes, pies, and doughnuts.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 311821,
    title: 'Cookie and Cracker Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing cookies, crackers, and other products, such as ice cream cones.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 311824,
    title: 'Dry Pasta, Dough, and Flour Mixes Manufacturing from Purchased Flour',
    description:
      'This U.S. industry comprises establishments primarily engaged in (1) manufacturing dry pasta and/or (2) manufacturing prepared flour mixes or dough from flour ground elsewhere.  The establishments in this industry may package the dry pasta they manufacture with other ingredients.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 311830,
    title: 'Tortilla Manufacturing',
    description:
      'This industry comprises establishments primarily engaged in manufacturing tortillas.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 311911,
    title: 'Roasted Nuts and Peanut Butter Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in one or more of the following: (1) salting, roasting, drying, cooking, or canning nuts; (2) processing grains or seeds into snacks; and (3) manufacturing peanut butter and other nut butters.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 311919,
    title: 'Other Snack Food Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing snack foods (except roasted nuts and peanut butter).\n\nIllustrative Examples:\n\nCorn chips and related corn snacks manufacturing\nPopped popcorn (except candy-covered) manufacturing\nPork rinds manufacturing\nPotato chips manufacturing\nPretzels (except soft) manufacturing\nTortilla chips manufacturing\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 311920,
    title: 'Coffee and Tea Manufacturing',
    description:
      'This industry comprises establishments primarily engaged in one or more of the following: (1) roasting coffee; (2) manufacturing coffee and tea concentrates (including instant and freeze-dried); (3) blending tea; (4) manufacturing herbal tea; and (5) manufacturing coffee extracts, flavorings, and syrups.\n\nCross-References.',
  },
  {
    code: 311930,
    title: 'Flavoring Syrup and Concentrate Manufacturing',
    description:
      'This industry comprises establishments primarily engaged in manufacturing flavoring syrup drink concentrates and related products for soda fountain use or for the manufacture of soft drinks.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 311941,
    title: 'Mayonnaise, Dressing, and Other Prepared Sauce Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing mayonnaise, salad dressing, vinegar, mustard, horseradish, soy sauce, tartar sauce, Worcestershire sauce, and other prepared sauces (except tomato-based and gravy).\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 311942,
    title: 'Spice and Extract Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in (1) manufacturing spices, table salt, seasonings, flavoring extracts (except coffee and meat), and natural food colorings and/or (2) manufacturing dry mix food preparations, such as salad dressing mixes, gravy and sauce mixes, frosting mixes, and other dry mix preparations.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 311991,
    title: 'Perishable Prepared Food Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing perishable prepared foods, such as salads, sandwiches, prepared meals, fresh pizza, fresh pasta, and peeled or cut vegetables.\n\nCross-References.',
  },
  {
    code: 311999,
    title: 'All Other Miscellaneous Food Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing food (except animal food; grain and oilseed milling; sugar and confectionery products; preserved fruits, vegetables, and specialties; dairy products; meat products; seafood products; bakeries and tortillas; snack foods; coffee and tea; flavoring syrups and concentrates; seasonings and dressings; and perishable prepared food).  Included in this industry are establishments primarily engaged in mixing purchased dried and/or dehydrated ingredients including those mixing purchased dried and/or dehydrated ingredients for soup mixes and bouillon.\n\nIllustrative Examples:\n\nBaking powder manufacturing\nCake frosting, prepared, manufacturing\nDessert puddings manufacturing\nSweetening syrups (except pure maple) manufacturing\nEgg substitutes manufacturing\nGelatin dessert preparations manufacturing \nHoney processing\nPowdered drink mixes (except chocolate, coffee, tea, or milk based) manufacturing\nPopcorn (except popped) manufacturing\nYeast manufacturing\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 312111,
    title: 'Soft Drink Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing soft drinks and artificially carbonated waters.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 312112,
    title: 'Bottled Water Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in purifying and bottling water (including naturally carbonated).\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 312113,
    title: 'Ice Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing ice.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 312120,
    title: 'Breweries',
    description:
      'This industry comprises establishments primarily engaged in brewing beer, ale, lager, malt liquors, and nonalcoholic beer.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 312130,
    title: 'Wineries',
    description:
      'This industry comprises establishments primarily engaged in one or more of the following: (1) growing grapes and manufacturing wines and brandies; (2) manufacturing wines and brandies from grapes and other fruits grown elsewhere; and (3) blending wines and brandies.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 312140,
    title: 'Distilleries',
    description:
      'This industry comprises establishments primarily engaged in one or more of the following: (1) distilling potable liquors (except brandies); (2) distilling and blending liquors; and (3) blending and mixing liquors and other ingredients.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 312230,
    title: 'Tobacco Manufacturing',
    description:
      'This industry comprises establishments primarily engaged in (1) stemming and redrying tobacco and/or (2) manufacturing cigarettes or other tobacco products.\n\nIllustrative Examples:\n\nChewing tobacco manufacturing\nCigar manufacturing\nCigarettes manufacturing (except electronic)\nSnuff manufacturing\nPrepared pipe tobacco manufacturing\nTobacco leaf processing and aging\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 313110,
    title: 'Fiber, Yarn, and Thread Mills',
    description:
      'This industry comprises establishments primarily engaged in one or more of the following: (1) spinning yarn; (2) manufacturing thread of any fiber; (3) texturizing, throwing, twisting, and winding purchased yarn or manmade fibers and filaments; and (4) producing hemp yarn and further processing into rope or bags.\n\nCross-References.',
  },
  {
    code: 313210,
    title: 'Broadwoven Fabric Mills',
    description:
      'This industry comprises establishments primarily engaged in weaving broadwoven fabrics and felts (except tire fabrics and rugs).  Establishments in this industry may weave only, weave and finish, or weave, finish, and further fabricate fabric products.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 313220,
    title: 'Narrow Fabric Mills and Schiffli Machine Embroidery',
    description:
      'This industry comprises establishments primarily engaged in one or more of the following: (1) weaving or braiding narrow fabrics in their final form or initially made in wider widths that are specially constructed for narrower widths; (2) making fabric-covered elastic yarn and thread; and (3) manufacturing Schiffli machine embroideries.  Establishments in this industry may weave only; weave and finish; or weave, finish, and further fabricate fabric products.\n',
  },
  {
    code: 313230,
    title: 'Nonwoven Fabric Mills',
    description:
      'This industry comprises establishments primarily engaged in manufacturing nonwoven fabrics and felts. Processes used include bonding and/or interlocking fibers by mechanical, chemical, thermal, or solvent means, or by combinations thereof.\n',
  },
  {
    code: 313240,
    title: 'Knit Fabric Mills',
    description:
      'This industry comprises establishments primarily engaged in one of the following: (1) knitting weft (i.e., circular) and warp (i.e., flat) fabric; (2) knitting and finishing weft and warp fabric; (3) manufacturing lace; or (4) manufacturing, dyeing, and finishing lace and lace goods.  Establishments in this industry may knit only; knit and finish; or knit, finish, and further fabricate fabric products (except apparel).\n\nCross-References.',
  },
  {
    code: 313310,
    title: 'Textile and Fabric Finishing Mills',
    description:
      'This industry comprises (1) establishments primarily engaged in finishing textiles, fabrics, and apparel and (2) establishments of converters who buy fabric goods in the grey, have them finished on contract, and sell at wholesale.  Finishing operations include: bleaching, dyeing, printing (e.g., roller, screen, flock, plisse), stonewashing, and other mechanical finishing, such as preshrinking, shrinking, sponging, calendering, mercerizing, and napping; as well as cleaning, scouring, and the preparation of natural fibers and raw stock.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 313320,
    title: 'Fabric Coating Mills',
    description:
      'This industry comprises establishments primarily engaged in coating, laminating, varnishing, waxing, and rubberizing textiles and apparel.\n\nCross-References.',
  },
  {
    code: 314110,
    title: 'Carpet and Rug Mills',
    description:
      'This industry comprises establishments primarily engaged in (1) manufacturing woven, tufted, and other carpets and rugs, such as art squares, floor mattings, needlepunch carpeting, and door mats and mattings, from textile materials or from twisted paper, grasses, reeds, sisal, jute, or rags and/or (2) finishing carpets and rugs.\n',
  },
  {
    code: 314120,
    title: 'Curtain and Linen Mills',
    description:
      'This industry comprises establishments primarily engaged in manufacturing household textile products, such as curtains, draperies, linens, bedspreads, sheets, tablecloths, towels, and shower curtains, from purchased materials.  The household textile products may be made on a stock or custom basis for sale to individual retail customers.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 314910,
    title: 'Textile Bag and Canvas Mills',
    description:
      'This industry comprises establishments primarily engaged in manufacturing textile bags (except luggage) or other canvas and canvas-like products, such as awnings, sails, tarpaulins, and tents from purchased textile fabrics or yarns.\n\nIllustrative Examples:\n\nCovers (e.g., boat, swimming pool, truck) made from purchased fabrics\nLaundry bags made from purchased woven or knitted materials\nSeed bags made from purchased woven or knitted materials\nTextile bags made from purchased woven or knitted materials\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 314994,
    title: 'Rope, Cordage, Twine, Tire Cord, and Tire Fabric Mills',
    description:
      'This U.S. industry comprises establishments primarily engaged in (1) manufacturing rope, cable, cordage, twine, and related products from all materials (e.g., abaca, sisal, henequen, cotton, paper, jute, flax, manmade fibers including glass) and/or (2) manufacturing cord and fabric of polyester, rayon, cotton, glass, steel, or other materials for use in reinforcing rubber tires, industrial belting, and similar uses.\n\nCross-References.',
  },
  {
    code: 314999,
    title: 'All Other Miscellaneous Textile Product Mills',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing textile products (except carpets and rugs; curtains and linens; textile bags and canvas products; rope, cordage, and twine; and tire cords and tire fabrics) from purchased materials.  These establishments may further embellish the textile products they manufacture with decorative stitching.  Establishments primarily engaged in adding decorative stitching such as embroidery or other art needlework on textile products, including apparel, on a contract or fee basis for the trade, are included in this industry.\n\nIllustrative Examples:\n\nBatts and batting (except nonwoven fabrics) manufacturing\nEmbroidering on textile products or apparel for the trade\nFishing nets made from purchased materials\nCarpet cutting and binding\nSleeping bags manufacturing\nDiapers (except disposable) made from purchased materials\nTextile fire hoses made from purchased materials\nDust cloths made from purchased fabric\nWeatherstripping made from purchased textiles\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 315120,
    title: 'Apparel Knitting Mills',
    description:
      'This industry comprises establishments primarily engaged in knitting apparel or knitting fabric and then manufacturing apparel.  Jobbers, performing entrepreneurial functions involved in knitting apparel and accessories, are included.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 315210,
    title: 'Cut and Sew Apparel Contractors',
    description:
      'This industry comprises establishments commonly referred to as contractors primarily engaged in (1) cutting materials owned by others for apparel and accessories and/or (2) sewing materials owned by others for apparel and accessories.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 315250,
    title: 'Cut and Sew Apparel Manufacturing (except Contractors)',
    description:
      'This industry comprises establishments primarily engaged in manufacturing cut and sew apparel from purchased fabric.  Clothing jobbers, who perform entrepreneurial functions involved in apparel manufacture, including buying raw materials, designing and preparing samples, arranging for apparel to be made from their materials, and marketing finished apparel, are included.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 315990,
    title: 'Apparel Accessories and Other Apparel Manufacturing',
    description:
      'This industry comprises establishments primarily engaged in manufacturing apparel and accessories (except apparel knitting mills, cut and sew apparel contractors, and cut and sew apparel manufacturing (except contractors)).  Jobbers, who perform entrepreneurial functions involved in apparel accessories manufacture, including buying raw materials, designing and preparing samples, arranging for apparel accessories to be made from their materials, and marketing finished apparel accessories, are included.  Examples of products made by these establishments are belts, caps, gloves (except medical, safety, sporting), hats, and neckties.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 316110,
    title: 'Leather and Hide Tanning and Finishing',
    description:
      'This industry comprises establishments primarily engaged in one or more of the following: (1) tanning, currying, and finishing hides and skins; (2) having others process hides and skins on a contract basis; and (3) dyeing or dressing furs.\n',
  },
  {
    code: 316210,
    title: 'Footwear Manufacturing',
    description:
      "This industry comprises establishments primarily engaged in manufacturing footwear (except orthopedic extension footwear).\n\nIllustrative Examples:\n\nAthletic shoes manufacturing\nBallet slippers manufacturing\nCleated athletic shoes manufacturing\nShoes, children's and infants' (except orthopedic extension), manufacturing\nShoes, men's (except orthopedic extension), manufacturing\nShoes, women's (except orthopedic extension), manufacturing\n\n\nCross-References.",
  },
  {
    code: 316990,
    title: 'Other Leather and Allied Product Manufacturing',
    description:
      "This industry comprises establishments primarily engaged in manufacturing leather products (except footwear and apparel) from purchased leather or leather substitutes (e.g., fabric, plastics).\n\nIllustrative Examples:\n\nBillfolds, all materials, manufacturing\nBoot and shoe cut stock and findings, leather, manufacturing\nDog furnishings (e.g., collars, harnesses, leashes, muzzles), manufacturing \nLuggage, all materials, manufacturing\nShoe soles, leather, manufacturing\nPurses, women's, all materials (except metal), manufacturing\nToilet kits and cases (except metal) manufacturing\nWatch bands (except metal) manufacturing\nWelders' jackets, leggings, and sleeves, leather, manufacturing\n\n\nCross-References. Establishments primarily engaged in--",
  },
  {
    code: 321113,
    title: 'Sawmills',
    description:
      'This U.S. industry comprises establishments primarily engaged in sawing dimension lumber, boards, beams, timbers, poles, ties, shingles, shakes, siding, and wood chips from logs or bolts.  Sawmills may plane the rough lumber that they make with a planing machine to achieve smoothness and uniformity of size.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 321114,
    title: 'Wood Preservation',
    description:
      'This U.S. industry comprises establishments primarily engaged in (1) treating wood sawed, planed, or shaped in other establishments with creosote or other preservatives, such as alkaline copper quat, copper azole, and sodium borates, to prevent decay and to protect against fire and insects and/or (2) sawing round wood poles, pilings, and posts and treating them with preservatives.\n\nCross-References.',
  },
  {
    code: 321211,
    title: 'Hardwood Veneer and Plywood Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing hardwood veneer and/or hardwood plywood.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 321212,
    title: 'Softwood Veneer and Plywood Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing softwood veneer and/or softwood plywood.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 321215,
    title: 'Engineered Wood Member Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing fabricated or laminated wood arches, wood roof and floor trusses, and/or other fabricated or laminated wood structural members.\n\nIllustrative Examples:\n\nFinger joint lumber manufacturing\nI-joists, wood, fabricating\nLaminated veneer lumber (LVL) manufacturing\nParallel strand lumber manufacturing\nTimbers, structural, glue laminated or pre-engineered wood, manufacturing\nTrusses, wood roof or floor, manufacturing\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 321219,
    title: 'Reconstituted Wood Product Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing reconstituted wood sheets and boards.\n\nIllustrative Examples:\n\nMedium density fiberboard (MDF) manufacturing\nOriented strandboard (OSB) manufacturing\nParticleboard manufacturing\nReconstituted wood sheets and boards manufacturing\nWaferboard manufacturing \n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 321911,
    title: 'Wood Window and Door Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing window and door units, sash, window and door frames, and doors from wood or wood clad with metal or plastics.\n\nCross-References.',
  },
  {
    code: 321912,
    title: 'Cut Stock, Resawing Lumber, and Planing',
    description:
      'This U.S. industry comprises establishments primarily engaged in one or more of the following: (1) manufacturing dimension lumber from purchased lumber; (2) manufacturing dimension stock (i.e., shapes) or cut stock; (3) resawing the output of sawmills; and (4) planing purchased lumber.  These establishments generally use woodworking machinery, such as jointers, planers, lathes, and routers to shape wood.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 321918,
    title: 'Other Millwork (including Flooring)',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing millwork (except wood windows, wood doors, and cut stock).\n\nIllustrative Examples:\n\nClear and finger joint wood moldings manufacturing\nDecorative wood moldings (e.g., base, chair rail, crown, shoe) manufacturing\nOrnamental woodwork (e.g., cornices, mantel) manufacturing \nPlaning mills, millwork \nStairwork (e.g., newel posts, railings, stairs, staircases), wood, manufacturing\nWood flooring manufacturing\nWood shutters manufacturing\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 321920,
    title: 'Wood Container and Pallet Manufacturing',
    description:
      'This industry comprises establishments primarily engaged in manufacturing wood pallets, wood box shook, wood boxes, other wood containers, and wood parts for pallets and containers.\n\nCross-References.',
  },
  {
    code: 321991,
    title: 'Manufactured Home (Mobile Home) Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in making manufactured homes (i.e., mobile homes) and nonresidential mobile buildings.  Manufactured homes are designed to accept permanent water, sewer, and utility connections and although equipped with wheels, they are not intended for regular highway movement.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 321992,
    title: 'Prefabricated Wood Building Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing prefabricated wood buildings and wood sections and panels for prefabricated wood buildings.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 321999,
    title: 'All Other Miscellaneous Wood Product Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing wood products (except establishments operating sawmills and preservation facilities; establishments manufacturing veneer, engineered wood products, millwork, wood containers, pallets, and wood container parts; and establishments making manufactured homes (i.e., mobile homes) and prefabricated buildings and components).\n\nIllustrative Examples:\n\nCabinets (i.e., housings), wood (e.g., sewing machines, stereo, television), manufacturing\nCork products (except gaskets) manufacturing\nKiln drying lumber\nShoe trees manufacturing\nWood dowels manufacturing\nWood extension ladders manufacturing\nWood handles (e.g., broom, handtool, mop), manufacturing\nWood kitchenware manufacturing\nWood stepladders manufacturing\nWood toilet seats manufacturing\nWood toothpicks manufacturing\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 322110,
    title: 'Pulp Mills',
    description:
      'This industry comprises establishments primarily engaged in manufacturing pulp without manufacturing paper or paperboard.  The pulp is made by separating the cellulose fibers from the other impurities in wood or other materials, such as used or recycled rags, linters, scrap paper, and straw.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 322120,
    title: 'Paper Mills',
    description:
      'This industry comprises establishments primarily engaged in manufacturing paper from pulp. These establishments may manufacture or purchase pulp.  In addition, the establishments may convert the paper they make.  The activity of making paper classifies an establishment into this industry regardless of the output.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 322130,
    title: 'Paperboard Mills',
    description:
      'This industry comprises establishments primarily engaged in manufacturing paperboard (e.g., can/drum stock, container board, corrugating medium, folding carton stock, linerboard, tube) from pulp.  These establishments may manufacture or purchase pulp.  In addition, the establishments may also convert the paperboard they make.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 322211,
    title: 'Corrugated and Solid Fiber Box Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in laminating purchased paper or paperboard into corrugated or solid fiber boxes and related products, such as pads, partitions, pallets, and corrugated paper without manufacturing paperboard.  These boxes are generally used for shipping.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 322212,
    title: 'Folding Paperboard Box Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in converting paperboard (except corrugated) into folding paperboard boxes without manufacturing paper and paperboard.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 322219,
    title: 'Other Paperboard Container Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in converting paperboard into paperboard containers (except corrugated, solid fiber, and folding paperboard boxes) without manufacturing paperboard.\n\nIllustrative Examples:\n\nFiber cans and drums (i.e., all-fiber, nonfiber ends of any material) made from purchased paperboard\nMilk cartons made from purchased paper or paperboard\nSanitary food containers (except folding) made from purchased paper or paperboard \nSetup (i.e., not shipped flat) boxes made from purchased paperboard\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 322220,
    title: 'Paper Bag and Coated and Treated Paper Manufacturing',
    description:
      'This industry comprises establishments primarily engaged in one or more of the following: (1) cutting and coating paper and paperboard; (2) cutting and laminating paper, paperboard, and other flexible materials (except plastics film to plastics film); (3) manufacturing bags, multiwall bags, sacks of paper, metal foil, coated paper, laminates, or coated combinations of paper and foil with plastics film; (4) manufacturing laminated aluminum and other converted metal foils from purchased foils; and (5) surface coating paper or paperboard.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 322230,
    title: 'Stationery Product Manufacturing',
    description:
      'This industry comprises establishments primarily engaged in converting paper or paperboard into products used for writing, filing, art work, and similar applications.\n\nIllustrative Examples:\n\nComputer paper, die-cut, made from purchased paper\nDie-cut paper products for office use made from purchased paper or paperboard\nEnvelopes (i.e., mailing, stationery) made from any material\nStationery made from purchased paper\nTablets (e.g., memo, note, writing) made from purchased paper\nTapes (e.g., adding machine, calculator, cash register) made from purchased paper\n\n\nCross-References.',
  },
  {
    code: 322291,
    title: 'Sanitary Paper Product Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in converting purchased sanitary paper stock or wadding into sanitary paper products, such as facial tissues, handkerchiefs, table napkins, toilet paper, towels, disposable diapers, sanitary napkins, and tampons.\n',
  },
  {
    code: 322299,
    title: 'All Other Converted Paper Product Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in converting paper or paperboard into products (except containers, bags, coated and treated paper, stationery products, and sanitary paper products) or converting pulp into pulp products, such as egg cartons, food trays, and other food containers from molded pulp.\n\nIllustrative Examples:\n\nCrepe paper made from purchased paper\nDie-cut paper products (except for office use) made from purchased paper or paperboard\nMolded pulp products (e.g., egg cartons, food containers, food trays) manufacturing\nPaper novelties made from purchased paper\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 323111,
    title: 'Commercial Printing (except Screen and Books)',
    description:
      'This U.S. industry comprises establishments primarily engaged in commercial printing (except screen printing, books printing) without publishing (except fabric grey goods printing).  The printing processes used in this industry include, but are not limited to, lithographic, gravure, flexographic, letterpress, engraving, and various digital printing technologies.  This industry includes establishments engaged in commercial printing on purchased stock materials, such as stationery, invitations, labels, and similar items, on a job-order basis.  Establishments primarily engaged in traditional printing activities combined with document photocopying services (i.e., quick printers) or primarily engaged in printing graphical materials using digital printing equipment are included in this industry.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 323113,
    title: 'Commercial Screen Printing',
    description:
      'This U.S. industry comprises establishments primarily engaged in screen printing without publishing (except books, fabric grey goods, and manifold business forms).  This industry includes establishments engaged in screen printing on purchased stock materials, such as stationery, invitations, labels, and similar items, on a job-order basis.  Establishments primarily engaged in printing on apparel and textile products, such as T-shirts, caps, jackets, towels, and napkins, are included in this industry.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 323117,
    title: 'Books Printing',
    description:
      'This U.S. industry comprises establishments primarily engaged in printing or printing and binding books and pamphlets without publishing.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 323120,
    title: 'Support Activities for Printing',
    description:
      'This industry comprises establishments primarily engaged in performing prepress and postpress services in support of printing activities.  Prepress services may include such things as platemaking, typesetting, trade binding, and sample mounting.  Postpress services include such things as book or paper bronzing, die cutting, edging, embossing, folding, gilding, gluing, and indexing.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 324110,
    title: 'Petroleum Refineries',
    description:
      'This industry comprises establishments primarily engaged in refining crude petroleum into refined petroleum.  Petroleum refining involves one or more of the following activities: (1) fractionation; (2) straight distillation of crude oil; and (3) cracking.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 324121,
    title: 'Asphalt Paving Mixture and Block Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing asphalt and tar paving mixtures and blocks from purchased asphaltic materials.\n\nCross-References.',
  },
  {
    code: 324122,
    title: 'Asphalt Shingle and Coating Materials Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in (1) saturating purchased mats and felts with asphalt or tar from purchased asphaltic materials and (2) manufacturing asphalt and tar and roofing cements and coatings from purchased asphaltic materials.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 324191,
    title: 'Petroleum Lubricating Oil and Grease Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in blending or compounding refined petroleum to make lubricating oils and greases and/or re-refining used petroleum lubricating oils.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 324199,
    title: 'All Other Petroleum and Coal Products Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing petroleum products (except asphalt paving, roofing, and saturated materials and lubricating oils and greases) from refined petroleum and coal products made in coke ovens not integrated with a steel mill.\n\nIllustrative Examples:\n\nBiodiesel fuels not made in petroleum refineries and blended with purchased refined petroleum\nCoke oven products (e.g., coke, gases, tars) made in coke oven establishments\nPetroleum briquettes made from refined petroleum\nPetroleum jelly made from refined petroleum\nPetroleum waxes made from refined petroleum\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 325110,
    title: 'Petrochemical Manufacturing',
    description:
      'This industry comprises establishments primarily engaged in (1) manufacturing acyclic (i.e., aliphatic) hydrocarbons such as ethylene, propylene, and butylene made from refined petroleum or liquid hydrocarbons and/or (2) manufacturing cyclic aromatic hydrocarbons such as benzene, toluene, styrene, xylene, ethyl benzene, and cumene made from refined petroleum or liquid hydrocarbons.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 325120,
    title: 'Industrial Gas Manufacturing',
    description:
      'This industry comprises establishments primarily engaged in manufacturing industrial organic and inorganic gases in compressed, liquid, and solid forms.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 325130,
    title: 'Synthetic Dye and Pigment Manufacturing',
    description:
      'This industry comprises establishments primarily engaged in manufacturing synthetic organic and inorganic dyes and pigments, such as lakes and toners (except electrostatic and photographic).\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 325180,
    title: 'Other Basic Inorganic Chemical Manufacturing',
    description:
      'This industry comprises establishments primarily engaged in manufacturing basic inorganic chemicals (except industrial gases and synthetic dyes and pigments).\n\nIllustrative Examples:\n\nAlkalies manufacturing\nAluminum compounds, not specified elsewhere by process, manufacturing\nCarbides (e.g., baron, calcium, silicon, tungsten) manufacturing\nCarbon black manufacturing\nChlorine manufacturing\nHydrochloric acid manufacturing\nPotassium inorganic compounds, not specified elsewhere by process, manufacturing\nRadioactive isotopes manufacturing\nSulfides and sulfites manufacturing\nSulfuric acid manufacturing\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 325193,
    title: 'Ethyl Alcohol Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing nonpotable ethyl alcohol.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 325194,
    title: 'Cyclic Crude, Intermediate, and Gum and Wood Chemical Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in one or more of the following: (1) distilling wood or gum into products, such as tall oil and wood distillates; (2) distilling coal tars; (3) manufacturing wood or gum chemicals, such as naval stores, natural tanning materials, charcoal briquettes, and charcoal (except activated); and (4) manufacturing cyclic crudes or cyclic intermediates (i.e., hydrocarbons, except aromatic petrochemicals) from refined petroleum or natural gas.\n\nCross-references. Establishments primarily engaged in--',
  },
  {
    code: 325199,
    title: 'All Other Basic Organic Chemical Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing basic organic chemical products (except aromatic petrochemicals, industrial gases, synthetic organic dyes and pigments, gum and wood chemicals, cyclic crudes and intermediates, and ethyl alcohol).\n\nIllustrative Examples:\n\nBiodiesel fuels not made in petroleum refineries and not blended with petroleum\nCalcium organic compounds, not specified elsewhere by process, manufacturing\nCarbon organic compounds, not specified elsewhere by process, manufacturing\nEnzyme proteins (i.e., basic synthetic chemicals) (except pharmaceutical use) manufacturing\nOrgano-inorganic compound manufacturing\nFatty acids (e.g., margaric, oleic, stearic) manufacturing\nPlasticizers (i.e., basic synthetic chemicals) manufacturing\nRaw organic waxes manufacturing\nRefrigerant mixtures and blends manufacturing\nSilicone (except resins) manufacturing\nSynthetic sweeteners (i.e., sweetening agents) manufacturing\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 325211,
    title: 'Plastics Material and Resin Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in (1) manufacturing resins, plastics materials, and nonvulcanizable thermoplastic elastomers and mixing and blending resins on a custom basis and/or (2) manufacturing noncustomized synthetic resins.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 325212,
    title: 'Synthetic Rubber Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing synthetic rubber.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 325220,
    title: 'Artificial and Synthetic Fibers and Filaments Manufacturing',
    description:
      'This industry comprises establishments primarily engaged in (1) manufacturing cellulosic (e.g., rayon, acetate) and noncellulosic (e.g., nylon, polyolefin, polyester) fibers and filaments in the form of monofilament, filament yarn, staple, or tow or (2) manufacturing and texturizing cellulosic and noncellulosic fibers and filaments.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 325311,
    title: 'Nitrogenous Fertilizer Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in one or more of the following: (1) manufacturing nitrogenous fertilizer materials; (2) manufacturing fertilizers from sewage or animal waste; and (3) manufacturing nitrogenous materials and mixing with other ingredients into fertilizers.\n\nCross-References.',
  },
  {
    code: 325312,
    title: 'Phosphatic Fertilizer Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in (1) manufacturing phosphatic fertilizer materials or (2) manufacturing phosphatic materials and mixing with other ingredients into fertilizers.\n\nCross-References.',
  },
  {
    code: 325314,
    title: 'Fertilizer (Mixing Only) Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in mixing ingredients made elsewhere into fertilizers.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 325315,
    title: 'Compost Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing compost through the controlled aerobic, biological decomposition and curing of biodegradable materials.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 325320,
    title: 'Pesticide and Other Agricultural Chemical Manufacturing',
    description:
      'This industry comprises establishments primarily engaged in the formulation and preparation of agricultural and household pest control chemicals (except fertilizers).\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 325411,
    title: 'Medicinal and Botanical Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in (1) manufacturing uncompounded medicinal chemicals and their derivatives (i.e., generally for use by pharmaceutical preparation manufacturers) and/or (2) grading, grinding, and milling uncompounded botanicals.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 325412,
    title: 'Pharmaceutical Preparation Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing in-vivo diagnostic substances and pharmaceutical preparations (except biological) intended for internal and external consumption in dose forms, such as ampoules, tablets, capsules, vials, ointments, powders, solutions, and suspensions.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 325413,
    title: 'In-Vitro Diagnostic Substance Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing in-vitro (i.e., not taken internally) diagnostic substances, such as chemical, biological, or radioactive substances. The substances are used for diagnostic tests that are performed in test tubes, petri dishes, machines, and other diagnostic test-type devices.\n\nCross-References.',
  },
  {
    code: 325414,
    title: 'Biological Product (except Diagnostic) Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing vaccines, toxoids, blood fractions, and culture media of plant or animal origin (except diagnostic).\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 325510,
    title: 'Paint and Coating Manufacturing',
    description:
      'This industry comprises establishments primarily engaged in (1) mixing pigments, solvents, and binders into paints and other coatings, such as stains, varnishes, lacquers, enamels, shellacs, and water-repellent coatings for concrete and masonry, and/or (2) manufacturing allied paint products, such as putties, paint and varnish removers, paint brush cleaners, and frit.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 325520,
    title: 'Adhesive Manufacturing',
    description:
      'This industry comprises establishments primarily engaged in manufacturing adhesives, glues, and caulking compounds.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 325611,
    title: 'Soap and Other Detergent Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing and packaging bath, facial, and hand soaps, hand sanitizers, and other detergents, such as laundry and dishwashing detergents; toothpaste gels and tooth powders; and natural glycerin.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 325612,
    title: 'Polish and Other Sanitation Good Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing and packaging polishes and specialty cleaning preparations.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 325613,
    title: 'Surface Active Agent Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in (1) manufacturing bulk surface active agents for use as wetting agents, emulsifiers, and penetrants and/or (2) manufacturing textile and leather finishing agents used to reduce tension or speed the drying process.\n',
  },
  {
    code: 325620,
    title: 'Toilet Preparation Manufacturing',
    description:
      'This industry comprises establishments primarily engaged in preparing, blending, compounding, and packaging toilet preparations, such as perfumes, shaving preparations, hair preparations, face creams, lotions (including sunscreens), and other cosmetic preparations.\n\nCross-References.',
  },
  {
    code: 325910,
    title: 'Printing Ink Manufacturing',
    description:
      'This industry comprises establishments primarily engaged in manufacturing printing and inkjet inks and inkjet cartridges.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 325920,
    title: 'Explosives Manufacturing',
    description:
      'This industry comprises establishments primarily engaged in manufacturing explosives.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 325991,
    title: 'Custom Compounding of Purchased Resins',
    description:
      'This U.S. industry comprises establishments primarily engaged in (1) custom mixing and blending plastics resins made elsewhere or (2) reformulating plastics resins from recycled plastics products.\n\nCross-References.',
  },
  {
    code: 325992,
    title: 'Photographic Film, Paper, Plate, Chemical, and Copy Toner Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing sensitized film, sensitized paper, sensitized cloth, sensitized plates, toners (i.e., for photocopiers, laser printers, and similar electrostatic printing devices), toner cartridges, and photographic chemicals.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 325998,
    title: 'All Other Miscellaneous Chemical Product and Preparation Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing chemical products (except basic chemicals, resins, and synthetic rubber; cellulosic and noncellulosic fibers and filaments; pesticides, fertilizers, and other agricultural chemicals; pharmaceuticals and medicines; paints, coatings and adhesives; soaps, cleaning compounds, and toilet preparations; printing inks; explosives; custom compounding of purchased resins; and photographic films, papers, plates, chemicals, and copy toners).\n\nIllustrative Examples:\n\nActivated carbon and charcoal manufacturing\nAntifreeze preparations manufacturing\nElectronic cigarette vapor liquids, including closed refills, manufacturing\nIndustrial salt manufacturing\nLighter fluids (e.g., charcoal, cigarette) manufacturing\nMatches and matchbook manufacturing\nPyrotechnics (e.g., flares, flashlight bombs, signals) manufacturing\nSugar substitutes (i.e., synthetic sweeteners blended with other ingredients) made from purchased synthetic sweeteners\nSwimming pool chemical preparations manufacturing\nWriting inks manufacturing\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 326111,
    title: 'Plastics Bag and Pouch Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in (1) converting plastics resins into plastics bags or pouches and/or (2) forming, coating, or laminating plastics film or sheet into single-web or multiweb plastics bags or pouches.  Establishments in this industry may print on the bags or pouches they manufacture.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 326112,
    title: 'Plastics Packaging Film and Sheet (including Laminated) Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in converting plastics resins into plastics packaging (flexible) film and packaging sheet.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 326113,
    title: 'Unlaminated Plastics Film and Sheet (except Packaging) Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in converting plastics resins into plastics film and unlaminated sheet (except packaging).\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 326121,
    title: 'Unlaminated Plastics Profile Shape Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in converting plastics resins into nonrigid plastics profile shapes (except film, sheet, bags, and hoses), such as rod, tube, and sausage casings.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 326122,
    title: 'Plastics Pipe and Pipe Fitting Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in converting plastics resins into plastics pipes and pipe fittings.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 326130,
    title: 'Laminated Plastics Plate, Sheet (except Packaging), and Shape Manufacturing',
    description:
      'This industry comprises establishments primarily engaged in laminating plastics profile shapes such as plate, sheet (except packaging), and rod. The lamination process generally involves bonding or impregnating profiles with plastics resins and compressing them under heat.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 326140,
    title: 'Polystyrene Foam Product Manufacturing',
    description:
      'This industry comprises establishments primarily engaged in manufacturing polystyrene foam products.\n\nCross-References.',
  },
  {
    code: 326150,
    title: 'Urethane and Other Foam Product (except Polystyrene) Manufacturing',
    description:
      'This industry comprises establishments primarily engaged in manufacturing plastics foam products (except polystyrene).\n\nCross-References.',
  },
  {
    code: 326160,
    title: 'Plastics Bottle Manufacturing',
    description:
      'This industry comprises establishments primarily engaged in manufacturing plastics bottles.\n\nCross-References.',
  },
  {
    code: 326191,
    title: 'Plastics Plumbing Fixture Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing plastics or fiberglass plumbing fixtures.  Examples of products made by these establishments are plastics or fiberglass bathtubs, hot tubs, portable toilets, and shower stalls.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 326199,
    title: 'All Other Plastics Product Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing plastics products (except film, sheet, bags, profile shapes, pipes, pipe fittings, laminates, foam products, bottles, plumbing fixtures, and hoses).\n\nIllustrative Examples:\n\nInflatable plastics swimming pool rafts and similar flotation devices manufacturing\nPlastics air mattresses manufacturing\nPlastics bottle caps and lids manufacturing\nPlastics bowls and bowl covers manufacturing\nPlastics clothes hangers manufacturing\nPlastics cups (except foam) manufacturing\nPlastics dinnerware (except foam) manufacturing\nPlastics gloves manufacturing\nPlastics hardware manufacturing\nPlastics siding manufacturing\nPlastics trash containers manufacturing\nResilient floor coverings (e.g., sheet, tiles) manufacturing\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 326211,
    title: 'Tire Manufacturing (except Retreading)',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing tires and inner tubes from natural and synthetic rubber.\n\nCross-References.',
  },
  {
    code: 326212,
    title: 'Tire Retreading',
    description:
      'This U.S. industry comprises establishments primarily engaged in retreading or rebuilding tires.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 326220,
    title: 'Rubber and Plastics Hoses and Belting Manufacturing',
    description:
      'This industry comprises establishments primarily engaged in manufacturing rubber hose and/or plastics (reinforced) hose and belting from natural and synthetic rubber and/or plastics resins.  Establishments manufacturing garden hoses from purchased hose are included in this industry.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 326291,
    title: 'Rubber Product Manufacturing for Mechanical Use',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing rubber goods (except tubing) for mechanical applications, using the processes of molding, extruding or lathe-cutting.  Products of this industry are generally parts for motor vehicles, machinery, and equipment.\n\nCross-References.',
  },
  {
    code: 326299,
    title: 'All Other Rubber Product Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing rubber products (except tires; hoses and belting; and molded, extruded, and lathe-cut rubber goods for mechanical applications (except rubber tubing)) from natural and synthetic rubber.  Establishments manufacturing rubber tubing made from natural and synthetic rubber, regardless of process used, are included in this industry.\n\nIllustrative Examples:\n\nBirth control devices (i.e., diaphragms, prophylactics) manufacturing\nLatex foam rubber manufacturing\nReclaiming rubber from waste and scrap\nRubber balloons manufacturing\nRubber bands manufacturing\nRubber floor mats (e.g., door, bath) manufacturing\nRubber hair care products (e.g., combs, curlers) manufacturing\nRubber tubing manufacturing\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 327110,
    title: 'Pottery, Ceramics, and Plumbing Fixture Manufacturing',
    description:
      'This industry comprises establishments primarily engaged in shaping, molding, glazing, and firing pottery, ceramics, plumbing fixtures, and electrical supplies made entirely or partly of clay or other ceramic materials.\n\nIllustrative Examples:\n\nBathroom accessories, vitreous china and earthenware, manufacturing\nCeramic or ferrite permanent magnets manufacturing\nChemical stoneware (i.e., pottery products) manufacturing\nClay and ceramic statuary manufacturing\nEarthenware table and kitchen articles, coarse, manufacturing\nPorcelain electrical insulators manufacturing\nVitreous china plumbing fixtures manufacturing\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 327120,
    title: 'Clay Building Material and Refractories Manufacturing',
    description:
      'This industry comprises establishments primarily engaged in shaping, molding, baking, burning, or hardening clay refractories, nonclay refractories, ceramic tile, structural clay tile, brick, and other structural clay building materials.  A refractory is a material that will retain its shape and chemical identity when subjected to high temperatures and is used in applications that require extreme resistance to heat, such as furnace linings.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 327211,
    title: 'Flat Glass Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in (1) manufacturing flat glass by melting silica sand or cullet or (2) manufacturing both flat glass and laminated glass by melting silica sand or cullet.\n\nCross-References.',
  },
  {
    code: 327212,
    title: 'Other Pressed and Blown Glass and Glassware Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing glass by melting silica sand or cullet and making pressed, blown, or shaped glass or glassware (except glass packaging containers).\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 327213,
    title: 'Glass Container Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing glass packaging, bottling, and canning containers.\n',
  },
  {
    code: 327215,
    title: 'Glass Product Manufacturing Made of Purchased Glass',
    description:
      'This U.S. industry comprises establishments primarily engaged in coating, laminating, tempering, or shaping purchased glass.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 327310,
    title: 'Cement Manufacturing',
    description:
      'This industry comprises establishments primarily engaged in manufacturing Portland, natural, masonry, pozzolanic, and other hydraulic cements.  Cement manufacturing establishments may calcine earths or mine, quarry, manufacture, or purchase lime.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 327320,
    title: 'Ready-Mix Concrete Manufacturing',
    description:
      'This industry comprises establishments, such as batch plants or mix plants, primarily engaged in manufacturing concrete delivered to a purchaser in a plastic and unhardened state.  Ready-mix concrete manufacturing establishments may mine, quarry, or purchase sand and gravel.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 327331,
    title: 'Concrete Block and Brick Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing concrete block and brick.',
  },
  {
    code: 327332,
    title: 'Concrete Pipe Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing concrete pipe.',
  },
  {
    code: 327390,
    title: 'Other Concrete Product Manufacturing',
    description:
      'This industry comprises establishments primarily engaged in manufacturing concrete products (except block, brick, and pipe).\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 327410,
    title: 'Lime Manufacturing',
    description:
      'This industry comprises establishments primarily engaged in manufacturing lime from calcitic limestone, dolomitic limestone, or other calcareous materials, such as coral, chalk, and shells.  Lime manufacturing establishments may mine, quarry, collect, or purchase the sources of calcium carbonate.\n\nCross-References.',
  },
  {
    code: 327420,
    title: 'Gypsum Product Manufacturing',
    description:
      'This industry comprises establishments primarily engaged in manufacturing gypsum products, such as wallboard, plaster, plasterboard, molding, ornamental moldings, statuary, and architectural plaster work.  Gypsum product manufacturing establishments may mine, quarry, or purchase gypsum.\n\nCross-References.',
  },
  {
    code: 327910,
    title: 'Abrasive Product Manufacturing',
    description:
      'This industry comprises establishments primarily engaged in manufacturing abrasive grinding wheels of natural or synthetic materials, abrasive-coated products, and other abrasive products.\n\nIllustrative Examples:\n\nAluminum oxide (fused) abrasives manufacturing\nBuffing and polishing wheels, abrasive and nonabrasive, manufacturing\nDiamond dressing wheels manufacturing\nSandpaper manufacturing\nSilicon carbide abrasives manufacturing\nWhetstones manufacturing\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 327991,
    title: 'Cut Stone and Stone Product Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in cutting, shaping, and finishing granite, marble, limestone, slate, and other stone for building and miscellaneous uses.  Stone product manufacturing establishments may mine, quarry, or purchase stone.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 327992,
    title: 'Ground or Treated Mineral and Earth Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in calcining, dead burning, or otherwise processing beyond beneficiation, clays, ceramic and refractory minerals, barite, and miscellaneous nonmetallic minerals.\n\nCross-References.',
  },
  {
    code: 327993,
    title: 'Mineral Wool Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing mineral wool and mineral wool (i.e., fiberglass) insulation products made of such siliceous materials as rock, slag, and glass or combinations thereof.\n\nCross-References.',
  },
  {
    code: 327999,
    title: 'All Other Miscellaneous Nonmetallic Mineral Product Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing nonmetallic mineral products (except pottery, ceramics, and plumbing fixtures; clay building materials and refractories; glass and glass products; cement; ready-mix concrete; concrete products; lime; gypsum products; abrasive products; cut stone and stone products; ground and treated minerals and earth; and mineral wool).\n\nIllustrative Examples:\n\nDry mix concrete manufacturing\nMica products manufacturing\nManmade and engineered proppants (e.g., resin-coated sand, ceramic materials) manufacturing\nStucco and stucco products manufacturing\nSynthetic stones, for gem stones and industrial use, manufacturing \n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 331110,
    title: 'Iron and Steel Mills and Ferroalloy Manufacturing',
    description:
      'This industry comprises establishments primarily engaged in one or more of the following: (1) direct reduction of iron ore; (2) manufacturing pig iron in molten or solid form; (3) converting pig iron into steel; (4) making steel; (5) making steel and manufacturing shapes (e.g., bar, plate, rod, sheet, strip, wire); (6) making steel and forming pipe and tube; and (7) manufacturing electrometallurgical ferroalloys. Ferroalloys add critical elements, such as silicon and manganese for carbon steel and chromium, vanadium, tungsten, titanium, and molybdenum for low- and high-alloy metals.  Ferroalloys include iron-rich alloys and more pure forms of elements added during the steel manufacturing process that alter or improve the characteristics of the metal.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 331210,
    title: 'Iron and Steel Pipe and Tube Manufacturing from Purchased Steel',
    description:
      'This industry comprises establishments primarily engaged in manufacturing welded, riveted, or seamless pipe and tube from purchased iron or steel.\n\nCross-References.',
  },
  {
    code: 331221,
    title: 'Rolled Steel Shape Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in rolling or drawing shapes (except wire), such as plate, sheet, strip, rod, and bar, from purchased steel.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 331222,
    title: 'Steel Wire Drawing',
    description:
      'This U.S. industry comprises establishments primarily engaged in drawing wire from purchased steel.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 331313,
    title: 'Alumina Refining and Primary Aluminum Production',
    description:
      'This U.S. industry comprises establishments primarily engaged in one or more of the following: (1) refining alumina (i.e., aluminum oxide) generally from bauxite; (2) making aluminum from alumina; and/or (3) making aluminum from alumina and rolling, drawing, extruding, or casting the aluminum they make into primary forms.  Establishments in this industry may make primary aluminum or aluminum-based alloys from alumina.\n\nCross-references. Establishments primarily engaged in--',
  },
  {
    code: 331314,
    title: 'Secondary Smelting and Alloying of Aluminum',
    description:
      'This U.S. industry comprises establishments primarily engaged in (1) recovering aluminum and aluminum alloys from scrap and/or dross (i.e., secondary smelting) and making billet or ingot (except by rolling) and/or (2) manufacturing alloys, powder, paste, or flake from purchased aluminum.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 331315,
    title: 'Aluminum Sheet, Plate, and Foil Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in (1) flat rolling or continuous casting sheet, plate, foil and welded tube from purchased aluminum and/or (2) recovering aluminum from scrap and flat rolling or continuous casting sheet, plate, foil, and welded tube in integrated mills.\n\nCross-References.',
  },
  {
    code: 331318,
    title: 'Other Aluminum Rolling, Drawing, and Extruding',
    description:
      'This U.S. industry comprises establishments primarily engaged in (1) rolling, drawing, or extruding shapes (except flat rolled sheet, plate, foil, and welded tube) from purchased aluminum and/or (2) recovering aluminum from scrap and rolling, drawing, or extruding shapes (except flat rolled sheet, plate, foil, and welded tube) in integrated mills.\n\nIllustrative Examples:\n\nAluminum bar made by extruding purchased aluminum\nNails, aluminum, made in wire drawing plants \nStructural shapes made by rolling purchased aluminum\nRod made by extruding purchased aluminum\nTube made by drawing or extruding purchased aluminum\nWire, bare, made in aluminum wire drawing plants\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 331410,
    title: 'Nonferrous Metal (except Aluminum) Smelting and Refining',
    description:
      'This industry comprises establishments primarily engaged in (1) smelting ores into nonferrous metals and/or (2) the primary refining of nonferrous metals (except aluminum) by electrolytic methods or other processes.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 331420,
    title: 'Copper Rolling, Drawing, Extruding, and Alloying',
    description:
      'This industry comprises establishments primarily engaged in one or more of the following: (1) recovering copper or copper alloys from scraps; (2) alloying purchased copper; (3) rolling, drawing, or extruding shapes (e.g., bar, plate, sheet, strip, tube, wire) from purchased copper; and (4) recovering copper or copper alloys from scrap and rolling, drawing, or extruding shapes (e.g., bar, plate, sheet, strip, tube, wire).\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 331491,
    title: 'Nonferrous Metal (except Copper and Aluminum) Rolling, Drawing, and Extruding',
    description:
      'This U.S. industry comprises establishments primarily engaged in (1) rolling, drawing, or extruding shapes (e.g., bar, plate, sheet, strip, tube) from purchased nonferrous metals and/or (2) recovering nonferrous metals from scrap and rolling, drawing, and/or extruding shapes (e.g., bar, plate, sheet, strip, tube) in integrated mills.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 331492,
    title:
      'Secondary Smelting, Refining, and Alloying of Nonferrous Metal (except Copper and Aluminum)',
    description:
      'This U.S. industry comprises establishments primarily engaged in (1) alloying purchased nonferrous metals and/or (2) recovering nonferrous metals from scrap.  Establishments in this industry make primary forms (e.g., bar, billet, bloom, cake, ingot, slab, slug, wire) using smelting or refining processes.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 331511,
    title: 'Iron Foundries',
    description:
      'This U.S. industry comprises establishments primarily engaged in pouring molten pig iron or iron alloys into molds to manufacture castings (e.g., cast iron manhole covers, cast iron pipe, cast iron skillets).  Establishments in this industry purchase iron made in other establishments.\n\nCross-References.',
  },
  {
    code: 331512,
    title: 'Steel Investment Foundries',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing steel investment castings.  Investment molds are formed by covering a wax shape with a refractory slurry.  After the refractory slurry hardens, the wax is melted, leaving a seamless mold.  Investment molds provide highly detailed, consistent castings.  Establishments in this industry purchase steel made in other establishments.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 331513,
    title: 'Steel Foundries (except Investment)',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing steel castings (except steel investment castings).  Establishments in this industry purchase steel made in other establishments.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 331523,
    title: 'Nonferrous Metal Die-Casting Foundries',
    description:
      'This U.S. industry comprises establishments primarily engaged in introducing molten nonferrous metal, under high pressure, into molds or dies to make nonferrous metal die-castings.  Establishments in this industry purchase nonferrous metals made in other establishments.\n\nCross-references. Establishments primarily engaged in--',
  },
  {
    code: 331524,
    title: 'Aluminum Foundries (except Die-Casting)',
    description:
      'This U.S. industry comprises establishments primarily engaged in pouring molten aluminum into molds to manufacture aluminum castings (except nonferrous die-castings).  Establishments in this industry purchase aluminum made in other establishments.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 331529,
    title: 'Other Nonferrous Metal Foundries (except Die-Casting)',
    description:
      'This U.S. industry comprises establishments primarily engaged in pouring molten nonferrous metals (except aluminum) into molds to manufacture nonferrous castings (except nonferrous die-castings and aluminum castings).  Establishments in this industry purchase nonferrous metals, such as copper, nickel, lead, and zinc, made in other establishments.\n\nCross-references. Establishments primarily engaged in--',
  },
  {
    code: 332111,
    title: 'Iron and Steel Forging',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing iron and steel forgings from purchased iron and steel by hammering mill shapes.  Establishments making iron and steel forgings and further manufacturing (e.g., machining, assembling) a specific manufactured product are classified in the industry of the finished product.  Iron and steel forging establishments may perform surface finishing operations, such as cleaning and deburring, on the forgings they manufacture.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 332112,
    title: 'Nonferrous Forging',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing nonferrous forgings from purchased nonferrous metals by hammering mill shapes.  Establishments making nonferrous forgings and further manufacturing (e.g., machining, assembling) a specific manufactured product are classified in the industry of the finished product.  Nonferrous forging establishments may perform surface finishing operations, such as cleaning and deburring, on the forgings they manufacture.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 332114,
    title: 'Custom Roll Forming',
    description:
      'This U.S. industry comprises establishments primarily engaged in custom roll forming metal products by use of rotary motion of rolls with various contours to bend or shape the products.\n\nCross-References.',
  },
  {
    code: 332117,
    title: 'Powder Metallurgy Part Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing powder metallurgy products using any of the various powder metallurgy processing techniques, such as pressing and sintering or metal injection molding.  Establishments in this industry generally make a wide range of parts on a job or order basis.\n',
  },
  {
    code: 332119,
    title: 'Metal Crown, Closure, and Other Metal Stamping (except Automotive)',
    description:
      'This U.S. industry comprises establishments primarily engaged in (1) stamping metal crowns and closures, such as bottle caps and home canning lids and rings, and/or (2) manufacturing other unfinished metal stampings and spinning unfinished metal products (except automotive, cans, and coins).  Establishments making metal stampings and metal spun products and further manufacturing (e.g., machining, assembling) a specific product are classified in the industry of the finished product.  Metal stamping and metal spun products establishments may perform surface finishing operations, such as cleaning and deburring, on the products they manufacture.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 332215,
    title: 'Metal Kitchen Cookware, Utensil, Cutlery, and Flatware (except Precious) Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing metal kitchen cookware (except by casting (e.g., cast iron skillets) or stamped without further fabrication), utensils, and/or nonprecious and precious plated metal cutlery and flatware.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 332216,
    title: 'Saw Blade and Handtool Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in (1) manufacturing saw blades, all types (including those for power sawing machines) and/or (2) manufacturing nonpowered handtools and edge tools.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 332311,
    title: 'Prefabricated Metal Building and Component Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing prefabricated metal buildings, panels, and sections.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 332312,
    title: 'Fabricated Structural Metal Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in fabricating structural metal products, such as assemblies of concrete reinforcing bars and fabricated bar joists.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 332313,
    title: 'Plate Work Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing fabricated metal plate work by cutting, punching, bending, shaping, and welding purchased metal plate.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 332321,
    title: 'Metal Window and Door Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing metal framed windows (i.e., typically using purchased glass) and metal doors.  Examples of products made by these establishments are metal door frames; metal framed window and door screens; and metal molding and trim (except automotive).\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 332322,
    title: 'Sheet Metal Work Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing sheet metal work (except stampings).\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 332323,
    title: 'Ornamental and Architectural Metal Work Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing ornamental and architectural metal work, such as staircases, metal open steel flooring, fire escapes, railings, and scaffolding.\n\nCross-References.',
  },
  {
    code: 332410,
    title: 'Power Boiler and Heat Exchanger Manufacturing',
    description:
      'This industry comprises establishments primarily engaged in manufacturing power boilers and heat exchangers.  Establishments in this industry may perform installation in addition to manufacturing power boilers and heat exchangers.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 332420,
    title: 'Metal Tank (Heavy Gauge) Manufacturing',
    description:
      'This industry comprises establishments primarily engaged in cutting, forming, and joining heavy gauge metal to manufacture tanks, vessels, and other containers.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 332431,
    title: 'Metal Can Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing metal cans, lids, and ends.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 332439,
    title: 'Other Metal Container Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing metal (light gauge) containers (except cans).\n\nIllustrative Examples:\n\nLight gauge metal bins manufacturing\nLight gauge metal drums manufacturing\nLight gauge metal garbage cans manufacturing\nLight gauge metal lunch boxes manufacturing\nLight gauge metal mailboxes manufacturing\nLight gauge metal tool boxes manufacturing\nLight gauge metal vats manufacturing\nMetal air cargo containers manufacturing\nMetal barrels manufacturing\nVacuum bottles and jugs manufacturing\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 332510,
    title: 'Hardware Manufacturing',
    description:
      'This industry comprises establishments primarily engaged in manufacturing metal hardware, such as metal hinges, metal handles, keys, and locks (except coin- or card-operated, time locks).\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 332613,
    title: 'Spring Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing springs from purchased wire, strip, or rod.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 332618,
    title: 'Other Fabricated Wire Product Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing fabricated wire products (except springs) made from purchased wire.\n\nIllustrative Examples:\n\nBarbed wire made from purchased wire\nChain link fencing and fence gates made from purchased wire\nMetal baskets made from purchased wire\nPaper clips made from purchased wire\nNails, brads, and staples made from purchased wire\nNoninsulated wire cable made from purchased wire\nWoven wire cloth made from purchased wire\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 332710,
    title: 'Machine Shops',
    description:
      'This industry comprises establishments known as machine shops primarily engaged in machining metal and plastic parts and parts of other composite materials on a job or order basis.  Generally machine shop jobs are low volume using machine tools, such as lathes (including computer numerically controlled); automatic screw machines; and machines for boring, grinding, milling, and additive manufacturing.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 332721,
    title: 'Precision Turned Product Manufacturing',
    description:
      'This U.S. industry comprises establishments known as precision turned manufacturers primarily engaged in machining precision products of all materials on a job or order basis.  Generally precision turned product jobs are large volume using machines, such as automatic screw machines, rotary transfer machines, computer numerically controlled (CNC) lathes, or turning centers.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 332722,
    title: 'Bolt, Nut, Screw, Rivet, and Washer Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing metal bolts, nuts, screws, rivets, washers, and other industrial fasteners using machines, such as headers, threaders, and nut forming machines.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 332811,
    title: 'Metal Heat Treating',
    description:
      'This U.S. industry comprises establishments primarily engaged in heat treating, such as annealing, tempering, and brazing, and cryogenically treating metals and metal products for the trade.\n\nCross-References.',
  },
  {
    code: 332812,
    title:
      'Metal Coating, Engraving (except Jewelry and Silverware), and Allied Services to Manufacturers',
    description:
      'This U.S. industry comprises establishments primarily engaged in one or more of the following: (1) enameling, lacquering, and varnishing metals and metal products; (2) hot dip galvanizing metals and metal products; (3) engraving, chasing, or etching metals and metal products (except jewelry; personal goods carried on or about the person, such as compacts and cigarette cases; precious metal products (except precious plated flatware and other plated ware); and printing plates); (4) powder coating metals and metal products; and (5) providing other metal surfacing services for the trade.  Included in this industry are establishments that perform these processes on other materials, such as plastics, in addition to metals.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 332813,
    title: 'Electroplating, Plating, Polishing, Anodizing, and Coloring',
    description:
      'This U.S. industry comprises establishments primarily engaged in electroplating, plating, anodizing, coloring, buffing, polishing, cleaning, and sandblasting metals and metal products for the trade.  Included in this industry are establishments that perform these processes on other materials, such as plastics, in addition to metals.\n\nCross-References.',
  },
  {
    code: 332911,
    title: 'Industrial Valve Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing industrial valves and valves for water works and municipal water systems.\n\nIllustrative Examples:\n\nComplete fire hydrants manufacturing\nIndustrial-type ball valves manufacturing\nIndustrial-type butterfly valves manufacturing\nIndustrial-type check valves manufacturing\nIndustrial-type gate valves manufacturing\nIndustrial-type globe valves manufacturing\nIndustrial-type plug valves manufacturing\nIndustrial-type solenoid valves (except fluid power) manufacturing\nIndustrial-type steam traps manufacturing\nValves for nuclear applications manufacturing\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 332912,
    title: 'Fluid Power Valve and Hose Fitting Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing fluid power valves and hose fittings.\n\nIllustrative Examples:\n\nFluid power aircraft subassemblies manufacturing\nHose assemblies for fluid power systems manufacturing\nHydraulic and pneumatic hose and tube fittings manufacturing\nHydraulic and pneumatic valves manufacturing\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 332913,
    title: 'Plumbing Fixture Fitting and Trim Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing plumbing fixture fittings and trim of all materials, such as faucets, flush valves, and shower heads.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 332919,
    title: 'Other Metal Valve and Pipe Fitting Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing metal valves (except industrial valves, fluid power valves, fluid power hose fittings, and plumbing fixture fittings and trim).\n\nIllustrative Examples:\n\nAerosol valves manufacturing\nFirefighting nozzles manufacturing\nLawn hose nozzles manufacturing\nLawn sprinklers manufacturing\nWater traps manufacturing\nMetal hose couplings (except fluid power) manufacturing\nMetal pipe flanges and flange unions manufacturing\nPlumbing and heating inline valves (e.g., check, cutoff, stop) manufacturing\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 332991,
    title: 'Ball and Roller Bearing Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing ball and roller bearings of all materials.\n\nCross-References.',
  },
  {
    code: 332992,
    title: 'Small Arms Ammunition Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing small arms ammunition.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 332993,
    title: 'Ammunition (except Small Arms) Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing ammunition (except small arms).  Examples of products made by these establishments are bombs, depth charges, rockets (except guided missiles), grenades, mines, and torpedoes.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 332994,
    title: 'Small Arms, Ordnance, and Ordnance Accessories Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing small arms, other ordnance, and/or ordnance accessories.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 332996,
    title: 'Fabricated Pipe and Pipe Fitting Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in fabricating, such as cutting, threading, and bending, metal pipes and pipe fittings made from purchased metal pipe.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 332999,
    title: 'All Other Miscellaneous Fabricated Metal Product Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing fabricated metal products (except forgings and stampings, cutlery and handtools, architectural and structural metals, boilers, tanks, shipping containers, hardware, spring and wire products, machine shop products, turned products, screws, nuts and bolts, metal valves, ball and roller bearings, ammunition, small arms and other ordnances and accessories, and fabricated pipes and pipe fittings).\n\nIllustrative Examples:\n\nFoil containers (except bags) manufacturing\nIndustrial pattern manufacturing\nMetal hair curlers manufacturing\nMetal ironing boards manufacturing\nMetal pallets manufacturing\nMetal pipe hangers and supports manufacturing\nMetal safes manufacturing\nMetal vaults (except burial) manufacturing\nPermanent metallic magnets manufacturing\nPortable metal ladders manufacturing\nSanitary ware (e.g., bathtubs, lavatories, sinks), metal and enameled metal, manufacturing\nSteel wool manufacturing \n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 333111,
    title: 'Farm Machinery and Equipment Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing agricultural and farm machinery and equipment, and other turf and grounds care equipment, including planting, harvesting, and grass mowing equipment (except lawn and garden-type).\n\nIllustrative Examples:\n\nCombines (i.e., harvester-threshers) manufacturing\nCotton ginning machinery manufacturing\nFeed processing equipment, farm-type, manufacturing\nFertilizing machinery, farm-type, manufacturing\nGrass mowing equipment (except lawn and garden) manufacturing\nHaying machines manufacturing\nMilking machines manufacturing\nPlanting machines, farm-type, manufacturing\nPlows, farm-type, manufacturing\nPoultry brooders, feeders, and waterers manufacturing\nTractors and attachments, farm-type, manufacturing\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 333112,
    title: 'Lawn and Garden Tractor and Home Lawn and Garden Equipment Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing powered lawnmowers, lawn and garden tractors, and other home lawn and garden equipment, such as tillers, shredders, yard vacuums, and leaf blowers.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 333120,
    title: 'Construction Machinery Manufacturing',
    description:
      'This industry comprises establishments primarily engaged in manufacturing construction machinery, surface mining machinery, and logging equipment.\n\nIllustrative Examples:\n\nBackhoes manufacturing\nBulldozers manufacturing\nConstruction and surface mining-type rock drill bits manufacturing\nConstruction-type tractors and attachments manufacturing\nOff-highway trucks manufacturing\nPile-driving equipment manufacturing\nPortable crushing, pulverizing, and screening machinery manufacturing\nPowered post hole diggers manufacturing\nRoad graders manufacturing\nSurface mining machinery (except drilling) manufacturing\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 333131,
    title: 'Mining Machinery and Equipment Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in (1) manufacturing underground mining machinery and equipment, such as coal breakers, mining cars, core drills, coal cutters, and rock drills, and (2) manufacturing mineral beneficiating machinery and equipment used in surface or underground mines.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 333132,
    title: 'Oil and Gas Field Machinery and Equipment Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in (1) manufacturing oil and gas field machinery and equipment, such as oil and gas field drilling machinery and equipment; oil and gas field production machinery and equipment; and oil and gas field derricks, and (2) manufacturing water well drilling machinery.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 333241,
    title: 'Food Product Machinery Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing food and beverage manufacturing-type machinery and equipment, such as dairy product plant machinery and equipment (e.g., homogenizers, pasteurizers, ice cream freezers), bakery machinery and equipment (e.g., dough mixers, bake ovens, pastry rolling machines), meat and poultry processing and preparation machinery, and other commercial food products machinery (e.g., slicers, choppers, and mixers).\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 333242,
    title: 'Semiconductor Machinery Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing wafer processing equipment, semiconductor assembly and packaging equipment, and other semiconductor making machinery.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 333243,
    title: 'Sawmill, Woodworking, and Paper Machinery Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in (1) manufacturing sawmill and woodworking machinery (except handheld), such as circular and band sawing equipment, planing machinery, and sanding machinery, and/or (2) manufacturing paper industry machinery for making paper and paper products, such as pulp making machinery, paper and paperboard making machinery, and paper and paperboard converting machinery.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 333248,
    title: 'All Other Industrial Machinery Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing industrial machinery (except agricultural and farm-type; construction and mining machinery; food manufacturing-type machinery; semiconductor making machinery; and sawmill, woodworking, and paper making machinery).\n\nIllustrative Examples:\n\nAdditive manufacturing machinery manufacturing\nBookbinding machines manufacturing\nChemical processing machinery and equipment manufacturing\nCigarette making machinery manufacturing\nGlass making machinery (e.g., blowing, forming, molding) manufacturing\nPetroleum refining machinery manufacturing\nPlastics working machinery manufacturing\nPrinting presses manufacturing\nRubber working machinery manufacturing\nSewing machines (including household-type) manufacturing\nShoe making and repairing machinery manufacturing\nTannery machinery manufacturing \nTextile making machinery manufacturing\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 333310,
    title: 'Commercial and Service Industry Machinery Manufacturing',
    description:
      "This industry comprises establishments primarily engaged in manufacturing commercial and service industry machinery, such as optical instruments and lenses (except ophthalmic), photographic and photocopying equipment, automatic vending machinery, commercial laundry and drycleaning machinery, office machinery, automotive maintenance equipment (except mechanics' handtools), and commercial-type cooking equipment.\n\nCross-References. Establishments primarily engaged in--",
  },
  {
    code: 333413,
    title: 'Industrial and Commercial Fan and Blower and Air Purification Equipment Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in (1) manufacturing stationary air purification equipment, such as industrial dust and fume collection equipment, electrostatic precipitation equipment, warm air furnace filters, air washers, and other dust collection equipment, and/or (2) manufacturing attic fans and industrial and commercial fans and blowers, such as commercial exhaust fans and commercial ventilating fans.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 333414,
    title: 'Heating Equipment (except Warm Air Furnaces) Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing heating equipment (except electric and warm air furnaces), such as heating boilers, heating stoves, floor and wall furnaces, and wall and baseboard heating units.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 333415,
    title:
      'Air-Conditioning and Warm Air Heating Equipment and Commercial and Industrial Refrigeration Equipment Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in (1) manufacturing air-conditioning (except motor vehicle) and warm air furnace equipment and/or (2) manufacturing commercial and industrial refrigeration and freezer equipment.\n\nIllustrative Examples:\n\nAir-conditioning and warm air heating combination units manufacturing\nAir-conditioning compressors (except motor vehicle) manufacturing\nAir-conditioning condensers and condensing units manufacturing\nDehumidifiers (except portable electric) manufacturing\nHeat pumps manufacturing\nHumidifying equipment (except portable) manufacturing\nRefrigerated counter and display cases manufacturing\nRefrigerated drinking fountains manufacturing\nSnow making machinery manufacturing\nSoda fountain cooling and dispensing equipment manufacturing\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 333511,
    title: 'Industrial Mold Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing industrial molds for casting metals or forming other materials, such as plastics, glass, or rubber.\n\nCross-References.',
  },
  {
    code: 333514,
    title: 'Special Die and Tool, Die Set, Jig, and Fixture Manufacturing',
    description:
      'This U.S. industry comprises establishments, known as tool and die shops, primarily engaged in manufacturing special tools and fixtures, such as cutting dies and jigs.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 333515,
    title: 'Cutting Tool and Machine Tool Accessory Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing accessories and attachments for metal cutting and metal forming machine tools.\n\nIllustrative Examples:\n\nKnives and bits for metalworking lathes, planers, and shapers manufacturing\nMeasuring attachments (e.g., sine bars) for machine tool manufacturing\nMetalworking drill bits manufacturing\nTaps and dies (i.e., machine tool accessories) manufacturing\n\n\nCross-References.',
  },
  {
    code: 333517,
    title: 'Machine Tool Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in (1) manufacturing metal cutting machine tools (except handtools) and/or (2) manufacturing metal forming machine tools (except handtools), such as punching, sheering, bending, forming, pressing, forging and die-casting machines.\n\nIllustrative Examples:\n\nBending and forming machines, metalworking, manufacturing\nBuffing and polishing machines, metalworking, manufacturing\nDrilling machines, metalworking, manufacturing\nGrinding machines, metalworking, manufacturing\nHome workshop metal cutting machine tools (except handtools, welding equipment) manufacturing\nMetalworking lathes manufacturing\nMilling machines, metalworking, manufacturing\nStamping machines, metalworking, manufacturing\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 333519,
    title: 'Rolling Mill and Other Metalworking Machinery Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing rolling mill machinery and equipment and/or other metalworking machinery (except industrial molds; special dies and tools, die sets, jigs, and fixtures; cutting tools and machine tool accessories; and machine tools).\n\nIllustrative Examples:\n\nAssembly machines (i.e., wire making equipment) manufacturing\nCradle assembly machinery (i.e., wire making equipment) manufacturing\nMetalworking coil winding and cutting machinery manufacturing\nRolling mill roll machines, metalworking, manufacturing\nWire drawing and fabricating machinery and equipment (except dies) manufacturing\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 333611,
    title: 'Turbine and Turbine Generator Set Units Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing turbines (except aircraft); and complete turbine generator set units, such as steam, hydraulic, gas, and wind.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 333612,
    title: 'Speed Changer, Industrial High-Speed Drive, and Gear Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing gears, speed changers, and industrial high-speed drives (except hydrostatic).\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 333613,
    title: 'Mechanical Power Transmission Equipment Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing mechanical power transmission equipment (except motor vehicle and aircraft), such as plain bearings, clutches (except motor vehicle and electromagnetic industrial control), couplings, joints, and drive chains.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 333618,
    title: 'Other Engine Equipment Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing internal combustion engines (except automotive gasoline and aircraft).\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 333912,
    title: 'Air and Gas Compressor Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing general purpose air and gas compressors, such as reciprocating compressors, centrifugal compressors, vacuum pumps (except laboratory), and nonagricultural spraying and dusting compressors and spray gun units.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 333914,
    title: 'Measuring, Dispensing, and Other Pumping Equipment Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in (1) manufacturing measuring and dispensing pumps, such as gasoline pumps and lubricating oil measuring and dispensing pumps and/or (2) manufacturing general purpose pumps and pumping equipment (except fluid power pumps and motors), such as reciprocating pumps, turbine pumps, centrifugal pumps, rotary pumps, diaphragm pumps, domestic water system pumps, oil well and oil field pumps, and sump pumps.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 333921,
    title: 'Elevator and Moving Stairway Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing elevators and moving stairways.\n\nIllustrative Examples:\n\nAutomobile lifts (i.e., garage-type, service station) manufacturing\nEscalators manufacturing\nMoving walkways manufacturing\nPassenger and freight elevators manufacturing\n\n\nCross-References.',
  },
  {
    code: 333922,
    title: 'Conveyor and Conveying Equipment Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing conveyors and conveying equipment, such as gravity conveyors, trolley conveyors, tow conveyors, pneumatic tube conveyors, carousel conveyors, farm conveyors, and belt conveyors.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 333923,
    title: 'Overhead Traveling Crane, Hoist, and Monorail System Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing overhead traveling cranes, hoists, and monorail systems.\n\nIllustrative Examples:\n\nAerial work platforms manufacturing\nAutomobile wrecker (i.e., tow truck) hoists manufacturing\nBlock and tackle manufacturing\nMetal pulleys (except power transmission) manufacturing\nWinches manufacturing \n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 333924,
    title: 'Industrial Truck, Tractor, Trailer, and Stacker Machinery Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing industrial trucks, tractors, trailers, and stackers (i.e., truck-type) such as forklifts, pallet loaders and unloaders, and portable loading docks.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 333991,
    title: 'Power-Driven Handtool Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing power-driven (e.g., battery, corded, pneumatic) handtools, such as drills, screwguns, circular saws, chain saws, staplers, and nailers.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 333992,
    title: 'Welding and Soldering Equipment Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing welding and soldering equipment and accessories (except transformers), such as arc, resistance, gas, plasma, laser, electron beam, and ultrasonic welding equipment; welding electrodes; coated or cored welding wire; and soldering equipment (except handheld).\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 333993,
    title: 'Packaging Machinery Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing packaging machinery, such as wrapping, bottling, canning, and labeling machinery.\n',
  },
  {
    code: 333994,
    title: 'Industrial Process Furnace and Oven Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing industrial process ovens, induction and dielectric heating equipment, and kilns (except cement, chemical, wood).  Included in this industry are establishments manufacturing laboratory furnaces and ovens.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 333995,
    title: 'Fluid Power Cylinder and Actuator Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing fluid power (i.e., hydraulic and pneumatic) cylinders and actuators.\n\nCross-References.',
  },
  {
    code: 333996,
    title: 'Fluid Power Pump and Motor Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing fluid power (i.e., hydraulic and pneumatic) pumps and motors.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 333998,
    title: 'All Other Miscellaneous General Purpose Machinery Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing general purpose machinery (except ventilating, heating, air-conditioning, and commercial refrigeration equipment; metalworking machinery; engines, turbines, and power transmission equipment; pumps and compressors; material handling equipment; power-driven handtools; welding and soldering equipment; packaging machinery; industrial process furnaces and ovens; fluid power cylinders and actuators; and fluid power pumps and motors).\n\nIllustrative Examples:\n\nAutomatic fire sprinkler systems manufacturing\nBaling machinery (e.g., paper, scrap metal) manufacturing\nBridge and gate lifting machinery manufacturing\nCentrifuges, industrial and laboratory-type, manufacturing\nCremating ovens manufacturing\nGeneral purpose-type sieves and screening equipment manufacturing\nHydraulic and pneumatic jacks manufacturing\nIndustrial and general purpose-type filters (except internal combustion engine, warm air furnace) manufacturing\nScales and balances manufacturing\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 334111,
    title: 'Electronic Computer Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing and/or assembling electronic computers, such as mainframes, personal computers, workstations, laptops, and computer servers.  Computers can be analog, digital, or hybrid.  Digital computers, the most common type, are devices that do all of the following: (1) store the processing program or programs and the data immediately necessary for the execution of the program; (2) can be freely programmed in accordance with the requirements of the user; (3) perform arithmetical computations specified by the user; and (4) execute, without human intervention, a processing program that requires the computer to modify its execution by logical decision during the processing run.  Analog computers are capable of simulating mathematical models and contain at least analog, control, and programming elements.  The manufacture of computers includes the assembly or integration of processors, coprocessors, memory, storage, and input/output devices into a user-programmable final product.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 334112,
    title: 'Computer Storage Device Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing computer storage devices that allow the storage and retrieval of data from a phase change, magnetic, optical, or magnetic/optical media.  Examples of products made by these establishments are computer disk drives, USB flash drives, and tape storage and backup units.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 334118,
    title: 'Computer Terminal and Other Computer Peripheral Equipment Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing computer terminals and other computer peripheral equipment (except storage devices).\n\nIllustrative Examples:\n\nAutomated teller machines (ATM) manufacturing\nComputer terminals manufacturing\nJoystick devices manufacturing\nKeyboards, computer peripheral equipment, manufacturing\nMonitors, computer peripheral equipment, manufacturing\nMouse devices, computer peripheral equipment, manufacturing\nOptical readers and scanners manufacturing\nPlotters, computer, manufacturing\nPoint-of-sale terminals manufacturing\nPrinters, computer, manufacturing \n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 334210,
    title: 'Telephone Apparatus Manufacturing',
    description:
      'This industry comprises establishments primarily engaged in manufacturing wire telephone and data communications equipment.  These products may be stand-alone or board-level components of a larger system.  Examples of products made by these establishments are central office switching equipment, cordless and wire telephones (except cellular), PBX equipment, telephone answering machines, LAN modems, multi-user modems, and other data communications equipment, such as bridges, routers, and gateways.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 334220,
    title: 'Radio and Television Broadcasting and Wireless Communications Equipment Manufacturing',
    description:
      'This industry comprises establishments primarily engaged in manufacturing radio and television broadcast and wireless communications equipment.  Examples of products made by these establishments are transmitting and receiving antennas, cable television equipment, GPS equipment, pagers, cellular phones, mobile communications equipment, and radio and television studio and broadcasting equipment.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 334290,
    title: 'Other Communications Equipment Manufacturing',
    description:
      'This industry comprises establishments primarily engaged in manufacturing communications equipment (except telephone apparatus, radio and television broadcast equipment, and wireless communications equipment).\n\nIllustrative Examples:\n\nFire detection and alarm systems manufacturing\nSignals (e.g., highway, pedestrian, railway, traffic) manufacturing\nIntercom systems and equipment manufacturing\nVideo-based stadium displays manufacturing \n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 334310,
    title: 'Audio and Video Equipment Manufacturing',
    description:
      'This industry comprises establishments primarily engaged in manufacturing electronic audio and video equipment for home entertainment, motor vehicles, and public address and musical instrument amplification.  Examples of products made by these establishments are digital video recorders, televisions, stereo equipment, speaker systems, household-type video cameras, jukeboxes, and amplifiers for musical instruments and public address systems.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 334412,
    title: 'Bare Printed Circuit Board Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing bare (i.e., rigid or flexible) printed circuit boards without mounted electronic components.  These establishments print, perforate, plate, screen, etch, or photoprint interconnecting pathways for electric current on laminates.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 334413,
    title: 'Semiconductor and Related Device Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing semiconductors and related solid-state devices.  Examples of products made by these establishments are integrated circuits, memory chips, microprocessors, diodes, transistors, solar cells, and other optoelectronic devices.\n',
  },
  {
    code: 334416,
    title: 'Capacitor, Resistor, Coil, Transformer, and Other Inductor Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in one or more of the following: (1) manufacturing electronic fixed and variable capacitors and condensers; (2) manufacturing electronic resistors, such as fixed and variable resistors, resistor networks, thermistors, and varistors; and (3) manufacturing electronic inductors, such as coils and transformers.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 334417,
    title: 'Electronic Connector Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing electronic connectors, such as coaxial, cylindrical, rack and panel, pin and sleeve, printed circuit, and fiber optic.\n\nCross-References.',
  },
  {
    code: 334418,
    title: 'Printed Circuit Assembly (Electronic Assembly) Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in loading components onto printed circuit boards or who manufacture and ship loaded printed circuit boards.  Also known as printed circuit assemblies, electronics assemblies, or modules, these products are printed circuit boards that have some or all of the semiconductor and electronic components inserted or mounted and are inputs to a wide variety of electronic systems and devices.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 334419,
    title: 'Other Electronic Component Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing electronic components (except bare printed circuit boards; semiconductors and related devices; electronic capacitors; electronic resistors; coils, transformers, and other inductors; connectors; and loaded printed circuit boards).\n\nIllustrative Examples:\n\nCrystals and crystal assemblies, electronic, manufacturing\nElectron tubes manufacturing\nLCD (liquid crystal display) unit screens manufacturing\nMicrowave components manufacturing\nPiezoelectric devices manufacturing\nPrinted circuit laminates manufacturing\nSwitches for electronic applications manufacturing\nTransducers (except pressure) manufacturing\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 334510,
    title: 'Electromedical and Electrotherapeutic Apparatus Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing electromedical and electrotherapeutic apparatus, such as magnetic resonance imaging equipment, medical ultrasound equipment, pacemakers, hearing aids, electrocardiographs, and electromedical endoscopic equipment.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 334511,
    title:
      'Search, Detection, Navigation, Guidance, Aeronautical, and Nautical System and Instrument Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing search, detection, navigation, guidance, aeronautical, and nautical systems and instruments.  Examples of products made by these establishments are aircraft instruments (except engine), flight recorders, navigational instruments and systems, radar systems and equipment, and sonar systems and equipment.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 334512,
    title:
      'Automatic Environmental Control Manufacturing for Residential, Commercial, and Appliance Use',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing automatic controls and regulators for applications, such as heating, air-conditioning, refrigeration, and appliances.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 334513,
    title:
      'Instruments and Related Products Manufacturing for Measuring, Displaying, and Controlling Industrial Process Variables',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing instruments and related devices for measuring, displaying, indicating, recording, transmitting, and controlling industrial process variables.  These instruments measure, display, or control (monitor, analyze, and so forth) industrial process variables, such as temperature, humidity, pressure, vacuum, combustion, flow, level, viscosity, density, acidity, concentration, and rotation.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 334514,
    title: 'Totalizing Fluid Meter and Counting Device Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing totalizing (i.e., registering) fluid meters and counting devices.  Examples of products made by these establishments are gas consumption meters, water consumption meters, parking meters, taxi meters, motor vehicle gauges, and fare collection equipment.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 334515,
    title: 'Instrument Manufacturing for Measuring and Testing Electricity and Electrical Signals',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing instruments for measuring and testing the characteristics of electricity and electrical signals.  Examples of products made by these establishments are circuit and continuity testers, voltmeters, ohm meters, wattmeters, multimeters, and semiconductor test equipment.\n\nCross-References.',
  },
  {
    code: 334516,
    title: 'Analytical Laboratory Instrument Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing instruments and instrumentation systems for laboratory analysis of the chemical or physical composition or concentration of samples of solid, fluid, gaseous, or composite material.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 334517,
    title: 'Irradiation Apparatus Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing irradiation apparatus and tubes for applications, such as medical diagnostic, medical therapeutic, industrial, research, and scientific evaluation.  Irradiation can take the form of beta-rays, gamma-rays, X-rays, or other ionizing radiation.\n',
  },
  {
    code: 334519,
    title: 'Other Measuring and Controlling Device Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing measuring and controlling devices (except search, detection, navigation, guidance, aeronautical, and nautical instruments and systems; automatic environmental controls for residential, commercial, and appliance use; instruments for measurement, display, and control of industrial process variables; totalizing fluid meters and counting devices; instruments for measuring and testing electricity and electrical signals; analytical laboratory instruments; irradiation equipment; and electromedical and electrotherapeutic apparatus).\n\nIllustrative Examples:\n\nAircraft engine instruments manufacturing\nAutomotive emissions testing equipment manufacturing\nClocks assembling\nMeteorological instruments manufacturing\nPhysical properties testing and inspection equipment manufacturing\nPolygraph machines manufacturing\nRadiation detection and monitoring instruments manufacturing\nSurveying instruments manufacturing\nThermometers, liquid-in-glass and bimetal types (except medical), manufacturing\nWatches (except smartwatches) and parts (except crystals) manufacturing\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 334610,
    title: 'Manufacturing and Reproducing Magnetic and Optical Media',
    description:
      'This industry comprises establishments primarily engaged in (1) manufacturing optical and magnetic media, such as blank audio tapes, blank video tapes, and blank diskettes, and/or (2) mass duplicating (i.e., making copies) audio, video, software, and other data on magnetic, optical, and similar media.  These establishments do not generally develop software or produce audio or video content.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 335131,
    title: 'Residential Electric Lighting Fixture Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing fixed or portable residential electric lighting fixtures and lamp shades of metal, paper, or textiles.  Residential electric lighting fixtures include those for use both inside and outside the residence.\n\nIllustrative Examples:\n\nCeiling lighting fixtures, residential, manufacturing\nChandeliers, residential, manufacturing\nTable lamps (i.e., lighting fixtures) manufacturing\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 335132,
    title: 'Commercial, Industrial, and Institutional Electric Lighting Fixture Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing commercial, industrial, and institutional electric lighting fixtures.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 335139,
    title: 'Electric Lamp Bulb and Other Lighting Equipment Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing electric light bulbs, tubes, and parts (except glass blanks for electric light bulbs and light emitting diodes (LEDs)), electric lighting fixtures (except residential, commercial, industrial, institutional, and vehicular electric lighting fixtures), and nonelectric lighting equipment.\n\nIllustrative Examples:\n\nChristmas tree lighting sets, electric, manufacturing\nElectric light bulbs, complete, manufacturing\nFireplace logs, electric, manufacturing\nFlashlights manufacturing\nInsect lamps, electric, manufacturing\nSpotlights (except vehicular) manufacturing\nLanterns (e.g., carbide, electric, gas, gasoline, kerosene) manufacturing\nLED (light emitting diode) light bulbs manufacturing\nStreet lighting fixtures (except traffic signals) manufacturing\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 335210,
    title: 'Small Electrical Appliance Manufacturing',
    description:
      'This industry comprises establishments primarily engaged in manufacturing small electric appliances and electric housewares, household-type fans (except attic fans), household-type vacuum cleaners, and other electric household-type floor care machines.\n\nIllustrative Examples:\n\nBath fans, residential, manufacturing\nCarpet and floor cleaning equipment, household-type electric, manufacturing\nCeiling fans, residential, manufacturing\nCurling irons, household-type electric, manufacturing\nElectric blankets manufacturing\nPortable electric space heaters manufacturing\nPortable hair dryers, electric, manufacturing\nPortable cooking appliances (except microwave, convection ovens), household-type electric, manufacturing\nPortable humidifiers and dehumidifiers manufacturing\nScissors, electric, manufacturing\nVentilating and exhaust fans (except attic fans), household-type, manufacturing\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 335220,
    title: 'Major Household Appliance Manufacturing',
    description:
      'This industry comprises establishments primarily engaged in manufacturing household-type cooking appliances, household-type laundry equipment, household-type refrigerators, upright and chest freezers, and other electrical and nonelectrical major household-type appliances, such as dishwashers, water heaters, and garbage disposal units.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 335311,
    title: 'Power, Distribution, and Specialty Transformer Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing power, distribution, and specialty transformers (except electronic components).  Industrial-type and consumer-type transformers in this industry vary (e.g., step up or step down) voltage but do not convert alternating to direct or direct to alternating current.\n\nIllustrative Examples:\n\nFluorescent ballasts (i.e., transformers) manufacturing\nSubstation transformers, electric power distribution, manufacturing\nDistribution transformers, electric, manufacturing\nTransmission and distribution voltage regulators manufacturing\n\n\nCross-References.',
  },
  {
    code: 335312,
    title: 'Motor and Generator Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing electric motors (except internal combustion engine starting motors), power generators (except battery charging alternators for internal combustion engines), and motor generator sets (except turbine generator set units).  This industry includes establishments rewinding armatures on a factory basis. \n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 335313,
    title: 'Switchgear and Switchboard Apparatus Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing switchgear and switchboard apparatus.\n\nIllustrative Examples:\n\nCircuit breakers, power, manufacturing\nControl panels, electric power distribution, manufacturing\nDucts for electrical switchboard apparatus manufacturing\nFuses, electric, manufacturing\nPower switching equipment manufacturing\nSwitches, electric power (except pushbutton, snap, solenoid, tumbler), manufacturing\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 335314,
    title: 'Relay and Industrial Control Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing relays, motor starters and controllers, and other industrial controls and control accessories.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 335910,
    title: 'Battery Manufacturing',
    description:
      'This industry comprises establishments primarily engaged in manufacturing primary and storage batteries.\n\nIllustrative Examples:\n\nDisposable flashlight batteries manufacturing\nDry cells, primary (e.g., AAA, AA, C, D, 9V), manufacturing\nLead acid storage batteries manufacturing\nLithium batteries manufacturing\nRechargeable nickel-cadmium (NICAD) batteries manufacturing\nWatch batteries manufacturing \n\n',
  },
  {
    code: 335921,
    title: 'Fiber Optic Cable Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing insulated fiber optic cable from purchased fiber optic strand.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 335929,
    title: 'Other Communication and Energy Wire Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing insulated wire and cable of nonferrous metals from purchased wire.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 335931,
    title: 'Current-Carrying Wiring Device Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing current-carrying wiring devices.\n\nIllustrative Examples:\n\nBus bars, electrical conductors (except switchgear-type), manufacturing\nGFCI (ground fault circuit interrupters) manufacturing\nLamp holders manufacturing\nLightning arrestors and coils manufacturing\nReceptacles (i.e., outlets), electrical, manufacturing\nSwitches for electrical wiring (e.g., pressure, pushbutton, snap, tumbler) manufacturing\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 335932,
    title: 'Noncurrent-Carrying Wiring Device Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing noncurrent-carrying wiring devices.\n\nIllustrative Examples:\n\nBoxes, electrical wiring (e.g., junction, outlet, switch), manufacturing\nConduits and fittings, electrical, manufacturing\nFace plates (i.e., outlet or switch covers) manufacturing\nTransmission pole and line hardware manufacturing\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 335991,
    title: 'Carbon and Graphite Product Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing carbon, graphite, and metal-graphite brushes and brush stock; carbon or graphite electrodes for thermal and electrolytic uses; carbon and graphite fibers; and other carbon, graphite, and metal-graphite products.\n\nCross-References.',
  },
  {
    code: 335999,
    title: 'All Other Miscellaneous Electrical Equipment and Component Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing industrial and commercial electric apparatus and other equipment (except lighting equipment, household appliances, transformers, motors, generators, switchgear, relays, industrial controls, batteries, communication and energy wire and cable, wiring devices, and carbon and graphite products).  Examples of products made by these establishments are power converters (i.e., AC to DC and DC to AC), power supplies, surge suppressors, and similar equipment for industrial-type and consumer-type equipment.\n\nIllustrative Examples:\n\nAppliance cords made from purchased insulated wire\nBattery chargers, solid-state, manufacturing\nDoor opening and closing devices, electrical, manufacturing\nElectric bells manufacturing\nExtension cords made from purchased insulated wire\nInverters manufacturing\nSurge suppressers manufacturing\nUninterruptible power supplies (UPS) manufacturing\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 336110,
    title: 'Automobile and Light Duty Motor Vehicle Manufacturing',
    description:
      'This industry comprises establishments primarily engaged in (1) manufacturing complete automobiles and light duty motor vehicles (i.e., body and chassis or unibody) or (2) manufacturing automobile and light duty motor vehicle chassis only.  Vehicles made include passenger cars, light duty trucks, light duty vans, pick-up trucks, minivans, and sport utility vehicles.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 336120,
    title: 'Heavy Duty Truck Manufacturing',
    description:
      'This industry comprises establishments primarily engaged in (1) manufacturing heavy duty truck chassis and assembling complete heavy duty trucks, buses, heavy duty motor homes, and other special purpose heavy duty motor vehicles for highway use or (2) manufacturing heavy duty truck chassis only.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 336211,
    title: 'Motor Vehicle Body Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing truck and bus bodies and cabs and automobile bodies.  The products made may be sold separately or may be assembled on purchased chassis and sold as complete vehicles.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 336212,
    title: 'Truck Trailer Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing truck trailers, truck trailer chassis, cargo container chassis, detachable trailer bodies, and detachable trailer chassis for sale separately.\n\nCross-References.',
  },
  {
    code: 336213,
    title: 'Motor Home Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in (1) manufacturing motor homes on purchased chassis and/or (2) manufacturing conversion vans on an assembly line basis.  Motor homes are units where the motor and the living quarters are integrated in the same unit.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 336214,
    title: 'Travel Trailer and Camper Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in one or more of the following: (1) manufacturing travel trailers and campers designed to attach to motor vehicles; (2) manufacturing pick-up coaches (i.e., campers) and caps (i.e., covers) for mounting on pick-up trucks; and (3) manufacturing automobile, utility, and light-truck trailers.  Travel trailers do not have their own motor but are designed to be towed by a motor unit, such as an automobile or a light truck.\n\nIllustrative Examples:\n\nAutomobile transporter trailers, single car, manufacturing\nCamper units, slide-in, for pick-up trucks, manufacturing\nCamping trailers and chassis manufacturing\nHorse trailers (except fifth-wheel-type) manufacturing\nPick-up canopies, caps, or covers manufacturing\nTravel trailers, recreational, manufacturing\nUtility trailers manufacturing\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 336310,
    title: 'Motor Vehicle Gasoline Engine and Engine Parts Manufacturing',
    description:
      'This industry comprises establishments primarily engaged in (1) manufacturing and/or rebuilding motor vehicle gasoline engines and engine parts and/or (2) manufacturing and/or rebuilding carburetors, pistons, piston rings, and engine valves, whether or not for vehicular use.\n\nIllustrative Examples:\n\nCarburetors, all types, manufacturing\nCrankshaft assemblies, automotive and truck gasoline engine, manufacturing \nCylinder heads, automotive and truck gasoline engine, manufacturing\nFuel injection systems and parts, automotive and truck gasoline engine, manufacturing\nGasoline engines for hybrid automotive vehicles manufacturing\nPistons and piston rings manufacturing\nManifolds (i.e., intake and exhaust), automotive and truck gasoline engine, manufacturing\nPumps (e.g., fuel, oil, water), mechanical, automotive and truck gasoline engine (except power steering), manufacturing\nTiming gears and chains, automotive and truck gasoline engine, manufacturing\nValves, engine, intake and exhaust, manufacturing \n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 336320,
    title: 'Motor Vehicle Electrical and Electronic Equipment Manufacturing',
    description:
      'This industry comprises establishments primarily engaged in manufacturing and/or rebuilding electrical and electronic equipment for motor vehicles and internal combustion engines.  The products made can be used for all types of transportation equipment (i.e., aircraft, automobiles, trucks, trains, ships) or stationary internal combustion engine applications.\n\nIllustrative Examples:\n\nAlternators and generators for internal combustion engines manufacturing\nAutomotive lighting fixtures manufacturing\nCoils, ignition, internal combustion engines, manufacturing\nDistributors for internal combustion engines manufacturing\nElectrical control chips (modules), motor vehicle, manufacturing\nElectrical ignition cable sets for internal combustion engines manufacturing\nGenerators for internal combustion engines manufacturing\nIgnition wiring harness for internal combustion engines manufacturing\nInstrument control panels (i.e., assembling purchased gauges), automotive, truck, and bus, manufacturing\nSpark plugs for internal combustion engines manufacturing\nWindshield washer pumps, automotive, truck, and bus, manufacturing\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 336330,
    title: 'Motor Vehicle Steering and Suspension Components (except Spring) Manufacturing',
    description:
      'This industry comprises establishments primarily engaged in manufacturing and/or rebuilding motor vehicle steering mechanisms and suspension components (except springs).\n\nIllustrative Examples:\n\nRack and pinion steering assemblies manufacturing\nShock absorbers, automotive, truck, and bus, manufacturing\nSteering columns, automotive, truck, and bus, manufacturing\nSteering wheels, automotive, truck, and bus, manufacturing \nStruts, automotive, truck, and bus, manufacturing\nPower steering pumps manufacturing\n\n\nCross-References.',
  },
  {
    code: 336340,
    title: 'Motor Vehicle Brake System Manufacturing',
    description:
      'This industry comprises establishments primarily engaged in manufacturing and/or rebuilding motor vehicle brake systems and related components.\n\nIllustrative Examples:\n\nBrake cylinders, master and wheel, automotive, truck, and bus, manufacturing\nBrake drums, automotive, truck, and bus, manufacturing\nBrake hose assemblies manufacturing\nBrake pads and shoes, automotive, truck, and bus, manufacturing\nCalipers, brake, automotive, truck, and bus, manufacturing\n\n\nCross-References.',
  },
  {
    code: 336350,
    title: 'Motor Vehicle Transmission and Power Train Parts Manufacturing',
    description:
      'This industry comprises establishments primarily engaged in manufacturing and/or rebuilding motor vehicle transmissions and power train parts.\n\nIllustrative Examples:\n\nAutomatic transmissions, automotive, truck, and bus, manufacturing\nAxle bearings, automotive, truck, and bus, manufacturing\nConstant velocity joints, automotive, truck, and bus, manufacturing\nDifferential and rear axle assemblies, automotive, truck, and bus, manufacturing\nTorque converters, automotive, truck, and bus, manufacturing\nUniversal joints, automotive, truck, and bus, manufacturing\n\n',
  },
  {
    code: 336360,
    title: 'Motor Vehicle Seating and Interior Trim Manufacturing',
    description:
      'This industry comprises establishments primarily engaged in manufacturing motor vehicle seating, seats, seat frames, seat belts, and interior trimmings.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 336370,
    title: 'Motor Vehicle Metal Stamping',
    description:
      'This industry comprises establishments primarily engaged in manufacturing motor vehicle stampings, such as fenders, tops, body parts, trim, and molding.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 336390,
    title: 'Other Motor Vehicle Parts Manufacturing',
    description:
      'This industry comprises establishments primarily engaged in manufacturing and/or rebuilding motor vehicle parts and accessories (except motor vehicle gasoline engines and engine parts, motor vehicle electrical and electronic equipment, motor vehicle steering and suspension components, motor vehicle brake systems, motor vehicle transmissions and power train parts, motor vehicle seating and interior trim, and motor vehicle stampings).\n\nIllustrative Examples:\n\nAir bag assemblies manufacturing\nAir-conditioners, motor vehicle, manufacturing\nAir filters, automotive, truck, and bus, manufacturing\nRadiators and cores manufacturing\nCatalytic converters, engine exhaust, automotive, truck, and bus, manufacturing\nCompressors, motor vehicle air-conditioning, manufacturing\nMufflers and resonators, motor vehicle, manufacturing\nWheels (i.e., rims), automotive, truck, and bus, manufacturing\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 336411,
    title: 'Aircraft Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in one or more of the following: (1) manufacturing or assembling complete aircraft; (2) developing and making aircraft prototypes; (3) aircraft conversion (i.e., major modifications to systems); and (4) complete aircraft overhaul and rebuilding (i.e., periodic restoration of aircraft to original design specifications).\n\nCross-References.',
  },
  {
    code: 336412,
    title: 'Aircraft Engine and Engine Parts Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in one or more of the following: (1) manufacturing aircraft engines and engine parts; (2) developing and making prototypes of aircraft engines and engine parts; (3) aircraft propulsion system conversion (i.e., major modifications to systems); and (4) aircraft propulsion systems overhaul and rebuilding (i.e., periodic restoration of aircraft propulsion system to original design specifications).\n\nCross-References.',
  },
  {
    code: 336413,
    title: 'Other Aircraft Parts and Auxiliary Equipment Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in (1) manufacturing aircraft parts or auxiliary equipment (except engines and aircraft fluid power subassemblies) and/or (2) developing and making prototypes of aircraft parts and auxiliary equipment.  Auxiliary equipment includes such items as crop dusting apparatus, armament racks, inflight refueling equipment, and external fuel tanks.\n\nCross-References.',
  },
  {
    code: 336414,
    title: 'Guided Missile and Space Vehicle Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in (1) manufacturing complete guided missiles and space vehicles and/or (2) developing and making prototypes of guided missiles or space vehicles.\n\nCross-References.',
  },
  {
    code: 336415,
    title:
      'Guided Missile and Space Vehicle Propulsion Unit and Propulsion Unit Parts Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in (1) manufacturing guided missile and/or space vehicle propulsion units and propulsion unit parts and/or (2) developing and making prototypes of guided missile and space vehicle propulsion units and propulsion unit parts.\n\nCross-References.',
  },
  {
    code: 336419,
    title: 'Other Guided Missile and Space Vehicle Parts and Auxiliary Equipment Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in (1) manufacturing guided missile and space vehicle parts and auxiliary equipment (except guided missile and space vehicle propulsion units and propulsion unit parts) and/or (2) developing and making prototypes of guided missile and space vehicle parts and auxiliary equipment.\n\nCross-References.',
  },
  {
    code: 336510,
    title: 'Railroad Rolling Stock Manufacturing',
    description:
      'This industry comprises establishments primarily engaged in one or more of the following: (1) manufacturing and/or rebuilding locomotives, locomotive frames, and parts; (2) manufacturing railroad, street, and rapid transit cars and car equipment for operation on rails for freight and passenger service; and (3) manufacturing rail layers, ballast distributors, rail tamping equipment, and other railway track maintenance equipment.\n\nCross-References.',
  },
  {
    code: 336611,
    title: 'Ship Building and Repairing',
    description:
      'This U.S. industry comprises establishments primarily engaged in operating shipyards.  Shipyards are fixed facilities with drydocks and fabrication equipment capable of building a ship, defined as watercraft typically suitable or intended for other than personal or recreational use.  Activities of shipyards include the construction of ships, their repair, conversion and alteration, the production of prefabricated ship and barge sections, and specialized services, such as ship scaling.\n\nIllustrative Examples:\n\nBarge building\nCargo ship building\nDrilling and production platforms, floating, oil and gas, building\nPassenger ship building\nSubmarine building\nYachts built in shipyards \n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 336612,
    title: 'Boat Building',
    description:
      'This U.S. industry comprises establishments primarily engaged in building boats.  Boats are defined as watercraft not built in shipyards and typically of the type suitable or intended for personal use.  Included in this industry are establishments that manufacture heavy-duty inflatable rubber or inflatable plastic boats (RIBs).\n\nIllustrative Examples:\n\nInflatable plastic boats, heavy-duty, manufacturing\nInflatable rubber boats, heavy-duty, manufacturing\nBoats (e.g., motorboats, rowboats, canoes, kayaks) manufacturing\nRigid inflatable boats (RIBs) manufacturing\nSailboat building, not done in shipyards\nYacht building, not done in shipyards\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 336991,
    title: 'Motorcycle, Bicycle, and Parts Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing motorcycles, bicycles, tricycles and similar equipment, and parts.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 336992,
    title: 'Military Armored Vehicle, Tank, and Tank Component Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing complete military armored vehicles, combat tanks, specialized components for combat tanks, and self-propelled weapons.\n\nCross-References.',
  },
  {
    code: 336999,
    title: 'All Other Transportation Equipment Manufacturing',
    description:
      "This U.S. industry comprises establishments primarily engaged in manufacturing transportation equipment (except motor vehicles, motor vehicle parts, boats, ships, railroad rolling stock, aerospace products, motorcycles, bicycles, armored vehicles, and tanks).\n\nIllustrative Examples:\n\nAll-terrain vehicles (ATVs), wheeled or tracked, manufacturing\nAnimal-drawn vehicles and parts manufacturing\nGocarts (except children's) manufacturing\nGolf carts and similar motorized passenger carriers manufacturing\nRace cars manufacturing\nSnowmobiles and parts manufacturing\n\n\nCross-References. Establishments primarily engaged in--",
  },
  {
    code: 337110,
    title: 'Wood Kitchen Cabinet and Countertop Manufacturing',
    description:
      'This industry comprises establishments primarily engaged in manufacturing wood or plastics laminated on wood kitchen cabinets, bathroom vanities, and countertops (except freestanding).  The cabinets and counters may be made on a stock or custom basis.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 337121,
    title: 'Upholstered Household Furniture Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing upholstered household-type furniture.  The furniture may be made on a stock or custom basis.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 337122,
    title: 'Nonupholstered Wood Household Furniture Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing nonupholstered wood household-type furniture and freestanding cabinets (except television, stereo, and sewing machine cabinets).  The furniture may be made on a stock or custom basis and may be assembled or unassembled (i.e., knockdown).\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 337126,
    title: 'Household Furniture (except Wood and Upholstered) Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing nonupholstered household-type furniture of materials other than wood, such as metal, plastics, reed, rattan, wicker, and fiberglass.  The furniture may be partially upholstered (e.g., chairs with upholstered seats or backs), made on a stock or custom basis, and may be assembled or unassembled (i.e., knockdown).\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 337127,
    title: 'Institutional Furniture Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing institutional-type furniture (e.g., library, school, theater, and church furniture).  Included in this industry are establishments primarily engaged in manufacturing general purpose hospital, laboratory, and dental furniture (e.g., tables, stools, and benches).  The furniture may be made on a stock or custom basis and may be assembled or unassembled (i.e., knockdown).\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 337211,
    title: 'Wood Office Furniture Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing wood office-type furniture.  The furniture may be made on a stock or custom basis and may be assembled or unassembled (i.e., knockdown).\n',
  },
  {
    code: 337212,
    title: 'Custom Architectural Woodwork and Millwork Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing custom designed interiors consisting of architectural woodwork and fixtures utilizing wood, wood products, and plastics laminates.  All of the industry output is made to individual order on a job shop basis and requires skilled craftsmen as a labor input.  A job might include custom manufacturing of display fixtures, gondolas, wall shelving units, entrance and window architectural detail, sales and reception counters, wall paneling, and matching furniture.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 337214,
    title: 'Office Furniture (except Wood) Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing nonwood office-type furniture.  The furniture may be made on a stock or custom basis and may be assembled or unassembled (i.e., knockdown).\n\nCross-References.',
  },
  {
    code: 337215,
    title: 'Showcase, Partition, Shelving, and Locker Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing wood and nonwood office and store fixtures, shelving, lockers, frames, partitions, and related fabricated products of wood and nonwood materials, including plastics laminated fixture tops.  The products are made on a stock or custom basis and may be assembled or unassembled (i.e., knockdown).  Establishments exclusively making furniture parts (e.g., frames) are included in this industry.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 337910,
    title: 'Mattress Manufacturing',
    description:
      'This industry comprises establishments primarily engaged in manufacturing innerspring, box spring, and noninnerspring mattresses.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 337920,
    title: 'Blind and Shade Manufacturing',
    description:
      'This industry comprises establishments primarily engaged in manufacturing one or more of the following: venetian blinds, other window blinds, and shades; curtain and drapery rods and poles; and/or curtain and drapery fixtures.  The blinds and shades may be made on a stock or custom basis and may be made of any material.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 339112,
    title: 'Surgical and Medical Instrument Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing medical, surgical, ophthalmic, and veterinary instruments and apparatus (except electrotherapeutic, electromedical, and irradiation apparatus).  Examples of products made by these establishments are syringes, hypodermic needles, anesthesia apparatus, blood transfusion equipment, catheters, surgical clamps, and medical thermometers.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 339113,
    title: 'Surgical Appliance and Supplies Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing surgical appliances and supplies.  Examples of products made by these establishments are orthopedic devices, prosthetic appliances, surgical dressings, crutches, surgical sutures, personal industrial safety devices (except protective eyewear), hospital beds, and operating room tables.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 339114,
    title: 'Dental Equipment and Supplies Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing dental equipment and supplies used by dental laboratories and offices of dentists, such as dental chairs, dental instrument delivery systems, dental hand instruments, dental impression material, and dental cements.\n\nCross-References.',
  },
  {
    code: 339115,
    title: 'Ophthalmic Goods Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing ophthalmic goods.  Examples of products made by these establishments are prescription eyeglasses (except grinding lenses in a retail setting), contact lenses, sunglasses, eyeglass frames, reading glasses made to standard powers, and protective eyewear.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 339116,
    title: 'Dental Laboratories',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing dentures, crowns, bridges, and orthodontic appliances customized for individual application.\n\nCross-References.',
  },
  {
    code: 339910,
    title: 'Jewelry and Silverware Manufacturing',
    description:
      'This industry comprises establishments primarily engaged in one or more of the following: (1) manufacturing, engraving, chasing, or etching fine and costume jewelry; (2) manufacturing, engraving, chasing, or etching metal personal goods (i.e., small articles carried on or about the person, such as compacts or cigarette cases); (3) manufacturing, engraving, chasing, or etching precious metal solid, precious metal clad, or pewter flatware and other hollowware; (4) stamping coins; (5) manufacturing unassembled jewelry parts and stock shop products, such as sheet, wire, and tubing; (6) cutting, slabbing, tumbling, carving, engraving, polishing, or faceting precious or semiprecious stones and gems; (7) recutting, repolishing, and setting gem stones; and (8) drilling, sawing, and peeling cultured and costume pearls.  This industry includes establishments primarily engaged in manufacturing precious solid, precious clad, and precious plated jewelry and personal goods.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 339920,
    title: 'Sporting and Athletic Goods Manufacturing',
    description:
      'This industry comprises establishments primarily engaged in manufacturing sporting and athletic goods (except apparel and footwear).\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 339930,
    title: 'Doll, Toy, and Game Manufacturing',
    description:
      "This industry comprises establishments primarily engaged in manufacturing complete dolls, doll parts, doll clothes, action figures, toys, games (including electronic, such as gaming consoles and devices and handheld video games), hobby kits, and children's vehicles (except metal bicycles and tricycles).\n\nCross-References. Establishments primarily engaged in--",
  },
  {
    code: 339940,
    title: 'Office Supplies (except Paper) Manufacturing',
    description:
      'This industry comprises establishments primarily engaged in manufacturing office supplies.  Examples of products made by these establishments are pens, pencils, felt tip markers, crayons, chalk, pencil sharpeners, staplers, modeling clay, hand operated stamps, stamp pads, stencils, carbon paper, and inked ribbons.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 339950,
    title: 'Sign Manufacturing',
    description:
      'This industry comprises establishments primarily engaged in manufacturing signs and related displays of all materials (except printing paper and paperboard signs, notices, displays).\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 339991,
    title: 'Gasket, Packing, and Sealing Device Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing gaskets, packing, and sealing devices of all materials.\n',
  },
  {
    code: 339992,
    title: 'Musical Instrument Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing musical instruments (except toys).\n\nCross-References.',
  },
  {
    code: 339993,
    title: 'Fastener, Button, Needle, and Pin Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing fasteners, buttons, needles, pins, and buckles (except made of precious metals or precious and semiprecious stones and gems).\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 339994,
    title: 'Broom, Brush, and Mop Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing brooms, mops, and brushes.',
  },
  {
    code: 339995,
    title: 'Burial Casket Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in manufacturing burial caskets, cases, and vaults (except concrete).\n\nCross-References.',
  },
  {
    code: 339999,
    title: 'All Other Miscellaneous Manufacturing',
    description:
      'This U.S. industry comprises establishments primarily engaged in miscellaneous manufacturing (except medical equipment and supplies, jewelry and silverware, sporting and athletic goods, dolls, toys, games, office supplies, signs, gaskets, packing, and sealing devices, musical instruments, fasteners, buttons, needles, pins, brooms, brushes, mops, and burial caskets).\n\nIllustrative Examples:\n\nArtificial Christmas trees manufacturing\nCandles manufacturing\nChristmas tree ornaments (except glass and electric) manufacturing\nCigarette lighters (except precious metal) manufacturing\nCoin- or card-operated amusement machines (except jukebox) manufacturing\nElectronic cigarettes manufacturing\nHairpieces (e.g., wigs, toupees, wiglets) manufacturing\nPortable fire extinguishers manufacturing\nPotpourri manufacturing\nTobacco pipes manufacturing\nUmbrellas manufacturing\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 423110,
    title: 'Automobile and Other Motor Vehicle Merchant Wholesalers',
    description:
      'This industry comprises establishments primarily engaged in the merchant wholesale distribution of new and used passenger automobiles, trucks, trailers, and other motor vehicles, such as motorcycles, motor homes, and snowmobiles.\n',
  },
  {
    code: 423120,
    title: 'Motor Vehicle Supplies and New Parts Merchant Wholesalers',
    description:
      'This industry comprises establishments primarily engaged in the merchant wholesale distribution of motor vehicle supplies, accessories, tools, and equipment; and new motor vehicle parts (except new tires and tubes).\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 423130,
    title: 'Tire and Tube Merchant Wholesalers',
    description:
      'This industry comprises establishments primarily engaged in the merchant wholesale distribution of new and/or used tires and tubes for passenger and commercial vehicles.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 423140,
    title: 'Motor Vehicle Parts (Used) Merchant Wholesalers',
    description:
      'This industry comprises establishments primarily engaged in the merchant wholesale distribution of used motor vehicle parts (except used tires and tubes) and establishments primarily engaged in dismantling motor vehicles for the purpose of selling the parts.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 423210,
    title: 'Furniture Merchant Wholesalers',
    description:
      'This industry comprises establishments primarily engaged in the merchant wholesale distribution of furniture (except hospital beds, medical furniture, and drafting tables).\n\nIllustrative Examples:\n\nHousehold-type furniture merchant wholesalers\nOutdoor furniture merchant wholesalers\nMattresses merchant wholesalers\nPublic building furniture merchant wholesalers\nOffice furniture merchant wholesalers\nReligious furniture merchant wholesalers\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 423220,
    title: 'Home Furnishing Merchant Wholesalers',
    description:
      'This industry comprises establishments primarily engaged in the merchant wholesale distribution of home furnishings and/or housewares.\n\nIllustrative Examples:\n\nCarpet merchant wholesalers\nFloor coverings (except wood flooring) merchant wholesalers\nGlassware, household-type, merchant wholesalers\nChinaware, household-type, merchant wholesalers\nLamps (i.e., lighting fixtures) merchant wholesalers\nHousehold-type cooking utensils merchant wholesalers\nCurtains merchant wholesalers\nDraperies merchant wholesalers\nLinens (e.g., bath, bed, table) merchant wholesalers\nWindow shades and blinds merchant wholesalers\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 423310,
    title: 'Lumber, Plywood, Millwork, and Wood Panel Merchant Wholesalers',
    description:
      'This industry comprises establishments primarily engaged in the merchant wholesale distribution of lumber; plywood; reconstituted wood fiber products; wood fencing; doors and windows and their frames (all materials); wood roofing and siding; and/or other wood or metal millwork.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 423320,
    title: 'Brick, Stone, and Related Construction Material Merchant Wholesalers',
    description:
      'This industry comprises establishments primarily engaged in the merchant wholesale distribution of stone, cement, lime, construction sand, and gravel; brick; asphalt and concrete mixtures; and/or concrete, stone, and structural clay products.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 423330,
    title: 'Roofing, Siding, and Insulation Material Merchant Wholesalers',
    description:
      'This industry comprises establishments primarily engaged in the merchant wholesale distribution of nonwood roofing and nonwood siding and insulation materials.\n\nCross-References.',
  },
  {
    code: 423390,
    title: 'Other Construction Material Merchant Wholesalers',
    description:
      'This industry comprises (1) establishments primarily engaged in the merchant wholesale distribution of manufactured homes (i.e., mobile homes) and/or prefabricated buildings and (2) establishments primarily engaged in the merchant wholesale distribution of construction materials (except lumber, plywood, millwork, wood panels, brick, stone, roofing, siding, electrical and wiring supplies, and insulation materials).\n\nIllustrative Examples:\n\nFlat glass merchant wholesalers\nPrefabricated buildings (except wood) merchant wholesalers\nOrnamental ironwork merchant wholesalers\nFencing and fencing accessories (except wood) merchant wholesalers\nPlate glass merchant wholesalers\nStorage bins merchant wholesalers\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 423410,
    title: 'Photographic Equipment and Supplies Merchant Wholesalers',
    description:
      'This industry comprises establishments primarily engaged in the merchant wholesale distribution of photographic equipment and supplies (except office equipment).\n\nIllustrative Examples:\n\nPhotofinishing equipment merchant wholesalers\nTelevision cameras merchant wholesalers\nPhotographic camera equipment and supplies merchant wholesalers\nVideo cameras (except household-type) merchant wholesalers\nPhotographic film and plates merchant wholesalers\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 423420,
    title: 'Office Equipment Merchant Wholesalers',
    description:
      'This industry comprises establishments primarily engaged in the merchant wholesale distribution of office machines and related equipment (except computers and computer peripheral equipment).\n\nIllustrative Examples:\n\nAutomated teller machines (ATM) merchant wholesalers\nCalculators and calculating machines merchant wholesalers\nCash registers merchant wholesalers\nSecurity safes merchant wholesalers\nCopying machines merchant wholesalers\nPoint of sale terminals merchant wholesalers\nPaper shredders merchant wholesalers\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 423430,
    title: 'Computer and Computer Peripheral Equipment and Software Merchant Wholesalers',
    description:
      'This industry comprises establishments primarily engaged in the merchant wholesale distribution of computers, computer peripheral equipment, loaded computer boards, and/or computer software.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 423440,
    title: 'Other Commercial Equipment Merchant Wholesalers',
    description:
      'This industry comprises establishments primarily engaged in the merchant wholesale distribution of commercial and related machines and equipment (except photographic equipment and supplies; office equipment; and computers and computer peripheral equipment and software) generally used in restaurants and stores.\n\nIllustrative Examples:\n\nBalances and scales (except laboratory) merchant wholesalers\nCommercial shelving merchant wholesalers\nCoin- or card-operated merchandising machine merchant wholesalers\nElectrical signs merchant wholesalers\nCommercial chinaware merchant wholesalers\nPartitions merchant wholesalers\nCommercial cooking equipment merchant wholesalers\nStore fixtures (except refrigerated) merchant wholesalers\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 423450,
    title: 'Medical, Dental, and Hospital Equipment and Supplies Merchant Wholesalers',
    description:
      'This industry comprises establishments primarily engaged in the merchant wholesale distribution of professional medical equipment, instruments, and supplies (except ophthalmic equipment and instruments and goods used by ophthalmologists, optometrists, and opticians).\n\nIllustrative Examples:\n\nDental equipment and supplies merchant wholesalers\nSurgical dressings merchant wholesalers\nElectromedical equipment merchant wholesalers\nPatient monitoring equipment merchant wholesalers\nHospital beds merchant wholesalers\nProsthetic appliances and supplies merchant wholesalers\nHospital furniture merchant wholesalers\nSurgical instruments and apparatus merchant wholesalers\nMedical and dental X-ray machines and parts merchant wholesalers\nFirst-aid kits (except household) merchant wholesalers\nSurgical and medical masks merchant wholesalers\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 423460,
    title: 'Ophthalmic Goods Merchant Wholesalers',
    description:
      'This industry comprises establishments primarily engaged in the merchant wholesale distribution of professional equipment, instruments, and/or goods sold, prescribed, or used by ophthalmologists, optometrists, and opticians.\n\nIllustrative Examples:\n\nBinoculars merchant wholesalers\nOptometric equipment and supplies merchant wholesalers\nOphthalmic frames merchant wholesalers\nSunglasses merchant wholesalers\nOphthalmic lenses merchant wholesalers\n\n',
  },
  {
    code: 423490,
    title: 'Other Professional Equipment and Supplies Merchant Wholesalers',
    description:
      'This industry comprises establishments primarily engaged in the merchant wholesale distribution of professional equipment and supplies (except ophthalmic goods and medical, dental, and hospital equipment and supplies).\n\nIllustrative Examples:\n\nChurch supplies (except silverware, plated ware) merchant wholesalers\nSchool equipment and supplies (except books, furniture) merchant wholesalers\nDrafting tables and instruments merchant wholesalers\nScientific instruments merchant wholesalers\nLaboratory equipment (except medical, dental) merchant wholesalers\nSurveying equipment and supplies merchant wholesalers\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 423510,
    title: 'Metal Service Centers and Other Metal Merchant Wholesalers',
    description:
      'This industry comprises establishments primarily engaged in the merchant wholesale distribution of products of the primary metals industries.  Service centers maintain inventory and may perform functions, such as sawing, shearing, bending, leveling, cleaning, or edging, on a custom basis as part of sales transactions.\n\nIllustrative Examples:\n\nCast iron pipe merchant wholesalers\nMetal rods merchant wholesalers\nMetal bars (except precious) merchant wholesalers\nMetal sheets merchant wholesalers\nMetal spikes merchant wholesalers\nMetal ingots (except precious) merchant wholesalers\nMetal pipe merchant wholesalers\nNails merchant wholesalers\nMetal plates merchant wholesalers\nNoninsulated wire merchant wholesalers\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 423520,
    title: 'Coal and Other Mineral and Ore Merchant Wholesalers',
    description:
      'This industry comprises establishments primarily engaged in the merchant wholesale distribution of coal, coke, metal ores, and/or nonmetallic minerals (except precious and semiprecious stones and minerals used in construction, such as sand and gravel).\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 423610,
    title:
      'Electrical Apparatus and Equipment, Wiring Supplies, and Related Equipment Merchant Wholesalers',
    description:
      'This industry comprises establishments primarily engaged in the merchant wholesale distribution of electrical construction materials; wiring supplies; electric light fixtures; light bulbs; and/or electrical power equipment for the generation, transmission, distribution, or control of electric energy.\n',
  },
  {
    code: 423620,
    title:
      'Household Appliances, Electric Housewares, and Consumer Electronics Merchant Wholesalers',
    description:
      'This industry comprises establishments primarily engaged in the merchant wholesale distribution of household-type gas and electric appliances (except water heaters and heating stoves (i.e., noncooking)), room air-conditioners, and/or household-type audio or video equipment.\n\nIllustrative Examples:\n\nHousehold-type sewing machines merchant wholesalers\nHousehold-type radios (including automotive) merchant wholesalers\t\nHousehold-type video cameras merchant wholesalers\nHousehold-type refrigerators merchant wholesalers\nTelevision sets merchant wholesalers\nToothbrushes, electric, merchant wholesalers\nCurling irons, electric, merchant wholesalers\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 423690,
    title: 'Other Electronic Parts and Equipment Merchant Wholesalers',
    description:
      'This industry comprises establishments primarily engaged in the merchant wholesale distribution of electronic parts and equipment (except electrical apparatus and equipment, wiring supplies, and construction materials; electrical and electronic appliances; and television sets and radios).\n\nIllustrative Examples:\n\nBlank compact discs (CDs) merchant wholesalers\nBlank digital video discs (DVDs) merchant wholesalers\nBroadcasting equipment merchant wholesalers\nCellular telephones merchant wholesalers\nCommunications equipment merchant wholesalers\nModems and routers merchant wholesalers\nRadar equipment merchant wholesalers\nTeleconferencing equipment merchant wholesalers\nUnloaded computer boards merchant wholesalers\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 423710,
    title: 'Hardware Merchant Wholesalers',
    description:
      "This industry comprises establishments primarily engaged in the merchant wholesale distribution of hardware, knives, or handtools.\n\nIllustrative Examples:\n\nBrads merchant wholesalers\nCutlery merchant wholesalers\nKnives (except disposable plastics) merchant wholesalers\nPower handtools (e.g., drills, saws, sanders) merchant wholesalers\nFasteners (e.g., bolts, nuts, rivets, screws) merchant wholesalers\nStaples merchant wholesalers\nHandtools (except motor vehicle, machinists' precision) merchant wholesalers\nHardware (except motor vehicle) merchant wholesalers\nTacks merchant wholesalers\nKeys and locks merchant wholesalers\n\n\nCross-References. Establishments primarily engaged in--",
  },
  {
    code: 423720,
    title: 'Plumbing and Heating Equipment and Supplies (Hydronics) Merchant Wholesalers',
    description:
      'This industry comprises establishments primarily engaged in the merchant wholesale distribution of plumbing equipment, hydronic heating equipment, household-type water heaters, and/or supplies.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 423730,
    title: 'Warm Air Heating and Air-Conditioning Equipment and Supplies Merchant Wholesalers',
    description:
      'This industry comprises establishments primarily engaged in the merchant wholesale distribution of warm air heating and air-conditioning equipment and supplies.\n\nIllustrative Examples:\n\nAir pollution control equipment and supplies merchant wholesalers\nNonportable electric baseboard heaters merchant wholesalers\nAir-conditioning equipment (except room units) merchant wholesalers\nWarm air central heating equipment merchant wholesalers\nAutomotive air-conditioners merchant wholesalers\nDuctless heating and air-conditioning system equipment merchant wholesalers \n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 423740,
    title: 'Refrigeration Equipment and Supplies Merchant Wholesalers',
    description:
      'This industry comprises establishments primarily engaged in the merchant wholesale distribution of refrigeration equipment (except household-type refrigerators, freezers, and air-conditioners).\n\nIllustrative Examples:\n\nCold storage machinery merchant wholesalers\nRefrigerated display cases merchant wholesalers\nCommercial refrigerators merchant wholesalers\nWater coolers merchant wholesalers\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 423810,
    title: 'Construction and Mining (except Oil Well) Machinery and Equipment Merchant Wholesalers',
    description:
      'This industry comprises establishments primarily engaged in the merchant wholesale distribution of specialized machinery, equipment, and related parts generally used in construction, mining (except oil well), and logging activities.\n\nIllustrative Examples:\n\nExcavating machinery and equipment merchant wholesalers\nRoad construction and maintenance machinery merchant wholesalers\nForestry machinery and equipment merchant wholesalers\nScaffolding merchant wholesalers\nMining cranes merchant wholesalers\n\n\nCross-References.',
  },
  {
    code: 423820,
    title: 'Farm and Garden Machinery and Equipment Merchant Wholesalers',
    description:
      'This industry comprises establishments primarily engaged in the merchant wholesale distribution of specialized machinery, equipment, and related parts generally used in agricultural, farm, and lawn and garden activities.\n\nIllustrative Examples:\n\nAnimal feeders merchant wholesalers\nLawnmowers merchant wholesalers\nMilking machinery and equipment merchant wholesalers\nHarvesting machinery and equipment merchant wholesalers\nPlanting machinery and equipment merchant wholesalers\n\n',
  },
  {
    code: 423830,
    title: 'Industrial Machinery and Equipment Merchant Wholesalers',
    description:
      'This industry comprises establishments primarily engaged in the merchant wholesale distribution of specialized machinery, equipment, and related parts generally used in manufacturing, oil well, and warehousing activities.\n\nIllustrative Examples:\n\nFluid power transmission equipment merchant wholesalers\nMetalworking machinery and equipment merchant wholesalers\nFood processing machinery and equipment merchant wholesalers\nOil well machinery and equipment merchant wholesalers\nMaterial handling machinery and equipment merchant wholesalers\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 423840,
    title: 'Industrial Supplies Merchant Wholesalers',
    description:
      'This industry comprises establishments primarily engaged in the merchant wholesale distribution of supplies for machinery and equipment generally used in manufacturing, oil well, and warehousing activities.\n\nIllustrative Examples:\n\nIndustrial containers merchant wholesalers\nIndustrial diamonds merchant wholesalers\nPrinting inks merchant wholesalers\nIndustrial sand merchant wholesalers\nRefractory materials (e.g., brick, blocks, shapes) merchant wholesalers\nWelding supplies (except welding gases) merchant wholesalers\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 423850,
    title: 'Service Establishment Equipment and Supplies Merchant Wholesalers',
    description:
      "This industry comprises establishments primarily engaged in the merchant wholesale distribution of specialized equipment and supplies of the type used by service establishments (except specialized equipment and supplies used in offices, stores, hotels, restaurants, schools, health and medical facilities, photographic facilities, and specialized equipment used in transportation and construction activities).\n\nIllustrative Examples:\n\nAmusement park equipment merchant wholesalers\nBeauty parlor equipment and supplies merchant wholesalers\nCar wash equipment and supplies merchant wholesalers\nDrycleaning equipment and supplies merchant wholesalers\nVoting machines merchant wholesalers\nJanitorial equipment and supplies merchant wholesalers\nUndertakers' equipment and supplies merchant wholesalers\nUpholsterers' equipment and supplies (except fabrics) merchant wholesalers\nWater treatment equipment, municipal, merchant wholesalers\n\n\nCross-References. Establishments primarily engaged in--",
  },
  {
    code: 423860,
    title: 'Transportation Equipment and Supplies (except Motor Vehicle) Merchant Wholesalers',
    description:
      'This industry comprises establishments primarily engaged in the merchant wholesale distribution of transportation equipment and supplies (except marine pleasure craft and motor vehicles).\n\nIllustrative Examples:\n\nAircraft merchant wholesalers\nRailroad cars merchant wholesalers\nShips merchant wholesalers\nMotorized passenger golf carts merchant wholesalers\nBoats (except pleasure) merchant wholesalers\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 423910,
    title: 'Sporting and Recreational Goods and Supplies Merchant Wholesalers',
    description:
      'This industry comprises establishments primarily engaged in the merchant wholesale distribution of sporting goods and accessories; billiard and pool supplies; sporting firearms and ammunition; and/or marine pleasure craft, equipment, and supplies.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 423920,
    title: 'Toy and Hobby Goods and Supplies Merchant Wholesalers',
    description:
      'This industry comprises establishments primarily engaged in the merchant wholesale distribution of games, toys, fireworks, playing cards, hobby goods and supplies, and/or related goods.\n',
  },
  {
    code: 423930,
    title: 'Recyclable Material Merchant Wholesalers',
    description:
      'This industry comprises establishments primarily engaged in the merchant wholesale distribution of automotive scrap, industrial scrap, and other recyclable materials.  Included in this industry are auto wreckers primarily engaged in dismantling motor vehicles for the purpose of wholesaling scrap.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 423940,
    title: 'Jewelry, Watch, Precious Stone, and Precious Metal Merchant Wholesalers',
    description:
      "This industry comprises establishments primarily engaged in the merchant wholesale distribution of jewelry, precious and semiprecious stones, precious metals and metal flatware, costume jewelry, watches, clocks, silverware, and/or jewelers' findings.\n\nCross-References. Establishments primarily engaged in--",
  },
  {
    code: 423990,
    title: 'Other Miscellaneous Durable Goods Merchant Wholesalers',
    description:
      'This industry comprises establishments primarily engaged in the merchant wholesale distribution of durable goods (except motor vehicles and motor vehicle parts and supplies; furniture and home furnishings; lumber and other construction materials; professional and commercial equipment and supplies; metals and minerals (except petroleum); electrical goods; hardware, and plumbing and heating equipment and supplies; machinery, equipment, and supplies; sporting and recreational goods and supplies; toy and hobby goods and supplies; recyclable materials; and jewelry, watches, precious stones, and precious metals).\n\nIllustrative Examples:\n\nFirearms (except sporting) merchant wholesalers\nMusical instruments merchant wholesalers\nLuggage merchant wholesalers\nMonuments and grave markers merchant wholesalers\nPrerecorded compact discs (CDs) and digital video discs (DVDs) merchant wholesalers\nTimber and timber products (except lumber) merchant wholesalers\nPersonal safety devices and supplies (e.g., eye shields, face shields, nonelectric respirators) merchant wholesalers\nSigns (except electrical) merchant wholesalers\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 424110,
    title: 'Printing and Writing Paper Merchant Wholesalers',
    description:
      'This industry comprises establishments primarily engaged in the merchant wholesale distribution of bulk printing and/or writing paper generally on rolls for further processing.\n\nIllustrative Examples:\n\nBulk envelope paper merchant wholesalers\nBulk paper (e.g., fine, printing, writing) merchant wholesalers\nBulk groundwood paper merchant wholesalers\nNewsprint merchant wholesalers \n\n\nCross-References.',
  },
  {
    code: 424120,
    title: 'Stationery and Office Supplies Merchant Wholesalers',
    description:
      'This industry comprises establishments primarily engaged in the merchant wholesale distribution of stationery, office supplies, and/or gift wrap.\n\nIllustrative Examples:\n\nPhotocopy supplies merchant wholesalers\nEnvelopes merchant wholesalers\nSocial stationery merchant wholesalers\nFile cards and folders merchant wholesalers\nGreeting cards merchant wholesalers\nOffice paper (e.g., printer, copier) merchant wholesalers\nWriting pens merchant wholesalers\nPencils merchant wholesalers\n\n\nCross-References.',
  },
  {
    code: 424130,
    title: 'Industrial and Personal Service Paper Merchant Wholesalers',
    description:
      'This industry comprises establishments primarily engaged in the merchant wholesale distribution of kraft wrapping and other coarse paper, paperboard, converted paper (except stationery and office supplies), and/or related disposable plastics products.\n\nIllustrative Examples:\n\nCorrugated paper merchant wholesalers\nPaper and disposable plastics tableware (e.g., utensils, dishes, cups) merchant wholesalers\nPaper napkins merchant wholesalers\nPaperboard and disposable plastics boxes and containers merchant wholesalers\nPlastics bags merchant wholesalers\nPaper and disposable plastics shipping supplies merchant wholesalers\nPaper towels merchant wholesalers\nPaper bags merchant wholesalers\nSanitary paper products merchant wholesalers\nWrapping paper (except gift wrap) merchant wholesalers\nWaxed paper merchant wholesalers\nPlastics foam products, disposable (except packaging, packing), merchant wholesalers \n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 424210,
    title: "Drugs and Druggists' Sundries Merchant Wholesalers",
    description:
      "This industry comprises establishments primarily engaged in the merchant wholesale distribution of biological and medical products; botanical drugs and herbs; and pharmaceutical products intended for internal and/or external consumption in such forms as ampoules, tablets, capsules, vials, ointments, powders, solutions, and suspensions.\n\nIllustrative Examples:\n\nAntibiotics merchant wholesalers\nEndocrine substances merchant wholesalers\nBlood derivatives merchant wholesalers\nIn-vitro and in-vivo diagnostics merchant wholesalers\nDrugs merchant wholesalers\nBotanicals merchant wholesalers\nVaccines merchant wholesalers\nCosmetics merchant wholesalers\nVitamins merchant wholesalers\nVeterinarians' medicines merchant wholesalers\n\n\nCross-References.",
  },
  {
    code: 424310,
    title: 'Piece Goods, Notions, and Other Dry Goods Merchant Wholesalers',
    description:
      'This industry comprises establishments primarily engaged in the merchant wholesale distribution of piece goods, fabrics, knitting yarns (except industrial), thread and other notions, and/or hair accessories.\n\nCross-References.',
  },
  {
    code: 424340,
    title: 'Footwear Merchant Wholesalers',
    description:
      'This industry comprises establishments primarily engaged in the merchant wholesale distribution of footwear of leather, rubber, and other materials, including athletic footwear (except specialty athletic footwear).\n\nCross-References.',
  },
  {
    code: 424350,
    title: 'Clothing and Clothing Accessories Merchant Wholesalers',
    description:
      'This industry comprises establishments primarily engaged in the merchant wholesale distribution of clothing and clothing accessories.\n\nIllustrative Examples:\n\nBaby bottles merchant wholesalers\nDiapers (except disposable) merchant wholesalers\nDresses merchant wholesalers\nFur clothing merchant wholesalers\nHandbags merchant wholesalers\nHosiery merchant wholesalers\nLingerie merchant wholesalers\nMillinery merchant wholesalers\nNightwear merchant wholesalers\nOuterwear merchant wholesalers\nSportswear merchant wholesalers\nSwimwear merchant wholesalers\n\n\nCross-References.',
  },
  {
    code: 424410,
    title: 'General Line Grocery Merchant Wholesalers',
    description:
      'This industry comprises establishments primarily engaged in the merchant wholesale distribution of a general line (wide range) of groceries.\n\nCross-References.',
  },
  {
    code: 424420,
    title: 'Packaged Frozen Food Merchant Wholesalers',
    description:
      'This industry comprises establishments primarily engaged in the merchant wholesale distribution of packaged frozen foods (except dairy products).\n\nIllustrative Examples:\n\nFrozen bakery products merchant wholesalers\nPackaged frozen fish merchant wholesalers\nFrozen juices merchant wholesalers\nPackaged frozen meats merchant wholesalers\nFrozen vegetables merchant wholesalers\nPackaged frozen poultry merchant wholesalers\n\n\nCross-References.',
  },
  {
    code: 424430,
    title: 'Dairy Product (except Dried or Canned) Merchant Wholesalers',
    description:
      'This industry comprises establishments primarily engaged in the merchant wholesale distribution of dairy products (except dried or canned).\n\nIllustrative Examples:\n\nButter merchant wholesalers\nFluid milk (except canned) merchant wholesalers\nCheese merchant wholesalers\nIce cream and ices merchant wholesalers\nCream merchant wholesalers\nYogurt merchant wholesalers \n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 424440,
    title: 'Poultry and Poultry Product Merchant Wholesalers',
    description:
      'This industry comprises establishments primarily engaged in the merchant wholesale distribution of poultry and/or poultry products (except canned and packaged frozen).\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 424450,
    title: 'Confectionery Merchant Wholesalers',
    description:
      'This industry comprises establishments primarily engaged in the merchant wholesale distribution of confectioneries; salted or roasted nuts; popcorn; potato, corn, and similar chips; and/or fountain fruits and syrups.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 424460,
    title: 'Fish and Seafood Merchant Wholesalers',
    description:
      'This industry comprises establishments primarily engaged in the merchant wholesale distribution of fish and seafood (except canned or packaged frozen).\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 424470,
    title: 'Meat and Meat Product Merchant Wholesalers',
    description:
      'This industry comprises establishments primarily engaged in the merchant wholesale distribution of meats and meat products (except canned and packaged frozen) and/or lard.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 424480,
    title: 'Fresh Fruit and Vegetable Merchant Wholesalers',
    description:
      'This industry comprises establishments primarily engaged in the merchant wholesale distribution of fresh fruits and vegetables.\n',
  },
  {
    code: 424490,
    title: 'Other Grocery and Related Products Merchant Wholesalers',
    description:
      'This industry comprises establishments primarily engaged in the merchant wholesale distribution of groceries and related products (except a general line of groceries; packaged frozen food; dairy products (except dried and canned); poultry products (except canned); confectioneries; fish and seafood (except canned); meat products (except canned); and fresh fruits and vegetables).  Included in this industry are establishments primarily engaged in the bottling and merchant wholesale distribution of spring and mineral waters processed by others.\n\nIllustrative Examples:\n\nBakery products (except frozen) merchant wholesalers\nCanned seafood merchant wholesalers\nCanned fish merchant wholesalers\nCanned vegetables merchant wholesalers\nCanned fruits merchant wholesalers\nDried milk merchant wholesalers\nCanned meats merchant wholesalers\nSoft drinks merchant wholesalers\nCanned milk merchant wholesalers\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 424510,
    title: 'Grain and Field Bean Merchant Wholesalers',
    description:
      'This industry comprises establishments primarily engaged in the merchant wholesale distribution of grains, such as corn, wheat, oats, barley, and unpolished rice; dry beans; and soybeans and other inedible beans.  Included in this industry are establishments primarily engaged in operating country or terminal grain elevators primarily for the purpose of wholesaling.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 424520,
    title: 'Livestock Merchant Wholesalers',
    description:
      'This industry comprises establishments primarily engaged in the merchant wholesale distribution of livestock (except horses and mules).\n\nIllustrative Examples:\n\nCattle merchant wholesalers\nHogs merchant wholesalers\nGoats merchant wholesalers\nSheep merchant wholesalers\n\n\nCross-References.',
  },
  {
    code: 424590,
    title: 'Other Farm Product Raw Material Merchant Wholesalers',
    description:
      'This industry comprises establishments primarily engaged in the merchant wholesale distribution of farm products (except grain and field beans, livestock, raw milk, live poultry, and fresh fruits and vegetables).\n\nIllustrative Examples:\n\nChicks, live, merchant wholesalers\nHemp merchant wholesalers\nMules merchant wholesalers\nHides merchant wholesalers\nRaw cotton merchant wholesalers\nHorses merchant wholesalers\nNuts, unprocessed or shelled only, merchant wholesalers\nRaw pelts merchant wholesalers\nLeaf tobacco merchant wholesalers\nSod merchant wholesalers\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 424610,
    title: 'Plastics Materials and Basic Forms and Shapes Merchant Wholesalers',
    description:
      'This industry comprises establishments primarily engaged in the merchant wholesale distribution of plastics materials and resins, and unsupported plastics film, sheet, sheeting, rod, tube, and other basic forms and shapes.\n',
  },
  {
    code: 424690,
    title: 'Other Chemical and Allied Products Merchant Wholesalers',
    description:
      'This industry comprises establishments primarily engaged in the merchant wholesale distribution of chemicals and allied products (except agricultural and medicinal chemicals, paints and varnishes, fireworks, and plastics materials and basic forms and shapes).\n\nIllustrative Examples:\n\nAcids merchant wholesalers\nIndustrial chemicals merchant wholesalers\nAutomotive chemicals (except lubricating oils and greases) merchant wholesalers\nIndustrial salts merchant wholesalers\nDyestuffs merchant wholesalers\nRosins merchant wholesalers\nExplosives (except ammunition and fireworks) merchant wholesalers\nTurpentine merchant wholesalers \n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 424710,
    title: 'Petroleum Bulk Stations and Terminals',
    description:
      'This industry comprises establishments with bulk liquid storage facilities primarily engaged in the merchant wholesale distribution of crude petroleum and petroleum products, including liquefied petroleum gas.\n\nCross-References.',
  },
  {
    code: 424720,
    title:
      'Petroleum and Petroleum Products Merchant Wholesalers (except Bulk Stations and Terminals)',
    description:
      'This industry comprises establishments primarily engaged in the merchant wholesale distribution of petroleum and petroleum products (except from bulk liquid storage facilities).\n\nIllustrative Examples:\n\nGasoline merchant wholesalers (except bulk stations, terminals)\nLubricating oil and grease merchant wholesalers (except bulk stations, terminals)\nBottled liquid petroleum gas merchant wholesalers\nFuel oil merchant wholesalers (except bulk stations, terminals)\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 424810,
    title: 'Beer and Ale Merchant Wholesalers',
    description:
      'This industry comprises establishments primarily engaged in the merchant wholesale distribution of beer, ale, porter, and other fermented malt beverages.\n',
  },
  {
    code: 424820,
    title: 'Wine and Distilled Alcoholic Beverage Merchant Wholesalers',
    description:
      'This industry comprises establishments primarily engaged in the merchant wholesale distribution of wine, distilled alcoholic beverages, and/or neutral spirits and ethyl alcohol used in blended wines and distilled liquors.\n',
  },
  {
    code: 424910,
    title: 'Farm Supplies Merchant Wholesalers',
    description:
      'This industry comprises establishments primarily engaged in the merchant wholesale distribution of farm supplies, such as animal feeds, fertilizers, agricultural chemicals, pesticides, plant seeds, and plant bulbs.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 424920,
    title: 'Book, Periodical, and Newspaper Merchant Wholesalers',
    description:
      'This industry comprises establishments primarily engaged in the merchant wholesale distribution of books, periodicals, and newspapers.\n',
  },
  {
    code: 424930,
    title: "Flower, Nursery Stock, and Florists' Supplies Merchant Wholesalers",
    description:
      "This industry comprises establishments primarily engaged in the merchant wholesale distribution of flowers, florists' supplies, and/or nursery stock (except plant seeds and plant bulbs).\n\nCross-References. Establishments primarily engaged in--",
  },
  {
    code: 424940,
    title: 'Tobacco Product and Electronic Cigarette Merchant Wholesalers',
    description:
      'This industry comprises establishments primarily engaged in the merchant wholesale distribution of tobacco products, such as cigarettes, snuff, cigars, pipe tobacco, and electronic cigarettes (including related parts and accessories).\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 424950,
    title: 'Paint, Varnish, and Supplies Merchant Wholesalers',
    description:
      'This industry comprises establishments primarily engaged in the merchant wholesale distribution of paints, varnishes, and similar coatings; pigments; wallpaper; and supplies, such as paintbrushes and rollers.\n\nCross-References.',
  },
  {
    code: 424990,
    title: 'Other Miscellaneous Nondurable Goods Merchant Wholesalers',
    description:
      "This industry comprises establishments primarily engaged in the merchant wholesale distribution of nondurable goods (except printing and writing paper; stationery and office supplies; industrial and personal service paper; drugs and druggists' sundries; apparel, piece goods, and notions; grocery and related products; farm product raw materials; chemical and allied products; petroleum and petroleum products; beer, wine, and distilled alcoholic beverages; farm supplies; books, periodicals, and newspapers; flowers, nursery stock, and florists' supplies; tobacco and tobacco products; and paint, varnishes, wallpaper, and supplies).\n\nIllustrative Examples:\n\nArtists' supplies merchant wholesalers\nPet supplies (except pet food) merchant wholesalers\nBurlap merchant wholesalers\nStatuary (except religious) merchant wholesalers\nChristmas trees (e.g., artificial, cut) merchant wholesalers\nTextile bags merchant wholesalers\nIndustrial yarns merchant wholesalers\n\n\nCross-References. Establishments primarily engaged in--",
  },
  {
    code: 425120,
    title: 'Wholesale Trade Agents and Brokers',
    description:
      "This industry comprises wholesale trade agents and brokers acting on behalf of buyers or sellers in the wholesale distribution of goods, including those that use the Internet or other electronic means to bring together buyers and sellers.  Agents and brokers do not take title to the goods being sold but rather receive a commission or fee for their service.  Agents and brokers for all durable and nondurable goods are included in this industry.\n\nIllustrative Examples:\n\nIndependent sales representatives\nManufacturers' sales representatives\nGroup purchasing organizations (acting as agents for goods distribution)\n\n\nCross-References.",
  },
  {
    code: 441110,
    title: 'New Car Dealers',
    description:
      'This industry comprises establishments primarily engaged in retailing new automobiles and light trucks, such as sport utility vehicles, and passenger and cargo vans, or retailing these new vehicles in combination with activities, such as repair services, retailing used cars, and selling replacement parts and accessories.\n\nIllustrative Examples:\n\nAutomobile dealers, new only, or new and used\nLight utility truck dealers, new only, or new and used\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 441120,
    title: 'Used Car Dealers',
    description:
      'This industry comprises establishments primarily engaged in retailing used automobiles and light trucks, such as sport utility vehicles, and passenger and cargo vans.\n\nIllustrative Examples:\n\nAntique auto dealers\nLight truck dealers, used only\nAutomobile dealers, used only\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 441210,
    title: 'Recreational Vehicle Dealers',
    description:
      'This industry comprises establishments primarily engaged in retailing new and/or used recreational vehicles commonly referred to as RVs or retailing these new vehicles in combination with activities, such as repair services and selling replacement parts and accessories.\n\nIllustrative Examples:\n\nMotor home dealers\nRecreational vehicle (RV) parts and accessories stores\nRecreational vehicle (RV) dealers\nTravel trailer dealers \n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 441222,
    title: 'Boat Dealers',
    description:
      'This U.S. industry comprises establishments primarily engaged in (1) retailing new and/or used boats or retailing new boats in combination with activities, such as repair services and selling replacement parts and accessories, and/or (2) retailing new and/or used outboard motors, boat trailers, marine supplies, parts, and accessories.\n\nIllustrative Examples:\n\nBoat dealers (e.g., power boats, rowboats, sailboats)\nOutboard motor dealers\nMarine supply dealers\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 441227,
    title: 'Motorcycle, ATV, and All Other Motor Vehicle Dealers',
    description:
      'This U.S. industry comprises establishments primarily engaged in retailing new and/or used motorcycles, motor scooters, motorbikes, mopeds, off-road all-terrain vehicles (ATV), personal watercraft, utility trailers, and other motor vehicles (except automobiles, light trucks, recreational vehicles, and boats) or retailing these new vehicles in combination with activities, such as repair services and selling replacement parts and accessories.\n\nIllustrative Examples:\n\nAll-terrain vehicle (ATV) dealers\nMotorcycle dealers\nMoped dealers\nMotorcycle parts and accessories dealers\nPersonal watercraft dealers\nAircraft dealers\nSnowmobile dealers\nPowered golf cart dealers\nUtility trailer dealers\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 441330,
    title: 'Automotive Parts and Accessories Retailers',
    description:
      'This industry comprises establishments primarily engaged in retailing new, used, and/or rebuilt automotive parts and accessories, with or without repairing automobiles; and/or establishments primarily engaged in retailing and installing automotive accessories.\n\nIllustrative Examples:\n\nAutomotive parts and supply retailers\nTruck cap retailers\nAutomotive stereo retailers\nUsed automotive parts retailers\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 441340,
    title: 'Tire Dealers',
    description:
      'This industry comprises establishments primarily engaged in retailing new and/or used tires and tubes or retailing new tires in combination with automotive repair services.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 444110,
    title: 'Home Centers',
    description:
      'This industry comprises establishments generally known as home centers primarily engaged in retailing a general line of new home repair and improvement materials and supplies, such as lumber, plumbing goods, electrical goods, tools, housewares, hardware, and lawn and garden supplies, with no one merchandise line predominating.\n\nCross-References.',
  },
  {
    code: 444120,
    title: 'Paint and Wallpaper Retailers',
    description:
      'This industry comprises establishments primarily engaged in retailing paint, wallpaper, and related supplies.\n\nCross-References.',
  },
  {
    code: 444140,
    title: 'Hardware Retailers',
    description:
      "This industry comprises establishments primarily engaged in retailing a general line of new hardware items, such as tools and builders' hardware.\n\nCross-References. Establishments primarily engaged in--",
  },
  {
    code: 444180,
    title: 'Other Building Material Dealers',
    description:
      'This industry comprises establishments (except home centers, paint and wallpaper retailers, and hardware retailers) primarily engaged in retailing specialized lines of new building materials, such as lumber, fencing, glass, doors, plumbing fixtures and supplies, electrical supplies, prefabricated buildings and kits, and kitchen and bath cabinets and countertops to be installed.\n\nIllustrative Examples:\n\nElectrical supply retailers\nKitchen cabinet (except custom) retailers\nFencing dealers\nLumber yards, retail\nFloor covering retailers, hardwood or ceramic tile only\nPlumbing supply retailers\nGarage door dealers\nPrefabricated building (except manufactured home) dealers\nGlass (except automotive) retailers\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 444230,
    title: 'Outdoor Power Equipment Retailers',
    description:
      'This industry comprises establishments primarily engaged in retailing new outdoor power equipment or retailing new outdoor power equipment in combination with activities, such as repair services and selling replacement parts.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 444240,
    title: 'Nursery, Garden Center, and Farm Supply Retailers',
    description:
      'This industry comprises establishments primarily engaged in retailing nursery and garden products, such as trees, shrubs, plants, seeds, bulbs, and sod, that are predominantly grown elsewhere.  These establishments may sell a limited amount of a product they grow themselves.  Also included in this industry are establishments primarily engaged in retailing farm supplies, such as animal (except pet) feed, fertilizers, agricultural chemicals, and pesticides.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 445110,
    title: 'Supermarkets and Other Grocery Retailers (except Convenience Retailers)',
    description:
      'This industry comprises establishments generally known as supermarkets and other grocery retailers (except convenience retailers) primarily engaged in retailing a general line of food, such as canned and frozen foods; fresh fruits and vegetables; and fresh and prepared meats, fish, and poultry.  Included in this industry are delicatessen-type establishments primarily engaged in retailing a general line of food.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 445131,
    title: 'Convenience Retailers',
    description:
      'This U.S. industry comprises establishments primarily engaged in retailing a limited line of groceries that generally includes milk, bread, soda, and snacks, such as convenience stores or food marts (except those operating fuel pumps).\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 445132,
    title: 'Vending Machine Operators',
    description:
      'This U.S. industry comprises establishments primarily engaged in retailing merchandise through vending machines that they service.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 445230,
    title: 'Fruit and Vegetable Retailers',
    description:
      'This industry comprises establishments primarily engaged in retailing fresh fruits and vegetables.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 445240,
    title: 'Meat Retailers',
    description:
      'This industry comprises establishments primarily engaged in retailing fresh, frozen, or cured meats and poultry not for immediate consumption.  Delicatessen-type establishments primarily engaged in retailing fresh meat are included in this industry.\n\nIllustrative Examples:\n\nBaked ham retailers\nMeat retailers\nButcher shops\nPoultry dealers\nFrozen meat retailers\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 445250,
    title: 'Fish and Seafood Retailers',
    description:
      'This industry comprises establishments primarily engaged in retailing fresh, frozen, or cured fish and seafood products not for immediate consumption.\n\nCross-References.',
  },
  {
    code: 445291,
    title: 'Baked Goods Retailers',
    description:
      'This U.S. industry comprises establishments primarily engaged in retailing baked goods not for immediate consumption and not made on the premises.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 445292,
    title: 'Confectionery and Nut Retailers',
    description:
      'This U.S. industry comprises establishments primarily engaged in retailing candy and other confections, nuts, and popcorn not for immediate consumption and not made on the premises.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 445298,
    title: 'All Other Specialty Food Retailers',
    description:
      'This U.S. industry comprises establishments primarily engaged in retailing miscellaneous specialty foods (except fruit and vegetables, meat, fish, seafood, confections, nuts, popcorn, and baked goods) not for immediate consumption and not made on the premises.\n\nIllustrative Examples:\n\nCoffee and tea (i.e., packaged) retailers\nSoft drink (i.e., bottled) retailers\nDairy product retailers\nSpice retailers\nGourmet food retailers\nWater (i.e., bottled) retailers\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 445320,
    title: 'Beer, Wine, and Liquor Retailers',
    description:
      'This industry comprises establishments primarily engaged in retailing packaged alcoholic beverages, such as ale, beer, wine, and liquor.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 449110,
    title: 'Furniture Retailers',
    description:
      'This industry comprises establishments primarily engaged in retailing new furniture, such as household furniture (e.g., baby furniture, box springs, and mattresses) and outdoor furniture; office furniture (except sold in combination with office supplies and equipment); and/or furniture sold in combination with major appliances, home electronics, home furnishings, or floor coverings.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 449121,
    title: 'Floor Covering Retailers',
    description:
      'This U.S. industry comprises establishments primarily engaged in retailing new floor coverings, such as rugs and carpets, laminate and vinyl floor coverings, linoleum flooring, and floor tile (except ceramic tile or hardwood floor coverings only); or retailing new floor coverings in combination with installation and repair services.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 449122,
    title: 'Window Treatment Retailers',
    description:
      'This U.S. industry comprises establishments primarily engaged in retailing new window treatments, such as curtains, drapes, blinds, and shades.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 449129,
    title: 'All Other Home Furnishings Retailers',
    description:
      'This U.S. industry comprises establishments primarily engaged in retailing new home furnishings (except furniture, floor coverings, and window treatments).\n\nIllustrative Examples:\n\nBath shops\nKitchenware retailers\nChinaware retailers\nLinen retailers\nElectric lamp retailers\nPicture frame retailers, custom\nGlassware retailers\nWood-burning stove retailers\nHousewares retailers\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 449210,
    title: 'Electronics and Appliance Retailers',
    description:
      'This industry comprises establishments primarily engaged in one of the following: (1) retailing an array of new household-type appliances and consumer-type electronic products, such as televisions, computers, electronic tablets, and cameras; (2) specializing in retailing a single line of new consumer-type electronic products; (3) retailing these new products in combination with repair and support services; (4) retailing new prepackaged or downloadable computer software (without publishing); and/or (5) retailing prerecorded audio and video media, such as downloadable digital music and video files (without production or publishing), CDs, and DVDs.\n\nIllustrative Examples:\n\nAppliance retailers, household-type\nConsumer-type electronics retailers (e.g., televisions, computers, cameras)\nCellular telephone accessories retailers\nStereo and sound system retailers (except automotive) \n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 455110,
    title: 'Department Stores',
    description:
      'This industry comprises establishments generally known as department stores that have separate departments for general lines of new merchandise, such as apparel, jewelry, home furnishings, and toys, with no one merchandise line predominating.  Department stores may sell perishable groceries, such as fresh fruits, vegetables, and dairy products, but such sales are insignificant.  Department stores with fixed point-of-sale locations may have separate customer checkout areas in each department, central customer checkout areas, or both.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 455211,
    title: 'Warehouse Clubs and Supercenters',
    description:
      'This U.S. industry comprises establishments generally known as warehouse clubs, superstores, or supercenters, primarily engaged in retailing a general line of groceries, including a significant amount and variety of fresh fruits, vegetables, dairy products, meats, and other perishable groceries, in combination with a general line of new merchandise, such as apparel, furniture, and appliances.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 455219,
    title: 'All Other General Merchandise Retailers',
    description:
      'This U.S. industry comprises establishments primarily engaged in retailing new and used general merchandise (except department stores, warehouse clubs, superstores, and supercenters).  These establishments retail a general line of new and used merchandise, such as apparel, automotive parts, dry goods, groceries, hardware, housewares or home furnishings, and other lines in limited amounts, with none of the lines predominating.  This industry also includes establishments primarily engaged in retailing a general line of new and used merchandise on an auction basis.\n\nIllustrative Examples:\n\nDollar stores\nGeneral merchandise (new and used) auction houses\nGeneral merchandise showrooms\nGeneral merchandise trading posts\nGeneral stores\nHome and auto supply stores\nVariety stores\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 456110,
    title: 'Pharmacies and Drug Retailers',
    description:
      'This industry comprises establishments generally known as pharmacies and drug retailers engaged in retailing prescription or nonprescription drugs and medicines.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 456120,
    title: 'Cosmetics, Beauty Supplies, and Perfume Retailers',
    description:
      'This industry comprises establishments primarily engaged in retailing cosmetics, perfumes, toiletries, and personal grooming products.\n\nCross-References.',
  },
  {
    code: 456130,
    title: 'Optical Goods Retailers',
    description:
      'This industry comprises establishments primarily engaged in one or more of the following: (1) retailing and fitting prescription eyeglasses and contact lenses; (2) retailing prescription eyeglasses in combination with the grinding of lenses to order on the premises; and (3) retailing nonprescription eyeglasses.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 456191,
    title: 'Food (Health) Supplement Retailers',
    description:
      'This U.S. industry comprises establishments primarily engaged in retailing food supplement products, such as vitamins, nutrition supplements, and body enhancing supplements.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 456199,
    title: 'All Other Health and Personal Care Retailers',
    description:
      'This U.S. industry comprises establishments primarily engaged in retailing specialized lines of health and personal care merchandise (except drugs, medicines, cosmetics, beauty supplies, perfumes, optical goods, and food supplement products).\n\nIllustrative Examples:\n\nConvalescent supply retailers\nSick room supply retailers\nHearing aid retailers\nWheelchair retailers \n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 457110,
    title: 'Gasoline Stations with Convenience Stores',
    description:
      'This industry comprises establishments primarily engaged in retailing automotive fuels (e.g., gasoline, diesel fuel, gasohol, alternative fuels) in combination with a limited line of groceries.  These establishments can either be in a convenience store (i.e., food mart) setting or a gasoline station setting.  These establishments may also provide automotive repair services.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 457120,
    title: 'Other Gasoline Stations',
    description:
      'This industry comprises establishments generally known as gasoline stations (except those with convenience stores) or truck stops primarily engaged in (1) retailing automotive fuels (e.g., gasoline, diesel fuel, gasohol, alternative fuels) or (2) retailing these fuels in combination with activities, such as providing repair services; selling automotive oils, replacement parts, and accessories; and/or providing food services.\n\nIllustrative Examples:\n\nGasoline stations without convenience stores\t\nTruck stops\nMarine service stations\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 457210,
    title: 'Fuel Dealers',
    description:
      'This industry comprises establishments primarily engaged in retailing heating oil, liquefied petroleum (LP) gas, and other fuels via direct selling (i.e., home delivery).\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 458110,
    title: 'Clothing and Clothing Accessories Retailers',
    description:
      'This industry comprises establishments primarily engaged in retailing general or specialized lines of new clothing and clothing accessories, such as hats and caps, costume jewelry, gloves, handbags, ties, wigs, toupees, and belts.  These establishments may provide basic alterations, such as hemming, taking in or letting out seams, or lengthening or shortening sleeves.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 458210,
    title: 'Shoe Retailers',
    description:
      'This industry comprises establishments primarily engaged in retailing all types of new footwear (except hosiery and specialty sports footwear, such as golf shoes, bowling shoes, and cleated shoes).  Establishments primarily engaged in retailing new tennis shoes or sneakers are included in this industry.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 458310,
    title: 'Jewelry Retailers',
    description:
      'This industry comprises establishments primarily engaged in retailing one or more of the following items: (1) new jewelry (except costume jewelry); (2) new sterling and plated silverware; and (3) new watches and clocks.  Also included are establishments retailing these new products in combination with lapidary work and/or repair services.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 458320,
    title: 'Luggage and Leather Goods Retailers',
    description:
      'This industry comprises establishments primarily engaged in retailing new luggage, briefcases, and trunks, or retailing these new products in combination with a general line of leather items (except leather apparel), such as belts, gloves, and handbags.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 459110,
    title: 'Sporting Goods Retailers',
    description:
      'This industry comprises establishments primarily engaged in retailing new sporting goods, such as bicycles and bicycle parts; camping equipment; exercise and fitness equipment; athletic uniforms; specialty sports footwear; and other sporting goods, equipment, and accessories.\n\nIllustrative Examples:\n\nAthletic uniform supply retailers\nFishing supply retailers\nBicycle (except motorized) retailers\nGolf pro shops\nBowling equipment and supply retailers\nTack shops\nDiving equipment retailers\nSporting goods (e.g., scuba, skiing, ball sports) retailers\nExercise equipment retailers\nSporting gun and hunting equipment retailers\nCamping and hiking equipment retailers  \n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 459120,
    title: 'Hobby, Toy, and Game Retailers',
    description:
      'This industry comprises establishments primarily engaged in retailing new toys, games, and hobby and craft supplies (except needlecraft).\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 459130,
    title: 'Sewing, Needlework, and Piece Goods Retailers',
    description:
      'This industry comprises establishments primarily engaged in retailing new sewing supplies, fabrics, patterns, yarns, and other needlework accessories or retailing these products in combination with new sewing machines.\n\nIllustrative Examples:\n\nFabric retailers\nSewing supply retailers\nNeedlecraft sewing supply retailers\nUpholstery materials retailers\nQuilting supply retailers\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 459140,
    title: 'Musical Instrument and Supplies Retailers',
    description:
      'This industry comprises establishments primarily engaged in retailing new musical instruments, sheet music, and related supplies; or retailing these new products in combination with musical instrument repair, rental, or music instruction.\n\nIllustrative Examples:\n\nMusical instrument retailers\nSheet music retailers\nPiano retailers\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 459210,
    title: 'Book Retailers and News Dealers',
    description:
      'This industry comprises establishments primarily engaged in retailing new books, newspapers, magazines, and other periodicals (without publishing).\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 459310,
    title: 'Florists',
    description:
      'This industry comprises establishments generally known as florists primarily engaged in retailing cut flowers, floral arrangements, and potted plants grown elsewhere.  These establishments may prepare the arrangements they sell.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 459410,
    title: 'Office Supplies and Stationery Retailers',
    description:
      'This industry comprises establishments primarily engaged in one or more of the following: (1) retailing new office supplies, stationery, and school supplies; (2) retailing a combination of new office equipment, furniture, and supplies; and (3) retailing new office equipment, furniture, and supplies in combination with selling new computers.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 459420,
    title: 'Gift, Novelty, and Souvenir Retailers',
    description:
      'This industry comprises establishments primarily engaged in retailing new gifts, novelty merchandise, souvenirs, greeting cards, seasonal and holiday decorations, and curios.\n\nIllustrative Examples:\n\nGreeting card retailers\nSeasonal and holiday decoration retailers\nNovelty retailers\nSouvenir retailers\nGift retailers\nFruit basket or fruit bouquet retailers \n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 459510,
    title: 'Used Merchandise Retailers',
    description:
      'This industry comprises establishments primarily engaged in retailing used merchandise, antiques, and secondhand goods (except motor vehicles, such as automobiles, RVs, motorcycles, and boats; motor vehicle parts; tires; and mobile homes).  This industry includes establishments retailing used merchandise on an auction basis.\n\nIllustrative Examples:\n\nAntique retailers\nUsed household appliance retailers\nUsed book retailers\nUsed merchandise thrift shops\nUsed clothing retailers\nUsed sporting goods retailers\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 459910,
    title: 'Pet and Pet Supplies Retailers',
    description:
      'This industry comprises establishments primarily engaged in retailing pets, pet foods, and pet supplies.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 459920,
    title: 'Art Dealers',
    description:
      'This industry comprises establishments primarily engaged in retailing original and limited edition art works created by others.  Included in this industry are establishments primarily engaged in displaying works of art for retail sale in art galleries.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 459930,
    title: 'Manufactured (Mobile) Home Dealers',
    description:
      'This industry comprises establishments primarily engaged in retailing new and/or used manufactured homes (i.e., mobile homes), parts, and equipment.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 459991,
    title: 'Tobacco, Electronic Cigarette, and Other Smoking Supplies Retailers',
    description:
      "This U.S. industry comprises establishments primarily engaged in retailing cigarettes, electronic cigarettes, cigars, tobacco, pipes, and other smokers' supplies.\n\nIllustrative Examples:\n\nCigar retailers\nE-cigarette retailers\nSmokers' supply retailers\nCigarette retailers\nTobacco retailers\nVape shops\n\n",
  },
  {
    code: 459999,
    title: 'All Other Miscellaneous Retailers',
    description:
      "This U.S. industry comprises establishments primarily engaged in retailing miscellaneous specialized lines of merchandise (except motor vehicle and parts dealers; building material and garden equipment and supplies dealers; food and beverage retailers; furniture, home furnishings, electronics, and appliance retailers; general merchandise retailers; health and personal care retailers; gasoline stations and fuel dealers; clothing, clothing accessories, shoe, and jewelry retailers; sporting goods, hobby, and musical instrument retailers; book retailers and news dealers; florists; office supplies, stationery, and gift retailers; used merchandise retailers; pet and pet supplies retailers; art dealers; manufactured (mobile) home dealers; and tobacco, electronic cigarette, and other smoking supplies retailers).\n\nIllustrative Examples:\n\nArt supply retailers\nCandle retailers\nHome security equipment retailers\nCemetery memorial (e.g., headstones, markers, vaults) dealers\nHot tub retailers\nFireworks retailers\nCollectors' items (e.g., autograph, coin, card, stamp) retailers (except used rare items)\nSwimming pool (above-ground) and supply retailers\nTrophy (e.g., awards and plaques) retailers\nFlower retailers, artificial or dried\n\n\nCross-References. Establishments primarily engaged in--",
  },
  {
    code: 481111,
    title: 'Scheduled Passenger Air Transportation',
    description:
      'This U.S. industry comprises establishments primarily engaged in providing air transportation of passengers or passengers and freight over regular routes and on regular schedules.  Establishments in this industry operate flights even if partially loaded.  Scheduled air passenger carriers including commuter and helicopter carriers (except scenic and sightseeing) are included in this industry.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 481112,
    title: 'Scheduled Freight Air Transportation',
    description:
      'This U.S. industry comprises establishments primarily engaged in providing air transportation of cargo without transporting passengers over regular routes and on regular schedules.  Establishments in this industry operate flights even if partially loaded.  Establishments primarily engaged in providing scheduled air transportation of mail on a contract basis are included in this industry.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 481211,
    title: 'Nonscheduled Chartered Passenger Air Transportation',
    description:
      'This U.S. industry comprises establishments primarily engaged in providing air transportation of passengers or passengers and cargo with no regular routes and regular schedules.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 481212,
    title: 'Nonscheduled Chartered Freight Air Transportation',
    description:
      'This U.S. industry comprises establishments primarily engaged in providing air transportation of cargo without transporting passengers with no regular routes and regular schedules.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 481219,
    title: 'Other Nonscheduled Air Transportation',
    description:
      'This U.S. industry comprises establishments primarily engaged in providing air transportation with no regular routes and regular schedules (except nonscheduled chartered passenger and/or cargo air transportation).  These establishments provide a variety of specialty air transportation or flying services based on individual customer needs using general purpose aircraft.\n\nIllustrative Examples:\n\nAircraft charter services (i.e., general purpose aircraft used for a variety of specialty air and flying services)\nAviation clubs providing a variety of air transportation activities to the general public\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 482111,
    title: 'Line-Haul Railroads',
    description:
      'This U.S. industry comprises establishments known as line-haul railroads primarily engaged in operating railroads for the transport of passengers and/or cargo over a long distance within a rail network.  These establishments provide for the intercity movement of trains between the terminals and stations on main and branch lines of a line-haul rail network (except for local switching services).\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 482112,
    title: 'Short Line Railroads',
    description:
      'This U.S. industry comprises establishments known as short-line railroads primarily engaged in operating railroads for the transport of cargo over a short distance on local rail lines not part of a rail network.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 483111,
    title: 'Deep Sea Freight Transportation',
    description:
      'This U.S. industry comprises establishments primarily engaged in providing deep sea transportation of cargo to or from foreign ports.\n\nCross-References.',
  },
  {
    code: 483112,
    title: 'Deep Sea Passenger Transportation',
    description:
      'This U.S. industry comprises establishments primarily engaged in providing deep sea transportation of passengers to or from foreign ports.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 483113,
    title: 'Coastal and Great Lakes Freight Transportation',
    description:
      'This U.S. industry comprises establishments primarily engaged in providing water transportation of cargo in coastal waters, on the Great Lakes System, or deep seas between ports of the United States, Puerto Rico, and United States island possessions or protectorates.  Marine transportation establishments using the facilities of the St. Lawrence Seaway Authority Commission are considered to be using the Great Lakes Water Transportation System.  Establishments primarily engaged in providing coastal and/or Great Lakes barge transportation services are included in this industry.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 483114,
    title: 'Coastal and Great Lakes Passenger Transportation',
    description:
      'This U.S. industry comprises establishments primarily engaged in providing water transportation of passengers in coastal waters, the Great Lakes System, or deep seas between ports of the United States, Puerto Rico, and United States island possessions and protectorates.  Marine transportation establishments using the facilities of the St. Lawrence Seaway Authority Commission are considered to be using the Great Lakes Water Transportation System.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 483211,
    title: 'Inland Water Freight Transportation',
    description:
      'This U.S. industry comprises establishments primarily engaged in providing inland water transportation of cargo on lakes, rivers, or intracoastal waterways (except on the Great Lakes System).\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 483212,
    title: 'Inland Water Passenger Transportation',
    description:
      'This U.S. industry comprises establishments primarily engaged in providing inland water transportation of passengers on lakes, rivers, or intracoastal waterways (except on the Great Lakes System).\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 484110,
    title: 'General Freight Trucking, Local',
    description:
      'This industry comprises establishments primarily engaged in providing local general freight trucking.  General freight trucking establishments handle a wide variety of commodities, generally palletized and transported in a container or van trailer.  Local general freight trucking establishments usually provide trucking within a metropolitan area which may cross state lines.  Generally the trips are same-day return.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 484121,
    title: 'General Freight Trucking, Long-Distance, Truckload',
    description:
      'This U.S. industry comprises establishments primarily engaged in providing long-distance general freight truckload (TL) trucking.  These long-distance general freight truckload carrier establishments provide full truck movement of freight from origin to destination.  The shipment of freight on a truck is characterized as a full single load not combined with other shipments.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 484122,
    title: 'General Freight Trucking, Long-Distance, Less Than Truckload',
    description:
      'This U.S. industry comprises establishments primarily engaged in providing long-distance, general freight, less than truckload (LTL) trucking.  LTL carriage is characterized as multiple shipments combined onto a single truck for multiple deliveries within a network.  These establishments are generally characterized by the following network activities: local pick-up, local sorting and terminal operations, line-haul, destination sorting and terminal operations, and local delivery.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 484210,
    title: 'Used Household and Office Goods Moving',
    description:
      'This industry comprises establishments primarily engaged in providing local or long-distance trucking of used household, used institutional, or used commercial furniture and equipment.  Incidental packing and storage activities are often provided by these establishments.\n',
  },
  {
    code: 484220,
    title: 'Specialized Freight (except Used Goods) Trucking, Local',
    description:
      'This industry comprises establishments primarily engaged in providing local, specialized trucking.  Local trucking establishments provide trucking within a metropolitan area that may cross state lines.  Generally the trips are same-day return.\n\nIllustrative Examples:\n\nLocal agricultural products trucking\nLocal dump trucking (e.g., gravel, sand, top-soil)\nLocal boat hauling\nLocal livestock trucking\nLocal bulk liquids trucking\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 484230,
    title: 'Specialized Freight (except Used Goods) Trucking, Long-Distance',
    description:
      'This industry comprises establishments primarily engaged in providing long-distance specialized trucking.  These establishments provide trucking between metropolitan areas that may cross North American country borders.\n\nIllustrative Examples:\n\nLong-distance automobile carrier trucking\nLong-distance refrigerated product trucking\nLong-distance bulk liquid trucking\nLong-distance trucking of waste\nLong-distance hazardous material trucking\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 485111,
    title: 'Mixed Mode Transit Systems',
    description:
      'This U.S. industry comprises establishments primarily engaged in operating local and suburban ground passenger transit systems using more than one mode of transport over regular routes and on regular schedules within a metropolitan area and its adjacent nonurban areas.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 485112,
    title: 'Commuter Rail Systems',
    description:
      'This U.S. industry comprises establishments primarily engaged in operating local and suburban commuter rail systems over regular routes and on a regular schedule within a metropolitan area and its adjacent nonurban areas.  Commuter rail is usually characterized by reduced fares, multiple ride and commutation tickets, and mostly used by passengers during the morning and evening peak periods.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 485113,
    title: 'Bus and Other Motor Vehicle Transit Systems',
    description:
      'This U.S. industry comprises establishments primarily engaged in operating local and suburban passenger transportation systems using buses or other motor vehicles over regular routes and on regular schedules within a metropolitan area and its adjacent nonurban areas.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 485119,
    title: 'Other Urban Transit Systems',
    description:
      'This U.S. industry comprises establishments primarily engaged in operating local and suburban ground passenger transit systems (except mixed mode transit systems, commuter rail systems, and buses and other motor vehicles) over regular routes and on regular schedules within a metropolitan area and its adjacent nonurban areas.\n\nIllustrative Examples:\n\nCommuter cable car systems (i.e., stand-alone)\nLight rail systems (i.e., stand-alone)\nCommuter tramway systems (i.e., stand-alone)\nMonorail transit systems (i.e., stand-alone)\nCommuter trolley systems (i.e., stand-alone)\nSubway systems (i.e., stand-alone)\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 485210,
    title: 'Interurban and Rural Bus Transportation',
    description:
      'This industry comprises establishments primarily engaged in providing bus passenger transportation over regular routes and on regular schedules, principally outside a single metropolitan area and its adjacent nonurban areas.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 485310,
    title: 'Taxi and Ridesharing Services',
    description:
      'This industry comprises establishments primarily engaged in providing passenger transportation by automobile or van, not operated over regular routes and on regular schedules.  Establishments of taxicab owner/operators, taxicab fleet operators, taxicab organizations, ridesharing services (including arrangement services), and ride hailing services (including arrangement services) are included in this industry.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 485320,
    title: 'Limousine Service',
    description:
      'This industry comprises establishments primarily engaged in providing an array of specialty and luxury passenger transportation services via limousine or luxury sedan generally on a reserved basis.  These establishments do not operate over regular routes and on regular schedules.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 485410,
    title: 'School and Employee Bus Transportation',
    description:
      'This industry comprises establishments primarily engaged in providing buses and other motor vehicles to transport pupils to and from school or employees to and from work.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 485510,
    title: 'Charter Bus Industry',
    description:
      "This industry comprises establishments primarily engaged in providing buses for charter.  These establishments provide bus services to meet customers' road transportation needs and generally do not operate over fixed routes and on regular schedules.\n\nCross-References. Establishments primarily engaged in--",
  },
  {
    code: 485991,
    title: 'Special Needs Transportation',
    description:
      'This U.S. industry comprises establishments primarily engaged in providing special needs transportation (except to and from school or work) for the disabled or elderly.  These establishments may use specially equipped vehicles to provide passenger transportation.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 485999,
    title: 'All Other Transit and Ground Passenger Transportation',
    description:
      'This U.S. industry comprises establishments primarily engaged in providing ground passenger transportation (except urban transit systems; interurban and rural bus transportation, taxi and/or limousine services (except shuttle services), school and employee bus transportation, charter bus services, and special needs transportation).  Establishments primarily engaged in operating shuttle services and car pools or vanpools (except ridesharing and ridesharing arrangement services) are included in this industry.  Shuttle services establishments generally provide travel on regular routes and on regular schedules between hotels, airports, or other destination points.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 486110,
    title: 'Pipeline Transportation of Crude Oil',
    description:
      'This industry comprises establishments primarily engaged in the pipeline transportation of crude oil.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 486210,
    title: 'Pipeline Transportation of Natural Gas',
    description:
      'This industry comprises establishments primarily engaged in the pipeline transportation of natural gas from processing plants to local distribution systems. This industry includes the storage of natural gas because the storage is usually done by the pipeline establishment and because a pipeline is inherently a network in which all the nodes are interdependent.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 486910,
    title: 'Pipeline Transportation of Refined Petroleum Products',
    description:
      'This industry comprises establishments primarily engaged in the pipeline transportation of refined petroleum products.',
  },
  {
    code: 486990,
    title: 'All Other Pipeline Transportation',
    description:
      'This industry comprises establishments primarily engaged in the pipeline transportation of products (except crude oil, natural gas, and refined petroleum products).\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 487110,
    title: 'Scenic and Sightseeing Transportation, Land',
    description:
      'This industry comprises establishments primarily engaged in providing scenic and sightseeing transportation on land, such as sightseeing buses and trolleys, steam train excursions, and horse-drawn sightseeing rides.  The services provided are usually local and involve same-day return to place of origin.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 487210,
    title: 'Scenic and Sightseeing Transportation, Water',
    description:
      'This industry comprises establishments primarily engaged in providing scenic and sightseeing transportation on water.  The services provided are usually local and involve same-day return to place of origin.\n\nIllustrative Examples:\n\nAirboat (i.e., swamp buggy) operation\nExcursion boat operation\nCharter fishing boat services\nHarbor sightseeing tours\nDinner cruises\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 487990,
    title: 'Scenic and Sightseeing Transportation, Other',
    description:
      'This industry comprises establishments primarily engaged in providing scenic and sightseeing transportation (except on land and water).  The services provided are usually local and involve same-day return to place of departure.\n\nIllustrative Examples:\n\nAerial cable cars, scenic and sightseeing operation\nHelicopter rides, scenic and sightseeing operation\nGlider excursions\nAerial tramways, scenic and sightseeing operation\nHot air balloon rides, scenic and sightseeing operation\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 488111,
    title: 'Air Traffic Control',
    description:
      'This U.S. industry comprises establishments primarily engaged in providing air traffic control (except military) services to regulate the flow of air traffic.\n\nCross-References.',
  },
  {
    code: 488119,
    title: 'Other Airport Operations',
    description:
      'This U.S. industry comprises establishments primarily engaged in (1) operating international, national, or civil airports, or public flying fields or (2) supporting airport operations, such as rental of hangar space, and providing baggage handling and/or cargo handling services.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 488190,
    title: 'Other Support Activities for Air Transportation',
    description:
      'This industry comprises establishments primarily engaged in providing specialized services for air transportation (except air traffic control and other airport operations).\n\nIllustrative Examples:\n\nAircraft maintenance and repair services (except factory conversions, overhauls, rebuilding)\nAircraft passenger screening security services\nAircraft testing services\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 488210,
    title: 'Support Activities for Rail Transportation',
    description:
      'This industry comprises establishments primarily engaged in providing specialized services for railroad transportation, including servicing, routine repairing (except factory conversion, overhaul, or rebuilding of rolling stock), and maintaining rail cars; loading and unloading rail cars; and operating independent terminals.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 488310,
    title: 'Port and Harbor Operations',
    description:
      'This industry comprises establishments primarily engaged in operating ports, harbors (including docking and pier facilities), or canals.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 488320,
    title: 'Marine Cargo Handling',
    description:
      'This industry comprises establishments primarily engaged in providing stevedoring and other marine cargo handling services (except warehousing).\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 488330,
    title: 'Navigational Services to Shipping',
    description:
      'This industry comprises establishments primarily engaged in providing navigational services to shipping.  Marine salvage establishments are included in this industry.\n\nIllustrative Examples:\n\nDocking and undocking marine vessel services\nPiloting services, water transportation\nMarine vessel traffic reporting services\nTugboat services, harbor operation\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 488390,
    title: 'Other Support Activities for Water Transportation',
    description:
      'This industry comprises establishments primarily engaged in providing services to water transportation (except port and harbor operations; marine cargo handling services; and navigational services to shipping).\n\nIllustrative Examples:\n\nFloating drydocks (i.e., routine repair and maintenance of ships)\nShip scaling services\nMarine cargo checkers and surveyors\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 488410,
    title: 'Motor Vehicle Towing',
    description:
      'This industry comprises establishments primarily engaged in towing light or heavy motor vehicles, both local and long-distance.  These establishments may provide incidental services, such as storage and emergency road repair services.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 488490,
    title: 'Other Support Activities for Road Transportation',
    description:
      'This industry comprises establishments primarily engaged in providing services (except motor vehicle towing) to road network users.\n\nIllustrative Examples:\n\nBridge, tunnel, and highway operations\nPilot car services (i.e., wide load warning services)\nTruck or weighing station operations\nDriving services, independent (e.g., automobile, truck delivery)\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 488510,
    title: 'Freight Transportation Arrangement',
    description:
      'This industry comprises establishments primarily engaged in arranging transportation of freight between shippers and carriers.  These establishments are usually known as freight forwarders, marine shipping agents, or customs brokers and offer a combination of services spanning transportation modes but do not directly provide shipping services.\n\nCross-References.',
  },
  {
    code: 488991,
    title: 'Packing and Crating',
    description:
      'This U.S. industry comprises establishments primarily engaged in packing, crating, and otherwise preparing goods for transportation.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 488999,
    title: 'All Other Support Activities for Transportation',
    description:
      'This U.S. industry comprises establishments primarily engaged in providing support activities to transportation (except for air transportation; rail transportation; water transportation; road transportation; freight transportation arrangement; and packing and crating).\n\nIllustrative Examples:\n\nArrangement of vanpools or car pools (except ridesharing arrangement services)\nIndependent pipeline terminal facilities\nStockyards (i.e., not for fattening or selling livestock)\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 491110,
    title: 'Postal Service',
    description:
      'This industry comprises establishments primarily engaged in providing mail services under a universal service obligation.  Mail services include the carriage of letters, printed matter, or mailable packages, including acceptance, collection, processing, and delivery.  Due to the infrastructure requirements of providing mail service under a universal service obligation, postal service establishments often provide parcel and express delivery services in addition to the mail service.  Establishments primarily engaged in performing one or more parts of the basic mail service, such as sorting, routing and/or delivery (except bulk transportation of mail) are included in this industry.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 492110,
    title: 'Couriers and Express Delivery Services',
    description:
      "This industry comprises establishments primarily engaged in providing air, surface, or combined mode courier and express delivery services of parcels, but not operating under a universal service obligation.  These parcels can include goods and documents, but the express delivery services are not part of the normal mail service.  These services are generally between metropolitan areas, urban centers, or international, but the establishments of this industry form a network that includes local pick-up and delivery to serve their customers' needs.\n\nIllustrative Examples:\n\nAir courier services, except establishments operating under a universal service obligation\nExpress delivery services, except establishments operating under a universal service obligation\nCourier services (i.e., intercity network), except establishments operating under a universal service obligation\n\n\nCross-References. Establishments primarily engaged in--",
  },
  {
    code: 492210,
    title: 'Local Messengers and Local Delivery',
    description:
      'This industry comprises establishments primarily engaged in providing local messenger and delivery services of small items within a single metropolitan area or within an urban center.  These establishments generally provide point-to-point pick-up and delivery and do not operate as part of an intercity courier network.\n\nIllustrative Examples:\n\nLetters, documents, or small parcels local delivery services\nGrocery delivery services (i.e., independent service from grocery store)\nAlcoholic beverages delivery services\nRestaurant meals order and delivery services (i.e., independent order and delivery services)\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 493110,
    title: 'General Warehousing and Storage',
    description:
      'This industry comprises establishments primarily engaged in operating merchandise warehousing and storage facilities.  These establishments generally handle goods in containers, such as boxes, barrels, and/or drums, using equipment, such as forklifts, pallets, and racks.  They are not specialized in handling bulk products of any particular type, size, or quantity of goods or products.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 493120,
    title: 'Refrigerated Warehousing and Storage',
    description:
      'This industry comprises establishments primarily engaged in operating refrigerated warehousing and storage facilities.  Establishments primarily engaged in the storage of furs for the trade are included in this industry.  The services provided by these establishments include blast freezing, tempering, and modified atmosphere storage services.\n\nCross-References.',
  },
  {
    code: 493130,
    title: 'Farm Product Warehousing and Storage',
    description:
      'This industry comprises establishments primarily engaged in operating bulk farm product warehousing and storage facilities (except refrigerated).  Grain elevators primarily engaged in storage are included in this industry.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 493190,
    title: 'Other Warehousing and Storage',
    description:
      'This industry comprises establishments primarily engaged in operating warehousing and storage facilities (except general merchandise, refrigerated, and farm product warehousing and storage).\n\nIllustrative Examples:\n\nBulk petroleum storage\nLumber storage terminals\nDocument storage and warehousing\nWhiskey warehousing\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 512110,
    title: 'Motion Picture and Video Production',
    description:
      'This industry comprises establishments primarily engaged in producing, or producing and distributing motion pictures, videos, television programs, or television commercials.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 512120,
    title: 'Motion Picture and Video Distribution',
    description:
      'This industry comprises establishments primarily engaged in acquiring distribution rights and distributing film and video productions to motion picture theaters, television networks and stations, other media broadcast and streaming outlets, and exhibitors.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 512131,
    title: 'Motion Picture Theaters (except Drive-Ins)',
    description:
      'This U.S. industry comprises establishments primarily engaged in operating motion picture theaters (except drive-ins) and/or exhibiting motion pictures or videos at film festivals, and so forth.\n',
  },
  {
    code: 512132,
    title: 'Drive-In Motion Picture Theaters',
    description:
      'This U.S. industry comprises establishments primarily engaged in operating drive-in motion picture theaters.',
  },
  {
    code: 512191,
    title: 'Teleproduction and Other Postproduction Services',
    description:
      'This U.S. industry comprises establishments primarily engaged in providing specialized motion picture or video postproduction services, such as editing, film/tape transfers, subtitling, credits, closed captioning, and animation and special effects.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 512199,
    title: 'Other Motion Picture and Video Industries',
    description:
      'This U.S. industry comprises establishments primarily engaged in providing motion picture and video services (except motion picture and video production, distribution, exhibition, and teleproduction and other postproduction services).\n\nIllustrative Examples:\n\nMotion picture film laboratories\nStock footage film libraries\nFilm preservation services\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 512230,
    title: 'Music Publishers',
    description:
      'This industry comprises establishments primarily engaged in acquiring and registering copyrights for musical compositions in accordance with law and promoting and authorizing the use of these compositions in recordings, radio, television, motion pictures, live performances, print, or other media.  Establishments in this industry represent the interests of the songwriter or other owners of musical compositions to produce revenues from the use of such works, generally through licensing agreements.  These establishments may own the copyright or act as administrator of the music copyrights on behalf of copyright owners.  Publishers of music books and sheet music are included in this industry.\n\nCross-References.',
  },
  {
    code: 512240,
    title: 'Sound Recording Studios',
    description:
      'This industry comprises establishments primarily engaged in providing the facilities and technical expertise for sound recording in a studio.  This industry includes establishments that provide audio production and postproduction services to produce master recordings.  These establishments may provide audio services for film, television, and video productions.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 512250,
    title: 'Record Production and Distribution',
    description:
      'This industry comprises establishments primarily engaged in record production and/or releasing, promoting, and distributing sound recordings to wholesalers, retailers, or directly to the public.  These establishments contract with artists, arrange and finance the production of original master recordings, and/or produce master recordings themselves, such as digital music and compact discs.  Establishments in this industry hold the copyright to the master recording, or obtain reproduction and distribution rights to master recordings produced by others, and derive most of their revenues from the sales, leasing, licensing, or distribution of master recordings.  \n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 512290,
    title: 'Other Sound Recording Industries',
    description:
      'This industry comprises establishments primarily engaged in providing sound recording services (except record production, distribution, music publishing, and sound recording in a studio).  Establishments in this industry provide services, such as the audio recording of meetings and conferences.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 513110,
    title: 'Newspaper Publishers',
    description:
      'This industry comprises establishments known as newspaper publishers.  Establishments in this industry carry out operations necessary for producing and distributing newspapers, including gathering news; writing news columns, feature stories, and editorials; and selling and preparing advertisements.  These establishments may publish newspapers in print or electronic form, including exclusively on the Internet.\n\nCross-References.',
  },
  {
    code: 513120,
    title: 'Periodical Publishers',
    description:
      'This industry comprises establishments known either as magazine publishers or periodical publishers.  These establishments carry out the operations necessary for producing and distributing magazines and other periodicals, such as gathering, writing, and editing articles, and selling and preparing advertisements.  These establishments may publish magazines and other periodicals in print or electronic form, including exclusively on the Internet.\n\nIllustrative Examples:\n\nComic book publishers\nMagazine publishers\nScholarly journal publishers\nNewsletter publishers\nTrade journal publishers\n\n\nCross-References.',
  },
  {
    code: 513130,
    title: 'Book Publishers',
    description:
      'This industry comprises establishments known as book publishers.  Establishments in this industry carry out design, editing, and marketing activities necessary for producing and distributing books.  These establishments may publish books in print, electronic, or audio form, including exclusively on the Internet.\n\nIllustrative Examples:\n\nAtlas publishers\nReligious book publishers\nGraphic novel publishers\nSchool textbook publishers\nEncyclopedia publishers\nTechnical manual publishers\nMap publishers \nTravel guide book publishers\n\n\nCross-References.',
  },
  {
    code: 513140,
    title: 'Directory and Mailing List Publishers',
    description:
      'This industry comprises establishments primarily engaged in publishing directories, mailing lists, and collections or compilations of fact.  The products are typically protected in their selection, arrangement and/or presentation.  Examples are lists of mailing addresses, telephone directories, directories of businesses, collections or compilations of proprietary drugs or legal case results, compilations of public records, etc.  These establishments may publish directories and mailing lists in print or electronic form, including exclusively on the Internet.\n\nIllustrative Examples:\n\nBusiness directory publishers\nMailing list publishers\nDirectory publishers\nTelephone directory publishers\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 513191,
    title: 'Greeting Card Publishers',
    description:
      'This U.S. industry comprises establishments primarily engaged in publishing greeting cards.  These establishments may publish works in print or electronic form, including exclusively on the Internet.\n\nCross-References.',
  },
  {
    code: 513199,
    title: 'All Other Publishers',
    description:
      'This U.S. industry comprises establishments generally known as publishers (except newspaper, magazine, book, directory, mailing list, music, software, and greeting card publishers).  These establishments may publish works in print or electronic form, including exclusively on the Internet.\n\nIllustrative Examples:\n\nArt publishers\nCalendar publishers\n\n\nCross-References.',
  },
  {
    code: 513210,
    title: 'Software Publishers',
    description:
      'This industry comprises establishments primarily engaged in software publishing.  Establishments in this industry carry out operations necessary for producing and distributing computer software, such as designing, providing documentation, assisting in installation, and providing support services to software purchasers.  These establishments may design, develop, and publish, or publish only.  These establishments may publish and distribute software through subscriptions and/or downloads. \n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 516110,
    title: 'Radio Broadcasting Stations',
    description:
      'This industry comprises establishments primarily engaged in broadcasting aural programs by radio to the public.  These establishments operate radio broadcasting studios and facilities for the programming and transmission of programs to the public.  Programming may originate in their own studio, from an affiliated network, or from external sources.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 516120,
    title: 'Television Broadcasting Stations',
    description:
      'This industry comprises establishments primarily engaged in broadcasting images together with sound.  These establishments operate television broadcasting studios and facilities for the programming and transmission of programs to the public.  Programming may originate in their own studio, from an affiliated network, or from external sources.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 516210,
    title:
      'Media Streaming Distribution Services, Social Networks, and Other Media Networks and Content Providers',
    description:
      'This industry comprises establishments primarily providing media streaming distribution services, operating social network sites, operating media broadcasting and cable television networks, and supplying information, such as news reports, articles, pictures, and features, to the news media.  These establishments distribute textual, audio, and/or video content of general or specific interest.\n\nIllustrative Examples:\n\nBroadcasting networks, radio\nBroadcasting networks, television\nCable broadcasting networks\nCable television networks\nInternet broadcasting\nPay-per-view cable programming\nSatellite radio networks\nSatellite television networks\nSocial network sites, Internet\nStand-alone streaming services\nSubscription Video on Demand (SVOD) services\nSyndicates, news\nVirtual Multichannel Video Programming Distributors (vMVPDs)\nWeb broadcasting\nWiki sites, Internet \n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 517111,
    title: 'Wired Telecommunications Carriers',
    description:
      'This U.S. industry comprises establishments primarily engaged in operating, maintaining, and/or providing access to transmission facilities and infrastructure that they own and/or lease for the transmission of voice, data, text, sound, and video using wired telecommunications networks.  Transmission facilities may be based on a single technology or a combination of technologies.  Establishments in this industry use the wired telecommunications network facilities that they operate to provide a variety of services, such as wired telephony services, including VoIP services; wired (cable) audio and video programming distribution; and wired broadband Internet services.  By exception, establishments providing satellite television distribution services using facilities and infrastructure that they operate are included in this industry.\n\nIllustrative Examples:\n\nBroadband Internet service providers, wired (e.g., cable, DSL)\nCable television distribution services\nClosed-circuit television (CCTV) services\nDirect-to-home satellite system (DTH) services\nLocal telephone carriers, wired\nLong-distance telephone carriers, wired\nMultichannel multipoint distribution services (MMDS)\nSatellite television distribution systems\nTelecommunications carriers, wired\nVoIP service providers, using own operated wired telecommunications infrastructure \n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 517112,
    title: 'Wireless Telecommunications Carriers (except Satellite)',
    description:
      'This U.S. industry comprises establishments primarily engaged in operating and maintaining switching and transmission facilities to provide communications via the airwaves.  Establishments in this industry have spectrum licenses and provide services using that spectrum, such as cellular phone services, paging services, wireless Internet access, and wireless video services.\n\nIllustrative Examples:\n\nCellular telephone service carriers\nWireless Internet service providers, except satellite\nPaging services, except satellite\nWireless telephone communications carriers, except satellite \n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 517121,
    title: 'Telecommunications Resellers',
    description:
      'This U.S. industry comprises establishments engaged in purchasing access and network capacity from owners and operators of telecommunications networks and reselling wired and wireless telecommunications services to businesses and households (except satellite telecommunications and agents for wireless telecommunications services).  Establishments in this industry resell telecommunications; they do not operate transmission facilities and infrastructure.\n\nIllustrative Examples:\n\nMobile virtual network operators (MVNOs) (except agents)\nPre-paid calling cards, telecommunications resellers\nWired telecommunications resellers\nWireless telecommunications resellers (except satellite telecommunications and agents) \n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 517122,
    title: 'Agents for Wireless Telecommunications Services',
    description:
      'This U.S. industry comprises establishments primarily engaged in acting as agents for wireless telecommunications carriers and resellers, selling wireless plans on a commission basis.\n\nIllustrative Examples:\n\nAgents for mobile virtual network operators (MVNOs)\nAgents for wireless telecommunications carriers\nCellular telephone stores, selling cellular phone service plans on an agent basis\nMobile phone stores, selling mobile phone service plans on an agent basis\nWireless phone service plan sales agents, selling on behalf of wireless telecommunications carriers  \n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 517410,
    title: 'Satellite Telecommunications',
    description:
      'This industry comprises establishments primarily engaged in providing telecommunications services to other establishments in the telecommunications and broadcasting industries by forwarding and receiving communications signals via a system of satellites or reselling satellite telecommunications.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 517810,
    title: 'All Other Telecommunications',
    description:
      'This industry comprises establishments primarily engaged in providing specialized telecommunications services, such as satellite tracking, communications telemetry, and radar station operation.  This industry also includes establishments primarily engaged in providing satellite terminal stations and associated facilities connected with one or more terrestrial systems and capable of transmitting telecommunications to, and receiving telecommunications from, satellite systems.  Establishments providing Internet services or Voice over Internet protocol (VoIP) services via client-supplied telecommunications connections are also included in this industry.  Establishments in this industry do not operate as telecommunications carriers.\n\nIllustrative Examples:\n\nDial-up Internet service providers\nInternet service providers, using client-supplied telecommunications connections (e.g., dial-up ISPs)\nSatellite tracking stations\nVoIP service providers, using client-supplied telecommunications connections\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 518210,
    title: 'Computing Infrastructure Providers, Data Processing, Web Hosting, and Related Services',
    description:
      'This industry comprises establishments primarily engaged in providing computing infrastructure, data processing services, Web hosting services (except software publishing), and related services, including streaming support services (except streaming distribution services).  Data processing establishments provide complete processing and specialized reports from data supplied by clients or provide automated data processing and data entry services.\n\nIllustrative Examples:\n\nApplication hosting\nCloud storage services\nComputer data storage services\nComputing platform infrastructure provision\nInfrastructure as a service (IaaS)\nOptical scanning services\nPlatform as a service (PaaS)\nVideo and audio technical streaming support services\nWeb hosting\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 519210,
    title: 'Libraries and Archives',
    description:
      'This industry comprises establishments primarily engaged in providing library or archive services.  These establishments are engaged in maintaining collections of documents (e.g., books, journals, newspapers, and music) and facilitating the use of such documents (recorded information regardless of its physical form and characteristics) as required to meet the informational, research, educational, or recreational needs of their user.  These establishments may also acquire, research, store, preserve, and generally make accessible to the public historical documents, photographs, maps, audio material, audiovisual material, and other archival material of historical interest.  All or portions of these collections may be accessible electronically.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 519290,
    title: 'Web Search Portals and All Other Information Services',
    description:
      'This industry comprises establishments primarily engaged in operating Web sites that use a search engine to generate and maintain extensive databases of Internet addresses and content in an easily searchable format (and known as Web search portals) or providing other information services not elsewhere classified.  Establishments known as Web search portals often provide additional Internet services, such as email, connections to other Web sites, auctions, news, and other limited content.\n\nIllustrative Examples:\n\nNews clipping services\nTelephone-based recorded information services\nStock photo agencies\nWeb search portals \n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 521110,
    title: 'Monetary Authorities-Central Bank',
    description:
      "This industry comprises establishments primarily engaged in performing central banking functions, such as issuing currency, managing the Nation's money supply and international reserves, holding deposits that represent the reserves of other banks and other central banks, and acting as a fiscal agent for the central government.\n\nCross-References.",
  },
  {
    code: 522110,
    title: 'Commercial Banking',
    description:
      'This industry comprises establishments primarily engaged in accepting demand and other deposits and making commercial, industrial, and consumer loans.  Commercial banks and branches of foreign banks are included in this industry.\n\nCross-References.',
  },
  {
    code: 522130,
    title: 'Credit Unions',
    description:
      "This industry comprises establishments primarily engaged in accepting members' share deposits in cooperatives that are organized to offer consumer loans to their members.\n",
  },
  {
    code: 522180,
    title: 'Savings Institutions and Other Depository Credit Intermediation',
    description:
      'This industry comprises establishments primarily engaged in accepting deposits, making mortgage, real estate, and other consumer and commercial loans, and investing in high-grade securities (except commercial banking and credit unions).  Savings and loan associations, savings banks, private banks (i.e., unincorporated banks), and establishments known as industrial banks or Morris Plans and primarily engaged in accepting deposits are included in this industry.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 522210,
    title: 'Credit Card Issuing',
    description:
      'This industry comprises establishments primarily engaged in providing credit by issuing credit cards.  Credit card issuance provides the funds required to purchase goods and services in return for payment of the full balance or payments on an installment basis.  Credit card banks are included in this industry.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 522220,
    title: 'Sales Financing',
    description:
      'This industry comprises establishments primarily engaged in sales financing or sales financing in combination with leasing.  Sales financing establishments are primarily engaged in lending money for the purpose of providing collateralized goods through a contractual installment sales agreement, either directly from or through arrangements with dealers.\n\nCross-References.',
  },
  {
    code: 522291,
    title: 'Consumer Lending',
    description:
      'This U.S. industry comprises establishments primarily engaged in making unsecured cash loans to consumers.\n\nIllustrative Examples:\n\nFinance companies (i.e., unsecured cash loans)\nPersonal credit institutions (i.e., unsecured cash loans)\nLoan companies (i.e., consumer, personal, student, small)\nStudent loan companies\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 522292,
    title: 'Real Estate Credit',
    description:
      'This U.S. industry comprises establishments primarily engaged in lending funds with real estate as collateral.\n\nIllustrative Examples:\n\nHome equity credit lending\nMortgage companies\nReverse mortgage lending\nMortgage banking (i.e., nondepository mortgage lending)\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 522299,
    title: 'International, Secondary Market, and All Other Nondepository Credit Intermediation',
    description:
      'This U.S. industry comprises (1) establishments primarily engaged in providing working capital funds to U.S. exporters, lending funds to foreign buyers of U.S. goods, and/or lending funds to domestic buyers of imported goods; (2) establishments primarily engaged in buying, pooling, and repackaging loans for sale to others on the secondary market; and (3) establishments primarily providing other nondepository credit (except credit card issuing, sales financing, consumer lending, and real estate credit).  Examples of types of lending in this industry are short-term inventory credit, agricultural lending (except real estate and sales financing), and consumer cash lending secured by personal property.\n\nIllustrative Examples:\n\nCommodity Credit Corporation\nFactoring accounts receivable\nIndustrial banks (i.e., known as), nondepository\nInternational trade financing\nMorris Plans (i.e., known as), nondepository\nPawnshops\nSecondary market financing\n\n\nCross-References.',
  },
  {
    code: 522310,
    title: 'Mortgage and Nonmortgage Loan Brokers',
    description:
      'This industry comprises establishments primarily engaged in arranging loans by bringing borrowers and lenders together on a commission or fee basis.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 522320,
    title: 'Financial Transactions Processing, Reserve, and Clearinghouse Activities',
    description:
      'This industry comprises establishments primarily engaged in providing one or more of the following: (1) financial transaction processing (except central bank); (2) reserve and liquidity services (except central bank); and/or (3) check or other financial instrument clearinghouse services (except central bank).\n\nIllustrative Examples:\n\nAutomated clearinghouses, bank or check (except central bank)\nCredit card processing services\nCheck clearing services (except central bank)\nElectronic funds transfer services, including peer-to-peer payment services \n\n\nCross-References.',
  },
  {
    code: 522390,
    title: 'Other Activities Related to Credit Intermediation',
    description:
      "This industry comprises establishments primarily engaged in facilitating credit intermediation (except mortgage and loan brokerage; and financial transactions processing, reserve, and clearinghouse activities).\n\nIllustrative Examples:\n\nCheck cashing services\nMoney order issuance services\nLoan servicing\nTravelers' check issuance services\nMoney transmission services\nPayday lending services\n\n\nCross-References. Establishments primarily engaged in--",
  },
  {
    code: 523150,
    title: 'Investment Banking and Securities Intermediation',
    description:
      'This industry comprises establishments primarily engaged in underwriting, originating, and/or maintaining markets for issues of securities, or acting as agents (i.e., brokers) between buyers and sellers in buying or selling securities on a commission or transaction fee basis.  Investment bankers act as principals (i.e., investors who buy or sell on their own account) in firm commitment transactions or act as agents in best effort and standby commitments.  This industry also includes establishments acting as principals in buying or selling securities generally on a spread basis, such as securities dealers or stock option dealers.\n\nIllustrative Examples:\n\nBond dealing (i.e., acting as a principal in dealing securities to investors)\nMutual fund agencies (i.e., brokerages)\nSecurities brokerages\nSecurities underwriting\nStock brokerages\nStock options dealing\n\n\nCross-References.',
  },
  {
    code: 523160,
    title: 'Commodity Contracts Intermediation',
    description:
      'This industry comprises establishments primarily engaged in acting as principals (i.e., investors who buy or sell for their own account) in buying or selling spot or futures commodity contracts or options, such as precious metals, foreign currency, oil, or agricultural products, generally on a spread basis, or acting as agents (i.e., brokers) in buying or selling spot or futures commodity contracts or options on a commission or transaction fee basis.\n\nIllustrative Examples:\n\nCommodity contract trading companies\nCommodity contracts brokerages\nCommodity futures brokerages\nFutures commodity contracts dealing (i.e., acting as a principal in dealing commodities to investors)\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 523210,
    title: 'Securities and Commodity Exchanges',
    description:
      'This industry comprises establishments primarily engaged in furnishing physical or electronic marketplaces for the purpose of facilitating the buying and selling of stocks, stock options, bonds, or commodity contracts.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 523910,
    title: 'Miscellaneous Intermediation',
    description:
      'This industry comprises establishments primarily engaged in acting as principals (except investment bankers, securities dealers, and commodity contracts dealers) in buying or selling financial contracts generally on a spread basis.  Principals are investors that buy or sell for their own account.\n\nIllustrative Examples:\n\nInvestment clubs\nTax liens dealing (i.e., acting as a principal in dealing tax liens to investors)\nVenture capital companies\nMineral royalties or leases dealing (i.e., acting as a principal in dealing royalties or leases to investors)\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 523940,
    title: 'Portfolio Management and Investment Advice',
    description:
      'This industry comprises establishments primarily engaged in managing the portfolio assets (i.e., funds) of others on a fee or commission basis and/or providing customized investment advice to clients on a fee basis.  Establishments providing portfolio management have the authority to make investment decisions, and they derive fees based on the size and/or overall performance of the portfolio.  Establishments providing investment advice provide financial planning advice and investment counseling to meet the goals and needs of specific clients, but do not have the authority to execute trades.\n\nIllustrative Examples:\n\nFinancial planning services, customized, fees paid by client\nInvestment advisory services, customized, fees paid by client\nManaging trusts\nPortfolio fund managing\n\n\nCross-References.',
  },
  {
    code: 523991,
    title: 'Trust, Fiduciary, and Custody Activities',
    description:
      'This U.S. industry comprises establishments primarily engaged in providing trust, fiduciary, and custody services to others, as instructed, on a fee or contract basis, such as bank trust offices and escrow agencies (except real estate).\n\nCross-References.',
  },
  {
    code: 523999,
    title: 'Miscellaneous Financial Investment Activities',
    description:
      "This U.S. industry comprises establishments primarily engaged in acting as agents and/or brokers (except securities brokerages and commodity contracts brokerages) in buying or selling financial contracts and those providing financial investment services (except securities and commodity exchanges; portfolio management; investment advice; and trust, fiduciary, and custody services) on a fee or commission basis.\n\nIllustrative Examples:\n\nExchange clearinghouses, commodities or securities\nStock quotation services\nGas lease brokers' offices\n\n\nCross-References. Establishments primarily engaged in--",
  },
  {
    code: 524113,
    title: 'Direct Life Insurance Carriers',
    description:
      'This U.S. industry comprises establishments primarily engaged in initially underwriting (i.e., assuming the risk and assigning premiums) annuities and life insurance policies, disability income insurance policies, and accidental death and dismemberment insurance policies.\n\nCross-References.',
  },
  {
    code: 524114,
    title: 'Direct Health and Medical Insurance Carriers',
    description:
      'This U.S. industry comprises establishments primarily engaged in initially underwriting (i.e., assuming the risk and assigning premiums) health and medical insurance policies.  Group hospitalization plans and HMO establishments that provide health and medical insurance policies without providing health care services are included in this industry.\n\nCross-References.',
  },
  {
    code: 524126,
    title: 'Direct Property and Casualty Insurance Carriers',
    description:
      "This U.S. industry comprises establishments primarily engaged in initially underwriting (i.e., assuming the risk and assigning premiums) insurance policies that protect policyholders against losses that may occur as a result of property damage or liability.\n\nIllustrative Examples:\n\nAutomobile insurance carriers, direct\nMalpractice insurance carriers, direct\nFidelity insurance carriers, direct\nMortgage guaranty insurance carriers, direct\nHomeowners' insurance carriers, direct\nSurety insurance carriers, direct\nLiability insurance carriers, direct\n\n\nCross-References.",
  },
  {
    code: 524127,
    title: 'Direct Title Insurance Carriers',
    description:
      'This U.S. industry comprises establishments primarily engaged in initially underwriting (i.e., assuming the risk and assigning premiums) insurance policies to protect the owners of real estate or real estate creditors against loss sustained by reason of any title defect to real property.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 524128,
    title: 'Other Direct Insurance (except Life, Health, and Medical) Carriers',
    description:
      "This U.S. industry comprises establishments primarily engaged in initially underwriting (e.g., assuming the risk, assigning premiums) insurance policies (except life, disability income, accidental death and dismemberment, health and medical, property and casualty, and title insurance policies).\n\nIllustrative Examples:\n\nBank deposit insurance carriers, direct\nProduct warranty insurance carriers, direct\nDeposit or share insurance carriers, direct\nWarranty insurance carriers (e.g., appliance, automobile, homeowners', product), direct\n\n\nCross-References. Establishments primarily engaged in--",
  },
  {
    code: 524130,
    title: 'Reinsurance Carriers',
    description:
      'This industry comprises establishments primarily engaged in assuming all or part of the risk associated with existing insurance policies originally underwritten by other insurance carriers.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 524210,
    title: 'Insurance Agencies and Brokerages',
    description:
      'This industry comprises establishments primarily engaged in acting as agents (i.e., brokers) in selling annuities and insurance policies.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 524291,
    title: 'Claims Adjusting',
    description:
      'This U.S. industry comprises establishments primarily engaged in investigating, appraising, and settling insurance claims.',
  },
  {
    code: 524292,
    title:
      'Pharmacy Benefit Management and Other Third Party Administration of Insurance and Pension Funds',
    description:
      'This U.S. industry comprises establishments primarily engaged in providing pharmacy benefit management (PBM) services and other third party administration services of insurance and pension funds, such as claims processing and other administrative services to insurance carriers, employee benefit plans, and self-insurance funds.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 524298,
    title: 'All Other Insurance Related Activities',
    description:
      'This U.S. industry comprises establishments primarily engaged in providing insurance services on a contract or fee basis (except insurance agencies and brokerages, claims adjusting, and third party administration).  Insurance advisory services, insurance actuarial services, and insurance ratemaking services are included in this industry.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 525110,
    title: 'Pension Funds',
    description:
      "This industry comprises legal entities (i.e., funds, plans, and/or programs) organized to provide retirement income benefits exclusively for the sponsor's employees or members.\n\nIllustrative Examples:\n\nEmployee benefit plans\nRetirement plans\nPension funds and plans\n\n\nCross-References. Establishments primarily engaged in--",
  },
  {
    code: 525120,
    title: 'Health and Welfare Funds',
    description:
      "This industry comprises legal entities (i.e., funds, plans, and/or programs) organized to provide medical, surgical, hospital, vacation, training, and other health- and welfare-related employee benefits exclusively for the sponsor's employees or members.\n\nCross-References. Establishments primarily engaged in--",
  },
  {
    code: 525190,
    title: 'Other Insurance Funds',
    description:
      "This industry comprises legal entities (i.e., funds (except pension, and health- and welfare-related employee benefit funds)) organized to provide insurance exclusively for the sponsor, firm, or its employees or members.  Self-insurance funds (except employee benefit funds) and workers' compensation insurance funds are included in this industry.\n\nCross-References.",
  },
  {
    code: 525910,
    title: 'Open-End Investment Funds',
    description:
      'This industry comprises legal entities (i.e., open-end investment funds) organized to pool assets that consist of securities or other financial instruments.  Shares in these pools are offered to the public in an initial offering with additional shares offered continuously and perpetually and redeemed at a specific price determined by the net asset value.\n\nIllustrative Examples:\n\nInvestment funds, open-ended\nMoney market mutual funds, open-ended\n',
  },
  {
    code: 525920,
    title: 'Trusts, Estates, and Agency Accounts',
    description:
      'This industry comprises legal entities, trusts, estates, or agency accounts, administered on behalf of the beneficiaries under the terms of a trust agreement, will, or agency agreement.\n\nIllustrative Examples:\n\nBankruptcy estates\nPrivate estates (i.e., administering on behalf of beneficiaries)\nPersonal investment trusts\nTestamentary trusts\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 525990,
    title: 'Other Financial Vehicles',
    description:
      'This industry comprises legal entities (i.e., funds (except insurance and employee benefit funds; open-end investment funds; trusts, estates, and agency accounts)).  Included in this industry are mortgage real estate investment trusts (REITs).\n\nIllustrative Examples:\n\nClosed-end investment funds\nSpecial purpose financial vehicles\nCollateralized mortgage obligations (CMOs)\nUnit investment trust funds\nFace-amount certificate funds\nMortgage real estate investment trusts (REITs)\nReal estate mortgage investment conduits (REMICs)\n\n\nCross-References.',
  },
  {
    code: 531110,
    title: 'Lessors of Residential Buildings and Dwellings',
    description:
      'This industry comprises establishments primarily engaged in acting as lessors of buildings used as residences or dwellings, such as single-family homes, apartment buildings, and town homes.  Included in this industry are owner-lessors and establishments renting real estate and then acting as lessors in subleasing it to others.  The establishments in this industry may manage the property themselves or have another establishment manage it for them.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 531120,
    title: 'Lessors of Nonresidential Buildings (except Miniwarehouses)',
    description:
      'This industry comprises establishments primarily engaged in acting as lessors of buildings (except miniwarehouses and self-storage units) that are not used as residences or dwellings.  Included in this industry are: (1) owner-lessors of nonresidential buildings; (2) establishments renting real estate and then acting as lessors in subleasing it to others; and (3) establishments providing full service office space, whether on a lease or service contract basis.  The establishments in this industry may manage the property themselves or have another establishment manage it for them.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 531130,
    title: 'Lessors of Miniwarehouses and Self-Storage Units',
    description:
      'This industry comprises establishments primarily engaged in renting or leasing space for self-storage.  These establishments provide secure space (i.e., rooms, compartments, lockers, containers, or outdoor space) where clients can store and retrieve their goods.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 531190,
    title: 'Lessors of Other Real Estate Property',
    description:
      'This industry comprises establishments primarily engaged in acting as lessors of real estate (except buildings), such as manufactured home (i.e., mobile home) sites, vacant lots, and grazing land.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 531210,
    title: 'Offices of Real Estate Agents and Brokers',
    description:
      'This industry comprises establishments primarily engaged in acting as agents and/or brokers in one or more of the following: (1) selling real estate for others; (2) buying real estate for others; and (3) renting real estate for others.\n',
  },
  {
    code: 531311,
    title: 'Residential Property Managers',
    description:
      'This U.S. industry comprises establishments primarily engaged in managing residential real estate for others.\n\nCross-References.',
  },
  {
    code: 531312,
    title: 'Nonresidential Property Managers',
    description:
      'This U.S. industry comprises establishments primarily engaged in managing nonresidential real estate for others.\n\nCross-References.',
  },
  {
    code: 531320,
    title: 'Offices of Real Estate Appraisers',
    description:
      'This industry comprises establishments primarily engaged in estimating the fair market value of real estate.',
  },
  {
    code: 531390,
    title: 'Other Activities Related to Real Estate',
    description:
      "This industry comprises establishments primarily engaged in performing real estate related services (except lessors of real estate, offices of real estate agents and brokers, real estate property managers, and offices of real estate appraisers).\n\nIllustrative Examples:\n\nReal estate escrow agencies\nReal estate listing services\nReal estate fiduciaries' offices\nLandman services\n\n\nCross-References. Establishments primarily engaged in--",
  },
  {
    code: 532111,
    title: 'Passenger Car Rental',
    description:
      'This U.S. industry comprises establishments primarily engaged in renting passenger cars without drivers, generally for short periods of time.\n\nIllustrative Examples:\n\nPassenger car rental\nPassenger truck (light duty) rental\nPassenger van rental\nSport utility vehicle rental\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 532112,
    title: 'Passenger Car Leasing',
    description:
      'This U.S. industry comprises establishments primarily engaged in leasing passenger cars without drivers, generally for long periods of time.\n\nIllustrative Examples:\n\nPassenger car leasing\nPassenger truck (light duty) leasing\nPassenger van leasing\nSport utility vehicle leasing\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 532120,
    title: 'Truck, Utility Trailer, and RV (Recreational Vehicle) Rental and Leasing',
    description:
      'This industry comprises establishments primarily engaged in renting or leasing, without drivers, one or more of the following: trucks, truck tractors, buses, semi-trailers, utility trailers, or RVs (recreational vehicles).\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 532210,
    title: 'Consumer Electronics and Appliances Rental',
    description:
      'This industry comprises establishments primarily engaged in renting consumer electronics equipment and appliances, such as televisions, stereos, and refrigerators.  Included in this industry are appliance rental centers.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 532281,
    title: 'Formal Wear and Costume Rental',
    description:
      'This U.S. industry comprises establishments primarily engaged in renting clothing, such as formal wear, costumes (e.g., theatrical), or other clothing (except laundered uniforms and work apparel).\n\nCross-References.',
  },
  {
    code: 532282,
    title: 'Video Tape and Disc Rental',
    description:
      'This U.S. industry comprises establishments primarily engaged in renting prerecorded video tapes and discs for home electronic equipment, including renting through vending machines.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 532283,
    title: 'Home Health Equipment Rental',
    description:
      'This U.S. industry comprises establishments primarily engaged in renting home-type health and invalid equipment, such as wheelchairs, hospital beds, oxygen tanks, walkers, and crutches.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 532284,
    title: 'Recreational Goods Rental',
    description:
      'This U.S. industry comprises establishments primarily engaged in renting recreational goods, such as bicycles, canoes, motorcycles, skis, sailboats, beach chairs, and beach umbrellas.\n',
  },
  {
    code: 532289,
    title: 'All Other Consumer Goods Rental',
    description:
      'This U.S. industry comprises establishments primarily engaged in renting consumer goods and products (except consumer electronics and appliances; formal wear and costumes; prerecorded video tapes and discs for home electronic equipment; home health furniture and equipment; and recreational goods).  Included in this industry are furniture rental centers and party rental supply centers.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 532310,
    title: 'General Rental Centers',
    description:
      "This industry comprises establishments primarily engaged in renting a range of consumer, commercial, and industrial equipment.  Establishments in this industry typically operate from conveniently located facilities where they maintain inventories of goods and equipment that they rent for short periods of time.  The type of equipment that establishments in this industry provide often includes, but is not limited to: audio visual equipment, contractors' and builders' tools and equipment, home repair tools, lawn and garden equipment, moving equipment and supplies, and party and banquet equipment and supplies.\n\nCross-References. Establishments primarily engaged in--",
  },
  {
    code: 532411,
    title: 'Commercial Air, Rail, and Water Transportation Equipment Rental and Leasing',
    description:
      'This U.S. industry comprises establishments primarily engaged in renting or leasing off-highway transportation equipment without operators, such as aircraft, railroad cars, steamships, or tugboats.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 532412,
    title: 'Construction, Mining, and Forestry Machinery and Equipment Rental and Leasing',
    description:
      'This U.S. industry comprises establishments primarily engaged in renting or leasing heavy equipment without operators that may be used for construction, mining, or forestry, such as bulldozers, earthmoving equipment, well drilling machinery and equipment, or cranes.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 532420,
    title: 'Office Machinery and Equipment Rental and Leasing',
    description:
      'This industry comprises establishments primarily engaged in renting or leasing office machinery and equipment, such as computers, office furniture, duplicating machines (i.e., copiers), or facsimile machines.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 532490,
    title: 'Other Commercial and Industrial Machinery and Equipment Rental and Leasing',
    description:
      'This industry comprises establishments primarily engaged in renting or leasing nonconsumer-type machinery and equipment (except heavy construction, transportation, mining, and forestry machinery and equipment without operators; and office machinery and equipment).  Establishments in this industry rent or lease products, such as manufacturing equipment; metalworking, telecommunications, motion picture, theatrical machinery and equipment, or service industry machinery; institutional (i.e., public building) furniture, such as furniture for schools, theaters, or buildings; or agricultural equipment without operators.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 533110,
    title: 'Lessors of Nonfinancial Intangible Assets (except Copyrighted Works)',
    description:
      'This industry comprises establishments primarily engaged in assigning rights to assets, such as patents, trademarks, brand names, and/or franchise agreements, for which a royalty payment or licensing fee is paid to the asset holder.\n\nCross-References.',
  },
  {
    code: 541110,
    title: 'Offices of Lawyers',
    description:
      'This industry comprises offices of legal practitioners known as lawyers or attorneys (i.e., counselors-at-law) primarily engaged in the practice of law.  Establishments in this industry may provide expertise in a range or in specific areas of law, such as criminal law, corporate law, family and estate law, patent law, real estate law, or tax law.\n\nCross-References.',
  },
  {
    code: 541120,
    title: 'Offices of Notaries',
    description:
      'This industry comprises establishments (except offices of lawyers and attorneys) primarily engaged in drafting, approving, and executing legal documents, such as real estate transactions, wills, and contracts; and in receiving, indexing, and storing such documents.\n\nCross-References.',
  },
  {
    code: 541191,
    title: 'Title Abstract and Settlement Offices',
    description:
      'This U.S. industry comprises establishments (except offices of lawyers and attorneys) primarily engaged in one or more of the following activities: (1) researching public land records to gather information relating to real estate titles; (2) preparing documents necessary for the transfer of the title, financing, and settlement; (3) conducting final real estate settlements and closings; and (4) filing legal and other documents relating to the sale of real estate.  Real estate settlement offices, title abstract companies, and title search companies are included in this industry.\n\nCross-References.',
  },
  {
    code: 541199,
    title: 'All Other Legal Services',
    description:
      'This U.S. industry comprises establishments of legal practitioners (except offices of lawyers and attorneys, settlement offices, and title abstract offices).  These establishments are primarily engaged in providing specialized legal or paralegal services.\n\nIllustrative Examples:\n\nNotary public services\nPatent agent services (i.e., patent filing and searching services)\nParalegal services\t\nProcess serving services\n\n\nCross-References.',
  },
  {
    code: 541211,
    title: 'Offices of Certified Public Accountants',
    description:
      'This U.S. industry comprises establishments of accountants that are certified to audit the accounting records of public and private organizations and to attest to compliance with generally accepted accounting practices.  Offices of certified public accountants (CPAs) may provide one or more of the following accounting services: (1) auditing financial statements; (2) designing accounting systems; (3) preparing financial statements; (4) developing budgets; and (5) providing advice on matters related to accounting.  These establishments may also provide related services, such as bookkeeping, tax return preparation, and payroll processing.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 541213,
    title: 'Tax Preparation Services',
    description:
      'This U.S. industry comprises establishments (except offices of CPAs) engaged in providing tax return preparation services without also providing accounting, bookkeeping, billing, or payroll processing services.  Basic knowledge of tax law and filing requirements is required.\n\nCross-References.',
  },
  {
    code: 541214,
    title: 'Payroll Services',
    description:
      'This U.S. industry comprises establishments (except offices of CPAs) engaged in the following without also providing accounting, bookkeeping, or billing services: (1) collecting information on hours worked, pay rates, deductions, and other payroll-related data from their clients and (2) using that information to generate paychecks, payroll reports, and tax filings.  These establishments may use data processing and tabulating techniques as part of providing their services.\n\nCross-References.',
  },
  {
    code: 541219,
    title: 'Other Accounting Services',
    description:
      'This U.S. industry comprises establishments (except offices of CPAs) engaged in providing accounting services (except tax return preparation services only or payroll services only).  These establishments may also provide tax return preparation or payroll services.  Accountant (except CPA) offices, bookkeeper offices, and billing offices are included in this industry.\n\nCross-References.',
  },
  {
    code: 541310,
    title: 'Architectural Services',
    description:
      'This industry comprises establishments primarily engaged in planning and designing residential, institutional, leisure, commercial, and industrial buildings and structures by applying knowledge of design, construction procedures, zoning regulations, building codes, and building materials.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 541320,
    title: 'Landscape Architectural Services',
    description:
      "This industry comprises establishments primarily engaged in planning and designing the development of land areas for projects, such as parks and other recreational areas; airports; highways; hospitals; schools; land subdivisions; and commercial, industrial, and residential areas, by applying knowledge of land characteristics, location of buildings and structures, use of land areas, and design of landscape projects.\n\nIllustrative Examples:\n\nGarden planning services\nLandscape architects' offices\nGolf course or ski area design services\nLandscape consulting services\nIndustrial land use planning services\nLandscape design services\n\n\nCross-References.",
  },
  {
    code: 541330,
    title: 'Engineering Services',
    description:
      "This industry comprises establishments primarily engaged in applying physical laws and principles of engineering in the design, development, and utilization of machines, materials, instruments, structures, processes, and systems.  The assignments undertaken by these establishments may involve any of the following activities: provision of advice, preparation of feasibility studies, preparation of preliminary and final plans and designs, provision of technical services during the construction or installation phase, inspection and evaluation of engineering projects, and related services.\n\nIllustrative Examples:\n\nCivil engineering services\nEnvironmental engineering services\nConstruction engineering services\nMechanical engineering services\nEngineers' offices\nRobotics automation engineering services\n\n\nCross-References. Establishments primarily engaged in--",
  },
  {
    code: 541340,
    title: 'Drafting Services',
    description:
      'This industry comprises establishments primarily engaged in drawing detailed layouts, plans, and illustrations of buildings, structures, systems, or components from engineering and architectural specifications.\n',
  },
  {
    code: 541350,
    title: 'Building Inspection Services',
    description:
      'This industry comprises establishments primarily engaged in providing building inspection services.  These establishments typically evaluate all aspects of the building structure and component systems and prepare a report on the physical condition of the property, generally for buyers or others involved in real estate transactions.  Building inspection bureaus and establishments providing home inspection services are included in this industry.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 541360,
    title: 'Geophysical Surveying and Mapping Services',
    description:
      'This industry comprises establishments primarily engaged in gathering, interpreting, and mapping geophysical data.  Establishments in this industry often specialize in locating and measuring the extent of subsurface resources, such as oil, gas, and minerals, but they may also conduct surveys for engineering purposes.  Establishments in this industry use a variety of surveying techniques depending on the purpose of the survey, including magnetic surveys, gravity surveys, seismic surveys, or electrical and electromagnetic surveys.\n\nCross-References.',
  },
  {
    code: 541370,
    title: 'Surveying and Mapping (except Geophysical) Services',
    description:
      'This industry comprises establishments primarily engaged in performing surveying and mapping services of the surface of the earth, including the sea floor.  These services may include surveying and mapping of areas above or below the surface of the earth, such as the creation of view easements or segregating rights in parcels of land by creating underground utility easements.\n\nIllustrative Examples:\n\nCadastral surveying services\nMapping (except geophysical) services\nCartographic surveying services\nTopographic surveying services\nGeodetic surveying services\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 541380,
    title: 'Testing Laboratories and Services',
    description:
      'This industry comprises establishments primarily engaged in performing physical, chemical, and other analytical testing services, such as acoustics or vibration testing, assaying, biological testing (except medical and veterinary), calibration testing, electrical and electronic testing, geotechnical testing, mechanical testing, nondestructive testing, or thermal testing.  The testing may occur in a laboratory or on-site.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 541410,
    title: 'Interior Design Services',
    description:
      'This industry comprises establishments primarily engaged in planning, designing, and administering projects in interior spaces to meet the physical and aesthetic needs of people using them, taking into consideration building codes, health and safety regulations, traffic patterns and floor planning, mechanical and electrical needs, and interior fittings and furniture.  Interior designers and interior design consultants work in areas, such as hospitality design, health care design, institutional design, commercial and corporate design, and residential design.  This industry also includes interior decorating consultants engaged exclusively in providing aesthetic services associated with interior spaces.\n',
  },
  {
    code: 541420,
    title: 'Industrial Design Services',
    description:
      'This industry comprises establishments primarily engaged in creating and developing designs and specifications that optimize the use, value, and appearance of products.  These services can include the determination of the materials, construction, mechanisms, shape, color, and surface finishes of the product, taking into consideration human characteristics and needs, safety, market appeal, and efficiency in production, distribution, use, and maintenance.  Establishments providing automobile or furniture industrial design services or industrial design consulting services are included in this industry.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 541430,
    title: 'Graphic Design Services',
    description:
      'This industry comprises establishments primarily engaged in planning, designing, and managing the production of visual communication in order to convey specific messages or concepts, clarify complex information, or project visual identities.  These services can include the design of printed materials, packaging, advertising, signage systems, and corporate identification (logos).  This industry also includes commercial artists engaged exclusively in generating drawings and illustrations requiring technical accuracy or interpretative skills.\n\nIllustrative Examples:\n\nCommercial art studios\nCorporate identification (i.e., logo) design services\nIndependent commercial or graphic artists\nMedical art or illustration services\nGraphic design consulting services\n\n\nCross-References.',
  },
  {
    code: 541490,
    title: 'Other Specialized Design Services',
    description:
      'This industry comprises establishments primarily engaged in providing professional design services (except architectural, landscape architecture, engineering, interior, industrial, graphic, and computer systems design).\n\nIllustrative Examples:\n\nCostume design services (except independent theatrical costume designers)\nJewelry design services\nFashion design services\nFloat design services\nShoe design services\nLighting design services\nTextile design services\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 541511,
    title: 'Custom Computer Programming Services',
    description:
      'This U.S. industry comprises establishments primarily engaged in writing, modifying, testing, and supporting software to meet the needs of a particular customer.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 541512,
    title: 'Computer Systems Design Services',
    description:
      'This U.S. industry comprises establishments primarily engaged in planning and designing computer systems that integrate computer hardware, software, and communication technologies.  The hardware and software components of the system may be provided by this establishment or company as part of integrated services or may be provided by third parties or vendors.  These establishments often install the system and train and support users of the system.\n\nIllustrative Examples:\n\nComputer systems integration design consulting services\nLocal area network (LAN) computer systems integration design services\nInformation management computer systems integration design services\nOffice automation computer systems integration design services\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 541513,
    title: 'Computer Facilities Management Services',
    description:
      "This U.S. industry comprises establishments primarily engaged in providing on-site management and operation of clients' computer systems and/or data processing facilities.  Establishments providing computer systems or data processing facilities support services are included in this industry.\n\nCross-References.",
  },
  {
    code: 541519,
    title: 'Other Computer Related Services',
    description:
      'This U.S. industry comprises establishments primarily engaged in providing computer related services (except custom programming, systems integration design, and facilities management services). Establishments providing computer disaster recovery services or software installation services are included in this industry.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 541611,
    title: 'Administrative Management and General Management Consulting Services',
    description:
      'This U.S. industry comprises establishments primarily engaged in providing operating advice and assistance to businesses and other organizations on administrative management issues, such as financial planning and budgeting, equity and asset management, records management, office planning, strategic and organizational planning, site selection, new business start-up, and business process improvement.  This industry also includes establishments of general management consultants that provide a full range of administrative, human resource, marketing, process, physical distribution, logistics, or other management consulting services to clients.\n\nIllustrative Examples:\n\nAdministrative management consulting services\nFinancial management (except investment advice) consulting services\nGeneral management consulting services\nSite selection consulting services\nStrategic planning consulting services\n\n\nCross-References.',
  },
  {
    code: 541612,
    title: 'Human Resources Consulting Services',
    description:
      'This U.S. industry comprises establishments primarily engaged in providing advice and assistance to businesses and other organizations in one or more of the following areas: (1) human resource and personnel policies, practices, and procedures; (2) employee benefits planning, communication, and administration; (3) compensation systems planning; and (4) wage and salary administration.\n\nIllustrative Examples:\n\nBenefit or compensation consulting services\nEmployee assessment consulting services\nPersonnel management consulting services\nHuman resources consulting services\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 541613,
    title: 'Marketing Consulting Services',
    description:
      'This U.S. industry comprises establishments primarily engaged in providing operating advice and assistance to businesses and other organizations on marketing issues, such as developing marketing objectives and policies, sales forecasting, new product developing and pricing, licensing and franchise planning, and marketing planning and strategy.\n\nIllustrative Examples:\n\nCustomer services management consulting services\nNew product development consulting services\nMarketing management consulting services\nSales management consulting services\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 541614,
    title: 'Process, Physical Distribution, and Logistics Consulting Services',
    description:
      'This U.S. industry comprises establishments primarily engaged in providing operating advice and assistance to businesses and other organizations in: (1) manufacturing operations improvement; (2) productivity improvement; (3) production planning and control; (4) quality assurance and quality control; (5) inventory management; (6) distribution networks; (7) warehouse use, operations, and utilization; (8) transportation and shipment of goods and materials; and (9) materials management and handling.\n\nIllustrative Examples:\n\nFreight rate or tariff rate consulting services\nProductivity improvement consulting services\nManufacturing management consulting services\nInventory planning and control management consulting services\nTransportation management consulting services\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 541618,
    title: 'Other Management Consulting Services',
    description:
      'This U.S. industry comprises establishments primarily engaged in providing management consulting services (except administrative and general management consulting; human resources consulting; marketing consulting; or process, physical distribution, and logistics consulting).  Establishments providing telecommunications or utilities management consulting services are included in this industry.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 541620,
    title: 'Environmental Consulting Services',
    description:
      'This industry comprises establishments primarily engaged in providing advice and assistance to businesses and other organizations on environmental issues, such as the control of environmental contamination from pollutants, toxic substances, and hazardous materials.  These establishments identify problems (e.g., inspect buildings for hazardous materials), measure and evaluate risks, and recommend solutions.  They employ a multidisciplined staff of scientists, engineers, and other technicians with expertise in areas, such as air and water quality, asbestos contamination, remediation, ecological restoration, and environmental law.  Establishments providing sanitation or site remediation consulting services are included in this industry.\n\nCross-References.',
  },
  {
    code: 541690,
    title: 'Other Scientific and Technical Consulting Services',
    description:
      'This industry comprises establishments primarily engaged in providing advice and assistance to businesses and other organizations on scientific and technical issues (except environmental).\n\nIllustrative Examples:\n\nAgricultural consulting services\nMotion picture consulting services\nBiological consulting services\nPhysics consulting services\nChemical consulting services\nRadio consulting services\nEconomic consulting services\nSafety consulting services\nEnergy consulting services\t\nSecurity consulting services\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 541713,
    title: 'Research and Development in Nanotechnology',
    description:
      'This U.S. industry comprises establishments primarily engaged in conducting nanotechnology research and experimental development.  Nanotechnology research and experimental development involves the study of matter at the nanoscale (i.e., a scale of about 1 to 100 nanometers).  This research and development in nanotechnology may result in development of new nanotechnology processes or in prototypes of new or altered materials and/or products that may be reproduced, utilized, or implemented by various industries.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 541714,
    title: 'Research and Development in Biotechnology (except Nanobiotechnology)',
    description:
      'This U.S. industry comprises establishments primarily engaged in conducting biotechnology (except nanobiotechnology) research and experimental development.  Biotechnology (except nanobiotechnology) research and experimental development involves the study of the use of microorganisms and cellular and biomolecular processes to develop or alter living or non-living materials.  This research and development in biotechnology (except nanobiotechnology) may result in development of new biotechnology (except nanobiotechnology) processes or in prototypes of new or genetically-altered products that may be reproduced, utilized, or implemented by various industries.\n\nIllustrative Examples:\n\nCloning research and experimental development laboratories \nDNA technologies (e.g., microarrays) research and experimental development laboratories\nNucleic acid chemistry research and experimental development laboratories\nProtein engineering research and experimental development laboratories\nRecombinant DNA research and experimental development laboratories \n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 541715,
    title:
      'Research and Development in the Physical, Engineering, and Life Sciences (except Nanotechnology and Biotechnology)',
    description:
      'This U.S. industry comprises establishments primarily engaged in conducting research and experimental development (except nanotechnology and biotechnology research and experimental development) in the physical, engineering, and life sciences, such as agriculture, electronics, environmental, biology, botany, computers, chemistry, food, fisheries, forests, geology, health, mathematics, medicine, oceanography, pharmacy, physics, veterinary, and other allied subjects.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 541720,
    title: 'Research and Development in the Social Sciences and Humanities',
    description:
      'This industry comprises establishments primarily engaged in conducting research and analyses in cognitive development, sociology, psychology, language, behavior, economic, and other social science and humanities research.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 541810,
    title: 'Advertising Agencies',
    description:
      'This industry comprises establishments primarily engaged in creating advertising campaigns and placing such advertising in print and digital periodicals, newspapers, radio and television, or other media.  These establishments are organized to provide a full range of services (i.e., through in-house capabilities or subcontracting), including advice, creative services, account management, production of advertising content, media planning, and buying (i.e., placing advertising).\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 541820,
    title: 'Public Relations Agencies',
    description:
      'This industry comprises establishments primarily engaged in designing and implementing public relations campaigns.  These campaigns are designed to promote the interests and image of their clients.  Establishments providing lobbying, political consulting, or public relations consulting are included in this industry.\n',
  },
  {
    code: 541830,
    title: 'Media Buying Agencies',
    description:
      'This industry comprises establishments primarily engaged in purchasing advertising time or space from media outlets and reselling it to advertising agencies or individual companies directly.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 541840,
    title: 'Media Representatives',
    description:
      "This industry comprises establishments of independent representatives primarily engaged in selling media time or space for media owners.\n\nIllustrative Examples:\n\nNewspaper advertising representatives (i.e., independent of media owners)\nRadio advertising representatives (i.e., independent of media owners)\nPublishers' advertising representatives (i.e., independent of media owners)\nTelevision advertising representatives (i.e., independent of media owners)\n\n\nCross-References. Establishments primarily engaged in--",
  },
  {
    code: 541850,
    title: 'Indoor and Outdoor Display Advertising',
    description:
      'This industry comprises establishments primarily engaged in creating and designing public display advertising campaign materials, such as printed, painted, or electronic displays; and/or placing such displays on indoor or outdoor billboards and panels, or on or within transit vehicles or facilities, shopping malls, retail (in-store) displays, and other display structures or sites.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 541860,
    title: 'Direct Mail Advertising',
    description:
      'This industry comprises establishments primarily engaged in (1) creating and designing advertising campaigns for the purpose of distributing advertising materials (e.g., coupons, flyers, samples) or specialties (e.g., keychains, magnets, pens with customized messages imprinted) by mail or other direct distribution and/or (2) preparing such advertising materials or specialties for mailing or other direct distribution.  These establishments may also compile, maintain, sell, and rent mailing lists.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 541870,
    title: 'Advertising Material Distribution Services',
    description:
      'This industry comprises establishments primarily engaged in the direct distribution or delivery of advertisements (e.g., circulars, coupons, handbills) or samples.  Establishments in this industry use methods, such as delivering advertisements or samples door-to-door, placing flyers or coupons on car windshields in parking lots, or handing out samples in retail stores.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 541890,
    title: 'Other Services Related to Advertising',
    description:
      'This industry comprises establishments primarily engaged in providing advertising services (except advertising agency services, public relations agency services, media buying agency services, media representative services, display advertising services, direct mail advertising services, advertising material distribution services, and marketing consulting services).\n\nIllustrative Examples:\n\nAdvertising specialties (e.g., keychains, magnets, pens) distribution services (except direct mail)\nSign lettering and painting services\nDisplay lettering services\nStore window dressing or trimming services\nMannequin decorating services\nWelcoming services (i.e., advertising services)\nMerchandise demonstration services\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 541910,
    title: 'Marketing Research and Public Opinion Polling',
    description:
      'This industry comprises establishments primarily engaged in systematically gathering, recording, tabulating, and presenting marketing and public opinion data.\n\nIllustrative Examples:\n\nBroadcast media rating services\nPolitical opinion polling services\nMarketing analysis or research services\nStatistical sampling services\nOpinion research services\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 541921,
    title: 'Photography Studios, Portrait',
    description:
      'This U.S. industry comprises establishments known as portrait studios primarily engaged in providing still, video, or digital portrait photography services.\n\nIllustrative Examples:\n\nHome photography services\nSchool photography services\nPassport photography services\nVideotaping services for special events (e.g., weddings)\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 541922,
    title: 'Commercial Photography',
    description:
      'This U.S. industry comprises establishments primarily engaged in providing commercial photography services, generally for advertising agencies, publishers, and other business and industrial users.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 541930,
    title: 'Translation and Interpretation Services',
    description:
      'This industry comprises establishments primarily engaged in translating written material and interpreting speech from one language to another and establishments primarily engaged in providing sign language services.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 541940,
    title: 'Veterinary Services',
    description:
      "This industry comprises establishments of licensed veterinary practitioners primarily engaged in the practice of veterinary medicine, dentistry, or surgery for animals; and establishments primarily engaged in providing testing services for licensed veterinary practitioners.\n\nIllustrative Examples:\n\nAnimal hospitals\nVeterinary clinics\nVeterinarians' offices\nVeterinary testing laboratories\n\n\nCross-References. Establishments primarily engaged in--",
  },
  {
    code: 541990,
    title: 'All Other Professional, Scientific, and Technical Services',
    description:
      'This industry comprises establishments primarily engaged in the provision of professional, scientific, or technical services (except legal services; accounting, tax preparation, bookkeeping, and related services; architectural, engineering, and related services; specialized design services; computer systems design and related services; management, scientific, and technical consulting services; scientific research and development services; advertising, public relations, and related services; market research and public opinion polling; photographic services; translation and interpretation services; and veterinary services).\n\nIllustrative Examples:\n\nAppraisal (except real estate) services\nMarine surveyor (i.e., appraiser) services\nArbitration and conciliation services (except by lawyer, attorney, or paralegal offices)\nPatent broker services (i.e., patent marketing services)\nCommodity inspector services\nPipeline or power line inspection (i.e., visual) services\nConsumer credit counseling services\nWeather forecasting services\nHandwriting analysis services \n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 551111,
    title: 'Offices of Bank Holding Companies',
    description:
      'This U.S. industry comprises legal entities known as bank holding companies primarily engaged in holding the securities of (or other equity interests in) companies and enterprises for the purpose of owning a controlling interest or influencing the management decisions of these firms.  The holding companies in this industry do not administer, oversee, and manage other establishments of the company or enterprise whose securities they hold.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 551112,
    title: 'Offices of Other Holding Companies',
    description:
      'This U.S. industry comprises legal entities known as holding companies (except bank holding) primarily engaged in holding the securities of (or other equity interests in) companies and enterprises for the purpose of owning a controlling interest or influencing the management decisions of these firms.  The holding companies in this industry do not administer, oversee, and manage other establishments of the company or enterprise whose securities they hold.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 551114,
    title: 'Corporate, Subsidiary, and Regional Managing Offices',
    description:
      'This U.S. industry comprises establishments (except government establishments) primarily engaged in administering, overseeing, and managing other establishments of the company or enterprise.  These establishments normally undertake the strategic or organizational planning and decision-making role of the company or enterprise.  Establishments in this industry may hold the securities of the company or enterprise.\n\nIllustrative Examples:\n\nCentralized administrative offices\nHead offices\nCorporate offices\nHolding companies that manage\nDistrict and regional offices\nSubsidiary management offices\n\n\nCross-References.',
  },
  {
    code: 561110,
    title: 'Office Administrative Services',
    description:
      'This industry comprises establishments primarily engaged in providing a range of day-to-day office administrative services, such as financial planning; billing and recordkeeping; personnel; and physical distribution and logistics, for others on a contract or fee basis.  These establishments do not provide operating staff to carry out the complete operations of a business.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 561210,
    title: 'Facilities Support Services',
    description:
      "This industry comprises establishments primarily engaged in providing operating staff to perform a combination of support services within a client's facilities.  Establishments in this industry typically provide a combination of services, such as janitorial, maintenance, trash disposal, guard and security, mail routing, reception, laundry, and related services to support operations within facilities.  These establishments provide operating staff to carry out these support activities, but are not involved with or responsible for the core business or activities of the client.  Establishments providing facilities (except computer and/or data processing) operation support services and establishments providing private jail services or operating correctional facilities (i.e., jails) on a contract or fee basis are included in this industry.\n\nCross-References.",
  },
  {
    code: 561311,
    title: 'Employment Placement Agencies',
    description:
      'This U.S. industry comprises establishments primarily engaged in listing employment vacancies and in recruiting, referring, or placing applicants for employment.  The individuals referred or placed are not employees of the employment agencies.\n\nIllustrative Examples:\n\nBabysitting bureaus (i.e., registries)\nEmployment registries\nModel registries\nCasting agencies or bureaus (i.e., motion picture, theatrical, video)\nEmployment agencies\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 561312,
    title: 'Executive Search Services',
    description:
      'This U.S. industry comprises establishments primarily engaged in providing executive search, recruitment, and placement services for clients with specific executive and senior management position requirements.  The range of services provided by these establishments may include developing a search strategy and position specification based on the culture and needs of the client; researching, identifying, screening, and interviewing candidates; verifying candidate qualifications; and assisting in final offer negotiations and assimilation of the selected candidate.  The individuals identified, recruited, or placed are not employees of the executive search services establishments.\n\nIllustrative Examples:\n\nSenior executive search services\nExecutive placement services\nExecutive search services\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 561320,
    title: 'Temporary Help Services',
    description:
      "This industry comprises establishments primarily engaged in supplying workers to clients' businesses for limited periods of time to supplement the working force of the client.  The individuals provided are employees of the temporary help services establishment.  However, these establishments do not provide direct supervision of their employees at the clients' work sites.\n\nIllustrative Examples:\n\nHelp supply services\nModel supply services\nLabor (except farm) contractors (i.e., personnel suppliers)\nTemporary employment or temporary staffing services\nManpower pools\n\n\nCross-References. Establishments primarily engaged in--",
  },
  {
    code: 561330,
    title: 'Professional Employer Organizations',
    description:
      "This industry comprises establishments primarily engaged in providing human resources and human resource management services to client businesses and households.  Establishments in this industry operate in a co-employment relationship with client businesses or organizations and are specialized in performing a wide range of human resource and personnel management duties, such as payroll, payroll tax, benefits administration, workers' compensation, unemployment, and human resource administration.  Professional employer organizations (PEOs) are responsible for payroll, including withholding and remitting employment-related taxes, for some or all of the employees of their clients, and also serve as the employer of those employees for benefits and related purposes.\n\nCross-References. Establishments primarily engaged in--",
  },
  {
    code: 561410,
    title: 'Document Preparation Services',
    description:
      'This industry comprises establishments primarily engaged in one or more of the following: (1) letter or resume writing; (2) document editing or proofreading; (3) typing, word processing, or desktop publishing; and (4) stenography (except court reporting or stenotype recording), transcription, and other secretarial services.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 561421,
    title: 'Telephone Answering Services',
    description:
      'This U.S. industry comprises establishments primarily engaged in answering telephone calls and relaying messages on behalf of clients or for other establishments of the same enterprise.\n\nCross-References.',
  },
  {
    code: 561422,
    title: 'Telemarketing Bureaus and Other Contact Centers',
    description:
      'This U.S. industry comprises establishments primarily engaged in operating call centers that initiate or receive communications via telephone, facsimile, email, or other communication modes for purposes such as: (1) promoting products or services, (2) taking orders, (3) soliciting contributions, and (4) providing information or assistance regarding products or services.  Telemarketing bureaus and other contact centers provide these services on behalf of clients and do not own the products or provide the services that they are representing, or they serve other establishments of the same enterprise.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 561431,
    title: 'Private Mail Centers',
    description:
      'This U.S. industry comprises (1) establishments primarily engaged in providing mailbox rental and other postal and mailing (except direct mail advertising) services or (2) establishments engaged in providing these mailing services along with one or more other office support services, such as facsimile services, word processing services, on-site PC rental services, and office product sales.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 561439,
    title: 'Other Business Service Centers (including Copy Shops)',
    description:
      'This U.S. industry comprises (1) establishments generally known as copy centers or shops primarily engaged in providing photocopying, duplicating, blueprinting, and other document copying services, without also providing printing services (e.g., offset printing, quick printing, digital printing, prepress services) and (2) establishments (except private mail centers) engaged in providing a range of office support services (except printing services), such as document copying services, facsimile services, word processing services, on-site PC rental services, and office product sales.\n\nCross-References.',
  },
  {
    code: 561440,
    title: 'Collection Agencies',
    description:
      'This industry comprises establishments primarily engaged in collecting payments for claims and remitting payments collected to their clients.\n\nIllustrative Examples:\n\nAccount or delinquent account collection services\nTax collection services on a contract or fee basis\nBill or debt collection services\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 561450,
    title: 'Credit Bureaus',
    description:
      'This industry comprises establishments primarily engaged in compiling information, such as credit and employment histories, and providing the information to financial institutions, retailers, and others who have a need to evaluate the creditworthiness of individuals and businesses.\n\nIllustrative Examples:\n\nCredit agencies\nCredit rating services\nCredit investigation services\nCredit reporting bureaus\n',
  },
  {
    code: 561491,
    title: 'Repossession Services',
    description:
      'This U.S. industry comprises establishments primarily engaged in repossessing tangible assets (e.g., automobiles, boats, equipment, planes, furniture, appliances) for the creditor as a result of delinquent debts.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 561492,
    title: 'Court Reporting and Stenotype Services',
    description:
      'This U.S. industry comprises establishments primarily engaged in providing verbatim reporting and stenotype recording of live legal proceedings and transcribing subsequent recorded materials.\n\nIllustrative Examples:\n\nReal-time (i.e., simultaneous) closed captioning of live television performances, meetings, conferences\nCourt reporting or stenotype recording services\nPublic stenography services\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 561499,
    title: 'All Other Business Support Services',
    description:
      'This U.S. industry comprises establishments primarily engaged in providing business support services (except secretarial and other document preparation services; telephone answering and telemarketing services; private mail services or document copying services conducted as separate activities or in conjunction with other office support services; monetary debt collection services; credit reporting services; repossession services; and court reporting and stenotype recording services).\n\nIllustrative Examples:\n\nAddress bar coding services\nCharitable fundraising campaign organization services on a contract or fee basis\nBar code imprinting services\nMail presorting services\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 561510,
    title: 'Travel Agencies',
    description:
      'This industry comprises establishments primarily engaged in acting as agents in selling travel, tour, and accommodation services to the general public and commercial clients.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 561520,
    title: 'Tour Operators',
    description:
      'This industry comprises establishments primarily engaged in arranging and assembling tours.  The tours are sold through travel agencies or tour operators.  Travel or wholesale tour operators are included in this industry.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 561591,
    title: 'Convention and Visitors Bureaus',
    description:
      'This U.S. industry comprises establishments primarily engaged in marketing and promoting communities and facilities to businesses and leisure travelers through a range of activities, such as assisting organizations in locating meeting and convention sites; providing travel information on area attractions, lodging accommodations, restaurants; providing maps; and organizing group tours of local historical, recreational, and cultural attractions.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 561599,
    title: 'All Other Travel Arrangement and Reservation Services',
    description:
      'This U.S. industry comprises establishments (except travel agencies, tour operators, and convention and visitors bureaus) primarily engaged in providing travel arrangement and reservation services.\n\nIllustrative Examples:\n\nCondominium time-share exchange services\nTicket (e.g., airline, bus, cruise ship, sports, theatrical) offices\nRoad and travel services automobile clubs\nReservation (e.g., airline, car rental, hotel, restaurant) services\nTicket (e.g., amusement, sports, theatrical) agencies\n\n\nCross-References.',
  },
  {
    code: 561611,
    title: 'Investigation and Personal Background Check Services',
    description:
      'This U.S. industry comprises establishments primarily engaged in providing investigation, detective, and personal background check services.\n\nIllustrative Examples:\n\nFingerprint services\nPrivate detective services\nPolygraph services\nPrivate investigative services (except credit)\n\n\nCross-References.',
  },
  {
    code: 561612,
    title: 'Security Guards and Patrol Services',
    description:
      'This U.S. industry comprises establishments primarily engaged in providing guard and patrol services, such as bodyguard, guard dog, and parking security services.\n\nCross-References.',
  },
  {
    code: 561613,
    title: 'Armored Car Services',
    description:
      'This U.S. industry comprises establishments primarily engaged in picking up and delivering money, receipts, or other valuable items.  These establishments maintain personnel and equipment to protect such properties while in transit.\n',
  },
  {
    code: 561621,
    title: 'Security Systems Services (except Locksmiths)',
    description:
      'This U.S. industry comprises establishments primarily engaged in (1) selling security alarm systems, such as burglar and fire alarms, along with installation, repair, or monitoring services or (2) remote monitoring of electronic security alarm systems.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 561622,
    title: 'Locksmiths',
    description:
      'This U.S. industry comprises establishments primarily engaged in (1) selling mechanical or electronic locking devices, safes, and security vaults, along with installation, repair, rebuilding, or adjusting services or (2) installing, repairing, rebuilding, and adjusting mechanical or electronic locking devices, safes, and security vaults.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 561710,
    title: 'Exterminating and Pest Control Services',
    description:
      'This industry comprises establishments primarily engaged in exterminating and controlling birds, mosquitoes, rodents, termites, and other insects and pests (except for crop production and forestry production).  Establishments providing fumigation services are included in this industry.\n\nCross-References.',
  },
  {
    code: 561720,
    title: 'Janitorial Services',
    description:
      'This industry comprises establishments primarily engaged in cleaning building interiors, interiors of transportation equipment (e.g., aircraft, rail cars, ships), and/or windows.\n\nIllustrative Examples:\n\nCustodial services\nService station cleaning and degreasing services\nHousekeeping (i.e., cleaning) services\nWashroom sanitation services\nMaid (i.e., cleaning) services\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 561730,
    title: 'Landscaping Services',
    description:
      'This industry comprises (1) establishments primarily engaged in providing landscape care and maintenance services and/or installing trees, shrubs, plants, lawns, or gardens and (2) establishments primarily engaged in providing these services along with the design of landscape plans and/or the construction (i.e., installation) of walkways, retaining walls, decks, fences, ponds, and similar structures.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 561740,
    title: 'Carpet and Upholstery Cleaning Services',
    description:
      'This industry comprises establishments primarily engaged in cleaning and dyeing used rugs, carpets, and upholstery.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 561790,
    title: 'Other Services to Buildings and Dwellings',
    description:
      'This industry comprises establishments primarily engaged in providing services to buildings and dwellings (except exterminating and pest control; janitorial; landscaping care and maintenance; and carpet and upholstery cleaning).\n\nIllustrative Examples:\n\nBuilding exterior cleaning services (except sandblasting, window cleaning)\nSwimming pool cleaning and maintenance services\nChimney cleaning services\nVentilation duct cleaning services\nDrain or gutter cleaning services\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 561910,
    title: 'Packaging and Labeling Services',
    description:
      'This industry comprises establishments primarily engaged in packaging client-owned materials.  The services may include labeling and/or imprinting the package.\n\nIllustrative Examples:\n\nApparel and textile folding and packaging services\nKit assembling and packaging services\nBlister packaging services\nShrink wrapping services\nGift wrapping services\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 561920,
    title: 'Convention and Trade Show Organizers',
    description:
      'This industry comprises establishments primarily engaged in organizing, promoting, and/or managing events, such as business and trade shows, conventions, conferences, and meetings (whether or not they manage and provide the staff to operate the facilities in which these events take place).\n\nCross-References.',
  },
  {
    code: 561990,
    title: 'All Other Support Services',
    description:
      'This industry comprises establishments primarily engaged in providing day-to-day business and other organizational support services (except office administrative services, facilities support services, employment services, business support services, travel arrangement and reservation services, security and investigation services, services to buildings and other structures, packaging and labeling services, and convention and trade show organizing services).\n\nIllustrative Examples:\n\nBartering services\nFlagging (i.e., traffic control) services\nBottle exchanges\nFloat decorating services\nInventory taking services\nContract meter reading services\nLumber grading services\nDiving services on a contract or fee basis\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 562111,
    title: 'Solid Waste Collection',
    description:
      'This U.S. industry comprises establishments primarily engaged in one or more of the following: (1) collecting and/or hauling nonhazardous solid waste (i.e., garbage) within a local area; (2) operating nonhazardous solid waste transfer stations; and (3) collecting and/or hauling mixed recyclable materials within a local area.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 562112,
    title: 'Hazardous Waste Collection',
    description:
      'This U.S. industry comprises establishments primarily engaged in collecting and/or hauling hazardous waste within a local area and/or operating hazardous waste transfer stations.  Hazardous waste collection establishments may be responsible for the identification, treatment, packaging, and labeling of waste for the purposes of transport.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 562119,
    title: 'Other Waste Collection',
    description:
      'This U.S. industry comprises establishments primarily engaged in collecting and/or hauling waste (except nonhazardous solid waste and hazardous waste) within a local area.  Establishments engaged in brush or rubble removal services are included in this industry.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 562211,
    title: 'Hazardous Waste Treatment and Disposal',
    description:
      'This U.S. industry comprises establishments primarily engaged in (1) operating treatment and/or disposal facilities for hazardous waste or (2) the combined activity of collecting and/or hauling of hazardous waste materials within a local area and operating treatment or disposal facilities for hazardous waste.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 562212,
    title: 'Solid Waste Landfill',
    description:
      'This U.S. industry comprises establishments primarily engaged in (1) operating landfills for the disposal of nonhazardous solid waste or (2) the combined activity of collecting and/or hauling nonhazardous waste materials within a local area and operating landfills for the disposal of nonhazardous solid waste.  These establishments may produce byproducts, such as methane.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 562213,
    title: 'Solid Waste Combustors and Incinerators',
    description:
      'This U.S. industry comprises establishments primarily engaged in operating combustors and incinerators for the disposal of nonhazardous solid waste.  These establishments may produce byproducts, such as electricity and steam.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 562219,
    title: 'Other Nonhazardous Waste Treatment and Disposal',
    description:
      'This U.S. industry comprises establishments primarily engaged in (1) operating nonhazardous waste treatment and disposal facilities (except landfills, combustors, incinerators, and sewer systems or sewage treatment facilities) or (2) the combined activity of collecting and/or hauling of nonhazardous waste materials within a local area and operating waste treatment or disposal facilities (except landfills, combustors, incinerators, and sewer systems or sewage treatment facilities).  Compost dumps are included in this industry.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 562910,
    title: 'Remediation Services',
    description:
      'This industry comprises establishments primarily engaged in one or more of the following: (1) remediation and cleanup of contaminated buildings, mine sites, soil, or ground water; (2) integrated mine reclamation activities, including demolition, soil remediation, waste water treatment, hazardous material removal, contouring land, and revegetation; and (3) asbestos, lead paint, and other toxic material abatement.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 562920,
    title: 'Materials Recovery Facilities',
    description:
      'This industry comprises establishments primarily engaged in (1) operating facilities for separating and sorting recyclable materials from nonhazardous waste streams (i.e., garbage) and/or (2) operating facilities where commingled recyclable materials, such as paper, plastics, used beverage cans, and metals, are sorted into distinct categories.\n\nCross-References.',
  },
  {
    code: 562991,
    title: 'Septic Tank and Related Services',
    description:
      'This U.S. industry comprises establishments primarily engaged in (1) pumping (i.e., cleaning) septic tanks and cesspools and/or (2) renting and/or servicing portable toilets.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 562998,
    title: 'All Other Miscellaneous Waste Management Services',
    description:
      'This U.S. industry comprises establishments primarily engaged in providing waste management services (except waste collection, waste treatment and disposal, remediation, operation of materials recovery facilities, septic tank pumping and related services, and waste management consulting services).\n\nIllustrative Examples:\n\nBeach cleaning and maintenance services\nSewer or storm basin cleanout services\nCatch basin cleaning services\nTank cleaning and disposal services, commercial or industrial\nSewer cleaning and rodding services\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 611110,
    title: 'Elementary and Secondary Schools',
    description:
      'This industry comprises establishments primarily engaged in furnishing academic courses and associated course work that comprise a basic preparatory education.  A basic preparatory education ordinarily constitutes kindergarten through 12th grade.  This industry includes school boards and school districts.\n\nIllustrative Examples:\n\nElementary schools\nParochial schools, elementary or secondary\nHigh schools\nPrimary schools\nCharter schools\nKindergartens\nMilitary academies, elementary or secondary\nSchools for the physically disabled, elementary or secondary\n\n\nCross-References.',
  },
  {
    code: 611210,
    title: 'Junior Colleges',
    description:
      "This industry comprises establishments primarily engaged in furnishing academic, or academic and technical, courses and granting associate degrees, certificates, or diplomas below the baccalaureate level.  The requirement for admission to an associate or equivalent degree program is at least a high school diploma or equivalent general academic training.  Instruction may be provided in diverse settings, such as the establishment's or client's training facilities, educational institutions, the workplace, or the home, and through diverse means, such as correspondence, television, the Internet, or other electronic and distance-learning methods.  The training provided by these establishments may include the use of simulators and simulation methods.\n\nCross-References.",
  },
  {
    code: 611310,
    title: 'Colleges, Universities, and Professional Schools',
    description:
      "This industry comprises establishments primarily engaged in furnishing academic courses and granting degrees at baccalaureate or graduate levels.  The requirement for admission is at least a high school diploma or equivalent general academic training.  Instruction may be provided in diverse settings, such as the establishment's or client's training facilities, educational institutions, the workplace, or the home, and through diverse means, such as correspondence, television, the Internet, or other electronic and distance-learning methods.  The training provided by these establishments may include the use of simulators and simulation methods.\n\nIllustrative Examples:\n\nColleges (except junior colleges)\nTheological seminaries offering baccalaureate or graduate degrees\nMilitary academies, college-level\nUniversities\nProfessional schools (e.g., business administration, dental, law, medical)\n\n\nCross-References.",
  },
  {
    code: 611410,
    title: 'Business and Secretarial Schools',
    description:
      "This industry comprises establishments primarily engaged in offering courses in office procedures and secretarial and stenographic skills and may offer courses in basic office skills, such as word processing.  In addition, these establishments may offer such classes as office machine operation, reception, communications, and other skills designed for individuals pursuing a clerical or secretarial career.  Instruction may be provided in diverse settings, such as the establishment's or client's training facilities, educational institutions, the workplace, or the home, and through diverse means, such as correspondence, television, the Internet, or other electronic and distance-learning methods.  The training provided by these establishments may include the use of simulators and simulation methods.\n\nCross-References. Establishments primarily engaged in--",
  },
  {
    code: 611420,
    title: 'Computer Training',
    description:
      "This industry comprises establishments primarily engaged in conducting computer training (except computer repair), such as instruction in computer programming, software applications, computerized business systems, computer electronics technology, computer operations, and local area network management.  Instruction may be provided in diverse settings, such as the establishment's or client's training facilities, educational institutions, the workplace, or the home, and through diverse means, such as correspondence, television, the Internet, or other electronic and distance-learning methods.  The training provided by these establishments may include the use of simulators and simulation methods.\n\nCross-References. Establishments primarily engaged in--",
  },
  {
    code: 611430,
    title: 'Professional and Management Development Training',
    description:
      "This industry comprises establishments primarily engaged in offering an array of short duration courses and seminars for management and professional development.  Training for career development may be provided directly to individuals or through employers' training programs, and courses may be customized or modified to meet the special needs of customers.  Instruction may be provided in diverse settings, such as the establishment's or client's training facilities, educational institutions, the workplace, or the home, and through diverse means, such as correspondence, television, the Internet, or other electronic and distance-learning methods.  The training provided by these establishments may include the use of simulators and simulation methods.\n\nCross-References. Establishments primarily engaged in--",
  },
  {
    code: 611511,
    title: 'Cosmetology and Barber Schools',
    description:
      'This U.S. industry comprises establishments primarily engaged in offering training in barbering, hair styling, or the cosmetic arts, such as makeup or skin care.  These schools provide job-specific certification.\n',
  },
  {
    code: 611512,
    title: 'Flight Training',
    description:
      'This U.S. industry comprises establishments primarily engaged in offering aviation and flight training.  These establishments may offer vocational training, recreational training, or both.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 611513,
    title: 'Apprenticeship Training',
    description:
      'This U.S. industry comprises establishments primarily engaged in offering apprenticeship training programs.  These programs involve applied training as well as course work.\n\nCross-References.',
  },
  {
    code: 611519,
    title: 'Other Technical and Trade Schools',
    description:
      'This U.S. industry comprises establishments primarily engaged in offering job or career vocational or technical courses (except cosmetology and barber training, aviation and flight training, and apprenticeship training).  The curriculums offered by these schools are highly structured and specialized and lead to job-specific certification.\n\nIllustrative Examples:\n\nBartending schools\nModeling schools\nBroadcasting schools\nReal estate schools\nComputer repair training\nTruck driving schools\nGraphic arts schools\nSpecialized military training (except flight instruction, academies, and basic training)\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 611610,
    title: 'Fine Arts Schools',
    description:
      'This industry comprises establishments primarily engaged in offering instruction in the arts, including dance, art, drama, and music.\n\nIllustrative Examples:\n\nArt (except commercial and graphic) instruction\nMusic instruction (e.g., piano, guitar)\nDance instruction\nMusic schools (except academic)\nDance studios\nPerforming arts schools (except academic)\nDrama schools (except academic)\nPhotography schools (except commercial photography)\nFine arts schools (except academic)\n\n\nCross-References.',
  },
  {
    code: 611620,
    title: 'Sports and Recreation Instruction',
    description:
      'This industry comprises establishments, such as camps and schools, primarily engaged in offering instruction in athletic activities.  Overnight and day sports instruction camps are included in this industry.\n\nIllustrative Examples:\n\nCamps, sports instruction\nProfessional sports instructors (i.e., not participating in sporting events)\nCheerleading instruction\nRiding instruction academies or schools\nGymnastics instruction\nSports (e.g., baseball, basketball, football, golf) instruction\nMartial arts instruction, camps or schools\nSwimming instruction\n\n\nCross-References.',
  },
  {
    code: 611630,
    title: 'Language Schools',
    description:
      'This industry comprises establishments primarily engaged in offering foreign language instruction (including sign language).  These establishments are designed to offer language instruction ranging from conversational skills for personal enrichment to intensive training courses for career or educational opportunities.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 611691,
    title: 'Exam Preparation and Tutoring',
    description:
      'This U.S. industry comprises establishments primarily engaged in offering preparation for standardized examinations and/or academic tutoring services.\n\nIllustrative Examples:\n\nAcademic tutoring services\nLearning centers offering remedial courses\nCollege board preparation centers\nProfessional examination review instruction\n',
  },
  {
    code: 611692,
    title: 'Automobile Driving Schools',
    description:
      'This U.S. industry comprises establishments primarily engaged in offering automobile driving instruction.\n\nCross-References.',
  },
  {
    code: 611699,
    title: 'All Other Miscellaneous Schools and Instruction',
    description:
      'This U.S. industry comprises establishments primarily engaged in offering instruction (except academic schools, colleges, and universities; business, computer, and management instruction; technical and trade instruction; and fine arts, sports, recreation, language, exam preparation, tutoring, and automobile driving instruction).\n\nIllustrative Examples:\n\nPublic speaking training\nSurvival training\nSpeed reading instruction\nYoga instruction, camps or schools\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 611710,
    title: 'Educational Support Services',
    description:
      'This industry comprises establishments primarily engaged in providing non-instructional services that support educational processes or systems.\n\nIllustrative Examples:\n\nEducational consultants\nEducational testing services\nEducational guidance counseling services\nStudent exchange programs\nEducational testing evaluation services\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 621111,
    title: 'Offices of Physicians (except Mental Health Specialists)',
    description:
      'This U.S. industry comprises establishments of health practitioners having the degree of M.D. (Doctor of Medicine) or D.O. (Doctor of Osteopathic Medicine) primarily engaged in the independent practice of general or specialized medicine (except psychiatry or psychoanalysis) or surgery.  These practitioners operate private or group practices in their own offices (e.g., centers, clinics) or in the facilities of others, such as hospitals or HMO medical centers.\n\nCross-References.',
  },
  {
    code: 621112,
    title: 'Offices of Physicians, Mental Health Specialists',
    description:
      'This U.S. industry comprises establishments of health practitioners having the degree of M.D. (Doctor of Medicine) or D.O. (Doctor of Osteopathic Medicine) primarily engaged in the independent practice of psychiatry or psychoanalysis.  These practitioners operate private or group practices in their own offices (e.g., centers, clinics) or in the facilities of others, such as hospitals or HMO medical centers.\n\nCross-References.',
  },
  {
    code: 621210,
    title: 'Offices of Dentists',
    description:
      'This industry comprises establishments of health practitioners having the degree of D.M.D. (Doctor of Dental Medicine), D.D.S. (Doctor of Dental Surgery), or D.D.Sc. (Doctor of Dental Science) primarily engaged in the independent practice of general or specialized dentistry or dental surgery.  These practitioners operate private or group practices in their own offices (e.g., centers, clinics) or in the facilities of others, such as hospitals or HMO medical centers.  They can provide either comprehensive preventive, cosmetic, or emergency care, or specialize in a single field of dentistry.\n\nCross-References.',
  },
  {
    code: 621310,
    title: 'Offices of Chiropractors',
    description:
      'This industry comprises establishments of health practitioners having the degree of D.C. (Doctor of Chiropractic) primarily engaged in the independent practice of chiropractic.  These practitioners provide diagnostic and therapeutic treatment of neuromusculoskeletal and related disorders through the manipulation and adjustment of the spinal column and extremities, and operate private or group practices in their own offices (e.g., centers, clinics) or in the facilities of others, such as hospitals or HMO medical centers.\n',
  },
  {
    code: 621320,
    title: 'Offices of Optometrists',
    description:
      'This industry comprises establishments of health practitioners having the degree of O.D. (Doctor of Optometry) primarily engaged in the independent practice of optometry.  These practitioners examine, diagnose, treat, and manage diseases and disorders of the visual system, the eye, and associated structures as well as diagnose related systemic conditions.  Offices of optometrists prescribe and/or provide eyeglasses, contact lenses, low vision aids, and vision therapy.  They operate private or group practices in their own offices (e.g., centers, clinics) or in the facilities of others, such as hospitals or HMO medical centers, and may also provide the same services as opticians, such as selling and fitting prescription eyeglasses and contact lenses.\n\nCross-References.',
  },
  {
    code: 621330,
    title: 'Offices of Mental Health Practitioners (except Physicians)',
    description:
      'This industry comprises establishments of independent mental health practitioners (except physicians) primarily engaged in (1) the diagnosis and treatment of mental, emotional, and behavioral disorders and/or (2) the diagnosis and treatment of individual or group social dysfunction brought about by such causes as mental illness, alcohol and substance abuse, physical and emotional trauma, or stress.  These practitioners operate private or group practices in their own offices (e.g., centers, clinics) or in the facilities of others, such as hospitals or HMO medical centers.\n\nCross-References.',
  },
  {
    code: 621340,
    title: 'Offices of Physical, Occupational and Speech Therapists, and Audiologists',
    description:
      "This industry comprises establishments of independent health practitioners primarily engaged in one of the following: (1) providing physical therapy services to patients who have impairments, functional limitations, disabilities, or changes in physical functions and health status resulting from injury, disease or other causes, or who require prevention, wellness or fitness services; (2) planning and administering educational, recreational, and social activities designed to help patients or individuals with disabilities regain physical or mental functioning or adapt to their disabilities; and (3) diagnosing and treating speech, language, or hearing problems.  These practitioners operate private or group practices in their own offices (e.g., centers, clinics) or in the facilities of others, such as hospitals or HMO medical centers.\n\nIllustrative Examples:\n\nAudiologists' offices\nRecreational (e.g., art, dance, music) therapists' offices \nIndustrial therapists' offices\nSpeech pathologists' offices \nOccupational therapists' offices\nPhysical therapists' offices\n\n\nCross-References.",
  },
  {
    code: 621391,
    title: 'Offices of Podiatrists',
    description:
      'This U.S. industry comprises establishments of health practitioners having the degree of D.P.M. (Doctor of Podiatric Medicine) primarily engaged in the independent practice of podiatry.  These practitioners diagnose and treat diseases and deformities of the foot and operate private or group practices in their own offices (e.g., centers, clinics) or in the facilities of others, such as hospitals or HMO medical centers.\n\nCross-References.',
  },
  {
    code: 621399,
    title: 'Offices of All Other Miscellaneous Health Practitioners',
    description:
      "This U.S. industry comprises establishments of independent health practitioners (except physicians; dentists; chiropractors; optometrists; mental health specialists; physical, occupational, and speech therapists; audiologists; and podiatrists).  These practitioners operate private or group practices in their own offices (e.g., centers, clinics) or in the facilities of others, such as hospitals or HMO medical centers.\n\nIllustrative Examples:\n\nAcupuncturists' (except MDs or DOs) offices\nHypnotherapists' offices\nDental hygienists' offices\nInhalation or respiratory therapists' offices\nDenturists' offices\nMidwives' offices\nDietitians' offices\nNaturopaths' offices\nHomeopaths' offices\nRegistered or licensed practical nurses' offices\n\n\nCross-References. Establishments primarily engaged in--",
  },
  {
    code: 621410,
    title: 'Family Planning Centers',
    description:
      'This industry comprises establishments with medical staff primarily engaged in providing a range of family planning services on an outpatient basis, such as contraceptive services, genetic and prenatal counseling, voluntary sterilization, and therapeutic and medically induced termination of pregnancy.\n\nIllustrative Examples:\n\nBirth control clinics\nFertility clinics\nChildbirth preparation classes\nPregnancy counseling centers\n',
  },
  {
    code: 621420,
    title: 'Outpatient Mental Health and Substance Abuse Centers',
    description:
      'This industry comprises establishments with medical staff primarily engaged in providing outpatient services related to the diagnosis and treatment of mental health disorders and alcohol and other substance abuse.  These establishments generally treat patients who do not require inpatient treatment.  They may provide a counseling staff and information regarding a wide range of mental health and substance abuse issues and/or refer patients to more extensive treatment programs, if necessary.\n\nIllustrative Examples:\n\nOutpatient alcoholism treatment centers and clinics (except hospitals)\nOutpatient mental health centers and clinics (except hospitals)\nOutpatient detoxification centers and clinics (except hospitals)\nOutpatient substance abuse treatment centers and clinics (except hospitals)\nOutpatient drug addiction treatment centers and clinics (except hospitals)\n\n\nCross-References.',
  },
  {
    code: 621491,
    title: 'HMO Medical Centers',
    description:
      'This U.S. industry comprises establishments with physicians and other medical staff primarily engaged in providing a range of outpatient medical services to the health maintenance organization (HMO) subscribers with a focus generally on primary health care.  These establishments are owned by the HMO.  Included in this industry are HMO establishments that both provide health care services and underwrite health and medical insurance policies.\n\nCross-References.',
  },
  {
    code: 621492,
    title: 'Kidney Dialysis Centers',
    description:
      'This U.S. industry comprises establishments with medical staff primarily engaged in providing outpatient kidney or renal dialysis services.\n',
  },
  {
    code: 621493,
    title: 'Freestanding Ambulatory Surgical and Emergency Centers',
    description:
      'This U.S. industry comprises establishments with physicians and other medical staff primarily engaged in (1) providing surgical services (e.g., orthoscopic and cataract surgery) on an outpatient basis or (2) providing emergency care services (e.g., setting broken bones, treating lacerations, or tending to patients suffering injuries as a result of accidents, trauma, or medical conditions necessitating immediate medical care) on an outpatient basis.  Outpatient surgical establishments have specialized facilities, such as operating and recovery rooms, and specialized equipment, such as anesthetic or X-ray equipment.\n\nIllustrative Examples:\n\nFreestanding ambulatory surgical centers and clinics\nFreestanding emergency medical centers and clinics\nFreestanding trauma centers (except hospitals)\nUrgent medical care centers and clinics (except hospitals)\n\n\nCross-References.',
  },
  {
    code: 621498,
    title: 'All Other Outpatient Care Centers',
    description:
      'This U.S. industry comprises establishments with medical staff primarily engaged in providing general or specialized outpatient care (except family planning centers, outpatient mental health and substance abuse centers, HMO medical centers, kidney dialysis centers, and freestanding ambulatory surgical and emergency centers).  Centers or clinics of health practitioners with different degrees from more than one industry practicing within the same establishment (e.g., Doctor of Medicine and Doctor of Dental Medicine) are included in this industry.\n\nIllustrative Examples:\n\nOutpatient biofeedback centers and clinics\nOutpatient pain therapy centers and clinics\nOutpatient community health centers and clinics\nOutpatient sleep disorder centers and clinics\n\n\nCross-References.',
  },
  {
    code: 621511,
    title: 'Medical Laboratories',
    description:
      'This U.S. industry comprises establishments known as medical laboratories primarily engaged in providing analytic or diagnostic services, including body fluid analysis, generally to the medical profession or to the patient on referral from a health practitioner.\n\nIllustrative Examples:\n\nBlood analysis laboratories\nMedical pathology laboratories\nMedical bacteriological laboratories\nMedical testing laboratories\nMedical forensic laboratories\n\n\nCross-References.',
  },
  {
    code: 621512,
    title: 'Diagnostic Imaging Centers',
    description:
      'This U.S. industry comprises establishments known as diagnostic imaging centers primarily engaged in producing images of the patient generally on referral from a health practitioner.\n\nIllustrative Examples:\n\nComputer tomography (CT-scan) centers\nMedical radiological laboratories\nDental or medical X-ray laboratories\nUltrasound imaging centers\nMagnetic resonance imaging (MRI) centers\n',
  },
  {
    code: 621610,
    title: 'Home Health Care Services',
    description:
      'This industry comprises establishments primarily engaged in providing skilled nursing services in the home, along with a range of the following: personal care services; homemaker and companion services; physical therapy; medical social services; medications; medical equipment and supplies; counseling; 24-hour home care; occupation and vocational therapy; dietary and nutritional services; speech therapy; audiology; and high-tech care, such as intravenous therapy.\n\nIllustrative Examples:\n\nHome health care agencies\nVisiting nurse associations\nHome infusion therapy services\nIn-home hospice care services\n\n\nCross-References.',
  },
  {
    code: 621910,
    title: 'Ambulance Services',
    description:
      'This industry comprises establishments primarily engaged in providing transportation of patients by ground or air, along with medical care.  These services are often provided during a medical emergency but are not restricted to emergencies.  The vehicles are equipped with lifesaving equipment operated by medically trained personnel.\n\nCross-References.',
  },
  {
    code: 621991,
    title: 'Blood and Organ Banks',
    description:
      'This U.S. industry comprises establishments primarily engaged in collecting, storing, and distributing blood and blood products and storing and distributing body organs.\n\nCross-References.',
  },
  {
    code: 621999,
    title: 'All Other Miscellaneous Ambulatory Health Care Services',
    description:
      'This U.S. industry comprises establishments primarily engaged in providing ambulatory health care services (except offices of physicians, dentists, and other health practitioners; outpatient care centers; medical and diagnostic laboratories; home health care providers; ambulances; and blood and organ banks).\n\nIllustrative Examples:\n\nHealth screening services (except by offices of health practitioners)\nPhysical fitness evaluation services (except by offices of health practitioners)\nHearing testing services (except by offices of audiologists)\nSmoking cessation programs\nPacemaker monitoring services\n\n\nCross-References.',
  },
  {
    code: 622110,
    title: 'General Medical and Surgical Hospitals',
    description:
      'This industry comprises establishments known and licensed as general medical and surgical hospitals primarily engaged in providing diagnostic and medical treatment (both surgical and nonsurgical) to inpatients with any of a wide variety of medical conditions.  These establishments maintain inpatient beds and provide patients with food services that meet their nutritional requirements.  These hospitals have an organized staff of physicians and other medical staff to provide patient care services.  These establishments usually provide other services, such as outpatient services, anatomical pathology services, diagnostic X-ray services, clinical laboratory services, operating room services for a variety of procedures, and pharmacy services.\n',
  },
  {
    code: 622210,
    title: 'Psychiatric and Substance Abuse Hospitals',
    description:
      'This industry comprises establishments known and licensed as psychiatric and substance abuse hospitals primarily engaged in providing diagnostic, medical treatment, and monitoring services for inpatients who suffer from mental illness or substance abuse disorders.  The treatment often requires an extended stay in the hospital.  These establishments maintain inpatient beds and provide patients with food services that meet their nutritional requirements.  They have an organized staff of physicians and other medical staff to provide patient care services.  Psychiatric, psychological, and social work services are available at the facility.  These hospitals usually provide other services, such as outpatient services, clinical laboratory services, diagnostic X-ray services, and electroencephalograph services.\n\nCross-References.',
  },
  {
    code: 622310,
    title: 'Specialty (except Psychiatric and Substance Abuse) Hospitals',
    description:
      'This industry comprises establishments known and licensed as specialty hospitals primarily engaged in providing diagnostic and medical treatment to inpatients with a specific type of disease or medical condition (except psychiatric or substance abuse).  Hospitals providing long-term care for the chronically ill and hospitals providing rehabilitation, restorative, and adjustive services to physically challenged or disabled people are included in this industry.  These establishments maintain inpatient beds and provide patients with food services that meet their nutritional requirements.  They have an organized staff of physicians and other medical staff to provide patient care services.  These hospitals may provide other services, such as outpatient services, diagnostic X-ray services, clinical laboratory services, operating room services, physical therapy services, educational and vocational services, and psychological and social work services.\n\nCross-References.',
  },
  {
    code: 623110,
    title: 'Nursing Care Facilities (Skilled Nursing Facilities)',
    description:
      'This industry comprises establishments primarily engaged in providing inpatient nursing and rehabilitative services.  The care is generally provided for an extended period of time to individuals requiring nursing care.  These establishments have a permanent core staff of registered or licensed practical nurses who, along with other staff, provide nursing and continuous personal care services.\n\nIllustrative Examples:\n\nConvalescent homes or convalescent hospitals (except psychiatric)\nNursing homes\nRest homes with nursing care\nAssisted living facilities (without nursing facilities) for the elderly with nursing care\nInpatient care hospices\n\n\nCross-References.',
  },
  {
    code: 623210,
    title: 'Residential Intellectual and Developmental Disability Facilities',
    description:
      'This industry comprises establishments (e.g., group homes, hospitals, intermediate care facilities) primarily engaged in providing residential care services for persons with intellectual and developmental disabilities.  These facilities may provide some health care, though the focus is room, board, protective supervision, and counseling.\n\nCross-References.',
  },
  {
    code: 623220,
    title: 'Residential Mental Health and Substance Abuse Facilities',
    description:
      'This industry comprises establishments primarily engaged in providing residential care and treatment for patients with mental health and substance abuse illnesses.  These establishments provide room, board, supervision, and counseling services.  Although medical services may be available at these establishments, they are incidental to the counseling, mental rehabilitation, and support services offered.  These establishments generally provide a wide range of social services in addition to counseling.\n\nIllustrative Examples:\n\nAlcoholism or drug addiction rehabilitation \nfacilities (except licensed hospitals) \nPsychiatric convalescent homes or hospitals\nMental health halfway houses\nResidential group homes for the emotionally disturbed\n\n\nCross-References.',
  },
  {
    code: 623311,
    title: 'Continuing Care Retirement Communities',
    description:
      'This U.S. industry comprises establishments primarily engaged in providing a range of residential and personal care services with on-site nursing care facilities for (1) the elderly and other persons who are unable to fully care for themselves and/or (2) the elderly and other persons who do not desire to live independently.  Individuals live in a variety of residential settings with meals, housekeeping, social, leisure, and other services available to assist residents in daily living.  Assisted living facilities with on-site nursing care facilities are included in this industry.\n\nCross-References.',
  },
  {
    code: 623312,
    title: 'Assisted Living Facilities for the Elderly',
    description:
      'This U.S. industry comprises establishments primarily engaged in providing residential and personal care services without nursing care for (1) the elderly or other persons who are unable to fully care for themselves and/or (2) the elderly or other persons who do not desire to live independently.  The care typically includes room, board, supervision, and assistance in daily living, such as housekeeping services.\n\nIllustrative Examples:\n\nAssisted living facilities for the elderly without nursing care\nRest homes without nursing care \n\n\nCross-References.',
  },
  {
    code: 623990,
    title: 'Other Residential Care Facilities',
    description:
      'This industry comprises establishments primarily engaged in providing residential care (except residential intellectual and developmental disability facilities, residential mental health and substance abuse facilities, continuing care retirement communities, and assisted living facilities for the elderly).  These establishments also provide supervision and personal care services.\n\nIllustrative Examples:\n\nBoot or disciplinary camps (except correctional) for delinquent youth\nGroup homes for the hearing or visually impaired\nChild group foster homes\nDelinquent youth halfway group homes\nHalfway group homes for delinquents or ex-offenders\nHomes for unwed mothers\nGroup homes for the disabled without nursing care\nOrphanages\n\n\nCross-References.',
  },
  {
    code: 624110,
    title: 'Child and Youth Services',
    description:
      'This industry comprises establishments primarily engaged in providing nonresidential social assistance services for children and youth.  These establishments provide for the welfare of children in such areas as adoption and foster care, drug prevention, life skills training, and positive social development.\n\nIllustrative Examples:\n\nAdoption agencies\nYouth centers (except recreational only)\nChild guidance organizations\nYouth self-help organizations\nFoster care placement services\n\n\nCross-References.',
  },
  {
    code: 624120,
    title: 'Services for the Elderly and Persons with Disabilities',
    description:
      'This industry comprises establishments primarily engaged in providing nonresidential social assistance services to improve the quality of life for the elderly or persons with intellectual and/or developmental disabilities.  These establishments provide for the welfare of these individuals in such areas as day care, non-medical home care or homemaker services, social activities, group support, and companionship.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 624190,
    title: 'Other Individual and Family Services',
    description:
      'This industry comprises establishments primarily engaged in providing nonresidential individual and family social assistance services (except those specifically directed toward children, the elderly, or persons with intellectual and/or developmental disabilities).\n\nIllustrative Examples:\n\nCommunity action services agencies\nMarriage counseling services (except by offices of mental health practitioners)\nCrisis intervention centers\nMulti-purpose social services centers\nFamily social services agencies\nFamily welfare services\nSelf-help organizations (except for disabled persons, the elderly)\nSuicide crisis centers\nHotline centers\nTelephone counseling services\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 624210,
    title: 'Community Food Services',
    description:
      'This industry comprises establishments primarily engaged in the collection, preparation, and delivery of food for the needy.  Establishments in this industry may also distribute clothing and blankets to the poor.  These establishments may prepare and deliver meals to persons who by reason of age, disability, or illness are unable to prepare meals for themselves; collect and distribute salvageable or donated food; or prepare and provide meals at fixed or mobile locations.  Food banks, meal delivery programs, and soup kitchens are included in this industry.\n',
  },
  {
    code: 624221,
    title: 'Temporary Shelters',
    description:
      'This U.S. industry comprises establishments primarily engaged in providing (1) short-term emergency shelter for victims of domestic violence, sexual assault, or child abuse and/or (2) temporary residential shelter for homeless individuals or families, runaway youth, and patients and families caught in medical crises.  These establishments may operate their own shelters or may subsidize housing using existing homes, apartments, hotels, or motels.\n\nCross-References.',
  },
  {
    code: 624229,
    title: 'Other Community Housing Services',
    description:
      'This U.S. industry comprises establishments primarily engaged in providing one or more of the following community housing services: (1) transitional housing to low-income individuals and families; (2) volunteer construction or repair of low-cost housing, in partnership with the homeowner who may assist in the construction or repair work; and (3) the repair of homes for elderly or disabled homeowners.  These establishments may subsidize housing using existing homes, apartments, hotels, or motels or may require a low-cost mortgage or sweat equity.  These establishments may also provide low-income families with furniture and household supplies.\n\nCross-References.',
  },
  {
    code: 624230,
    title: 'Emergency and Other Relief Services',
    description:
      'This industry comprises establishments primarily engaged in providing food, shelter, clothing, medical relief, resettlement, and counseling to victims of domestic or international disasters or conflicts (e.g., wars).\n',
  },
  {
    code: 624310,
    title: 'Vocational Rehabilitation Services',
    description:
      'This industry comprises (1) establishments primarily engaged in providing vocational rehabilitation or habilitation services, such as job counseling, job training, and work experience, to unemployed and underemployed persons, persons with disabilities, and persons who have a job market disadvantage because of lack of education, job skill, or experience and (2) establishments primarily engaged in providing training and employment to persons with disabilities.  Vocational rehabilitation job training facilities (except schools) and sheltered workshops (i.e., work experience centers) are included in this industry.\n\nCross-References.',
  },
  {
    code: 624410,
    title: 'Child Care Services',
    description:
      'This industry comprises establishments primarily engaged in providing care and early learning opportunities for infants and children.  These establishments generally care for children from birth through school age and may also offer pre-kindergarten, kindergarten, and/or before- or after-school educational programs.  The care and early learning provided by these establishments may include opportunities for development in health, social and emotional learning, and family engagement.\n\nIllustrative Examples:\n\nBefore-school and after-school educational programs, separate from schools\nChild care babysitting services\nChild or infant care centers\nHead Start and Early Head Start programs, separate from schools\nNursery schools\nPreschool centers\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 711110,
    title: 'Theater Companies and Dinner Theaters',
    description:
      'This industry comprises (1) companies, groups, or theaters primarily engaged in producing the following live theatrical presentations: musicals; operas; plays; and comedy, improvisational, mime, and puppet shows and (2) establishments, commonly known as dinner theaters, engaged in producing live theatrical productions and in providing food and beverages for consumption on the premises.  Theater groups or companies may or may not operate their own theater or other facility for staging their shows.\n\nIllustrative Examples:\n\nComedy troupes\nOpera companies\nLive theatrical productions (except dance)\nTheatrical stock or repertory companies\nMusical theater companies\n\n\nCross-References.',
  },
  {
    code: 711120,
    title: 'Dance Companies',
    description:
      'This industry comprises companies, groups, or theaters primarily engaged in producing all types of live theatrical dance (e.g., ballet, contemporary dance, folk dance) presentations.  Dance companies or groups may or may not operate their own theater or other facility for staging their shows.\n\nCross-References.',
  },
  {
    code: 711130,
    title: 'Musical Groups and Artists',
    description:
      'This industry comprises (1) groups primarily engaged in producing live musical entertainment (except theatrical musical or opera productions) and (2) independent (i.e., freelance) artists primarily engaged in providing live musical entertainment.  Musical groups and artists may perform in front of a live audience or in a studio, and may or may not operate their own facilities for staging their shows.\n\nIllustrative Examples:\n\nBands\nMusical groups (except theatrical musical groups)\nDrum and bugle corps (i.e., drill teams)\nOrchestras\nIndependent musicians or vocalists\n\n\nCross-References.',
  },
  {
    code: 711190,
    title: 'Other Performing Arts Companies',
    description:
      'This industry comprises companies or groups (except theater companies, dance companies, and musical groups and artists) primarily engaged in producing live theatrical presentations.\n\nIllustrative Examples:\n\nCarnival traveling shows\nIce skating companies\nCircuses\nMagic shows\n\n\nCross-References.',
  },
  {
    code: 711211,
    title: 'Sports Teams and Clubs',
    description:
      'This U.S. industry comprises professional or semiprofessional sports teams or clubs primarily engaged in participating in live sporting events, such as baseball, basketball, football, hockey, soccer, and jai alai games, before a paying audience.  These establishments may or may not operate their own arena, stadium, or other facility for presenting these events.\n\nCross-References.',
  },
  {
    code: 711212,
    title: 'Racetracks',
    description:
      'This U.S. industry comprises establishments primarily engaged in operating racetracks without casinos.  These establishments may also present and/or promote the events, such as auto, dog, and horse races, held in these facilities.\n\nCross-References.',
  },
  {
    code: 711219,
    title: 'Other Spectator Sports',
    description:
      'This U.S. industry comprises (1) independent athletes, such as professional or semiprofessional golfers, boxers, and race car drivers, primarily engaged in participating in live sporting or racing events before a paying audience; (2) owners of racing participants, such as cars, dogs, and horses, primarily engaged in entering them in racing events or other spectator events; and (3) establishments, such as sports trainers, primarily engaged in providing specialized services required to support participants in sports events or competitions.\n\nCross-References.',
  },
  {
    code: 711310,
    title: 'Promoters of Performing Arts, Sports, and Similar Events with Facilities',
    description:
      'This industry comprises establishments primarily engaged in (1) organizing, promoting, and/or managing live performing arts productions, sports events, and similar events, such as state fairs, county fairs, agricultural fairs, concerts, and festivals, held in facilities that they manage and operate and/or (2) managing and providing the staff to operate arenas, stadiums, theaters, or other related facilities for rent to other promoters.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 711320,
    title: 'Promoters of Performing Arts, Sports, and Similar Events without Facilities',
    description:
      'This industry comprises promoters primarily engaged in organizing, promoting, and/or managing live performing arts productions, sports events, and similar events, such as state fairs, county fairs, agricultural fairs, concerts, and festivals, in facilities that are managed and operated by others.  Theatrical (except motion picture) booking agencies are included in this industry.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 711410,
    title: 'Agents and Managers for Artists, Athletes, Entertainers, and Other Public Figures',
    description:
      "This industry comprises establishments of agents and managers primarily engaged in representing and/or managing creative and performing artists, sports figures, entertainers, and other public figures.  The representation and management includes activities, such as representing clients in contract negotiations; managing or organizing clients' financial affairs; and generally promoting the careers of their clients.\n\nIllustrative Examples:\n\nCelebrities' agents or managers\nSports figures' agents or managers\nLiterary agents\nTalent agents\nModeling agents\n\n\nCross-References.",
  },
  {
    code: 711510,
    title: 'Independent Artists, Writers, and Performers',
    description:
      'This industry comprises independent (i.e., freelance) individuals primarily engaged in performing in artistic productions, in creating artistic and cultural works or productions, or in providing technical expertise necessary for these productions.  This industry also includes athletes and other celebrities exclusively engaged in endorsing products and making speeches or public appearances for which they receive a fee.\n\nIllustrative Examples:\n\nIndependent actors or actresses\nIndependent producers\nIndependent art restorers\nIndependent recording technicians\nIndependent artists (except musical, commercial, medical)\nIndependent speakers \nIndependent cartoonists\nIndependent theatrical costume designers\nIndependent dancers\nIndependent theatrical lighting technicians\nIndependent journalists\nIndependent technical writers\n\n\nCross-References.',
  },
  {
    code: 712110,
    title: 'Museums',
    description:
      'This industry comprises establishments primarily engaged in the preservation and exhibition of objects of historical, cultural, and/or educational value.\n\nIllustrative Examples:\n\nArt galleries (except retail)\nPlanetariums\nArt museums\nScience or technology museums\nHalls of fame\nWax museums\n\n\nCross-References.',
  },
  {
    code: 712120,
    title: 'Historical Sites',
    description:
      'This industry comprises establishments primarily engaged in the preservation and exhibition of sites, buildings, forts, or communities that describe events or persons of particular historical interest.  Archeological sites, battlefields, historical ships, and pioneer villages are included in this industry.\n',
  },
  {
    code: 712130,
    title: 'Zoos and Botanical Gardens',
    description:
      'This industry comprises establishments primarily engaged in the preservation and exhibition of live plant and animal life displays.\n\nIllustrative Examples:\n\nAquariums\nWild animal parks\nArboreta\nZoological gardens\nAviaries\n\n\nCross-References.',
  },
  {
    code: 712190,
    title: 'Nature Parks and Other Similar Institutions',
    description:
      'This industry comprises establishments primarily engaged in the preservation and exhibition of natural areas or settings.\n\nIllustrative Examples:\n\nBird or wildlife sanctuaries\nNatural wonder tourist attractions (e.g., caverns, waterfalls)\nConservation areas\nNature centers or preserves\nNational parks\n\n\nCross-References.',
  },
  {
    code: 713110,
    title: 'Amusement and Theme Parks',
    description:
      'This industry comprises establishments, known as amusement or theme parks, primarily engaged in operating a variety of attractions, such as mechanical rides, water rides, games, shows, theme exhibits, refreshment stands, and picnic grounds.  These establishments may lease space to others on a concession basis.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 713120,
    title: 'Amusement Arcades',
    description:
      'This industry comprises establishments primarily engaged in operating amusement (except gambling, billiard, or pool) arcades and parlors.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 713210,
    title: 'Casinos (except Casino Hotels)',
    description:
      'This industry comprises establishments primarily engaged in operating gambling facilities that offer table wagering games along with other gambling activities, such as slot machines and sports betting.  These establishments often provide food and beverage services.  Included in this industry are floating casinos (i.e., gambling cruises, riverboat casinos) and casinos with racetracks.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 713290,
    title: 'Other Gambling Industries',
    description:
      "This industry comprises establishments primarily engaged in operating gambling facilities (except casinos or casino hotels) or providing gambling services.\n\nIllustrative Examples:\n\nBingo, off-track betting, or slot machine parlors\nCoin- or card-operated gambling device concession operators (i.e., supplying and servicing in others' facilities)\nBookmakers\nLottery ticket sales agents (except retail stores)\nCard rooms (e.g., poker rooms)\n\n\nCross-References. Establishments primarily engaged in--",
  },
  {
    code: 713910,
    title: 'Golf Courses and Country Clubs',
    description:
      'This industry comprises (1) establishments primarily engaged in operating golf courses (except miniature) and (2) establishments primarily engaged in operating golf courses, along with dining facilities and other recreational facilities that are known as country clubs.  These establishments often provide food and beverage services, equipment rental services, and golf instruction services.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 713920,
    title: 'Skiing Facilities',
    description:
      'This industry comprises establishments engaged in (1) operating downhill, cross country, or related skiing areas and/or (2) operating equipment, such as ski lifts and tows.  These establishments often provide food and beverage services, equipment rental services, and ski instruction services.  Four season resorts without accommodations are included in this industry.\n\nCross-References.',
  },
  {
    code: 713930,
    title: 'Marinas',
    description:
      'This industry comprises establishments, commonly known as marinas, engaged in operating docking and/or storage facilities for pleasure craft owners, with or without one or more related activities, such as retailing fuel and marine supplies; and repairing, maintaining, or renting pleasure boats.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 713940,
    title: 'Fitness and Recreational Sports Centers',
    description:
      'This industry comprises establishments primarily engaged in operating fitness and recreational sports facilities featuring exercise and other active physical fitness conditioning or recreational sports activities, such as swimming, skating, or racquet sports.\n\nIllustrative Examples:\n\nAerobic dance or exercise centers\nIce or roller skating rinks\nGymnasiums\nPhysical fitness centers\nHandball, racquetball, or tennis club facilities\nSwimming or wave pools\n\n\nCross-References.',
  },
  {
    code: 713950,
    title: 'Bowling Centers',
    description:
      'This industry comprises establishments engaged in operating bowling centers.  These establishments often provide food and beverage services.\n',
  },
  {
    code: 713990,
    title: 'All Other Amusement and Recreation Industries',
    description:
      "This industry comprises establishments (except amusement parks and arcades; gambling industries; golf courses and country clubs; skiing facilities; marinas; fitness and recreational sports centers; and bowling centers) primarily engaged in providing recreational and amusement services.\n\nIllustrative Examples:\n\nAmusement ride or coin- or card-operated nongambling amusement device concession operators (i.e., supplying and servicing in others' facilities)\nOutdoor adventure operations (e.g., white water rafting) without accommodations\nMiniature golf courses\nGolf driving ranges\nArchery or shooting ranges\nRecreational day camps (except instructional)\nBilliard or pool parlors\nRecreational chess or bridge clubs\nBoating clubs (without marinas)\nRecreational or youth sports clubs (i.e., sports teams) not operating sports facilities\nEscape rooms\nRiding stables (except boarding horses) \n\n\nCross-References.",
  },
  {
    code: 721110,
    title: 'Hotels (except Casino Hotels) and Motels',
    description:
      'This industry comprises establishments primarily engaged in providing short-term lodging in facilities known as hotels, motor hotels, resort hotels, and motels.  The establishments in this industry may offer food and beverage services, recreational services, conference rooms, convention services, laundry services, parking, and other services.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 721120,
    title: 'Casino Hotels',
    description:
      'This industry comprises establishments primarily engaged in providing short-term lodging in hotel facilities with a casino on the premises.  The casino on premises includes table wagering games and may include other gambling activities, such as slot machines and sports betting.  These establishments generally offer a range of services and amenities, such as food and beverage services, entertainment, valet parking, swimming pools, and conference and convention facilities.  Included in this industry are casino hotels with racetracks.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 721191,
    title: 'Bed-and-Breakfast Inns',
    description:
      'This U.S. industry comprises establishments primarily engaged in providing short-term lodging in facilities known as bed-and-breakfast inns.  These establishments provide short-term lodging in private homes or small buildings converted for this purpose.  Bed-and-breakfast inns are characterized by a highly personalized service and inclusion of a full breakfast in the room rate.\n',
  },
  {
    code: 721199,
    title: 'All Other Traveler Accommodation',
    description:
      'This U.S. industry comprises establishments primarily engaged in providing short-term lodging (except hotels, motels, casino hotels, and bed-and-breakfast inns).\n\nIllustrative Examples:\n\nGuest houses\nTourist homes\nHousekeeping cabins and cottages\nHostels\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 721211,
    title: 'RV (Recreational Vehicle) Parks and Campgrounds',
    description:
      'This U.S. industry comprises establishments primarily engaged in operating sites to accommodate campers and their equipment, including tents, tent trailers, travel trailers, and RVs (recreational vehicles).  These establishments may provide access to facilities, such as washrooms, laundry rooms, recreation halls, playgrounds, stores, and snack bars.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 721214,
    title: 'Recreational and Vacation Camps (except Campgrounds)',
    description:
      "This U.S. industry comprises establishments primarily engaged in operating overnight recreational camps, such as children's camps, family vacation camps, hunting and fishing camps, and outdoor adventure retreats, that offer trail riding, white water rafting, hiking, and similar activities.  These establishments provide accommodation facilities, such as cabins and fixed campsites, and other amenities, such as food services, recreational facilities and equipment, and organized recreational activities.\n\nIllustrative Examples:\n\nFishing camps with accommodation facilities\nDude ranches\nVacation camps (except campgrounds, day, instructional)\nHunting camps with accommodation facilities\nWilderness camps\nOutdoor adventure retreats with accommodation facilities \n\n\nCross-References. Establishments primarily engaged in--",
  },
  {
    code: 721310,
    title: "Rooming and Boarding Houses, Dormitories, and Workers' Camps",
    description:
      "This industry comprises establishments primarily engaged in operating rooming and boarding houses and similar facilities, such as fraternity houses, sorority houses, off campus dormitories, residential clubs, and workers' camps.  These establishments provide temporary or longer-term accommodations, which, for the period of occupancy, may serve as a principal residence.  These establishments also may provide complementary services, such as housekeeping, meals, and laundry services.\n\nIllustrative Examples:\n\nDormitories (off campus)\nSorority houses\nFraternity houses\nWorkers' camps\nRooming houses\n",
  },
  {
    code: 722310,
    title: 'Food Service Contractors',
    description:
      "This industry comprises establishments primarily engaged in providing food services at institutional, governmental, commercial, or industrial locations of others based on contractual arrangements with these types of organizations for a specified period of time.  The establishments of this industry provide food services for the convenience of the contracting organization or the contracting organization's customers.  The contractual arrangement of these establishments with contracting organizations may vary by type of facility operated (e.g., cafeteria, restaurant, fast-food eating place), revenue sharing, cost structure, and personnel provided.  Management staff is always provided by food service contractors.\n\nIllustrative Examples:\n\nAirline food service contractors\nFood concession contractors (e.g., at sporting, entertainment, convention facilities)\nCafeteria food service contractors (e.g., at schools, hospitals, government offices)\n\n\nCross-References. Establishments primarily engaged in--",
  },
  {
    code: 722320,
    title: 'Caterers',
    description:
      'This industry comprises establishments primarily engaged in providing single event-based food services.  These establishments generally have equipment and vehicles to transport meals and snacks to events and/or prepare food at an off-premise site.  Banquet halls with catering staff are included in this industry.  Examples of events catered by establishments in this industry are graduation parties, wedding receptions, business or retirement luncheons, and trade shows.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 722330,
    title: 'Mobile Food Services',
    description:
      'This industry comprises establishments primarily engaged in preparing and serving meals and snacks for immediate consumption from motorized vehicles or nonmotorized carts.  The establishment is the central location from which the caterer route is serviced, not each vehicle or cart.  Included in this industry are establishments primarily engaged in providing food services from vehicles, such as hot dog carts and ice cream trucks.\n\nIllustrative Examples:\n\nIce cream truck vendors\nMobile food concession stands\nMobile canteens\nMobile refreshment stands\nMobile food carts and trucks\nMobile snack stands\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 722410,
    title: 'Drinking Places (Alcoholic Beverages)',
    description:
      'This industry comprises establishments known as bars, taverns, nightclubs, or drinking places primarily engaged in preparing and serving alcoholic beverages for immediate consumption.  These establishments may also provide limited food services.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 722511,
    title: 'Full-Service Restaurants',
    description:
      'This U.S. industry comprises establishments primarily engaged in providing food services to patrons who order and are served while seated (i.e., waiter/waitress service) and pay after eating.  These establishments may provide this type of food service to patrons in combination with selling alcoholic beverages, providing carryout services, or presenting live nontheatrical entertainment.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 722513,
    title: 'Limited-Service Restaurants',
    description:
      "This U.S. industry comprises establishments primarily engaged in providing food services (except snack and nonalcoholic beverage bars) where patrons generally order or select items and pay before eating.  Food and drink may be consumed on premises, taken out, or delivered to the customer's location.  Some establishments in this industry may provide these food services in combination with selling alcoholic beverages.\n\nIllustrative Examples:\n\nDelicatessen restaurants\nPizza delivery shops\nFamily restaurants, limited-service\nTakeout eating places\nFast-food restaurants\nFast casual restaurants\nTakeout sandwich shops\nLimited-service pizza parlors\n\n\nCross-References. Establishments primarily engaged in--",
  },
  {
    code: 722514,
    title: 'Cafeterias, Grill Buffets, and Buffets',
    description:
      'This U.S. industry comprises establishments, known as cafeterias, grill buffets, or buffets, primarily engaged in preparing and serving meals for immediate consumption using cafeteria-style or buffet serving equipment, such as steam tables, refrigerated areas, display grills, and self-service nonalcoholic beverage dispensing equipment.  Patrons select from food and drink items on display in a continuous cafeteria line or from buffet stations.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 722515,
    title: 'Snack and Nonalcoholic Beverage Bars',
    description:
      'This U.S. industry comprises establishments primarily engaged in (1) preparing and/or serving a specialty snack, such as ice cream, frozen yogurt, cookies, or popcorn, or (2) serving nonalcoholic beverages, such as coffee, juices, or sodas for consumption on or near the premises.  These establishments may carry and sell a combination of snack, nonalcoholic beverage, and other related products (e.g., coffee beans, mugs, coffee makers) but generally promote and sell a unique snack or nonalcoholic beverage.\n\nIllustrative Examples:\n\nBeverage bars, nonalcoholic, fixed location\nDoughnut shops, on premise baking and carryout service\nBagel shops, on premise baking and carryout service\nPretzel shops, on premise baking and carryout service\nCookie shops, on premise baking and carryout service\nCoffee shops, on premise brewing\nIce cream parlors\nJuice bars, nonalcoholic, fixed location\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 811111,
    title: 'General Automotive Repair',
    description:
      'This U.S. industry comprises establishments primarily engaged in providing (1) a wide range of mechanical and electrical repair and maintenance services for automotive vehicles, such as passenger cars, trucks, and vans, and all trailers or (2) engine repair and replacement.\n\nIllustrative Examples:\n\nAutomobile repair garages (except gasoline service stations)\nGeneral automotive repair shops\nAutomotive engine repair and replacement shops\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 811114,
    title: 'Specialized Automotive Repair',
    description:
      'This U.S. industry comprises establishments primarily engaged in providing specialized mechanical or electrical repair and maintenance services (except engine repair and replacement) for automotive vehicles, such as passenger cars, trucks, and vans, and all trailers.\n\nIllustrative Examples:\n\nAutomotive brake repair shops\nAutomotive suspension repair shops\nAutomotive exhaust system replacement and repair shops\nAutomotive electrical repair shops\nAutomotive transmission repair shops\nAutomotive tune-up shops\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 811121,
    title: 'Automotive Body, Paint, and Interior Repair and Maintenance',
    description:
      'This U.S. industry comprises establishments primarily engaged in repairing or customizing automotive vehicle and trailer bodies and interiors; and/or painting automotive vehicles and trailer bodies.\n\nIllustrative Examples:\n\nAutomotive body shops\nAutomotive body conversion services\nRestoration shops, antique and classic automotive\nAutomotive paint shops \n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 811122,
    title: 'Automotive Glass Replacement Shops',
    description:
      'This U.S. industry comprises establishments primarily engaged in replacing, repairing, and/or tinting automotive vehicle glass, such as passenger car, truck, and van glass.\n\nCross-References.',
  },
  {
    code: 811191,
    title: 'Automotive Oil Change and Lubrication Shops',
    description:
      'This U.S. industry comprises establishments primarily engaged in changing motor oil and lubricating the chassis of automotive vehicles, such as passenger cars, trucks, and vans.\n\nCross-References.',
  },
  {
    code: 811192,
    title: 'Car Washes',
    description:
      'This U.S. industry comprises establishments primarily engaged in cleaning, washing, and/or waxing automotive vehicles, such as passenger cars, trucks, and vans, and trailers.\n\nIllustrative Examples:\n\nAutomotive detail shops\nMobile car and truck washes\nCar washes\nSelf-service car washes\n',
  },
  {
    code: 811198,
    title: 'All Other Automotive Repair and Maintenance',
    description:
      'This U.S. industry comprises establishments primarily engaged in providing automotive repair and maintenance services (except mechanical and electrical repair and maintenance; body, paint, interior, and glass repair; motor oil change and lubrication; and car washing) for automotive vehicles, such as passenger cars, trucks, and vans, and all trailers.\n\nIllustrative Examples:\n\nAutomotive air-conditioning repair shops\nAutomotive tire repair (except retreading) shops\nAutomotive rustproofing and undercoating shops\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 811210,
    title: 'Electronic and Precision Equipment Repair and Maintenance',
    description:
      'This industry comprises establishments primarily engaged in repairing and maintaining one or more of the following: (1) consumer electronic equipment; (2) computers; (3) office machines; (4) communication equipment; and (5) other electronic and precision equipment and instruments, without retailing these products as new.  Establishments in this industry repair items, such as microscopes, radar and sonar equipment, televisions, stereos, video recorders, computers, fax machines, photocopying machines, two-way radios, cellular telephones, and other communications equipment, scientific instruments, and medical equipment.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 811310,
    title:
      'Commercial and Industrial Machinery and Equipment (except Automotive and Electronic) Repair and Maintenance',
    description:
      'This industry comprises establishments primarily engaged in the repair and maintenance of commercial and industrial machinery and equipment.  Establishments in this industry either sharpen/install commercial and industrial machinery blades and saws or provide welding (e.g., automotive, general) repair services; or repair agricultural and other heavy and industrial machinery and equipment (e.g., forklifts and other material handling equipment, machine tools, commercial refrigeration equipment, construction equipment, and mining machinery).\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 811411,
    title: 'Home and Garden Equipment Repair and Maintenance',
    description:
      'This U.S. industry comprises establishments primarily engaged in repairing and servicing home and garden equipment without retailing new home and garden equipment, such as lawnmowers, handheld power tools, edgers, snowblowers, leaf blowers, and trimmers.\n\nCross-References.',
  },
  {
    code: 811412,
    title: 'Appliance Repair and Maintenance',
    description:
      'This U.S. industry comprises establishments primarily engaged in repairing and servicing household appliances without retailing new appliances, such as refrigerators, stoves, washing machines, clothes dryers, and room air-conditioners.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 811420,
    title: 'Reupholstery and Furniture Repair',
    description:
      'This industry comprises establishments primarily engaged in one or more of the following: (1) reupholstering furniture; (2) refinishing furniture; (3) repairing furniture; and (4) repairing and restoring furniture.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 811430,
    title: 'Footwear and Leather Goods Repair',
    description:
      'This industry comprises establishments primarily engaged in repairing footwear and/or repairing other leather or leather-like goods without retailing new footwear and leather or leather-like goods, such as handbags and briefcases.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 811490,
    title: 'Other Personal and Household Goods Repair and Maintenance',
    description:
      'This industry comprises establishments primarily engaged in repairing and servicing personal or household-type goods without retailing new personal or household-type goods (except home and garden equipment, appliances, furniture, and footwear and leather goods).  Establishments in this industry repair items, such as garments; watches; jewelry; musical instruments; bicycles and motorcycles; and motorboats, canoes, sailboats, and other recreational boats.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 812111,
    title: 'Barber Shops',
    description:
      "This U.S. industry comprises establishments known as barber shops or men's hair stylist shops primarily engaged in cutting, trimming, and styling men's and boys' hair; and/or shaving and trimming men's beards.\n\nCross-References. Establishments primarily engaged in--",
  },
  {
    code: 812112,
    title: 'Beauty Salons',
    description:
      "This U.S. industry comprises establishments (except those known as barber shops or men's hair stylist shops) primarily engaged in one or more of the following: (1) cutting, trimming, shampooing, coloring, waving, or styling hair; (2) providing facials; and (3) applying makeup (except permanent makeup).\n\nIllustrative Examples:\n\nBeauty parlors or shops\nFacial salons or shops\nCombined beauty and barber shops\nHairdressing salons or shops\nCosmetology salons or shops\nUnisex or women's hair stylist shops\n\n\nCross-References. Establishments primarily engaged in--",
  },
  {
    code: 812113,
    title: 'Nail Salons',
    description:
      'This U.S. industry comprises establishments primarily engaged in providing nail care services, such as manicures, pedicures, and nail extensions.\n',
  },
  {
    code: 812191,
    title: 'Diet and Weight Reducing Centers',
    description:
      'This U.S. industry comprises establishments primarily engaged in providing non-medical services to assist clients in attaining or maintaining a desired weight.  The sale of weight reduction products, such as food supplements, may be an integral component of the program.  These services typically include individual or group counseling, menu and exercise planning, and weight and body measurement monitoring.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 812199,
    title: 'Other Personal Care Services',
    description:
      'This U.S. industry comprises establishments primarily engaged in providing personal care services (except hair, nail, facial, nonpermanent makeup, or non-medical diet and weight reducing services).\n\nIllustrative Examples:\n\nDay spas\nDepilatory or electrolysis (i.e., hair removal) salons\nSaunas\nEar piercing services\nSteam baths\nHair replacement (except by offices of physicians) or weaving services\nTanning salons\nTattoo parlors\nPermanent makeup salons\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 812210,
    title: 'Funeral Homes and Funeral Services',
    description:
      'This industry comprises establishments primarily engaged in preparing the dead for burial or interment and conducting funerals (i.e., providing facilities for wakes, arranging transportation for the dead, selling caskets and related merchandise).  Funeral homes combined with crematories are included in this industry.\n\nCross-References.',
  },
  {
    code: 812220,
    title: 'Cemeteries and Crematories',
    description:
      'This industry comprises establishments primarily engaged in operating sites or structures reserved for the interment of human or animal remains and/or cremating the dead.\n\nIllustrative Examples:\n\nCemetery associations (i.e., operators of cemeteries)\nMemorial gardens (i.e., burial places)\nPet cemeteries\nCrematories (except combined with funeral homes)\nMausoleums \n\n\nCross-References.',
  },
  {
    code: 812310,
    title: 'Coin-Operated Laundries and Drycleaners',
    description:
      'This industry comprises establishments primarily engaged in (1) operating facilities with coin- or card-operated or similar self-service laundry and drycleaning equipment for customer use on the premises and/or (2) supplying and servicing coin- or card-operated or similar self-service laundry and drycleaning equipment for customer use in places of business operated by others, such as apartments and dormitories.\n',
  },
  {
    code: 812320,
    title: 'Drycleaning and Laundry Services (except Coin-Operated)',
    description:
      'This industry comprises establishments primarily engaged in one or more of the following: (1) providing drycleaning services (except coin- or card-operated); (2) providing laundering services (except linen and uniform supply or coin- or card-operated); (3) providing drop-off and pick-up sites for laundries and/or drycleaners; and (4) providing specialty cleaning services for specific types of garments and other textile items (except carpets and upholstery), such as fur, leather, or suede garments; wedding gowns; hats; draperies; and pillows.  These establishments may provide all, a combination of, or none of the cleaning services on the premises.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 812331,
    title: 'Linen Supply',
    description:
      'This U.S. industry comprises establishments primarily engaged in supplying, on a rental or contract basis, laundered items, such as table and bed linens; towels; diapers; and uniforms, gowns, or coats of the type used by doctors, nurses, barbers, beauticians, and waitresses.\n\nCross-References.',
  },
  {
    code: 812332,
    title: 'Industrial Launderers',
    description:
      'This U.S. industry comprises establishments primarily engaged in supplying, on a rental or contract basis, laundered industrial work uniforms and related work clothing, such as protective apparel (flame and heat resistant) and clean room apparel; dust control items, such as treated mops, rugs, mats, dust tool covers, cloths, and shop or wiping towels.\n\nCross-References.',
  },
  {
    code: 812910,
    title: 'Pet Care (except Veterinary) Services',
    description:
      'This industry comprises establishments primarily engaged in providing pet care services (except veterinary), such as boarding, grooming, sitting, walking, and training pets.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 812921,
    title: 'Photofinishing Laboratories (except One-Hour)',
    description:
      'This U.S. industry comprises establishments (except those known as "one-hour" photofinishing labs) primarily engaged in developing film and/or making photographic slides, prints, and enlargements.\n\nCross-References.',
  },
  {
    code: 812922,
    title: 'One-Hour Photofinishing',
    description:
      'This U.S. industry comprises establishments known as "one-hour" photofinishing labs primarily engaged in developing film and/or making photographic slides, prints, and enlargements on a short turnaround or while-you-wait basis.\n\nCross-References.',
  },
  {
    code: 812930,
    title: 'Parking Lots and Garages',
    description:
      'This industry comprises establishments primarily engaged in providing parking space for motor vehicles, usually on an hourly, daily, or monthly basis and/or valet parking services.\n\nCross-References.',
  },
  {
    code: 812990,
    title: 'All Other Personal Services',
    description:
      'This industry comprises establishments primarily engaged in providing personal services (except personal care services, death care services, drycleaning and laundry services, pet care services, photofinishing services, or parking space and/or valet parking services).\n\nIllustrative Examples:\n\nBail bonding or bondsperson services\nShoeshine services\nCoin- or card-operated personal services machine (e.g., blood pressure, locker, photographic, scale, shoeshine) concession operators\nSocial escort services\nConsumer buying services\nWedding planning services\nDating services\nPersonal fitness training services\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 813110,
    title: 'Religious Organizations',
    description:
      'This industry comprises (1) establishments primarily engaged in operating religious organizations, such as churches, religious temples, mosques, and monasteries, and/or (2) establishments primarily engaged in administering an organized religion or promoting religious activities.\n\nIllustrative Examples:\n\nChurches\nShrines, religious\nMonasteries (except schools)\nSynagogues\nMosques, religious\nTemples, religious\n\n\nCross-References.',
  },
  {
    code: 813211,
    title: 'Grantmaking Foundations',
    description:
      'This U.S. industry comprises establishments known as grantmaking foundations or charitable trusts.  Establishments in this industry award grants from trust funds based on a competitive selection process or the preferences of the foundation managers and grantors; or fund a single entity, such as a museum or university.\n\nIllustrative Examples:\n\nCommunity foundations\nPhilanthropic trusts\nCorporate foundations, awarding grants\nScholarship trusts\nGrantmaking foundations\n\n\nCross-References.',
  },
  {
    code: 813212,
    title: 'Voluntary Health Organizations',
    description:
      'This U.S. industry comprises establishments primarily engaged in raising funds for health related research, such as disease (e.g., heart, cancer, diabetes) prevention, health education, and patient services.\n\nIllustrative Examples:\n\nDisease awareness fundraising organizations\nHealth research fundraising organizations\nVoluntary health organizations\nDisease research (e.g., heart, cancer) fundraising organizations\n\n\nCross-References.',
  },
  {
    code: 813219,
    title: 'Other Grantmaking and Giving Services',
    description:
      'This U.S. industry comprises establishments (except voluntary health organizations) primarily engaged in raising funds for a wide range of social welfare activities, such as educational, scientific, cultural, and health.\n\nIllustrative Examples:\n\nCommunity chest fundraising organizations\nUnited fund councils\nFederated charities\nUnited funds for colleges\n\n\nCross-References.',
  },
  {
    code: 813311,
    title: 'Human Rights Organizations',
    description:
      "This U.S. industry comprises establishments primarily engaged in promoting causes associated with human rights either for a broad or specific constituency.  Establishments in this industry address issues, such as protecting and promoting the broad constitutional rights and civil liberties of individuals and those suffering from neglect, abuse, or exploitation; promoting the interests of specific groups, such as children, women, senior citizens, or persons with disabilities; improving relations between racial, ethnic, and cultural groups; and promoting voter education and registration.  These organizations may solicit contributions and offer memberships to support these causes.\n\nIllustrative Examples:\n\nCivil liberties organizations\nSenior citizens' advocacy organizations\nHuman rights advocacy organizations\nVeterans' rights organizations\n\n\nCross-References. Establishments primarily engaged in--",
  },
  {
    code: 813312,
    title: 'Environment, Conservation and Wildlife Organizations',
    description:
      'This U.S. industry comprises establishments primarily engaged in promoting the preservation and protection of the environment and wildlife.  Establishments in this industry address issues, such as clean air and water; global warming; conserving and developing natural resources, including land, plant, water, and energy resources; and protecting and preserving wildlife and endangered species.  These organizations may solicit contributions and offer memberships to support these causes.\n\nIllustrative Examples:\n\nAnimal rights organizations\nNatural resource preservation organizations\nConservation advocacy organizations\nWildlife preservation organizations\nHumane societies without animal shelters\n\n\nCross-References.',
  },
  {
    code: 813319,
    title: 'Other Social Advocacy Organizations',
    description:
      "This U.S. industry comprises establishments primarily engaged in social advocacy (except human rights and environmental protection, conservation, and wildlife preservation).  Establishments in this industry address issues, such as peace and international understanding; community action (excluding civic organizations); or advancing social causes, such as firearms safety, drunk driving prevention, or drug abuse awareness.  These organizations may solicit contributions and offer memberships to support these causes.\n\nIllustrative Examples:\n\nCommunity action advocacy organizations\nSubstance abuse prevention advocacy organizations\nFirearms advocacy organizations\nTaxpayers' advocacy organizations\nPeace advocacy organizations\n\n\nCross-References. Establishments primarily engaged in--",
  },
  {
    code: 813410,
    title: 'Civic and Social Organizations',
    description:
      "This industry comprises establishments primarily engaged in promoting the civic and social interests of their members.  Establishments in this industry may operate bars and restaurants for their members.\n\nIllustrative Examples:\n\nAlumni associations\nGranges\nAutomobile clubs (except travel)\nParent-teacher associations\nBooster clubs\nScouting organizations\nEthnic associations\nSocial clubs\nFraternal lodges\nVeterans' membership organizations\n\n\nCross-References.",
  },
  {
    code: 813910,
    title: 'Business Associations',
    description:
      "This industry comprises establishments primarily engaged in promoting the business interests of their members.  These establishments may conduct research on new products and services; develop market statistics; sponsor quality and certification standards; lobby public officials; or publish newsletters, books, or periodicals for distribution to their members.\n\nIllustrative Examples:\n\nAgricultural organizations (except youth farming organizations, farm granges)\nReal estate boards\nChambers of commerce\nTrade associations\nManufacturers' associations\n\n\nCross-References.",
  },
  {
    code: 813920,
    title: 'Professional Organizations',
    description:
      "This industry comprises establishments primarily engaged in promoting the professional interests of their members and the profession as a whole.  These establishments may conduct research; develop statistics; sponsor quality and certification standards; lobby public officials; or publish newsletters, books, or periodicals for distribution to their members.\n\nIllustrative Examples:\n\nBar associations\nLearned societies\nDentists' associations\nPeer review boards\nEngineers' associations\nProfessional standards review boards\nHealth professionals' associations\nScientists' associations\n\n\nCross-References. Establishments primarily engaged in--",
  },
  {
    code: 813930,
    title: 'Labor Unions and Similar Labor Organizations',
    description:
      'This industry comprises establishments primarily engaged in promoting the interests of organized labor and union employees.\n\nCross-References.',
  },
  {
    code: 813940,
    title: 'Political Organizations',
    description:
      'This industry comprises establishments primarily engaged in promoting the interests of national, state, or local political parties or candidates.  Included are political groups organized to raise funds for a political party or individual candidates.\n\nIllustrative Examples:\n\nCampaign organizations, political\nPolitical organizations or clubs\nPolitical action committees (PACs)\nPolitical parties\nPolitical campaign organizations\n\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 813990,
    title:
      'Other Similar Organizations (except Business, Professional, Labor, and Political Organizations)',
    description:
      "This industry comprises establishments (except religious organizations, social advocacy organizations, civic and social organizations, business associations, professional organizations, labor unions, and political organizations) primarily engaged in promoting the interests of their members.\n\nIllustrative Examples:\n\nAthletic associations and leagues, regulatory\nProperty owners' associations\nCondominium and homeowners' associations\nTenants' associations (except advocacy)\nCooperative owners' associations\n\n\nCross-References. Establishments primarily engaged in--",
  },
  {
    code: 814110,
    title: 'Private Households',
    description:
      'This industry comprises private households primarily engaged in employing workers on or about the premises in activities primarily concerned with the operation of the household.  These private households may employ individuals, such as cooks, maids, nannies, butlers, non-medical personal care aides, and outside workers, such as gardeners, caretakers, and other maintenance workers.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 921110,
    title: 'Executive Offices',
    description:
      'This industry comprises government establishments serving as offices of chief executives and their advisory committees and commissions.  This industry includes offices of the president, governors, and mayors, in addition to executive advisory commissions.\n',
  },
  {
    code: 921120,
    title: 'Legislative Bodies',
    description:
      'This industry comprises government establishments serving as legislative bodies and their advisory committees and commissions.  Included in this industry are legislative bodies, such as Congress, state legislatures, and advisory and study legislative commissions.\n',
  },
  {
    code: 921130,
    title: 'Public Finance Activities',
    description:
      'This industry comprises government establishments primarily engaged in public finance, taxation, and monetary policy.  Included are financial administration activities, such as monetary policy; tax administration and collection; custody and disbursement of funds; debt and investment administration; auditing activities; and government employee retirement trust fund administration.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 921140,
    title: 'Executive and Legislative Offices, Combined',
    description:
      'This industry comprises government establishments serving as councils and boards of commissioners or supervisors and such bodies where the chief executive (e.g., county executive or city mayor) is a member of the legislative body (e.g., county or city council) itself.\n\nCross-References. Government establishments primarily engaged in--',
  },
  {
    code: 921150,
    title: 'American Indian and Alaska Native Tribal Governments',
    description:
      'This industry comprises American Indian and Alaska Native governing bodies.  Establishments in this industry perform legislative, judicial, and administrative functions for their American Indian and Alaska Native lands.  Included in this industry are American Indian and Alaska Native councils, courts, and law enforcement bodies.\n\nCross-References.',
  },
  {
    code: 921190,
    title: 'Other General Government Support',
    description:
      'This industry comprises government establishments primarily engaged in providing general support for government.  Such support services include personnel services, election boards, and other general government support establishments that are not classified elsewhere in public administration.\n\nIllustrative Examples:\n\nCivil rights commissions\nPersonnel offices, government\nCivil service commissions\nSupply agencies, government\nGeneral services departments, government\n\n\nCross-References.',
  },
  {
    code: 922110,
    title: 'Courts',
    description:
      "This industry comprises civilian courts of law (except American Indian and Alaska Native tribal courts).  Included in this industry are civilian courts, courts of law, and sheriffs' offices conducting court functions only.\n\nCross-References.",
  },
  {
    code: 922120,
    title: 'Police Protection',
    description:
      'This industry comprises government establishments primarily engaged in criminal and civil law enforcement, police, traffic safety, and other activities related to the enforcement of the law and preservation of order.  Combined police and fire departments are included in this industry.\n\nCross-References.',
  },
  {
    code: 922130,
    title: 'Legal Counsel and Prosecution',
    description:
      "This industry comprises government establishments primarily engaged in providing legal counsel or prosecution services for the government.\n\nIllustrative Examples:\n\nAttorney generals' offices\nPublic defenders' offices\nDistrict attorneys' offices\nPublic prosecutors' offices\n\n\nCross-References.",
  },
  {
    code: 922140,
    title: 'Correctional Institutions',
    description:
      'This industry comprises government establishments primarily engaged in managing and operating correctional institutions.  The facility is generally designed for the confinement, correction, and rehabilitation of adult and/or juvenile offenders sentenced by a court.\n\nIllustrative Examples:\n\nCorrectional institutions, public administration\nPenitentiaries, public administration\nDetention centers, public administration\nPrisons, public administration\nJails, public administration \n\n\nCross-References.',
  },
  {
    code: 922150,
    title: 'Parole Offices and Probation Offices',
    description:
      'This industry comprises government establishments primarily engaged in judicially administering probation offices, parole offices and boards, and pardon boards.\n\nCross-References.',
  },
  {
    code: 922160,
    title: 'Fire Protection',
    description:
      'This industry comprises government establishments primarily engaged in firefighting and other related fire protection activities.  Government establishments providing combined fire protection and ambulance or rescue services are classified in this industry.\n\nCross-References. Establishments primarily engaged in--',
  },
  {
    code: 922190,
    title: 'Other Justice, Public Order, and Safety Activities',
    description:
      'This industry comprises government establishments primarily engaged in public order and safety (except courts, police protection, legal counsel and prosecution, correctional institutions, parole offices, probation offices, pardon boards, and fire protection).  These establishments include the general administration of public order and safety programs.  Government establishments responsible for the collection of statistics on public safety are included in this industry.\n\nIllustrative Examples:\n\nConsumer product safety commissions, public administration\nEmergency planning and management offices, government\nDisaster preparedness and management offices, government\nPublic safety bureaus and statistics centers, government\n\n\nCross-References.',
  },
  {
    code: 923110,
    title: 'Administration of Education Programs',
    description:
      'This industry comprises government establishments primarily engaged in the central coordination, planning, supervision, and administration of funds, policies, intergovernmental activities, statistical reports and data collection, and centralized programs for educational administration.  Government scholarship programs are included in this industry.\n\nIllustrative Examples:\n\nEducation offices, nonoperating, public administration\nState education departments\nEducation statistics centers, government\nUniversity regents or boards, government\n\n\nCross-References.',
  },
  {
    code: 923120,
    title: 'Administration of Public Health Programs',
    description:
      "This industry comprises government establishments primarily engaged in the planning, administration, and coordination of public health programs and services, including environmental health activities, mental health, categorical health programs, health statistics, and immunization services.  Government establishments primarily engaged in conducting public health-related inspections are included in this industry.\n\nIllustrative Examples:\n\nCommunicable disease program administration, public administration\nMental health program administration, public administration\nCoroners' offices, public administration\nPublic health program administration, nonoperating, public administration\nHealth program administration, public administration\n\n\nCross-References. Government establishments primarily engaged in--",
  },
  {
    code: 923130,
    title:
      "Administration of Human Resource Programs (except Education, Public Health, and Veterans' Affairs Programs)",
    description:
      "This industry comprises government establishments primarily engaged in the planning, administration, and coordination of programs for public assistance, social work, and welfare activities.  The administration of Social Security, disability insurance, Medicare, unemployment insurance, and workers' compensation programs are included in this industry.\n\nCross-References. Government establishments primarily engaged in--",
  },
  {
    code: 923140,
    title: "Administration of Veterans' Affairs",
    description:
      "This industry comprises government establishments primarily engaged in the administration of programs of assistance, training, counseling, and other services to veterans and their dependents, heirs, or survivors.  Included in this industry are Veterans' Affairs offices that maintain liaison and coordinate activities with other service organizations and governmental agencies.\n\nCross-References.",
  },
  {
    code: 924110,
    title: 'Administration of Air and Water Resource and Solid Waste Management Programs',
    description:
      'This industry comprises government establishments primarily engaged in one or more of the following: (1) the administration, regulation, and enforcement of air and water resource programs; (2) the administration and regulation of solid waste management programs; (3) the administration and regulation of water and air pollution control and prevention programs; (4) the administration and regulation of flood control programs; (5) the administration and regulation of drainage development and water resource consumption programs; (6) the administration and regulation of toxic waste removal and cleanup programs; and (7) coordination of these activities at intergovernmental levels.\n\nIllustrative Examples:\n\nEnvironmental protection program administration, public administration\nWaste management program (except sanitation districts) administration, public administration\nPollution control program administration, public administration\nWater control and quality program administration, public administration\n\n\nCross-References. Government establishments primarily engaged in--',
  },
  {
    code: 924120,
    title: 'Administration of Conservation Programs',
    description:
      'This industry comprises government establishments primarily engaged in the administration, regulation, supervision, and control of land use, including recreational areas; conservation and preservation of natural resources; erosion control; geological survey program administration; weather forecasting program administration; and the administration and protection of publicly and privately owned forest lands.  Government establishments responsible for planning, management, regulation, and conservation of game, fish, and wildlife populations, including wildlife management areas and field stations; and other administrative matters relating to the protection of fish, game, and wildlife are included in this industry.\n\nCross-References. Government establishments primarily engaged in--',
  },
  {
    code: 925110,
    title: 'Administration of Housing Programs',
    description:
      'This industry comprises government establishments primarily engaged in the administration and planning of housing programs.\n\nCross-References. Government establishments primarily engaged in--',
  },
  {
    code: 925120,
    title: 'Administration of Urban Planning and Community and Rural Development',
    description:
      'This industry comprises government establishments primarily engaged in the administration and planning of the development of urban and rural areas.  Included in this industry are government zoning boards and commissions.\n\nIllustrative Examples:\n\nLand redevelopment agencies, government\nRegional planning and development program administration, public administration\nUrban planning commissions, government\nZoning boards and commissions, public administration \n',
  },
  {
    code: 926110,
    title: 'Administration of General Economic Programs',
    description:
      'This industry comprises government establishments primarily engaged in the administration, promotion, and development of economic resources, including business, industry, and tourism.  Included in this industry are government establishments responsible for the development of general statistical data and analyses and promotion of the general economic well-being of the governed area.\n\nIllustrative Examples:\n\nConsumer protection offices, public administration\nSmall business development agencies, public administration\nEconomic development agencies, government\nTrade commissions, government\nGeneral economics statistical agencies, public administration\n\n\nCross-References. Government establishments primarily engaged in--',
  },
  {
    code: 926120,
    title: 'Regulation and Administration of Transportation Programs',
    description:
      'This industry comprises government establishments primarily engaged in the administration, regulation, licensing, planning, inspection, and investigation of transportation services and facilities.  Included in this industry are government establishments responsible for motor vehicle and operator licensing, the Coast Guard (except the Coast Guard Academy), and parking authorities.\n\nCross-References.',
  },
  {
    code: 926130,
    title: 'Regulation and Administration of Communications, Electric, Gas, and Other Utilities',
    description:
      'This industry comprises government establishments primarily engaged in the administration, regulation, licensing, and inspection of utilities, such as communications, electric power (including fossil, nuclear, solar, water, and wind), gas and water supply, and sewerage.\n\nCross-References. Government establishments primarily engaged in--',
  },
  {
    code: 926140,
    title: 'Regulation of Agricultural Marketing and Commodities',
    description:
      'This industry comprises government establishments primarily engaged in the planning, administration, and coordination of agricultural programs for production, marketing, and utilization, including educational and promotional activities.  Included in this industry are government establishments responsible for regulating and controlling the grading and inspection of food, plants, animals, and other agricultural products.\n\nCross-References. Government establishments primarily engaged in--',
  },
  {
    code: 926150,
    title: 'Regulation, Licensing, and Inspection of Miscellaneous Commercial Sectors',
    description:
      'This industry comprises government establishments primarily engaged in the regulation, licensing, and inspection of commercial sectors, such as retail trade, professional occupations, manufacturing, mining, construction, and services.  Included in this industry are government establishments maintaining physical standards, regulating hazardous conditions not elsewhere classified, and enforcing alcoholic beverage control regulations.\n\nIllustrative Examples:\n\nAlcoholic beverage control boards, public administration\nLabor management negotiations boards, government\nBanking regulatory agencies, public administration\nLicensing and permit issuance for business operations, government\nBuilding inspections, government\nLicensing and permit issuance for professional occupations, government\nInsurance commissions, government\nSecurities regulation commissions, public administration\n\n\nCross-References.',
  },
  {
    code: 927110,
    title: 'Space Research and Technology',
    description:
      'This industry comprises government establishments primarily engaged in the administration and operations of space flights, space research, and space exploration.  Included in this industry are government establishments operating space flight centers.\n\nCross-References.',
  },
  {
    code: 928110,
    title: 'National Security',
    description:
      'This industry comprises government establishments of the Armed Forces, including the National Guard, primarily engaged in national security and related activities.\n\nIllustrative Examples:\n\nAir Force\nMilitary police\nArmy\nMilitary training schools (except military service academies)\nMarine Corps\nNational Guard\nMilitary courts\nNavy\n\n\nCross-References. Government establishments primarily engaged in--',
  },
  {
    code: 928120,
    title: 'International Affairs',
    description:
      'This industry comprises establishments of U.S. and foreign governments primarily engaged in international affairs and programs relating to other nations and peoples.\n\nCross-References.',
  },
]

export default NAICS
