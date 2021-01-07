class Form{
    constructor(){
        this.input=createInput("Name")
        this.button=createButton("Join")
        this.greeting=createElement('h3')
    }
    hide(){
        this.greeting.hide()
        this.button.hide()
        this.input.hide()
    }

    display(){
        var title = createElement('h2')
        title.html("CarRacing")
        title.position(150,0)

        this.input.position(150,150)
        this.button.position(250,200)

        this.button.mousePressed(()=>{
            this.input.hide()
            this.button.hide()

            player.name= this.input.value() 
            playerCount+=1
            player.index = playerCount
            player.updateCount(playerCount)
            player.update()
            this.greeting.html("Welcome "+ player.name)
            this.greeting.position(130,160)
        })
    }
}