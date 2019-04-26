const express = require('express')
const app = express()
var bodyParser = require('body-parser')
var path = require('path');
app.use(bodyParser.json())
const port = 3000
var faker = require('faker');

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get('/dt', (req, res) => {

 
    var d=[];
    for(var i=0;i<1000;i++){
        d.push(evaluate({"city":{_:"city"},product:{_:"product"},"user":{

firstName:{_:"firstName"},
lastName:{_:"lastName"},
findName:{_:"findName"}
        }})) ;
    }
 res.send(d);

})
app.get('/dt', (req, res) => {
    
    var n= evaluate({_:"number"});
    var d = evaluate({ "draw": {_:"number"},
   "recordsTotal": n,
   "recordsFiltered": n});
   d.data = [];
   for(var i=0;i<10;i++){
       d.data.push(evaluate({"city":{_:"city"},product:{_:"product"},"user":{

        firstName:{_:"firstName"},
        lastName:{_:"lastName"},
        findName:{_:"findName"}
                }}));
   }
   res.send(d);
})
app.post('/dt/:id?', (req, res) => {
    if(req.params.id==undefined || req.params.id>100){
        req.params.id=10;
    }
    var n= evaluate({_:"number"});
    var d = evaluate({ "draw": {_:"number"},
   "recordsTotal": n,
   "recordsFiltered": n});
    d.data = [];
   for(var i=0;i<req.params.id;i++){
       d.data.push(evaluate(JSON.parse(JSON.stringify(req.body))));
   }
   res.send(d);
})

var d={
    zipCode:'address.zipCode',
    city:'address.city',
    cityPrefix:'address.cityPrefix',
    citySuffix:'address.citySuffix',
    streetName:'address.streetName',
    streetAddress:'address.streetAddress',
    streetSuffix:'address.streetSuffix',
    streetPrefix:'address.streetPrefix',
    secondaryAddress:'address.secondaryAddress',
    county:'address.county',
    country:'address.country',
    countryCode:'address.countryCode',
    state:'address.state',
    stateAbbr:'address.stateAbbr',
    latitude:'address.latitude',
    longitude:'address.longitude',
    color:'commerce.color',
    department:'commerce.department',
    productName:'commerce.productName',
    price:'commerce.price',
    productAdjective:'commerce.productAdjective',
    productMaterial:'commerce.productMaterial',
    product:'commerce.product',
    suffixes:'company.suffixes',
    companyName:'company.companyName',
    companySuffix:'company.companySuffix',
    catchPhrase:'company.catchPhrase',
    bs:'company.bs',
    catchPhraseAdjective:'company.catchPhraseAdjective',
    catchPhraseDescriptor:'company.catchPhraseDescriptor',
    catchPhraseNoun:'company.catchPhraseNoun',
    bsAdjective:'company.bsAdjective',
    bsBuzz:'company.bsBuzz',
    bsNoun:'company.bsNoun',
    column:'database.column',
    type:'database.type',
    collation:'database.collation',
    engine:'database.engine',
    past:'date.past',
    future:'date.future',
    between:'date.between',
    recent:'date.recent',
    month:'date.month',
    weekday:'date.weekday',
    fake:'fake',
    account:'finance.account',
    accountName:'finance.accountName',
    mask:'finance.mask',
    amount:'finance.amount',
    transactionType:'finance.transactionType',
    currencyCode:'finance.currencyCode',
    currencyName:'finance.currencyName',
    currencySymbol:'finance.currencySymbol',
    bitcoinAddress:'finance.bitcoinAddress',
    iban:'finance.iban',
    bic:'finance.bic',
    abbreviation:'hacker.abbreviation',
    adjective:'hacker.adjective',
    noun:'hacker.noun',
    verb:'hacker.verb',
    ingverb:'hacker.ingverb',
    phrase:'hacker.phrase',
    randomize:'helpers.randomize',
    slugify:'helpers.slugify',
    replaceSymbolWithNumber:'helpers.replaceSymbolWithNumber',
    replaceSymbols:'helpers.replaceSymbols',
    shuffle:'helpers.shuffle',
    mustache:'helpers.mustache',
    createCard:'helpers.createCard',
    contextualCard:'helpers.contextualCard',
    userCard:'helpers.userCard',
    createTransaction:'helpers.createTransaction',
    image:'image.image',
    avatar:'image.avatar',
    imageUrl:'image.imageUrl',
    abstract:'image.abstract',
    animals:'image.animals',
    business:'image.business',
    cats:'image.cats',
    city:'image.city',
    food:'image.food',
    nightlife:'image.nightlife',
    fashion:'image.fashion',
    people:'image.people',
    nature:'image.nature',
    sports:'image.sports',
    technics:'image.technics',
    transport:'image.transport',
    dataUri:'image.dataUri',
    avatar:'internet.avatar',
    email:'internet.email',
    exampleEmail:'internet.exampleEmail',
    userName:'internet.userName',
    protocol:'internet.protocol',
    url:'internet.url',
    domainName:'internet.domainName',
    domainSuffix:'internet.domainSuffix',
    domainWord:'internet.domainWord',
    ip:'internet.ip',
    ipv6:'internet.ipv6',
    userAgent:'internet.userAgent',
    color:'internet.color',
    mac:'internet.mac',
    password:'internet.password',
    word:'lorem.word',
    words:'lorem.words',
    sentence:'lorem.sentence',
    slug:'lorem.slug',
    sentences:'lorem.sentences',
    paragraph:'lorem.paragraph',
    paragraphs:'lorem.paragraphs',
    text:'lorem.text',
    lines:'lorem.lines',
    firstName:'name.firstName',
    lastName:'name.lastName',
    findName:'name.findName',
    jobTitle:'name.jobTitle',
    prefix:'name.prefix',
    suffix:'name.suffix',
    title:'name.title',
    jobDescriptor:'name.jobDescriptor',
    jobArea:'name.jobArea',
    jobType:'name.jobType',
    phoneNumber:'phone.phoneNumber',
    phoneNumberFormat:'phone.phoneNumberFormat',
    phoneFormats:'phone.phoneFormats',
    number:'random.number',
    arrayElement:'random.arrayElement',
    objectElement:'random.objectElement',
    uuid:'random.uuid',
    boolean:'random.boolean',
    word:'random.word',
    words:'random.words',
    image:'random.image',
    locale:'random.locale',
    alphaNumeric:'random.alphaNumeric',
    fileName:'system.fileName',
    commonFileName:'system.commonFileName',
    mimeType:'system.mimeType',
    commonFileType:'system.commonFileType',
    commonFileExt:'system.commonFileExt',
    fileType:'system.fileType',
    fileExt:'system.fileExt',
    directoryPath:'system.directoryPath',
    filePath:'system.filePath',
    semver:'system.semver'
};
function str(o, s) {
    s = s.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
    s = s.replace(/^\./, '');           // strip a leading dot
    var a = s.split('.');
    for (var i = 0, n = a.length; i < n; ++i) {
        var k = a[i];
        if (k in o) {
            o = o[k];
        } else {
            return;
        }
    }
    return o;
}
function evaluate(object) {
    if (object && object.constructor === Array) {
        for (var i = 0; i < object.length; i++) {
            object[i] = evaluate(object[i]);
        }
    } else if (object && typeof object == 'object' && Object.keys(object).length > 0) {
        if (Object.keys(object).indexOf('_') < 0) {
            for (var key in object) {
                object[key] = evaluate(object[key]);
            }
        } else
        {
            object = str(faker,d[object['_']])();
            // if(object['_'].split(".")==1){
            //     object = str(faker,d[object['_']])();
            // }
            // else{
            //     var t= [];
            //     var arr = object['_'].split(".");
            //     for(var j=0;j<Number(arr[1]);j++){
            //         t.push(str(faker,d[arr[0]])());
            //     }
            //     object=t;
                
            // }
        }
    }
    return object;
}


app.listen(4200, function(){
  console.log('listening on *:4200');
});

    
