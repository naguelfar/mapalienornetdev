// Intialisation des variables des nom des zones de popUp
// Les noms doivent être les mêmes que les noms des rectangles définis dans Tiled dans le layer object floorLayer
// Ces rectangles définissent la zone ou apparaîtra le popup
// Dans Tiled un layer doit être créé avec le nom de chaque zone de PopUp en retirant le mot Name
// Le nom des layers reprends le nom des variables zone
// Il suffit alors de positionner des tuiles pour definir ou le popUp sera declenche
// Ajouter alors la propriete zone avec le nom du popUp a chacun de ces layers
var zone0WelcomeName = "popUpWelcome";
console.log("SCRIPT IS COMING");
//console.log("TEST");
// url utilisées
var urlWelcome = "https://groupe-aquitem.fr";
// popUp courant
var currentPopup = undefined;
//
var isCoWebSiteOpened =  false;

// Premier popUp quand on entre dans la zone zoneWelcome en sortant de la barque
WA.onEnterZone(zone0WelcomeName, () => {
   currentPopup =  WA.openPopup("popUpWelcome","Bienvenue dans les bureaux du Groupe Aquitem. Si vous souhaitez personnaliser votre bureau ne pas hésiter à contacter le service innovation.",[
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



function closePopUp(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}