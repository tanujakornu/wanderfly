// src/data.js
export const travelData = [
  {
    id: 1, 
    country: "India",
    countryVideo: "https://videos.pexels.com/video-files/3571264/3571264-hd_1920_1080_30fps.mp4",
    states: [
      {
        name: "Rajasthan", 
        image: "https://s7ap1.scene7.com/is/image/incredibleindia/hawa-mahal-jaipur-rajasthan-city-1-hero?qlt=82&ts=1742200253577",
        cities: [
          {
            name: "Jodhpur",
            image: "https://upload.wikimedia.org/wikipedia/commons/9/99/Mehrangarh_Fort_sanhita.jpg",
            places: [
              { id: 101, name: "Mehrangarh Fort", category: "Attraction", image: "https://i0.wp.com/www.jaipurcitycab.in/blog/wp-content/uploads/2022/12/Mehrangarh-Fort-of-Jodhpur.jpg?fit=1200%2C675&ssl=1", rating: 4.9, description: "One of India's largest forts, offering breathtaking views, museums, and intricate palaces like Moti Mahal and Phool Mahal.", timing: "9:00 AM - 5:00 PM", days: "Open All Days", entryFee: "₹100 (Indians) / ₹600 (Foreigners)" },
              { id: 102, name: "Jaswant Thada", category: "Attraction", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/49/39/6c/jaswant-thada.jpg?w=900&h=500&s=1", rating: 4.7, description: "A serene white marble cenotaph built for Maharaja Jaswant Singh II, often called the 'Taj Mahal of Marwar'.", timing: "9:00 AM - 6:00 PM", days: "Open All Days", entryFee: "₹30" },
              { id: 103, name: "Umaid Bhawan Palace", category: "Attraction", image: "https://www.mindstick.com/blogs/7c8f1ec4-ee5a-4e35-99c5-237472c2e2dd/images/70dec166-dde8-4630-b003-9e62aba44311.jpg", rating: 4.8, description: "A magnificent palace, part luxury hotel and museum, offering a glimpse into royal life.", timing: "10:00 AM - 4:00 PM", days: "Open All Days", entryFee: "₹100 (Museum)" },
              { id: 104, name: "Toorji Ka Jhalra", category: "Attraction", image: "https://s7ap1.scene7.com/is/image/incredibleindia/toorji-ka-jhalra-jodhpur-rajasthan-2-attr-hero?qlt=82&ts=1726660792870", rating: 4.6, description: "A beautifully restored 18th-century stepwell near the city center.", timing: "8:00 AM - 8:00 PM", days: "Open All Days", entryFee: "Free" }
            ]
          },
          {
            name: "Bikaner",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCMT22TZFNja8VEeIm_Nj3jBqbAKKRLXCsHQ&s",
            places: [
              { id: 201, name: "Junagarh Fort", category: "Attraction", image: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqO7WeG1jvkqLeI9auvDEGK0oa6YT2pzkbEr8RcniUih0POwcVnKHB3-UiE526B9pQO6e7E0OA4XvvIE6XV8gkagccdVcESp_uVbreXF22AxD9zBY9lbeQIxFbsxOdgacATrr8=s1360-w1360-h1020-rw", rating: 4.8, description: "A formidable 15th-century fort that was never conquered. It features stunning architecture, intricate stone carvings, and magnificent halls like Anup Mahal.", timing: "10:00 AM - 4:30 PM", days: "Open All Days", entryFee: "₹50" },
              { id: 202, name: "Karni Mata Temple", category: "Attraction", image: "https://cdn1.tripoto.com/media/filter/nl/img/2380291/Image/1706329575_karni_mata_temple_alwar_rajasthan.jpg.webp", rating: 4.6, description: "Famous worldwide as the 'Rat Temple', this unique shrine is home to thousands of sacred rats that are revered and protected by devotees.", timing: "4:00 AM - 10:00 PM", days: "Open All Days", entryFee: "Free" },
              { id: 203, name: "Desert Safari", category: "Attraction", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/50/57/2d/caption.jpg?w=1200&h=700&s=1&cx=1728&cy=1152&chk=v1_c3b95e04b02f1c246e25", rating: 4.9, description: "Experience the magic of the Thar Desert with an exhilarating camel or jeep safari, complete with stunning sunset views over the golden dunes.", timing: "3:00 PM - 8:00 PM", days: "Oct - March", entryFee: "₹1000 - ₹2000 per person" }
            ]
          },
          {
            name: "Jaipur",
            image: "https://s7ap1.scene7.com/is/image/incredibleindia/jal-mahal-jaipur-rajasthan-1-attr-hero?qlt=82&ts=1742162446740",
            places: [
              { id: 301, name: "Amber Palace (Fort)", category: "Attraction", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn5NDXH6We_UGsCMmH6u4iFVmSo1hSdxLzFg&s", rating: 4.9, description: "A UNESCO World Heritage site known for Sheesh Mahal.", timing: "8:00 AM - 6:00 PM", days: "Open All Days", entryFee: "₹200" },
              { id: 302, name: "Hawa Mahal", category: "Attraction", image: "https://miro.medium.com/v2/1*fYA-b-KA9UUqPL2OsDYkQw.png", rating: 4.7, description: "The 'Palace of Breeze'.", timing: "9:00 AM - 5:00 PM", days: "Open All Days", entryFee: "₹50" },
              { id: 303, name: "Nahargarh Fort Sunset", category: "Attraction", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNu3euvlTQU8MpbqlrBKE5JCBMbnSsdKawlA&s", rating: 4.8, description: "Panoramic views of Jaipur.", timing: "10:00 AM - 5:30 PM", days: "Open All Days", entryFee: "₹50" }
            ]
          },
          {
            name: "Alwar",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjZ12i-lzyaQcKkTz-M9fRSuuqMUPiv962WQ&s",
            places: [
              { id: 401, name: "Sariska Tiger Reserve", category: "Attraction", image: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/09/fa/0c/96.jpg", rating: 4.7, description: "Spot tigers and leopards.", timing: "6:00 AM - 10:00 AM & 2:00 PM - 6:00 PM", days: "Tue - Sun (Closed Mon)", entryFee: "₹500" },
              { id: 402, name: "Bhangarh Fort", category: "Attraction", image: "https://s7ap1.scene7.com/is/image/incredibleindia/bhangarh-fort-alwar-rajasthan-1-attr-hero?qlt=82&ts=1726658750443", rating: 4.5, description: "Renowned as one of India's most haunted places.", timing: "6:00 AM - 6:00 PM", days: "Open All Days", entryFee: "₹25" }
            ]
          }
        ]
      },
      {
        name: "Kerala", 
        image: "https://assets.cntraveller.in/photos/65f445fc8411ed4511e9a4c9/master/pass/GettyImages-110051777.jpg",
        cities: [
          {
            name: "Kochi",
            image: "https://assets.cntraveller.in/photos/6780cfd5b30aa614cd78e0fa/master/w_1600%2Cc_limit/Kadamakudy%2520Island%2520by%2520Tropiq%2520Getaways.jpeg",
            places: [
              { id: 501, name: "Chinese Fishing Nets", category: "Attraction", image: "https://static.toiimg.com/thumb/102137286/Chinese-Fishing-Nets-in-Kochi.jpg?width=1200&height=900", rating: 4.5, description: "Iconic fixed mechanical fishing nets hanging outside the coast, a must-see historical sight in Fort Kochi.", timing: "6:00 AM - 8:00 PM", days: "Open All Days", entryFee: "Free" },
              { id: 502, name: "Fort Kochi Beach", category: "Attraction", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkMZc0m_tK3OxdlDjR98YPRQHOwvLsX0sLCQ&s", rating: 4.6, description: "A serene beach lined with coconut trees and colonial-era architecture, perfect for evening walks.", timing: "Open All Day", days: "Open All Days", entryFee: "Free" },
              { id: 503, name: "Paradesi Synagogue", category: "Attraction", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Kochi_Jewish_Synagogue_C.jpg/250px-Kochi_Jewish_Synagogue_C.jpg", rating: 4.7, description: "The oldest active synagogue in the Commonwealth of Nations, featuring beautiful Belgian glass chandeliers.", timing: "10:00 AM - 1:00 PM, 3:00 PM - 5:00 PM", days: "Mon - Sat (Closed Sun)", entryFee: "₹10" }
            ]
          },
          {
            name: "Munnar",
            image: "https://theleafmunnar.com/wp-content/uploads/2024/11/tea-gardens-munnar.jpg",
            places: [
              { id: 601, name: "Eravikulam National Park", category: "Attraction", image: "https://www.keralatourism.org/images/eco-tourism/trekking_thumb/trekking-trails/eravikulam_28072018105517.jpg", rating: 4.8, description: "A protected habitat for the endangered Nilgiri Tahr, offering rolling green hills and amazing trekking trails.", timing: "7:30 AM - 4:00 PM", days: "Tue - Sun (Closed Mon)", entryFee: "₹150" },
              { id: 602, name: "Mattupetty Dam", category: "Attraction", image: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Mattupetty_Dam.jpg", rating: 4.5, description: "A beautiful concrete gravity dam surrounded by lush tea gardens, offering boating and horse riding.", timing: "9:00 AM - 5:00 PM", days: "Open All Days", entryFee: "₹50 (Boating extra)" },
              { id: 603, name: "Tea Museum", category: "Attraction", image: "https://s7ap1.scene7.com/is/image/incredibleindia/tea-factory-&-tea-museum-ooty-tamil-nadu-2-attr-hero?qlt=82&ts=1751441888376", rating: 4.4, description: "Learn about the history of tea plantations in Munnar and see the traditional tea processing methods.", timing: "9:00 AM - 5:00 PM", days: "Mon - Sat (Closed Sun)", entryFee: "₹100" }
            ]
          },
          {
            name: "Alleppey",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSkWbU2aJjSozuT_R_GawyHTPT2LxUF4Qsfy0YQckVCi0KRcEpU86Q00LJ1Vj-CBdChBS-FbO_wPwFfVqslyfPjKZ-Bur0zDWdhEF8OEiz-m6y-KJ-On_zVeTNULfF_kY&s=10&ec=121630528",
            places: [
              { id: 701, name: "Houseboat Cruise", category: "Attraction", image: "https://lakequeenhouseboats.com/wp-content/uploads/2024/12/Premium-Houseboat-in-Alleppey-1.webp", rating: 4.9, description: "A quintessential Kerala experience. Sail through the tranquil backwaters on a traditional Kettuvallam (houseboat).", timing: "12:00 PM (Check-in) to 9:00 AM (Next Day)", days: "Open All Days", entryFee: "₹6000 - ₹15000 per boat (varies by type)" },
              { id: 702, name: "Alappuzha Beach", category: "Attraction", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/20/c8/7a/20190317-150044-largejpg.jpg?w=900&h=-1&s=1", rating: 4.3, description: "A beautiful sandy beach known for the historic Alappuzha Lighthouse and the famous Nehru Trophy Snake Boat Race.", timing: "Open All Day", days: "Open All Days", entryFee: "Free" },
              { id: 703, name: "Pathiramanal Island", category: "Attraction", image: "https://www.keralatourism.org/_next/image/?url=http%3A%2F%2F127.0.0.1%2Fktadmin%2Fimg%2Fpages%2Fmobile%2Fpathiramanal-1721153344_3159fd8a476a98a97f2b.webp&w=3840&q=75", rating: 4.4, description: "A pristine island on the backwaters accessible only by boat, home to rare migratory birds.", timing: "8:00 AM - 6:00 PM", days: "Open All Days", entryFee: "₹250 (Boat transfer)" }
            ]
          },
          {
            name: "Kovalam",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTILXZzbCp8jQeoMSlBPtCzgcy0t7LTpRFaQYa_u_psFG_iwCRar3r2cJvSI-S0U9gm-y9AfcExNWgA8SS706FexrduYP3F1-Qp61sTAnXaMzwPry4Gn9JUxdcvem-gvgtG&s=10&ec=121630528",
            places: [
              { id: 801, name: "Lighthouse Beach", category: "Attraction", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/26/d2/8e/vizhinjam-lighthouse.jpg?w=1200&h=-1&s=1", rating: 4.7, description: "The most famous beach in Kovalam, featuring a 35-meter tall lighthouse that offers panoramic views of the Arabian Sea.", timing: "Open All Day", days: "Open All Days", entryFee: "₹20 (Lighthouse entry)" },
              { id: 802, name: "Hawa Beach", category: "Attraction", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/9a/3a/8b/hawa-beach.jpg?w=1200&h=-1&s=1", rating: 4.5, description: "A crescent-shaped, secluded beach ideal for swimming, sunbathing, and Ayurvedic massages.", timing: "Open All Day", days: "Open All Days", entryFee: "Free" },
              { id: 803, name: "Vizhinjam Rock Cut Cave Temple", category: "Attraction", image: "https://trivandrumtourism.in/images/places-to-visit/headers/vizhinjam-rock-cut-cave-trivandrum-tourism-entry-fee-timings-holidays-reviews-header.jpg", rating: 4.3, description: "An ancient 8th-century rock-cut temple dedicated to Lord Shiva, showcasing incredible historical carvings.", timing: "9:00 AM - 6:00 PM", days: "Open All Days", entryFee: "₹25" }
            ]
          }
        ]
      },
                 {
        name: "Goa", 
        image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800",
        cities: [
          {
            name: "Panaji", 
            image: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQcnCeMm-wTvNZzrecoWkunczZOKJAhPKge1JaTwC9QvCqRkv4WLSetBgGXG5SDQbMFcxUg_uvydAcaM5Ysm1aN2-wQ_YV0AlcdTRILqMVbD3yz025zgK2pZR3UNO6hCW4JPHjMN4wxE02Z&s=19&ec=121630528",
            places: [
              { id: 1301, name: "Latin Quarter Fontainhas", category: "Attraction", image: "https://static2.tripoto.com/media/filter/tst/img/2166627/TripDocument/1629527488_img_2666.jpg.webp", rating: 4.7, description: "A colorful Portuguese-era neighborhood with narrow streets, bright colonial villas, and vibrant art galleries.", timing: "Open All Day", days: "Open All Days", entryFee: "Free" },
              { id: 1302, name: "Mandovi River Cruise", category: "Attraction", image: "https://www.paradisecruises.in/images/uploads/evening-cruise/1-evening-sunset-river-cruise.jpg?v=18", rating: 4.5, description: "A relaxing evening cruise down the Mandovi River offering live Goan music, dancing, and views of Panaji.", timing: "5:30 PM - 7:30 PM", days: "Open All Days", entryFee: "₹300 - ₹500 per person" },
              { id: 1303, name: "Our Lady of Immaculate Conception Church", category: "Attraction", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfd_MGhtUc2BIW0ZpMVGp7_2vO0CaIbAMhCg&s", rating: 4.6, description: "A stunning 16th-century Baroque church located on a hilltop, offering panoramic views of the city.", timing: "9:00 AM - 12:30 PM, 3:00 PM - 6:30 PM", days: "Open All Days", entryFee: "Free" }
            ]
          },
          {
            name: "Old Goa", 
            image: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqWJgqEZPAaNMlOcuOTNBJkRovwl2x4MAoOzL1J44p8XIgdyLVCguvKMVIhdu4i33sK2Vluv3GFf0tCKvAg6vKy_AHNmp_PfQHzMoX3AfOBbjVCbUJzK2kZC4UZiqN_20mOfS070F8YAKE=w810-h468-n-k-no",
            places: [
              { id: 1304, name: "Basilica of Bom Jesus", category: "Attraction", image: "https://s7ap1.scene7.com/is/image/incredibleindia/basilica-of-bom-jesus-goa-2-musthead-hero?qlt=82&ts=1742156651015", rating: 4.8, description: "A UNESCO World Heritage Site and one of the oldest churches in India, housing the mortal remains of St. Francis Xavier.", timing: "9:00 AM - 6:30 PM", days: "Open All Days", entryFee: "Free (₹30 for Photography)" },
              { id: 1305, name: "Se Cathedral", category: "Attraction", image: "https://hblimg.mmtcdn.com/content/hubble/img/goa/mmt/activities/m_activities_goa_se_cathedral_l_400_640.jpg", rating: 4.7, description: "The largest church in Asia, dedicated to St. Catherine, featuring magnificent Portuguese-Gothic architecture.", timing: "7:30 AM - 6:30 PM", days: "Open All Days", entryFee: "Free" },
              { id: 1306, name: "Church of St. Francis of Assisi", category: "Attraction", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKe4rTAextXn1uhehrW6HthMLdSIK30YloyQ&s", rating: 4.5, description: "A beautiful church known for its gilded altars and the attached archaeological museum displaying Portuguese artifacts.", timing: "9:00 AM - 5:30 PM", days: "Open All Days", entryFee: "₹10 (Museum entry)" }
            ]
          },
          {
            name: "Mapusa", 
            image: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwep-Ssi-fIWyZ-uno2l2tWU7q-SOHuebEFz5Zq7tv8d9lPxhRV7mz5wxAsJEWJ5czGltzTCtafclkZJNBn0_-l9iM3aIQXia96hJsx8QErOb5PkzXiZi3pWjaF8x5Wh8onOp4CjGDQ=w810-h468-n-k-no",
            places: [
              { id: 1307, name: "Mapusa Friday Market", category: "Attraction", image: "https://imgmedia.lbb.in/media/2021/01/5ffbbd92a8ea520ab7fae3b3_1610333586658.jpg", rating: 4.4, description: "A famous traditional market where locals from all over Goa come to buy fresh spices, souvenirs, fish, and household goods.", timing: "8:00 AM - 8:00 PM", days: "Open All Days (Busiest on Fridays)", entryFee: "Free" },
              { id: 1308, name: "Bodgeshwar Temple", category: "Attraction", image: "https://www.goaholidayhomes.com/goa-information-images/mapusa-bodgeshwar-temple-303-9.jpg", rating: 4.5, description: "An ancient Hindu temple dedicated to Lord Bodgeshwar, beautifully lit up during the annual Zatra festival in December.", timing: "6:00 AM - 9:00 PM", days: "Open All Days", entryFee: "Free" }
            ]
          }
        ]
      },
          {
        name: "Himachal Pradesh", 
        image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800",
        cities: [
          {
            name: "Shimla", 
            image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800",
            places: [
              { id: 1401, name: "The Ridge & Mall Road", category: "Attraction", image: "https://cdn1.tripoto.com/media/filter/nl/img/2380291/Image/1691668208_christ_church.jpg.webp", rating: 4.6, description: "The iconic pedestrian street and cultural hub of Shimla, offering beautiful views of the mountains and colonial architecture.", timing: "Open All Day", days: "Open All Days", entryFee: "Free" },
              { id: 1402, name: "Kalka - Shimla Toy Train", category: "Attraction", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT58Tq5NGNfpKRmwSYDBCgT_YUDzPkRREw0Hg&s", rating: 4.9, description: "A UNESCO World Heritage narrow-gauge railway offering a scenic 5-hour journey through 102 tunnels and over 800 bridges.", timing: "5:30 AM - 7:00 PM (Train timings vary)", days: "Open All Days", entryFee: "₹20 - ₹400 (Depending on class)" },
              { id: 1410, name: "Jakhoo Temple", category: "Attraction", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1wapTY8E4LjSDx7ncyEFGSrII4JyjrHZcCg&s", rating: 4.7, description: "An ancient temple dedicated to Lord Hanuman, situated on the highest peak in Shimla, offering panoramic views of the city.", timing: "7:00 AM - 8:00 PM", days: "Open All Days", entryFee: "₹10" }
            ]
          },
          {
            name: "Dharamshala", 
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE8QbQz7xJEFfsbQj45TujYLEI706EhTVwWQ&s",
            places: [
              { id: 1404, name: "Tsuglagkhang Complex", category: "Attraction", image: "https://www.kupi.com/kland-storage/images/670x0/30x30/attractions/in/dharamshala/tsuglagkhang-complex-dalai-lama-temple/2f584af4-d69d-4861-b35f-871a5afacc92.webp", rating: 4.8, description: "The official residence of the Dalai Lama. It contains beautiful shrines, temples, and a museum showcasing Tibetan culture.", timing: "8:00 AM - 5:00 PM", days: "Open All Days", entryFee: "Free" },
              { id: 1405, name: "Triund Trek Base", category: "Attraction", image: "https://adventuredharamshala.com/wp-content/uploads/2023/07/camping-in-Dharamshala.png", rating: 4.9, description: "A famous 9 km trek starting point offering breathtaking views of the Dhauladhar ranges. No prior trekking experience required.", timing: "Best started early morning", days: "Open All Days (Weather permitting)", entryFee: "Free" },
              { id: 1411, name: "Bhagsu Waterfall", category: "Attraction", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0f8OIoGMx3bSt92lTh27P0rlI-tj6IUSWGw&s", rating: 4.5, description: "A beautiful cascading waterfall located about 2 km from McLeod Ganj, accessible via a short easy trek through lush greenery.", timing: "7:00 AM - 6:00 PM", days: "Open All Days", entryFee: "Free" }
            ]
          },
          {
            name: "Solan", 
            image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
            places: [
              { id: 1407, name: "Shoolini Mata Temple", category: "Attraction", image: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b1/Maamandir.jpeg/500px-Maamandir.jpeg", rating: 4.5, description: "An ancient and highly revered temple dedicated to Goddess Shoolini, the presiding deity of Solan. Famous for the annual Shoolini Fair.", timing: "6:00 AM - 9:00 PM", days: "Open All Days", entryFee: "Free" },
              { id: 1408, name: "Mohan Meakin Brewery", category: "Attraction", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzqljjfu0a0dt0mE1dzY4zbDKBSHUaalSwIw&s", rating: 4.4, description: "Asia's oldest operating brewery, established in 1855. Offers a glimpse into the historic beer-making process of the British era.", timing: "10:00 AM - 4:00 PM", days: "Mon - Sat (Closed Sun)", entryFee: "₹100 (For tour/tasting approx)" },
              { id: 1412, name: "Jatoli Shiv Temple", category: "Attraction", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlBmSWY5GiJsUb1sgAsztOcRRjrfmyDivhcQ&s", rating: 4.6, description: "Famous for being one of the tallest Shiva temples in Asia, featuring intricate architecture and a massive 12-foot tall Shivling.", timing: "6:00 AM - 8:00 PM", days: "Open All Days", entryFee: "Free" }
            ]
          }
        ]
      },
            {
        name: "Uttarakhand", 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnlFOcL5hIc_-hMIJ6ybhpIjr7U7XQp9kGbA&s",
        cities: [
          {
            name: "Rishikesh", 
            image: "https://s7ap1.scene7.com/is/image/incredibleindia/1-triveni-ghat-rishikesh-uttarakhand-2-city-hero?qlt=82&ts=1726646286991",
            places: [
              { id: 1501, name: "Laxman Jhula", category: "Attraction", image: "https://hideawaycampresort.com/blog/wp-content/uploads/2025/02/laxman-jhula-rishikesh-1.jpg", rating: 4.7, description: "An iconic 450-foot-long hanging bridge over the Ganges river, offering spectacular views of the river and surrounding temples.", timing: "5:00 AM - 8:00 PM", days: "Open All Days", entryFee: "Free" },
              { id: 1502, name: "Triveni Ghat", category: "Attraction", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjpG62HQmsGz6vErqWwdowN7HcNl6gNTsAjQ&s", rating: 4.8, description: "A sacred bathing ghat where the three holy rivers (Ganga, Yamuna, and Saraswati) are believed to meet. Famous for the evening Ganga Aarti.", timing: "Open All Day (Aarti at 6:00 PM)", days: "Open All Days", entryFee: "Free" },
              { id: 1510, name: "Beatles Ashram", category: "Attraction", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/35/f4/a3/ashram-building.jpg?w=900&h=-1&s=1", rating: 4.6, description: "The serene ashram where the iconic band The Beatles stayed in 1968 to learn meditation. Now a peaceful retreat for yoga enthusiasts.", timing: "9:00 AM - 5:00 PM", days: "Open All Days", entryFee: "Free" }
            ]
          },
          {
            name: "Nainital", 
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDDvSDneApKwP2hit-ZvD0Qus7e-GEZIzBiw&s",
            places: [
              { id: 1504, name: "Naini Lake", category: "Attraction", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/2e/b4/5d/nainital-lake.jpg?w=900&h=500&s=1", rating: 4.8, description: "A beautiful crescent-shaped natural freshwater lake surrounded by seven hills. Offers relaxing boating experiences.", timing: "6:00 AM - 6:00 PM", days: "Open All Days", entryFee: "₹150 - ₹250 (Boating charges)" },
              { id: 1505, name: "Naina Devi Temple", category: "Attraction", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZi_1eYMD_0u8JI3o87vJlH7AEm2dhHs-4hQ&s", rating: 4.6, description: "A highly revered Hindu temple located on the northern shore of Naini Lake, dedicated to Goddess Sati.", timing: "6:00 AM - 10:00 PM", days: "Open All Days", entryFee: "Free" },
              { id: 1511, name: "Snow View Point", category: "Attraction", image: "https://nainitaltourism.org.in/images/places-to-visit/headers/snow-view-point-nainital-indian-tourism-entry-fee-timings-holidays-reviews-header.jpg", rating: 4.5, description: "One of the highest points in Nainital, accessible via a scenic cable car ride, offering panoramic views of the snow-capped Himalayas.", timing: "10:00 AM - 5:00 PM", days: "Open All Days", entryFee: "₹100 (Ropeway ticket)" }
            ]
          },
          {
            name: "Mussoorie", 
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiKKXis2GzqPdQn_SPb4latNqGejqJ7WYr6w&s",
            places: [
              { id: 1507, name: "Kempty Falls", category: "Attraction", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkT8Qt_WmggA1CKUyS-ncs8B3wJnCdC8nSVg&s", rating: 4.5, description: "A stunning 40-foot waterfall cascading down from a great height, perfect for taking a refreshing dip or simply enjoying the view.", timing: "8:00 AM - 6:00 PM", days: "Open All Days", entryFee: "₹30" },
              { id: 1508, name: "Gun Hill", category: "Attraction", image: "https://s7ap1.scene7.com/is/image/incredibleindia/gun-hill-top-mussourie-uttarakhand-2-attr-hero?qlt=82&ts=1727352301032", rating: 4.6, description: "The second highest peak in Mussoorie, offering breathtaking views of the Doon Valley and snow-capped Himalayan ranges via a 400m ropeway.", timing: "10:00 AM - 6:00 PM", days: "Open All Days", entryFee: "₹100 (Ropeway ticket)" },
              { id: 1512, name: "Cloud's End", category: "Attraction", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800", rating: 4.7, description: "The highest point in Mussoorie surrounded by thick deodar forests, offering a peaceful walk and spectacular sunset views.", timing: "Open All Day", days: "Open All Days", entryFee: "₹25" }
            ]
          }
        ]
      },
          {
        name: "Ladakh", 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2LBDXW-8JwxMD12ODskkSLUDG2Rsdu1taMA&s",
        cities: [
          {
            name: "Leh", 
            image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800",
            places: [
              { id: 1601, name: "Shanti Stupa", category: "Attraction", image: "https://discoverlehladakh.in/wp-content/uploads/2020/06/Shanti-Stupa-Leh-Ladakh.jpg", rating: 4.8, description: "A magnificent white-domed Buddhist stupa built to promote world peace, offering panoramic sunset views over the Indus Valley.", timing: "5:00 AM - 9:00 PM", days: "Open All Days", entryFee: "Free" },
              { id: 1602, name: "Pangong Tso Lake", category: "Attraction", image: "https://www.lehladakhindia.com/wp-content/uploads/2024/07/pangong-tso-lake.jpeg", rating: 4.9, description: "A breathtaking endorheic lake situated at 14,270 ft, famous for its ever-changing colors ranging from azure to green to blue.", timing: "Open All Day (Best to visit early morning)", days: "May - September (Permit required)", entryFee: "₹25 (Environmental Fee + Inner Line Permit)" },
              { id: 1610, name: "Leh Palace", category: "Attraction", image: "https://s7ap1.scene7.com/is/image/incredibleindia/leh-palace-leh-ladakh-2-musthead-hero?qlt=82&ts=1726668053114", rating: 4.6, description: "A 17th-century former royal palace overlooking the town, modeled after the Potala Palace in Tibet. Currently being restored by the ASI.", timing: "7:00 AM - 4:00 PM", days: "Tue - Sun (Closed Monday)", entryFee: "₹25" }
            ]
          },
          {
            name: "Kargil", 
            image: "https://discoverlehladakh.in/wp-content/uploads/2021/03/Kargil-town-o-Ladakh-at-the-bank-of-Suru-river..jpg",
            places: [
              { id: 1604, name: "Kargil War Memorial", category: "Attraction", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbx00ArIODFKhg3VmKFbNisfABcd0gD6-wjQ&s", rating: 4.9, description: "A deeply moving memorial built by the Indian Army to honor the soldiers who sacrificed their lives during the 1999 Kargil War. Features the famous Tololing peak.", timing: "8:00 AM - 5:00 PM", days: "Open All Days", entryFee: "Free" },
              { id: 1605, name: "Suru Valley", category: "Attraction", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMYngKEaZmzsXDNN27fddvqocIEZEq3IMXKQ&s", rating: 4.6, description: "A stunning, expansive valley formed by the Suru River, offering spectacular views of snow-capped peaks and lush green meadows.", timing: "Open All Day", days: "Open All Days (Best visited May - Oct)", entryFee: "Free" },
              { id: 1611, name: "Mulbekh Monastery", category: "Attraction", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0XoZg_yPuIo6xP4lsvA23HTNCiqWviDjirw&s", rating: 4.7, description: "Famous for housing a 9-meter tall rock-carved statue of Maitreya Buddha, dating back to the 8th century, located on a strategic ancient trade route.", timing: "8:00 AM - 6:00 PM", days: "Open All Days", entryFee: "Free" }
            ]
          }
        ]
      },
           {
        name: "West Bengal", 
        image: "https://www.tourmyindia.com/blog//wp-content/uploads/2024/01/Best-Places-to-Visit-in-West-Bengal-Victoria-Memorial-Kolkata.jpg",
        cities: [
          {
            name: "Kolkata", 
            image: "https://cdn.roadsandkingdoms.com/uploads/2019/01/Nizam_s.jpg?width=2400&quality=85&sharpen=1",
            places: [
              { id: 1701, name: "Victoria Memorial", category: "Attraction", image: "https://images.unsplash.com/photo-1558431382-27e303142255?w=800", rating: 4.7, description: "A massive white marble museum built in memory of Queen Victoria, surrounded by lush gardens and featuring historical galleries.", timing: "10:00 AM - 5:00 PM", days: "Tue - Sun (Closed Monday)", entryFee: "₹20 (Indians) / ₹200 (Foreigners)" },
              { id: 1702, name: "Howrah Bridge", category: "Attraction", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEFL0DGzV5IaDCi7poGI8HEbDStAXoWByl8w&s", rating: 4.8, description: "A historic cantilever bridge over the Hooghly River. One of the longest bridges of its type in the world, and an iconic symbol of Kolkata.", timing: "Open All Day", days: "Open All Days", entryFee: "Free" },
              { id: 1710, name: "Kumartuli (Idol Makers)", category: "Attraction", image: "https://cogindia.art/wp-content/uploads/2026/02/Idol-Makers-Photo-%C2%A9-Dibyangshu-Sarkar.jpg", rating: 4.6, description: "A traditional potters' quarter where artisans have been crafting stunning clay idols for Hindu festivals for over 300 years.", timing: "8:00 AM - 8:00 PM", days: "Open All Days", entryFee: "Free" }
            ]
          },
          {
            name: "Darjeeling", 
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEd_s8VghB9l2qRCm4aP18P_8WRGxbzL-Slg&s",
            places: [
              { id: 1704, name: "Tiger Hill Sunrise", category: "Attraction", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo3jjB6SzV6RAIHxWcJx_pI8Rgym6gC7by3w&s", rating: 4.8, description: "The highest point in Darjeeling, famous for offering breathtaking panoramic views of Mount Kanchenjunga and other Himalayan peaks at dawn.", timing: "3:30 AM - 6:30 AM (Jeep rides start at 4:00 AM)", days: "Open All Days (Weather permitting)", entryFee: "₹25 (Entry) / ₹1500-₹2500 (Shared Jeep ride)" },
              { id: 1705, name: "Darjeeling Himalayan Railway", category: "Attraction", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/0e/5b/5e/darjeeling-himalayan.jpg?w=800&h=-1&s=1", rating: 4.9, description: "A UNESCO World Heritage narrow-gauge railway. The iconic 'Toy Train' takes you on a scenic 88km journey through breathtaking mountain terrain.", timing: "8:00 AM - 4:00 PM (Train timings vary)", days: "Open All Days", entryFee: "₹1000 - ₹1500 (Depending on class and route)" },
              { id: 1711, name: "Japanese Peace Pagoda", category: "Attraction", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/a3/25/13/japanese-peace-pagoda.jpg?w=1200&h=-1&s=1", rating: 4.7, description: "A beautiful white pagoda built by Japanese monks to promote world peace, offering stunning views of the town and mountains.", timing: "5:00 AM - 7:00 PM", days: "Open All Days", entryFee: "Free" }
            ]
          },
          {
            name: "Digha", 
            image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
            places: [
              { id: 1707, name: "Digha Sea Beach", category: "Attraction", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr1gVOvTd35Oz6K7d2Ey1emusSdh3RcHvxzA&s", rating: 4.4, description: "A wide, flat, sandy beach along the Bay of Bengal, known for its shallow waters perfect for swimming and beautiful sunsets.", timing: "Open All Day", days: "Open All Days", entryFee: "Free" },
              { id: 1708, name: "Marine Aquarium & Regional Centre", category: "Attraction", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8Z6j7QRO1Bwrb9mqjWixMB1mMHfsCiOhq2g&s", rating: 4.3, description: "A popular tourist spot housing a variety of marine life from the Bay of Bengal, including sharks, sea turtles, and colorful fish.", timing: "10:00 AM - 6:00 PM", days: "Open All Days (Closed on Mondays)", entryFee: "₹20" },
              { id: 1712, name: "Digha Science Centre", category: "Attraction", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmT7dz4wZRg9RNb0nftAVh7w01wjALFmKLlA&s", rating: 4.5, description: "An educational center featuring interactive science exhibits, a public park, and a dinosaur park, great for families.", timing: "11:00 AM - 7:00 PM", days: "Open All Days (Closed on Mondays)", entryFee: "₹15" }
            ]
          }
        ]
      },
            {
        name: "Tamil Nadu", 
        image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800",
        cities: [
          {
            name: "Madurai", 
            image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800",
            places: [
              { id: 1801, name: "Meenakshi Amman Temple", category: "Attraction", image: "https://c8.alamy.com/comp/2C75CY6/madurai-meenakshi-amman-temple-south-india-2C75CY6.jpg", rating: 4.9, description: "An ancient and breathtaking Dravidian-style temple dedicated to Goddess Meenakshi, famous for its towering, colorfully sculpted gopurams (gateway towers).", timing: "9:00 AM - 1:00 PM, 4:00 PM - 9:30 PM", days: "Open All Days", entryFee: "₹50 (Special Darshan)" },
              { id: 1802, name: "Thirumalai Nayakkar Mahal", category: "Attraction", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/a9/5a/ff/patio-central.jpg?w=900&h=500&s=1", rating: 4.6, description: "A stunning 17th-century palace built by King Thirumalai Nayak, showcasing a beautiful fusion of Dravidian and Islamic architectural styles.", timing: "9:00 AM - 5:00 PM", days: "Open All Days", entryFee: "₹10" },
              { id: 1810, name: "Gandhi Memorial Museum", category: "Attraction", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/7e/8a/77/glowny-budynek.jpg?w=1200&h=1200&s=1", rating: 4.5, description: "Housed in the historic Tamukkam Palace, this museum displays artifacts relating to Mahatma Gandhi and the rich history of Madurai.", timing: "10:00 AM - 1:00 PM, 2:00 PM - 5:45 PM", days: "Mon - Sat (Closed Sun)", entryFee: "₹5" }
            ]
          },
          {
            name: "Vellore", 
            image: "https://oneday.travel/wp-content/uploads/one-day-vellore-sightseeing-tour-package-by-cab-header.jpg",
            places: [
              { id: 1804, name: "Vellore Fort", category: "Attraction", image: "https://www.trawell.in/admin/images/upload/548011903Vellore_Fort_Main.jpg", rating: 4.5, description: "A massive 16th-century fort built by the Vijayanagara kings, featuring a grand moat, robust ramparts, and ancient intricate architecture.", timing: "8:30 AM - 5:30 PM", days: "Open All Days", entryFee: "₹5" },
              { id: 1805, name: "Sripuram Golden Temple", category: "Attraction", image: "https://res.cloudinary.com/dyiffrkzh/image/upload/c_fill,f_auto,fl_progressive.strip_profile,g_center,h_400,q_auto,w_700/v1680856425/bbj/juw0eqxuv9bti8tvkqho.jpg", rating: 4.7, description: "A breathtaking spiritual park situated at the foot of a small hill range, featuring a stunning temple structure covered entirely in real gold leaf.", timing: "8:00 AM - 8:00 PM", days: "Open All Days", entryFee: "₹250 (Includes maintenance)" },
              { id: 1811, name: "Vellore Government Museum", category: "Attraction", image: "https://cdn.tripuntold.com/media/photos/location/2019/01/08/9e7fc013-e929-48df-bfad-e45d588c396f.jpg", rating: 4.4, description: "Located inside the fort, this museum houses a great collection of ancient artifacts, rare bronze statues, and stone sculptures dating back to the Pallava period.", timing: "9:00 AM - 5:00 PM", days: "Fri - Wed (Closed Thu)", entryFee: "₹5" }
            ]
          },
          {
            name: "Coimbatore", 
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRskfZBEfNp2ykWaDOvh6E_nkGmHQ_US6r4WQ&s",
            places: [
              { id: 1807, name: "Marudhamalai Temple", category: "Attraction", image: "https://d3sftlgbtusmnv.cloudfront.net/blog/wp-content/uploads/2024/11/Maruthamalai-Temple-Cover-Photo-840x425.jpg", rating: 4.6, description: "A highly revered hilltop temple dedicated to Lord Murugan, accessible via a scenic flight of steps surrounded by lush greenery.", timing: "6:00 AM - 8:30 PM", days: "Open All Days", entryFee: "Free" },
              { id: 1808, name: "Siruvani Waterfalls", category: "Attraction", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/8c/ea/fe/siruvani-waterfalls.jpg?w=1200&h=1200&s=1", rating: 4.7, description: "A stunning waterfall famous for having the sweetest tasting water in the region, originating from the Siruvani Hills.", timing: "8:00 AM - 5:00 PM", days: "Open All Days", entryFee: "₹50 (Entry/Transport to falls)" },
              { id: 1812, name: "Dhyanalinga Temple", category: "Attraction", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/58/71/56/dhyanalinga-temple.jpg?w=800&h=500&s=1", rating: 4.8, description: "A massive meditative dome at the Isha Yoga Center, designed to allow anyone to experience deep meditativeness regardless of their religious background.", timing: "6:00 AM - 8:00 PM", days: "Open All Days", entryFee: "Free" }
            ]
          }
        ]
      },
            {
        name: "Andhra Pradesh", 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW34hYsrQgsEOWyK47p0efErx2z75DP6XHAw&s",
        cities: [
          {
            name: "Visakhapatnam (Vizag)", 
            image: "https://ik.imagekit.io/shortpedia/Voices/wp-content/uploads/2021/07/andhra-pradesh-1200x900-1.jpg",
            places: [
              { id: 1901, name: "RK Beach & Submarine Museum", category: "Attraction", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIEbKYT537cwwAAWFm_IEOVN4WkRGADcgBAw&s", rating: 4.7, description: "A popular beach featuring the INS Kurusura, a real submarine turned into a museum showcasing maritime history and aquatic life.", timing: "9:00 AM - 5:00 PM (Museum)", days: "Open All Days (Closed Monday for Museum)", entryFee: "₹40 (Museum), Beach is Free" },
              { id: 1902, name: "Kailasagiri Hill Park", category: "Attraction", image: "https://newsmeter.in/h-upload/2022/12/06/334331-whatsapp-image-2022-12-06-at-80938-am.webp", rating: 4.6, description: "A stunning hilltop park offering panoramic views of the Bay of Bengal, accessible via a scenic ropeway ride.", timing: "9:00 AM - 8:30 PM", days: "Open All Days", entryFee: "₹100 (Ropeway both ways)" },
              { id: 1903, name: "Bheemli Beach", category: "Attraction", image: "https://hblimg.mmtcdn.com/content/hubble/img/vijayawada_imgs/mmt/activities/m_Bheemili_beach_3_l_476_611.jpg", rating: 4.8, description: "One of the oldest beaches in Andhra Pradesh, known for its peaceful environment, pristine sands, and the historic Dutch cemetery nearby.", timing: "Open All Day", days: "Open All Days", entryFee: "Free" }
            ]
          },
          {
            name: "Vijayawada", 
            image: "https://img.staticmb.com/mbcontent/images/crop/uploads/2023/4/posh-areas-in-vijayawada_0_1200.jpg.webp",
            places: [
              { id: 1904, name: "Kanaka Durga Temple", category: "Attraction", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-LHLU3FgacEmGg6wBYEUFm2NvtYVjJBAV-A&s", rating: 4.8, description: "A highly revered Hindu temple dedicated to Goddess Durga, situated on the Indrakeeladri hill overlooking the Krishna River.", timing: "5:00 AM - 9:00 PM", days: "Open All Days", entryFee: "Free (Special Darshan ₹50)" },
              { id: 1905, name: "Bhavani Island", category: "Attraction", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsCna6yLLqSO8WGB2eQVmpa9-bogDGszkoDA&s", rating: 4.5, description: "A picturesque island located in the Krishna River, offering water sports, boat rides, and peaceful picnic spots.", timing: "8:00 AM - 5:00 PM", days: "Open All Days", entryFee: "₹50 (Boat transfer)" },
              { id: 1910, name: "Undavalli Caves", category: "Attraction", image: "https://s7ap1.scene7.com/is/image/incredibleindia/1-undavalli-caves-guntur-andhra-pradesh-attr-hero?qlt=82&ts=1726743723061", rating: 4.6, description: "A famous 4th-century rock-cut cave temple carved out of solid sandstone, featuring stunning ancient Indian rock-cut architecture.", timing: "9:00 AM - 5:00 PM", days: "Open All Days", entryFee: "₹25" }
            ]
          },
          {
            name: "Tirupati", 
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhoF4yk-TDrzABYMHQmsLep8H3XjPy4CWrDw&s",
            places: [
              { id: 1907, name: "Tirumala Venkateswara Temple", category: "Attraction", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhuU-QCO6aHeSUMcGiG3NDE680qLxPPiry0Q&s", rating: 4.9, description: "One of the most famous temples in the world, dedicated to Lord Venkateswara, situated on the seven peaks of Tirumala Hills.", timing: "3:00 AM - 12:00 AM", days: "Open All Days", entryFee: "Free (Special Darshan ₹300)" },
              { id: 1908, name: "Sri Padmavathi Ammavari Temple", category: "Attraction", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0R4BhZxYBUvVIusqUsVlKLiCTDe0HkgcbfQ&s", rating: 4.8, description: "An ancient and highly revered temple dedicated to Goddess Padmavathi, located at the foot of the Tirumala hills.", timing: "8:30 AM - 8:00 PM", days: "Open All Days", entryFee: "Free" },
              { id: 1909, name: "Silathoranam", category: "Attraction", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/e4/0e/d2/arch.jpg?w=1200&h=-1&s=1", rating: 4.7, description: "A natural rock arch formation located on the Tirumala Hills, geologically estimated to be millions of years old and considered a sacred site.", timing: "6:00 AM - 6:00 PM", days: "Open All Days", entryFee: "Free" }
            ]
          }
        ]
      }
    ]
  }
];