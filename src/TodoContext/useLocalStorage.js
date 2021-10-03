import React from "react";

function useLocalStorage(itemName,initialValue){

    const [error,setError] = React.useState(false);
    const [loading,setLoading] = React.useState(true);
    const [item, setItem] = React.useState(initialValue);
      // console.log(item)

  
    React.useEffect(() => {
  
      setTimeout(() => {
          try{
            const localStorageItem = localStorage.getItem(itemName);
  
            let parsedItem;
            
          
          
            if(!localStorageItem){
              localStorage.setItem(itemName, JSON.stringify(initialValue));
              parsedItem = initialValue;
            }else{
              parsedItem = JSON.parse(localStorageItem);
            }
  
            setItem(parsedItem);
              // console.log(parsedItem)
              setLoading(false);
          }
          catch (error){
            setError(error);
          }
              // console.log('cargaron los items')
      },1000);
  
    },[itemName]);
    
    
  
    const saveItem = (newItem) => {
      try{
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifiedItem);
        setItem(newItem);
        // console.log(newItem,itemName)
      }
      catch(error){
        setError(error);
      }
    };
  
    return {
      item,
      saveItem,
      loading,
      error,
    };
  }

export {useLocalStorage}