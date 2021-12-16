const frontPage=document.getElementById("frontPage"), 
    adequanPage=document.getElementById("adequanPage"), 
    adequanWeight=document.getElementById("adequanInput"), 
    adequanUnit=document.getElementById("adequan_lbs_kg"), 
    drugPage=document.getElementById("drugPage"), 
    drugSelector=document.getElementById("drugSelector"), 
    drugWeight=document.getElementById("drugWeight"),
    drugUnit=document.getElementById("drugUnit"),
    solConc=document.getElementById("solConc"),
    bagVol=document.getElementById("bagVol"),
    bagConc=document.getElementById("bagConc"),
    output=document.getElementById("output");

let showAdequan=()=>{
      frontPage.style.display="none";
      adequanPage.style.display="block";
    },
    showDrug=()=>{
      frontPage.style.display="none";
      drugPage.style.display="block";
    },
    showIv=()=>{
      frontPage.style.display="none";
      ivPage.style.display="block";
    },
    home=()=>{
      drugPage.style.display="none";
      adequanPage.style.display="none";
      frontPage.style.display="block";
      ivPage.style.display="none";
      output.innerHTML="";
};

let drugs=
`acepromazine – sedative, tranquilizer, and antiemetic (dose: 0.113 - 0.454mg/kg)
buprenorphine – narcotic for pain relief in cats(dose: 0.001 - 0.003 mg/kg)
carprofen – COX-2 selective NSAID in dogs and cats (dose: 0.125 - 0.25mg/kg)
enalapril – ACE-inhibitor, treats high blood pressure and heart failure (dose: 0.25 - 0.5mg/kg)`;

let holder=drugs.split("\n");
drugTable={};
for (let elem of holder){
  let first=elem.split(" – "),
      name=first[0],
      second=first[1].split("(dose:"),
      desc=second[0],
      lowDose=second[1].slice(0,4),
      highDose=second[1].slice(8,12);
  drugTable[name]={
    name:name,
    desc:desc,
    low:lowDose,
    high:highDose
  }
}


let drugKeys=Object.keys(drugTable);


for (let elem of drugKeys){
  let temp=document.createElement("option");
  temp.text=String(elem).slice(0,1).toUpperCase()+String(elem).slice(1);
  drugSelector.add(temp);
}

let adequanSubmit=()=>{
  let weight=adequanWeight.value;
  if (adequanUnit.value=="lbs"){
    weight=weight/2.205;
  }
  output.innerHTML=`<strong>Amount:  ${Math.round(((weight*0.15)/2)*100)/100}mL`;
}
let roundToTwo=(number)=>{
  let numString=number.toString();
  let spot=numString.indexOf(".");
  numString=numString.slice(0,spot+3);
  return Number(numString);
}
let drugSubmit=()=>{
  let weight=drugWeight.value;
  if (drugUnit.value=="lbs"){
    weight=weight/2.205;
  }
  let drug=drugTable[drugSelector.value.toLowerCase()];
  output.innerHTML=`<strong>${drug.name.charAt(0).toUpperCase()+drug.name.slice(1)}:</strong><br>
Drug Details: ${drug.desc}<br><br>
Low Dose: ${roundToTwo(drug.low*weight)}mg<br>
High Dose: ${roundToTwo(drug.high*weight)}mg`
}
let ivSubmit=()=>{
  let A=solConc.value;
  let C=bagVol.value;
  let B=bagConc.value;
  let requiredVol=roundToTwo((B*C)/(A-B));
  output.innerHTML=`<strong>${requiredVol}mL should be added to the bag volume to achieve a final concentration of ${B}mg/mL.`
}