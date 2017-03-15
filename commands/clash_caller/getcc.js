const commando = require( 'discord.js-commando' );
var MESSAGES = require( '../../constants/messages.js' );
var REG_EXP = require( '../../constants/regular_expressions.js' );
var WAR_INFO = require( '../../war_info.js' );

class DiceRollCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'cc',
            group: 'clash_caller',
            memberName: 'cc',
            description: 'Gets the ClashCaller link.',
        });
    }

    async run(message, args) {
        message.reply("http://clashcaller.com/war/" + WAR_INFO.CURRENT_WAR_CODE);
    }
}

module.exports = DiceRollCommand;
