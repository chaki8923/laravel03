
$(function(){


  $('.delete-image').on('click',function(){
    $('#image-output').attr('src', '');
    $('.prview-inner').css('opacity',0);
    $('.image').attr('src', '');
    
  });

  $('.js-comment').on('keydown',function(){
    console.log('aaa');
    
  })
  
      $('.item-view').find('.js-main-view').addClass('fadeIn');
      $('.js-img-current').addClass('active');
  
      $('.js-click-changeView').on('click',function(e){
  
        if(!$(this).find('.js-img').hasClass('active')){
  
          $path = $(this).find('.js-img').attr('src');
          $target = $(this).find('.js-img');
  
          $('.js-img').removeClass('active');
          $target.addClass('active');
          
          $('.item-view').find('.js-main-view').removeClass('fadeIn');
          setTimeout(function(){
            $('.item-view').find('.js-main-view').attr('src',$path);
            $('.item-view').find('.js-main-view').addClass('fadeIn');
          },400);
        }
      });
  
      $('.js-info-open').on('click',function(){
        $('.info-dropdown').toggleClass('active');
  
        $('.info-open').toggleClass('active');
      });
  
      $('.tab-item').first().addClass('active');
      
      $('.tab-item').on('click',function(){
        $('.tab-item').removeClass('active');
        $(this).addClass('active');
        
      })
   
     
  });


new Vue({
  el:'#app2',
  data: {
      firstCode: '',
      lastCode: '',
      prefecture: '',
      city: '',
      address: ''
  },
  methods:{
      onClick: function() {
          
        console.log('click');
        
          const url = '/ajax/postal_search?'+ [
              'first_code='+ this.firstCode,
              'last_code='+ this.lastCode
          ].join('&');

          axios.get(url).then((response) => {
           
              
              this.prefecture = response.data.prefecture;
              this.city = response.data.city;
              this.address = response.data.address;
              
              

          });
      },
      getPost(){
          const path = '/get_post';
          axios.get(path).then(res => {

            this.firstCode = res.data.first_code;
            this.lastCode = res.data.last_code;

            
          }).catch(function(err){
              console.log(err);

              
          })
      }
  },
  mounted(){
      this.getPost();
  }
})