const db = require('../db/connection')
const Show = require('../models/show')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))


const main = async () => {
    const shows = 
    [
        {
            "title": "Hunter x Hunter",
            "duration": "2011-2014",
            "plot": "Gon Freecss aspires to become a Hunter, an exceptional being capable of greatness. With his friends and his potential, he seeks for his father who left him when he was younger.",
            "imgURL": "https://m.media-amazon.com/images/I/51wIwhIO6JL._AC_.jpg"
        },
        {
            "title": "Vampire Knight",
            "duration": "2008-",
            "plot": "Vampire Knight tells the story of Yuki Cross. The earliest thing she remembers is being attacked on a snowy night by a vampire, and being rescued by Kaname Kuran, who is also a vampire. The story takes place 10 years after that event, Yuki is now the adopted daughter of the Headmaster of Cross Academy. She and her longtime friend Zero Kiryu keep peace at the academy, making sure no problems arise between the Day Class (humans) and the Night Class (vampires). However, the peace they try to keep is fragile, and personal feelings begin to interrupt their duty.",
            "imgURL": "http://cdn.shopify.com/s/files/1/0630/8509/products/pst2318vk_grande.jpeg?v=1467482965"
        },
        {
            "title": "Tokyo Ghoul",
            "duration": "2014-2018",
            "plot": "A college student is attacked by a ghoul, a being that feeds on human flesh. He later receives an organ transplant from the ghoul, becoming part monster himself.",
            "imgURL": "https://render.fineartamerica.com/images/rendered/default/poster/8/10/break/images/artworkimages/medium/3/tokyo-ghoul-guerrero-leonore.jpg"
        },
        {
            "title": "Dragon Ball Z",
            "duration": "1996-2003",
            "plot": "Dragon Ball Z continues the adventures of Son Goku, who, along with his companions, defend the Earth",
            "imgURL": "https://i.pinimg.com/originals/ed/08/3f/ed083f9a7fa6a588e31324260801eed7.jpg"
        },
        {
            "title": "Elemental Gelade",
            "duration": "2005",
            "plot": "After a routine raid, the rookie sky pirate Coud finds a most unusual cargo in his mates' cargo hold: Ren, an 'Edel Reid', a race prized by humans for granting special combat power to their partners through 'Reacting'. He quickly discovers, however, that Ren is even more prized than he expected. The pirate ship is visited by three members of the Edel Reid Complete Protection Agency 'Arc Aire', who try to purchase her. When Coud refuses, the ship is suddenly attacked by a mysterious force, and Coud's captain charges him with Ren's protection.",
            "imgURL": "https://m.media-amazon.com/images/M/MV5BZDkzZjZlZmItM2E1OC00Y2M3LTljNGUtYzg4ZTUxNGY3MmNhXkEyXkFqcGdeQXVyMTA3OTEyODI1._V1_.jpg"
        },
        {
            "title": "Naruto",
            "duration": "2007-2017",
            "plot": "Naruto Uzumaki, is a loud, hyperactive, adolescent ninja who constantly searches for approval and recognition, as well as to become Hokage, who is acknowledged as the leader and strongest of all ninja in the village.",
            "imgURL": "https://cdn11.bigcommerce.com/s-b72t4x/images/stencil/1280x1280/products/11169/20874/24_1075_Naruto_Group__97803.1415650378.jpg?c=2"
        },
        {
            "title": "Dragon Ball GT",
            "duration": "1998-2000",
            "plot": "With the black stars balls used, goku and CO search the galaxy to retrieve them and restore the earth to its balance before it exlpodes!",
            "imgURL": "https://i.pinimg.com/564x/d5/53/66/d5536643c2fb667f8cad981c0af76a4a.jpg"
        }, 
        {
            "title": "Parasyte",
            "duration": "2014-2015",
            "plot": "A teenager gets infected with a parasite but manages to keep control over it; together they must co-exist and survive.",
            "imgURL": "https://images-na.ssl-images-amazon.com/images/I/81Ajzfd4wjL._AC_SL1500_.jpg"
        }, 
        {
            "title": "My Hero Academia",
            "duration": "2016-",
            "plot": "In a world populated with superhumans, the superhero-loving Izuku Midoriya is without power. However, after the Quirkless dreamer Izuku inherits the powers of the world's best superhero, All Might, his hopes of becoming the top hero are now possible. Once enrolled in the high school for heroes, U.A., Izuku soon discovers being a hero is much more complicated than it appears.",
            "imgURL": "https://images-na.ssl-images-amazon.com/images/I/91kjVOEopVL._AC_SL1500_.jpg"
        }, 
        {
            "title": "Demon Slayer: Kimetsu no Yaiba",
            "duration": "2020-",
            "plot": "A youth begins a quest to fight demons and save his sister after finding his family slaughtered and his sister turned into a demon.",
            "imgURL": "https://images-na.ssl-images-amazon.com/images/I/61Zm2hsRJ0L._AC_SL1024_.jpg"
        },
        {
            "title": "Boys Over Flowers",
            "duration": "1996-1997",
            "plot": "Makino Tsukushi: a girl who comes from a poor family just wants to get through her 2 last years at Eitoku Gakuen, quietly. But once she makes herself known by standing up for her friend to the F4, the 4 most popular, powerful and rich boys at the school.",
            "imgURL": "https://i.pinimg.com/originals/9e/c4/25/9ec425ae13b13c398936765251e27766.jpg"
        },  
        {
            "title": "One Punch Man",
            "duration": "2015-2019",
            "plot": "The story of Saitama, a hero that does it just for fun & can defeat his enemies with a single punch. In a world of superhuman beings, Saitama is a unique hero, he can defeat enemies with a single punch. Follows the life of an average hero who manages to win all of his punches with one punch!",
            "imgURL": "https://images-na.ssl-images-amazon.com/images/I/717aat3l-YL._AC_SL1224_.jpg"
        },
        {
            "title": "Attack on Titan",
            "duration": "2013-",
            "plot": "After his hometown is destroyed and his mother is killed, young Eren Jaeger vows to cleanse the earth of the giant humanoid Titans that have brought humanity to the brink of extinction.",
            "imgURL": "https://images-na.ssl-images-amazon.com/images/I/81dH7-pkjiL._AC_SY679_.jpg"
        }
    ]
    await Show.insertMany(shows)
    console.log("Created shows!")
}
const run = async () => {
    await main()
    db.close()
}

run()