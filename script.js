//dom selectors
const slider = document.getElementById("slideMe");
const content = document.getElementById("content");
const previous = document.getElementById("previous");
const next = document.getElementById("next");
const yearDisplay = document.getElementById("yearText");

//determine text based on slider value
function textDecide() {
  yearDisplay.innerHTML = year(slider.value);
  switch (slider.value) {
    case ('1'):
      content.innerHTML = `Francisco Franco was born in El Ferrol, Spain to a middle class family`;
      break;
    case ('2'):
      content.innerHTML = `At only 14 years old, Franco enrolled in the Infantry academy in Toledo.`;
      break;
    case ('3'):
      content.innerHTML = `Franco volunteered for active duty in Spanish Morocco.`
      break;
    case ('4'):
      content.innerHTML = `Franco was promoted to first lieutenant. Franco’s quick climb through the ranks of the Spanish military can be attributed to professionalism and attention to the wellbeing of his troops.`;
      break;
    case ('5'):
      content.innerHTML = `Franco became the youngest captain in the Spanish military.`
      break;
    case ('6'):
      content.innerHTML = `Franco married his wife, Carmen Polo.`;
      break;
    case ('7'):
      content.innerHTML = `By this time, Franco had been involved in many military campaigns and became a national hero. In 1926 he was promoted to brigadier general and continued his leading role in the Spanish military.`;
      break;
    case ('8'):
      content.innerHTML = `The Spanish monarchy fell after socialists and republicans won elections across Spain. Military reform was enacted in Spain, and Franco was made inactive. Despite being a monarchist, Franco accepted this without protest.`;
      break;
    case ('9'):
      content.innerHTML = `A far right party backed by Italy won the Spanish general elections. Unrest and political tensions spiralled in Spain.`;
      break;
    case ('10'):
      content.innerHTML = `The Popular Front, a coalition of left-wing parties, won the majority of seats in the Spanish election. Anarchy grew rapidly, and The Popular Front was unable to control it. Franco had never aligned himself with a political party, and appealed to the government to enforce a state of emergency. They refused, and he was sent to the Canary Islands. Right-wing military leaders began plotting rebellion, and the leader was assassinated. Franco initially resisted joining, but seeing the growing anarchy in Spain, he eventually gives in, and the Spanish Civil War beganin North Africa. Various world powers, such as Portugal, Germany, Italy and USSR made “non-intervention” agreements however the agreements were not followed. General Franco was formally given the title of Caudillo as the leader of the Nationalists (rebels).`;
      break;
    case ('11'):
      content.innerHTML = `The civil war raged throughout Spain, with the USSR and France allying with the Republicans, and Germany and Italy allying with Franco's nationalists.`;
      break;
    case ('12'):
      content.innerHTML = `The battle of the Ebro, the longest and largest battle of the war, resulted in victopry for Franco. Spanish media was put under censorship.`;
      break;
    case ('13'):
      content.innerHTML = `Barcelona and Madrid were captured by Nationalist forces. The civil war ended and the Falange became the sole party of Spain, with Franco as leader. World War 2 began.`;
      break;
    case ('14'):
      content.innerHTML = `After the fall of France, Franco indicated willingness to bring Spain into the war on Germany’s side, however, an agreement was never reached.`;
      break;
    case ('15'):
      content.innerHTML = `Spain returned to complete neutrality, however, it was too late in the war to gain any favours from the allied victors.`;
      break;
    case ('16'):
      content.innerHTML = `The UN security council denied Franco’s regime recognition until it developed a representative government.`;
      break;
    case ('17'):
      content.innerHTML = `A referendum made Spain a monarchy, and Franco sovereign for life, with the sole responsibility of appointing a successor.`;
      break;
    case ('18'):
      content.innerHTML = `Franco began forming stronger relations with other countries.`;
      break;
    case ('19'):
      content.innerHTML = `Spain signed a 10 year military assistance pact with the United States.`;
      break;
    case ('20'):
      content.innerHTML = `A referendum was held which approved a new constitution, limiting and defining Franco’s powers.`;
      break;
    case ('21'):
      content.innerHTML = `Franco opened elections for a small minority of deputies to parliament.`;
      break;
    case ('22'):
      content.innerHTML = `Franco assigned 32 year old Juan Carlos (the grandson of the last Spanish king) as the next to take the Spanish throne. `;
      break;
    case ('23'):
      content.innerHTML = `Franco resigned as ‘premier’ but still retained his titles as head of state, commander of armed forces, and head of the ‘movement’.`;
      break;
    case ('24'):
      content.innerHTML = `Death of Francisco Franco. Juan Carlos takes the throne.`;
      break;
    case ('25'):
      content.innerHTML = `Spain completed its transition to a democratic government. The era of Franco's regime had ended.`;
      break;
}}; 

//function to move backwards
function movePrevious() {
  if (slider.value == 1) {
    return; 
  }
  else {
    slider.value = slider.value - 1;
    textDecide();
  }
};

//function to move forwards
function moveNext() {
  if (slider.value == 25) {
    return;
  }
  else {
    slider.value = parseInt(slider.value) + 1;
    textDecide();
  }
};

//determine the year based on slider range
function year(param){
  switch (param) {
    case ('1'):
      return '1892';
    case ('2'):
      return '1907';
    case ('3'):
      return '1912';
    case ('4'):
      return '1913'
    case ('5'):
      return '1915';
    case ('6'):
      return '1923';
    case ('7'):
      return '1926';
    case ('8'):
      return '1931';
    case ('9'):
      return '1933';
    case ('10'):
      return '1936';
    case ('11'):
      return '1937';
    case ('12'):
      return '1938';
    case ('13'):
      return '1939';
    case ('14'):
      return '1940';
    case ('15'):
      return '1943';
    case ('16'):
      return '1946';
    case ('17'):
      return '1947';
    case ('18'):
      return '1948';
    case ('19'):
      return '1952';
    case ('20'):
      return '1966';
    case ('21'):
      return '1967';
    case ('22'):
      return '1969';
    case ('23'):
      return '1973';
    case ('24'):
      return '1975';
    case ('25'):
      return '1977';
}};

//change text when slider is touched - computer
slider.addEventListener("click", function() {
  textDecide();
});
//change text when slider is touched - mobile
slider.addEventListener("touchend", function() {
  textDecide()
}); 

//move to previous when previous button is pressed
previous.addEventListener("click", function() {
  movePrevious();
});
//move to next when next button is clicked
next.addEventListener("click", function() {
  moveNext();
})

//set text to beginning when program initially loads
textDecide();