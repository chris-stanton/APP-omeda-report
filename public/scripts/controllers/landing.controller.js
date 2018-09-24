
myApp.controller('LandingController',['alertify', '$scope', '$http', '$window', function(alertify, $scope, $http, $window) {

  // notification that controller sourced, working and running
  console.log('Landing Controller Running...');
  console.log($window);

  // defining this
  const self = this;

  // defining alertify options
  alertify.logPosition('bottom right');

  // setting init button status
  self.data_container = 'inactive'
  self.button_status = 'button_active';
  self.excel_button_status = 'button_active';

  // setting select data
  self.date = new Date().toLocaleDateString();
  self.organization = 'EPG Media';
  self.brand = 'EPG Media Central Database';

  // defining query(needed for error logging)
  self.query = {};

  // past deployments
  self.yesturday = moment().subtract(1, 'day').format('MM/DD/YYYY');
  self.one_week_back = moment().subtract(7, 'day').format('MM/DD/YYYY');
  self.two_week_back = moment().subtract(14, 'day').format('MM/DD/YYYY');
  self.three_week_back = moment().subtract(21, 'day').format('MM/DD/YYYY');
  self.thirty_week_back = moment().subtract(30, 'day').format('MM/DD/YYYY');
  self.sixty_week_back = moment().subtract(60, 'day').format('MM/DD/YYYY');
  // future Deployments
  self.one_week_out = moment().add(7, 'day').format('MM/DD/YYYY');
  self.two_week_out = moment().add(14, 'day').format('MM/DD/YYYY');
  self.three_week_out = moment().add(21, 'day').format('MM/DD/YYYY');
  self.thirty_week_out = moment().add(30, 'day').format('MM/DD/YYYY');
  self.sixty_week_out = moment().add(60, 'day').format('MM/DD/YYYY');
  self.ninety_week_out = moment().add(90, 'day').format('MM/DD/YYYY');
  // monthly deployments
  self.this_month = moment().format('MMMM YYYY');
  self.month_one = moment().subtract(1, 'month').format('MMMM YYYY');
  self.month_two = moment().subtract(2, 'month').format('MMMM YYYY');
  self.month_three = moment().subtract(3, 'month').format('MMMM YYYY');
  self.month_four = moment().subtract(4, 'month').format('MMMM YYYY');
  self.month_five = moment().subtract(5, 'month').format('MMMM YYYY');
  self.month_six = moment().subtract(6, 'month').format('MMMM YYYY');
  self.month_seven = moment().subtract(7, 'month').format('MMMM YYYY');
  self.month_eight = moment().subtract(8, 'month').format('MMMM YYYY');
  self.month_nine = moment().subtract(9, 'month').format('MMMM YYYY');
  self.month_ten = moment().subtract(10, 'month').format('MMMM YYYY');
  self.month_eleven = moment().subtract(11, 'month').format('MMMM YYYY');
  self.month_twelve = moment().subtract(12, 'month').format('MMMM YYYY');
  self.month_thirteen = moment().subtract(13, 'month').format('MMMM YYYY');
  self.month_fourteen = moment().subtract(14, 'month').format('MMMM YYYY');
  self.month_fifteen = moment().subtract(15, 'month').format('MMMM YYYY');
  self.month_sixteen = moment().subtract(16, 'month').format('MMMM YYYY');
  self.month_seventeen = moment().subtract(17, 'month').format('MMMM YYYY');
  self.month_eighteen = moment().subtract(18, 'month').format('MMMM YYYY');
  self.month_nineteen = moment().subtract(19, 'month').format('MMMM YYYY');
  self.month_twenty = moment().subtract(20, 'month').format('MMMM YYYY');
  self.month_twentyone = moment().subtract(21, 'month').format('MMMM YYYY');
  self.month_twentytwo = moment().subtract(22, 'month').format('MMMM YYYY');
  self.month_twentythree = moment().subtract(23, 'month').format('MMMM YYYY');
  self.month_twentyfour = moment().subtract(24, 'month').format('MMMM YYYY');

  // dummy user data
  self.users = [
    {username: 'Bernadette Wohlman',user_email: 'bwohlman@epgmediallc.com'},
    {username: 'Bruce Kostic',user_email: 'bkostic@epgmediallc.com'},
    {username: 'Christopher Pelikan',user_email: 'cpelikan@boatingindustry.com'},
    {username: 'Chris Stanton',user_email: 'cstanton@epgmediallc.com'},
    {username: 'Karen Kalinyak',user_email: 'kkalinyak@epgmediallc.com'},
    {username: 'Kathy Johnson',user_email: 'Kathy.Johnson@Boatingindustry.com'},
    {username: 'Mary Jo Temei',user_email: 'mtomei@epgmediallc.com'},
    {username: 'Dave McMohan',user_email: 'dmcmahon@powersportsbuisness.com'},
    {username: 'David Voll',user_email: 'dvoll@thunderpress.net'},
    {username: 'Debbie Rittenberg',user_email: 'drittenberg@epgmediallc.com'},
    {username: 'Eric Schroder',user_email: 'eschroder@epgmediallc.com'},
    {username: 'Greg Drevenstedt',user_email: 'gdrevenstedt@ridermagazine.com'},
    {username: 'John Kmitta',user_email: 'jkmitta@epgmediallc.com'},
    {username: 'John Prusak',user_email: 'jprusak@snowgoer.com'},
    {username: 'Jonathan Sweet',user_email: 'jsweet@boatingindustry.com'},
    {username: 'Karen Kalinyak',user_email: 'kkalinyak@epgmediallc.com'},
    {username: 'Kathy Johnson',user_email: 'kjohnson@boatingindustry.com'},
    {username: 'Leslie Palmer',user_email: 'lpalmer@epgmediallc.com'},
    {username: 'Marion Minor',user_email: 'mminor@epgmediallc.com'},
    {username: 'Mark Rosaker',user_email: 'mrosaker@snowgoer.com'},
    {username: 'Mark Marcon',user_email: 'mmarcon@epgmediallc.com'},
    {username: 'Mark Tuttle',user_email: 'mtuttle@ridermagazine.com'},
    {username: 'Melissa Dowling',user_email: 'mdowling@epgmediallc.com'},
    {username: 'Peggy Tupper',user_email: 'ptupper@epgmediallc.com'},
    {username: 'Dave Clayton',user_email: 'dclayton@thunderpress.net'},
    {username: 'Stuart Sutherland',user_email: 'ssutherland@thunderpress.net'},
    {username: 'Cristy Pazera',user_email: 'cpazera@thunderpress.net'},
    {username: 'Joanne Juda-Prainito',user_email: 'jjuda-praintino@epgmediallc.com'},
    {username: 'Marjorie Kleiman',user_email: 'mkleiman@thunderpress.net'},
    {username: 'Laura Kiesler',user_email: 'lkiesler@ridermagazine.com'},
    {username: 'Kyle Swartz',user_email: 'kswartz@epgmediallc.com'},
    {username: 'Rich Alden',user_email: 'ralden@aldensales.com'},
    {username: 'Dave Campbell',user_email: 'dcampbell@epgmediallc.com'},
    {username: 'Barbara Reynolds',user_email: 'breynolds@fueloilnews.com'},
    {username: 'Jeremy Nedelka',user_email: 'jnedelka@epgmediallc.com'},
    {username: 'Haley Nelson',user_email: 'hnelson@epgmediallc.com'},
    {username: 'Marybeth Came',user_email: 'mcame@epgmediallc.com'},
    {username: 'Jimmy Gilligan',user_email: 'jgilligan@powersportsbuisness.com'}
  ];

  // dummy api data
  self.API_response = [
    {
      brand: 'BI',
      type: 'Enews',
      campaign: 'Top10',
      date: '06/04/18',
      headline: 'May Top 10: Yamaha Marine officially unveils new 425 horsepower V8 outboard, Mercury Marine introduces new V-8, V-6 engine models',
      deployed: '13187',
      recieved: '13146',
      bounce: '0.31%',
      opens: '4593',
      unique_opens: '2805',
      open_rate: '21.34%',
      clicks: '1224',
      unique_clicks: '685',
      click_to_open: '24.42%',
      ctr: '5.21%'
    },
    {
      brand: 'BW',
      type: 'Enews',
      campaign: 'Enews',
      date: '06/04/18',
      headline: 'The 2018 Retailers of the Year Part 1',
      deployed: '8316',
      recieved: '7735',
      bounce: '6.99%',
      opens: '1806',
      unique_opens: '1263',
      open_rate: '16.33%',
      clicks: '1119',
      unique_clicks: '452',
      click_to_open: '10.42%',
      ctr: '4.18%'
    },
    {
      brand: 'WR',
      type: 'Enews',
      campaign: 'Enews',
      date: '06/04/18',
      headline: 'The headline of the article',
      deployed: '7326',
      recieved: '6932',
      bounce: '5.34%',
      opens: '806',
      unique_opens: '263',
      open_rate: '6.5%',
      clicks: '1119',
      unique_clicks: '652',
      click_to_open: '10.4%',
      ctr: '2.8%'
    },
    {
      brand: 'BI',
      type: 'Enews',
      campaign: 'Top10',
      date: '06/04/18',
      headline: 'May Top 10: Yamaha Marine officially unveils new 425 horsepower V8 outboard, Mercury Marine introduces new V-8, V-6 engine models',
      deployed: '13187',
      recieved: '13146',
      bounce: '0.31%',
      opens: '4593',
      unique_opens: '2805',
      open_rate: '21.34%',
      clicks: '1224',
      unique_clicks: '685',
      click_to_open: '24.42%',
      ctr: '5.21%'
    },
    {
      brand: 'BW',
      type: 'Enews',
      campaign: 'Enews',
      date: '06/04/18',
      headline: 'The 2018 Retailers of the Year Part 1',
      deployed: '8316',
      recieved: '7735',
      bounce: '6.99%',
      opens: '1806',
      unique_opens: '1263',
      open_rate: '16.33%',
      clicks: '1119',
      unique_clicks: '452',
      click_to_open: '10.42%',
      ctr: '4.18%'
    },
    {
      brand: 'WR',
      type: 'Enews',
      campaign: 'Enews',
      date: '06/04/18',
      headline: 'The headline of the article',
      deployed: '7326',
      recieved: '6932',
      bounce: '5.34%',
      opens: '806',
      unique_opens: '263',
      open_rate: '6.5%',
      clicks: '1119',
      unique_clicks: '652',
      click_to_open: '10.4%',
      ctr: '2.8%'
    }
  ];

  // displays number of obects in the respinse array
  self.API_response_total = self.API_response.length;

  // removes error css
  function error_reset() {
    $scope.organization = 'error_reset';
    $scope.brand = 'error_reset';
    $scope.user = 'error_reset';
    $scope.deployment_date = 'error_reset';
    $scope.name_contains = 'error_reset';
    $scope.trackID = 'error_reset';
    $scope.organization = 'owner';
  };

  // makes query call to API
  self.sendQuery = (query) => {
    error_reset();
    console.log(query);
    if(query.organization === null || query.organization === '' || query.organization === undefined) {
      $scope.organization = 'error';
      alertify.alert("<span class='alert_span'><img src='./assets/images/logo2.png'><h4>Please select an ORGANIZATION</h4><span>");
    } else if(query.brand === null || query.brand === '' || query.brand === undefined) {
      $scope.brand = 'error';
      alertify.alert("<span class='alert_span'><img src='./assets/images/logo2.png'><h4>Please select a BRAND</h4><span>");
    } else if(query.user === null || query.user === '' || query.user === undefined) {
      $scope.user = 'error';
      alertify.alert("<span class='alert_span'><img src='./assets/images/logo2.png'><h4>Please select a USER</h4><span>");
    } else if(query.deployment_date === 'null' || query.deployment_date === null || query.deployment_date === '' || query.deployment_date === undefined) {
      $scope.deployment_date = 'error';
      alertify.alert("<span class='alert_span'><img src='./assets/images/logo2.png'><h4>Please select an DEPLOYMENT date/date range</h4><span>");
    } else {
      self.data_container = 'active'
      self.button_status = 'button_inactive';
      alertify.log('<span class="notification_span"><img class="notification_img" src="./assets/images/logo2.png"><h4>PROCESSING - Creating report </h4></span>');

      $http({
        method: 'GET',
        url: '/api',
        headers: {
          query : query
        }
      }).then(function(response) {
        alertify.success('<span class="notification_span"><img class="notification_img" src="./assets/images/logo2.png"><h4>SUCCESS - Showing query details/response</h4></span>');
        self.button_status = 'button_active';
      }).catch(function(error) {
        alertify.alert("ERROR - connecting with API");
        self.button_status = 'button_active';
        console.log('ERROR connecting with api', error);
      });

    // end if else
    }
  // end sendQuery function
  };

  // exports data to excel
  self.export = (API_response) => {
    self.excel_button_status = 'button_inactive';
    alertify.log('<span class="notification_span"><img class="notification_img" src="./assets/images/logo2.png"><h4>PROCESSING - Creating export to email: ' + self.query.user + '</h4></span>');
    $http({
      method: 'POST',
      url: '/excel_export',
      data: API_response,
      headers: {
        user: self.query.user
      }
    }).then(function(response) {
      alertify.success('<span class="notification_span"><img class="notification_img" src="./assets/images/logo2.png"><h4>SUCCESS - Report is being emailed to ' + self.query.user + '</h4></span>');
      self.excel_button_status = 'button_active';
    }).catch(function(error) {
      alertify.alert("ERROR - exporting and mailing report. Please try again later");
      self.excel_button_status = 'button_active';
      console.log('ERROR exporting to Excel', error);
    });
  };




}]); // end myAPP.controller
