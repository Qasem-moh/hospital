export function PatinatsModule(id, idN, name, age, isSaved, isVaccin, state) {
  // ID_Patinat	Patinat	Patinat_ID	Age	saved	Vaccin	state	Confirm	Delete
  this.id = id;
  this.idN = idN;
  this.name = name;
  this.age = age;
  this.isSaved = isSaved;
  this.isVaccin = isVaccin;
  this.state = state;
  send(this)
}

function send(id){
    
}
