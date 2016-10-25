// JavaScript authentication file
$(function() {

    // Initialize Firebase
	var config = {
		apiKey: "AIzaSyBk_lbmH7XIHV6UTBQsRq34_NFZDeKnDaw",
		authDomain: "exercise13-24382.firebaseapp.com",
		databaseURL: "https://exercise13-24382.firebaseio.com",
		storageBucket: "exercise13-24382.appspot.com",
		messagingSenderId: "491511493502"
	};
	firebase.initializeApp(config);



    // Sign Up: Function to create account on firebase, then redirect to index.html
    var signUp = function() {
        // Get email, password, and display name
        var email = $('#email').val();
        var password = $("#password").val();
        var name = $('#name').val();

        // Create user, then set the user's display name
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(function(user) {
                // Set display name
                user.updateProfile({
                    displayName: name
                }).then(function() {
                    window.location = '/';
                });
            }).catch(function(error) {
                alert(error.message);
            });

    };

    // SignIn: Function to authenticate on Firebase, then redirect to index.html
    var signIn = function() {
        // Get email and password


        // Authenticate using email and password, then redirect

    };

    // Sign out: Function to log a user out of firebase
    var signOut = function() {
        // Sign out, then redirect



    };

    // Assign event lister to form submission
    $('form').on('submit', function(event) {
        event.preventDefault();
        var formId = $(this).attr('id');
        console.log(formId);
        if (formId == 'sign-up') {
            signUp();
        } else if (formId == 'sign-in') {
            signIn();
        }
    });


    // Assign click event to logout button



    // Authentication Change: see if a user is already signed in, and redirect

            // Rediriect to index.html if there is a user and the pathname isn't '/'

            // Redirect to sign-in if there is NOT a user and the pathname IS '/'

});
