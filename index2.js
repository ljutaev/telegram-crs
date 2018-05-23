const Bot = require('node-telegram-bot-api');
const request = require('request');
const token = '567512485:AAGYmaQ2uoIgYJYuoPVU9-yw_MsVImd1JSg';
const url = 'https://launchlibrary.net/1.3/launch';
const trigger = 'I want to travel!';
const bot = new Bot(token, {polling: true});
const prepareData = (body) => {
 const launches = JSON.parse(body).launches;
 return launches.filter((launch) => launch !== undefined)
  .map((launch) => `${launch.name} on ${launch.net}`)
  .join('\n\n');
};
bot.on('message', (msg) => {
 if (msg.text.toString() === trigger) {
  return request(url, (err, resp, body) => {
   bot.sendMessage(msg.chat.id, prepareData(body));
  });
 }
bot.sendMessage(msg.chat.id, 'Hi, do you want to travel?', {
  reply_markup: {
    keyboard: [[trigger], ['Bulk option']]
   }
  }
 );
});
/*bot.on('message', msg => {
	const {id} = msg.chat;
	if(msg.text.toLowerCase() === 'hello') {
		bot.sendMessage(id, `Hello, ${msg.from.first_name}`);
	} else {
		bot.sendMessage(id, debug(msg));
	}
	
});*/
/*

bot.onText(/\/help (.+)/, (msg, [source, match]) => {
	const { id } = msg.chat
	bot.sendMessage(id, debug(match))
})*/

/*bot.on('message', msg => {
	const html = `<strong>Hello, ${msg.from.first_name}</strong><pre>${debug(msg)}</pre>`

	bot.sendMessage(msg.chat.id, html, {
		parse_mode: 'HTML'
	})
})*/


/*bot.on('message', msg => {
	const chatId = msg.chat.id;

	if(msg.text === 'Закрыть'){
		bot.sendMessage(chatId, 'Закрываю клавиатуру', {
			reply_markup: {
				remove_keyboard: true
			}
		})
	}else if (msg.text === 'Ответить'){
		bot.sendMessage(chatId, 'Отвечаю', {
			reply_markup: {
				force_reply: true
			}
		})
	} else {
		bot.sendMessage(chatId, 'Клавиатура', {
			reply_markup: {
				keyboard: [
					[{
						text: 'Отправить местоположения',
						request_location: true
					}],
					['Ответить', 'Закрыть'],
					[{
						text: 'Отправить контакт',
						request_contact: true
					}]
				]		
			}
		})
	}
})*/

/*bot.onText(/\/start/, (msg) => {
    
bot.sendMessage(msg.chat.id, "Welcome", {
"reply_markup": {
    "keyboard": [["Sample text", "Second sample"],   ["Keyboard"], ["I'm robot"]]
    }
})
})
*/

/*bot.onText(/\/start/, msg => {
	const { id } = msg.chat
	bot.sendMessage(id, `Здраствуйте, ${msg.from.first_name}`);
	setTimeout(function() {
		bot.sendMessage(id, `Я - WebDeluxeBot. Ваш личный Робот-помощник!`);;
	}, 500);
	setTimeout(function() {
		bot.sendMessage(id, `Выберите цифрой, что Вас интересует:

			1- Создание сайта
			2 - Продвижение в Интернете
			3 - Разработка мобильного приложения

			Или выбирайте "другое"`, {
			reply_markup: {
				keyboard: [
					['1'],
					['2', '3'],
					['Другое']
				]		
			}
		})
	}, 1200)
	
})
    



bot.on('message', (msg) => {
	const { id } = msg.chat;
var Hi = "1";
if (msg.text.toString().toLowerCase().indexOf(Hi) === 0) {
    
		bot.sendMessage(id, `Хорошо, ${msg.from.first_name}, а у Вас уже есть сайт?`, {
			reply_markup: {
				remove_keyboard: true
			}
		});

}
var bye = "2";
if (msg.text.toString().toLowerCase().includes(bye)) {
    bot.sendMessage(msg.chat.id, "Hope to see you around again , Bye");
} 
var bye2 = "Другое";
if (msg.text.indexOf(bye2) === 0) {
    bot.sendMessage(msg.chat.id, "Hope to see you around again , Bye");
}    
var robot = "3";
if (msg.text.indexOf(robot) === 0) {
    bot.sendMessage(msg.chat.id, "Yes I'm robot but not in that way!");
}
});*/