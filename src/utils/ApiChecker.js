export const apiChecker = () => {
    setTimeout(()=>{
        const apiResponse = localStorage.getItem("ApiSwitch");
        console.log("vinay11",apiResponse);
        if(apiResponse===true){
            return true
        }else{return false}
    },100)
}
