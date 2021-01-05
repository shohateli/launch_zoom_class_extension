//IMPORTANT NOTE! Only change the variables with the links and there values! you can also change the class you have within the days arrays but do not change the times!!!!!
const englishMrBerman = "https://us02web.zoom.us/j/2971971075";
const ravMordechai = "https://us02web.zoom.us/j/5308348462";
const navi = "https://edu-il.zoom.us/j/8688205769";
const lashon = "https://us02web.zoom.us/j/8813953479?pwd=azlSSzBabUdNUWhmTFN3Wlg2bGp4UT09";
const sport = "https://us02web.zoom.us/j/3659805041";
const habaa = "https://us02web.zoom.us/j/83615877392?pwd=K3cxRkl0VzBkSkRvNXJUVVRmd2Jhdz09";
const mathRavHillel = "https://edu-il.zoom.us/j/5683343185";
const physics = "https://edu-il.zoom.us/j/6924061335";
const history = "https://edu-il.zoom.us/j/91431779282?pwd=UzV2d1hybzFkaG90OUhGNmduWHJpQT09";
const computers = "https://edu-il.zoom.us/j/5328597593";
const cyber = "https://edu-il.zoom.us/j/2312494605";

//IMPORTANT NOTE! Only change the variables do not chnage the array/list format or the times without knowing what you are doing!!!
const sunday =[[ravMordechai, "9:10"], [englishMrBerman, "14:15"], [physics, "15:05"], [mathRavHillel, "15:50"], [mathRavHillel, "17:45"]];
const monday = [[ravMordechai, "9:10"], [habaa, "14:15"], [navi, "15:05"], [mathRavHillel, "15:50"], [history, "17:45"]];
const tuesday= [[ravMordechai, "9:10"], [computers, "13:15"], [history, "13:50"]];
const wednesday = [[ravMordechai, "9:10"], [mathRavHillel, "14:15"], [mathRavHillel, "15:05"], [englishMrBerman, "15:50"], [englishMrBerman, "17:45"]];
const thursday = [[ravMordechai, "9:10"], [physics, "14:15"], [sport, "15:05"], [cyber, "15:50"], [cyber, "17:45"]];
const friday = [[lashon, "9:05"], [navi, "9:50"], [history, "11:50"]];

setInterval(()=>{
    var today = new Date();
    var day = today.getDay();
    var hour = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    var timeRightNow = `${hour}:${min}:${sec}`;
    console.log(day + "  " + timeRightNow);
       if (day == 0){
           if(timeRightNow === "9:10:0"){
              chrome.tabs.create({url: sunday[0][0]});
           } else if(timeRightNow === "14:15:0"){
              chrome.tabs.create({url: sunday[1][0]});
           } else if(timeRightNow === "15:5:0"){
              chrome.tabs.create({url: sunday[2][0]});
           } else if(timeRightNow === "15:50:0"){
              chrome.tabs.create({url: sunday[3][0]});
           } else if(timeRightNow === "17:45:0"){
              chrome.tabs.create({url: sunday[4][0]});
           }
       } else if (day == 1){
        if(timeRightNow == "9:10:0"){
            chrome.tabs.create({url: monday[0][0]});
         } else if(timeRightNow == "14:15:0"){
            chrome.tabs.create({url: monday[1][0]});
         } else if(timeRightNow == "15:5:0"){
            chrome.tabs.create({url: monday[2][0]});
         } else if(timeRightNow == "15:50:0"){
            chrome.tabs.create({url: monday[3][0]});
         } else if(timeRightNow == "17:45:0"){
            chrome.tabs.create({url: monday[4][0]});
         }
       } else if (day == 2) {
        if(timeRightNow == "9:10:0"){
            chrome.tabs.create({url: tuesday[0][0]});
         } else if(timeRightNow == "13:15:0"){
            chrome.tabs.create({url: tuesday[1][0]});
         } else if(timeRightNow == "13:50:0"){
            chrome.tabs.create({url: tuesday[2][0]});
         }
       } else if (day == 3) {
        if(timeRightNow == "9:10:0"){
            chrome.tabs.create({url: wednesday[0][0]});
         } else if(timeRightNow == "14:15:0"){
            chrome.tabs.create({url: wednesday[1][0]});
         } else if(timeRightNow == "15:5:0"){
            chrome.tabs.create({url: wednesday[2][0]});
         } else if(timeRightNow == "15:50:0"){
            chrome.tabs.create({url: wednesday[3][0]});
         } else if(timeRightNow == "17:45:0"){
            chrome.tabs.create({url: wednesday[4][0]});
         }
       } else if (day == 4) {
        if(timeRightNow == "9:10:0"){
            chrome.tabs.create({url: thursday[0][0]});
         } else if(timeRightNow == "14:15:0"){
            chrome.tabs.create({url: thursday[1][0]});
         } else if(timeRightNow == "15:5:0"){
            chrome.tabs.create({url: thursday[2][0]});
         } else if(timeRightNow == "15:50:0"){
            chrome.tabs.create({url: thursday[3][0]});
         } else if(timeRightNow == "17:45:0"){
            chrome.tabs.create({url: thursday[4][0]});
         }
       } else if (day == 5) {
        if(timeRightNow == "9:5:0"){
            chrome.tabs.create({url: friday[0][0]});
         } else if(timeRightNow == "9:50:0"){
            chrome.tabs.create({url: friday[1][0]});
         } else if(timeRightNow == "11:50:0"){
            chrome.tabs.create({url: friday[2][0]});
         } 
       }
}, 1000);
//chrome.tabs.update({url: "C:\jsProjects\\timeChromeExtension\\wakeup.html"});
