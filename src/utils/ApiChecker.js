export const apiChecker = async () => {
    const apiResponse = localStorage.getItem("ApiSwitch")
    if(apiResponse == true){
        return true
    }else{return false}
}