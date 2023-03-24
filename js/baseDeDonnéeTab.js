console.log('hello world');




class Film {
    constructor(title, realisator, timeToMinutes, watchTime, description) {
        this.title = title;
        this.realisator = realisator;
        this.timeToMinutes = timeToMinutes;
        this.watchTime = watchTime;
        this.description = description;
    }
}

const baseDeDonnee = [
    new Film(
        "Creed 3",
        "Michael B. Jordan",
        "116 min",
        "50 min",
        "Dominant toujours le monde de la boxe, Adonis Creed prospère dans sa carrière et sa vie de famille. Lorsque Damian, ami d'enfance et ancien prodige de la boxe, refait surface après avoir purgé une peine de prison, il a hâte de prouver qu'il mérite sa chance dans l'enceinte."
    ),
    new Film(
        "Avatar: La voie de l'eau",
        "James Cameron",
        "190 min",
        "120 min",
        "Jake Sully et Neytiri sont devenus parents. L'intrigue se déroule une dizaine d'années après les événements racontés dans le long-métrage originel. Leur vie idyllique, proche de la nature, est menacée lorsque la « Resources Development Administration », dangereuse organisation non-gouvernementale, est de retour sur Pandora. Contraints de quitter leur habitat naturel, Jake et sa famille se rendent sur les récifs, où ils pensent trouver asile. Mais ils tombent sur un clan, les Metkayina, aux mœurs différentes des leurs..."
    ),
    new Film(
        "Black Panther : Wakanda Forever",
        "Ryan Coogler",
        "162 min",
        "150 min",
        "Après la mort du roi T'Challa alias Black Panther, le Wakanda est en deuil et Ramonda a repris le siège royal avec l'aide de sa fille Shuri, des Dora Milaje, Okoye, Ayo et de M'Baku. Cependant, quand Namor, roi de Talocan, déclare la guerre à la nation, les personnages que nous connaissons vont devoir s'allier à de nouvelles personnes, comme Riri Williams mais aussi à d'anciennes connaissances pour vaincre cette menace."   
    ),
    new Film(
        "Scream VI",
        "Matt Bettinelli-Olpin, Tyler Gillett",
        "123 min",
        "10 min",
        "D'Après avoir frappé à trois reprises à Woodsboro, après avoir terrorisé le campus de Windsor et les studios d’Hollywood, Ghostface a décidé de sévir dans Big Apple, mais dans une ville aussi grande que New York personne ne vous entendra crier…"    
    ),
    new Film(
        "Ant-Man et la Guêpe : Quantumania",
        "Peyton Reed",
        "126 min",
        "0 min",
        "Scott Lang et Hope Van Dyne font équipe avec les parents de Hope et la fille de Scott pour explorer le monde quantique, interagir avec d'étranges nouvelles créatures et se lancer dans une aventure qui les poussera au-delà des limites de ce qu'ils croyaient possible."
    ),
    new Film(
        "The Whale",
        "Darren Aronofsky",
        "117 min",
        "80 min",
        "Charlie, professeur d'anglais reclus souffrant d'obésité, tente de renouer avec sa fille adolescente pour une ultime chance de rédemption."
    ),
    
];