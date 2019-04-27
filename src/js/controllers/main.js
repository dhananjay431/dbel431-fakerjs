    //main.js
    angular
    .module('app')
    .controller('cardChartCtrl1', cardChartCtrl1)
    .controller('cardChartCtrl2', cardChartCtrl2)
    .controller('cardChartCtrl3', cardChartCtrl3)
    .controller('cardChartCtrl4', cardChartCtrl4)
    .controller('trafficDemoCtrl', trafficDemoCtrl)
    .controller('socialBoxCtrl', socialBoxCtrl)
    .controller('sparklineChartCtrl', sparklineChartCtrl)
    .controller('barChartCtrl', barChartCtrl)
    .controller('horizontalBarsCtrl', horizontalBarsCtrl)
    .controller('horizontalBarsType2Ctrl', horizontalBarsType2Ctrl)
    .controller('usersTableCtrl', usersTableCtrl)
    .service('cmm',cmm)
    .controller('mainCtrl', mainCtrl)
    .controller('buttonsCtrl', buttonsCtrl);

    mainCtrl.$inject = ['$scope','cmm'];
    function mainCtrl($scope,cmm){
      console.log(cmm);
      $scope.res={};
      $scope.url = url;
      $scope.call=false;
      var _js = `fetch('${url}/datatable')
      .then(response => response.json())
      .then(json => console.log(json))`;

      var resultJs = document.getElementById('js')
            hljs.highlightBlock(resultJs)
      
            resultJs.innerHTML =
            _js.replace(/\n/g, '<br/>')
                .replace(/\\n/g, ' ')
                .replace(/\t/g, '&nbsp;&nbsp;')

            hljs.highlightBlock(resultJs);

        $scope.fun1 = function(){
          
          $scope.call=true;
          fetch('/datatable/2')
          .then(response => response.json())
          .then(json => {
            $scope.call=false;
            // $scope.res = json;
            // hljs.initHighlighting();
            // $scope.$apply();
            var result = document.getElementById('result')
            hljs.highlightBlock(result)
            var str = JSON.stringify(json, null, '\t')
            // Format result
            result.innerHTML = str.replace(/\n/g, '<br/>') .replace(/\\n/g, ' ') .replace(/\t/g, '&nbsp;&nbsp;');
            hljs.highlightBlock(result);
            $scope.$apply();        

          })

        };


        $scope.apiArr=[{key:"/datatable/50",value:50,method:"GET"},{key:"/datatable/50",value:50,method:"POST"}];

        $scope.init = function(){
          var qr = cmm.data[Math.floor((Math.random() * 16) + 1)];
          var result = document.getElementById('req1')
          hljs.highlightBlock(result)
          var str = JSON.stringify(qr, null, '\t')
          // Format result
          result.innerHTML = str.replace(/\n/g, '<br/>') .replace(/\\n/g, ' ') .replace(/\t/g, '&nbsp;&nbsp;');
          hljs.highlightBlock(result);



          cmm.post(url+'/datatable/10',qr).then(resp =>{
            var result1 = document.getElementById('res1')
            hljs.highlightBlock(result1)
            var str = JSON.stringify(resp, null, '\t')
            // Format result
            result1.innerHTML = str.replace(/\n/g, '<br/>') .replace(/\\n/g, ' ') .replace(/\t/g, '&nbsp;&nbsp;');
            hljs.highlightBlock(result1);
          });

          


        }
        

        hljs.initHighlighting()
        $scope.fun1();
        $scope.init();
      
      

    }
    buttonsCtrl.$inject = ['$scope','cmm'];
    function buttonsCtrl($scope,cmm){
      $scope.key = Object.keys(cmm.allData[0]); 
       $scope.init = function(){
          cmm.post(url+'/getdata',cmm.allData).then(resp =>{
            $scope.data = resp[0];
          })
       };
       $scope.init();
    }
    //convert Hex to RGBA
    function convertHex(hex,opacity){
      hex = hex.replace('#','');
      r = parseInt(hex.substring(0,2), 16);
      g = parseInt(hex.substring(2,4), 16);
      b = parseInt(hex.substring(4,6), 16);

      result = 'rgba('+r+','+g+','+b+','+opacity/100+')';
      return result;
    }

    cardChartCtrl1.$inject = ['$scope'];
    function cardChartCtrl1($scope) {

      $scope.labels = ['January','February','March','April','May','June','July'];
      $scope.data = [
        [65, 59, 84, 84, 51, 55, 40]
      ];
      $scope.colors = [{
        backgroundColor: brandPrimary,
        borderColor: 'rgba(255,255,255,.55)',
      }];
      $scope.options = {
        maintainAspectRatio: false,
        scales: {
          xAxes: [{
            gridLines: {
              color: 'transparent',
              zeroLineColor: 'transparent'
            },
            ticks: {
              fontSize: 2,
              fontColor: 'transparent',
            }

          }],
          yAxes: [{
            display: false,
            ticks: {
              display: false,
              min: Math.min.apply(Math, $scope.data[0]) - 5,
              max: Math.max.apply(Math, $scope.data[0]) + 5,
            }
          }],
        },
        elements: {
          line: {
            borderWidth: 1
          },
          point: {
            radius: 4,
            hitRadius: 10,
            hoverRadius: 4,
          },
        },
      }
    }

    cardChartCtrl2.$inject = ['$scope'];
    function cardChartCtrl2($scope) {

      $scope.labels = ['January','February','March','April','May','June','July'];
      $scope.data = [
        [1, 18, 9, 17, 34, 22, 11]
      ];
      $scope.colors = [{
        backgroundColor: brandInfo,
        borderColor: 'rgba(255,255,255,.55)',
      }];
      $scope.options = {
        maintainAspectRatio: false,
        scales: {
          xAxes: [{
            gridLines: {
              color: 'transparent',
              zeroLineColor: 'transparent'
            },
            ticks: {
              fontSize: 2,
              fontColor: 'transparent',
            }

          }],
          yAxes: [{
            display: false,
            ticks: {
              display: false,
              min: Math.min.apply(Math, $scope.data[0]) - 5,
              max: Math.max.apply(Math, $scope.data[0]) + 5
            }
          }],
        },
        elements: {
          line: {
            tension: 0.00001,
            borderWidth: 1
          },
          point: {
            radius: 4,
            hitRadius: 10,
            hoverRadius: 4,
          },

        },
      }
    }

    cardChartCtrl3.$inject = ['$scope'];
    function cardChartCtrl3($scope) {

      $scope.labels = ['January','February','March','April','May','June','July'];
      $scope.data = [
        [78, 81, 80, 45, 34, 12, 40]
      ];
      $scope.data4 = [
        [35, 23, 56, 22, 97, 23, 64]
      ];
      $scope.colors = [{
        backgroundColor: 'rgba(255,255,255,.2)',
        borderColor: 'rgba(255,255,255,.55)',
      }];
      $scope.options = {
        maintainAspectRatio: false,
        scales: {
          xAxes: [{
            display: false
          }],
          yAxes: [{
            display: false
          }]
        },
        elements: {
          line: {
            borderWidth: 2
          },
          point: {
            radius: 0,
            hitRadius: 10,
            hoverRadius: 4,
          },
        },
      }
    }

    function random(min,max) {
      return Math.floor(Math.random()*(max-min+1)+min);
    }

    cardChartCtrl4.$inject = ['$scope'];
    function cardChartCtrl4($scope) {

      var elements = 16;
      var labels = [];
      var data = [];
      //
      for (var i = 2000; i <= 2000 + elements; i++) {
        labels.push(i);
        data.push(random(40,100));
      }

      $scope.labels = labels;

      $scope.data = [data];

      $scope.colors = [{
        backgroundColor: 'rgba(255,255,255,.3)',
        borderWidth: 0
      }];
      $scope.options = {
        maintainAspectRatio: false,
        scales: {
          xAxes: [{
            display: false,
            barPercentage: 0.6,
          }],
          yAxes: [{
            display: false
          }]
        },
      }
    }

    trafficDemoCtrl.$inject = ['$scope'];
    function trafficDemoCtrl($scope){

      function random(min,max) {
        return Math.floor(Math.random()*(max-min+1)+min);
      }

      var elements = 27;
      var data1 = [];
      var data2 = [];
      var data3 = [];

      for (var i = 0; i <= elements; i++) {
        data1.push(random(50,200));
        data2.push(random(80,100));
        data3.push(65);
      }

      $scope.labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Thursday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
      $scope.series = ['Current', 'Previous', 'BEP'];
      $scope.data = [ data1, data2, data3];
      $scope.colors = [{
        backgroundColor: convertHex(brandInfo,10),
        borderColor: brandInfo,
        pointHoverBackgroundColor: '#fff'

      }, {
        backgroundColor: 'transparent',
        borderColor: brandSuccess,
        pointHoverBackgroundColor: '#fff'
      },{
        backgroundColor: 'transparent',
        borderColor: brandDanger,
        pointHoverBackgroundColor: '#fff',
        borderWidth: 1,
        borderDash: [8, 5]
      }];
      $scope.options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [{
            gridLines: {
              drawOnChartArea: false,
            },
            ticks: {
              callback: function(value) {
                return value.charAt(0);
              }
            }
          }],
          yAxes: [{
            ticks: {
              beginAtZero: true,
              maxTicksLimit: 5,
              stepSize: Math.ceil(250 / 5),
              max: 250
            }
          }]
        },
        elements: {
          point: {
            radius: 0,
            hitRadius: 10,
            hoverRadius: 4,
            hoverBorderWidth: 3,
          }
        },
      }
    }

    dateRangeCtrl.$inject = ['$scope'];
    function dateRangeCtrl($scope) {
      $scope.date = {
        startDate: moment().subtract(5, 'days'),
        endDate: moment()
      };
      $scope.opts = {
        drops: 'down',
        opens: 'left',
        ranges: {
          'Today': [moment(), moment()],
          'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
          'Last 7 days': [moment().subtract(7, 'days'), moment()],
          'Last 30 days': [moment().subtract(30, 'days'), moment()],
          'This month': [moment().startOf('month'), moment().endOf('month')]
        }
      };

      //Watch for date changes
      $scope.$watch('date', function(newDate) {
        //console.log('New date set: ', newDate);
      }, false);

      function gd(year, month, day) {
        return new Date(year, month - 1, day).getTime();
      }
    }

    socialBoxCtrl.$inject = ['$scope'];
    function socialBoxCtrl($scope) {

      $scope.labels = ['January','February','March','April','May','June','July'];
      $scope.data1 = [
        [65, 59, 84, 84, 51, 55, 40]
      ];
      $scope.data2 = [
        [1, 13, 9, 17, 34, 41, 38]
      ];
      $scope.data3 = [
        [78, 81, 80, 45, 34, 12, 40]
      ];
      $scope.data4 = [
        [35, 23, 56, 22, 97, 23, 64]
      ];
      $scope.colors = [{
        backgroundColor: 'rgba(255,255,255,.1)',
        borderColor: 'rgba(255,255,255,.55)',
        pointHoverBackgroundColor: '#fff'
      }];
      $scope.options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [{
            display:false,
          }],
          yAxes: [{
            display:false,
          }]
        },
        elements: {
          point: {
            radius: 0,
            hitRadius: 10,
            hoverRadius: 4,
            hoverBorderWidth: 3,
          }
        },
      }
    }

    sparklineChartCtrl.$inject = ['$scope'];
    function sparklineChartCtrl($scope) {
      $scope.labels = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
      $scope.data1 = [
        [65, 59, 84, 84, 51, 55, 40]
      ];
      $scope.data2 = [
        [1, 13, 9, 17, 34, 41, 38]
      ];
      $scope.data3 = [
        [78, 81, 80, 45, 34, 12, 40]
      ];
      $scope.data4 = [
        [35, 23, 56, 22, 97, 23, 64]
      ];
      $scope.default = [{
        backgroundColor: 'transparent',
        borderColor: '#d1d4d7',
      }];
      $scope.primary = [{
        backgroundColor: 'transparent',
        borderColor: brandPrimary,
      }];
      $scope.info = [{
        backgroundColor: 'transparent',
        borderColor: brandInfo,
      }];
      $scope.danger = [{
        backgroundColor: 'transparent',
        borderColor: brandDanger,
      }];
      $scope.warning = [{
        backgroundColor: 'transparent',
        borderColor: brandWarning,
      }];
      $scope.success = [{
        backgroundColor: 'transparent',
        borderColor: brandSuccess,
      }];
      $scope.options = {
        scales: {
          xAxes: [{
            display:false,
          }],
          yAxes: [{
            display:false,
          }]
        },
        elements: {
          point: {
            radius: 0,
            hitRadius: 10,
            hoverRadius: 4,
            hoverBorderWidth: 3,
          }
        },
      }
    }

    horizontalBarsCtrl.$inject = ['$scope'];
    function horizontalBarsCtrl($scope) {

      $scope.data = [
        {
          day: 'Monday',    new: 34, recurring: 78
        },
        {
          day: 'Tuesday',   new: 56, recurring: 94
        },
        {
          day: 'Wednesday', new: 12, recurring: 67
        },
        {
          day: 'Thursday',  new: 43, recurring: 91
        },
        {
          day: 'Friday',    new: 22, recurring: 73
        },
        {
          day: 'Saturday',  new: 53, recurring: 82
        },
        {
          day: 'Sunday',    new: 9,  recurring: 69
        }
      ];
    }

    horizontalBarsType2Ctrl.$inject = ['$scope'];
    function horizontalBarsType2Ctrl($scope) {

      $scope.gender = [
        {
          title: 'Male',
          icon: 'icon-user',
          value: 43
        },
        {
          title: 'Female',
          icon: 'icon-user-female',
          value: 37
        },
      ];

      $scope.source = [
        {
          title: 'Organic Search',
          icon: 'icon-globe',
          value: 191235,
          percent: 56
        },
        {
          title: 'Facebook',
          icon: 'icon-social-facebook',
          value: 51223,
          percent: 15
        },
        {
          title: 'Twitter',
          icon: 'icon-social-twitter',
          value: 37564,
          percent: 11
        },
        {
          title: 'LinkedIn',
          icon: 'icon-social-linkedin',
          value: 27319,
          percent: 8
        }
      ];
    }

    usersTableCtrl.$inject = ['$scope', '$timeout'];
    function usersTableCtrl($scope, $timeout) {

      $scope.users = [
        {
          avatar: '1.jpg',
          status: 'active',
          name: 'Yiorgos Avraamu',
          new: true,
          registered: 'Jan 1, 2015',
          country: 'USA',
          flag: 'us',
          usage: '50',
          period: 'Jun 11, 2015 - Jul 10, 2015',
          payment: 'mastercard',
          activity: '10 sec ago',
          satisfaction: '48'
        },
        {
          avatar: '2.jpg',
          status: 'busy',
          name: 'Avram Tarasios',
          new: false,
          registered: 'Jan 1, 2015',
          country: 'Brazil',
          flag: 'br',
          usage: '10',
          period: 'Jun 11, 2015 - Jul 10, 2015',
          payment: 'visa',
          activity: '5 minutes ago',
          satisfaction: '61'
        },
        {
          avatar: '3.jpg',
          status: 'away',
          name: 'Quintin Ed',
          new: true,
          registered: 'Jan 1, 2015',
          country: 'India',
          flag: 'in',
          usage: '74',
          period: 'Jun 11, 2015 - Jul 10, 2015',
          payment: 'stripe',
          activity: '1 hour ago',
          satisfaction: '33'
        },
        {
          avatar: '4.jpg',
          status: 'offline',
          name: 'Enéas Kwadwo',
          new: true,
          registered: 'Jan 1, 2015',
          country: 'France',
          flag: 'fr',
          usage: '98',
          period: 'Jun 11, 2015 - Jul 10, 2015',
          payment: 'paypal',
          activity: 'Last month',
          satisfaction: '23'
        },
        {
          avatar: '5.jpg',
          status: 'active',
          name: 'Agapetus Tadeáš',
          new: true,
          registered: 'Jan 1, 2015',
          country: 'Spain',
          flag: 'es',
          usage: '22',
          period: 'Jun 11, 2015 - Jul 10, 2015',
          payment: 'google',
          activity: 'Last week',
          satisfaction: '78'
        },
        {
          avatar: '6.jpg',
          status: 'busy',
          name: 'Friderik Dávid',
          new: true,
          registered: 'Jan 1, 2015',
          country: 'Poland',
          flag: 'pl',
          usage: '43',
          period: 'Jun 11, 2015 - Jul 10, 2015',
          payment: 'amex',
          activity: 'Yesterday',
          satisfaction: '11'
        }
      ]
    }

    clientsTableCtrl.$inject = ['$scope', '$timeout'];
    function clientsTableCtrl($scope, $timeout) {

      $scope.users = [
        {
          avatar: '1.jpg',
          status: 'active',
          name: 'Yiorgos Avraamu',
          registered: 'Jan 1, 2015',
          activity: '10 sec ago',
          transactions: 189,
          comments: 72
        },
        {
          avatar: '2.jpg',
          status: 'busy',
          name: 'Avram Tarasios',
          registered: 'Jan 1, 2015',
          activity: '5 minutes ago',
          transactions: 156,
          comments: 76
        },
        {
          avatar: '3.jpg',
          status: 'away',
          name: 'Quintin Ed',
          registered: 'Jan 1, 2015',
          activity: '1 hour ago',
          transactions: 189,
          comments: 72
        },
        {
          avatar: '4.jpg',
          status: 'offline',
          name: 'Enéas Kwadwo',
          registered: 'Jan 1, 2015',
          activity: 'Last month',
          transactions: 189,
          comments: 72
        },
        {
          avatar: '5.jpg',
          status: 'active',
          name: 'Agapetus Tadeáš',
          registered: 'Jan 1, 2015',
          activity: 'Last week',
          transactions: 189,
          comments: 72
        },
        {
          avatar: '6.jpg',
          status: 'busy',
          name: 'Friderik Dávid',
          registered: 'Jan 1, 2015',
          activity: 'Yesterday',
          transactions: 189,
          comments: 72
        }
      ]
    }

    function random(min,max) {
      return Math.floor(Math.random()*(max-min+1)+min);
    }

    barChartCtrl.$inject = ['$scope'];
    function barChartCtrl($scope) {

      var elements = 16;
      var labels = [];
      var data = [];
      var data1 = [];
      var data2 = [];

      for (var i = 0; i <= elements; i++) {
        labels.push('1');
        data.push(random(40,100));
        data1.push(random(20,100));
        data2.push(random(60,100));
      }

      $scope.labels = labels;

      $scope.data = [data];
      $scope.data1 = [data1];
      $scope.data2 = [data2];

      $scope.options = {
        showScale: false,
        scaleFontSize: 0,
        scaleShowGridLines: false,
        barStrokeWidth : 0,
        barBackground: 'rgba(221, 224, 229, 1)',

        // pointDot :false,
        // scaleLineColor: 'transparent',
      };

      $scope.colors = [{
        backgroundColor : brandInfo,
        borderColor : 'rgba(0,0,0,1)',
        highlightFill: '#818a91',
        pointborderColor: '#000'
      }];
    }
  function cmm(){
    this.data =  [
      {
  "zipCode":{"_":"zipCode"},
  "city":{"_":"city"},
  "cityPrefix":{"_":"cityPrefix"},
  "citySuffix":{"_":"citySuffix"},
  "streetName":{"_":"streetName"},
  "streetAddress":{"_":"streetAddress"},
  "streetSuffix":{"_":"streetSuffix"},
  "streetPrefix":{"_":"streetPrefix"},
  "secondaryAddress":{"_":"secondaryAddress"},
  "county":{"_":"county"},
  "country":{"_":"country"},
  "countryCode":{"_":"countryCode"},
  "state":{"_":"state"},
  "stateAbbr":{"_":"stateAbbr"},
  "latitude":{"_":"latitude"},
  "longitude":{"_":"longitude"}
  },
  {
  "color":{"_":"color"},
  "department":{"_":"department"},
  "productName":{"_":"productName"},
  "price":{"_":"price"},
  "productAdjective":{"_":"productAdjective"},
  "productMaterial":{"_":"productMaterial"},
  "product":{"_":"product"}
  },
  {
  "suffixes":{"_":"suffixes"},
  "companyName":{"_":"companyName"},
  "companySuffix":{"_":"companySuffix"},
  "catchPhrase":{"_":"catchPhrase"},
  "bs":{"_":"bs"},
  "catchPhraseAdjective":{"_":"catchPhraseAdjective"},
  "catchPhraseDescriptor":{"_":"catchPhraseDescriptor"},
  "catchPhraseNoun":{"_":"catchPhraseNoun"},
  "bsAdjective":{"_":"bsAdjective"},
  "bsBuzz":{"_":"bsBuzz"},
  "bsNoun":{"_":"bsNoun"}
  },
  {
  "column":{"_":"column"},
  "type":{"_":"type"},
  "collation":{"_":"collation"},
  "engine":{"_":"engine"},
  }
  ,
  {
  "past":{"_":"past"},
  "future":{"_":"future"},
  "between":{"_":"between"},
  "recent":{"_":"recent"},
  "soon":{"_":"soon"},
  "month":{"_":"month"},
  "weekday":{"_":"weekday"}
  }
  ,
  {
  "account":{"_":"account"},
  "accountName":{"_":"accountName"},
  "mask":{"_":"mask"},
  "amount":{"_":"amount"},
  "transactionType":{"_":"transactionType"},
  "currencyCode":{"_":"currencyCode"},
  "currencyName":{"_":"currencyName"},
  "currencySymbol":{"_":"currencySymbol"},
  "bitcoinAddress":{"_":"bitcoinAddress"},
  "ethereumAddress":{"_":"ethereumAddress"},
  "iban":{"_":"iban"},
  "bic":{"_":"bic"}
  }
  ,
  {
  "abbreviation":{"_":"abbreviation"},
  "adjective":{"_":"adjective"},
  "noun":{"_":"noun"},
  "verb":{"_":"verb"},
  "ingverb":{"_":"ingverb"},
  "phrase":{"_":"phrase"},
  }
  ,
  {
  "randomize":{"_":"randomize"},
  "slugify":{"_":"slugify"},
  "replaceSymbolWithNumber":{"_":"replaceSymbolWithNumber"},
  "replaceSymbols":{"_":"replaceSymbols"},
  "shuffle":{"_":"shuffle"},
  "mustache":{"_":"mustache"},
  "createCard":{"_":"createCard"},
  "contextualCard":{"_":"contextualCard"},
  "userCard":{"_":"userCard"},
  "createTransaction":{"_":"createTransaction"}
  }
  ,
  {
  "image":{"_":"image"},
  "avatar":{"_":"avatar"},
  "imageUrl":{"_":"imageUrl"},
  "abstract":{"_":"abstract"},
  "animals":{"_":"animals"},
  "business":{"_":"business"},
  "cats":{"_":"cats"},
  "city":{"_":"city"},
  "food":{"_":"food"},
  "nightlife":{"_":"nightlife"},
  "fashion":{"_":"fashion"},
  "people":{"_":"people"},
  "nature":{"_":"nature"},
  "sports":{"_":"sports"},
  "technics":{"_":"technics"},
  "transport":{"_":"transport"},
  "dataUri":{"_":"dataUri"}
  }
  ,

  {
      "avatar":{"_":"avatar"},
  "email":{"_":"email"},
  "exampleEmail":{"_":"exampleEmail"},
  "userName":{"_":"userName"},
  "protocol":{"_":"protocol"},
  "url":{"_":"url"},
  "domainName":{"_":"domainName"},
  "domainSuffix":{"_":"domainSuffix"},
  "domainWord":{"_":"domainWord"},
  "ip":{"_":"ip"},
  "ipv6":{"_":"ipv6"},
  "userAgent":{"_":"userAgent"},
  "color":{"_":"color"},
  "mac":{"_":"mac"},
  "password":{"_":"password"}
  }
  ,
  {
      "word":{"_":"word"},
  "words":{"_":"words"},
  "sentence":{"_":"sentence"},
  "slug":{"_":"slug"},
  "sentences":{"_":"sentences"},
  "paragraph":{"_":"paragraph"},
  "paragraphs":{"_":"paragraphs"},
  "text":{"_":"text"},
  "lines":{"_":"lines"}
  }
  ,
  {
      "firstName":{"_":"firstName"},
  "lastName":{"_":"lastName"},
  "findName":{"_":"findName"},
  "jobTitle":{"_":"jobTitle"},
  "prefix":{"_":"prefix"},
  "suffix":{"_":"suffix"},
  "title":{"_":"title"},
  "jobDescriptor":{"_":"jobDescriptor"},
  "jobArea":{"_":"jobArea"},
  "jobType":{"_":"jobType"}
  }
  ,
  {
      "phoneNumber":{"_":"phoneNumber"},
  "phoneNumberFormat":{"_":"phoneNumberFormat"},
  "phoneFormats":{"_":"phoneFormats"}

  }
  ,
  {
  "number":{"_":"number"},
  "float":{"_":"float"},
  "arrayElement":{"_":"arrayElement"},
  "objectElement":{"_":"objectElement"},
  "uuid":{"_":"uuid"},
  "boolean":{"_":"boolean"},
  "word":{"_":"word"},
  "words":{"_":"words"},
  "image":{"_":"image"},
  "locale":{"_":"locale"},
  "alphaNumeric":{"_":"alphaNumeric"},
  "hexaDecimal":{"_":"hexaDecimal"}
  }
  ,
  {
      "fileName":{"_":"fileName"},
  "commonFileName":{"_":"commonFileName"},
  "mimeType":{"_":"mimeType"},
  "commonFileType":{"_":"commonFileType"},
  "commonFileExt":{"_":"commonFileExt"},
  "fileType":{"_":"fileType"},
  "fileExt":{"_":"fileExt"},
  "directoryPath":{"_":"directoryPath"},
  "filePath":{"_":"filePath"},
  "semver":{"_":"semver"}
  }
  ];
  this.post = function(url,data){
    return fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(json => json.json());
  }
  this.allData = [{"zipCode":{"_":"zipCode"}, "city":{"_":"city"}, "cityPrefix":{"_":"cityPrefix"}, "citySuffix":{"_":"citySuffix"}, "streetName":{"_":"streetName"}, "streetAddress":{"_":"streetAddress"}, "streetSuffix":{"_":"streetSuffix"}, "streetPrefix":{"_":"streetPrefix"}, "secondaryAddress":{"_":"secondaryAddress"}, "county":{"_":"county"}, "country":{"_":"country"}, "countryCode":{"_":"countryCode"}, "state":{"_":"state"}, "stateAbbr":{"_":"stateAbbr"}, "latitude":{"_":"latitude"}, "longitude":{"_":"longitude"}, "color":{"_":"color"}, "department":{"_":"department"}, "productName":{"_":"productName"}, "price":{"_":"price"}, "productAdjective":{"_":"productAdjective"}, "productMaterial":{"_":"productMaterial"}, "product":{"_":"product"}, "suffixes":{"_":"suffixes"}, "companyName":{"_":"companyName"}, "companySuffix":{"_":"companySuffix"}, "catchPhrase":{"_":"catchPhrase"}, "bs":{"_":"bs"}, "catchPhraseAdjective":{"_":"catchPhraseAdjective"}, "catchPhraseDescriptor":{"_":"catchPhraseDescriptor"}, "catchPhraseNoun":{"_":"catchPhraseNoun"}, "bsAdjective":{"_":"bsAdjective"}, "bsBuzz":{"_":"bsBuzz"}, "bsNoun":{"_":"bsNoun"}, "column":{"_":"column"}, "type":{"_":"type"}, "collation":{"_":"collation"}, "engine":{"_":"engine"}, "past":{"_":"past"}, "future":{"_":"future"}, "between":{"_":"between"}, "recent":{"_":"recent"}, "month":{"_":"month"}, "weekday":{"_":"weekday"}, "fake":{"_":"fake"}, "account":{"_":"account"}, "accountName":{"_":"accountName"}, "mask":{"_":"mask"}, "amount":{"_":"amount"}, "transactionType":{"_":"transactionType"}, "currencyCode":{"_":"currencyCode"}, "currencyName":{"_":"currencyName"}, "currencySymbol":{"_":"currencySymbol"}, "bitcoinAddress":{"_":"bitcoinAddress"}, "iban":{"_":"iban"}, "bic":{"_":"bic"}, "abbreviation":{"_":"abbreviation"}, "adjective":{"_":"adjective"}, "noun":{"_":"noun"}, "verb":{"_":"verb"}, "ingverb":{"_":"ingverb"}, "phrase":{"_":"phrase"}, "randomize":{"_":"randomize"}, "slugify":{"_":"slugify"}, "replaceSymbolWithNumber":{"_":"replaceSymbolWithNumber"}, "replaceSymbols":{"_":"replaceSymbols"}, "shuffle":{"_":"shuffle"}, "mustache":{"_":"mustache"}, "createCard":{"_":"createCard"}, "contextualCard":{"_":"contextualCard"}, "userCard":{"_":"userCard"}, "createTransaction":{"_":"createTransaction"}, "image":{"_":"image"}, "avatar":{"_":"avatar"}, "imageUrl":{"_":"imageUrl"}, "abstract":{"_":"abstract"}, "animals":{"_":"animals"}, "business":{"_":"business"}, "cats":{"_":"cats"}, "city":{"_":"city"}, "food":{"_":"food"}, "nightlife":{"_":"nightlife"}, "fashion":{"_":"fashion"}, "people":{"_":"people"}, "nature":{"_":"nature"}, "sports":{"_":"sports"}, "technics":{"_":"technics"}, "transport":{"_":"transport"}, "dataUri":{"_":"dataUri"}, "avatar":{"_":"avatar"}, "email":{"_":"email"}, "exampleEmail":{"_":"exampleEmail"}, "userName":{"_":"userName"}, "protocol":{"_":"protocol"}, "url":{"_":"url"}, "domainName":{"_":"domainName"}, "domainSuffix":{"_":"domainSuffix"}, "domainWord":{"_":"domainWord"}, "ip":{"_":"ip"}, "ipv6":{"_":"ipv6"}, "userAgent":{"_":"userAgent"}, "color":{"_":"color"}, "mac":{"_":"mac"}, "password":{"_":"password"}, "word":{"_":"word"}, "words":{"_":"words"}, "sentence":{"_":"sentence"}, "slug":{"_":"slug"}, "sentences":{"_":"sentences"}, "paragraph":{"_":"paragraph"}, "paragraphs":{"_":"paragraphs"}, "text":{"_":"text"}, "lines":{"_":"lines"}, "firstName":{"_":"firstName"}, "lastName":{"_":"lastName"}, "findName":{"_":"findName"}, "jobTitle":{"_":"jobTitle"}, "prefix":{"_":"prefix"}, "suffix":{"_":"suffix"}, "title":{"_":"title"}, "jobDescriptor":{"_":"jobDescriptor"}, "jobArea":{"_":"jobArea"}, "jobType":{"_":"jobType"}, "phoneNumber":{"_":"phoneNumber"}, "phoneNumberFormat":{"_":"phoneNumberFormat"}, "phoneFormats":{"_":"phoneFormats"}, "number":{"_":"number"}, "arrayElement":{"_":"arrayElement"}, "objectElement":{"_":"objectElement"}, "uuid":{"_":"uuid"}, "boolean":{"_":"boolean"}, "word":{"_":"word"}, "words":{"_":"words"}, "image":{"_":"image"}, "locale":{"_":"locale"}, "alphaNumeric":{"_":"alphaNumeric"}, "fileName":{"_":"fileName"}, "commonFileName":{"_":"commonFileName"}, "mimeType":{"_":"mimeType"}, "commonFileType":{"_":"commonFileType"}, "commonFileExt":{"_":"commonFileExt"}, "fileType":{"_":"fileType"}, "fileExt":{"_":"fileExt"}, "directoryPath":{"_":"directoryPath"}, "filePath":{"_":"filePath"}, "semver":{"_":"semver"}} ];
  }