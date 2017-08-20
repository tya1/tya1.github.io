<!doctype html>
<head>

  <title>Flickr Slideshow w/ Bootstrap Carousel</title>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="stylesheets/style.css">
  <!-- Latest compiled and minified CSS -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

  <!-- Optional theme -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">

  <script src="https://code.jquery.com/jquery-2.0.3.min.js"></script>
  <!-- Latest compiled and minified JavaScript -->
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
</head>

<body>
<div class="navbar navbar-inverse navbar-fixed-top">
  <div class="container">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">Ty Amelung</a>
    </div>
    <div class="collapse navbar-collapse">
      <ul class="nav navbar-nav">
        <li class="active"><a href="#">Home</a></li>
        <li><a href="https://github.com/UO-CIT/p2-tya1.git">Project 2</a></li>
        <li><a href="https://github.com/UO-CIT/p3-tya1.git">Project 3</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </div><!--/.nav-collapse -->
  </div>
</div>

<div class="container">

  <div class="text-center">
    <h1>Flickr/Bootstrap Carousel</h1>
    <p class="lead">This app uses AJAX to request images from the Flickr photo sharing service, using Flickr's Web API.<br>Enter a tag to retrieve photos from Flickr.</p>

    <div class="input-group">
      <span class="input-group-btn">
        <button class="btn btn-default" type="button">Get Flicker!</button>
      </span>
      <input type="text" class="form-control" placeholder="Enter Flicker Tag">
    </div>
  </div>

<div class="container">
	<div class="span8">
	<div id="myCarousel" class="carousel slide" data-ride="carousel">
		<div class="carousel-inner">
			<div class="item active">
				<img src="images/Elise.png" alt="">
				<div class="carousel-caption">
					<h4>My First Daughter Elise</h4>
				</div>
			</div>
			<div class="item">
				<img src="images/Elise2.png" alt="">
				<div class="carousel-caption">
					<h4>Elise</h4>
				</div>
			</div>
			<div class="item">
				<img src="images/Lucy.png" alt="">
				<div class="carousel-caption">
					<h4>My Second Daughter Lucy</h4>
				</div>
			</div>
			<div class="item">
				<img src="images/Lucy2.png" alt="">
				<div class="carousel-caption">
					<h4>Lucy</h4>
				</div>
			</div>
		</div>
		<a class="left carousel-control" href="#myCarousel" data-slide="prev">
            <span class="glyphicon glyphicon-chevron-left"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="right carousel-control" href="#myCarousel" data-slide="next">
            <span class="glyphicon glyphicon-chevron-right"></span>
            <span class="sr-only">Next</span>
          </a>
	</div>
	</div>
</div>

</div><!-- /.container -->

  <script src="javascripts/app.js"></script>
</body>
</html>
