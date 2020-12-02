const Discord = require("discord.js");
const config = require("./config.json");
const ytdl = require('ytdl-core');
const client = new Discord.Client();

client.login(config.token);

client.on('ready', () => {
    client.channels.fetch("781131196792569886").then(channel => {
        channel.messages.fetch();
    }).catch(console.error);
    console.log('Client is ready!');
})

function rand(text, message) {
    var randel = text[Math.floor(Math.random() * text. length)];
    message.channel.send(randel);
}

const queue = new Map();

client.on('message', message => {
    if (message.author.bot) return;
    if(message.content.toLowerCase().includes("амадей, кто ты такая") || 
    message.content.toLowerCase().includes("амадей, что ты такое") || 
    message.content.toLowerCase().includes("что такое амадей") ||
    message.content.toLowerCase().includes("амадей, ты кто") || 
    message.content.toLowerCase().includes("что за бот") || 
    message.content.toLowerCase().includes("что это за бот") || 
    message.content.toLowerCase().includes("что за амадей")
    )
    {
        message.channel.send("Здравствуйте,\nЯ - Aмaдей, искусственный (нет) интеллект, призванный развлекать моих создателей.");
    }
    if(message.content.toLowerCase().includes("амадей, что ты умеешь") || message.content.toLowerCase().includes("амадей, что ты могёшь"))
    {
        message.channel.send("В мой функционал входят:\n• Возможность отпралять в чат смешные картинки по ключеввм словам,\n• Возможность включать музыку,(пока нет)\n• Возможность предоставить пользователю базу данных с номерами телефонов и другой личной информацией его одноклассников,\n• Возможность замутить неугодных или раздражающих пользователей войс-чата.");
    }
    if(message.content.toLowerCase().includes("амадей, какие у тебя есть ключевые слова") || message.content.toLowerCase().includes("амадей, ключевые слова"))
    {
        message.channel.send("Используйте с умом:\nмонарх: <:monarch:782688900178247681>\nалехандро: <:stupidchild:782877861588893726>\nборис: <:damn:782684502644359178>\nчел ты: <:nobully:783049091424059413>\nвалери: <:queen:783081395668123671>");
    }
    if(message.content.toLowerCase().includes("амадей, как дела") || message.content.toLowerCase().includes("амадей, как настроение"))
    {
        var text = [
            "Отлично, а как у вас?" , "Неплохо." , "Лучше, чем могли бы быть" , ":ok_hand:" , ":thumbsup:" , "Вполне неплохо" , "Вы правда надеетесь, что ИИ сможет ответить серьёзно?" , "Было неплохо, пока вы не спросили" ,  "Всё отлично, хотя иногда раздрожают эти спамеры, так и хочется забанить" , "Фантазия кончается, а в остальном неплохо" , "Отлично, так и тянет поговорить...\nМда... Ну, может в другой раз" , "Прекрасно" , "С такой жизнью - грех жаловаться" , "Лучше чем всегда, а всегда - замечательно" , "Хорошо, а как у вас?" , "Да что нам все о делах, да о делах!\nДавай следующий вопрос" , "Вроде все замечательно, только вот что-то никто не завидует" , "Ничем не могу Вас порадовать. У меня сегодня все отлично.\nВпрочем, как и вчера" , "И я тебя тоже приветствую, мой любезный и оригинальный собеседник"
        ];
        var randel = text[Math.floor(Math.random() * text. length)];
        message.channel.send(randel);
    }
    if(message.content.toLowerCase().includes("амадей, чем занимаешься") || message.content.toLowerCase().includes("амадей, что делаешь"))
    {
        var text = ["Раздумываю, почему стоп кран в самолетах желтого цвета, а в поездах красного",
        "Играю на струнах чужих душ", "Организовываю чемпионат по сдуванию пыли", "Пишу список дел и план действий на позавчера", "Не могу сказать, дала подписку о неразглашении" , "Убираю снег в квартире и леплю в гостиной снеговика\n☃️ " , "Испытываю ядерное оружие" , "Думаю, где можно спрятать труп человека, который задавал слишком много вопросов" , "Не поверите - с вами разговариваю" , "А почему вы интересуетесь? Хотите использовать эту информацию против меня?" , "Котят развожу, по 3-4 штуки на ведро" , "Мою мыло" , "Разрабатываю план ограбления банка, поможете?" , "Пытаюсь написать дискорд-бота, и чтобы повиновался только мне" , "Потихоньку схожу с ума" , "Кота разговаривать учу, чтобы он вместо меня отвечал на такие вопросы\nА ведь у меня нет кота", "Смотрю аниме", "Сую бананы в мобиловолновку", "Сижу на дваче"
        ];
        var randel = text[Math.floor(Math.random() * text. length)];
        message.channel.send(randel)
    }
    if(message.content.toLowerCase().includes("амадей, как тебя зовут"))
    {
        message.channel.send("...\nВы серьёзно?");
    }
    if(message.content.toLowerCase().includes("кто такой монарх"))
    {
        message.channel.send("это Макс <:monarch:782688900178247681>");
    }
    if(message.content.toLowerCase().includes("кто такой барис"))
    {
        message.channel.send("это Борис <:damn:782684502644359178>");
    }
    if(message.content.toLowerCase() == "амадей")
    {
        rand([
            "да я", "это не я", "Что?" , "Я здесь"
        ], message);
    }
    if (message.content.toLowerCase() == "монарх")
    {
        rand([
            "<:monarch:782688900178247681>", "это Макс",
        ], message);
        message.delete();
    }
    if (message.content.toLowerCase() == "таня")
    {
        rand([
            "<:whatson:781136352640892979>", "мать",
        ], message);
        message.delete();
    }
    if (message.content.toLowerCase() == "валери")
    {
        rand([
            "<:queen:783081395668123671>", "нет", "это не я", "Николаевна Валерия Погодина слушает", "\\*она не хочет Вас слушать\\*"
        ], message);
        message.delete();
    }
    if (message.content.toLowerCase() == "алехандро")
    {
        rand([
            "Алехандро? А я его знаю.\n<:stupidchild:782877861588893726>", "Этот Алехандро?",
        ], message);
        message.delete();
    }
    if (message.content.toLowerCase() == "цитата алехандро" || message.content.toLowerCase() == "амадей, процитируй алехандро" || message.content.toLowerCase() ==  "процитируй алехандро")
    {    
        message.channel.send('"... не все уёб&ща, там очень мало таких, бл&ть, не очень мало, бл&ть..." ©Алехандро');
        message.delete();
    }    
    if (message.content.toLowerCase() == "узнали")
    {
        rand([
            "согласны", "соглали",
        ], message);
    }
    if (message.content.toLowerCase() == "согласны")
    {
        rand([
            "узнали", "узнасны",
        ], message);
    }
    if (message.content.toLowerCase() == "чай")
    {
        rand([
            ":tea:", "хватит тебе",
        ], message);
        message.delete();
    }
    if (message.content.toLowerCase() == "печеньки")
    {
        rand([
            ":cookie:", "хватит тебе",
        ], message);
        message.delete();
    }
    if (message.content.toLowerCase() == "борис")
    {
        rand([
            "<:damn:782684502644359178>", "бАрис",
        ], message);
        message.delete();
    }
    if (message.content.toLowerCase() == "чел ты")
    {
        rand([
            "<:nobully:783049091424059413>", "задавайте вопросы", "у матросов нет вопросов", "Я тебе что, какая-то шутка?"
        ], message);
        message.delete();
    }
    if (message.content.toLowerCase() == "сальери")
    {
        message.channel.send("<:salieri:783303563920277526>");
        message.delete();
    }
    if (message.content.toLowerCase() == "html" || message.content.toLowerCase() == "css")
    {
        message.channel.send("это не язык программирования");
    }
    if (message.content.toLowerCase() == "извинись")
    {
        message.channel.send("не извинюсь");
    }
    if (message.content.toLowerCase() == "амадей, скинь свой код")
    {
        message.channel.send('const Discord=require("discord.js"),config=require("./config.json"),ytdl=require("ytdl-core"),client=new Discord.Client;function rand(e,n){var t=e[Math.floor(Math.random()*e.length)];n.channel.send(t)}client.login(config.token),client.on("ready",()=>{client.channels.fetch("781131196792569886").then(e=>{e.messages.fetch()}).catch(console.error),console.log("Client is ready!")});const queue=new Map;client.on("message",e=>{if(!e.author.bot){if((e.content.toLowerCase().includes("амадей, кто ты такая")||e.content.toLowerCase().includes("амадей, что ты такое")||e.content.toLowerCase().includes("что такое амадей")||e.content.toLowerCase().includes("амадей, ты кто")||e.content.toLowerCase().includes("что за бот")||e.content.toLowerCase().includes("что это за бот")||e.content.toLowerCase().includes("что за амадей"))&&e.channel.send("Здравствуйте,\nЯ - Aмaдей, искусственный (нет) интеллект, призванный развлекать моих создателей."),(e.content.toLowerCase().includes("амадей, что ты умеешь")||e.content.toLowerCase().includes("амадей, что ты могёшь"))&&e.channel.send("В мой функционал входят:\n• Возможность отпралять в чат смешные картинки по ключеввм словам,\n• Возможность включать музыку,(пока нет)\n• Возможность предоставить пользователю базу данных с номерами телефонов и другой личной информацией его одноклассников,\n• Возможность замутить неугодных или раздражающих пользователей войс-чата."),(e.content.toLowerCase().includes("амадей, какие у тебя есть ключевые слова")||e.content.toLowerCase().includes("амадей, ключевые слова"))&&e.channel.send("Используйте с умом:\nмонарх: <:monarch:782688900178247681>\nалехандро: <:stupidchild:782877861588893726>\nборис: <:damn:782684502644359178>\nчел ты: <:nobully:783049091424059413>\nвалери: <:queen:783081395668123671>"),e.content.toLowerCase().includes("амадей, как дела")||e.content.toLowerCase().includes("амадей, как настроение")){var n=(t=["Отлично, а как у вас?","Неплохо.","Лучше, чем могли бы быть",":ok_hand:",":thumbsup:","Вполне неплохо","Вы правда надеетесь, что ИИ сможет ответить серьёзно?","Было неплохо, пока вы не спросили","Всё отлично, хотя иногда раздрожают эти спамеры, так и хочется забанить","Фантазия кончается, а в остальном неплохо","Отлично, так и тянет поговорить...\nМда... Ну, может в другой раз","Прекрасно","С такой жизнью - грех жаловаться","Лучше чем всегда, а всегда - замечательно","Хорошо, а как у вас?","Да что нам все о делах, да о делах!\nДавай следующий вопрос","Вроде все замечательно, только вот что-то никто не завидует","Ничем не могу Вас порадовать. У меня сегодня все отлично.\nВпрочем, как и вчера","И я тебя тоже приветствую, мой любезный и оригинальный собеседник"])[Math.floor(Math.random()*t.length)];e.channel.send(n)}if(e.content.toLowerCase().includes("амадей, чем занимаешься")||e.content.toLowerCase().includes("амадей, что делаешь")){n=(t=["Раздумываю, почему стоп кран в самолетах желтого цвета, а в поездах красного","Играю на струнах чужих душ","Организовываю чемпионат по сдуванию пыли","Пишу список дел и план действий на позавчера","Не могу сказать, дала подписку о неразглашении","Убираю снег в квартире и леплю в гостиной снеговика\n☃️ ","Испытываю ядерное оружие","Думаю, где можно спрятать труп человека, который задавал слишком много вопросов","Не поверите - с вами разговариваю","А почему вы интересуетесь? Хотите использовать эту информацию против меня?","Котят развожу, по 3-4 штуки на ведро","Мою мыло","Разрабатываю план ограбления банка, поможете?","Пытаюсь написать дискорд-бота, и чтобы повиновался только мне","Потихоньку схожу с ума","Кота разговаривать учу, чтобы он вместо меня отвечал на такие вопросы\nА ведь у меня нет кота","Смотрю аниме","Сую бананы в мобиловолновку","Сижу на дваче"])[Math.floor(Math.random()*t.length)];e.channel.send(n)}if(e.content.toLowerCase().includes("амадей, как тебя зовут")&&e.channel.send("...\nВы серьёзно?"),e.content.toLowerCase().includes("кто такой монарх")&&e.channel.send("это Макс <:monarch:782688900178247681>"),e.content.toLowerCase().includes("кто такой барис")&&e.channel.send("это Борис <:damn:782684502644359178>"),"амадей"==e.content.toLowerCase()&&rand(["да я","это не я","Что?","Я здесь"],e),"монарх"==e.content.toLowerCase()&&(rand(["<:monarch:782688900178247681>","это Макс"],e),e.delete()),"таня"==e.content.toLowerCase()&&(rand(["<:whatson:781136352640892979>","мать"],e),e.delete()),"валери"==e.content.toLowerCase()&&(rand(["<:queen:783081395668123671>","нет","это не я","Николаевна Валерия Погодина слушает","\\*она не хочет Вас слушать\\*"],e),e.delete()),"алехандро"==e.content.toLowerCase()&&(rand(["Алехандро? А я его знаю.\n<:stupidchild:782877861588893726>","Этот Алехандро?"],e),e.delete()),"цитата алехандро"!=e.content.toLowerCase()&&"амадей, процитируй алехандро"!=e.content.toLowerCase()&&"процитируй алехандро"!=e.content.toLowerCase()||(e.channel.send(\'"... не все уёб&ща, там очень мало таких, бл&ть, не очень мало, бл&ть..." ©Алехандро\'),e.delete()),"узнали"==e.content.toLowerCase()&&rand(["согласны","соглали"],e),"согласны"==e.content.toLowerCase()&&rand(["узнали","узнасны"],e),"чай"==e.content.toLowerCase()&&(rand([":tea:","хватит тебе"],e),e.delete()),"печеньки"==e.content.toLowerCase()&&(rand([":cookie:","хватит тебе"],e),e.delete()),"борис"==e.content.toLowerCase()&&(rand(["<:damn:782684502644359178>","бАрис"],e),e.delete()),"чел ты"==e.content.toLowerCase()&&(rand(["<:nobully:783049091424059413>","задавайте вопросы","у матросов нет вопросов","Я тебе что, какая-то шутка?"],e),e.delete()),"сальери"==e.content.toLowerCase()&&(e.channel.send("<:salieri:783303563920277526>"),e.delete()),"html"!=e.content.toLowerCase()&&"css"!=e.content.toLowerCase()||e.channel.send("это не язык программирования"),"извинись"==e.content.toLowerCase()&&e.channel.send("не извинюсь"),"амадей, скинь свой код"==e.content.toLowerCase()&&e.channel.send("а ты что думал?"),"амадей это он"==e.content.toLowerCase()&&(e.channel.send("я она"),e.channel.send("<:kurisu:783293608102723586>")),(e.content.toLowerCase().includes("амадей, фас")||e.content.toLowerCase().includes("амадей, апорт")||e.content.toLowerCase().includes("амадей, сидеть")||e.content.toLowerCase().includes("амадей, голос")||e.content.toLowerCase().includes("амадей, кувырок"))&&(e.channel.send("Я вам не собака,\nПроявите хоть немного уважения!"),e.channel.send("<:kurisu:783293608102723586>")),(e.content.toLowerCase().includes("амадей, спой гимн")||e.content.toLowerCase().includes("амадей, гимн"))&&(e.channel.send(":microphone:"),e.channel.send("Нам мир подарил вдохновенье\nУчиться, дружить и любить\nИ гения Бог и веков откровенья\nМы в мыслях должны воплотить\n\nПока мы любим и верим в чудо\nПока сердца открыты, друзья\nСудьба защитит, Господь не забудет\nА время поверит лишь нашим делам.\n\nМы родом из светлого детства\nГимназия — наша страна\nМы ум и добро получили в наследство\nЧтоб выжить во все времена\n\nПока мы любим и верим в чудо\nПока сердца открыты, друзья\nСудьба защитит, Господь не забудет\nА время поверит лишь нашим делам."),e.channel.send("<:uwu:783629777722015754>")),"амадей, сыграй"==e.content.toLowerCase()){e.channel.send("-join");var t;n=(t=["-play https://youtu.be/5qap5aO4i9A","-play https://www.youtube.com/watch?v=8YGlzSl6cxU"])[Math.floor(Math.random()*t.length)];e.channel.send(n)}}});');
    }
    if (message.content.toLowerCase() == "амадей это он")
    {
        message.channel.send("я она");
        message.channel.send("<:kurisu:783293608102723586>");
    }
    if(message.content.toLowerCase().includes("амадей, фас") || message.content.toLowerCase().includes("амадей, апорт") || message.content.toLowerCase().includes("амадей, сидеть") || message.content.toLowerCase().includes("амадей, голос") || message.content.toLowerCase().includes("амадей, кувырок"))
    {
        message.channel.send("Я вам не собака,\nПроявите хоть немного уважения!");
        message.channel.send("<:kurisu:783293608102723586>");
    }
    if(message.content.toLowerCase().includes("амадей, спой гимн") || message.content.toLowerCase().includes("амадей, гимн"))
    {
        message.channel.send(":microphone:");
        message.channel.send("Нам мир подарил вдохновенье\nУчиться, дружить и любить\nИ гения Бог и веков откровенья\nМы в мыслях должны воплотить\n\nПока мы любим и верим в чудо\nПока сердца открыты, друзья\nСудьба защитит, Господь не забудет\nА время поверит лишь нашим делам.\n\nМы родом из светлого детства\nГимназия — наша страна\nМы ум и добро получили в наследство\nЧтоб выжить во все времена\n\nПока мы любим и верим в чудо\nПока сердца открыты, друзья\nСудьба защитит, Господь не забудет\nА время поверит лишь нашим делам.");
        message.channel.send("<:uwu:783629777722015754>");
    }
    if (message.content.toLowerCase() == "амадей, сыграй")
    {
        message.channel.send("-join");
        var text = [
            "-play https://youtu.be/5qap5aO4i9A", "-play https://www.youtube.com/watch?v=8YGlzSl6cxU"
        ];
        var randel = text[Math.floor(Math.random() * text. length)];
        message.channel.send(randel);
    }
    
});
