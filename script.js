//dom selectors
const slider = document.getElementById("slideMe");
const content = document.getElementById("content");

let yearNum 

slider.addEventListener("click", function() {
  yearNum = slider.value;
  switch (slider.value) {
    case ('1892'):
      content.innerHTML = `${yearNum}: Francisco Franco was born in El Ferrol, Spain to a middle class family`;
      break;
    case ('1907'):
      content.innerHTML = `${yearNum}: At only 14 years old, Franco enrolled in the Infantry academy in Toledo.`;
      break;
    case ('1912'):
      content.innerHTML = `${yearNum}: Franco volunteered for active duty in Spanish Morocco.`
      break;
    case ('1913'):
      content.innerHTML = `${yearNum}: Franco was promoted to first lieutenant. Franco’s quick climb through the ranks of the Spanish military can be attributed to professionalism and attention to the wellbeing of his troops.`;
      break;
    case ('1915'):
      content.innerHTML = `${yearNum}: Franco became the youngest captain in the Spanish military.`
      break;
    case ('1923'):
      content.innerHTML = `${yearNum}: Franco married his wife, Carmen Polo.`;
      break;
    case ('1926'):
      content.innerHTML = `${yearNum}: By this time, Franco had been involved in many military campaigns and became a national hero. In 1926 he was promoted to brigadier general and continued his leading role in the Spanish military.`;
      break;
    case ('1931'):
      content.innerHTML = `${yearNum}: The Spanish monarchy fell after socialists and republicans won elections across Spain. Military reform was enacted in Spain, and Franco was made inactive. Despite being a monarchist, Franco accepted this without protest.`;
      break;
    case ('1933'):
      content.innerHTML = `${yearNum}: A far right party backed by Italy won the Spanish general elections. Unrest and political tensions spiralled in Spain.`;
      break;
    case ('1936'):
      content.innerHTML = `${yearNum}: The Popular Front, a coalition of left-wing parties, won the majority of seats in the Spanish election. Anarchy grew rapidly, and The Popular Front was unable to control it. Franco had never aligned himself with a political party, and appealed to the government to enforce a state of emergency. They refused, and he was sent to the Canary Islands. Other right-wing military leaders began plotting rebellion. The far-right leader of this rebellion is assassinated. Franco initially resists joining, but seeing the growing anarchy in Spain, he eventually gives in, and the Spanish Civil War ensues.`;
      break;
    case ('1936'):
      content.innerHTML = `${yearNum}: The Spanish civil war began in North Africa. August, Various world powers, such as Portugal, Germany, Italy and USSR made “non-intervention” agreements however the agreements were not followed. General Franco was formally given the title of Caudillo as the leader of the Nationalists (rebels).`;
      break;
    case ('1937'):
      content.innerHTML = `${yearNum}: The bombing of Guernica, etc...`
  }
}); 

slider.addEventListener("touchstart", function() {
  yearNum = slider.value;
  switch (slider.value) {
    case 1892:
      content.innerHTML = `${yearNum}: Francisco Franco was born in El Ferrol, Spain to a middle class family`;
  }
}); 