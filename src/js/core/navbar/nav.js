   var contentNav = '<nav class="navbar navbar-inverse navbar-fixed-top" id="topnav1" role="navigation">' +
       '<div class="navbar-header">' +
       '<button type="button" class="morph-delay navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">' +
       '<span class="morph-delay sr-only">Toggle navigation</span>' +
       '<span class="morph-delay icon-bar"></span>' +
       '<span class="morph-delay icon-bar"></span>' +
       '<span class="morph-delay icon-bar"></span>' +
       '</button>' +
       '<a class="navbar-brand btn-default-outline" href="index.html">' +
       '<img class="img-responsive" style="height:35px;width:110px;" src="images/logo.png" alt="logo.png">' +
       '</a>' +
       '</div>' +
       '<div class="morph-delay collapse navbar-collapse navbar-right" id="bs-example-navbar-collapse-1">' +
       '<ul class="morph-delay nav navbar-nav">' +
       '<li class="morph-delay divider" id="nav1"></li>' +
       '<li class="animated flipInX" id="nav1"><a href="services.html">Services</a></li>' +
       '<li class="morph-delay divider" id="nav2"></li>' +
       '<li class="animated flipInX" id="nav2"><a href="denture.html">Dentures </a></li>' +
       ' <li class="morph-delay divider" id="nav3"></li>' +
       '<li class="animated flipInX" id="nav3"><a href="about-us.html">About</a></li>' +
       '<li class="morph-delay divider" id="nav4"></li>' +
       '<li class="animated flipInX" id="nav4"><a href="before-after.html">Photos</a></li>' +
       '<li class="morph-delay divider" id="nav5"></li>' +
       '<li class="animated flipInX" id="nav5"><a href="testimonials.html">Testimonials</a></li>' +
       '<li class="morph-delay divider" id="nav6"></li>' +
       '<li class="animated flipInX" id="nav6"><a href="news.html">News</a></li>' +
       '<li class="morph-delay divider" id="nav7"></li>' +
       '<li class="animated flipInX" id="nav7"><a href="appointment.html">Appointment</a></li>' +
       '<li class="morph-delay divider" id="nav8"></li>' +
       '<li class="animated flipInX" id="nav8"><a href="contact.html">Clinic</a></li>' +
       '</ul>' +
       '</div>' +
       '</nav>';

   $('#root').prepend('<div id="fb-root"></div>');
   $('body').append(contentNav);


   (function(d, s, id) {
       var js, fjs = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) return;
       js = d.createElement(s);
       js.id = id;
       js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.11&appId=286140048548175';
       fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));