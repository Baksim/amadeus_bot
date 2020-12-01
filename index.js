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
    if(message.content.toLowerCase().includes("амадей, как дела"))
    {
        var text = [
            "Отлично, а как у вас?" , "Неплохо." , "Лучше, чем могли бы быть" , ":ok_hand:" , ":thumbsup:" , "Вполне неплохо" , "Вы правда надеетесь, что ИИ сможет ответить серьёзно?" , "Было неплохо, пока вы не спросили" ,  "Всё отлично, хотя иногда раздрожают эти спамеры, так и хочется забанить" , "Фантазия кончается, а в остальном неплохо" , "Отлично, так и тянет поговорить...\nМда... Ну, может в другой раз" , "Прекрасно" , "С такой жизнью - грех жаловаться" , "Лучше чем всегда, а всегда - замечательно" , "Хорошо, а как у вас?" , "Да что нам все о делах, да о делах!\nДавай следующий вопрос" , "Вроде все замечательно, только вот что-то никто не завидует" , "Ничем не могу Вас порадовать. У меня сегодня все отлично.\nВпрочем, как и вчера" , "И я тебя тоже приветствую, мой любезный и оригинальный собеседник"
        ];
        var randel = text[Math.floor(Math.random() * text. length)];
        message.channel.send(randel);
    }
    if(message.content.toLowerCase().includes("амадей, чем занимаешься"))
    {
        var text = ["Раздумываю, почему стоп кран в самолетах желтого цвета, а в поездах красного",
        "Играю на струнах чужих душ" , "Организовываю чемпионат по сдуванию пыли" , "Пишу список дел и план действий на позавчера " , "Не могу сказать, давала подписку о неразглашении" , " Убираю снег в квартире и леплю в гостиной снеговика\n☃️ " , "Испвтываю ядерное оружие" , "Думаю, где можно спрятать труп человека, который задовал слишком много вопросов" , "Не поверите - с вами разговариваю" , "А почему вы интересуетесь? Хотите использовать эту информацию против меня?" , "котят развожу, по 3-4 штуки на ведро" , "Мою мыло" , "Разробатываю план ограбления банка, поможете?" , "Пытаюсь написать дискорд-бота, и чтобы повиновался только мне" , "Потихоньку схожу с ума" , "Кота разговаривать учу, чтобы он вместо меня отвечал на такие вопросы\nА ведь у меня нет кота"
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
            "да я", "это не я",
        ], message);
        message.delete();
    }
    if (message.content.toLowerCase() == "монарх")
    {
        rand([
            "<:monarch:782688900178247681>", "это Макс",
        ], message);
        message.delete();
    }
    if (message.content.toLowerCase() == "валери")
    {
        rand([
            "<:queen:783081395668123671>", "нет", "это не я", "Николаевна Валерия Погодина слушает", "\*она не хочет Вас слушать\*"
        ], message);
        message.delete();
    }
    if (message.content.toLowerCase()== "алехандро")
    {
        rand([
            "Алехандро? А я его знаю.\n<:stupidchild:782877861588893726>", "это Макс",
        ], message);
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
            "<:nobully:783049091424059413>", "задавайте вопросы", "у матросов нет вопросов"
        ], message);
        message.delete();
    }
    if (message.content.toLowerCase() == "сальери")
    {
        message.channel.send("<:salieri:783303563920277526>")
        message.delete();
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
