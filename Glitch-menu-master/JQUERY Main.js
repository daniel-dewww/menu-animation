$(document).ready(function(){
    flag = 0;
    $(".menuIcon").click(function(){
        if(flag==0){
            $(".open").hide();
            $(".close").show();
            
            $(".mainMenu").fadeIn(1000);
            flag=1;
        }
        else{
            $(".open").show();
            $(".close").hide();
            $(".mainMenu").fadeOut(1000);
            flag=0;
        }
    }); 
});








