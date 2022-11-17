export const apiChecker = async () => {
    const apiResponse = localStorage.getItem("ApiSwitch")
    if(apiResponse){
        return true
    }else{return false}
}