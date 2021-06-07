
module.exports =  {
    

    async findVowel(req, res) {
        function isVogal(caracter) {
            switch (caracter) {
                case "a":
                case "A":
                case "e":
                case "E":
                case "i":
                case "I":  
                case "o":
                case "O":
                case "u":
                case "U": 
                    return true;
                default:
                    return false;
            }
        }

        const word = { ...req.body }

        for (let i =0; i < word.length; i++) {
            if (isVogal(word[i])) {
                console.log(word[i])
                res.send(word[i])
            }    
        }

        
        

        /* res.json({
            "string": word,
            "vogal": "e",
            "tempoTotal": ""
        }) */

    }
}

