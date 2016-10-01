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
			  from: "maga.webdesign234@gmail.com"
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
		}

	};