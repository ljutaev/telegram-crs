const TelegramBot = require('node-telegram-bot-api');
const Nexmo = require('nexmo')
const debug = require('./debug');
const TOKEN = '567512485:AAGYmaQ2uoIgYJYuoPVU9-yw_MsVImd1JSg';
const NEXMO_API_KEY = 'c4abf107'
const NEXMO_API_SECRET = 'SbjnhItLSPNmwAG5'
console.log('Bot has been started...')


const bot = new TelegramBot(TOKEN, {
	polling: true
})



const nexmo = new Nexmo({
  apiKey: NEXMO_API_KEY,
  apiSecret: NEXMO_API_SECRET
})

bot.onText(/^\/start/, function (msg, match) {
	const chatId = msg.chat.id;
    var option = {
        "parse_mode": "Markdown",
        "reply_markup": {
            "one_time_keyboard": true,
            "keyboard": [[{
                text: "My phone number",
                request_contact: true
            }], ["Cancel"]]
        }
    };

    bot.sendMessage(chatId, "How can we contact you?", option).then(() => {
    	const chatId = msg.chat.id;
        bot.once("contact",(msg)=>{
            var option = {
                "parse_mode": "Markdown",
                "reply_markup": {
                    "one_time_keyboard": true,
                    "keyboard": [[{
                        text: "My location",
                        request_location: true
                    }], ["Cancel"]]
                }
            };
            bot.sendMessage(chatId,
                            util.format('Thank you %s with phone %s! And where are you?', msg.contact.first_name),
                            option);
        })
    })

});

bot.on('contact',(msg)=>{
    console.log(msg.contact.phone_number)
    const from = 'WebDeluxe'
	const to = 380501665079
	const text = 'Privet Kiska=*'

	nexmo.message.sendSms(from, to, text)

})

bot.on('polling_error', (error) => {
  console.log(error.code);  // => 'EFATAL'
});
