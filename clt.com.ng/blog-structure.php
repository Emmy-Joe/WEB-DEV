<?php
include("header.html");
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <title> BLOG STRUCTURE</title>
    <link rel="shortcut icon" type="image/png" href="image/clt-logo-row.png" />
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="Website Coding Classes | 2024 WAEC/NECO GCE Registration/Tutorials Center in Abuja"/>
    <meta name="keywords" content="Coding, Tutorials, WAEC, NECO, GCE, Registration, Technology, Abuja, ICT, Programming, Digital Skills, Website Development, CBT, Holiday Lessons">
    <meta name="author" content="CRYSTALLINK TUTORIALS AND TECHNOLOGY">
    <link rel="stylesheet" href="fonts/icomoon/style.css">
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/jquery-ui.css">
    <link rel="stylesheet" href="css/owl.carousel.min.css">
    <link rel="stylesheet" href="css/owl.theme.default.min.css">
    <link rel="stylesheet" href="css/owl.theme.default.min.css">
    <link rel="stylesheet" href="css/jquery.fancybox.min.css">
    <link rel="stylesheet" href="css/bootstrap-datepicker.css">
    <link rel="stylesheet" href="fonts/flaticon/font/flaticon.css">
    <link rel="stylesheet" href="css/aos.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/navbar-vb.css">
    
    <style>
        #myBtn{
            display: none; /* Hidden by default */
            position: fixed; /* Fixed/sticky position */
            bottom: 20px; /* Place the button at the bottom of the page */
            right: 45px; /* Place the button 30px from the right */
            z-index: 99; /* Make sure it does not overlap */
            border: none; /* Remove borders */
            outline: none; /* Remove outline */
            background-color: #1de4bcde; /* Set a background color */
            color: white; /* Text color */
            cursor: pointer; /* Add a mouse pointer on hover */
            padding: 15px; /* Some padding */
            border-radius: 10px; /* Rounded corners */
            font-size: 18px; /* Increase font size */
        }

    #myBtn:hover {
      background-color: #555; /* Add a dark-grey background on hover */
    }
    </style>

</head>
<body data-spy="scroll" data-target=".site-navbar-target" data-offset="300">

<div class="site-section-heading overlay">
      <div class="container">
        <div class="row align-items-center justify-content-center text-center">

          <div class="col-md-12" data-aos="fade-up" data-aos-delay="400">
            <div class="row justify-content-center mb-4">
              <div class="col-md-8 text-center">
                <h1>BLOG TITLE Here!</h1>
                <p class="lead">September 07, 2023 &bullet; <em>by</em> Emmanuel Joseph</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div class="site-section">
      <div class="container">
        <div class="row">
          <div class="col-md-8 blog-content">
            <p class="lead"><h2>Sub-title 1</h2> </p>
            <p>content </p>

            <blockquote><p> </p></blockquote>


            <article>
              <p class="lead"><h2>Sub-title 2</h2> </p>
            <p>content</p> 
            </article>

            
        <article>
          <h2>  </h2>
          <p>
      
          </p>
      </article>


      <article>
          <h2>Sub-title...</h2>
          <ul>
          </ul>
      </article>

     
            <div class="pt-5">
              <p>Categories:  <a href="#">Examinations</a>, <a href="#">Events</a>  Tags: <a href="#">#WAEC</a>, <a href="#">#GCE</a></p>
            </div>

            <!--
            COMMENT SECTION
          -->

          </div>
      
          <!--ASIDE SECTION-->
          <?php
            include("aside.php")
          ?>


      </div>
    </div>

<script src="js/navbar.js"></script>
</body>
</html>

<?php
    include("footer.html")
?>