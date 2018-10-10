let kristen = { name: "Kristen Grimm", 
  party: "Democrat", 
  district: "State Senate - District 23", 
  volunteer: [{component: "name", content: ""}, 
    {component: "address", content: ""}, 
    {component: "email", content: ""}, 
    {component: "phone", content: ""}, 
    {component: "availability", content: ""}, 
    {component: "activities", content: ""}
  ], 
  image: [{component: "headshot", content: "headshot.jpg"}, 
    {component: "familyPic", content: "familyPic.jpg"}, 
    {component: "constituents", content: "voters.jpg"}
  ],
  address: [{component: "street", content: "303 Fitzgerald Street"}, 
    {component: "cityStateZip", content: "Franklin, TN 37064"}, 
    {component: "phone", content: "615-319-4512"}
  ],
  platform: [{platformType: "Education", platformText: "I will advocate fully funding our public schools and supporting our teachers and kids in Williamson County.<br><br>Advocate for generous funding of public education up to the federal standard.<br><br>Reduce the amount of testing of our students and teachers by focusing on essential learning in the classroom.<br><br>Work with our legislature to fully fund the current BEP formula that is currently not adequately funding our schools."}, 
    {platformType: "Healthcare", platformText: "I will work across the partisan aisles as a bridge builder to improve health care for all Tennesseans.  I will be a constant, non-stop voice that works with our leaders to bring our TennCare system up to a modern and high functioning standard of public health operations.<br><br> I will graciously and boldly hold the past leadership of this state accountable for not managing our TennCare system up to an adequate measure of sound performance.<br><br>First, I will advocate with our leaders who have been at the helm of this state to make good on their four year old promise to put our TennCare system online.  This is too serious of a promise to break.  The current leadership has spent too long and wasted too much money on a failed online system.<br><br>Families whose children who are in the midst of serious cancer and chronic illness treatment programs need a well functioning TennCare system that keeps their health coverage in a seamless course of coverage. NO family should have to be using snail mail to apply for TennCare while their child is in the hospital for chemotherapy.<br><br>The quality of how we serve half the children in this state who rely upon the mercy of Medicaid should be served by an efficient state legislative system that takes their promises seriously.<br><br>Our Children’s Health and the way we manage our TennCare system should be the legislatures highest priority.  The days of procrastinating and dragging their feet for our kids in this state must end and become a page in the history books of this great state.<br><br>Why is Medicaid so important?  Two words: Children’s Hospitals.<br><br>Know this!  It is imperative that we all understand what sustains our children’s hospitals! We do not have children’s hospitals without Medicaid.<br><br>I will be an advocate for our Children’s Hospitals in our all of our communities.<br><br>We must protect children’s health in this state by improving the quality of our Medicaid system until we bring about the solutions to solve the lack of employer sponsored insurance in this state as only 46% of Tennessee based businesses offers their employees health insurance.<br><br>We must protect all families with sound and comprehensive governing by working together to solve the problems of health care in this state.  It isn’t good enough to simply look good on paper, we must improve our public health programs with our eyes open to the truth about the serious problems that exist in our state and put both feet on the ground to work to make Tennessee the healthiest state in the nation.<br><br>And I can say this for sure.  Friends, we have a long way to go."}, 
    {platformType: "Growth", platformText: "I will advocate for smart and measured growth in Williamson County.<br><br>Help problem solve workforce disruption in Tennessee due to automation and bring awareness to what is at stake for future projected job loss in our communities.<br><br>Bring high quality jobs to the state that offer affordable healthcare to all levels of employment.<br><br>Be a proactive legislator who advocates for planning ahead in all matters concerning our state infrastructure:  roads (Mack Hatcher), highways, bringing our rural communities adequate funding for improving economic development in holistic and comprehensive ways."}
  ], 
  email: "kristen@kistengrimm4tn.com", 
  site: "http://kristengrimm.ngpvanhost.com/", 
  donation: "https://kristengrimm.ngpvanhost.com/onlineactions/WV6GU6Oti02_8Ebx3x7Tng2", 
  mission: "I'm the mother of one of the bravest people I have ever known, and I'm a community advocate for Tennessee's most vulnerable citizens.  Over the years our family has walked the halls of children's hospitals in this nation, as one of our sons has had twenty-two surgeries in his lifetime. We know what is at stake for our most vulnerable citizens here in our state and beyond. Williamson County is our home. My husband and I have raised our family in this beautifully compassionate community since 2001. I'm running for the State Senate because I know that ALL realms of public policy affect the lives of human beings. I am running for the State Senate to represent us as the Good Samaritan community that I know we are. I am running to bring about sound public policy that will generously fund all our Tennessee schools, protect and expand health care for every Tennessean, and move our state forward with sound provisional funding for well managed growth for our greater communities.", 
  register: "https://www.usa.gov/register-to-vote"
};

function nameInfo (name, party, district, headImg){
  return '<div id="nameInfoBlock">' + `<p id="mainName">${name}</p>` + `<p id="party">${party}</p>` + `<p id="district">${district}</p>`+ `<img id="imgSrc" src="${headImg}">` + '</div>';
};
function changeElement (elemLoc, newElem){
  elemLoc = newElem;
  return elemLoc;
};
function addImage (imageLoc, newImage){
  imageLoc.push({component: "gallery", newImage});
}

const divElements = [];

console.table(kristen);
kristen.image[0].content = changeElement (kristen.image[0].content, "https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/38013958_214334149254228_4465639838825054208_o.jpg?_nc_cat=110&oh=1395e15d9ba46a5e60752d6edd857226&oe=5C5DBCC6");
kristen.platform[0].platformType = changeElement (kristen.platform[0].platformType, "Higher Education");
addImage (kristen.image, "https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/38013958_214334149254228_4465639838825054208_o.jpg?_nc_cat=110&oh=1395e15d9ba46a5e60752d6edd857226&oe=5C5DBCC6");
divElements.push(nameInfo(kristen.name, kristen.party, kristen.district, kristen.image[0].content));
console.table(kristen);
divElements.join("");
document.body.innerHTML = divElements;