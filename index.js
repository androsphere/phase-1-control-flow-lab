function scuberGreetingForFeet(value){
  // Write your code here!
  let message;
  let distance = value;
  if (distance <= 400){
    message = "This one is on me!";
  } else if (distance > 400 && distance < 2000){
    message = "That will be twenty bucks.";
  } else if (distance >= 2000 && distance <= 2500){
    message = "I will gladly take your thirty bucks.";
  } else{
    message = "No can do.";
  }
  return message;

}

function ternaryCheckCity(value){
  // Write your code here!
  let city = value;
  let message = city === "NYC" ? "Ok, sounds good.":"No go.";
  return message ;
}

function switchOnCharmFromTip(value){
  // Write your code here!
  let tip = value;
  let message;
  switch (tip){
    case 'generous':
      message = "Thank you so much.";
      break;
    case 'not as generous':
      message = "Thank you.";
      break;
    default:
      message = "Bye.";
      break;
  }
  return message;

}