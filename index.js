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

            let firstCard =10
            let secondCard =4
            let cards = [firstCard, secondCard]
            let sum = firstCard + secondCard
            let hasBlackJack = false
            let isAlive = true
            let message =""


        let messageEl =document.getElementById("message-el")
        let sumEl= document.querySelector("#sum-el")
        let cardEl = document.getElementById("card-el")
        

        function startGame(){
            renderGame()
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
                let card = 6
                sum += card 
                cards.push(card) 
                console.log(cards)
                renderGame()
            }