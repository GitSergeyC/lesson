document.addEventListener('DOMContentLoaded', () => {
    

    // const sladers = document.querySelector(".sladers");
   
    const miniatures = document.querySelector(".miniatures");
    // const miniature = document.querySelector(".miniature");

    const arowleft = document.querySelector(".arow-left");
    const arowright = document.querySelector(".arow-right");

		

	

		let sladerIndex = 0;
		const slader = document.querySelectorAll(".slader");
		console.log(slader)
		const miniature = document.querySelectorAll(".miniature");
		console.log(miniature)

		const content = document.querySelector(".contents").addEventListener("click", event => {
				if (event.target.classList.contains("arow-right")) {
						slader[sladerIndex].classList.remove("activ");
						miniature[sladerIndex].classList.remove("activ");
						sladerIndex = sladerIndex >= 2 ? 0 : sladerIndex + 1
						slader[sladerIndex].classList.add("activ");
						miniature[sladerIndex].classList.add("activ");
						
						
						
				} 
				

				if (event.target.classList.contains("arow-left")) {
					slader[sladerIndex].classList.remove("activ");
					miniature[sladerIndex].classList.remove("activ");
					sladerIndex = sladerIndex <= 0 ? 2 : sladerIndex - 1;
					slader[sladerIndex].classList.add("activ");
					miniature[sladerIndex].classList.add("activ");
			} 
		});
});	

