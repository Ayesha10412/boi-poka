import { toast } from "react-toastify";
const getStoredReadList = ()=>{
const storedListStr = localStorage.getItem('read-list');
if(storedListStr){
    const storedList = JSON.parse(storedListStr);
    return storedList;
}
else{
    return [];
}

}

const addToStoredReadList = (id)=>{
    const storedList = getStoredReadList();
    if(storedList.includes(id)){
        console.log("Already exist")
    }
    else{
        storedList.push(id)
const storedListStr = JSON.stringify(storedList)
localStorage.setItem('read-list', storedListStr)
// ideally trigger toast from the component
toast('This Books is added to your read list.')
    }
};




export {addToStoredReadList,getStoredReadList} 