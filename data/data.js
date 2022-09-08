var situations =
    {
        1:
            {
                "enonce": "Il est 13 heures et Arthur sort de table. Après son fromage, il lui reste une petite place pour un dessert. La tête dans son frigo, il hésite entre plusieurs options : ",
                "arguments": {
                    "1": {
                        "enonce": "Prendre un fruit et un yaourt. ",
                        "energieNeeded": 0,
                        "success": {
                            "text": "Comme indiqué dans la situation, notre personnage a encore une petite faim. Cependant, il a déjà consommé un produit laitier. La consommation d’un second produit laitier avec un fruit n’est donc pas adaptée.",
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
                        "enonce": "Prendre un fruit. ",
                        "energieNeeded": 0,
                        "success": {
                            "text": "Prendre un fruit en dessert permet au personnage de participer à la couverture de ses besoins journaliers en fibres, vitamines et minéraux. De plus, il est important de ressentir la satiété à la fin de chaque repas afin d’apporter à l’organisme ce dont il a besoin et d’éviter la frustration.",
                            "energiePenality": 0,
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
                    "3": {
                        "enonce": "Prendre un yaourt. ",
                        "energieNeeded": 0,
                        "success": {
                            "text": "La consommation d’un deuxième produit laitier dans le même repas n’est pas adaptée. De plus, notre personnage est sensible au lait qui lui crée des inconforts digestifs, il faut donc faire attention aux quantités consommées. ",
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
                        "enonce": "Ne rien prendre. ",
                        "energieNeeded": 0,
                        "success": {
                            "text": "Dans cette situation, Arthur souhaite consommer un aliment supplémentaire pour terminer son repas. S’il décide de ne rien prendre, Arthur ne ressentira pas la satiété et terminera donc son repas sur une sensation de frustration. Cela aura donc un impact sur le bien-être du personnage, et le poussera à grignoter dans l’après-midi.",
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
                        "enonce": "Prendre la dernière part de tarte au citron meringuée du frigo. ",
                        "energieNeeded": 0,
                        "success": {
                            "text": "Il est essentiel de s’accorder des plaisirs régulièrement. Toutefois, une consommation excessive de produits sucrés peut avoir un effet néfaste sur la santé. Il est donc important de faire attention aux quantités et à la fréquence de ces prises sucrées. ",
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
            "enonce": "Comme chaque jour de travail, Arthur mange au restaurant lors de sa pause déjeuner. Il hésite entre plusieurs choix à la carte du restaurant.",
            "arguments": {
                "1": {
                    "enonce": "La formule du jour complète (salade de pousses d’épinards, filet de dorade, riz & julienne de légumes de saison, salade de fruits). ",
                    "energieNeeded": 0,
                    "success": {
                        "text": "Choisir la formule complète permet à notre personnage de manger un repas équilibré respectant son bien-être physique et moral. En effet, en mangeant à sa faim, Arthur évite la frustration et couvre ses besoins nutritionnels.",
                        "energiePenality": 0,
                        "moral": 5,
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
                    "enonce": "Un plat unique : une salade César. ",
                    "energieNeeded": 0,
                    "success": {
                        "text": "Choisir un plat léger tel qu’une salade césar ne permet pas de couvrir les besoins nutritionnels du personnage ni de lui permettre d’arriver à satiété. En effet, ce repas est composé de légumes et de protéines, mais pas de féculents. A la fin du repas, le personnage aura encore faim, ce qui va donc augmenter sa frustration, et le pousser à grignoter dans l’après-midi.",
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
                    "enonce": "Une entrecôte, avec frites & sauce roquefort.",
                    "energieNeeded": 0,
                    "success": {
                        "text": "Choisir l’entrecôte sauce roquefort avec des frites va impacter son équilibre alimentaire. En effet, Arthur mange tous les midis au restaurant, il est donc important de varier ses choix et de respecter un certain équilibre. Le repas choisit est riche en acides gras saturés qui favorisent la formation d’une plaque d’athérome obstruant les artères, augmentant le risque de maladies cardiovasculaires. Son moral, quant à lui, sera en hausse. Il reste important de s’accorder des plaisirs.",
                        "energiePenality": 0,
                        "moral": 10,
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
                    "enonce": "La formule du jour : plat/dessert (filet de dorade, riz & julienne de légumes de saison, salade de fruits).",
                    "energieNeeded": 0,
                    "success": {
                        "text": "Choisir une formule plat/dessert permet à notre personnage de participer à la couverture de ses besoins en respectant l’équilibre alimentaire. En effet, le plat est complet, composé à la fois d’une portion de protéines, de légumes et de féculents. Concernant le dessert, il s’agit de crudités, apportant fibres crues, vitamines et minéraux. Il faut cependant s’assurer qu’Arthur mange à sa faim, afin d’éviter la frustration.",
                        "energiePenality": 0,
                        "moral": 0,
                        "equilibreAlim": 5,
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
                    "enonce": "Formule du jour complète : (terrine de campagne, entrecôte frites sauce roquefort, panna cotta).",
                    "energieNeeded": 0,
                    "success": {
                        "text": "Cette formule du jour propose des aliments très riches en acides gras saturés qui favorisent la formation d’une plaque d’athérome obstruant les artères, augmentant le risque de maladies cardiovasculaires. De plus, manger un repas trop copieux entraînent des variations de glycémie pouvant contribuer à de la fatigue, ou un manque de concentration au cours de l’après-midi.",
                        "energiePenality": 0,
                        "moral": 15,
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
            "enonce": "Arthur souhaite améliorer son petit-déjeuner. Sa diététicienne lui conseille : un verre de lait, un fruit et une tartine de pain complet avec un peu de beurre et de confiture. Connaissant ses inconforts digestifs, il opte pour :",
            "arguments": {
                "1": {
                    "enonce": "Pas de lait au petit déjeuner, le jeu n’en vaut pas la chandelle.",
                    "energieNeeded": 0,
                    "success": {
                        "text": "L’absence au petit-déjeuner d’un produit laitier, riche en protéines et calcium, va impacter son équilibre alimentaire et son bien-être physique. De plus, priver Arthur de consommer un verre de lait comme à son habitude impactera son moral.",
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
                    "enonce": "Tant pis pour les inconforts, il conserve le verre de lait.",
                    "energieNeeded": 0,
                    "success": {
                        "text": "Même si Arthur avait auparavant l’habitude de prendre un verre de lait classique, faire le choix de poursuivre cette habitude malgré les inconforts digestifs n’est pas conseillé si l’on veille au bien être de notre personnage.",
                        "energiePenality": 0,
                        "moral": 10,
                        "equilibreAlim": 5,
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
                    "enonce": "Arthur se tourne vers du lait de chèvre / brebis, plus simple à digérer.",
                    "energieNeeded": 0,
                    "success": {
                        "text": "Ce choix peut limiter l’impact du produit laitier sur son organisme. Contrairement à la composition du lait de vache, le lait de chèvre ou de brebis est plus digeste et permet de conserver les mêmes intérêts nutritionnels (protéines, calcium et vitamines B12, D). Ainsi, Arthur garde son habitude de boire un verre de lait mais évite les inconforts associés. Il faut cependant faire attention au moral de notre personnage, qui risque de ne pas apprécier le goût plus prononcé du produit. ",
                        "energiePenality": -10,
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
                },
                "4": {
                    "enonce": "La diététicienne l’informe également que le lait de montagne et le yaourt sont plus digestes, il suit ses conseils.",
                    "energieNeeded": 0,
                    "success": {
                        "text": "Le lait de montagne apporte protéines, calcium, vitamines B12 et D à l’organisme, et se révèle plus digeste par l’organisme.  A contrario du lait de brebis ou de chèvre, le lait de montagne a un goût moins prononcé. Concernant les yaourts, lors de la création du produits, une partie du lactose est hydrolysé par les bactéries, le rendant plus digeste également. ",
                        "energiePenality": -10,
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
                    "enonce": "Il s’oriente vers du fromage.",
                    "energieNeeded": 0,
                    "success": {
                        "text": "Remplacer son verre de lait par du fromage va permettre à Arthur de ne pas être atteint d’inconforts digestifs. Cependant il est recommandé de ne pas dépasser la consommation d’une portion de fromage par jour (environ 30 grammes) en raison de la teneur en acides gras saturés, qui en excès, favorisent les maladies cardiovasculaires.",
                        "energiePenality": -5,
                        "moral": -5,
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
                }
            }
        },
        4: {
            "enonce": "Pendant qu’Arthur cultive son potager, un ami passe lui rendre visite et un débat s’entame autour de l’agriculture biologique et des producteurs locaux. Arthur, lui, a l’habitude de cultiver lui-même les légumes qu’il ne trouve pas dans son supermarché en bio. ",
            "arguments": {
                "1": {
                    "enonce": "Arthur décide de laisser tomber son potager et de faire confiance uniquement aux producteurs locaux.",
                    "energieNeeded": 0,
                    "success": {
                        "text": "Les producteurs locaux proposent des produits de saison, plus intéressants sur le plan nutritionnel et organoleptique. Le respect des délais de maturation permet aux fruits et aux légumes d’acquérir plus de nutriments, fibres, vitamines et minéraux. En revanche, notre personnage prend du plaisir à cultiver son potager, l’en empêcher va donc diminuer son bien-être moral.",
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
                    "enonce": "Arthur décide d’étendre ses cultures et de ne se fier ni à l’agriculture biologique, ni aux producteurs locaux.",
                    "energieNeeded": 60,
                    "success": {
                        "text": "Étendre ses cultures permettra au personnage de consommer des produits dont il contrôle la qualité, tout en prenant plaisir à jardiner. Cependant, étendre les cultures va demander au personnage de l’énergie, sachant que les producteurs locaux et l’agriculture biologique permettent d’avoir des produits de qualité et/ou sans pesticide.",
                        "energiePenality": -20,
                        "moral": 10,
                        "equilibreAlim": 10,
                        "physique": 10
                    },
                    "failure": {
                        "text": "Étendre ses cultures lui permettrait d’accroitre sa consommation de produits de bonne qualité. Le respect des délais de maturation sur la plante permet aux fruits et aux légumes d’acquérir plus de nutriments, fibres, vitamines et minéraux. Malheureusement, le personnage n’a plus assez d'énergie pour étendre ses cultures, épuisé, il abandonne son potager. Par conséquent, son bien-être moral et physique vont diminuer à cause de cette diminution d’activité physique.",
                        "energiePenality": 0,
                        "moral": -5,
                        "equilibreAlim": 0,
                        "physique": -5
                    }
                },
                "3": {
                    "enonce": "Arthur continue son potager modérément, comme actuellement, et se sert en bio au supermarché ainsi que chez les producteurs locaux pour compléter.",
                    "energieNeeded": 0,
                    "success": {
                        "text": "En continuant à faire son potager modérément et en complétant par des produits locaux, cela permet au personnage de consommer des produits de qualité et intéressants sur le plan nutritionnel et organoleptique. L’activité physique du personnage est également conservée.",
                        "energiePenality": 0,
                        "moral": 10,
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
                "4": {
                    "enonce": "Il abandonne le potager, c’est trop d’investissement personnel. Les produits bio du supermarché suffisent et garantissent la qualité.  ",
                    "energieNeeded": 0,
                    "success": {
                        "text": "Consommer uniquement des produits bio du supermarché ne signifie pas forcément avoir des produits de qualité. En effet, l’agriculture biologique ne possède pas la même législation en fonction des pays, certains sont plus laxistes que d’autres. De plus l’acheminement des produits vers leur destination écourte leur temps de maturation, ce qui implique une plus faible densité nutritionnelle.  En supprimant le jardinage, on diminue également l’activité physique d’Arthur, impactant son bien-être physique.",
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
                    "enonce": "Agriculture biologique, producteurs locaux ? On ne peut faire confiance qu’à soi-même...",
                    "energieNeeded": 0,
                    "success": {
                        "text": "Les producteurs locaux proposent des produits de saison, intéressants sur le plan nutritionnel et organoleptique. L’agriculture biologique, quant à elle, permet de consommer des produits où l’usage de pesticides est limité. Cependant, attention à la provenance du produit, l’agriculture biologique ne possède pas la même législation en fonction des pays, certains sont plus laxistes que d’autres.",
                        "energiePenality": 0,
                        "moral": -5,
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
                }
            }
        },
        5: {
            "enonce": "Arthur se rend chez son poissonnier. Il hésite entre ... ",
            "arguments": {
                "1": {
                    "enonce": "Un peu de saumon, il paraît que c’est riche en oméga 3.",
                    "energieNeeded": 0,
                    "success": {
                        "text": "Le saumon est un poisson riche en oméga 3. Ces nutriments jouent un rôle essentiel dans le développement et l’entretien du système nerveux agissant ainsi sur la mémoire. Toutefois, le saumon comme les autres « gros poissons gras » sont particulièrement exposés aux polluants et métaux lourds. Si la consommation est trop fréquente, elle impactera la santé.",
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
                    "enonce": "Maquereau/sardine c’est riche en oméga 3 et meilleur pour la santé que le saumon.",
                    "energieNeeded": 0,
                    "success": {
                        "text": "Le maquereau et la sardine sont également des poissons riches en oméga 3. Cependant, du fait de leur petite taille, ils sont moins exposés aux polluants et métaux lourds, impactant donc moins la santé du consommateur.",
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
                    "enonce": "Un bon aïoli, ça fait toujours plaisir.",
                    "energieNeeded": 0,
                    "success": {
                        "text": "L’aïoli est un plat équilibré composé de poisson blanc, de féculents et de légumes. Il va donc participer à la couverture des besoins en protéines, glucides, fibres et minéraux. Les indicateurs équilibre alimentaire et bien-être physique vont être impactés positivement. De plus, l’aïoli faisant parti de ses plats préférés, son bien-être moral va d’autant plus augmenter. Cependant, si l’on effectue ce choix, il faudra penser à avoir un apport en poisson gras dans la semaine.",
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
                    "enonce": "Une sole meunière avec double dose de beurre.",
                    "energieNeeded": 0,
                    "success": {
                        "text": "La sole ne fait pas partie des poissons gras, elle n’apporte donc pas d’omégas 3 à l’organisme. Cuisinée façon meunière, elle entraîne une consommation excessive de beurre pouvant être néfaste pour la santé de notre personnage. En effet, le beurre contient une quantité importante d’AGS (acides gras saturés), favorisant le développement des maladies cardiovasculaires. De plus, le beurre est sensible à la chaleur et devient toxique à la cuisson.",
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
                    "enonce": "Une papillote de cabillaud aux légumes du soleil.",
                    "energieNeeded": 0,
                    "success": {
                        "text": "Choisir la cuisson en papillote limite l’ajout excessif de matières grasses et préserve la qualité des aliments, en conservant une partie des vitamines et minéraux des légumes par exemple. Cependant, si l’on effectue ce choix, il faudra penser à avoir un apport en poisson gras dans la semaine.",
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
            "enonce": "Ce soir c’est pommes de terre sautées ! Quelle matière grasse utiliser ?  ",
            "arguments": {
                "1": {
                    "enonce": "Du beurre.",
                    "energieNeeded": 0,
                    "success": {
                        "text": "Le beurre est une matière grasse ne résistant pas à la chaleur. Lors d’une montée importante en température, certains composés vont devenir toxiques pour l’organisme. Il est donc conseillé d’éviter d’utiliser le beurre pour la cuisson.",
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
                    "enonce": "De l’huile d’arachide.",
                    "energieNeeded": 0,
                    "success": {
                        "text": "Arthur étant allergique à l’arachide, il est préférable de choisir une autre alternative afin d’éviter les risques de santé associés.  ",
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
                    "enonce": "De l’huile d’olive extra vierge.",
                    "energieNeeded": 0,
                    "success": {
                        "text": "L’huile d’olive extra vierge est composée d’acide gras mono insaturé, jouant un rôle hypocholestérolémiant en utilisation à basse température. Cependant, elle n’est pas adaptée pour une cuisson à haute température.",
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
                    "enonce": "De l’huile de tournesol raffinée.",
                    "energieNeeded": 0,
                    "success": {
                        "text": "L’huile de tournesol, par sa composition, est une huile ayant une résistance à la chaleur plus importante que les autres matières grasses citées. De plus, le raffinage permet d’éliminer les impuretés dans l’huile limitant ainsi la formation de composés cancérigènes pour l’organisme.",
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
                "5": {
                    "enonce": "De l’huile de tournesol non raffinée.",
                    "energieNeeded": 0,
                    "success": {
                        "text": "L’huile de tournesol étant non raffinée, elle ne permet pas d’éliminer les impuretés de l’huile. Le point de fumée de l’huile non raffinée sera donc moins élevé qu’une huile raffinée. Elle sera donc moins résistante à la chaleur.",
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
                }
            }
        },
        7: {
            "enonce": "Arthur se rend au supermarché pour acheter un steak haché pour le dîner. Il n’arrive pas à comprendre les étiquettes et ne sait pas lequel choisir...",
            "arguments": {
                "1": {
                    "enonce": "Il sort son téléphone avec une application qui lit les étiquettes à sa place : yuka/ open food fact.",
                    "energieNeeded": 0,
                    "success": {
                        "text": "Les applications de nutrition peuvent apporter des informations intéressantes mais il faut tout de même garder un esprit critique. Ces applications permettent la mise en avant de la présence d’additifs dangereux pour la santé mais certains autres paramètres peuvent être mal interprétés, voir non pris en compte. De plus, il faut replacer les notions de quantité et d’utilisation dans l’importance que l’on accorde au score affiché.",
                        "energiePenality": -10,
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
                "2": {
                    "enonce": "Il prend un steak haché bio, pour être sûr de la qualité du produit.",
                    "energieNeeded": 0,
                    "success": {
                        "text": "Prendre le steak haché bio, permet au personnage d’avoir un produit sans OGM respectant une règlementation stricte qui engage les producteurs et protège les consommateurs. Cependant la règlementation est variable selon les pays, il est donc important de vérifier que le produit provient bien de France. Le steak haché reste également un produit ultra-transformé dans lequel on peut retrouver des additifs qui permettent de conserver le produit. Ces composés, à long terme peuvent impacter la santé, il faut donc préférer les produits artisanaux.",
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
                    "enonce": "Arthur prend un steak haché Label rouge, gage de qualité.",
                    "energieNeeded": 0,
                    "success": {
                        "text": "Un label permet d’avoir un produit de qualité supérieure aux produits courants de comparaison et respectant un certain savoir-faire. ",
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
                    "enonce": "Il prend un steak haché premier prix, ils sont tous de même qualité de toute façon.",
                    "energieNeeded": 0,
                    "success": {
                        "text": "En prenant le steak haché premier prix, le personnage aura probablement un produit de moins bonne qualité, avec une quantité plus importante d’additifs. L’indicateur bien-être physique va donc diminuer. Il est donc important de faire attention à la qualité du produit afin qu’il y ait le moins d’additifs possible.",
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
                    "enonce": "Il décide finalement de se rendre à la boucherie.",
                    "energieNeeded": 50,
                    "success": {
                        "text": "Acheter son steak haché en boucherie permet au personnage d’être mieux conseillé et d’avoir un produit de qualité, avec une diminution de l’utilisation d’additifs par exemple. Cependant, le déplacement lui demandera nettement plus d’énergie.",
                        "energiePenality": -10,
                        "moral": 5,
                        "equilibreAlim": 5,
                        "physique": 5
                    },
                    "failure": {
                        "text": "Acheter son steak haché en boucherie permet au personnage d’être mieux conseillé et d’avoir un produit de qualité, avec une diminution de l’utilisation d’additifs par exemple. Cependant, le déplacement lui demandera nettement plus d’énergie.",
                        "energiePenality": 0,
                        "moral": -5,
                        "equilibreAlim": 0,
                        "physique": -5
                    }
                }
            }
        },
        8: {
            "enonce": "Arthur reçoit des amis végétariens. Il se questionne sur ce qu’il va cuisiner afin de remplacer les protéines de la viande. ",
            "arguments": {
                "1": {
                    "enonce": "Il prépare des lasagnes aux légumes.",
                    "energieNeeded": 0,
                    "success": {
                        "text": "Préparer des lasagnes aux légumes permet au personnage de ne pas se frustrer en réadaptant la recette d’un plat qu’il affectionne. Bien que les lasagnes contiennent des œufs (dans la pâte) et du lait (dans la béchamel), l’apport en protéines est insuffisant.",
                        "energiePenality": 0,
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
                "2": {
                    "enonce": "Il prépare du chili sin carne (sans viande).",
                    "energieNeeded": 0,
                    "success": {
                        "text": "Préparer du chili sin carne est une bonne alternative aux protéines de la viande. En effet, associer les céréales et les légumineuses permet d’obtenir une « complémentarité protéique » idéale. Les carences en acides aminés d’une catégorie sera apporté par l’autre, et inversement. Tous les acides aminés essentiels seront donc apportés, permettant d’obtenir des protéines de bonne qualité. Le chili sin carne est un plat qui associe les haricots rouges avec du riz, ce plat est donc équilibré et permettra aux végétariens d’assurer un apport suffisant en protéines sans pour autant frustrer Arthur avec un plat qu’il ne connait pas.",
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
                    "enonce": "Il achète un steak haché végétal.",
                    "energieNeeded": 0,
                    "success": {
                        "text": "Proposer un steak végétal va impacter sur l’équilibre alimentaire. En effet, il s’agit d’un produit industriel ultra- transformé, dans lequel on retrouve souvent beaucoup d’additifs et de protéines texturées, réhydratées, difficilement assimilables par notre organisme.",
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
                    "enonce": "Il prépare une omelette..",
                    "energieNeeded": 0,
                    "success": {
                        "text": "Faire une omelette est une bonne alternative. En effet cette préparation permet à la fois d’apporter des protéines mais aussi de la vitamine B12, retrouvée principalement dans les produits d’origine animale, qui est une carence régulière chez les végétariens. Il faudra cependant penser à associer l’omelette à des féculents et légumes pour proposer un plat équilibré.",
                        "energiePenality": 0,
                        "moral": 5,
                        "equilibreAlim": -5,
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
                    "enonce": "Il prépare un wok de nouilles avec des légumes et du tofu.",
                    "energieNeeded": 0,
                    "success": {
                        "text": "Préparer un wok au tofu permet au personnage de respecter son équilibre alimentaire et son bien-être physique. Ce plat est équilibré, avec légumes et féculents, et permet un apport en protéines végétales. Cependant, le tofu est un aliment avec un goût particulier souvent peu apprécié, notamment chez les personnes n’ayant pas l’habitude d’en consommer. On risque donc de diminuer le bien-être moral de notre personnage. ",
                        "energiePenality": 0,
                        "moral": -5,
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
                }
            }
        },
        9: {
            "enonce": "Arthur se rend en réunion chez un client. Comme à son habitude, celui-ci lui propose une viennoiserie pour le goûter, que fait-il ? ",
            "arguments": {
                "1": {
                    "enonce": "Il accepte la viennoiserie, même si c’est la 4ème cette semaine. Il ne faut pas vexer son client.",
                    "energieNeeded": 0,
                    "success": {
                        "text": "Il est essentiel de s’accorder des plaisirs régulièrement, toutefois une consommation excessive de produits sucrés et gras peut avoir un effet néfaste sur la santé. Il est donc important que la consommation de viennoiserie reste occasionnelle, ce qui n’est pas le cas dans cette situation. ",
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
                    "enonce": "Il refuse, Arthur avait déjà prévu un fruit et des oléagineux.",
                    "energieNeeded": 0,
                    "success": {
                        "text": "Prendre un fruit et des oléagineux permet au personnage de ne pas être frustré en se privant d’une collation tout en respectant son équilibre alimentaire et sa santé. Consommer régulièrement un fruit et des oléagineux permet de participer à la couverture des besoins en vitamines, minéraux, fibres et oméga 3.",
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
                    "enonce": " Il ne prend qu’un café (sucré), le goûter c'est pour les enfants.",
                    "energieNeeded": 0,
                    "success": {
                        "text": "SSe priver de collation va provoquer chez le personnage un sentiment de frustration. De plus, une prise de sucre isolée va impacter fortement sa glycémie poussant son corps à se réguler. Il risque de faire face à une hypoglycémie réactionnelle provoquant une petite faim quelques heure plus tard.  ",
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
                    "enonce": "Un verre d’eau suffira, merci.",
                    "energieNeeded": 0,
                    "success": {
                        "text": "Là encore, se priver de collation va provoquer chez le personnage un sentiment de frustration. Une collation sert à combler un petit creux entre deux repas et d’éviter le grignotage. Elle est donc utile en fonction des habitudes de vie de chaque personne.",
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
                "5": {
                    "enonce": "ll accepte la viennoiserie et décide même d’en prendre une seconde.",
                    "energieNeeded": 0,
                    "success": {
                        "text": "Il est essentiel de s’accorder des plaisirs régulièrement, toutefois il est important de s’interroger sur les quantités. La consommation d’une seule viennoiserie est suffisante pour apporter le plaisir recherché.",
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
                    "enonce": "Il réchauffe un plat cuisiné au micro-ondes (hachis parmentier).",
                    "energieNeeded": 0,
                    "success": {
                        "text": "Réchauffer un plat cuisiné au micro-ondes peut avoir un impact négatif sur le bien-être moral car les plats cuisinés sont pour la plupart moins goûteux. L’équilibre alimentaire et le bien-être physique peuvent aussi être diminués car on ne contrôle ni la qualité des produits ni l’équilibre nutritionnel. Attention, tous les plats préparés ne sont pas nutritionnellement mauvais pour la santé, il est important de faire attention à la liste des ingrédients et d’éviter les plats contenant des additifs (E xxx).",
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
                    "enonce": "Il cuisine un simple plat de pâtes, 12 minutes montre en main.",
                    "energieNeeded": 50,
                    "success": {
                        "text": "Préparer un repas rapide (pâtes à la crème) va demander au personnage de fournir de l’énergie pour réaliser un repas pour lequel il n’a pas envie de cuisiner et qui aura finalement un impact négatif sur son équilibre alimentaire. En effet, le repas cuisiné est une assiette composée principalement de glucides, il n’est donc pas équilibré. ",
                        "energiePenality": -10,
                        "moral": 5,
                        "equilibreAlim": -5,
                        "physique": 0
                    },
                    "failure": {
                        "text": "Préparer un repas rapide (pâtes à la crème) va demander au personnage de fournir de l’énergie pour réaliser un repas pour lequel il n’a pas envie de cuisiner et qui aura finalement un impact négatif sur son équilibre alimentaire. En effet, le repas cuisiné est une assiette composée principalement de glucides, il n’est donc pas équilibré. ",
                        "energiePenality": 0,
                        "moral": -5,
                        "equilibreAlim": -5,
                        "physique": -5
                    }
                },
                "3": {
                    "enonce": "Arthur décide de faire un vrai repas, un risotto au poulet et champignons.",
                    "energieNeeded": 70,
                    "success": {
                        "text": "Le personnage est fatigué. Décider de faire un vrai repas demande une grande énergie au personnage, même si cela impacte positivement sur son équilibre alimentaire et sa santé. D’autres solutions existent afin de permettre de maintenir un équilibre alimentaire sans pour autant épuiser le personnage.",
                        "energiePenality": -15,
                        "moral": 0,
                        "equilibreAlim": 10,
                        "physique": 5
                    },
                    "failure": {
                        "text": "Le personnage est fatigué. Décider de faire un vrai repas demande une grande énergie au personnage, même si cela impacte positivement sur son équilibre alimentaire et sa santé. D’autres solutions existent afin de permettre de maintenir un équilibre alimentaire sans pour autant épuiser le personnage. ",
                        "energiePenality": -10,
                        "moral": 0,
                        "equilibreAlim": -5,
                        "physique": 0
                    }
                },
                "4": {
                    "enonce": "Il choisit un repas provenant de chez le traiteur.",
                    "energieNeeded": 0,
                    "success": {
                        "text": "Les repas des traiteurs sont préparés par des chefs cuisinier ayant des connaissances sur l’équilibre alimentaire. En réalisant un choix attentif, Arthur peut donc sélectionner un repas qui permettra d’augmenter sa jauge d’équilibre alimentaire tout en respectant sa volonté de ne pas préparer un repas.",
                        "energiePenality": -10,
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
                "5": {
                    "enonce": "Il commande un fast-food. ",
                    "energieNeeded": 0,
                    "success": {
                        "text": "Commander un fast Food a un fort impact sur l’équilibre alimentaire et la santé du personnage.  En effet, les produits proposés sont de mauvaise qualité et ont très peu d’intérêt sur le plan nutritionnel.",
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
            "enonce": "Arthur souhaite améliorer sa condition physique. ",
            "arguments": {
                "1": {
                    "enonce": "A partir de maintenant, Arthur ira au travail à vélo ou à pied (10/30 minutes de trajet).",
                    "energieNeeded": 30,
                    "success": {
                        "text": "Aller au travail à vélo améliore nettement la santé du personnage tout en demandant peu d’énergie. En effet, l’activité physique permet de prévenir l’apparition de nombreuses maladies telles que les maladies cardiovasculaires et contribue à lutter contre le stress, l’anxiété. Il est donc indispensable qu’elle soit régulière. En réalisant un trajet qu’il a l’habitude de faire quotidiennement, Arthur ne modifie pas de façon importante son emploi du temps ce qui lui permet d’adopter un bon comportement à long terme.",
                        "energiePenality": -10,
                        "moral": 5,
                        "equilibreAlim": 0,
                        "physique": 10
                    },
                    "failure": {
                        "text": "Issue impossible" ,
                        "energiePenality": 0,
                        "moral": 0,
                        "equilibreAlim": 0,
                        "physique": 0
                    }
                },
                "2": {
                    "enonce": "Arthur téléphone à une salle de sport pour faire des séances après le travail (3h par semaine).",
                    "energieNeeded": 70,
                    "success": {
                        "text": "Aller à la salle de sport 3h/ semaine nécessite beaucoup d’énergie, ce qui impacte aussi sur le bien-être moral d’Arthur. Ces séances organisées influencent également sur l’emploi du temps d’Arthur qui doit réserver des créneaux spécifiques pour ses activités.",
                        "energiePenality": -30,
                        "moral": -5,
                        "equilibreAlim": 0,
                        "physique": 10
                    },
                    "failure": {
                        "text": "Malheureusement, le personnage n’a plus assez d’énergie pour réaliser une activité physique. Aller à la salle de sport 3h/ semaine nécessite beaucoup d’énergie, ce qui impacte aussi sur le bien-être moral d’Arthur. Ces séances organisées influencent également sur l’emploi du temps d’Arthur qui doit réserver des créneaux spécifiques pour ses activités. ",
                        "energiePenality": -20,
                        "moral": -10,
                        "equilibreAlim": 0,
                        "physique": -10
                    }
                },
                "3": {
                    "enonce": "Arthur décide qu’à partir de maintenant, il fera un footing le samedi matin.",
                    "energieNeeded": 60,
                    "success": {
                        "text": "Le footing représente une activité physique intéressante. Cependant, là encore la contrainte de l’emploi du temps influence négativement sur le moral du personnage. De plus il est important de réaliser une activité physique quotidienne, un seul footing le samedi matin ne permet donc pas de répondre aux besoins de notre organisme. ",
                        "energiePenality": -20,
                        "moral": 5,
                        "equilibreAlim": 0,
                        "physique": 5
                    },
                    "failure": {
                        "text": "Malheureusement, le personnage n’a plus assez d’énergie pour réaliser une activité physique. Le footing représente une activité physique intéressante. Cependant, là encore la contrainte de l’emploi du temps influence négativement sur le moral du personnage. De plus il est important de réaliser une activité physique quotidienne, un seul footing le samedi matin ne permet donc pas de répondre aux besoins de notre organisme. ",
                        "energiePenality": -20,
                        "moral": -10,
                        "equilibreAlim": 0,
                        "physique": -10
                    }
                },
                "4": {
                    "enonce": "Arthur prend désormais les escaliers et favorise la marche dès qu’il le peut.",
                    "energieNeeded": 25,
                    "success": {
                        "text": "Prendre les escaliers et favoriser la marche dès qu’il le peut, permet au personnage d’améliorer son bien-être physique tout en nécessitant très peu d’énergie et sans affecter son bien-être moral. Il est important de vérifier que ces modifications permettent de remplir l’objectif des 30 minutes d’activité physique par jour.",
                        "energiePenality": -10,
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
                    "enonce": "L’activité physique, ce n’est pas fait pour lui. Il abandonne.",
                    "energieNeeded": 0,
                    "success": {
                        "text": "L’activité physique permet de prévenir de l’apparition de nombreuses maladies telles que les maladies cardiovasculaires. Elle peut également aider à équilibrer le taux de sucre dans le sang afin de réduire le risque de diabète et contribuer à lutter contre le stress, l’anxiété. Il est donc indispensable qu’elle soit régulière. ",
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
                }
            }
        },
        12: {
            "enonce": "En hiver Arthur se rend au marché. Quel panier choisit-il pour ses repas de la semaine ?",
            "arguments": {
                "1": {
                    "enonce": "Carottes, brocolis, poireaux, pommes, oranges, poires.",
                    "energieNeeded": 0,
                    "success": {
                        "text": "Choisir des légumes de saisons va permettre à Arthur d’avoir des produits de meilleure qualité nutritionnelle et gustative. En effet, les produits de saison sont plus riches en fibres et micronutriments. Récoltés à maturité, ils possèdent un goût plus prononcé. 2 portions de fruits et 3 portions de légumes sont nécessaires par jour.",
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
                    "enonce": "Tomates, aubergines, courgettes, melons, fraises, pêches.",
                    "energieNeeded": 0,
                    "success": {
                        "text": "Les fruits et légumes choisies ne sont pas de saisons. Ils restent bons pour l’équilibre alimentaire et le bien-être physique même si leurs propriétés nutritionnelles et gustatives ne sont pas à leur optimum.",
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
                    "enonce": "Asperges, poireaux, petits pois, épinards, courgettes, tomates.",
                    "energieNeeded": 0,
                    "success": {
                        "text": "Les fruits et légumes choisis ne sont là non plus de saison, leurs propriétés nutritionnelles et organoleptiques sont donc diminuées. De plus, ces produits suffiront à combler les recommandations de 3 portions de légumes par jour mais pas de fruits...",
                        "energiePenality": 0,
                        "moral": 5,
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
                    "enonce": "Pommes de terre, oignons, échalotes et champignons.",
                    "energieNeeded": 0,
                    "success": {
                        "text": "Ces produits sont de saison mais considérés comme des garnitures aromatiques (oignons, échalotes). Concernant la pomme de terre, bien qu’elle soit vendue chez le maraîcher, ce n’est pas un légume mais un féculent. Par conséquent, le panier de la semaine ne permettra pas de couvrir les besoins nutritionnels de notre personnage.",
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
                    "enonce": "Je prendrais des légumes en conserve au supermarché, c’est amplement suffisant.",
                    "energieNeeded": 0,
                    "success": {
                        "text": "Les légumes frais sont à privilégier afin d’aider le personnage à couvrir au maximum ses besoins en vitamines et minéraux. En effet, lors de la mise en conserve des légumes, le processus thermique provoque une perte notamment en vitamines. De plus, les minéraux contenus dans les aliments se diffusent dans l’eau, et sont donc évacués lors de l’égouttage. Ces produits ne suffiront donc pas à combler les besoins en vitamines et minéraux. ",
                        "energiePenality": 0,
                        "moral": 0,
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
