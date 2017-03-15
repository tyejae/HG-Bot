const commando = require( 'discord.js-commando' );
var MESSAGES = require( '../../constants/messages.js' );
var REG_EXP = require( '../../constants/regular_expressions.js' );
var WAR_INFO = require( '../../war_info.js' );
var XMLHttpRequest = require( 'xhr2' );

class GetMyCallsCommand extends commando.Command {
    constructor( client ) {
        super(client, {
            name: 'getcallsfor',
            group: 'clash_caller',
            memberName: 'getcalls for',
            description: 'Get calls for player'
        });
    }
    async run( message, args ) {
        var myCalls = [];
        var botResponse = '\n', options, body, botReq;
        var xhr = new XMLHttpRequest();
        var maxY = 0;

        xhr.open( "POST", "http://clashcaller.com/api.php", true );
        xhr.setRequestHeader( "Content-type", 'application/x-www-form-urlencoded' );
        xhr.send( "REQUEST=GET_FULL_UPDATE&warcode=" + WAR_INFO.CURRENT_WAR_CODE );
        xhr.onreadystatechange = function ( returnval ) {
            if ( xhr.readyState == xhr.DONE && xhr.status == 200 ) {
                var calls = JSON.parse( xhr.responseText ).calls;
                for (let index in calls) {
                    if (calls[index].playername === args) {
                        myCalls.push(parseInt(calls[index].posy) + 1);
                    }
                }

                if (myCalls.length == 0) {
                    message.channel.sendMessage(MESSAGES.NO_CALLS);
                } else {
                    botResponse += '** Calls for ' + args + ':**';
                    for (let cIndex in myCalls) {
                        botResponse += '\n#' + myCalls[cIndex];
                    }
                    message.channel.sendMessage(botResponse);
                }
                
            }
        }
    }
}

module.exports = GetMyCallsCommand;