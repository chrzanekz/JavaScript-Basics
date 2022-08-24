let count = 0;

function cc(card) {
  // Only change code below this line

    switch (card){
      case 2: count=count+1; break;
      case 3:count=count+1; break;
      case 4:count=count+1; break;
      case 5:count=count+1; break;
      case 6:count=count+1; break;
      case 7: break;
      case 8: break;
      case 9: break;
      case 10: count=count-1; break;
      case "J": count=count-1; break;
      case "Q": count=count-1; break;
      case "K": count=count-1; break;
      case "A": count=count-1; break;
    
    }
    if (count > 0) {
        return count+" Bet";
      }     
        else {
          return count+" Hold";
          }

  
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');
console.log(cc("2"));
