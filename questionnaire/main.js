//zodiac project: use an array of objects and attributes:
console.log("start here")
var course = [
	{
		courseName: "Art Égyptien et Romain",
		part1: "Art Égyptien",
		textImg1: "Fragment of a Queen's Face",
		Img1: "Images/C1_Img1.jpg",
		textImg2: "Mastaba Tomb of Perneb",
		Img2: "Images/C1_Img2.jpg",
		textImg3: "The Temple of Dendur",
		Img3: "Images/C1_Img3.jpg",
		textImg4: "Coffin of Khnumnakht",
		Img4: "Images/C1_Img4.jpg",
		textImg5: "Portrait of the Boy Eutyches",
		Img5: "Images/C1_Img5.jpg",
		textImg6: "Sphinx of Hatshepsut",
		Img6: "Images/C1_Img6.jpg",
		part2: "Art Romain",
		textImg7: "Marble sarcophagus with garlands",
		Img7: "Images/C1_Img7.jpg",
		textImg8: "Bronze chariot inlaid with ivory",
		Img8: "Images/C1_Img8.jpg",
		textImg9: "Marble column from the Temple of Artemis at Sardis",
		Img9: "Images/C1_Img9.jpg",
		textImg10: "Cubiculum (bedroom) from the Villa of P. Fannius Synistor at Boscoreale",
		Img10: "Images/C1_Img10.jpg",
		textImg11: "Limestone sarcophagus: the Amathus sarcophagus",
		Img11: "Images/C1_Img11.jpg",
		textImg12: "Marble Statue Group of the Three Graces",
		Img12: "Images/C1_Img12.jpg"
	},
	{
		courseName: "Peintures",
		part1: "Impressionnistes dans l'âme",
		textImg1: "'Wheat Field with Cypresses' by Vincent van Gogh (1889)",
		Img1: "Images/C2_Img1.jpg",
		textImg2: "Garden at Sainte-Adresse, by Claude Monet",
		Img2: "Images/C2_Img2.jpg",
		textImg3: "Boating, by Édouard Manet",
		Img3: "Images/C2_Img3.jpg",
		textImg4: "Reclining Nude, by Auguste Renoir",
		Img4: "Images/C2_Img4.jpg",
		textImg5: "Jalais Hill, Pontoise, by Camille Pissaro",
		Img5: "Images/C2_Img5.jpg",
		textImg6: "The Dance Class, by Edgar Degas",
		Img6: "Images/C2_Img6.jpg",
		part2: "Peinture Baroque",
		textImg7: "Young Woman with a Water Pitcher, by Johannes Vermeer",
		Img7: "Images/C2_Img7.jpg",
		textImg8: "Aristotle with a Bust of Homer, by Rembrandt (Rembrandt van Rijn)",
		Img8: "Images/C2_Img8.jpg",
		textImg9: "The Denial of Saint Peter, by Caravaggio",
		Img9: "Images/C2_Img9.jpg",
		textImg10: "Study of a Young Woman, by Johannes Vermeer",
		Img10: "Images/C2_Img10.jpg",
		textImg11: "Self-Portrait, by Rembrandt (Rembrandt van Rijn)",
		Img11: "Images/C2_Img11.jpg",
		textImg12: "The Musicians, by Caravaggio",
		Img12: "Images/C2_Img12.jpg"
	},	
	{
		courseName: "Grandes Dimensions",
		part1: "",
		textImg1: "The Temple of Dendur",
		Img1: "Images/C3_Img1.jpg",
		textImg2: "Studiolo from the Ducal Palace in Gubbio",
		Img2: "Images/C3_Img2.jpg",
		textImg3: "Panoramic View of the Palace and Gardens of Versailles",
		Img3: "Images/C3_Img3.jpg",
		textImg4: "Living Room from the Francis W. Little House",
		Img4: "Images/C3_Img4.jpg",
		textImg5: "The Damascus Room, dated 1119 AH/1707 AD",
		Img5: "Images/C3_Img5.jpg",
		textImg6: "Buddha of Medicine Bhaishajyaguru (Yaoshi fo)",
		Img6: "Images/C3_Img6.jpg",
		part2: "",
		textImg7: "Facade of Martin E. Thompson’s Branch Bank of the United States",
		Img7: "Images/C3_Img7.jpg",
		textImg8: "The Astor Chinese Garden Court",
		Img8: "Images/C3_Img8.jpg",
		textImg9: "Apse from San Martín at Fuentidueña",
		Img9: "Images/C3_Img9.jpg",
		textImg10: "Tapestry Room from Croome Court",
		Img10: "Images/C3_Img10.jpg",
		textImg11: "Chapter House from Notre-Dame-de-Pontaut",
		Img11: "Images/C3_Img11.jpg",
		textImg12: "Woodwork of a Room from the Colden House, Coldenham, New York",
		Img12: "Images/C3_Img12.jpg"
	},
	{
		courseName: "Aile Americaine",
		part1: "",
		textImg1: "'Washington Crossing the Delaware' (1851), Emanuel Leutze",
		Img1: "Images/C4_Img1.jpg",
		textImg2: "'Madame X' (1883­-1884) by John Singer Sargent",
		Img2: "Images/C4_Img2.jpg",
		textImg3: "Facade of Martin E. Thompson’s Branch Bank of the United States",
		Img3: "Images/C4_Img3.jpg",
		textImg4: "Woodwork of a Room from the Colden House, Coldenham, New York",
		Img4: "Images/C4_Img4.jpg",
		textImg5: "Crown of the Virgin of the Immaculate Conception, known as the Crown of the Andes",
		Img5: "Images/C4_Img5.jpg",
		textImg6: "Living Room from the Francis W. Little House: Windows and paneling",
		Img6: "Images/C4_Img6.jpg",
		part2: "",
		textImg7: "Lady at the Tea Table, by Mary Cassatt",
		Img7: "Images/C4_Img7.jpg",
		textImg8: "The Gulf Stream, by Winslow Homer",
		Img8: "Images/C4_Img8.jpg",
		textImg9: "Peonies Blown in the Wind, by John La Farge",
		Img9: "Images/C4_Img9.jpg",
		textImg10: "Autumn Oaks, by George Inness",
		Img10: "Images/C4_Img10.jpg",
		textImg11: "The Angel of Death and the Sculptor from the Milmore Memorial, by Daniel Chester French",
		Img11: "Images/C4_Img11.jpg",
		textImg12: "The Thinker: Portrait of Louis N. Kenton, by Thomas Eakins",
		Img12: "Images/C4_Img12.jpg"
	},
	{
		courseName: "Art Asiatique",
		part1: "",
		textImg1: "'Buddha of Medicine Bhaishajyaguru (Yaoshi fo),'' Yuan Dynasty, (ca. 1319)",
		Img1: "Images/C5_Img1.jpg",
		textImg2: "Bodhisattva Avalokiteshvara in Water Moon Form (Shuiyue Guanyin)",
		Img2: "Images/C5_Img2.jpg",
		textImg3: "Buddha Maitreya (Mile)",
		Img3: "Images/C5_Img3.jpg",
		textImg4: "Jar with Dragon",
		Img4: "Images/C5_Img4.jpg",
		textImg5: "Landscapes with Poems, by Gong Xian (Chinese, 1619–1689)",
		Img5: "Images/C5_Img5.jpg",
		textImg6: "Dancing Celestial Deity (Devata)",
		Img6: "Images/C5_Img6.jpg",
		part2: "",
		textImg7: "Old Plum",
		Img7: "Images/C5_Img7.jpg",
		textImg8: "Illustrated Legends of the Kitano Tenjin Shrine (Kitano Tenjin engi emaki)",
		Img8: "Images/C5_Img8.jpg",
		textImg9: "Robe (Kosode) with Shells and Sea Grasses ",
		Img9: "Images/C5_Img9.jpg",
		textImg10: "Durga as Slayer of the Buffalo Demon Mahishasura",
		Img10: "Images/C5_Img10.jpg",
		textImg11: "Sutra box with dragons amid clouds",
		Img11: "Images/C5_Img11.jpg",
		textImg12: "Trefoil-shaped covered box with decoration of chrysanthemums",
		Img12: "Images/C5_Img12.jpg"
	},
	{
		courseName: "Art Contemporain, Moderne et Photographies",
		part1: "Art Contemporain et Moderne",
		textImg1: "Cow's Skull: Red, White, and Blue, by Georgia O'Keeffe",
		Img1: "Images/C6_Img1.jpg",
		textImg2: "Gertrude Stein, by Pablo Picasso",
		Img2: "Images/C6_Img2.jpg",
		textImg3: "Candlestick and Playing Cards on a Table, by Georges Braque",
		Img3: "Images/C6_Img3.jpg",
		textImg4: "Young Sailor II, by Henri Matisse",
		Img4: "Images/C6_Img4.jpg",
		textImg5: "Autumn Rhythm (Number 30), by Jackson Pollock",
		Img5: "Images/C6_Img5.jpg",
		textImg6: "Dance book, by Josef Hoffmann",
		Img6: "Images/C6_Img6.jpg",
		part2: "Photographies",
		textImg7: "[Oak Tree and Rocks, Forest of Fontainebleau]",
		Img7: "Images/C6_Img7.jpg",
		textImg8: "[Abandoned House]",
		Img8: "Images/C6_Img8.jpg",
		textImg9: "[Dance Study]",
		Img9: "Images/C6_Img9.jpg",
		textImg10: "[Flower Study, Rose of Sharon]",
		Img10: "Images/C6_Img10.jpg",
		textImg11: "[Fontainebleau Forest]",
		Img11: "Images/C6_Img11.jpg",
		textImg12: "[Floyd and Lucille Burroughs on Porch, Hale County, Alabama]",
		Img12: "Images/C6_Img12.jpg"
	},
	{
		courseName: "Art Oriental",
		part1: "Art du Proche-Orient Antique",
		textImg1: "Human-headed winged bull (lamassu)",
		Img1: "Images/C7_Img1.jpg",
		textImg2: "Human-headed winged lion (lamassu)",
		Img2: "Images/C7_Img2.jpg",
		textImg3: "Caftan",
		Img3: "Images/C7_Img3.jpg",
		textImg4: "Necklace pendants and beads",
		Img4: "Images/C7_Img4.jpg",
		textImg5: "Sword and scabbard",
		Img5: "Images/C7_Img5.jpg",
		textImg6: "Textile fragment: walking ram with a neckband and fluttering ribbons",
		Img6: "Images/C7_Img6.jpg",
		part2: "Art Islamique",
		textImg7: "Damascus Room",
		Img7: "Images/C7_Img7.JPG",
		textImg8: "Qur'an Manuscript",
		Img8: "Images/C7_Img8.jpg",
		textImg9: "Mihrab (Prayer Niche)",
		Img9: "Images/C7_Img9.jpg",
		textImg10: "Pen Box (Qalamdan) Depicting Shah Isma'il in a Battle against the Uzbeks",
		Img10: "Images/C7_Img10.jpg",
		textImg11: "The Deluge, by Valentin Bousch",
		Img11: "Images/C7_Img11.jpg",
		textImg12: "Wall fountain, by Simone Mosca",
		Img12: "Images/C7_Img12.jpg"
	},
	{
		courseName: "Art Européen",
		part1: "",
		textImg1: "Bedroom from the Sagredo Palace",
		Img1: "Images/C8_Img1.jpg",
		textImg2: "Patio from the Castle of Vélez Blanco",
		Img2: "Images/C8_Img2.jpg",
		textImg3: "Coin cabinet",
		Img3: "Images/C8_Img3.jpg",
		textImg4: "Ugolino and His Sons, by Jean-Baptiste Carpeaux",
		Img4: "Images/C8_Img4.jpg",
		textImg5: "The Deluge, by Valentin Bousch",
		Img5: "Images/C8_Img5.jpg",
		textImg6: "Wall fountain, by Simone Mosca",
		Img6: "Images/C8_Img6.jpg",
		part2: "",
		textImg7: "Bashi-Bazouk, by Jean-Léon Gérôme",
		Img7: "Images/C8_Img7.jpg",
		textImg8: "Madame Georges Charpentier (Marguérite-Louise Lemonnier, 1848–1904) and Her Children, Georgette-Berthe (1872–1945) and Paul-Émile-Charles (1875–1895), by Auguste Renoir",
		Img8: "Images/C8_Img8.jpg",
		textImg9: "Ia Orana Maria (Hail Mary), by Paul Gauguin",
		Img9: "Images/C8_Img9.jpg",
		textImg10: "The Repast of the Lion, by Henri Rousseau",
		Img10: "Images/C8_Img10.jpg",
		textImg11: "Rubens, His Wife Helena Fourment (1614–1673), and Their Son Frans (1633–1678), by Peter Paul Rubens",
		Img11: "Images/C8_Img11.jpg",
		textImg12: "The Death of Socrates, by Jacques Louis David",
		Img12: "Images/C8_Img12.jpg"
	},
	{
		courseName: "Art Médiéval",
		part1: "",
		textImg1: "Crib of the Infant Jesus",
		Img1: "Images/C9_Img1.jpg",
		textImg2: "Doorway from the Church of San Nicolò, San Gemini",
		Img2: "Images/C9_Img2.jpg",
		textImg3: "Booklet with Scenes of the Passion",
		Img3: "Images/C9_Img3.jpg",
		textImg4: "Reliquary Casket with Scenes from the Martyrdom of Saint Thomas Becket",
		Img4: "Images/C9_Img4.jpg",
		textImg5: "Jaharis Byzantine Lectionary",
		Img5: "Images/C9_Img5.jpg",
		textImg6: "Virgin and Child in Majesty",
		Img6: "Images/C9_Img6.jpg",
		part2: "",
		textImg7: "Head of King David",
		Img7: "Images/C9_Img7.jpg",
		textImg8: "Angels Swinging Censers",
		Img8: "Images/C9_Img8.jpg",
		textImg9: "Relief of the Betrayal and Arrest of Jesus",
		Img9: "Images/C9_Img9.jpg",
		textImg10: "Tabernacle of Cherves",
		Img10: "Images/C9_Img10.jpg",
		textImg11: "Lectern for the Reading of the Gospels with the Eagle of Saint John the Evangelist",
		Img11: "Images/C9_Img11.jpg",
		textImg12: "Virgin of the Annunciation",
		Img12: "Images/C9_Img12.jpg"
	},
	{
		courseName: "Armes et Armures",
		part1: "",
		textImg1: "Saber with Scabbard",
		Img1: "Images/C10_Img1.jpg",
		textImg2: "Armor (Gusoku)",
		Img2: "Images/C10_Img2.jpg",
		textImg3: "Flintlock Gun of Louis XIII (1601–1643), King of France",
		Img3: "Images/C10_Img3.jpg",
		textImg4: "Armor of Infante Luis, Prince of Asturias (1707–1724)",
		Img4: "Images/C10_Img4.jpg",
		textImg5: "Double-Barrel Breech-Loading Pinfire Shotgun",
		Img5: "Images/C10_Img5.jpg",
		textImg6: "Armor of Henry II, King of France (reigned 1547–59)",
		Img6: "Images/C10_Img6.jpg",
		part2: "",
		textImg7: "Dagger with Scabbard",
		Img7: "Images/C10_Img7.jpg",
		textImg8: "Congressional Presentation Sword and Scabbard of Major General John E. Wool (1784–1869)",
		Img8: "Images/C10_Img8.jpg",
		textImg9: "Pair of Flintlock Pistols of Empress Catherine the Great (1729–1796)",
		Img9: "Images/C10_Img9.jpg",
		textImg10: "Cased Set of a Flintlock Rifle, a Pair of Pistols, and Accessories",
		Img10: "Images/C10_Img10.jpg",
		textImg11: "Costume Armor in the Classical Style",
		Img11: "Images/C10_Img11.jpg",
		textImg12: "Armor (Yoroi)",
		Img12: "Images/C10_Img12.jpg"
	},
	{
		courseName: "La crème de la crème !",
		part1: "",
		textImg1: "The Temple of Dendur",
		Img1: "Images/C11_Img1.jpg",
		textImg2: "'Death of Socrates' (1787) by Jacques Louis David",
		Img2: "Images/C11_Img2.jpg",
		textImg3: "Wheat Field with Cypresses by Vincent van Gogh",
		Img3: "Images/C11_Img3.jpg",
		textImg4: "Armour of Henry II of France",
		Img4: "Images/C11_Img4.jpg",
		textImg5: "Queen Mother Pendant Mask: Iyoba, 16th century",
		Img5: "Images/C11_Img5.jpg",
		textImg6: "Dancing Celestial Deity (Devata), mid-11th century",
		Img6: "Images/C11_Img6.jpg",
		part2: "",
		textImg7: "'Washington Crossing the Delaware' (1851), Emanuel Leutze",
		Img7: "Images/C11_Img7.jpg",
		textImg8: "Marble sarcophagus with garlands",
		Img8: "Images/C11_Img8.jpg",
		textImg9: "Saber with Scabbard",
		Img9: "Images/C11_Img9.jpg",
		textImg10: "Lady at the Tea Table, by Mary Cassatt",
		Img10: "Images/C11_Img10.jpg",
		textImg11: "Human-headed winged lion (lamassu)",
		Img11: "Images/C11_Img11.jpg",
		textImg12: "[Abandoned House]",
		Img12: "Images/C11_Img12.jpg"
	}
]

// write a function to call appropriate zodiacName:
function courseChoice() {
	console.log("working")

	var radios = document.getElementsByName('example');

	for (var i = 0, length = radios.length; i < length; i++)
	{
	 if (radios[i].checked)
	 {
	  
	  var name = radios[i].value;
	  // only one radio can be logically checked, don't check the rest
	  break;
	 }
	}
	
	var choice = document.getElementById("courseName")
	var tooltip1 = document.getElementById("tooltip1")
	var tooltip2 = document.getElementById("tooltip2")
	var tooltip3 = document.getElementById("tooltip3")
	var tooltip4 = document.getElementById("tooltip4")
	var tooltip5 = document.getElementById("tooltip5")
	var tooltip6 = document.getElementById("tooltip6")
	var tooltip7 = document.getElementById("tooltip7")
	var tooltip8 = document.getElementById("tooltip8")
	var tooltip9 = document.getElementById("tooltip9")
	var tooltip10 = document.getElementById("tooltip10")
	var tooltip11 = document.getElementById("tooltip11")
	var tooltip12 = document.getElementById("tooltip12")

	var class1 = document.getElementById("li1")
	var class2 = document.getElementById("li2")
	var class3 = document.getElementById("li3")
	var class4 = document.getElementById("li4")
	var class5 = document.getElementById("li5")
	var class6 = document.getElementById("li6")
	var class7 = document.getElementById("li7")
	var class8 = document.getElementById("li8")
	var class9 = document.getElementById("li9")
	var class10 = document.getElementById("li10")
	var class11 = document.getElementById("li11")
	var class12 = document.getElementById("li12")

	var img1 = document.getElementById("Img1")
	var img2 = document.getElementById("Img2")
	var img3 = document.getElementById("Img3")
	var img4 = document.getElementById("Img4")
	var img5 = document.getElementById("Img5")
	var img6 = document.getElementById("Img6")
	var img7 = document.getElementById("Img7")
	var img8 = document.getElementById("Img8")
	var img9 = document.getElementById("Img9")
	var img10 = document.getElementById("Img10")
	var img11 = document.getElementById("Img11")
	var img12 = document.getElementById("Img12")

	if(name == "EgyptianRoman") {
		choice.innerHTML = course[0].courseName
		tooltip1.innerHTML = course[0].textImg1
		tooltip2.innerHTML = course[0].textImg2
		tooltip3.innerHTML = course[0].textImg3
		tooltip4.innerHTML = course[0].textImg4
		tooltip5.innerHTML = course[0].textImg5
		tooltip6.innerHTML = course[0].textImg6
		tooltip7.innerHTML = course[0].textImg7
		tooltip8.innerHTML = course[0].textImg8
		tooltip9.innerHTML = course[0].textImg9
		tooltip10.innerHTML = course[0].textImg10
		tooltip11.innerHTML = course[0].textImg11
		tooltip12.innerHTML = course[0].textImg12

		img1.src = course[0].Img1
		img2.src = course[0].Img2
		img3.src = course[0].Img3
		img4.src = course[0].Img4
		img5.src = course[0].Img5
		img6.src = course[0].Img6
		img7.src = course[0].Img7
		img8.src = course[0].Img8
		img9.src = course[0].Img9
		img10.src = course[0].Img10
		img11.src = course[0].Img11
		img12.src = course[0].Img12

		class1.className = "landscape"
		class2.className = "landscape"
		class3.className = "landscape"
		class4.className = "landscape"
		class5.className = "portrait"
		class6.className = "landscape"
		class7.className = "landscape"
		class8.className = "landscape"
		class9.className = "portrait"
		class10.className = "landscape"
		class11.className = "landscape"
		class12.className = "landscape"
		return
	}
	if(name == "Peintures") {
		choice.innerHTML = course[1].courseName
		tooltip1.innerHTML = course[1].textImg1
		tooltip2.innerHTML = course[1].textImg2
		tooltip3.innerHTML = course[1].textImg3
		tooltip4.innerHTML = course[1].textImg4
		tooltip5.innerHTML = course[1].textImg5
		tooltip6.innerHTML = course[1].textImg6
		tooltip7.innerHTML = course[1].textImg7
		tooltip8.innerHTML = course[1].textImg8
		tooltip9.innerHTML = course[1].textImg9
		tooltip10.innerHTML = course[1].textImg10
		tooltip11.innerHTML = course[1].textImg11
		tooltip12.innerHTML = course[1].textImg12
		img1.src = course[1].Img1
		img2.src = course[1].Img2
		img3.src = course[1].Img3
		img4.src = course[1].Img4
		img5.src = course[1].Img5
		img6.src = course[1].Img6
		img7.src = course[1].Img7
		img8.src = course[1].Img8
		img9.src = course[1].Img9
		img10.src = course[1].Img10
		img11.src = course[1].Img11
		img12.src = course[1].Img12

		class1.className = "landscape_full"
		class2.className = "landscape_full"
		class3.className = "landscape_full"
		class4.className = "landscape_full"
		class5.className = "landscape_full"
		class6.className = "landscape"
		class7.className = "landscape_full"
		class8.className = "landscape_full"
		class9.className = "landscape_full"
		class10.className = "landscape"
		class11.className = "landscape"
		class12.className = "landscape_full"
		return
	}
	if(name == "Big") {
		choice.innerHTML = course[2].courseName
		tooltip1.innerHTML = course[2].textImg1
		tooltip2.innerHTML = course[2].textImg2
		tooltip3.innerHTML = course[2].textImg3
		tooltip4.innerHTML = course[2].textImg4
		tooltip5.innerHTML = course[2].textImg5
		tooltip6.innerHTML = course[2].textImg6
		tooltip7.innerHTML = course[2].textImg7
		tooltip8.innerHTML = course[2].textImg8
		tooltip9.innerHTML = course[2].textImg9
		tooltip10.innerHTML = course[2].textImg10
		tooltip11.innerHTML = course[2].textImg11
		tooltip12.innerHTML = course[2].textImg12
		img1.src = course[2].Img1
		img2.src = course[2].Img2
		img3.src = course[2].Img3
		img4.src = course[2].Img4
		img5.src = course[2].Img5
		img6.src = course[2].Img6
		img7.src = course[2].Img7
		img8.src = course[2].Img8
		img9.src = course[2].Img9
		img10.src = course[2].Img10
		img11.src = course[2].Img11
		img12.src = course[2].Img12

		class1.className = "landscape"
		class2.className = "landscape_full"
		class3.className = "landscape_full"
		class4.className = "landscape_full"
		class5.className = "landscape"
		class6.className = "landscape"
		class7.className = "landscape"
		class8.className = "landscape_full"
		class9.className = "landscape"
		class10.className = "landscape_full"
		class11.className = "landscape"
		class12.className = "landscape"
		return
	}
	if(name == "American") {
		choice.innerHTML = course[3].courseName
		tooltip1.innerHTML = course[3].textImg1
		tooltip2.innerHTML = course[3].textImg2
		tooltip3.innerHTML = course[3].textImg3
		tooltip4.innerHTML = course[3].textImg4
		tooltip5.innerHTML = course[3].textImg5
		tooltip6.innerHTML = course[3].textImg6
		tooltip7.innerHTML = course[3].textImg7
		tooltip8.innerHTML = course[3].textImg8
		tooltip9.innerHTML = course[3].textImg9
		tooltip10.innerHTML = course[3].textImg10
		tooltip11.innerHTML = course[3].textImg11
		tooltip12.innerHTML = course[3].textImg12
		img1.src = course[3].Img1
		img2.src = course[3].Img2
		img3.src = course[3].Img3
		img4.src = course[3].Img4
		img5.src = course[3].Img5
		img6.src = course[3].Img6
		img7.src = course[3].Img7
		img8.src = course[3].Img8
		img9.src = course[3].Img9
		img10.src = course[3].Img10
		img11.src = course[3].Img11
		img12.src = course[3].Img12

		class1.className = "landscape_full"
		class2.className = "portrait"
		class3.className = "landscape"
		class4.className = "landscape"
		class5.className = "landscape"
		class6.className = "landscape"
		class7.className = "landscape"
		class8.className = "landscape"
		class9.className = "portrait"
		class10.className = "landscape_full"
		class11.className = "landscape_full"
		class12.className = "portrait"
		return
	}
	if(name == "Asian") {
		choice.innerHTML = course[4].courseName
		tooltip1.innerHTML = course[4].textImg1
		tooltip2.innerHTML = course[4].textImg2
		tooltip3.innerHTML = course[4].textImg3
		tooltip4.innerHTML = course[4].textImg4
		tooltip5.innerHTML = course[4].textImg5
		tooltip6.innerHTML = course[4].textImg6
		tooltip7.innerHTML = course[4].textImg7
		tooltip8.innerHTML = course[4].textImg8
		tooltip9.innerHTML = course[4].textImg9
		tooltip10.innerHTML = course[4].textImg10
		tooltip11.innerHTML = course[4].textImg11
		tooltip12.innerHTML = course[4].textImg12
		img1.src = course[4].Img1
		img2.src = course[4].Img2
		img3.src = course[4].Img3
		img4.src = course[4].Img4
		img5.src = course[4].Img5
		img6.src = course[4].Img6
		img7.src = course[4].Img7
		img8.src = course[4].Img8
		img9.src = course[4].Img9
		img10.src = course[4].Img10
		img11.src = course[4].Img11
		img12.src = course[4].Img12

		class1.className = "landscape"
		class2.className = "portrait"
		class3.className = "portrait"
		class4.className = "portrait"
		class5.className = "landscape"
		class6.className = "portrait"
		class7.className = "landscape_full"
		class8.className = "landscape_full"
		class9.className = "portrait"
		class10.className = "portrait"
		class11.className = "landscape"
		class12.className = "landscape"
		return
	}
	if(name == "Modern") {
		choice.innerHTML = course[5].courseName
		tooltip1.innerHTML = course[5].textImg1
		tooltip2.innerHTML = course[5].textImg2
		tooltip3.innerHTML = course[5].textImg3
		tooltip4.innerHTML = course[5].textImg4
		tooltip5.innerHTML = course[5].textImg5
		tooltip6.innerHTML = course[5].textImg6
		tooltip7.innerHTML = course[5].textImg7
		tooltip8.innerHTML = course[5].textImg8
		tooltip9.innerHTML = course[5].textImg9
		tooltip10.innerHTML = course[5].textImg10
		tooltip11.innerHTML = course[5].textImg11
		tooltip12.innerHTML = course[5].textImg12
		img1.src = course[5].Img1
		img2.src = course[5].Img2
		img3.src = course[5].Img3
		img4.src = course[5].Img4
		img5.src = course[5].Img5
		img6.src = course[5].Img6
		img7.src = course[5].Img7
		img8.src = course[5].Img8
		img9.src = course[5].Img9
		img10.src = course[5].Img10
		img11.src = course[5].Img11
		img12.src = course[5].Img12

		class1.className = "portrait"
		class2.className = "portrait"
		class3.className = "portrait"
		class4.className = "portrait"
		class5.className = "landscape"
		class6.className = "landscape"
		class7.className = "landscape"
		class8.className = "portrait"
		class9.className = "landscape"
		class10.className = "landscape"
		class11.className = "landscape"
		class12.className = "portrait"
		return
	}
	if(name == "Eastern") {
		choice.innerHTML = course[6].courseName
		tooltip1.innerHTML = course[6].textImg1
		tooltip2.innerHTML = course[6].textImg2
		tooltip3.innerHTML = course[6].textImg3
		tooltip4.innerHTML = course[6].textImg4
		tooltip5.innerHTML = course[6].textImg5
		tooltip6.innerHTML = course[6].textImg6
		tooltip7.innerHTML = course[6].textImg7
		tooltip8.innerHTML = course[6].textImg8
		tooltip9.innerHTML = course[6].textImg9
		tooltip10.innerHTML = course[6].textImg10
		tooltip11.innerHTML = course[6].textImg11
		tooltip12.innerHTML = course[6].textImg12
		img1.src = course[6].Img1
		img2.src = course[6].Img2
		img3.src = course[6].Img3
		img4.src = course[6].Img4
		img5.src = course[6].Img5
		img6.src = course[6].Img6
		img7.src = course[6].Img7
		img8.src = course[6].Img8
		img9.src = course[6].Img9
		img10.src = course[6].Img10
		img11.src = course[6].Img11
		img12.src = course[6].Img12

		class1.className = "landscape_full"
		class2.className = "landscape"
		class3.className = "portrait"
		class4.className = "landscape"
		class5.className = "portrait"
		class6.className = "portrait"
		class7.className = "landscape"
		class8.className = "landscape_full"
		class9.className = "landscape"
		class10.className = "landscape_full"
		class11.className = "landscape"
		class12.className = "landscape"
		return
	}
	if(name == "European") {
		choice.innerHTML = course[7].courseName
		tooltip1.innerHTML = course[7].textImg1
		tooltip2.innerHTML = course[7].textImg2
		tooltip3.innerHTML = course[7].textImg3
		tooltip4.innerHTML = course[7].textImg4
		tooltip5.innerHTML = course[7].textImg5
		tooltip6.innerHTML = course[7].textImg6
		tooltip7.innerHTML = course[7].textImg7
		tooltip8.innerHTML = course[7].textImg8
		tooltip9.innerHTML = course[7].textImg9
		tooltip10.innerHTML = course[7].textImg10
		tooltip11.innerHTML = course[7].textImg11
		tooltip12.innerHTML = course[7].textImg12
		img1.src = course[7].Img1
		img2.src = course[7].Img2
		img3.src = course[7].Img3
		img4.src = course[7].Img4
		img5.src = course[7].Img5
		img6.src = course[7].Img6
		img7.src = course[7].Img7
		img8.src = course[7].Img8
		img9.src = course[7].Img9
		img10.src = course[7].Img10
		img11.src = course[7].Img11
		img12.src = course[7].Img12

		class1.className = "landscape"
		class2.className = "landscape"
		class3.className = "landscape"
		class4.className = "landscape"
		class5.className = "landscape"
		class6.className = "landscape"
		class7.className = "landscape"
		class8.className = "landscape_full"
		class9.className = "landscape"
		class10.className = "landscape_full"
		class11.className = "landscape"
		class12.className = "landscape_full"
		return
	}

	if(name == "Medieval") {
		choice.innerHTML = course[8].courseName
		tooltip1.innerHTML = course[8].textImg1
		tooltip2.innerHTML = course[8].textImg2
		tooltip3.innerHTML = course[8].textImg3
		tooltip4.innerHTML = course[8].textImg4
		tooltip5.innerHTML = course[8].textImg5
		tooltip6.innerHTML = course[8].textImg6
		tooltip7.innerHTML = course[8].textImg7
		tooltip8.innerHTML = course[8].textImg8
		tooltip9.innerHTML = course[8].textImg9
		tooltip10.innerHTML = course[8].textImg10
		tooltip11.innerHTML = course[8].textImg11
		tooltip12.innerHTML = course[8].textImg12
		img1.src = course[8].Img1
		img2.src = course[8].Img2
		img3.src = course[8].Img3
		img4.src = course[8].Img4
		img5.src = course[8].Img5
		img6.src = course[8].Img6
		img7.src = course[8].Img7
		img8.src = course[8].Img8
		img9.src = course[8].Img9
		img10.src = course[8].Img10
		img11.src = course[8].Img11
		img12.src = course[8].Img12

		class1.className = "portrait"
		class2.className = "portrait"
		class3.className = "portrait"
		class4.className = "landscape"
		class5.className = "landscape"
		class6.className = "portrait"
		class7.className = "landscape"
		class8.className = "landscape"
		class9.className = "landscape"
		class10.className = "landscape"
		class11.className = "portrait"
		class12.className = "portrait"
		return
	}

	if(name == "Arms") {
		choice.innerHTML = course[9].courseName
		tooltip1.innerHTML = course[9].textImg1
		tooltip2.innerHTML = course[9].textImg2
		tooltip3.innerHTML = course[9].textImg3
		tooltip4.innerHTML = course[9].textImg4
		tooltip5.innerHTML = course[9].textImg5
		tooltip6.innerHTML = course[9].textImg6
		tooltip7.innerHTML = course[9].textImg7
		tooltip8.innerHTML = course[9].textImg8
		tooltip9.innerHTML = course[9].textImg9
		tooltip10.innerHTML = course[9].textImg10
		tooltip11.innerHTML = course[9].textImg11
		tooltip12.innerHTML = course[9].textImg12
		img1.src = course[9].Img1
		img2.src = course[9].Img2
		img3.src = course[9].Img3
		img4.src = course[9].Img4
		img5.src = course[9].Img5
		img6.src = course[9].Img6
		img7.src = course[9].Img7
		img8.src = course[9].Img8
		img9.src = course[9].Img9
		img10.src = course[9].Img10
		img11.src = course[9].Img11
		img12.src = course[9].Img12

		class1.className = "portrait"
		class2.className = "portrait"
		class3.className = "landscape"
		class4.className = "portrait"
		class5.className = "portrait"
		class6.className = "portrait"
		class7.className = "portrait"
		class8.className = "portrait"
		class9.className = "landscape"
		class10.className = "landscape"
		class11.className = "portrait"
		class12.className = "portrait"
		return
	}

	if(name == "Cream") {
		choice.innerHTML = course[10].courseName
		tooltip1.innerHTML = course[10].textImg1
		tooltip2.innerHTML = course[10].textImg2
		tooltip3.innerHTML = course[10].textImg3
		tooltip4.innerHTML = course[10].textImg4
		tooltip5.innerHTML = course[10].textImg5
		tooltip6.innerHTML = course[10].textImg6
		tooltip7.innerHTML = course[10].textImg7
		tooltip8.innerHTML = course[10].textImg8
		tooltip9.innerHTML = course[10].textImg9
		tooltip10.innerHTML = course[10].textImg10
		tooltip11.innerHTML = course[10].textImg11
		tooltip12.innerHTML = course[10].textImg12
		img1.src = course[10].Img1
		img2.src = course[10].Img2
		img3.src = course[10].Img3
		img4.src = course[10].Img4
		img5.src = course[10].Img5
		img6.src = course[10].Img6
		img7.src = course[10].Img7
		img8.src = course[10].Img8
		img9.src = course[10].Img9
		img10.src = course[10].Img10
		img11.src = course[10].Img11
		img12.src = course[10].Img12

		class1.className = "portrait"
		class2.className = "landscape"
		class3.className = "landscape"
		class4.className = "portrait"
		class5.className = "portrait"
		class6.className = "portrait"
		class7.className = "landscape"
		class8.className = "landscape"
		class9.className = "portrait"
		class10.className = "portrait"
		class11.className = "portrait"
		class12.className = "portrait"
		return
	}
}