//creation d objet tach
class tache{
    constructor(nom,etat){
        this.non=nom;
        this.etat=etat;
    }
}
tabTaches=[];
let nbComplete=0;
let nbIncomplete=0;






//Ajout de tache
const taskinput =document.getElementById("taskinput");
let list=document.getElementById("list");

function ajouterTache(){
    if(taskinput.value===""){
        alert("veuillez entrer une tache");
    }
    else{
        tabTaches.push(new tache(taskinput.value,false))
        let span=document.createElement("span");
        liste.appendChild(span);
        let li=document.createElement("Li");
        li.innerHTML=taskinput.value;
        span.appendChild(li);
        let btn=document.createElement("button");
        btn.innerHTML="Supprimer";
        span.appendChild(btn);
        btn.setAttribute("onclick","deletetask(this)");
        document.getElementById("total").innerHTML=tabTaches.length;
        nbIncomplete++;
        document.getElementById("incomplete").innerHTML=nbIncomplete

    }
    taskinput.value="";
}