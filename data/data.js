var situations =
{
    1:
    {
        "enonce": "Il est 13 heures, Arthur sort de table, après son fromage il lui reste une petite place pour un dessert. Penché au dessus de son frigo il hésite entre plusieurs options : ",
        "arguments": {
            "1": {
                "enonce": "Il prend un fruit et un yaourt.",
                "energieNeeded": 0,
                "success": {
                    "text": "Le personnage a déjà pris pris un du fromage avant son yaourt. La consommation d’un deuxième produit laitier dans le même repas n’est donc pas adaptée. De plus notre personnage est sensible au lait qui lui crée des inconforts digestifs. Les indicateurs santé et équilibre alimentaire ont donc été affectés par ce choix. Une consommation inadaptée de produit laitiers peut être néfaste car comme tous les produits d’origine animale, ils contiennent une quantité importante d’acides gras saturés.",
                    "energiePenality": 0,
                    "moral": 0,
                    "equilibreAlim": -5,
                    "physique": -5
                },
                "failure": {
                    "text": "Issue impossible",
                    "energiePenality": 0,
                    "moral": 0,
                    "equilibreAlim": 0,
                    "physique": 0
                }
            },
            "2": {
                "enonce": "Il prend un fruit.",
                "energieNeeded": 0,
                "success": {
                    "text": "Le personnage a encore une place pour un dessert. Prendre un fruit en dessert permet au personnage de participer à la couverture de ses besoins journaliers en fibres, vitamines et minéraux. Les indicateurs santé et équilibre alimentaire ont donc été impacté positivement par ce choix.",
                    "energiePenality": 0,
                    "moral": 0,
                    "equilibreAlim": 5,
                    "physique": 5
                },
                "failure": {
                    "text": "Issue impossible",
                    "energiePenality": 0,
                    "moral": 0,
                    "equilibreAlim": 0,
                    "physique": 0
                }
            },
            "3": {
                "enonce": "Il prend un yaourt.",
                "energieNeeded": 0,
                "success": {
                    "text": "Le personnage a déjà pris pris un du fromage avant son yaourt. La consommation d’un deuxième produit laitier dans le même repas n’est donc pas adaptée. De plus notre personnage est sensible au lait qui lui créé des inconforts digestifs.  Les indicateurs santé et équilibre alimentaire ont donc été affectés par ce choix. Une consommation inadaptée de produit laitiers peut être néfaste car comme tous les produits d’origine animale, ils contiennent une quantité importante d’acides gras saturés.",
                    "energiePenality": 0,
                    "moral": 0,
                    "equilibreAlim": -5,
                    "physique": -5
                },
                "failure": {
                    "text": "Issue impossible",
                    "energiePenality": 0,
                    "moral": 0,
                    "equilibreAlim": 0,
                    "physique": 0
                }
            },
            "4": {
                "enonce": "Il ne prend rien.",
                "energieNeeded": 0,
                "success": {
                    "text": "Le personnage a encore une place pour un dessert. Il est important de ressentir la satiété à la fin de chaque repas afin d’apporter à l’organisme ce dont il a besoin. La consommation d’aucun dessert augmente donc la frustration du personnage et ne permet pas d’améliorer les indicateurs santé et équilibre alimentaire.",
                    "energiePenality": 0,
                    "moral": -5,
                    "equilibreAlim": -5,
                    "physique": -5
                },
                "failure": {
                    "text": "Issue impossible",
                    "energiePenality": 0,
                    "moral": 0,
                    "equilibreAlim": 0,
                    "physique": 0
                }
            },
            "5": {
                "enonce": "Il finit la part de tarte au citron meringuée qui reste dans le frigo.",
                "energieNeeded": 0,
                "success": {
                    "text": "Le personnage a encore une place pour un dessert. Il est essentiel de s’accorder des plaisirs régulièrement, toutefois une consommation excessive de produits sucrés peut avoir un effet néfaste sur la santé. Les indicateurs de santé et d’équilibre alimentaire vont donc être impactés négativement par ce choix tandis que la frustration du personnage elle s’améliore.",
                    "energiePenality": 0,
                    "moral": 10,
                    "equilibreAlim": -5,
                    "physique": -5
                },
                "failure": {
                    "text": "Issue impossible",
                    "energiePenality": 0,
                    "moral": 0,
                    "equilibreAlim": 0,
                    "physique": 0
                }
            }
        }
    },
    2: {
        "enonce": "Arthur est au travail, il mange au restaurant lors de sa pause déjeuner. Il hésite entre plusieurs choix à la carte du restaurant.",
        "arguments": {
            "1": {
                "enonce": "Formule du jour complète (salade de pousse d’épinard, filet de dorade, riz & julienne de légumes de saison, salade de fruit)",
                "energieNeeded": 0,
                "success": {
                    "text": "Le personnage mange régulièrement au restaurant. Choisir la formule complète équilibrée (entrée crudité + poisson riz légume + salade de fruit) permet à notre personnage de participer à la couverture de ses besoins en respectant l’équilibre alimentaire ainsi que sa santé tout en mangeant à sa faim afin d’éviter la frustration.",
                    "energiePenality": 0,
                    "moral": 0,
                    "equilibreAlim": 10,
                    "physique": 5
                },
                "failure": {
                    "text": "Issue impossible",
                    "energiePenality": 0,
                    "moral": 0,
                    "equilibreAlim": 0,
                    "physique": 0
                }
            },
            "2": {
                "enonce": "Plat unique : salade césar.",
                "energieNeeded": 0,
                "success": {
                    "text": "Le personnage mange régulièrement au restaurant. Choisir un plat unique léger telle qu’une salade césar ne va pas être suffisant pour couvrir ses besoins nutritionnels. A la fin du repas, le personnage aura encore faim, ce qui va donc augmenter sa frustration et faire baisser l’équilibre alimentaire.",
                    "energiePenality": 0,
                    "moral": -5,
                    "equilibreAlim": -5,
                    "physique": 0
                },
                "failure": {
                    "text": "Issue impossible",
                    "energiePenality": 0,
                    "moral": 0,
                    "equilibreAlim": 0,
                    "physique": 0
                }
            },
            "3": {
                "enonce": "Entrecôte, frites & sauce roquefort.",
                "energieNeeded": 0,
                "success": {
                    "text": "Le personnage mange régulièrement au restaurant. Choisir l’entrecôte sauce roquefort avec des frites va impacter fortement son équilibre alimentaire. Ces produits sont riches en acides gras saturés et LDL cholestérols, ils favorisent la formation d’une plaque d’athérome obstruant les artères. De plus, une surconsommation de viande rouge et de graisse cuite va augmenter le risque de maladies cardiovasculaires. Cependant, sa frustration va diminuer car il va suivre ses envies.",
                    "energiePenality": 0,
                    "moral": 5,
                    "equilibreAlim": -10,
                    "physique": 0
                },
                "failure": {
                    "text": "Issue impossible",
                    "energiePenality": 0,
                    "moral": 0,
                    "equilibreAlim": 0,
                    "physique": 0
                }
            },
            "4": {
                "enonce": "Formule du jour : entrée/plat ou plat/dessert (salade de pousse d’épinard, filet de dorade, riz & julienne de légumes de saison, salade de fruit).",
                "energieNeeded": 0,
                "success": {
                    "text": "Le personnage mange régulièrement au restaurant. Choisir une formule entrée/plat ou plat/dessert permet à notre personnage de participer à la couverture de ses besoins en respectant l’équilibre alimentaire ainsi que sa santé tout en mangeant à sa faim afin d’éviter la frustration.",
                    "energiePenality": 0,
                    "moral": 0,
                    "equilibreAlim": 0,
                    "physique": 0
                },
                "failure": {
                    "text": "Issue impossible",
                    "energiePenality": 0,
                    "moral": 0,
                    "equilibreAlim": 0,
                    "physique": 0
                }
            },
            "5": {
                "enonce": "Formule du jour : (terrine de campagne, entrecôte frites sauce roquefort, pana cotta).",
                "energieNeeded": 0,
                "success": {
                    "text": "Le personnage mange régulièrement au restaurant. Choisir la terrine de campagne, l’entrecôte sauce roquefort avec les frites et la pana cotta vont impacter fortement l’équilibre alimentaire et la santé du personnage. Ces produits sont riches en acides gras saturés et LDL cholestérols, ils favorisent la formation d’une plaque d’athérome obstruant les artères.De plus, une surconsommation de viande rouge et de graisse cuite va augmenter le risque de maladies cardiovasculaires.De plus, manger un repas trop copieux peut engendrer des signes de fatigue au cours de l’après- midi en lien avec les variations de glycémie. Cependant, sa frustration va diminuer car il va succomber à toutes ses envies.",
                    "energiePenality": 0,
                    "moral": 10,
                    "equilibreAlim": -10,
                    "physique": -10
                },
                "failure": {
                    "text": "Issue impossible",
                    "energiePenality": 0,
                    "moral": 0,
                    "equilibreAlim": 0,
                    "physique": 0
                }
            }
        }
    },
    3: {
        "enonce": "Arthur se rend au supermarché proche de chez lui, passant devant le rayon il se rappelle le petit-déjeuner que lui préparer sa mère un petit suisse avec du miel, un fruit, une infusion verveine et une tartine de confiture . Nostalgique de cette époque il se demande comment refaire ce petit-déjeuner sans faire face à des inconforts digestifs…",
        "arguments": {
            "1": {
                "enonce": "Pas de yaourt au petit-déjeuner, le jeu n’en vaut pas la chandelle.",
                "energieNeeded": 0,
                "success": {
                    "text": "Le personnage est nostalgique de son petit-déjeuner d’enfance mais étant sensible au lait, il veut éviter de faire face à des inconforts digestifs. Le priver de yaourt va donc augmenter sa frustration, mais il ne subira aucun inconfort digestif ce qui n’impactera pas sur sa santé.",
                    "energiePenality": 0,
                    "moral": -10,
                    "equilibreAlim": -5,
                    "physique": 0
                },
                "failure": {
                    "text": "Issue impossible",
                    "energiePenality": 0,
                    "moral": 0,
                    "equilibreAlim": 0,
                    "physique": 0
                }
            },
            "2": {
                "enonce": "Tant pis pour les inconfort, un pack de petits suisses comme à l’époque.",
                "energieNeeded": 0,
                "success": {
                    "text": "Le personnage est nostalgique de son petit-déjeuner d’enfance. Notre personnage étant sensible au lait, la prise d’un petit suisse, va provoquer des inconforts digestifs qui affectes sa santé. En revanche sa frustration va nettement diminuer car il va satisfaire son envie.",
                    "energiePenality": 0,
                    "moral": 10,
                    "equilibreAlim": 0,
                    "physique": -10
                },
                "failure": {
                    "text": "Issue impossible",
                    "energiePenality": 0,
                    "moral": 0,
                    "equilibreAlim": 0,
                    "physique": 0
                }
            },
            "3": {
                "enonce": "Il a lu dans un article que le lait de brebis était plus simple à digérer, il va donc tenter d’adapter sa recette avec un yaourt au lait de brebis.",
                "energieNeeded": 0,
                "success": {
                    "text": "Le personnage est nostalgique de son petit-déjeuner d’enfance mais étant sensible au lait, il vaut mieux éviter de faire face à des inconforts digestifs. Adapter sa recette avec un aliment inconnu va donc lui demander de l'energie. Le lait de brebis lui permettra néanmoins de ne pas faire face à des inconforts digestifs. Ainsi, les indicateurs frustration, santé et équilibre alimentaire resterons donc corrects.",
                    "energiePenality": -25,
                    "moral": 0,
                    "equilibreAlim": 5,
                    "physique": 5
                },
                "failure": {
                    "text": "Issue impossible",
                    "energiePenality": 0,
                    "moral": 0,
                    "equilibreAlim": 0,
                    "physique": 0
                }
            },
            "4": {
                "enonce": "Ce même article présenter les bénéfices sur la digestibilité  d’une consommation de produits issus du lait de montagne.",
                "energieNeeded": 0,
                "success": {
                    "text": "Arthur est nostalgique de son petit-déjeuner d’enfance mais étant sensible au lait, il veut éviter de faire face à des inconforts digestifs. Adapter sa recette avec un produit issu du lait de montagne plus digeste que le lait des près va donc lui demander un peu de energie mais cela lui permettra de ne pas faire face à des inconforts digestifs. Et ainsi de diminuer sa frustration, et d’augmenter les indicateurs santé et équilibre alimentaire.",
                    "energiePenality": -20,
                    "moral": 5,
                    "equilibreAlim": 5,
                    "physique": 5
                },
                "failure": {
                    "text": "Issue impossible",
                    "energiePenality": 0,
                    "moral": 0,
                    "equilibreAlim": 0,
                    "physique": 0
                }
            },
            "5": {
                "enonce": "Dommage pour la nostalgie il y a d’autre produit laitiers, je mangerai du fromage.",
                "energieNeeded": 0,
                "success": {
                    "text": "Arthur est nostalgique de son petit-déjeuner d’enfance mais étant sensible au lait, il veut éviter de faire face à des inconforts digestifs. Remplacer son petit-suisse par du fromage va lui permettre de ne pas être atteint d’inconforts digestifs, mais sa frustration va d’autant plus augmenter de ne pas avoir pu répondre à ses envies.",
                    "energiePenality": 0,
                    "moral": -5,
                    "equilibreAlim": 5,
                    "physique": 5
                },
                "failure": {
                    "text": "Issue impossible",
                    "energiePenality": 0,
                    "moral": 0,
                    "equilibreAlim": 0,
                    "physique": 0
                }
            }
        }
    },
    4: {
        "enonce": "Arthur cultive son potager, un matin un ami passe lui rendre visite et cueille une tomate, Arthur lui dit « tu peux y aller ça, c'est bio ! » une discussion s’entame. Arthur a l’habitude de cultiver lui-même les légumes qu’il ne trouve pas dans son supermarché en bio. Son ami lui soutient qu’il devrait faire confiance aux producteurs locaux même si ces derniers ne sont pas labellisés.",
        "arguments": {
            "1": {
                "enonce": "Arthur décide de laisser tomber son potager. Et de faire confiance aux producteurs locaux",
                "energieNeeded": 0,
                "success": {
                    "text": "Le personnage cultive ses propres légumes s’il ne les trouve pas en supermarché bio, et son ami lui soutient de faire confiance aux producteurs locaux. Les producteurs locaux proposent des produits de saison. Consommer local permet de réduire le transport et donc de favoriser des produits intéressants sur le plan nutritionnel et organoleptique. Le respect des délais de maturation sur la plante permet aux fruits et aux légumes d’acquérir plus de nutriments, fibres, vitamines et minéraux. L’indicateur équilibre alimentaire va donc augmenter. En revanche, notre personnage prend du plaisir à cultiver son potager, l’en empêcher va donc augmenter sa frustration.",
                    "energiePenality": 0,
                    "moral": -5,
                    "equilibreAlim": 10,
                    "physique": -5
                },
                "failure": {
                    "text": "Issue impossible",
                    "energiePenality": 0,
                    "moral": 0,
                    "equilibreAlim": 0,
                    "physique": 0
                }
            },
            "2": {
                "enonce": "Arthur se laisse convaincre par son ami mais souhaite poursuivre et étendre ses cultures. Il ne va donc acheter que ce qu’il ne fait pas lui même et continue de se dépenser dans son jardin.",
                "energieNeeded": 50,
                "success": {
                    "text": "Arthur cultive ses propres légumes s’il ne les trouve pas en supermarché bio, et son ami lui soutient de faire confiance aux producteurs locaux. Étendre ses cultures va demander au personnage de l'energien, mais cela lui permettra de consommer des produits de bonne qualité dont il contrôle le procédé tout en prenant du plaisir à les faire pousser. Le respect des délais de maturation sur la plante permet aux fruits et aux légumes d’acquérir plus de nutriments, fibres, vitamines et minéraux. Les indicateurs santé et équilibre alimentaire vont donc augmentés, tandis que sa frustration va diminuer.",
                    "energiePenality": -20,
                    "moral": 10,
                    "equilibreAlim": 10,
                    "physique": 10
                },
                "failure": {
                    "text": "Arthur cultive ses propres légumes s’il ne les trouve pas en supermarché bio, et son ami lui soutient de faire confiance aux producteurs locaux. Étendre ses cultures lui permettrait d’accroitre sa consommation de produits de bonne qualité. Le respect des délais de maturation sur la plante permet aux fruits et aux légumes d’acquérir plus de nutriments, fibres, vitamines et minéraux. Malheureusement, le personnage n’a plus assez de energie pour étendre ses cultures, épuisé, il abandonne son potager. Par conséquent, sa frustration va augmenter alors que l’indicateur santé va être réduit par cette diminution d’activité physique.",
                    "energiePenality": -20,
                    "moral": -5,
                    "equilibreAlim": 10,
                    "physique": 10
                }
            },
            "3": {
                "enonce": "Arthur continue à faire son potager modérément comme actuellement et se servir en bio au supermarché et chez les producteurs locaux pour compléter.",
                "energieNeeded": 0,
                "success": {
                    "text": "Le personnage cultive ses propres légumes s’il ne les trouve pas en supermarché bio, et son ami lui soutient de faire confiance aux producteurs locaux. Continuer à faire son potager modérément et compléter par des produits locaux permet au personnage de consommer des produits de qualité. Consommer local permet de réduire le transport et donc de favoriser des produits intéressants sur le plan nutritionnel et organoleptique. Le respect des délais de maturation sur la plante permet aux fruits et aux légumes d’acquérir plus de nutriments, fibres, vitamines et minéraux.  Par conséquent, les indicateurs santé et équilibre alimentaire vont augmenter sans pour autant impacter sa frustration.",
                    "energiePenality": 0,
                    "moral": 0,
                    "equilibreAlim": 5,
                    "physique": 5
                },
                "failure": {
                    "text": "Issue impossible",
                    "energiePenality": 0,
                    "moral": 0,
                    "equilibreAlim": 0,
                    "physique": 0
                }
            },
            "4": {
                "enonce": "le potager c’est trop d’investissement personnel, le bio du supermarché suffit.",
                "energieNeeded": 0,
                "success": {
                    "text": "Le personnage cultive ses propres légumes s’il ne les trouve pas en supermarché bio, et son ami lui soutient de faire confiance aux producteurs locaux. Consommer uniquement des produits bio du supermarché ne signifie pas forcément avoir des produits de qualité. En effet, l’agriculture biologique ne possède pas la même législation en fonction des pays, certains sont plus laxistes que d’autres. De plus l’acheminement des produits vers leur destination écourte leur temps de maturation, ce qui implique une plus faible densité nutritionnelle. L’indicateur de santé va donc diminuer.",
                    "energiePenality": 0,
                    "moral": 0,
                    "equilibreAlim": 0,
                    "physique": -5
                },
                "failure": {
                    "text": "Issue impossible",
                    "energiePenality": 0,
                    "moral": 0,
                    "equilibreAlim": 0,
                    "physique": 0
                }
            },
            "5": {
                "enonce": "Pourquoi se casser la tête un légume est un légume...",
                "energieNeeded": 0,
                "success": {
                    "text": "Le personnage cultive ses propres légumes s’il ne les trouve pas en supermarché bio, et son ami lui soutient de faire confiance aux producteurs locaux. Tous les aliments ne sont pas égaux sur le plan nutritionnel. Les producteurs locaux proposent des produits de saison. Consommer local permet de réduire le transport et donc de favoriser des produits intéressants sur le plan nutritionnel et organoleptique. Le respect des délais de maturation sur la plante permet aux fruits et aux légumes d’acquérir plus de nutriments, fibres, vitamines et minéraux. Les indicateurs santé et équilibre alimentaire vont nettement diminuer, pénalisés par la suppression de son activité jardinage et ses choix alimentaire.",
                    "energiePenality": 0,
                    "moral": 0,
                    "equilibreAlim": -10,
                    "physique": -5
                },
                "failure": {
                    "text": "Issue impossible",
                    "energiePenality": 0,
                    "moral": 0,
                    "equilibreAlim": 0,
                    "physique": 0
                }
            }
        }
    },
    5: {
        "enonce": "Arthur se trouve chez son poissonnier pour prendre du poisson, il hésite entre plusieurs options...",
        "arguments": {
            "1": {
                "enonce": "Un peu de saumon il parait que c’est riche en oméga 3.",
                "energieNeeded": 0,
                "success": {
                    "text": "Le personnage se questionne sur le choix à faire chez son poissonnier. Le saumon est un poisson riche en oméga 3. Ces nutriments jouent un rôle essentiel dans le développement et l’entretien du système nerveux agissant ainsi sur la mémoire. De plus, l’apport en oméga 3 est insuffisant dans la population française, il est donc intéressant d’inclure ce type de produit dans notre alimentation. Toutefois, le saumon comme le thon et les autres gros « poissons gras » son particulièrement exposé aux polluants et métaux lourds. Si la consommation et trop fréquente elle impactera la santé. Il faudra préférer les petit poisson type maquereau ou sardine tout aussi riche en Omega 3 mais moins exposés aux xénobiotiques.",
                    "energiePenality": 0,
                    "moral": 0,
                    "equilibreAlim": 5,
                    "physique": -5
                },
                "failure": {
                    "text": "Issue impossible",
                    "energiePenality": 0,
                    "moral": 0,
                    "equilibreAlim": 0,
                    "physique": 0
                }
            },
            "2": {
                "enonce": "Maquereau, sardine c’est riche en oméga 3 mais meilleur pour la santé que le saumon !",
                "energieNeeded": 0,
                "success": {
                    "text": "Le personnage se questionne sur le choix à faire chez son poissonnier. Le maquereau et la sardine sont des poissons riches en oméga 3. Ces nutriments jouent un rôle essentiel dans le développement et l’entretient du système nerveux agissant ainsi sur la mémoire. De plus, l’apport en oméga 3 est insuffisant dans la population française, il est donc intéressant d’inclure ce type de produit dans notre alimentation. Ces poissons sont moins exposés aux polluants et métaux lourds, contrairement au saumon qui a forte consommation peut avoir des conséquences sur la santé.",
                    "energiePenality": 0,
                    "moral": 0,
                    "equilibreAlim": 10,
                    "physique": 5
                },
                "failure": {
                    "text": "Issue impossible",
                    "energiePenality": 0,
                    "moral": 0,
                    "equilibreAlim": 0,
                    "physique": 0
                }
            },
            "3": {
                "enonce": "De quoi faire un bon aïoli, ça va faire plaisir !",
                "energieNeeded": 0,
                "success": {
                    "text": "Le personnage se questionne sur le choix à faire chez son poissonnier. L’aïoli est un plat équilibré composé de poisson blanc et de légumes. Il va donc participer à la couverture des besoins en protéines, en fibres et en minéraux. Les indicateurs santé et équilibre alimentaire vont être impacté positivement. De plus, l’aïoli faisant parti de ses plats préférés, sa frustration va d’autant plus diminuer.",
                    "energiePenality": 0,
                    "moral": 10,
                    "equilibreAlim": 5,
                    "physique": 5
                },
                "failure": {
                    "text": "Issue impossible",
                    "energiePenality": 0,
                    "moral": 0,
                    "equilibreAlim": 0,
                    "physique": 0
                }
            },
            "4": {
                "enonce": "une sol meunière avec double dose de beurre.",
                "energieNeeded": 0,
                "success": {
                    "text": "Le personnage se questionne sur le choix à faire chez son poissonnier. La sole cuisinée façon meunière permet au personnage d’éviter la frustration. En revanche, une consommation excessive de beurre peut être néfaste car comme tous les produits d’origine animale, ils contiennent une quantité importante d’acides gras saturés. L’indicateur santé va donc être impacté.",
                    "energiePenality": 0,
                    "moral": 5,
                    "equilibreAlim": -5,
                    "physique": -5
                },
                "failure": {
                    "text": "Issue impossible",
                    "energiePenality": 0,
                    "moral": 0,
                    "equilibreAlim": 0,
                    "physique": 0
                }
            },
            "5": {
                "enonce": "une papillotte aux petit légume du soleil.",
                "energieNeeded": 0,
                "success": {
                    "text": "Le personnage se questionne sur le choix à faire chez son poissonnier. Choisir la papillote aux petits légumes va contribuer à un bon équilibre alimentaire et une bonne santé. En effet, ce mode de cuisson limite l’ajout excessif de matières grasses et préserve la qualité des aliments.",
                    "energiePenality": 0,
                    "moral": 0,
                    "equilibreAlim": 5,
                    "physique": 5
                },
                "failure": {
                    "text": "Issue impossible",
                    "energiePenality": 0,
                    "moral": 0,
                    "equilibreAlim": 0,
                    "physique": 0
                }
            }
        }
    },
    6: {
        "enonce": "Ce soir c’est pomme de terre sautées ! Quelle matière grasse utiliser ?",
        "arguments": {
            "1": {
                "enonce": "Du beurre, parce que c’est bon.",
                "energieNeeded": 0,
                "success": {
                    "text": "Le personnage hésite sur le choix de la matière grasse à utiliser pour réaliser des pommes de terre sautées. Il s’agit d’une cuisson à haute température le beurre, matière grasse issue du lait, contient des traces restantes de protéines. Ces éléments vont bruler à la cuisson et former des composés cancérigènes. Les indicateurs santé et équilibre alimentaire vont donc être impactés.",
                    "energiePenality": 0,
                    "moral": 5,
                    "equilibreAlim": 5,
                    "physique": -5
                },
                "failure": {
                    "text": "Issue impossible",
                    "energiePenality": 0,
                    "moral": 0,
                    "equilibreAlim": 0,
                    "physique": 0
                }
            },
            "2": {
                "enonce": "De l’huile d’arachide, mais c’est quand même la sienne",
                "energieNeeded": 0,
                "success": {
                    "text": "Le personnage hésite sur le choix de la matière grasse à utiliser pour réaliser des pommes de terre sautées. Allergique à l’arachide, s’il choisit d’utiliser cette huile il s’expose au risque de quelques protéines restées en suspens. Afin d’éviter les problèmes de santé il existe des alternatives.",
                    "energiePenality": 0,
                    "moral": 0,
                    "equilibreAlim": 0,
                    "physique": -10
                },
                "failure": {
                    "text": "Issue impossible",
                    "energiePenality": 0,
                    "moral": 0,
                    "equilibreAlim": 0,
                    "physique": 0
                }
            },
            "3": {
                "enonce": "De l’huile d’olive extra, parce que c’est extra.",
                "energieNeeded": 0,
                "success": {
                    "text": "Le personnage hésite sur le choix de la matière grasse à utiliser pour réaliser des pommes de terre sautées. L’huile d’olive extra est composée d’acide gras mono insaturé, excellent pour la santé en utilisation à basse température, ils sont inadaptés à une cuisson sautée. De plus, l’huile extra est peu raffinée, une cuisson forte entraine la formation de composé cancérigène en brulant. L’huile extra est parfaite pour la salade mais pour les cuissons préférez une huile raffinée.",
                    "energiePenality": 0,
                    "moral": 5,
                    "equilibreAlim": -5,
                    "physique": -5
                },
                "failure": {
                    "text": "Issue impossible",
                    "energiePenality": 0,
                    "moral": 0,
                    "equilibreAlim": 0,
                    "physique": 0
                }
            },
            "4": {
                "enonce": "De l’huile de tournesol raffinée bio, parce que c’est raffiné.",
                "energieNeeded": 0,
                "success": {
                    "text": "Le personnage hésite sur le choix de la matière grasse à utiliser pour réaliser des pommes de terre sautées. Utiliser l’huile de tournesol raffinée bio va permettre aux indicateurs santé et équilibre alimentaire d’augmenter. En effet, le raffinage permet d’éliminer les impuretés dans l’huile limitant ainsi la formation de composes cancérigène. De plus le gras captant les polluant volatile une huile bio préserve le personnage de leur exposition.",
                    "energiePenality": 0,
                    "moral": 0,
                    "equilibreAlim": 5,
                    "physique": 10
                },
                "failure": {
                    "text": "Issue impossible",
                    "energiePenality": 0,
                    "moral": 0,
                    "equilibreAlim": 0,
                    "physique": 0
                }
            },
            "5": {
                "enonce": "De l’huile de tournesol non raffinée bio, le raffinement c’est pas son truc.",
                "energieNeeded": 0,
                "success": {
                    "text": "Le personnage hésite sur le choix de la matière grasse à utiliser pour réaliser des pommes de terre sautées. Utiliser l’huile de tournesol non raffinée bio va permettre à l’indicateur santé d’augmenter. Cette huile est bio, le gras captant les polluant volatile une huile bio préserve le personnage de leur exposition. En revanche, l’huile est non raffinée or le raffinage permet d’éliminer les impuretés de l’huile limitant ainsi la formation de composes cancérigène.",
                    "energiePenality": 0,
                    "moral": 0,
                    "equilibreAlim": -10,
                    "physique": 5
                },
                "failure": {
                    "text": "Issue impossible",
                    "energiePenality": 0,
                    "moral": 0,
                    "equilibreAlim": 0,
                    "physique": 0
                }
            }
        }
    },
    7: {
        "enonce": "Arthur est dans son supermarché et doit acheter du jambon cuit pour les amis qui viennent dîner chez lui le soir même. Malheureusement il ne sait pas quel jambon choisir et ne parviens pas à lire les étiquettes à cause de sa conjonctivite...",
        "arguments": {
            "1": {
                "enonce": "Il sort son téléphone avec une appli de type yuka ou open food fact..",
                "energieNeeded": 0,
                "success": {
                    "text": "Les applications de nutrition peuvent apporter des informations intéressantes mais il faut tout de même garder un esprit critique. Le jambon est un produit ultra-transformé dans lequel on peut retrouver des additifs qui permettent de conserver le produit, de préserver sa couleur ou sa texture. Ces applications permettent la mise en avant la présence d’additifs dangereux pour la santé mais certains autres paramètres peuvent être mal interprétés. Le score donné au produit est déterminé par l’application elle-même, la part de point accorder à la composition nutritionnelle, au label, ou aux présences d’additifs est donc variable il faut rester attentifs. De plus il faut replacer les notions de quantité et d’utilisation dans l’importance que l’on accorde au score.",
                    "energiePenality": 0,
                    "moral": -5,
                    "equilibreAlim": 0,
                    "physique": 0
                },
                "failure": {
                    "text": "Issue impossible",
                    "energiePenality": 0,
                    "moral": 0,
                    "equilibreAlim": 0,
                    "physique": 0
                }
            },
            "2": {
                "enonce": "Il prend le jambon bio pour être sûr de la qualité du produit.",
                "energieNeeded": 0,
                "success": {
                    "text": "Le personnage ne sait pas quel jambon choisir et ne parvient pas à lire les étiquettes à cause de sa conjonctivite. Prendre le jambon bio, permet au personnage d’avoir un produit de qualité. Les produits bio sont donc de meilleure qualité car ils doivent respecter une règlementation plus stricte qui engage les producteurs et protège les consommateurs sur la qualité des produits. Le jambon reste un produit ultra-transformé dans lequel on peut retrouver des additifs qui permettent de conserver le produit, de préserver sa couleur ou sa texture. Ces composés, à long terme peuvent impacter la santé, il faut donc préférer les produits artisanaux.",
                    "energiePenality": 0,
                    "moral": 0,
                    "equilibreAlim": 0,
                    "physique": 10
                },
                "failure": {
                    "text": "Issue impossible",
                    "energiePenality": 0,
                    "moral": 0,
                    "equilibreAlim": 0,
                    "physique": 0
                }
            },
            "3": {
                "enonce": "Il prend le jambon plus cher pour être sûr de la qualité du produit.",
                "energieNeeded": 0,
                "success": {
                    "text": "Le personnage ne sait pas quel jambon choisir et ne parvient pas à lire les étiquettes à cause de sa conjonctivite. Prendre le jambon le plus cher n’est pas forcément gage de qualité. L’indicateur de santé va donc diminuer. Le jambon reste un produit ultra-transformé dans lequel on peut retrouver des additifs qui permettent de conserver le produit, de préserver sa couleur ou sa texture. Ces composés, à long terme peuvent impacter la santé, il faut donc préférer les produits artisanaux.",
                    "energiePenality": 0,
                    "moral": 0,
                    "equilibreAlim": 0,
                    "physique": -5
                },
                "failure": {
                    "text": "Issue impossible",
                    "energiePenality": 0,
                    "moral": 0,
                    "equilibreAlim": 0,
                    "physique": 0
                }
            },
            "4": {
                "enonce": "Il prend le premier prix, de toute façon cela ne change rien.",
                "energieNeeded": 0,
                "success": {
                    "text": "Le personnage ne sait pas quel jambon choisir et ne parvient pas à lire les étiquettes à cause de sa conjonctivite. En prenant le jambon premier prix, le personnage aura probablement un produit de moins bonne qualité, avec une quantité plus importante d’additifs. L’indicateur santé va donc diminuer. Le jambon reste un produit ultra-transformé dans lequel on peut retrouver des additifs qui permettent de conserver le produit, de préserver sa couleur ou sa texture. Ces composés, à long terme peuvent impacter la santé, il faut donc préférer les produits artisanaux. Il est donc important de faire attention à la qualité du produit afin qu’il y ait le moins d’additifs possible.",
                    "energiePenality": 0,
                    "moral": 0,
                    "equilibreAlim": 0,
                    "physique": -5
                },
                "failure": {
                    "text": "Issue impossible",
                    "energiePenality": 0,
                    "moral": 0,
                    "equilibreAlim": 0,
                    "physique": 0
                }
            },
            "5": {
                "enonce": "Il se rend à la boucherie de son supermarché et achète son jambon à la découpe.",
                "energieNeeded": 50,
                "success": {
                    "text": "Le personnage ne sait pas quel jambon choisir et ne parvient pas à lire les étiquettes à cause de sa conjonctivite. Acheter son jambon à la découpe en boucherie permet au personnage d’être mieux conseillé et d’avoir un produit de qualité, mais cela demande un peu d’énergie. Le jambon est un produit ultra-transformé dans lequel on peut retrouver des additifs qui permettent de conserver le produit, de préserver sa couleur ou sa texture. Ces composés, à long terme peuvent impacter la santé, il faut donc préférer les produits artisanaux. Excellent choix !",
                    "energiePenality": -10,
                    "moral": 5,
                    "equilibreAlim": 5,
                    "physique": 5
                },
                "failure": {
                    "text": "Le personnage ne sait pas quel jambon choisir et ne parvient pas à lire les étiquettes à cause de sa conjonctivite. Acheter son jambon à la découpe en boucherie permet au personnage d’être mieux conseillé et d’avoir un produit de qualité, mais cela demande un peu d’énergie et de motivation. Arthur n'est pas très en forme en ce moment et décide de se rabattre sur le premier prix. Le jambon est un produit ultra-transformé dans lequel on peut retrouver des additifs qui permettent de conserver le produit, de préserver sa couleur ou sa texture. Ces composés, à long terme peuvent impacter la santé, il faut donc préférer les produits artisanaux.  Il est donc important de faire attention à la qualité du produit afin qu’il y ait le moins d’additifs possible.",
                    "energiePenality": -10,
                    "moral": -5,
                    "equilibreAlim": 0,
                    "physique": -5
                }
            }
        }
    },
    8: {
        "enonce": "Arthur reçoit des amis végétariens pour le dîner, il se demande comment remplacer les protéines de la viande dans le repas qu'il prépare.",
        "arguments": {
            "1": {
                "enonce": "Il prépare des lasagnes aux légumes",
                "energieNeeded": 0,
                "success": {
                    "text": "Le personnage reçoit des amis végétariens. Il se questionne sur ce qu’il va cuisiner afin de remplacer les protéines de viande.  Faire des lasagnes aux légumes permet au personnage de ne pas se frustrer en réadaptant la recette d’un plat qu’il affectionne. De plus, la pâte à lasagne contenant des œufs et la béchamel contenant du lait il y a tout de même un apport protéique.",
                    "energiePenality": 0,
                    "moral": 5,
                    "equilibreAlim": 0,
                    "physique": 5
                },
                "failure": {
                    "text": "Issue impossible",
                    "energiePenality": 0,
                    "moral": 0,
                    "equilibreAlim": 0,
                    "physique": 0
                }
            },
            "2": {
                "enonce": "Il prépare du chilli sin carne.",
                "energieNeeded": 0,
                "success": {
                    "text": "Le personnage reçoit des amis végétariens. Il se questionne sur ce qu’il va cuisiner afin de remplacer les protéines de viande. Faire un chili sin carne est une bonne alternative aux protéines de la viande. Les céréales et légumineuses contiennent chacune des carences en acides aminés essentiels, ces derniers ne se retrouvent pas dans des proportions suffisantes. Il est donc important d’associer les céréales avec les légumineuses afin de réaliser ce qu’on appelle la « complémentarité protéique ». En complétant les carence de l’autre elles vont ensembles apporter tous les acides aminés essentiel. Le chili sin carne est un plat qui associe les haricots rouges avec du riz, ce plat est donc équilibré et permettra aux végétariens d’assurer un apport suffisant en protéines.",
                    "energiePenality": 0,
                    "moral": -5,
                    "equilibreAlim": 10,
                    "physique": 5
                },
                "failure": {
                    "text": "Issue impossible",
                    "energiePenality": 0,
                    "moral": 0,
                    "equilibreAlim": 0,
                    "physique": 0
                }
            },
            "3": {
                "enonce": "Il achète un steak végétal",
                "energieNeeded": 0,
                "success": {
                    "text": "Le personnage reçoit des amis végétariens. Il se questionne sur ce qu’il va cuisiner afin de remplacer les protéines de viande. Proposer un steak végétal va impacter sur l’équilibre alimentaire. En effet, cela reste un produit industriel transformé. Le personnage ne pourra donc pas contrôler la liste des ingrédients ainsi que la qualité des produits. Dans ce type de produit, on retrouve souvent beaucoup d’additifs et de protéines texturées, réhydratées. Ces protéines sont difficilement assimilables par notre organisme. Il est donc conseillé de le réaliser fait maison en suivant le procédé de la complémentarité protéique.  Ce procédé correspond à l’association de plusieurs céréales, ou légumineuses qui se complètent au niveau des acides aminés essentiels.",
                    "energiePenality": 0,
                    "moral": -10,
                    "equilibreAlim": -5,
                    "physique": 0
                },
                "failure": {
                    "text": "Issue impossible",
                    "energiePenality": 0,
                    "moral": 0,
                    "equilibreAlim": 0,
                    "physique": 0
                }
            },
            "4": {
                "enonce": "Il prépare une omelette.",
                "energieNeeded": 0,
                "success": {
                    "text": "Le personnage reçoit des amis végétariens. Il se questionne sur ce qu’il va cuisiner afin de remplacer les protéines de viande. Faire une omelette est une bonne alternative. Basculer vers une alimentation végétarienne, si elle est mal contrôlée peut entraîner des carences. En effet, les végétariens peuvent être carencé en protéines car les protéines contenues dans les sources végétales (légumes secs, céréales complètes) sont moins assimilables que celles d’origine animale. Les protéines jouent un rôle essentiel dans la constitution du tissu musculaire. De plus, les végétariens peuvent également être en insuffisance vitaminique de B12 car on la trouve principalement dans les produits d’origine animale. La vitamine B12 participe au renouvellement des cellules et à l’érythropoïèse. Une omelette peut donc participer à la couverture des besoins à la fois en vitamine B12 et en protéines. L’indicateur santé va augmenter.",
                    "energiePenality": 0,
                    "moral": 0,
                    "equilibreAlim": 0,
                    "physique": 5
                },
                "failure": {
                    "text": "Issue impossible",
                    "energiePenality": 0,
                    "moral": 0,
                    "equilibreAlim": 0,
                    "physique": 0
                }
            },
            "5": {
                "enonce": "Il prépare un wok de légume au tofu .",
                "energieNeeded": 0,
                "success": {
                    "text": "Le personnage reçoit des amis végétariens. Il se questionne sur ce qu’il va cuisiner afin de remplacer les protéines de viande.  Cuisiner un wok de légumes au tofu permet au personnage de respecter son équilibre alimentaire et sa santé. Ce plat est équilibré et apporte des protéines végétales. Cependant, le tofu n’est pas un aliment qu’il apprécie, ce qui augmente sa frustration.",
                    "energiePenality": 0,
                    "moral": -5,
                    "equilibreAlim": 5,
                    "physique": 5
                },
                "failure": {
                    "text": "Issue impossible",
                    "energiePenality": 0,
                    "moral": 0,
                    "equilibreAlim": 0,
                    "physique": 0
                }
            }
        }
    },
    9: {
        "enonce": "Arthur se rend en réunion chez un client, celui-ci lui propose comme souvent un goûter composé d’une viennoiserie et d’un café, que fait il ?",
        "arguments": {
            "1": {
                "enonce": "il accepte de prendre une viennoiserie, même si c’est la quatrième cette semaine. il ne faut pas vexer son client.",
                "energieNeeded": 0,
                "success": {
                    "text": "Régulièrement, les clients du personnage lui proposent une viennoiserie. Le personnage décide d’accepter. Il est essentiel de s’accorder des plaisirs régulièrement, toutefois une consommation excessive de produits sucrés et gras peut avoir un effet néfaste sur la santé. Il est donc important que la consommation de viennoiserie reste occasionnelle. Les indicateurs santé et équilibre alimentaire vont donc être impactés négativement.",
                    "energiePenality": 0,
                    "moral": 5,
                    "equilibreAlim": -5,
                    "physique": -5
                },
                "failure": {
                    "text": "Issue impossible",
                    "energiePenality": 0,
                    "moral": 0,
                    "equilibreAlim": 0,
                    "physique": 0
                }
            },
            "2": {
                "enonce": "il a l’habitude il a un fruit et des oléagineux dans sa malette",
                "energieNeeded": 50,
                "success": {
                    "text": "Régulièrement, les clients du personnage lui proposent une viennoiserie. Avoir un fruit et des oléagineux dans sa mallette permet au personnage de ne pas être frustré en se privant d’une collation tout en respectant l’équilibre alimentaire et sa santé. En effet, il est essentiel de s’accorder des plaisirs régulièrement. Toutefois une consommation excessive de produits sucrés et gras peut avoir un effet néfaste sur la santé. Il est donc important que la consommation de viennoiserie reste occasionnelle. Consommer régulièrement un fruit et des oléagineux permet de participer à la couverture des besoins en vitamines, minéraux, fibres et oméga 3.",
                    "energiePenality": 0,
                    "moral": 0,
                    "equilibreAlim": 5,
                    "physique": 5
                },
                "failure": {
                    "text": "Régulièrement, les clients du personnage lui proposent une viennoiserie. Avoir un fruit et des oléagineux dans sa mallette permet au personnage de ne pas être frustré en se privant d’une collation tout en respectant l’équilibre alimentaire et sa santé. Cela necessite cependant de l'énergie, comme Arthur ne se sont pas très motivé en ce moment, il a oublié sa collation pour cette réunion. Il est essentiel de s’accorder des plaisirs régulièrement. Toutefois une consommation excessive de produits sucrés et gras peut avoir un effet néfaste sur la santé. Il est donc important que la consommation de viennoiserie reste occasionnelle. Consommer régulièrement un fruit et des oléagineux permet de participer à la couverture des besoins en vitamines, minéraux, fibres et oméga 3.",
                    "energiePenality": -10,
                    "moral": -10,
                    "equilibreAlim": 0,
                    "physique": 0
                }
            },
            "3": {
                "enonce": "Il ne prend qu’un café (sucré), les goûters sont pour les enfants.",
                "energieNeeded": 0,
                "success": {
                    "text": "Régulièrement, les clients du personnage lui proposent une viennoiserie. Se priver de collation va provoquer chez le personnage un sentiment de frustration. Une prise de sucre isoler va impacter fortement sa glycémie poussant son corps se réguler. De plus, il risque de faire face à une hypoglycémie réactionnelle provoquant une petite faim quelques heures plus tard. Son équilibre alimentaire et sa santé seront impactés.",
                    "energiePenality": 0,
                    "moral": -5,
                    "equilibreAlim": -5,
                    "physique": -5
                },
                "failure": {
                    "text": "Issue impossible",
                    "energiePenality": 0,
                    "moral": 0,
                    "equilibreAlim": 0,
                    "physique": 0
                }
            },
            "4": {
                "enonce": "un verre d’eau suffira, merci.",
                "energieNeeded": 0,
                "success": {
                    "text": "Régulièrement, les clients du personnage lui proposent une viennoiserie. Se priver de collation va provoquer chez le personnage un sentiment de frustration.",
                    "energiePenality": 0,
                    "moral": -5,
                    "equilibreAlim": 0,
                    "physique": 0
                },
                "failure": {
                    "text": "Issue impossible",
                    "energiePenality": 0,
                    "moral": 0,
                    "equilibreAlim": 0,
                    "physique": 0
                }
            },
            "5": {
                "enonce": "Elles sont vraiment bonnes ces viennoiseries, j’en prend une seconde.",
                "energieNeeded": 0,
                "success": {
                    "text": "Régulièrement, les clients du personnage lui proposent une viennoiserie. Le personnage décide d’accepter et d’en prendre plusieurs. Il est essentiel de s’accorder des plaisirs régulièrement, toutefois une consommation excessive de produits sucrés et gras peut avoir un effet néfaste sur la santé. Il est donc important que la consommation de viennoiserie reste occasionnelle. Les indicateurs santé et équilibre alimentaire vont donc être impactés très négativement.",
                    "energiePenality": 0,
                    "moral": 10,
                    "equilibreAlim": -10,
                    "physique": -5
                },
                "failure": {
                    "text": "Issue impossible",
                    "energiePenality": 0,
                    "moral": 0,
                    "equilibreAlim": 0,
                    "physique": 0
                }
            }
        }
    },
    10: {
        "enonce": "Arthur rentre du travail fatigué, il n’a pas le courage de faire le repas.",
        "arguments": {
            "1": {
                "enonce": "Il va réchauffer un plat cuisiné au micro-onde (sauté de veau et purée)",
                "energieNeeded": 0,
                "success": {
                    "text": "Le personnage n’a pas le courage de faire son repas. Réchauffer un plat cuisiné au micro-onde a un impact négatif sur l’équilibre alimentaire et la santé. En effet, il est préférable pour le personnage de cuisiner un plat simple plutôt que de manger un plat dont il ne contrôle ni la qualité des produits ni l’équilibre nutritionnel. De plus, les plats cuisinés sont pour la plupart moins goûteux ce qui va augmenter la frustration du personnage.",
                    "energiePenality": 0,
                    "moral": -5,
                    "equilibreAlim": -5,
                    "physique": -5
                },
                "failure": {
                    "text": "Issue impossible",
                    "energiePenality": 0,
                    "moral": 0,
                    "equilibreAlim": 0,
                    "physique": 0
                }
            },
            "2": {
                "enonce": "Il fait un simple plat de pâtes à la crème, douze min montre en main.",
                "energieNeeded": 30,
                "success": {
                    "text": "Le personnage n’a pas le courage de faire son repas. Préparer un repas rapide (pâtes à la crème) lui demande de fournir peu d’énergie. De plus, il est préférable pour la santé du personnage de cuisiner. Seul l’indicateur équilibre alimentaire va diminuer. En effet, le repas cuisiné est une assiette composée principalement de glucides. Il n’est donc pas équilibré.",
                    "energiePenality": -5,
                    "moral": 0,
                    "equilibreAlim": -5,
                    "physique": 0
                },
                "failure": {
                    "text": "Le personnage n’a pas le courage de faire son repas. Cependant, même préparer un repas rapide (pâtes à la crème) lui demande de fournir un peu d’énergie. Même s'il est préférable pour sa santé de cuisiner Arthur se rabat sur le plat cuisiné à faire réchauffer. Manger un plat dont il ne contrôle ni la qualité des produits ni l’équilibre nutritionnel n'est pas la meilleure option. De plus, les plats cuisinés sont pour la plupart moins goûteux ce qui va augmenter la frustration du personnage.",
                    "energiePenality": -5,
                    "moral": -5,
                    "equilibreAlim": -5,
                    "physique": -5
                }
            },
            "3": {
                "enonce": "Aller courage ! Arthur prend sur soi et va faire un vrai repas, il a des restes du repas d’hier (ratatouille) avec une omelette et un peu de salade ça fera l’affaire.",
                "energieNeeded": 50,
                "success": {
                    "text": "Le personnage est fatigué. Décider de faire un vrai repas demande une grande énergie au personnage mais cela impacte positivement sur son équilibre alimentaire et sa santé. En effet, il est préférable pour le personnage de cuisiner plutôt que de manger un plat dont il ne contrôle ni la qualité des produits ni l’équilibre de l’assiette.",
                    "energiePenality": -10,
                    "moral": 0,
                    "equilibreAlim": 10,
                    "physique": 5
                },
                "failure": {
                    "text": "Le personnage est fatigué. Décider de faire un vrai repas demande une grande énergie. Malheureusement, le personnage n’en possède pas assez pour effectuer tant d’efforts. Il va donc devoir trouver une autre solution de dernière minute, qui impactera sur son équilibre alimentaire.",
                    "energiePenality": -10,
                    "moral": 0,
                    "equilibreAlim": -5,
                    "physique": 0
                }
            },
            "4": {
                "enonce": "Deliveroo, Hum un Bò bún !",
                "energieNeeded": 0,
                "success": {
                    "text": "Le personnage n’a pas le courage de faire son repas. Commander un Bò bún évite la frustration au personnage et ne demande que peu d'energie. Il n’a pas besoin de se préparer un repas. De plus, un Bò bún reste un plat assez équilibré composé de légume cuit, féculant, protéine, et crudité. Les indicateurs santé et équilibre alimentaire vont donc augmenter.",
                    "energiePenality": -5,
                    "moral": 5,
                    "equilibreAlim": 5,
                    "physique": 5
                },
                "failure": {
                    "text": "Issue impossible",
                    "energiePenality": 0,
                    "moral": 0,
                    "equilibreAlim": 0,
                    "physique": 0
                }
            },
            "5": {
                "enonce": "Mac drive, menu maxi best of big mac avec des nuggets.",
                "energieNeeded": 0,
                "success": {
                    "text": "Le personnage n’a pas le courage de faire son repas. Prendre un mac drive évite la frustration au personnage mais a un fort impact sur l’équilibre alimentaire et la santé. En effet, les produits de fast food sont de mauvaise qualité et apportent très peu sur le plan nutritionnel. Il est donc conseillé de limiter au maximum leur consommation.",
                    "energiePenality": 0,
                    "moral": 10,
                    "equilibreAlim": -10,
                    "physique": -10
                },
                "failure": {
                    "text": "Issue impossible",
                    "energiePenality": 0,
                    "moral": 0,
                    "equilibreAlim": 0,
                    "physique": 0
                }
            }
        }
    },
    11: {
        "enonce": "Arthur souhaite améliorer sa condition physique. Il pense qu'il devrait pratiquer une activité physique :",
        "arguments": {
            "1": {
                "enonce": "A partir de maintenant, Arthur ira au travail à vélo ou à pied (10/30 minutes de trajet)",
                "energieNeeded": 50,
                "success": {
                    "text": "Le personnage souhaite améliorer sa condition physique. Aller au travail à vélo améliore nettement la santé du personnage tout en nécessitant peu d’énergie. En effet, l’activité physique permet de prévenir de l’apparition de nombreuses maladies tels que les maladies cardiovasculaires. Elle peut également aider à équilibrer le taux de sucre dans le sang afin de réduire le risque de diabète et contribuer à lutter contre le stress, l’anxiété. Il est donc indispensable qu’elle soit régulière.",
                    "energiePenality": -10,
                    "moral": 5,
                    "equilibreAlim": 0,
                    "physique": 10
                },
                "failure": {
                    "text": "Le personnage souhaite améliorer sa condition physique. L’activité physique permet de prévenir de l’apparition de nombreuses maladies tels que les maladies cardiovasculaires. Elle peut également aider à équilibrer le taux de sucre dans le sang afin de réduire le risque de diabète et contribuer à lutter contre le stress, l’anxiété. Il est donc indispensable qu’elle soit régulière. Malheureusement, le personnage n’a plus assez d’énergie pour réaliser une activité physique. Sa santé va donc être fortement impactée.",
                    "energiePenality": -10,
                    "moral": -10,
                    "equilibreAlim": 0,
                    "physique": -10
                }
            },
            "2": {
                "enonce": "Arthur téléphone à une salle de sport pour faire des séances après le boulot (3 h par semaine)",
                "energieNeeded": 50,
                "success": {
                    "text": "Le personnage souhaite améliorer sa condition physique. Aller à la salle de sport 3h/ semaine nécessite beaucoup d’énergie, ce qui impacte sur la frustration. En revanche, l’indicateur de santé va fortement augmenter. En effet, l’activité physique permet de prévenir de l’apparition de nombreuses maladies tels que les maladies cardiovasculaires. Elle peut également aider à équilibrer le taux de sucre dans le sang afin de réduire le risque de diabète et contribuer à lutter contre le stress, l’anxiété. Il est donc indispensable qu’elle soit régulière.",
                    "energiePenality": -20,
                    "moral": -10,
                    "equilibreAlim": 0,
                    "physique": 10
                },
                "failure": {
                    "text": "Le personnage souhaite améliorer sa condition physique. L’activité physique permet de prévenir de l’apparition de nombreuses maladies tels que les maladies cardiovasculaires. Elle peut également aider à équilibrer le taux de sucre dans le sang afin de réduire le risque de diabète et contribuer à lutter contre le stress, l’anxiété. Il est donc indispensable qu’elle soit régulière. Malheureusement, le personnage n’a plus assez d’énergie pour réaliser une activité physique. Sa santé va donc être fortement impactée.",
                    "energiePenality": -20,
                    "moral": -10,
                    "equilibreAlim": 0,
                    "physique": -10
                }
            },
            "3": {
                "enonce": "Arthur décide qu’à partir de maintenant, il fera un footing tous les samedis matin.",
                "energieNeeded": 50,
                "success": {
                    "text": "Le personnage souhaite améliorer sa condition physique. Faire un footing le samedi matin permet au personnage d’améliorer sa santé. En effet, l’activité physique permet de prévenir de l’apparition de nombreuses maladies tels que les maladies cardiovasculaires. Elle peut également aider à équilibrer le taux de sucre dans le sang afin de réduire le risque de diabète et contribuer à lutter contre le stress, l’anxiété. Il est donc indispensable qu’elle soit régulière mais cela demande beaucoup d’énergie. L’indicateur de frustration va donc augmenter.",
                    "energiePenality": -30,
                    "moral": -5,
                    "equilibreAlim": 0,
                    "physique": 5
                },
                "failure": {
                    "text": "Le personnage souhaite améliorer sa condition physique. L’activité physique permet de prévenir de l’apparition de nombreuses maladies tels que les maladies cardiovasculaires. Elle peut également aider à équilibrer le taux de sucre dans le sang afin de réduire le risque de diabète et contribuer à lutter contre le stress, l’anxiété. Il est donc indispensable qu’elle soit régulière. Malheureusement, le personnage n’a plus assez d’énergie pour réaliser une activité physique. Sa santé va donc être fortement impactée.",
                    "energiePenality": -30,
                    "moral": -10,
                    "equilibreAlim": 0,
                    "physique": -10
                }
            },
            "4": {
                "enonce": "Arthur prend désormais les escalier et favorise la marche quand il le peut.",
                "energieNeeded": 50,
                "success": {
                    "text": "Le personnage souhaite améliorer sa condition physique. Prendre les escaliers et favoriser la marche quand il le peut, permet au personnage d’améliorer sa santé tout en nécessitant très peu d’énergie et sans affecter sa frustration. L’activité physique permet de prévenir de l’apparition de nombreuses maladies tels que les maladies cardiovasculaires. Elle peut également aider à équilibrer le taux de sucre dans le sang afin de réduire le risque de diabète et contribuer à lutter contre le stress, l’anxiété. Il est donc indispensable qu’elle soit régulière.",
                    "energiePenality": -10,
                    "moral": 5,
                    "equilibreAlim": 0,
                    "physique": 5
                },
                "failure": {
                    "text": "Le personnage souhaite améliorer sa condition physique. L’activité physique permet de prévenir de l’apparition de nombreuses maladies tels que les maladies cardiovasculaires. Elle peut également aider à équilibrer le taux de sucre dans le sang afin de réduire le risque de diabète et contribuer à lutter contre le stress, l’anxiété. Il est donc indispensable qu’elle soit régulière. Malheureusement, le personnage n’a plus assez d’énergie pour réaliser une activité physique. Sa santé va donc être fortement impactée.",
                    "energiePenality": -10,
                    "moral": -10,
                    "equilibreAlim": 0,
                    "physique": -10
                }
            },
            "5": {
                "enonce": "L’activité physique, c’est surfait, très peu pour moi.",
                "energieNeeded": 0,
                "success": {
                    "text": "Le personnage souhaite améliorer sa condition physique. L’activité physique permet de prévenir de l’apparition de nombreuses maladies tels que les maladies cardiovasculaires. Elle peut également aider à équilibrer le taux de sucre dans le sang afin de réduire le risque de diabète et contribuer à lutter contre le stress, l’anxiété. Il est donc indispensable qu’elle soit régulière. En ne faisant aucune activité, la santé du personnage est fortement impactée.",
                    "energiePenality": 0,
                    "moral": 5,
                    "equilibreAlim": 0,
                    "physique": -10
                },
                "failure": {
                    "text": "Le personnage souhaite améliorer sa condition physique. L’activité physique permet de prévenir de l’apparition de nombreuses maladies tels que les maladies cardiovasculaires. Elle peut également aider à équilibrer le taux de sucre dans le sang afin de réduire le risque de diabète et contribuer à lutter contre le stress, l’anxiété. Il est donc indispensable qu’elle soit régulière. Malheureusement, le personnage n’a plus assez d’énergie pour réaliser une activité physique. Sa santé va donc être fortement impactée.",
                    "energiePenality": 0,
                    "moral": 0,
                    "equilibreAlim": 0,
                    "physique": 0
                }
            }
        }
    },
    12: {
        "enonce": "En hiver Arthur se rend au marché, quel panier choisis t’il pour ses repas de la semaine ?",
        "arguments": {
            "1": {
                "enonce": "carotte, oignon, brocolis, choux rouge, courge, butternut, panais, betterave, poireau.",
                "energieNeeded": 0,
                "success": {
                    "text": "Le personnage se rend au marché pendant l’hiver. Choisir des légumes de saisons va donc lui permettre d’avoir des produits de meilleure qualité nutritionnelle et gustative. En effet, les produits de saison sont plus riches en fibres et micronutriments. Récoltés à maturité, ils possèdent un goût plus prononcé. Deux portions de fruits et trois portions de légumes nécessaire par jour. Ces produits vont donc permettre de satisfaire les besoins métaboliques de notre personnage. Les indicateurs santé et équilibre alimentaire vont donc nettement augmenter.",
                    "energiePenality": 10,
                    "moral": 0,
                    "equilibreAlim": 10,
                    "physique": 10
                },
                "failure": {
                    "text": "Issue impossible",
                    "energiePenality": 0,
                    "moral": 0,
                    "equilibreAlim": 0,
                    "physique": 0
                }
            },
            "2": {
                "enonce": "tomate, aubergine, courgette, melon, fraise.",
                "energieNeeded": 0,
                "success": {
                    "text": "Le personnage se rend au marché pendant l’hiver. Les fruits et légumes choisies ne sont pas de saison mais sont des produits qu’il affectionne particulièrement. L’indicateur de frustration va donc diminuer. Ces produits restent bons pour l’équilibre alimentaire et la santé même si leurs propriétés nutritionnelles ne sont pas à leur optimum. De plus, les produits hors saison, ont un goût beaucoup moins marqué. Toutefois, ces produits suffiront à combler les recommandations de 2 portions de fruits et 3 portions de légumes par jour.",
                    "energiePenality": 10,
                    "moral": 5,
                    "equilibreAlim": 0,
                    "physique": 0
                },
                "failure": {
                    "text": "Issue impossible",
                    "energiePenality": 0,
                    "moral": 0,
                    "equilibreAlim": 0,
                    "physique": 0
                }
            },
            "3": {
                "enonce": "Haricot vert, petit pois, épinard, courgette, poivron.",
                "energieNeeded": 0,
                "success": {
                    "text": "Le personnage se rend au marché pendant l’hiver. Les légumes choisis ne sont pas de saison. Ces produits restent bons pour l’équilibre alimentaire et la santé même si leurs propriétés nutritionnelles ne sont pas à leur maximum. De plus, les produits hors saison, ont un goût beaucoup moins marqué. Ces produits suffiront à combler les recommandations de 3 portions de légumes par jour mais pas les fruits.... Par conséquent, il y aura un impact sur son équilibre alimentaire.",
                    "energiePenality": 10,
                    "moral": 0,
                    "equilibreAlim": -5,
                    "physique": 0
                },
                "failure": {
                    "text": "Issue impossible",
                    "energiePenality": 0,
                    "moral": 0,
                    "equilibreAlim": 0,
                    "physique": 0
                }
            },
            "4": {
                "enonce": "pomme de terre, oignon, échalote et champignon",
                "energieNeeded": 0,
                "success": {
                    "text": "Le personnage se rend au marché pendant l’hiver. Ces produits sont de saison mais considérés comme des garnitures aromatiques (oignon, échalote). Bien qu’elle soit vendue chez le maraicher, la pomme de terre est un féculent.Par conséquent, le panier de la semaine ne contient pas de réels légumes. Ces produits ne suffiront pas à combler les recommandations de 2 portions de fruits et 3 portions de légumes par jour. L’indicateur équilibre alimentaire va donc diminuer",
                    "energiePenality": 10,
                    "moral": 5,
                    "equilibreAlim": 0,
                    "physique": -5
                },
                "failure": {
                    "text": "Issue impossible",
                    "energiePenality": 0,
                    "moral": 0,
                    "equilibreAlim": 0,
                    "physique": 0
                }
            },
            "5": {
                "enonce": "pfff la flemme, je prendrais des légume en conserve quand j'irai au supermarché.",
                "energieNeeded": 0,
                "success": {
                    "text": "Les légumes frais sont à privilégier afin d’aider le personnage à couvrir au maximum ses besoins en vitamines et minéraux. En effet, lors de la mise en conserve des légumes, la chaleur du processus provoque une perte pratiquement totale des vitamines thermosensible. De plus, les minéraux contenus dans les aliments se diffuse dans l’eau, et sont donc évacuer lors de l’égouttage. Ces produits ne suffiront donc pas à combler les recommandations notamment en vitamines et minéraux. Les indicateurs santé et équilibre alimentaire vont donc nettement diminuer.",
                    "energiePenality": 0,
                    "moral": 5,
                    "equilibreAlim": -10,
                    "physique": -10
                },
                "failure": {
                    "text": "Issue impossible",
                    "energiePenality": 0,
                    "moral": 0,
                    "equilibreAlim": 0,
                    "physique": 0
                }
            }
        }
    }
}
