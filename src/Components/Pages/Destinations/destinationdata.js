const destinationsData = [
    {
      id: 1,
      name: "Kerela",
      image: "/assets/kerela-3.png",
      description: "Kerala is the 14th smallest Indian state by area. It is bordered by Karnataka to the north and northeast,Tamil Nadu to the east and south, and the Lakshadweep Sea[19] to the west. With 33 million inhabitants as per the 2011 census, Kerala is the 13th-largest Indian state by population. It is divided into 14 districts with the capital being Thiruvananthapuram. Malayalam is the most widely spoken language and is also the official language of the state.The culture of Kerala is composite and cosmopolitan in nature and it is an integral part of Indian culture.[422] .",
    },
    {
      id: 2,
      name: "Munar",
      image: "/assets/kerela-4.png",
      description: "Munnar, often referred to as the Kashmir of South India, is a stunning hill station in Kerala known for its sprawling tea plantations, misty landscapes, and serene waterfalls. It is home to the Kolukkumalai Tea Estate, the highest organic tea plantation in the world, offering breathtaking sunrise views. Munnar is also famous for the Neelakurinji flower, which blooms once every 12 years, covering the hills in a mesmerizing blue hue. The region’s cool climate, scenic valleys, and attractions like Eravikulam National Park, home to the endangered Nilgiri." ,
    },
    {
      id: 3,
      name: "Varkala",
      image: "/assets/varkala.png",
      description: "Varkala, a coastal town in Kerala, is known for its majestic cliffs that overlook the Arabian Sea, making it one of the few places in India where cliffs meet the ocean. The Papanasam Beach is considered sacred, with its mineral-rich waters believed to have healing properties. The stunning Varkala Cliff, lined with cafes and shops, offers a mesmerizing sunset view, attracting travelers looking for both relaxation and adventure. The town is also home to the ancient Janardanaswamy Temple, which has been a place of worship for over 2,000 years.",
    },
    {
      id: 4,
      name: "Kovlam",
      image: "/assets/kovlam.png",
      description: "Kovalam, another famous beach destination in Kerala, is renowned for its crescent-shaped coastline and golden sandy beaches. The Lighthouse Beach, named after its iconic red-and-white lighthouse, offers stunning panoramic views of the sea. Kovalam is a popular hub for water sports like surfing and parasailing, thanks to its strong yet manageable waves. The town has been a major tourist spot since the 1930s and is well-known for its Ayurvedic spas and wellness retreats.",
    },
    {
      id: 5,
      name: "Thekkady",
      image: "/assets/kovlam-3.png",
      description: "Thekkady, located in the Idukki district of Kerala, is a paradise for nature lovers and wildlife enthusiasts. Home to the famous Periyar Wildlife Sanctuary, it offers breathtaking views of lush green forests, serene lakes, and diverse wildlife. The sanctuary, spread across 925 sq. km, is one of India’s best tiger reserves, where visitors can spot elephants, deer, bison, and even the elusive Bengal tiger. A boat safari on Periyar Lake is one of the most exciting experiences .",
    },
    {
      id: 6,
      name: "Gavi Gangadhareshwara Temple",
      image: "/assets/banglore-2.png",
      description: "Gavi Gangadhareshwara is an ancient cave temple in Gavipuram.The temple is known for another interesting phenomenon. In the evening of Makar Sankranthi festival, the sunlight passes through the horns of nandi statue and directly falls on the lingam. This spectacle happens every year on the day of the festival. Map Location.",
    },
    {
      id: 7,
      name: " Bangalore Aquarium ",
      image: "/assets/banglore-1.png",
      description: "Bangalore, known for its rich history, science, and culture, is home to several fascinating museums that offer a glimpse into the city's heritage, art, and technological advancements. These museums provide an educational and immersive experience, making them a must-visit for history buffs, science lovers, and curious travelers.One of the most popular museums is the Visvesvaraya Industrial and Technological Museum (VITM).",
    },
    {
      id: 8,
      name: "Mayo Hall",
      image: "/assets/bg-mall-1.png",
      description: "Mayo Hall is a stone and mortar structure and resides at the heart of the city. This two storey building gives you amazing views of Parade grounds and Ulsoor Lake on one side and the Bangalore Race Course and Brigade Grounds on the other. Italian chandeliers, ornate furniture, exquisite furnishings, architrave, pediment windows, key stoned arches, balustrade ledges, beautiful consoles, Greek cornices.",
    },
    {
      id: 9,
      name: "Orion Mall",
      image: "/assets/bg-mall-3.png",
      description: "One of the most interesting aspects of Orion Mall is its stunning lakeside view, which sets it apart from other malls in Bangalore. The open-air seating areas, beautiful water fountain, and spacious walkways create a relaxed and enjoyable atmosphere. The mall houses top international brands like Zara, H&M, Marks & Spencer, Adidas, and many more, making it a paradise for fashion enthusiasts.",
    },
    {
      id: 10,
      name: "Cubbon park",
      image: "/assets/bg-palace-2.png",
      description: "Located in the heart of the city, Cubbon Park was originally created in 1870. The park is home to an exotic range of flora with around 6000 plants and trees. You can spot some rare and beautiful artocarpus, cassia fistula, ficus, polyalthias, araucaria, bamboo, castanospermum australe, grevillea robusta, millettia, peltophorum,schinus molle, swietenia mahagoni, tabebuia in this park.",
    },
    {
      id: 11,
      name: "Banglore palace",
      image: "/assets/bg-palce-1.png",
      description: "Bangalore Palace, one of the city's most iconic landmarks, is a majestic architectural masterpiece that reflects the grandeur of royal heritage and history. Built in 1878 by Chamaraja Wadiyar, the palace is inspired by England’s Windsor Castle, featuring turrets, wood-carved interiors, elegant ballrooms, and lush gardens. The palace covers over 45,000 square feet, showcasing a beautiful blend of Tudor and Scottish Gothic architecture.",
    },
    {
      id: 12,
      name: "Chickmangular",
      image: "/assets/chickmangular-2.png",
      description: "Nestled in the Western Ghats of Karnataka, Chikmagalur is a paradise for nature lovers, adventure seekers, and coffee enthusiasts. Known as the Coffee Land of Karnataka, this beautiful hill station is famous for its vast coffee plantations, lush green landscapes, and mist-covered mountains. The aroma of freshly brewed coffee fills the air, as Chikmagalur is home to India’s first-ever coffee plantation, introduced by Baba Budan in the 17th century.",
    },
    {
      id: 13,
      name: " Abbey Falls",
      image: "/assets/chickmangular-3.png",
      description: "Z Point is a spectacular viewpoint that offers breathtaking sunrise and sunset views over the Western Ghats. The trek to Z Point is short but adventurous, passing through deep valleys, rocky trails, and lush green hills. It is one of the best places in Chikmagalur for photography and nature lovers.A jeep safari through the sanctuary offers a thrilling experience for nature and wildlife lovers. The Bhadra Dam nearby adds to the beauty of the region.",
    },
    {
      id: 14,
      name: "Nagarhole National Park  ",
      image: "/assets/coorg-4.png",
      description: "Located in the Kodagu (Coorg) and Mysore districts of Karnataka, Nagarhole National Park is one of India's best tiger reserves and a part of the Nilgiri Biosphere Reserve. Known for its rich biodiversity, dense forests, and thrilling wildlife safaris, it offers a perfect escape into the wilderness. The name Nagarhole comes from the Kannada words  Nagara(cobra) and Hole (river), referring to the winding streams that flow through the park.",
    },
    {
      id: 15,
      name: "Mandalpatti ",
      image: "/assets/coorg-2.png",
      description: "Mandalpatti is a scenic hilltop viewpoint known for its 360-degree views of the Western Ghats. The best way to reach the top is by taking an adventurous jeep ride, as the route is too rugged for regular vehicles. The sunrise and sunset views from here are absolutely breathtaking.Located in Bylakuppe, one of the largest Tibetan settlements in India, the Namdroling Monastery (Golden Temple) is a beautiful Tibetan Buddhist monastery known for its golden statues.",
    },
    {
      id: 16,
      name: "Gokarna",
      image: "/assets/gokarana-3.png",
      description: "Gokarna, a serene coastal town in Karnataka, is famous for its pristine beaches, ancient temples, and peaceful ambiance. Often considered a quieter alternative to Goa, Gokarna attracts beach lovers, backpackers, and spiritual seekers. The town is known for its relaxed vibe, golden sandy shores, and breathtaking sunsets, making it a perfect getaway for those looking to unwind amidst nature.",
    },
    {
      id: 17,
      name: "Kudle",
      image: "/assets/varkala-3.png",
      description: "Kudle Beach, located just a short distance from Gokarna town, is one of the most beautiful and peaceful beaches in Karnataka. Surrounded by lush green hills and golden sands, Kudle Beach is a favorite destination for backpackers, yoga lovers, and beach enthusiasts looking for a quiet retreat. Unlike the crowded beaches of Goa, Kudle Beach offers a laid-back atmosphere, making it perfect for relaxation, meditation, and long beach walks.",
    },
    {
      id: 18,
      name: "Mysore palace",
      image: "/assets/mysoure-2.png",
      description: "Mysore Palace, also known as the Amba Vilas Palace, is one of India’s grandest and most beautiful palaces, located in the heart of Mysore, Karnataka. This architectural marvel is the official residence of the Wadiyar dynasty, who ruled the Kingdom of Mysore for over 500 years. With its stunning Indo-Saracenic architecture, intricate carvings, and royal history, Mysore Palace stands as a symbol of Karnataka’s rich heritage and royal grandeur.",
    },
];

export default destinationsData; 
