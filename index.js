        /*let firstCard = 6
        let secondCard =9

        let sum = firstCard + secondCard +6


        if (sum < 21){
            console.log("Do you want to draw a new card?")
        } else if (sum === 21) {
            console.log(" wohoo! you have got Blackjack")
        }else if ( sum > 21) {
            console.log("You are out of the game!")
        }


        let age = 19

        if (age <21) {
            console.log(" You can not enter")
        } else { 
                console.log("you are welcome ")
            }


        let age = 102
        if (age < 100){
            console.log("You are not eligible!")}
            else if (age === 100){
                console.log ("Congratulations, you won the birthday card from the King !")
                } else { 
                    console.log("you have already gotten the birthday card")
            }*/

           
            let cards = []
            let sum = 0
            let hasBlackJack = false
            let isAlive = true
            let message =""


        let messageEl =document.getElementById("message-el")
        let sumEl= document.querySelector("#sum-el")
        let cardEl = document.getElementById("card-el")
           
            let player = {
                 name: "Per",
                 chips:200
            }

            let playerEl= document.getElementById("player-el")
            playerEl.textContent = player.name + ":" + player.chips

            function getRandomCard(){
                let randomNumber = Math.floor(Math.random()*13 +1 )
                if (randomNumber > 10){
                    return 10
                }else if(randomNumber ===1){
                    return 11
                }else {
                    return randomNumber
                }
            }




        function startGame(){
           isAlive = true
           let firstCard = getRandomCard()
           let secondCard = getRandomCard()
           cards = [firstCard ,secondCard]
           sum= firstCard + secondCard
        }







            function renderGame (){
                
        cardEl.textContent = "Cards: " 
        //create a loop 
        for (let i=0; i<cards.length; i++) {
            cardEl.textContent += cards[i] + " "
        }
        
        sumEl.textContent = "Sum: " + sum       
        if (sum <= 20){
                    message= " Do you want to draw a new card?"
                }else if (sum === 21){
                    message ="Wohoo , you have got BlackJack"
                    hasBlackJack =true
                }else {
                    message = "You are out of the game. "
                    isAlive = false
                }
                messageEl.textContent= message
            }

            function newCard(){
                if (isAlive === true && hasBlackJack ===false){
                let card = getRandomCard()
            
                sum += card 
                cards.push(card) 
                console.log(cards)
                renderGame()
            }
            }

         

       
