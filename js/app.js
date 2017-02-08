console.log ('wired up')

$.getJSON('https://congress.api.sunlightfoundation.com/legislators?callback=?').then(function(serverRes){
console.log(serverRes.results)

var legislatorContainerEl = document.querySelector('.legislator-container')
var legislatorObjectsList = serverRes.results

var bigHTMLLegisStr = ''

forEach (legislatorObjectsList, function (legislatorObj){

    var legislatorFirstName = legislatorObj.first_name;
    var legislatorLastName = legislatorObj.last_name;
    var legislatorTitle = legislatorObj.title;
    var legislatorParty = legislatorObj.party;
    var legislatorState = legislatorObj.state_name;
    var legislatorEmail = legislatorObj.oc_email;
    var legislatorWebsite = legislatorObj.website;
    var legislatorFB = legislatorObj.facebook_id;
    var legislatorTwitter = legislatorObj.twitter_id;
    var legislatorTermEnd = legislatorObj.term_end;

    var blockDiv = '<div class="legislator-block">'
    blockDiv     += '<h3>' + legislatorFirstName + " " + legislatorLastName + '</h3>'
    blockDiv     += '<h4>' + legislatorTitle + "--" + legislatorParty + '</h4>'
    blockDiv    +=  '<ul>'
    blockDiv    +=  '<li>' + "email: " + legislatorEmail +'</li>'
    blockDiv    +=  '<li>' + "website: " + legislatorWebsite +'</li>'
    blockDiv    +=  '<li>' + "facebook: " + legislatorFB +'</li>'
    blockDiv    +=  '<li>' + "twitter: " + legislatorTwitter +'</li>'
    blockDiv   += '</ul>'
    blockDiv   += '</br>'
    blockDiv     += '<h5>' + "Term Ends: " + legislatorTermEnd + '</h5>'


    bigHTMLLegisStr += blockDiv

})
legislatorContainerEl.innerHTML = bigHTMLLegisStr
})
