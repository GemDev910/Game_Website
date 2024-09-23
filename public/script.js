
const characters = [
    { 
        name: "Trailblazer", 
        image: "assets/trailblazer.webp", 
        additionalInfo: "A boy decides to travel with the Astral Express to eliminate the threat of the Stellaron", 
        faction: "Astral Express", 
        element: {
            name: "Imaginary",
            image: "assets/Type_Imaginary.webp"
        },
        path: {
            name: "Harmony",
            image: "assets/Path_Harmony.webp"
        }
    },
    { 
        name: "Kafka", 
        image: "assets/kafka.webp", 
        additionalInfo: "On the Interastral Peace Corporation's wanted list, Kafka's record only shows her name and a note about her 'interest in collecting coats.' Little is known about this Stellaron Hunter aside from her being one of 'Destiny's Slave' Elio's most trusted members. In order to achieve Elio's envisioned future, Kafka gets to work.", 
        faction: "Stellaron Hunter", 
        element: {
            name: "Lightning",
            image: "assets/Type_Lightning.webp"
        },
        path: {
            name: "Nihility",
            image: "assets/Path_Nihility.webp"
        }
    },
    { 
        name: "Silver Wolf", 
        image: "assets/silver_wolf.webp", 
        additionalInfo: "The universe is just another game to this super hacker No matter how thorny the defense system Silver Wolf can crack it with ease Her hacking battle with Screwllum of the Genius Society has become stuff of legends in the hacking world How many more levels are there to beat in the universe Silver Wolf looks forward to finding out", 
        faction: "Stellaron Hunter", 
        element: {
            name: "Quantum",
            image: "assets/Type_Quantum.webp"
        },
        path: {
            name: "Nihility",
            image: "assets/Path_Nihility.webp"
        }
    },
    { 
        name: "Lynx", 
        image: "assets/lynx.webp", 
        additionalInfo: "The youngest daughter of the Landau family and one of Belobogs best extreme environments explorers She is highly capable of action despite her apparent lack of motivation She only appears introverted and lazy to avoid unnecessary socialization As for what counts as unnecessary socialization Um arent all socialization unnecessary", 
        faction: "Belobog", 
        element: {
            name: "Quantum",
            image: "assets/Type_Quantum.webp"
        },
        path: {
            name: "Abundance",
            image: "assets/Path_Abundance.webp"
        }
    },
    { 
        name: "Xueyi", 
        image: "assets/xueyi.webp", 
        additionalInfo: "One of the judges of the Ten Lords Commission on the Luofu She is in charge of detention among the four judges of detention interrogation incarceration and punishment With iron chain and Mara Sunder Awl in hand in tireless pursuit of recidivists she will forthwith ensnare and subdue them all The mortal coil of her past being has been reduced to ashes She is reanimated via a puppet body For each villain she captures she gets in return half a day in the world of the living", 
        faction: "Xianzhou Alliance", 
        element: {
            name: "Quantum",
            image: "assets/Type_Quantum.webp"
        },
        path: {
            name: "Destruction",
            image: "assets/Path_Destruction.webp"
        }
    },
   
 
    { 
        name: "Hanya", 
        image: "assets/hanya.webp", 
        additionalInfo: "One of the judges of the Ten Lords Commission on the Luofu She is in charge of interrogation among the four judges of detention interrogation incarceration and punishment She is in charge of discerning the sins of criminals and using her Oracle Brush to write down karmic punishments to be meted out Since her daily work relies heavily on oneiromancy she has been constantly struck by a tremendous influx of maratainted karmic information and grown detached from worldly matters Only when in the presence of her sister Xueyi does she reveal a glimpse of her tender nature", 
        faction: "Xianzhou Alliance", 
        element: {
            name: "Physical",
            image: "assets/Type_Physical.webp"
        },
        path: {
            name: "Harmony",
            image: "assets/Path_Harmony.webp"
        }
    },
    { 
        name: "Yukong", 
        image: "assets/yukong.webp", 
        additionalInfo: "The Xianzhou Luofus Head of the Sky Faring Commission is gentle yet seasoned and authoritative Having been a pilot since young she had become the commissions head with her outstanding combat achievements yet she no longer flies due to a particularly brutal battle Now her shine had already dimmed as she shifted her focus to official duties but she is always seen guiding the course of the Luofu", 
        faction: "Xianzhou Alliance", 
        element: {
            name: "Imaginary",
            image: "assets/Type_Imaginary.webp"
        },
        path: {
            name: "Harmony",
            image: "assets/Path_Harmony.webp"
        }
    },
    { 
        name: "Guinafen", 
        image: "assets/guinafen.webp", 
        additionalInfo: "An outworlder who ended up residing on the Xianzhou by accident She is now a passionate and vivacious street performer With her real name being Guinevere Guinaifen is the Xianzhou name given to her by her good friend Sushang Faced with a whole new life on the Luofu and relying on her adoration of Xianzhou culture Guinaifen quickly learned skills that would keep her clothed and fed such as slurping noodles in a handstand smashing slabs without harming the people it was placed upon catching bullets with bare hands and so on", 
        faction: "Xianzhou Alliance", 
        element: {
            name: "Fire",
            image: "assets/Type_Fire.webp"
        },
        path: {
            name: "Nihility",
            image: "assets/Path_Nihility.webp"
        }
    },
    { 
        name: "March 7th", 
        image: "assets/march_7th_preservation.webp", 
        element: { name: "Ice", image: "assets/Type_Ice.webp" }, 
        path: { name: "Preservation", image: "assets/Path_Preservation.webp" }, 
        faction: "Astral Express", 
        additionalInfo: "A spirited and quirky young girl who is into all the things girls her age are interested in, such as taking photosShe was awakened from a piece of drifting eternal ice, only to find that she knows nothing about herself or her pastThough initially feeling dejected she decided to name herself after the date of her rebirth And thus on that day March 7th was born"
    },
    { 
        name: "Dan Heng", 
        image: "assets/dan_heng.webp", 
        element: { name: "Wind", image: "assets/Type_Wind.webp" }, 
        path: { name: "The Hunt", image: "assets/Path_The_Hunt.webp" }, 
        faction: "Astral Express", 
        additionalInfo: "A cold and reserved young man who wields a spear known as Cloud-Piercer. He acts as the Express guard on its long trailblazing expedition Dan Heng never talks much about his past. In fact he joined the Express Crew to escape from a past of his own making.But can the Express really help him outrun his past"
    },
    { 
        name: "Himeko", 
        image: "assets/himeko.webp", 
        element: { name: "Fire", image: "assets/Type_Fire.webp" }, 
        path: { name: "Destruction", image: "assets/Path_Destruction.webp" }, 
        faction: "Astral Express", 
        additionalInfo: "An adventurous scientist who encountered the Astral Express as a young woman when it got stranded in her homeworld Years later when Himeko finally repaired the Express and began her journey into the stars she realized that this is only the beginning On her journey to trailblaze new worlds she would need many more companions And while they may have different destinations they all gaze at the same starry sky"
    },
    { 
        name: "Welt", 
        image: "assets/welt.webp", 
        element: { name: "Imaginary", image: "assets/Type_Imaginary.webp" }, 
        path: { name: "Nihility", image: "assets/Path_Nihility.webp" }, 
        faction: "Astral Express", 
        additionalInfo: "The wise and sophisticated former Anti-Entropy Sovereign who inherits the name of the world — Welt He has saved Earth from annihilation time and time again After the incident with St Fountain came to a close Welt had no choice but to venture with the initiator of the incident to the other side of the portal Perhaps even he didn't expect the new journey nor companions that awaited him there"
    },
    { 
        name: "Bronya", 
        image: "assets/bronya.webp", 
        element: { name: "Wind", image: "assets/Type_Wind.webp" }, 
        path: { name: "Harmony", image: "assets/Path_Harmony.webp" }, 
        faction: "Belobog", 
        additionalInfo: "Heir to the Supreme Guardian of Belobog she is the young and capable commander of the Silvermane Guards Bronya received a rigorous education from an early age and as such possesses the grace and affinity as expected of an heir However after witnessing the abysmal conditions in the Underworld seeds of doubt begin growing in the mind of Belobogs future leader Can all the training Ive received really help me lead the people to the lives they want"
    },
    { 
        name: "Seele", 
        image: "assets/seele.webp", 
        element: { name: "Quantum", image: "assets/Type_Quantum.webp" }, 
        path: { name: "The Hunt", image: "assets/Path_The_Hunt.webp" }, 
        faction: "Belobog", 
        additionalInfo: "A spirited and valiant member of Wildfire who grew up in the perilous Underworld of Belobog She is accustomed to being on her own The protectors and the protected the oppressors and the oppressed The world Seele grew up knowing was just a simple dichotomy That is until that girl appeared"
    },
    { 
        name: "Clara", 
        image: "assets/clara.webp", 
        element: { name: "Physical", image: "assets/Type_Physical.webp" }, 
        path: { name: "Destruction", image: "assets/Path_Destruction.webp" }, 
        faction: "Belobog", 
        additionalInfo: "A young girl raised by a robot Her perceptiveness and tenacity are far beyond her years For Clara Svarogs logical calculations are the laws of the world and are infallible That is until she realizes that the results from the calculations dont always necessarily bring joy to everyone The once shy little girl then decides to cast aside her timidness"
    },
    { 
        name: "Gepard", 
        image: "assets/gepard.webp", 
        element: { name: "Ice", image: "assets/Type_Ice.webp" }, 
        path: { name: "Preservation", image: "assets/Path_Preservation.webp" }, 
        faction: "Belobog", 
        additionalInfo: "The honorable and upstanding captain of the Silvermane Guards who bears the noble Landau family name In the frostwhipped city of Belobog life can still go on in normality This is in no small part thanks to Gepard and his Silvermane Guards who protect the peace of everyday life"
    },
    { 
        name: "Yanqing", 
        image: "assets/yanqing.webp", 
        element: { name: "Ice", image: "assets/Type_Ice.webp" }, 
        path: { name: "The Hunt", image: "assets/Path_The_Hunt.webp" }, 
        faction: "Xianzhou Alliance", 
        additionalInfo: "The spirited lieutenant of the Xianzhou Luofu and its most proficient swordsman He was born for the sword and is obsessed with it Whenever a sword rests in Yanqing's hand none would dare underestimate this genius still in the early days of his youth Perhaps the only thing capable of dulling his treasured blade's sharp edge is time"
    },
    { 
        name: "Natasha", 
        image: "assets/natasha.webp", 
        element: { name: "Physical", image: "assets/Type_Physical.webp" }, 
        path: { name: "Abundance", image: "assets/Path_Abundance.webp" }, 
        faction: "Belobog", 
        additionalInfo: "A fastidious doctor who always wears an enigmatic smile In the Underworld where medical resources are scarce Natasha is one of the very few doctors whom the people can turn to Even the rambunctious Hook would politely greet her Hi big sis Natasha"
    },
    { 
        name: "Bailu", 
        image: "assets/bailu.webp", 
        element: { name: "Lightning", image: "assets/Type_Lightning.webp" }, 
        path: { name: "Abundance", image: "assets/Path_Abundance.webp" }, 
        faction: "Xianzhou Alliance", 
        additionalInfo: "A vivacious young lady of the Vidyadhara race she is known as the Healer Lady due to her expertise with medicine She often dishes out unorthodox prescriptions such as Stay well hydrated and Get a good nights rest Bailu cannot bear to see people suffer and thats why youll see her with her eyes shut tightly as she cures ailments As long as theyre cured thats all that matters right"
    },
    { 
        name: "Herta", 
        image: "assets/herta.webp", 
        element: { name: "Ice", image: "assets/Type_Ice.webp" }, 
        path: { name: "Erudition", image: "assets/Path_Erudition.webp" }, 
        faction: "Herta Space Station", 
        additionalInfo: "Herta space stations true master As the human with the highest IQ on the Blue she only does what shes interested in dropping projects the moment she loses interest the best example being the space station She typically appears in the form of a remote controlled puppet Its about seventy percent similar to how I looked as a child — Herta"
    },
    { 
        name: "Luocha", 
        image: "assets/luocha.webp", 
        element: { name: "Imaginary", image: "assets/Type_Imaginary.webp" }, 
        path: { name: "Abundance", image: "assets/Path_Abundance.webp" }, 
        faction: "Xianzhou Alliance", 
        additionalInfo: "An elegant and handsome blond young man who carries a giant coffin on his back As an intergalactic merchant he was unfortunately caught in the Xianzhou Luofus Stellaron crisis And that is how he found his mastery of medicine to come in handy"
    },
    { 
        name: "Pela", 
        image: "assets/pela.webp", 
        element: { name: "Ice", image: "assets/Type_Ice.webp" }, 
        path: { name: "Nihility", image: "assets/Path_Nihility.webp" }, 
        faction: "Belobog", 
        additionalInfo: "The meticulous Intelligence Officer of the Silvermane Guards While young she is undeniably brilliant Whether it relates to maneuvering troops distributing supplies or analyzing terrain Pela can answer any problems with calm certainty As for her phone case It has nothing to do with work captain"
    },
    { 
        name: "Sampo", 
        image: "assets/sampo.webp", 
        element: { name: "Wind", image: "assets/Type_Wind.webp" }, 
        path: { name: "Nihility", image: "assets/Path_Nihility.webp" }, 
        faction: "Belobog", 
        additionalInfo: "A silver tongued salesman Where there is profit to be made you can be sure Sampo is nearby The information that only Sampo possesses makes it hard not to approach him for help but becoming his customer is not necessarily a good thing After all customers can quickly turn into commodities for the right price"
    },
    { 
        name: "Hook", 
        image: "assets/hook.webp", 
        element: { name: "Fire", image: "assets/Type_Fire.webp" }, 
        path: { name: "Destruction", image: "assets/Path_Destruction.webp" }, 
        faction: "Belobog", 
        additionalInfo: "Head of the adventure squad The Moles she calls herself Pitch Dark Hook the Great She doesnt like to be called a kid and believes she can handle things herself without any help from adults Adults adventure into the Fragmentum Mr Sampo adventures on the surface and patients take their risky adventure seeking treatment from Natasha Under the leadership of Hook children can also have their own adventures"
    },
    { 
        name: "Asta", 
        image: "assets/asta.webp", 
        element: { name: "Fire", image: "assets/Type_Fire.webp" }, 
        path: { name: "Harmony", image: "assets/Path_Harmony.webp" }, 
        faction: "Herta Space Station", 
        additionalInfo: "A fiercely inquisitive and energetic young girl She is the Lead Researcher of the space station Herta Whether it is managing opinionated staff or courteously but firmly responding to the Intelligentsia Guilds devious demands Asta handles it all effortlessly After all commanding a space station is much easier than taking over the family business"
    },
    { 
        name: "Arlan", 
        image: "assets/arlan.webp", 
        element: { name: "Lightning", image: "assets/Type_Lightning.webp" }, 
        path: { name: "Destruction", image: "assets/Path_Destruction.webp" }, 
        faction: "Herta Space Station", 
        additionalInfo: "The inarticulate head of the Herta space stations Security Department While scientific research is beyond his understanding Arlan is willing to risk his life to protect the staff who value research so very much He is used to pain and wears his scars like badges of honor Only when holding Peppy does the boy let down his guard and show a rare smile"
    },
    { 
        name: "Serval", 
        image: "assets/serval.webp", 
        element: { name: "Lightning", image: "assets/Type_Lightning.webp" }, 
        path: { name: "Erudition", image: "assets/Path_Erudition.webp" }, 
        faction: "Belobog", 
        additionalInfo: "The free and rebellious eldest daughter of the Landau family Once a close friend of Cocolias she is now a mechanic purely because she likes this job In the Everwinterstricken Belobog she opened a workshop called Neverstop that puts business on hold from time to time for outdoor rock n roll performances And should anyone ask her about the workshops profits This is just a hobby dear Im not short on money"
    },
    { 
        name: "Sushang", 
        image: "assets/sushang.webp", 
        element: { name: "Physical", image: "assets/Type_Physical.webp" }, 
        path: { name: "The Hunt", image: "assets/Path_The_Hunt.webp" }, 
        faction: "Xianzhou Alliance", 
        additionalInfo: "A naive and enthusiastic newcomer to the Cloud Knights who wields a greatsword She yearns for the historic legends of the Cloud Knights and is eager to become such a legendary figure herself As such Sushang firmly believes in the philosophies be eager to help those in need do one good deed a day and reflect on oneself three times a day leading her to busy days full of helping others"
    },
    { 
        name: "Tingyun", 
        image: "assets/tingyun.webp", 
        element: { name: "Lightning", image: "assets/Type_Lightning.webp" }, 
        path: { name: "Harmony", image: "assets/Path_Harmony.webp" }, 
        faction: "Xianzhou Alliance", 
        additionalInfo: "A silver tongued foxian girl Tingyun is the Head Representative of the Whistling Flames a merchant guild officially approved by the Sky Faring Commission She has such a way with words that often leaves her audience eagerly waiting for more of her captivating tales As a result of her supervision the Xianzhou trade fairs are now known throughout the cosmos Try ones best to avoid conflict when possible and persuade those who can be persuaded thats Tingyuns motto"
    },
    { 
        name: "Blade", 
        image: "assets/blade.webp", 
        element: { name: "Wind", image: "assets/Type_Wind.webp" }, 
        path: { name: "Destruction", image: "assets/Path_Destruction.webp" }, 
        faction: "Stellaron Hunter", 
        additionalInfo: "A swordsman who abandoned his body to become a blade Birth name unknown He pledges loyalty to Destinys Slave and possesses a terrifying selfhealing ability Blade wields an ancient sword riddled with cracks just like his body and his mind"
    },
    { 
        name: "Jing Yuan", 
        image: "assets/jing_yuan.webp", 
        element: { name: "Lightning", image: "assets/Type_Lightning.webp" }, 
        path: { name: "Erudition", image: "assets/Path_Erudition.webp" }, 
        faction: "Xianzhou Alliance", 
        additionalInfo: "The Divine Foresight one of the Seven Arbiter Generals Although his appearance may be one of indolence he is more meticulous than seemingly meets the eye He does not consider saving a situation from the brink of disaster to be a show of wisdom and is thus fastidious with routine affairs to avoid any potential problems Due to his careful management Xianzhou has enjoyed many years of peace with Jing Yuans seemingly lazy demeanor having earned him the moniker of the Dozing General"
    },
    { 
        name: "Argenti", 
        image: "assets/argenti.webp", 
        element: { name: "Physical", image: "assets/Type_Physical.webp" }, 
        path: { name: "Erudition", image: "assets/Path_Erudition.webp" }, 
        faction: "Cosmic", 
        additionalInfo: "A paragon knight of the Knights of Beauty He embodies righteousness and honor possessing an admirable nobility As a solitary wanderer in the cosmos he wholeheartedly embraces the principles of Beauty Upholding the honor of beauty in the universe has been Argentis sacred duty From the very beginning he approached this duty with piety and unwavering conviction"
    },
    { 
        name: "Luka", 
        image: "assets/luka.webp", 
        element: { name: "Physical", image: "assets/Type_Physical.webp" }, 
        path: { name: "Nihility", image: "assets/Path_Nihility.webp" }, 
        faction: "Belobog", 
        additionalInfo: "An optimistic and carefree fighter with a mechanical arm Skilled in mixed martial arts and is a Wildfire member From the fight cage to the battlefield and from a fighter to a warrior Luka uses his strength to protect the people of the Underworld He wishes to bring hope to others precisely because he had experienced despair himself"
    },
    { 
        name: "Topaz& Numby", 
        image: "assets/topaz.webp", 
        element: { name: "Fire", image: "assets/Type_Fire.webp" }, 
        path: { name: "The Hunt", image: "assets/Path_The_Hunt.webp" }, 
        faction: "Interastral Peace Corporation", 
        additionalInfo: "Topaz Senior Manager of the Strategic Investment Department in the Interastral Peace Corporation and leader of the Special Debts Picket Team Already a member of the Ten Stonehearts at a young age Topazs core stone is the topaz of debt retrieval Her partner the Warp Trotter Numby is also capable of acutely perceiving where riches are located It can even perform jobs involving security debt collection and actuarial sciences Presently they are traversing the cosmos together chasing down various debts and liabilities that negatively influence the IPCs commercial ventures"
    },
    { 
        name: "Qingque", 
        image: "assets/Qingque.webp", 
        element: { name: "Quantum", image: "assets/Type_Quantum.webp" }, 
        path: { name: "Erudition", image: "assets/Path_Erudition.webp" }, 
        faction: "Xianzhou Alliance", 
        additionalInfo: "An ordinary diviner at the Divination Commission She would never slack off in slacking off Following her parents wishes Qingque qualified for the Divination Commission but the relaxing post she was expecting was in fact a brutal high intensity workplace After several years of work Qingque has honed her skills no matter which department shes transferred to shes still the lowest leveled diviner She would browse books and play ancient tile games to wile away the hours What more could one ask for than a life like this"
    },
    { 
        name: "Fu Xuan", 
        image: "assets/fu_xuan.webp", 
        element: { name: "Quantum", image: "assets/Type_Quantum.webp" }, 
        path: { name: "Preservation", image: "assets/Path_Preservation.webp" }, 
        faction: "Xianzhou Alliance", 
        additionalInfo: "The head of the Xianzhou Luofus Divination Commission and a confident no nonsense sage Using her third eye and the Matrix of Prescience Fu Xuan calculates the Xianzhous navigational route and predicts the fortune of future events She firmly believes that everything she does is the best solution for the situation Fu Xuan is waiting for the generals promised abdication However that day still seems very far away"
    },
    { 
        name: "Jingliu", 
        image: "assets/jingliu.webp", 
        element: { name: "Ice", image: "assets/Type_Ice.webp" }, 
        path: { name: "Destruction", image: "assets/Path_Destruction.webp" }, 
        faction: "Xianzhou Alliance", 
        additionalInfo: "Former Sword Champion of the Luofu and the reason behind the Cloud Knights mythical reputation of implacable might Now her name has been wiped from the records and she is a traitor of the Xianzhou walking on the fine line between sanity and marastruck"
    },
    { 
        name: "Huohuo", 
        image: "assets/huohuo.webp", 
        element: { name: "Wind", image: "assets/Type_Wind.webp" }, 
        path: { name: "Abundance", image: "assets/Path_Abundance.webp" }, 
        faction: "Xianzhou Alliance", 
        additionalInfo: "While this foxian girl may seem fragile and weak she is actually a judge in training of the Ten Lords Commission responsible for capturing evil The judges sealed a heliobus named Tail onto her tail making her a Cursed One with a tendency to attract evil beings Despite trembling at the sight of evil spirits she is always entrusted with the arduous task of eradicating their presence She is well aware of her incompetence but lacks the courage to resign so she forces herself to press on despite her fear"
    },
    { 
        name: "Ruan Mei", 
        image: "assets/ruan_mei.webp", 
        element: { name: "Ice", image: "assets/Type_Ice.webp" }, 
        path: { name: "Harmony", image: "assets/Path_Harmony.webp" }, 
        faction: "Herta Space Station", 
        additionalInfo: "A scholar of exquisite temperament member #81 of the illustrious Genius Society and an expert in the field of life sciences She earned Nous attention with her talent and terrifying perseverance and began her research on the origin of life in a secretive corner of the universe Subsequently she was invited by Herta to collaborate with Screwllum and Stephen to develop the Simulated Universe Privately she revels in traditional theater and desserts and she is also very interested in embroidery"
    },
    { 
        name: "Dr. Ratio", 
        image: "assets/dr_ratio.webp", 
        element: { name: "Imaginary", image: "assets/Type_Imaginary.webp" }, 
        path: { name: "The Hunt", image: "assets/Path_The_Hunt.webp" }, 
        faction: "Cosmic", 
        additionalInfo: "A candid and selfassured Intelligentsia Guild member who often conceals his appearance with a strange plaster sculpture He demonstrated unparalleled intelligence and talent since his youth but now refers to himself as a Mundanite Firmly believing that intellect and creativity are not confined to geniuses he seeks to distribute knowledge to the entire universe to cure the persistent disease named ignorance"
    },
    { 
        name: "Black Swan", 
        image: "assets/black_swan.webp", 
        element: { name: "Wind", image: "assets/Type_Wind.webp" }, 
        path: { name: "Nihility", image: "assets/Path_Nihility.webp" }, 
        faction: "Penacony", 
        additionalInfo: "A Memokeeper of the Garden of Recollection A mysterious and elegant soothsayer She often wears a warm smile and is willing to patiently listen to the words of others thus using such means as a pretext to enter memories and gain omniscience over certain matters A lady passionate about collecting unique memories yet the thoughts that guide her are hard to glean"
    },
    { 
        name: "Sparkle", 
        image: "assets/sparkle.webp", 
        element: { name: "Quantum", image: "assets/Type_Quantum.webp" }, 
        path: { name: "Harmony", image: "assets/Path_Harmony.webp" }, 
        faction: "Penacony", 
        additionalInfo: "A member of the Masked Fools Inscrutable and unscrupulous A dangerous maestro of theatrics utterly engrossed in the art of performance Adorned with innumerable masks she is the hero with a thousand faces Wealth status power None of those matters to Sparkle The only thing that can get her attention is amusement"
    },
    { 
        name: "Acheron", 
        image: "assets/acheron.webp", 
        element: { name: "Lightning", image: "assets/Type_Lightning.webp" }, 
        path: { name: "Nihility", image: "assets/Path_Nihility.webp" }, 
        faction: "Cosmic", 
        additionalInfo: "A drifter claiming to be a Galaxy Ranger Her true name is unknown and she walks the cosmos alone carrying with her a long sword Though aloof and taciturn her blade flicks out like lashing lightning And yet she always strikes with her scabbard never drawing the sword free"
    },
    { 
        name: "Aventurine", 
        image: "assets/aventurine.webp", 
        element: { name: "Imaginary", image: "assets/Type_Imaginary.webp" }, 
        path: { name: "Preservation", image: "assets/Path_Preservation.webp" }, 
        faction: "Interastral Peace Corporation", 
        additionalInfo: "Senior manager of the Strategic Investment Department at the IPC and one of the Ten Stonehearts His Cornerstone is the aventurine of stratagems An ostentatious risk taker he often wears a smile that masks his true motives He won his current position by wagering against fate itself He views life as a high stakes high return investment and he plays this particular gamble with masterful ease"
    },
    { 
        name: "Robin", 
        image: "assets/robin.webp", 
        element: { name: "Physical", image: "assets/Type_Physical.webp" }, 
        path: { name: "Harmony", image: "assets/Path_Harmony.webp" }, 
        faction: "Penacony", 
        additionalInfo: "A Halovian singer who was born in Penacony and has risen to cosmic fame An elegant and demure young lady This time she has been invited home by The Family to grace everyone with song during the Charmony Festival She can use the power of Harmony to broadcast her music manifesting resonance among not only her fans but all manner of lifeforms"
    },
    { 
        name: "Boothill", 
        image: "assets/boothill.webp", 
        element: { name: "Physical", image: "assets/Type_Physical.webp" }, 
        path: { name: "Hunt", image: "assets/Path_The_Hunt.webp" }, 
        faction: "Galaxy Ranger", 
        additionalInfo: "A cyborg cowboy drifting among the stars Extremely optimistic and unrestrained He is a member of the Galaxy Rangers who swore to punish the wretched by any and all means His flamboyant and brash actions were all to draw the attention of the Interastral Peace Corporation — the target of his revenge"
    },
    { 
        name: "Firefly", 
        image: "assets/firefly.webp", 
        element: { name: "Fire", image: "assets/Type_Fire.webp" }, 
        path: { name: "Destruction", image: "assets/Path_Destruction.webp" }, 
        faction: "Stellaron Hunter", 
        additionalInfo: "Member of the Stellaron Hunters clad in a set of mechanized armor known as SAM Her character is marked by unwavering loyalty and steely resolve Engineered as a weapon against the Swarm she experiences accelerated growth but a tragically shortened lifespan She joined the Stellaron Hunters in a quest for a chance at life seeking to defy her fated demise"
    },
    { 
        name: "Jade", 
        image: "assets/jade.webp", 
        element: { name: "Lightning", image: "assets/Type_Lightning.webp" }, 
        path: { name: "Erudition", image: "assets/Path_Erudition.webp" }, 
        faction: "Interastral Peace Corporation", 
        additionalInfo: "A senior manager in the IPC Strategic Investment Department and one of the Ten Stonehearts known for her cornerstone Jade of Credit A beautiful and elegant moneylender skilled in deciphering the depths of peoples minds she often exacts a price from her adversaries and secures the IPCs profits through collateral and contractual agreements She is willing to go to great lengths to lay the groundwork for acquiring something of greater value and to extract benefits from seemingly penniless clients"
    },
    { 
        name: "Yunli", 
        image: "assets/yunli.webp", 
        element: { name: "Physical", image: "assets/Type_Physical.webp" }, 
        path: { name: "Destruction", image: "assets/Path_Destruction.webp" }, 
        faction: "Xianzhou Alliance ", 
        additionalInfo: "A sword hunter from the Xianzhou Zhuming and the Flaming Heart General Huaiyans darling granddaughter Frank and straightforward She has learned swordplay and forging from Huaiyan since young and thus is the second youngest prodigy swordmaster of the Flamewheel Octet Fueled by an intense loathing for the cursed swords that emerged from the Zhuming she vowed to hunt down and wipe out all cursed swords"
    },
    { 
        name: "Jiaoqiu", 
        image: "assets/jiaoqiu.webp", 
        element: { name: "Fire", image: "assets/Type_Fire.webp" }, 
        path: { name: "Nihility", image: "assets/Path_Nihility.webp" }, 
        faction: "Xianzhou Alliance", 
        additionalInfo: "A foxian healer and counselor from the Xianzhou Yaoqing Often greets people with a smile on his face and a scheme in his heart Born into a prestigious Alchemy Commission family he once withdrew from practicing medicine due to a broken heart However he returned to the field to treat the Merlins Claw General Feixiao Skilled in the study of alchemical prescription that views food as medicine especially those that induce a sensation of spiciness They invented a cauldron based medicinal formula known as the nine square grid"
    },
    { 
        name: "March 7th The Hunt", 
        image: "assets/march_7th_hunt.webp", 
        element: { name: "Imaginary", image: "assets/Type_Imaginary.webp" }, 
        path: { name: "The Hunt", image: "assets/Path_The_Hunt.webp" }, 
        faction: "Astral Express", 
        additionalInfo: "March 7th in a Xianzhou-styled outfit. A sword-wielding female martial artist Learning swordsmanship from both Yunli and Yanqing she is eager to create more beautiful memories on the Xianzhou"
    },
    { 
        name: "Feixiao", 
        image: "assets/feixiao.webp", 
        element: { name: "Wind", image: "assets/Type_Wind.webp" }, 
        path: { name: "The Hunt", image: "assets/Path_The_Hunt.webp" }, 
        faction: "Xianzhou Alliance", 
        additionalInfo: "Placeholder"
    },
    { 
        name: "Lingsha", 
        image: "assets/lingsha.webp", 
        element: { name: "Fire", image: "assets/Type_Fire.webp" }, 
        path: { name: "Abundance", image: "assets/Path_Abundance.webp" }, 
            faction: "Xianzhou Alliance", 
            additionalInfo: "The new Cauldron Master of the Xianzhou Luofu's Alchemy Commission is an intelligent and quick-witted Vidyadhara healer"
    },
    { 
        name: "Misha", 
        image: "assets/misha.webp", 
        element: { name: "Ice", image: "assets/Type_Ice.webp" }, 
        path: { name: "Destruction", image: "assets/Path_Destruction.webp" }, 
        faction: "Penacony", 
        additionalInfo: "A lovable and thoughtful bellboy at The Reverie Hotel He wishes to become an intergalactic adventurer like his grandfather He is extremely hardworking and skilled at fixing a variety of machines He also has a fondness for listening to the interstellar rumors the guests share with him He hopes he can grow up faster and looks forward to embarking on his star-treading journey"
    },
    { 
        name: "Gallagher", 
        image: "assets/gallagher.webp", 
        element: { name: "Fire", image: "assets/Type_Fire.webp" }, 
        path: { name: "Abundance", image: "assets/Path_Abundance.webp" }, 
        faction: "Penacony", 
        additionalInfo: "A security officer from the Bloodhound Family in Penacony He is also a slovenly and indolent drinksmith Though unorganized in apparel and casual in how he makes his drinks he is always courteous toward visiting guests but keeps his vigilance about him He seems to carry the weight of a complicated past yet he never voluntarily divulges any details"
    },
    { 
        name: "Moze", 
        image: "assets/moze.webp", 
        element: { name: "Lightning", image: "assets/Type_Lightning.webp" }, 
        path: { name: "The Hunt", image: "assets/Path_The_Hunt.webp" }, 
        faction: "Xianzhou Alliance", 
        additionalInfo: "A Shadow Guard of the Yaoqing Moze is taciturn and solitary always acting on his own As an expert in intelligence services and other operations that must remain covert Moze rarely shows himself before others The moment he reveals his blade usually spells doom for his enemies He commands a vast wealth of assassination techniques coupled with an extraordinary obsession for orderliness and cleanliness"
    },
    { 
        name: "Imbibitor Lunae", 
        image: "assets/imbibitor_lunae.webp", 
        element: { name: "Imaginary", image: "assets/Type_Imaginary.webp" }, 
        path: { name: "Destruction", image: "assets/Path_Destruction.webp" }, 
        faction: "Xianzhou Alliance", 
        additionalInfo: "Dan Heng's true Vidyadhara form, revealed after accepting the residual powers from the previous reincarnation of Imbibitor Lunae.Upon accepting the majestic horned crown atop his forehead, he must accept all the merits and faults attributed to that person.However, he was never himself."
    }
];

function renderCharacters(characterData) {
    const templateSource = `
        {{#each this}}
        <div class="card">
            <div class="left" style="background-image: url('{{this.image}}');"></div>
            <div class="right">
                <h2 class="character-name">{{this.name}}</h2>
                <div class="faction">Faction: {{this.faction}}</div>
                <div class="element">
                    <img src="{{this.element.image}}" alt="{{this.element.name}}" class="element-icon">
                    <span class="element-name">{{this.element.name}}</span>
                </div>
                <div class="path">
                    <img src="{{this.path.image}}" alt="{{this.path.name}}" class="path-icon">
                    <span class="path-name">{{this.path.name}}</span>
                </div>
                <div class="additional-info">{{this.additionalInfo}}</div>
            </div>
        </div>
        {{/each}}
    `;
    const template = Handlebars.compile(templateSource);
    const html = template(characterData);
    document.getElementById('content').innerHTML = html;

    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', () => {
            const additionalInfo = card.querySelector('.additional-info');
            additionalInfo.style.display = additionalInfo.style.display === 'none' ? 'block' : 'none';
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderCharacters(characters);
    document.getElementById('yearText').innerHTML = new Date().getFullYear();
});
