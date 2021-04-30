// Intialisation des variables des nom des zones de popUp
// Les noms doivent être les mêmes que les noms des rectangles définis dans Tiled dans le layer object floorLayer
// Ces rectangles définissent la zone ou apparaîtra le popup
// Dans Tiled un layer doit être créé avec le nom de chaque zone de PopUp en retirant le mot Name
// Le nom des layers reprends le nom des variables zone
// Il suffit alors de positionner des tuiles pour definir ou le popUp sera declenche
// Ajouter alors la propriete zone avec le nom du popUp a chacun de ces layers
var zone0WelcomeName = "popUp0Welcome";
var zone1ConferenceName = "popUp1Conference";
//var zoneMeetTheTeamName = "popUpMeetTheTeam";
//var zoneRespectPeopleName = "popUpRespectPeople";
//var zoneCyberCabineName = "popUpCyberRoom";
console.log("SCRIPT IS COMING");
//console.log("TEST");
// url utilisées
var urlWelcome = "https://workadventu.re";
var urlAstrolabe = "https://www.astrolabe.coop/";
// popUp courant
var currentPopup = undefined;
//
var isCoWebSiteOpened =  false;

// Premier popUp quand on entre dans la zone zoneWelcome en sortant de la barque
WA.onEnterZone(zone0WelcomeName, () => {
   currentPopup =  WA.openPopup("popUp0Welcome","Bienvenue sur l'île, espace de démonstration de WorkAdventure. Cet espace étant publique, merci de faire preuve de bienveillance.",[
        {
            label: "Website",
            className: "popUpElement",
            callback: (popup => {
                WA.openCoWebSite(urlWelcome);
                isCoWebSiteOpened = true;
                closePopUp();
            })
        }]);
})
WA.onLeaveZone(zone0WelcomeName, closePopUp)

// popUp d'entrée dans la clairière, zone de conférence Jitsi
WA.onEnterZone(zone1ConferenceName, () => {
   currentPopup =  WA.openPopup("popUp1Conference","Zone de visioconférence, restez entre les menhirs svp.",[
 	{
		label: "OK!",
            className: "popUpElement",
            callback: (popup => {
                closePopUp();
            })
        }]);
})
WA.onLeaveZone(zone1ConferenceName, closePopUp)

/* / WA.onEnterZone(zoneRespectPeopleName, () => {
    currentPopup =  WA.openPopup("popUpRespectPeople","Thank you for respecting people at work :D",[
 	{
		label: "OK!",
            className: "popUpElement",
            callback: (popup => {
                closePopUp();
            })
        }]);
})
WA.onLeaveZone(zoneRespectPeopleName, closePopUp) */

/* WA.onEnterZone(zoneMeetTheTeamName, () => {
    currentPopup =  WA.openPopup("popUpMeetTheTeam","Meet the Astrolabe team ! ",[]);
})
WA.onLeaveZone(zoneWelcomeName, () =>{
    closePopUp();

    if (isCoWebSiteOpened) {
        WA.closeCoWebSite();
        isCoWebSiteOpened = false;
    }
})
WA.onLeaveZone(zoneMeetTheTeamName, closePopUp) */


function closePopUp(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}