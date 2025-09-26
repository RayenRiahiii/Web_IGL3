//creation d objet tache
class tache{
    constructor(nom,etat){
        this.nom=nom;
        this.etat=etat;
    }
}
//le tableau des taches
tabTaches=[];
let nbComplete=0;
let nbIncomplete=0;

const key="mesTaches";

//Ajouter une tache
const taskinput=document.getElementById("taskinput");
let liste=document.getElementById("liste");

function ajouterTache(){
    if(taskinput.value===""){
        alert("veuillez entrer une tache");
    }
    else{
        tabTaches.push(new tache(taskinput.value,false))
        ajouterTacheDOM(taskinput.value,false);
        updateStates();
        saveTaches();
    }
    taskinput.value="";
}
//ajoutt dans la liste
function ajouterTacheDOM(nom,etat){
    let span=document.createElement("span");
    liste.appendChild(span);
    let li=document.createElement("li");
    li.innerHTML=nom;
    if (etat){
        li.classList.add("checked");
    }
    else{
        li.classList.add("unchecked");

    }
    span.appendChild(li);
    let btn=document.createElement("button");
    btn.innerHTML="Supprimer";
    span.appendChild(btn);
    btn.setAttribute("onclick","deleteTask(this)");
}

//mise a jour statistiques
function updateStates(){
    nbComplete=tabTaches.filter(tache=>tache.etat===true).length;
    nbIncomplete=tabTaches.filter(tache=>tache.etat===false).length;
    //changer les stats
    if(document.getElementById("completed")){
        document.getElementById("completed").innerHTML=nbComplete;
    }
    if(document.getElementById("remaining")){
        document.getElementById("remaining").innerHTML=nbIncomplete;
    }
    if(document.getElementById("total")){
        document.getElementById("total").innerHTML=tabTaches.length;
    }
}

//supprimer toutes les taches
function clearList(){
    tabTaches=[];
    liste.innerHTML="";
    updateStates();
    saveTaches();
}

//terminer une tache a l aide d un listener

liste.addEventListener("click",(e)=>{
    if(e.target.tagName==="LI"){
        let nomTache=e.target.innerText;
        const tache=tabTaches.find(tache=>tache.nom===nomTache);
        if(tache){
            tache.etat=!tache.etat;
        }
        if(e.target.classList.contains("checked")){
            e.target.classList.remove("checked");
            e.target.classList.add("unchecked");
        }else{
            e.target.classList.remove("unchecked");
            e.target.classList.add("checked");
        }
        updateStates();
        saveTaches();
    }
})

//supprimer une tache
function deleteTask(button){
    let span=button.parentElement;
    let nomTache=span.firstChild.innerText;
    tabTaches=tabTaches.filter(tache=>tache.nom!==nomTache);
    span.remove();
    updateStates();
    saveTaches();
}

//stocker les taches dans le local storage
function saveTaches(){
    localStorage.setItem(key,JSON.stringify(tabTaches));
}

function loadTaches(){
    const raw=localStorage.getItem(key);
    if(!raw)return;
    try{
        const parsed=JSON.parse(raw);
        if(Array.isArray(parsed)){
            tabTaches=parsed;
            liste.innerHTML="";
            tabTaches.forEach(t=>{
                ajouterTacheDOM(t.nom,t.etat);
            });
            updateStates();
        }
    }catch(e){
        console.warn("Impossible de parser les tâches depuis localStorage:",e);
    }
}

window.addEventListener("load",loadTaches);

