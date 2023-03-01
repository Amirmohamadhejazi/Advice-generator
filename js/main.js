async function fetcAdvice(lat, lng) {
    const response = await fetch(`https://api.adviceslip.com/advice`);
    const data = await response.json();
    console.log(data.slip.id)      
    document.getElementById("Advice_num").innerText = `ADVICE #${data.slip.id}`
    document.getElementById("AdviceText").innerText = `${data.slip.advice}`  
}

$('#btntoggleAdvice').on("click" , function(e){
    fetcAdvice()

});
