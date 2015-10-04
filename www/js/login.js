$(document).ready(function() {
	$("#facebook").click(function(e) {
		e.preventDefault();

		var callback = "http://research27.ml:1103/auth/facebook";
		$.get(callback, function(res) {
			console.log(res);
			if (res == 'main')
				$(location).attr('href', './index.html');
			else
				alert("Incorrect");
		});
	});

	$("form").submit(function(e){
		e.preventDefault();

		var email = $('#email').val();
		var pwd = $('#pwd').val();
		var correctInput= function() {
			if (email === '' || pwd === '') {
				return false;
			}
			else {
				if (pwd.length < 8) {
					console.log("pass");
					return false;
				}
				else {
					return true;
				}
			}
		}

		if (correctInput()) {
			var url = "http://research27.ml:1103/login";
			var data = {
				email: email,
				password: pwd
			};
			$.post(url, data, function(res) {
				console.log(res);
				if (res == 'main')
					$(location).attr('href', './index.html');
				else
					alert("Incorrect E-mail or Password!!!");
			});
		}
		else {
			var message = "You should input correct data!!!";
			alert(message);
		}
	});
});
