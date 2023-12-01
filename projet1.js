const prompt = require("prompt-sync")();
console.log("");
console.log("");
console.log("");
console.log("");
console.log("                      ▄▄▄▄   ▓█████  ██▓     ██▓    ▄▄▄        ▄████  ██▓ ▒█████  ")
console.log("                     ▓█████▄ ▓█   ▀ ▓██▒    ▓██▒   ▒████▄     ██▒ ▀█▒▓██▒▒██▒  ██▒")
console.log("                     ▒██▒ ▄██▒███   ▒██░    ▒██░   ▒██  ▀█▄  ▒██░▄▄▄░▒██▒▒██░  ██▒")
console.log("                     ▒██░█▀  ▒▓█  ▄ ▒██░    ▒██░   ░██▄▄▄▄██ ░▓█  ██▓░██░▒██   ██░")
console.log("                     ░▓█  ▀█▓░▒████▒░██████▒░██████▒▓█   ▓██▒░▒▓███▀▒░██░░ ████▓▒░")
console.log("                     ░▒▓███▀▒░░ ▒░ ░░ ▒░▓  ░░ ▒░▓  ░▒▒   ▓▒█░ ░▒   ▒ ░▓  ░ ▒░▒░▒░ ")
console.log("                     ▒░▒   ░  ░ ░  ░░ ░ ▒  ░░ ░ ▒  ░ ▒   ▒▒ ░  ░   ░  ▒ ░  ░ ▒ ▒░ ")
console.log("                      ░    ░    ░     ░ ░     ░ ░    ░   ▒   ░ ░   ░  ▒ ░░ ░ ░ ▒  ")
console.log("                      ░         ░  ░    ░  ░    ░  ░     ░  ░      ░  ░      ░ ░  ")
console.log("                           ░                                                      ");
console.log(" ");
console.log("        POUR GAGNER VOUS DEVEZ SURVIVRE ET ETRE HEUREUX, LE BONHEUR PEUT PRENDRE DIFFERENTES FORMES");
console.log("                             IL Y A TROIS FINS HEUREUSES POSSIBLES");
console.log("                                                                                                      ");
console.log("       ---------------------------------------------------------------------------------------------");
console.log("       |                                                                                            | ");
console.log("       | Vous êtes à l'hotel Bellagio de Las Vegas, vous venez de passer plusieurs heures à jouer   |");
console.log("       |                  au blackjack, vous êtes en veine, vous avez empoché 150.000$              | ");
console.log("       |                                                                                            | ");
console.log("       ---------------------------------------------------------------------------------------------");
console.log("                                                                                               ");
console.log("                     Vous souhaitez rester à la table pour continuer de jouer ?");
console.log("                                                                                               ");
console.log("       ----------------------------------------------------------------------------------------------");
choice = prompt("                                       oui ou non : ");
while (choice != "oui" && choice != "non") {
    choice = prompt("oui ou non : ");
}
if (choice == "oui") {
    console.log("       ----------------------------------------------------------------------------------------------");
    console.log("                                                                                               ");
    console.log("       Vous jouez plusieurs mains mais la chance semble vous avoir quittée, c'est alors que la jeune");
    console.log("       femme à côté de vous, visiblement peu en veine également vous invite à aller boire un verre au ");
    console.log("       bar de l'hotel. Elle porte une superbe robe rouge, elle a beaucoup d'allure et laisse derrière");
    console.log("       elle une douce effluve d'huile de coco. Voulez-vous la suivre ?");
    console.log("                                                                                               ");
    console.log("       ----------------------------------------------------------------------------------------------");
    choice = prompt("                                       oui ou non : ");
    while (choice != "oui" && choice != "non") {
        choice = prompt("oui ou non : ");
    }
    if (choice == "oui") {
        console.log("       ----------------------------------------------------------------------------------------------");
        console.log("                                                                                               ");
        console.log("       Le bar est somptueux, il flotte dans l'air une odeur de cuir et de bois précieux,");
        console.log("       l'ambiance y est exclusive mais demeure chaleureuse.");
        console.log("       Après quelques verres ponctués d'éclats de rires, vous sentez naître une certaine complicité,");
        console.log("       Il est 2h du matin le bar va fermer mais Déborah, qui semble vouloir continuer de s'amuser");
        console.log("       vous invite dans sa suite pour boire un dernier verre. Etes-vous d'accord ?");
        console.log("                                                                                               ");
        console.log("       ----------------------------------------------------------------------------------------------");
        choice = prompt("                                       oui ou non : ");
        while (choice != "oui" && choice != "non") {
            choice = prompt("oui ou non : ");
        }
        if (choice == "oui") {
            console.log("       ---------------------------------------------------------------------------------------------------");
            console.log("                                                                                               ");
            console.log("       Vous prenez l'assenceur avec Debby, oui elle vous a confié son petit surnom.");
            console.log("       Arrivés à l'étage elle vous tend sa carte magnétique, vous l'insérez dans la fente et ouvrez");
            console.log("       la porte, vous êtes subjugué par la vue panoramique sur la ville illuminée.");
            console.log("       Vous vous installez confortablement sur l'immense canapé du salon, vous ouvrez une bouteille");
            console.log("       de champagne et servez deux coupes. Debby se rapproche de vous son verre à la main et vous fixe");
            console.log("       tendrement. L'athmosphère est électrique, décidez vous de passer à l'action ?");
            console.log("                                                                                               ");
            console.log("       ---------------------------------------------------------------------------------------------------");
            choice = prompt("                                       oui ou non : ");
            while (choice != "oui" && choice != "non") {
                choice = prompt("oui ou non : ");
            }
            if (choice == "oui") {
                console.log("       ---------------------------------------------------------------------------------------------------");
                console.log("                                                                                               ");
                console.log("       Vous vous levez et enlacez délicatement la taille de Déborah, vous vous approchez l'un de l'autre");
                console.log("       votre bouche à quelques centimètres de la sienne, votre coeur s'emballe mais Debby s'arrête net.");
                console.log("       Elle vient d'aperçevoir par dessus votre épaule, l'alliance qui a glissée de votre poche sur le");
                console.log("       canapé, elle vous repousse déçue et vous éconduit froidement.");
                console.log("       Elle vous tend l'anneau et vous demande de quitter sa suite.");
                console.log("       Dépité et honteux vous rejoignez votre chambre, pendant la nuit un incendie se déclare au Bellagio.");
                console.log("       Vous périssez dans les flammes.");
                console.log("                                                                                               ");
                console.log("       Vous avez perdu la partie, recommencez pour trouver la voie du bonheur...");
                console.log("                                                                                               ");
                console.log("       ---------------------------------------------------------------------------------------------------");
            }
            else {
                console.log("       ---------------------------------------------------------------------------------------------------");
                console.log("                                                                                               ");
                console.log("       Déborah semble apprécier votre retenue, elle se rapproche de vous et tente de vous embrasser,");
                console.log("       Est-ce que vous faites l'autre moitié du chemin ? : ");
                console.log("                                                                                               ");
                console.log("       ---------------------------------------------------------------------------------------------------");
                choice = prompt("                                       oui ou non : ");
                while (choice != "oui" && choice != "non") {
                    choice = prompt("oui ou non : ");
                }
                if (choice == "oui") {
                    console.log("       ---------------------------------------------------------------------------------------------------");
                    console.log("                                                                                               ");
                    console.log("       Vous vous embrassez langoureusement puis roulez sur le sol avec fougue, les vêtements volent,");
                    console.log("       les corps se raidissent c'est le moment. Est-ce que vous décidez d'aller plus loin ? : ");
                    console.log("                                                                                               ");
                    console.log("       ---------------------------------------------------------------------------------------------------");
                    choice = prompt("                                       oui ou non : ");
                    while (choice != "oui" && choice != "non") {
                        choice = prompt("oui ou non : ");
                    }
                    if (choice == "oui") {
                        console.log("       ---------------------------------------------------------------------------------------------------");
                        console.log("                                                                                               ");
                        console.log("       Vous êtes en pleins ébats, vous ne vous êtes pas rendu compte mais dans votre excitation vous avez");
                        console.log("       fait tombé un chandelier qui enflamme tout à coup les rideaux. Un incendie incotrôlable se");
                        console.log("       propage et vous êtes cernés par les flammes, vous mourrez tous les deux");
                        console.log("");
                        console.log("       Vous êtes mort heureux, mais vous êtes mort, vous avez perdu la partie");
                        console.log("       Recommencez pour trouver la voie du bonheur...");
                        console.log("                                                                                               ");
                        console.log("       ---------------------------------------------------------------------------------------------------");
                    }
                    else {
                        console.log("       ---------------------------------------------------------------------------------------------------");
                        console.log("                                                                                               ");
                        console.log("       Vous vous reprenez, vous êtes marié et Déborah vous avoue qu'elle l'est aussi, vous décidez d'en");
                        console.log("       rester là et de poursuivre cette soirée amicalement comme elle avait commencée.");
                        console.log(" ");
                        console.log("       Vous vous êtes fait une bonne amie, vous avez passé une bonne soirée, vous avez gagné !");
                        console.log("       Il y a une fin encore plus heureuse, recommencez et trouvez la voie du bonheur...");
                        console.log("                                                                                               ");
                        console.log("       ---------------------------------------------------------------------------------------------------");
                    }
                }
                else {
                    console.log("       ---------------------------------------------------------------------------------------------------");
                    console.log("                                                                                               ");
                    console.log("       Vous vous reprenez, vous êtes marié et Déborah vous avoue qu'elle l'est aussi, vous décidez d'en");
                    console.log("       rester là et de poursuivre cette soirée amicalement comme elle avait commencée.");
                    console.log(" ");
                    console.log("       Vous vous êtes fait une bonne amie, vous avez passé une bonne soirée, vous avez gagné !");
                    console.log("       Il y a une fin encore plus heureuse, recommencez et trouvez la voie du bonheur...");
                    console.log("                                                                                               ");
                    console.log("       ---------------------------------------------------------------------------------------------------");
                }

            }
        }
        else {
            console.log("       ---------------------------------------------------------------------------------------------------");
            console.log("                                                                                               ");
            console.log("       Vous décidez de monter vous coucher, mais en passant par le hall de l'hotel l'effervescence du strip");
            console.log("       de Las vegas vous donne envie de continuer la fête. Est-ce que vous décidez de sortir du Bellagio ? : ");
            console.log("                                                                                               ");
            console.log("       ---------------------------------------------------------------------------------------------------");
            choice = prompt("                                       oui ou non : ");
            while (choice != "oui" && choice != "non") {
                choice = prompt("oui ou non : ");
            }
            if (choice == "oui") {
                console.log("       ---------------------------------------------------------------------------------------------------");
                console.log("                                                                                               ");
                console.log("       Au grés de vos déambulations sur le strip vous finissez par tomber sur une curieuse devanture,");
                console.log("       une étroite porte rouge en guise d'entrée, souhaitez vous pénétrer dans cette mystérieuse échoppe ?");
                console.log("                                                                                               ");
                console.log("       ---------------------------------------------------------------------------------------------------");
                choice = prompt("                                       oui ou non : ");
                while (choice != "oui" && choice != "non") {
                    choice = prompt("oui ou non : ");
                }
                if (choice == "oui") {
                    console.log("       ---------------------------------------------------------------------------------------------------");
                    console.log("                                                                                               ");
                    console.log("       Vous vous retrouvez dans un pittoresque restaurant italien, dans la salle vous croisez Déborah");
                    console.log("       atablée avec deux hommes, l'un d'un certain âge qui pourraît être son père et l'autre plus jeune qui");
                    console.log("       si il n'est pas son petit ami risque de le devenir. Ils sont bien assortis et vous vous dites que");
                    console.log("       vous êtes peut-être passé à côté d'une jolie rencontre. Vous rentrez au Bellagio en pensant à cette");
                    console.log("       possible ydille que vous avez raté. Vous vous endormez paisiblement mais vous ne vous réveillerez");
                    console.log("       pas. Un incendie meurtrier au Bellagio a eu raison de vous. Vous êtes mort riche et malheureux. ");
                    console.log("");
                    console.log("       Vous avez perdu, recommencez pour trouver la voie du bonheur...");
                    console.log("                                                                                               ");
                    console.log("       ---------------------------------------------------------------------------------------------------");
                }
                else {
                    console.log("       ---------------------------------------------------------------------------------------------------");
                    console.log("                                                                                               ");
                    console.log("       Vous n'avez finalement pas l'âme aventurière ce soir, vous décidez de rentrer au Bellagio pour");
                    console.log("       dormir. Au cours de la nuit, un incendie se déclare à l'étage de votre chambre, vous périssez");
                    console.log("       dans les flammes !");
                    console.log();
                    console.log("       Vous avez perdu, recommencez pour trouver la voie du bonheur...");
                    console.log("                                                                                               ");
                    console.log("       ---------------------------------------------------------------------------------------------------");
                }

            }
            else {
                console.log("       ---------------------------------------------------------------------------------------------------");
                console.log("                                                                                               ");
                console.log("       Vous n'aimez vraiment pas vous amuser, un million de dollars en poche vous montez vous coucher,");
                console.log("       un incendie se déclare dans l'hotel pendant votre sommeil, vous perrissez dans les flammes !");
                console.log("");
                console.log("       Vous avez perdu, recommencez pour trouver la voie du bonheur...");
                console.log("                                                                                               ");
                console.log("       ---------------------------------------------------------------------------------------------------");
            }

        }
    }
    else {
        console.log("       ---------------------------------------------------------------------------------------------------");
        console.log("                                                                                               ");
        console.log("       vous déclinez poliment et quittez la table en direction de votre suite. Dans le hall de l'hotel un");
        console.log("       vieil homme vous accoste et vous demande si vous pouvez le dépanner de quelques dollars pour passer");
        console.log("       un coup de téléphone à la réception. Acceptez vous ?");
        console.log("                                                                                               ");
        console.log("       ---------------------------------------------------------------------------------------------------");
        choice = prompt("                                       oui ou non : ");
        while (choice != "oui" && choice != "non") {
            choice = prompt("oui ou non : ");
        }
        if (choice == "oui") {
            console.log("       ---------------------------------------------------------------------------------------------------");
            console.log("                                                                                               ");
            console.log("       Après avoir passé son appel, le vieil homme revient vers vous et tiens absolument à vous remercier.");
            console.log("       Il vous propose de venir partager un repas avec sa fille qu'il vient de joindre au téléphone dans");
            console.log("       un coquet restaurant italien au coin de la rue. Acceptez-vous ?");
            console.log("                                                                                               ");
            console.log("       ---------------------------------------------------------------------------------------------------");
            choice = prompt("                                       oui ou non : ");
            while (choice != "oui" && choice != "non") {
                choice = prompt("oui ou non : ");
            }
            if (choice == "oui") {
                console.log("       ---------------------------------------------------------------------------------------------------");
                console.log("                                                                                               ");
                console.log("       Vous êtes atablés avec le vieil homme lorsqu'une jeune femme vous rejoint, vous reconnaissez la");
                console.log("       jeune femme de la table de black jack. Vous passez tous les trois un excellent moment autour d'un");
                console.log("       repas simple et authentique. Il est clair que le courant passe entre vous et Déborah et son père");
                console.log("       semble également vous apprécier. Vous ne le savez pas encore mais ce sera la femme de votre vie... ");
                console.log("                                                                                               ");
                console.log("       Vous avez gagné !")
                console.log("                                                                                               ");
                console.log("       ---------------------------------------------------------------------------------------------------");
            }
            else {
                console.log("       ---------------------------------------------------------------------------------------------------");
                console.log("                                                                                               ");
                console.log("       Vous montez vous coucher dans votre chambre, pendant la nuit un incendie se déclare dans la suite");
                console.log("       voisine où vous avez vu la jeune femme à la robe rouge entrer avec un homme. Plusieurs personnes");
                console.log("       pérrissent dans les flammes et vous faites partie du lot ! ");
                console.log("");
                console.log("       Vous avez perdu, recommencez pour trouver la voie du bonheur...");
                console.log("                                                                                               ");
                console.log("       ---------------------------------------------------------------------------------------------------");
            }
        }
        else {
            console.log("       ---------------------------------------------------------------------------------------------------");
            console.log("                                                                                               ");
            console.log("       Vous montez vous coucher dans votre chambre, pendant la nuit un incendie se déclare dans la suite");
            console.log("       voisine où vous avez vu la jeune femme à la robe rouge entrer avec un homme. Plusieurs personnes");
            console.log("       pérrissent dans les flammes et vous faites partie du lot ! ");
            console.log("");
            console.log("       Vous avez perdu, recommencez pour trouver la voie du bonheur...");
            console.log("                                                                                               ");
            console.log("       ---------------------------------------------------------------------------------------------------");
        }
    }
}
else {
    console.log("       ---------------------------------------------------------------------------------------------------");
    console.log("                                                                                               ");
    console.log("       Vous quittez la table, voulez-vous monter dans votre chambre ? : ");
    console.log("                                                                                               ");
    console.log("       ---------------------------------------------------------------------------------------------------");
    choice = prompt("                                       oui ou non : ");
    while (choice != "oui" && choice != "non") {
        choice = prompt("oui ou non : ");
    }
    if (choice == "oui") {
        console.log("       ---------------------------------------------------------------------------------------------------");
        console.log("                                                                                               ");
        console.log("       Vous décidez de monter vous coucher, pendant la nuit un incendie se déclare au Bellagio vous");
        console.log("       perrissez dans les flammes ! ");
        console.log("");
        console.log("       Vous avez perdu, recommencez pour trouver la voie du bonheur...");
        console.log("                                                                                               ");
        console.log("       ---------------------------------------------------------------------------------------------------");
    }
    else {
        console.log("       ---------------------------------------------------------------------------------------------------");
        console.log("                                                                                               ");
        console.log("       Vous décidez de vous rendre au bar de l'hotel où vous remarquez la présence d'un couple, un homme");
        console.log("       en smoking noir à la mine heureuse et une superbe jeune femme en robe rouge.");
        console.log("       Voulez-vous les accoster ? ");
        console.log("                                                                                               ");
        console.log("       ---------------------------------------------------------------------------------------------------");
        choice = prompt("                                       oui ou non : ");
        while (choice != "oui" && choice != "non") {
            choice = prompt("oui ou non : ");
        }
        if (choice == "oui") {
            console.log("       ---------------------------------------------------------------------------------------------------");
            console.log("                                                                                               ");
            console.log("       Il s'avère que le couple n'en est pas un et vous passez un bon moment tous les trois. Au bout d'une");
            console.log("       heure, l'homme au smoking décide de prendre congé, vous vous retrouvez seul avec la jeune femme.");
            console.log("       Voulez-vous l'inviter dans votre chambre à boire un dernier verre ");
            console.log("                                                                                               ");
            console.log("       ---------------------------------------------------------------------------------------------------");
            choice = prompt("                                       oui ou non : ");
            while (choice != "oui" && choice != "non") {
                choice = prompt("oui ou non : ");
            }
            if (choice == "oui") {
                console.log("       ---------------------------------------------------------------------------------------------------");
                console.log("                                                                                               ");
                console.log("       Déborah accepte votre proposition, vous vous retrouvez dans votre chambre, vous êtes tous les deux");
                console.log("       un peu éméchés mais décidez tout de même d'ouvrir une bouteille de champagne, vous finissez par");
                console.log("       vous endormir. Pendant la nuit un incendie se déclare au Bellagio et vous périssez dans les flammes.");
                console.log("");
                console.log("       Vous avez perdu, recommencez pour trouver la voie du bonheur...");
                console.log("                                                                                               ");
                console.log("       ---------------------------------------------------------------------------------------------------");
            }
            else {
                console.log("       ---------------------------------------------------------------------------------------------------");
                console.log("                                                                                               ");
                console.log("       La jeune femme a l'air dèçu, elle semble vous apprécier et vous propose de la suivre dans un");
                console.log("       mystérieux endroit sur le strip où elle doit rejoindre des amis. Vous commencez à être bien éméché");
                console.log("       et décidez d'aller dormir. Pendant la nuit un incendie se déclare au Bellagio et vous périssez brûlé");
                console.log("       dans votre sommeil !");
                console.log("");
                console.log("       Vous avez perdu, recommencez pour trouver la voie du bonheur...");
                console.log("                                                                                               ");
                console.log("       ---------------------------------------------------------------------------------------------------");
            }
        }
        else {
            console.log("       ---------------------------------------------------------------------------------------------------");
            console.log("                                                                                               ");
            console.log("       Vous décidez de monter vous coucher, pendant la nuit un incendie se déclare au Bellagio vous");
            console.log("       perrissez dans les flammes ! ");
            console.log("");
            console.log("       Vous avez perdu, recommencez pour trouver la voie du bonheur...");
            console.log("                                                                                               ");
            console.log("       ---------------------------------------------------------------------------------------------------");
        }

    }
}
