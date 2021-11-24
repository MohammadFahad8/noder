
var nodemailer = require('nodemailer')
// var xoauth2 = require('xoauth2');
var {google}=require('googleapis')
const config = require('./config.js')

const OAuth2 = google.auth.OAuth2
const OAuth2_client = new OAuth2(config.clientId,config.clientSecretsecret);

OAuth2_client.setCredentials({refresh_token : config.refreshToken})
function  sendEMail (name , reciepent)
{
    const accessToken = 'ya29.a0ARrdaM8S_51DWoM-iQ0wGb6rSBQvTNoHAeHntCe9ahmkgoZyAWbkjnOVb0T0IcSxMgpaIaLsHQweGdaVgqrlvnuw_ZVVM21wcFaM7K0oS1iEJhhFCRZWPPljcCwkMPnwoZwfavIAnc66csq7lh9cZXQiMABp'

    const transport = nodemailer.createTransport({

        service: 'Gmail',
        
        auth:
        {
            type:'OAuth2',
            user:config.user,
            clientId: config.clientId,
            clientSecret: config.clientSecret,
            refreshToken: config.refreshToken,
            accessToken: accessToken
        }
    })
const mailOptions = {

    from:config.user,
    to: reciepent,
    subject: 'A message from GOAT',
    html: get_html_message(name)

}
transport.sendMail(mailOptions,function (err,info){

    if(err)
    {
        console.warn(err)
    }else{
        console.log(info)
    }
    transport.close()
})
}
function get_html_message(name)
{
    return `<h1>${name}You are also G.O.A.T</h1>`
}

sendEMail("ZOWIE",'fahadrao1718@gmail.com');
