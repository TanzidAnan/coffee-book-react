const getStrogeData =() =>{
    const strogeCardStr =localStorage.getItem('coffe-card');
    if(strogeCardStr){
        const strogeCard =JSON.parse(strogeCardStr);
        return strogeCard
    }
    else{
        return []
    }
}

const AddToStrogeCardList =(id) =>{
    const strogeCard =getStrogeData();
    if(strogeCard.includes(id)){
        alert('data added')
    }
    else{
        strogeCard.push(id);
        const strogeCardStr =JSON.stringify(strogeCard);
        localStorage.setItem('coffe-card',strogeCardStr);
    }
}

const removeItem =() =>{
    
}

export {AddToStrogeCardList,getStrogeData}