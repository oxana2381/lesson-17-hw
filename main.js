let styles=['Jazz','Blues'];
styles.push('Rock-n-Roll');
styles[1]='Classics';
alert(styles.shift());
styles.unshift('Rap','Reggae');


let menu = {
    width:200,
    height:300,
    title: 'My menu'
};

function multiplyNumeric(menu) {
    for (let multiplyNumeric in menu) {

      if ( typeof menu[multiplyNumeric] == 'number') {
       
        menu[multiplyNumeric] *= 2;
      

    }  }
};

    




 
 

    


  


     
    
     
      
  
