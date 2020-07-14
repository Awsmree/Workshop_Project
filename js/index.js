$(document).ready(function () {

  //animating developer text
  var count = 0;
  developer_animation();
  function developer_animation() {
    setTimeout(function () {
      count++;
      if (count == 1) {
        title = "D";
      } else if (count == 2) {
        title = "De";
      } else if (count == 3) {
        title = "Dev";
      } else if (count == 4) {
        title = "Deve";
      } else if (count == 5) {
        title = "Devel";
      } else if (count == 6) {
        title = "Develo";
      } else if (count == 7) {
        title = "Develop";
      } else if (count == 8) {
        title = "Develope";
      } else if (count == 9) {
        title = "Developer";
      }

      if (count != 10) {
        $('.title').text(`I'm a ${title}`);
        developer_animation();
      } else if (count == 10) {
        count = 0;
        setTimeout(function () {
          designer_animation();
        }, 1000);
      }

    }, 100);
  }


  //animating desinger text
  function designer_animation() {
    setTimeout(function () {
      count++;
      if (count == 1) {
        title = "D";
      } else if (count == 2) {
        title = "De";
      } else if (count == 3) {
        title = "Des";
      } else if (count == 4) {
        title = "Desi";
      } else if (count == 5) {
        title = "Desig";
      } else if (count == 6) {
        title = "Design";
      } else if (count == 7) {
        title = "Designe";
      } else if (count == 8) {
        title = "Designer";
      }

      if (count != 10) {
        $('.title').text(`I'm a ${title}`);
        designer_animation();
      } else if (count == 10) {
        count = 0;
        setTimeout(function () {
          developer_animation();
        }, 1000);
      }

    }, 100);
  }

  //changing button color rgb(180, 149, 8)
  $('.about_me').mouseenter(function () {

    $(this).css('background-color', 'rgb(180, 149, 8)');
    $(this).css('border-color', 'rgb(180, 149, 8)');

  })
  $('.about_me').mouseleave(function () {

    $(this).css('background-color', 'rgb(255, 208, 0)');
    $(this).css('border-color', 'rgb(255, 208, 0)');

  })
  animate_names();
  function animate_names(){

    setTimeout(function(){
      $(".java_name").animate({ fontSize: "+=30px" }, 500);
      $(".java_name").animate({ letterSpacing: "+=15px" }, 1000);
      $(".flutter_name").animate({ fontSize: "+=30px" }, 500);
      $(".flutter_name").animate({ letterSpacing: "+=15px" }, 1000);
      $(".python_name").animate({ fontSize: "+=30px" }, 500);
      $(".python_name").animate({ letterSpacing: "+=15px" }, 1000);

      setTimeout(function () {
        $(".java_name").animate({ fontSize: "-=30px" }, 500);
        $(".java_name").animate({ letterSpacing: "-=15px" }, 1000);
        $(".flutter_name").animate({ fontSize: "-=30px" }, 500);
        $(".flutter_name").animate({ letterSpacing: "-=15px" }, 1000);
        $(".python_name").animate({ fontSize: "-=30px" }, 500);
        $(".python_name").animate({ letterSpacing: "-=15px" }, 1000);
        animate_names();
        }, 4000);
      }, 2000);
  }

  


  $('.project_name').text('Laundary App');
  $('.project_content').text('Laundary App helps us to deal with wash dry clean and iron with pick up and delivery services for every clothes.Laundry App lets us to book laundry services as per our comfort')
  //Changing project images while clicking next and prev
  var project_count = 1;
  $('.next').click(function () {
    if (project_count == 2) {
      project_count = 0;
    }
    project_count++;
    $('.actual_img').attr('src', '/img/project_' + project_count + '.jpg');
    if (project_count == 1) {
      $('.project_name').text('Laundary App');
      $('.project_content').text('Laundary App helps us to deal with wash dry clean and iron with pick up and delivery services for every clothes.Laundry App lets us to book laundry services as per our comfort')
    } else if (project_count == 2) {
      $('.project_name').text('Cut Square App');
      $('.project_content').text('Currently working on this project,cut square app helps us with booking saloon,providing all the service related to saloon like facial,skin care,haircut.')
    }
    
    
   

  });

  $('.prev').click(function () {
    if (project_count == 1) {
      project_count = 2;
    }
    project_count--;
    $('.actual_img').attr('src', '/img/project_' + project_count + '.jpg');
    if (project_count == 1) {
      $('.project_name').text('LAUNDARY APP');
      $('.project_content').text('T')
    } else if (project_count == 2) 
    
    {
      $('.project_name').text('CUT SQUARE APP');
      $('.project_content').text('')
    }
    
    
    
  });




});
