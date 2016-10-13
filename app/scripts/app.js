(function() {
  'use strict';

  var app = angular.module('TabsApp', [])
    .controller('TabsCtrl', ['$scope','$http', function($scope, $http) {
		$scope.name = '';
		$scope.email = '';
		$scope.subject = '';
		$scope.message = '';
		$scope.saveData = function(form) {
		if(form.$valid) {
			var url = "https://api.mailgun.net/v3/sandbox2a2cff20b8064eac8376accd97ba75ff.mailgun.org/messages"
			var dataFields = {
			  to: $scope.email,
			  subject: $scope.subject,
			  text: $scope.message,
        from:"maga.webdesign234@gmail.com"
			}
			var req = {
			  method : 'POST',
			  url: url,
			  headers : {
				'content-type' : 'application/x-ww-form-urlencoded',
				'Authorization' : 'Basic api:key-a94f37dff49941b765ffeb145e34b2d7'
			  },
			  data: dataFields
			}
			$http(req).then(function(data){
			  console.log(data);
			}, function(data){
			  console.log(data);
			});
		}else{
			alert('Please fill all the fields');
		}
	};
		$scope.firstname = "We help customers experiment and transform ideas to reality with quick prototypes and agile based development.";
		$scope.experience ="Experience the difference."
		$scope.technologies ="Leverage open source technologies and tools to deliver high quality and performance. Leverage proven framework and architect for scale, security and mobility."
		$scope.enterprises ="Companies looking to develop products and business applications with agile and leanprinciplesInnovative groups within large enterprises looking to experiment with new technologies"
		$scope.opportunities ="Faster, better and cheaper way to identify solutions to business problems and new opportunities to pursue."
	    $scope.deliver ="We deliver integrated applications utilizing leading-edge technologies."
		$scope.services ="Aequalis started in 2010, with the purpose of providing friendly software services that keep both  our customers and development team happy.At Aequalis, we shape our services and solutions to fitthe way our clients work and the outcomes they need."
		$scope.technology ="Passion for accelerating our client's business and participating in their successes and to become market leader by consistently exceeding  our Customer's expectations; providing them with best technology solutions."
		$scope.technologys ="Our services"
		$scope.develop ="We develop reliable, easy to use software, customized to your exact business requirements!"
		$scope.semantic ="Semantic Web represents the next major evolution in connecting information."
		$scope.company ="About Our Company "
		$scope.us ="About Us"
		$scope.mission ="Our Mission"
		$scope.web ="Semantic Web Solutions"
		$scope.app ="Enterprise Web apps"
		$scope.mobile ="Business Mobile Apps"
		$scope.mobiles ="Our customized mobile applications are tailored to your business"
		$scope.erp ="Cloud ERP"
		$scope.provide ="We provide Web-based ERP solution to improve business among customers, suppliers and partners through self-service portals."
		$scope.design ="Responsive Design"
		$scope.devices ="The use of mobile devices to surf the web is growing at an astronomical pace, but unfortunately much of the web isn't optimized for those mobile devices."
		$scope.force ="Salesforce"
		$scope.sales ="For sales managers, CRM cloud apps provide real-time visibility into their team's activities so they can forecast sales with confidence. For sales reps. "
		$scope.why ="Why Aequalis ?"
		$scope.year ="Years of Professional experiance"
		$scope.accurate ="Accurate Customer Services"
		$scope.worldwide ="Satisfied customers worldwide"
		$scope.satisfied ="Satisfied customers worldwide"
		$scope.java ="JAVA & SCALA"
		$scope.development ="WEB DESIGN & DEVELOPMENT"
		$scope.apps ="SEMANTIC WEB"
	    $scope.products ="MOBILE APPs"
		$scope.oru ="Our Works"
		$scope.group ="All Works"
		$scope.groups ="Business Mobile Apps"
		$scope.cloud ="Cloud Based Web Apps"
		$scope.clouds ="products"
		$scope.avi ="Avi Baratz"
		$scope.founder ="Founder at Funkytone, Israel"
		$scope.pleasure ="It was a pleasure working with the team for more than 3 years. The team is proved to be dedicated, committed and professional."
		$scope.noble ="Richard Noble"
		$scope.professor ="Professor at Harrow International School,Thailand."
		$scope.retailer="Get out there and buy it if you’re a customer and stock it if you're a retailer – you'd be mad not to!"
		$scope.gal ="Gal Levinsky"
		$scope.team ="Co-Founder at Studenteam, Israel."
		$scope.worked="I worked with Aequalis for 3+ years on web development with full satisfaction. The responsiveness of the team is high both in frequency and quality. They adopt new technologies quickly."
		$scope.one ="Previous"
		$scope.two ="Next"
		$scope.join ="Join Us"
		$scope.joining ="By joining this team You will be working with World's most cutting-edge technologies, With best salary package above industry standard.Email us at info@aequalisys.com with your resume and portfolia and/or GitHub or equivalent credentials."
		$scope.required ="Requirements"
		$scope.years =" 1 to 3 years of Scala development experience."
		$scope.actors ="Experience with Akka actors."
		$scope.patterns ="Clear understanding on OOP &amp; Functional programming concepts and design patterns."
		$scope.concurrency ="Vast experience in high concurrency platforms."
		$scope.excellent ="Working experience with MySQL, excellent SQL skills."
		$scope.sbt ="Experience with SBT"
		$scope.source ="Git (or equivalent) source code management"
		$scope.learner ="Quick learner, team player, always up to date with new technologies!"
		$scope.phenomenal ="If you are a phenomenal problem solver looking for cutting edge technical challenges with a team of experienced technologists, we look forward to hearing from you!"
		$scope.get ="Get in Touch"
		$scope.happy ="We'd be more than happy to hear from you. Just fill in the form and we'll get back to you in no time at all!"
		$scope.ports ="Leaders"
		$scope.student ="Mathster"
		$scope.students ="Student Team"
		$scope.management ="HR Management"
		$scope.game ="Memory Game"
		$scope.broide ="Broide Denir"
		$scope.cymbio ="cymbio"
		$scope.tone ="FunkyTone"
		$scope.symphion ="Symphion"
		$scope.automation ="School Automation Software"
		$scope.soft ="2010 &copy; Aequalis Software Solutions Pvt Ltd."
		$scope.num ="044 - 22591779"
		$scope.aeq ="info@aequalisys.com"
		$scope.hr ="hr@aequalisys.com"
		$scope.software ="Aequalis Software Solutions Pvt Ltd,"
		$scope.plot ="Plot No.6, Saisugan Apartment,"
		$scope.cross ="Vengateshwara Nagar, 2nd Cross Street,"
		$scope.rode ="3rd Main Road, Velachery,"
		$scope.rode1 ="Chennai-600042."
		this.tab=1;
	  this.selectTab=function(setTab){

		   document.getElementById(setTab).scrollIntoView();
	  };

	  this.isSelected = function(checkTab){
		  return this.tab===checkTab;
	  };



    }]);

    /* app.directive("scrollPosition", function(){
      return {
          restrict: 'A',
          scope: {
              pos: "="
          },
          transclude: false,
          link: function(scope , element) {

             element[0].onscroll = function(){
              scope.pos=element[0].scrollTop;
              console.log(scope.pos);
              scope.$apply();
            };


            element[0].scrollTop = scope.pos;
          }
      };
  }); */

})();
