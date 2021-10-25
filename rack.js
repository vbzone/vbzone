const nodemailer = require('nodemailer');
require('x-date') ;
var fs = require('fs');
var ip = require("ip");
var libmime = require('libmime');
var str_replace = require('str_replace');
const childProcess = require("child_process");
const path    = require('path');
var homoglyph = require('homoglyph');


var https = require('https');
const querystring = require('querystring');
var LineByLineReader = require('line-by-line');

var fakerator = require("fakerator");

var ff = fakerator()
console.log({'process.argv':process.argv})

var args = process.argv.slice(2);

var apiUserKey = args[0];
var apiSecKey  = args[1];
var userNum = args[2];
var domain = args[3];
var fakeDomain = args[4]
console.log({'apiUserKey':apiUserKey})
console.log({'apiSecKey':apiSecKey})



const tough = require('tough-cookie');
const  Cookie = tough.Cookie;
console.log(apiUserKey == undefined , apiSecKey == undefined , userNum == undefined , domain == undefined , fakeDomain == undefined , args[5] == undefined ,args[6] == undefined)

if(apiUserKey == undefined || apiSecKey == undefined || userNum == undefined || domain == undefined || fakeDomain == undefined || args[5] == undefined || args[6] == undefined){
  console.log("Usage : ./rack ApiKey ApiPassword  UserNumper Domain FakeDomain @aol.com subject mode")
  console.log('Example : ./rack GlAMPTYRAo+9SsS0YwZL spwl4+mM9Q+tkMXm4I3Q5ePb4M4JzlBO1c42jJBX 2369550 spanilirefo.com comcast.com @gmail.com "man owner" mode : 0 or 1 or 2')
  return false
}


process.on('uncaughtException', function (err) {
  console.log(err.stack)
  fs.writeFileSync("ex.txt", err.stack || err)
});


process.on('unhandledRejection', (reason, promise) => {
  console.log('Unhandled Rejection at:', reason.stack || reason)


  fs.writeFileSync("ex.txt", reason.stack || reason)

})



console.log('\n')
const Agent = 'Rackspace Management Interface';
var dateme = new Date().format('yyyymmddHHmmss')
var crypto = require('crypto');
let transporter;
var sha = crypto.createHash('sha1');
apiSecKey='HriEYDBOjQxkb4I1Ll7kJ9uNK8oLB09N54avVbKB';
apiUserKey='i9vOvD3SZhiHk+d0tkMj';
sha.update(apiUserKey+Agent+dateme+apiSecKey)
var auth = sha.digest('base64');
var username;
var password;

function randomstring(L) {
  var s = '';
  var randomchar = function() {
    var n = Math.floor(Math.random() * 62);
    if (n < 10) return n; //1-10
    if (n < 36) return String.fromCharCode(n + 55); //A-Z
    return String.fromCharCode(n + 61); //a-z
  }
  while (s.length < L) s += randomchar();
  return s;
}



function randomstrings() {
  var s = '';
  var randomchar = function() {
    var n = Math.floor(Math.random() * 62);
    if (n < 10) return n; //1-10
    if (n < 36) return String.fromCharCode(n + 55); //A-Z
    return String.fromCharCode(n + 61); //a-z
  }
  while (s.length < getRndInteger(10,20)) s += randomchar();
  return s;
}


async function connect(){
  try {

   transporter = await nodemailer.createTransport({
      pool:true,
      host: 'secure.emailsrvr.com',
      port: 465,
      textEncoding:'base64',

      secure: true, // true for 465, false for other ports
      auth: {
          user: username+'@'+domain, // generated ethereal user
          pass: password // generated ethereal password
      },

  });





}catch {
  console.log('fuckers')
  connect()
}

}




function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}




function addSpace(length) {
   var result           = '';
   var characters       = '          　ㅤㅤ‎ ‎ ‎ ‎ ‎';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}



function domainEnd(){
  var domains = [
  'com',
  'co',
  'org',
  'net',
  'info',
  'biz',
  'store',
  'site',
  'website',
  'club',
  'tech',
  'space',
  'online',
  'website',
  'me',
  'design',
  'us',
  'ca',
  'com.ca',
  'global',
  'host',
  'gov',
  'blog',
  'life',
  'live']
  return  domains[Math.floor(Math.random() * domains.length)];
}


function starts(tmpfilename){
  console.log({tmpfilename:tmpfilename})
var lrs = new LineByLineReader(tmpfilename);
console.log({lrs:lrs})
var fucks = 0;
var fileintmp = '/tmp/'+randomstring(10)+".txt";
fs.writeFile(fileintmp, '', function (err) {
  if (err){
    console.log('throw err#3 : ')
    console.log(err)
  };
  console.log('\x1b[32m','\n[+] tmp File is created successfully : '+fileintmp+"\n");
});
console.log('i am here')

lrs.on('line', function (liner) {

fucks++

console.log({liner:liner})

  lrs.pause();
  console.log('i am here')
createEmail(function(value) {
  console.log('create email')
  if(value == 200){

    console.log('\x1b[32m',`[+] done we have add the email [${liner}] :)\n`,'\x1b[0m')


connect().then(function(e){

  var lr = new LineByLineReader(`emails/${liner}.txt`);
console.log('\x1b[36m','[+] we try to connect SMTP and start spam :p\n','\x1b[0m')
var motherfucker = 0
    lr.on('line', function (emails) {
motherfucker++
      lr.pause();
      if(emails == undefined){
        console.log('\x1b[33m','[!] something went wrong , line is undefined\n','\x1b[0m');
        lr.resume();
        return false
      }
      var contents = fs.readFileSync('message/msg.txt', 'utf8');

     var contents10 = contents.replace(/{rand}/g, function() {
       var s = '';
       var randomchar = function() {
         var n = Math.floor(Math.random() * 62);
         if (n < 10) return n; //1-10
         if (n < 36) return String.fromCharCode(n + 55); //A-Z
         return String.fromCharCode(n + 61); //a-z
       }
       while (s.length < getRndInteger(5,50)) s += randomchar();
       return s;
     });
      var contents11 = contents10.replace('[email]',emails);
      var contents12 = contents11.replace('[mailuser]',emails.replace(args[5],""));
      //console.log(contents12)
      var fakeEmail = emails.replace(args[5],"")

          var subread = fs.readFileSync('message/sub.txt', 'utf8')
          var subject1 = subread.replace(/{rand}/g, function() {
            var s = '';
            var randomchar = function() {
              var n = Math.floor(Math.random() * 62);
              if (n < 10) return n; //1-10
              if (n < 36) return String.fromCharCode(n + 55); //A-Z
              return String.fromCharCode(n + 61); //a-z
            }
            while (s.length < getRndInteger(5,50)) s += randomchar();
            return s;
          });

          var subject2 = str_replace('[mailuser]', emails.replace(args[5],""), subject1)
          var subject3 = subject2.replace(/{space}/g, function() {
            var length = getRndInteger(400,900);
            var result           = '';
            var characters       = '          　ㅤㅤ‎ ‎ ‎ ‎ ‎';
            var charactersLength = characters.length;
            for ( var i = 0; i < length; i++ ) {
               result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;
          });


          var from1 = args[6].replace(/{rand}/g, function() {
            var s = '';
            var randomchar = function() {
              var n = Math.floor(Math.random() * 62);
              if (n < 10) return n; //1-10
              if (n < 36) return String.fromCharCode(n + 55); //A-Z
              return String.fromCharCode(n + 61); //a-z
            }
            while (s.length < getRndInteger(5,50)) s += randomchar();
            return s;
          });
          var from2 = str_replace('[mailuser]', emails.replace(args[5],""), from1)
          var from3 = from2.replace(/{space}/g, function() {
            var length = getRndInteger(400,900);
            var result           = '';
            var characters       = '          　ㅤㅤ‎ ‎ ‎ ‎ ‎';
            var charactersLength = characters.length;
            for ( var i = 0; i < length; i++ ) {
               result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;
          });

      var senderh =  ""
if(args[7] == 0){
   senderh = ``;// none sender
}else if(args[7] == 1){
   senderh = `${randomstrings()}@${randomstrings()}.${domainEnd()}`;// random domain
}else if(args[7] == 2){
  senderh = `${fakeEmail}${randomstring(3)}@${fakeDomain}`;// random domain
}else if(args[7] == 3){
  var love = Math.floor(Math.random() * 3) + 0;

  if(love == 0){
    senderh = ``;// none sender
  }else if(love == 1){
    senderh = `${randomstrings()}@${randomstrings()}.${domainEnd()}`;// random domain
  }else if(love == 2){
    senderh = `${fakeEmail}${randomstring(3)}@${fakeDomain}`;// random domain
  }
}else if(args[7] == 4){
  senderh = `${username}@${fakeDomain}`;// random domain
}


      //console.log(transporter)
      transporter.verify(function(error, success) {
  if (error) {
    console.log('\x1b[32m','Transporter are null or undefined wait please ..');
    //console.log(e)
    fs.appendFile(fileintmp, fucks+"\n", function (err) {
      if (err){
        console.log('throw err#4 : ')
        console.log(err)
      };
    console.log('\x1b[32m','[+] append line in file error successfully in '+fileintmp);

    deleteEmail(function(value) {
  lrs.resume()
    })
    });
  } else {


              var info =  transporter.sendMail({
                //  priority:'high',
                  from: `"${libmime.encodeWord(libmime.encodeWord(from3,'B'),'Q')}" <${senderh}>`, // sender address
                  to: emails, // list of receivers
                  subject: libmime.encodeWord(subject3,'Q'),
                  //text: randomstring(34), // plain text body
                  html:contents12



              }, (err, info) => {

      if(err){
        console.log(err)
        console.log('\x1b[32m','Socket error found we will try to connect again');
        //console.log(e)
        fs.appendFile(fileintmp, fucks+"\n", function (err) {
          if (err){
            console.log('throw err#4 : ')
            console.log(err)
          };
        console.log('\x1b[32m','[+] append line in file error successfully in '+fileintmp);

        deleteEmail(function(value) {
      lrs.resume()
        })
        });
      }else{
        if(args[7] == 0){
          console.log('\x1b[32m','['+motherfucker+'] Message sent to : '+info.accepted[0]+' , From : None','\x1b[0m')
        }else{
        console.log('\x1b[32m','['+motherfucker+'] Message sent to : '+info.accepted[0]+' , From : '+senderh,'\x1b[0m')
        }
        lr.resume();

      }
});

}
})


    });



    lr.on('end',function(){
      //transport.close();
      deleteEmail(function(value) {
lrs.resume()
      })
    })

}).catch(e=>{
  console.log('i fuck u')
  console.log(e)
})





  }else{

    console.log('\x1b[33m','[!] something went wrong code #'+value+'\n','\x1b[0m');
    fs.appendFile(fileintmp, fucks+"\n", function (err) {
  if (err){
    console.log('throw err#1 : ')
    console.log(err);
    lr.resume();
  };
  console.log('\x1b[32m','[+] append line in error file successfully in '+fileintmp+'\n','\x1b[0m');
  console.log('\x1b[33m','[!] we try to resume\n','\x1b[0m');

  deleteEmail(function(value) {
lrs.resume()
  })
});

  }

})

})

lrs.on('end',function(){

if(fs.readFileSync(fileintmp, 'utf8') != ""){
  console.log('\x1b[4m','[x] spam has not end and we try to start again.\n','\x1b[0m','\x1b[0m');
starts(fileintmp)
}else{
  console.log('\x1b[4m','[✔] spams were ended\n','\x1b[0m','\x1b[0m');
  fs.appendFile("finish.txt", "", function (err) {
    if (err){
      console.log('throw err#2 : ')
      console.log(err)
    };

  });


}
})

}


starts('config')



function deleteEmail(callback){

//  console.log("Start");
  console.log('\x1b[31m','\n[-] We try to Delete Email : '+username+'@'+domain+'\n','\x1b[0m','\x1b[0m')
var postData = querystring.stringify({
  'displayName':username,
  'password' : password
    })

var options = {
    host: 'api.emailsrvr.com',
    port: 443,
    path: '/v1/customers/'+userNum+'/domains/'+domain+'/rs/mailboxes/'+username,
      method: 'DELETE',
    headers: {
      'User-Agent': Agent,
      'Content-Type': 'application/x-www-form-urlencoded',
        'accept': 'application/json',
        'X-Api-Signature': apiUserKey+':'+dateme+':'+auth,
        'Content-Length': postData.length
    }
};

const req = https.request(options, (res) => {
  console.log({res:res.statusCode})
  callback(res.statusCode);
})

req.on('error', (error) => {
  callback(error)
})

req.write(postData)
req.end()

}






function createEmail(callback){
  console.log('cccccc')
username = randomstring(10);
// username = ff.internet.userName();
password = randomstring(11);
//  console.log("Start");
  console.log('\x1b[35m','[+] We try to create Email for new Spams: '+username+'@'+domain+'\n','\x1b[0m')
var postData = querystring.stringify({
  'displayName':username,
  'password' : password
    })
    userNum=2544575
    domain='topazevent.net'
    apiUserKey='i9vOvD3SZhiHk+d0tkMj'

var options = {
    host: 'api.emailsrvr.com',
    port: 443,
    path: '/v1/customers/'+userNum+'/domains/'+domain+'/rs/mailboxes/'+username,
      method: 'POST',
    headers: {
      'User-Agent': Agent,
      'Content-Type': 'application/x-www-form-urlencoded',
        'accept': 'application/json',
        'X-Api-Signature': apiUserKey+':'+dateme+':'+auth,
        'Content-Length': postData.length
    }
};

const req = https.request(options, (res) => {
  console.log('/v1/customers/'+userNum+'/domains/'+domain+'/rs/mailboxes/'+username)

console.log({'res.statusCode':res.statusCode})
  callback(res);
})

req.on('error', (error) => {
  callback(error)
})

req.write(postData)
req.end()

}

