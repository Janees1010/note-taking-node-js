
const fs = require("fs");
const path = "notes.json"


const add_note = (newdata)=>{
  try{
     const data = JSON.stringify(newdata)
     fs.writeFileSync(path,data)
     console.log("note added successfully");
  }catch(err){
    console.log(err);
  }
}

const read_notes =  ()=>{
    try{
        const data =  fs.readFileSync(path,'utf-8')
        if(data){
    
            return JSON.parse(data)
        }else{
          return [];
        }
    }catch(err){
      console.log(err);
      return [];
    }
}


const remove_note = (title)=>{
  const data = read_notes()
  const new_data =  data.filter((note)=> note.title != title)
  console.log("note removed successfully");
  add_note(new_data)
}

const list_notes = ()=>{
    try{
      const data = read_notes();
      
      if (data.length === 0) {
        console.log("No notes found.");
        return;
    }
        data.forEach((note) => {
         console.log("title:",note.title);
         console.log("body:",note.body);
      });
      return ;
    }catch(err){
        console.log(err);
    }
}

const list_one_note = (title)=>{
    try{
      const data = read_notes();
      const note =  data.find((note)=> note.title == title)
      if(note){
          console.log("title:",note.title);
          console.log("body:",note.body);
      }
    }catch(err){
        console.log(err);
    }
}
// list_notes()
// console.log(remove_note("lol"));

module.exports = {add_note,read_notes,remove_note,list_notes,list_one_note}