var situations =
{
    1:
    {
        "enonce": "Il est 13 heure, Arthur sort de table, après son fromage il lui reste une petite place pour un dessert. Penché au dessus de son frigo il hésite entre plusieurs options : ",
        "arguments": {
            "1": {
                "enonce": "Il prend un fruit  et un yaourt ",
                "motivationNeeded": 0,
                "success": {
                    "text": "La situation indique que le personnage a pris du fromage. La consommation d’un deuxième produit laitier dans le même repas n’est donc pas adaptée, de plus notre personnage est sensible au lait qui lui créés des inconforts digestifs.  Les indicateurs santé et équilibre alimentaire ont donc étés affecté par ce choix. Une consommation inadaptée de produit laitiers peut être néfaste car comme tous les produits d’origine animal, ils contiennent une quantité importante d’AGS.",
                    "imageLink": "",
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": -5,
                    "sante": -5
                },
                "failure": {
                    "text": "Issue impossible",
                    "imageLink": "",
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 0,
                    "sante": 0
                }
            },
            "2": {
                "enonce": "Il prend un fruit ",
                "motivationNeeded": 0,
                "success": {
                    "text": "La situation indique que le personnage a encore une place pour un dessert. Prendre un fruit en dessert permet au personnage de participer à la couverture de ses besoins journaliers en fibres, vitamines et minéraux. Les indicateurs santé et équilibre alimentaire ont donc été impacté positivement par ce choix.",
                    "imageLink": "",
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 5,
                    "sante": 5
                },
                "failure": {
                    "text": "Issue impossible",
                    "imageLink": "",
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 0,
                    "sante": 0
                }
            },
            "3": {
                "enonce": "Il prend un yaourt ",
                "motivationNeeded": 0,
                "success": {
                    "text": "La situation indique que le personnage a pris du fromage. La consommation d’un deuxième produit laitier dans le même repas n’est donc pas adaptée, de plus notre personnage est sensible au lait qui lui créé des inconforts digestifs.  Les indicateurs santé et équilibre alimentaire ont donc étés affecté par ce choix. Une consommation inadaptée de produit laitiers peut être néfaste car comme tous les produits d’origine animal, ils contiennent une quantité importante d’AGS.",
                    "imageLink": "",
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": -5,
                    "sante": -5
                },
                "failure": {
                    "text": "Issue impossible",
                    "imageLink": "",
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 0,
                    "sante": 0
                }
            },
            "4": {
                "enonce": "Il ne prend rien ",
                "motivationNeeded": 0,
                "success": {
                    "text": "La situation indique que le personnage a encore une place pour un dessert. Il est important de ressentir la satiété à la fin de chaque repas afin d’apporter à l’organisme ce dont il a besoin. La consommation d’aucun dessert augmente donc la frustration du personnage et ne permet pas d’améliorer les indicateurs santé et équilibre alimentaire. ",
                    "imageLink": "",
                    "motivationPenality": 0,
                    "frustration": 5,
                    "equilibreAlim": -5,
                    "sante": -5
                },
                "failure": {
                    "text": "Issue impossible",
                    "imageLink": "",
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 0,
                    "sante": 0
                }
            },
            "5": {
                "enonce": "Il finit la part de tarte au citron meringuée qui reste dans le frigo ",
                "motivationNeeded": 0,
                "success": {
                    "text": "La situation indique que le personnage a encore une place pour un dessert. Il est essentiel de s’accorder des plaisirs régulièrement, toutefois une consommation excessive de produits sucrés peut avoir un effet néfaste sur la santé. Les indicateurs de santé et d’équilibre alimentaire vont donc être impactés négativement par ce choix tandis que la frustration du personnage elle s’améliore.",
                    "imageLink": "",
                    "motivationPenality": 0,
                    "frustration": -10,
                    "equilibreAlim": -5,
                    "sante": -5
                },
                "failure": {
                    "text": "Issue impossible",
                    "imageLink": "",
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 0,
                    "sante": 0
                }
            }
        }
    },
    2: {
        "enonce": "Arthur est au travail, il mange au restaurant lors de sa pause dej. Il hésite entre plusieurs choix à la carte du restaurant.  ",
        "arguments": {
            "1": {
                "enonce": "Formule du jour complète (salade de pousse d’épinard, filet de dorade, riz & julienne de légumes de saison, salade de fruit)",
                "motivationNeeded": 0,
                "success": {
                    "text": "A rediger",
                    "imageLink": "",
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 10,
                    "sante": 5
                },
                "failure": {
                    "text": "Issue impossible",
                    "imageLink": "",
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 0,
                    "sante": 0
                }
            },
            "2": {
                "enonce": "Plat unique : salade césar ",
                "motivationNeeded": 0,
                "success": {
                    "text": "A rediger",
                    "imageLink": "",
                    "motivationPenality": 0,
                    "frustration": 5,
                    "equilibreAlim": -5,
                    "sante": 0
                },
                "failure": {
                    "text": "Issue impossible",
                    "imageLink": "",
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 0,
                    "sante": 0
                }
            },
            "3": {
                "enonce": "Entrecôte, frite & sauce roquefort",
                "motivationNeeded": 0,
                "success": {
                    "text": "A rediger",
                    "imageLink": "",
                    "motivationPenality": 0,
                    "frustration": -5,
                    "equilibreAlim": -10,
                    "sante": 0
                },
                "failure": {
                    "text": "Issue impossible",
                    "imageLink": "",
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 0,
                    "sante": 0
                }
            },
            "4": {
                "enonce": "Formule du jour : entré plat / plat dessert (salade de pousse d’épinard, filet de dorade, riz & julienne de légumes de saison, salade de fruit) ",
                "motivationNeeded": 0,
                "success": {
                    "text": "A rediger",
                    "imageLink": "",
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 0,
                    "sante": 0
                },
                "failure": {
                    "text": "Issue impossible",
                    "imageLink": "",
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 0,
                    "sante": 0
                }
            },
            "5": {
                "enonce": "Formule du jour : (terrine de campagne, entrecôte frite sauce roquefort , pana cotta)",
                "motivationNeeded": 0,
                "success": {
                    "text": "A rediger",
                    "imageLink": "",
                    "motivationPenality": 0,
                    "frustration": -10,
                    "equilibreAlim": -10,
                    "sante": -10
                },
                "failure": {
                    "text": "Issue impossible",
                    "imageLink": "",
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 0,
                    "sante": 0
                }
            }
        }
    },
    3: {
        "enonce": "Arthur se rend au supermarché proche de chez lui, passant devant le rayon il se rappelle le petit déjeuner que lui préparer sa mère un petit suisse avec du miel, une fruit, une infusion verveine et une tartine de confiture . Nostalgique de cette époque il se demande comment refaire ce pdj sans faire face à des inconforts digestif…",
        "arguments": {
            "1": {
                "enonce": "Pas de yaourt au petit déjeuner, le jeu n’en vaut pas la chandelle.",
                "motivationNeeded": 0,
                "success": {
                    "text": "La situation indique que le personnage est nostalgique de son petit déjeuner d’enfance mais étant sensible au lait, il veut éviter de faire face à des inconforts digestifs. Le priver de yaourt va donc augmenter sa frustration, mais il ne subira aucun inconfort digestif ce qui n’impactera pas sur sa santé.",
                    "imageLink": "",
                    "motivationPenality": 0,
                    "frustration": 10,
                    "equilibreAlim": -5,
                    "sante": 0
                },
                "failure": {
                    "text": "Issue impossible",
                    "imageLink": "",
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 0,
                    "sante": 0
                }
            },
            "2": {
                "enonce": "Tant pis pour les inconfort, un pack de petit suisse comme à l’époque.",
                "motivationNeeded": 0,
                "success": {
                    "text": "La situation indique que le personnage est nostalgique de son petit déjeuner d’enfance. Notre personnage étant sensible au lait, la prise d’un petit suisse, va provoquer des inconforts digestifs qui affectes sa santé. En revanche va frustration va nettement diminuer car il va satisfaire son envie.",
                    "imageLink": "",
                    "motivationPenality": 0,
                    "frustration": -10,
                    "equilibreAlim": 0,
                    "sante": -10
                },
                "failure": {
                    "text": "Issue impossible",
                    "imageLink": "",
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 0,
                    "sante": 0
                }
            },
            "3": {
                "enonce": "Il a lu dans un article que le lait de brebis était plus simple à digérer, il va donc tenter d’adapter sa recette avec un yaourt au lait de brebis ",
                "motivationNeeded": 0,
                "success": {
                    "text": "La situation indique que le personnage est nostalgique de son petit déjeuner d’enfance mais étant sensible au lait, il veut éviter de faire face à des inconforts digestifs. Adapter sa recette avec un aliment inconnu va donc lui demander de la motivation. Le lait de brebis lui permettra néanmoins de ne pas faire face à des inconforts digestifs. Ainsi, les indicateurs frustration, santé et équilibre alimentaire resterons donc stables.",
                    "imageLink": "",
                    "motivationPenality": -20,
                    "frustration": 0,
                    "equilibreAlim": 5,
                    "sante": 5
                },
                "failure": {
                    "text": "Issue impossible",
                    "imageLink": "",
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 0,
                    "sante": 0
                }
            },
            "4": {
                "enonce": "Ce même article présenter les bénéfices sur la digestibilité  d’une consommation de produits issus du lait de montagne. ",
                "motivationNeeded": 0,
                "success": {
                    "text": "La situation indique que le personnage est nostalgique de son petit déjeuner d’enfance mais étant sensible au lait, il veut éviter de faire face à des inconforts digestifs. Adapter sa recette avec un produit issu du lait de montagne plus digeste que le lait des près va donc lui demander un peu de motivation mais cela lui permettra de ne pas faire face à des inconforts digestifs. Et ainsi de diminuer sa frustration, et d’augmenter les indicateurs santé et équilibre alimentaire.",
                    "imageLink": "",
                    "motivationPenality": -10,
                    "frustration": -5,
                    "equilibreAlim": 5,
                    "sante": 5
                },
                "failure": {
                    "text": "Issue impossible",
                    "imageLink": "",
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 0,
                    "sante": 0
                }
            },
            "5": {
                "enonce": "Dommage pour la nostalgie il y a d’autre produit laitiers, je mangerai du fromage.",
                "motivationNeeded": 0,
                "success": {
                    "text": "La situation indique que le personnage est nostalgique de son petit déjeuner d’enfance mais étant sensible au lait, il veut éviter de faire face à des inconforts digestifs. Remplacer son petit-suisse par du fromage va lui permettre de ne pas être atteint d’inconforts digestifs, mais sa frustration va d’autant plus augmenter de ne pas avoir pu répondre à ses envies.",
                    "imageLink": "",
                    "motivationPenality": 0,
                    "frustration": 5,
                    "equilibreAlim": 5,
                    "sante": 5
                },
                "failure": {
                    "text": "Issue impossible",
                    "imageLink": "",
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 0,
                    "sante": 0
                }
            }
        }
    },
    4: {
        "enonce": "Arthur cultive son potager , un matin un ami passe lui rendre visite et cueille une tomate, Arthur lui dit « tu peux y aller ça c'est bio ! » une discussion s’entame. Arthur a l’habitude de cultiver lui-même les légumes qu’il ne trouve pas dans son supermarché en bio. Son ami lui soutient qu’il devrait faire confiance aux producteurs locaux même si ces derniers ne sont pas labellisés.",
        "arguments": {
            "1": {
                "enonce": "Arthur décide de laisser tomber son potager. Et de faire confiance aux producteurs locaux",
                "motivationNeeded": 0,
                "success": {
                    "text": "La situation indique que le personnage cultive ses propres légumes s’il ne les trouve pas en supermarché bio, et son ami lui soutient de faire confiance aux producteurs locaux. Les producteurs locaux proposent des produits de saison. Consommer local permet de réduire le transport et donc de favoriser des produits intéressants sur le plan nutritionnel et organoleptique. Le respect des délais de maturation sur la plante permet aux fruits et aux légumes d’acquérir plus de nutriments, fibres, vitamines et minéraux. L’indicateur équilibre alimentaire va donc augmenter. En revanche, notre personnage prend du plaisir a cultiver son potager, l’en empêcher va donc augmenter sa frustration.",
                    "imageLink": "",
                    "motivationPenality": 0,
                    "frustration": 5,
                    "equilibreAlim": 10,
                    "sante": -5
                },
                "failure": {
                    "text": "Issue impossible",
                    "imageLink": "",
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 0,
                    "sante": 0
                }
            },
            "2": {
                "enonce": "Arthur se laisse convaincre par son amis mais souhaite poursuivre et étendre ses cultures. Il ne va donc acheter que ce qu’il ne fait pas lui même et continue de se dépenser dans son jardin.",
                "motivationNeeded": 50,
                "success": {
                    "text": "La situation indique que le personnage cultive ses propres légumes s’il ne les trouve pas en supermarché bio, et son ami lui soutient de faire confiance aux producteurs locaux. Étendre ses cultures va demander au personnage de la motivation, mais cela lui permettra de consommer des produits de bonne qualité dont il contrôle le procédé tout en prenant du plaisir à les faire pousser. Le respect des délais de maturation sur la plante permet aux fruits et aux légumes d’acquérir plus de nutriments, fibres, vitamines et minéraux. Les indicateurs santé et équilibre alimentaire vont donc augmentés, tandis que sa frustration va diminuer.",
                    "imageLink": "",
                    "motivationPenality": -20,
                    "frustration": -10,
                    "equilibreAlim": 10,
                    "sante": 10
                },
                "failure": {
                    "text": "La situation indique que le personnage cultive ses propres légumes s’il ne les trouve pas en supermarché bio, et son ami lui soutient de faire confiance aux producteurs locaux. Étendre ses cultures lui permettrait d’accroitre sa consommation de produits de bonne qualité. Le respect des délais de maturation sur la plante permet aux fruits et aux légumes d’acquérir plus de nutriments, fibres, vitamines et minéraux. Malheureusement, le personnage n’a plus assez de motivation pour étendre ses cultures, épuisé, il abandonne son potager. Par conséquent, sa frustration va augmenter alors que l’indicateur santé va être réduit par cette diminution d’activité physique.",
                    "imageLink": "",
                    "motivationPenality": -20,
                    "frustration": 5,
                    "equilibreAlim": 10,
                    "sante": 10
                }
            },
            "3": {
                "enonce": "Arthur continue à faire son potager modérément comme actuellement et se servir en bio au supermarché et chez les producteurs locaux pour compléter.",
                "motivationNeeded": 0,
                "success": {
                    "text": "La situation indique que le personnage cultive ses propres légumes s’il ne les trouve pas en supermarché bio, et son ami lui soutient de faire confiance aux producteurs locaux. Continuer à faire son potager modérément et compléter par des produits locaux permet au personnage de consommer des produits de qualité. Consommer local permet de réduire le transport et donc de favoriser des produits intéressants sur le plan nutritionnel et organoleptique. Le respect des délais de maturation sur la plante permet aux fruits et aux légumes d’acquérir plus de nutriments, fibres, vitamines et minéraux.  Par conséquent, les indicateurs santé et équilibre alimentaire vont augmenter sans pour autant impacter sa frustration.",
                    "imageLink": "",
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 5,
                    "sante": 5
                },
                "failure": {
                    "text": "Issue impossible",
                    "imageLink": "",
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 0,
                    "sante": 0
                }
            },
            "4": {
                "enonce": "le potager c’est trop d’investissement personnel, le bio du supermarché suffit.",
                "motivationNeeded": 0,
                "success": {
                    "text": "La situation indique que le personnage cultive ses propres légumes s’il ne les trouve pas en supermarché bio, et son ami lui soutient de faire confiance aux producteurs locaux. Consommer uniquement des produits bio du supermarché ne signifie pas forcément avoir des produits de qualité. En effet, l’agriculture biologique ne possède pas la même législation en fonction des pays, certains sont plus laxistes que d’autres. De plus l’acheminement des produits vers leur destination écourte leur temps de maturation, ce qui implique une plus faible densité nutritionnelle. L’indicateur de santé va donc diminuer.",
                    "imageLink": "",
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 0,
                    "sante": -5
                },
                "failure": {
                    "text": "Issue impossible",
                    "imageLink": "",
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 0,
                    "sante": 0
                }
            },
            "5": {
                "enonce": "Pourquoi se casser la tête un légume est un légume...",
                "motivationNeeded": 0,
                "success": {
                    "text": "La situation indique que le personnage cultive ses propres légumes s’il ne les trouve pas en supermarché bio, et son ami lui soutient de faire confiance aux producteurs locaux. Tous les aliments ne sont pas égaux sur le plan nutritionnel.Les producteurs locaux proposent des produits de saison.Consommer local permet de réduire le transport et donc de favoriser des produits intéressants sur le plan nutritionnel et organoleptique.Le respect des délais de maturation sur la plante permet aux fruits et aux légumes d’acquérir plus de nutriments, fibres, vitamines et minéraux.Les indicateurs santé et équilibre alimentaire vont nettement diminuer, pénalisés par la suppression de son activité jardinage et ses choix alimentaire.",
                    "imageLink": "",
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": -10,
                    "sante": -5
                },
                "failure": {
                    "text": "Issue impossible",
                    "imageLink": "",
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 0,
                    "sante": 0
                }
            }
        }
    },
    5: {
        "enonce": ": Il est chez son poissonnier pour prendre du poisson, quoi choisir ?",
        "arguments": {
            "1": {
                "enonce": "un peu de saumon il parait que c’est riche en oméga 3 ",
                "motivationNeeded": 0,
                "success": {
                    "text": "A rediger",
                    "imageLink": "",
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 5,
                    "sante": -5
                },
                "failure": {
                    "text": "Issue impossible",
                    "imageLink": "",
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 0,
                    "sante": 0
                }
            },
            "2": {
                "enonce": "Maquereau, sardine c’est riche en oméga 3 mais meilleur pour la santé que le saumon !",
                "motivationNeeded": 0,
                "success": {
                    "text": "A rediger",
                    "imageLink": "",
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 10,
                    "sante": 5
                },
                "failure": {
                    "text": "Issue impossible",
                    "imageLink": "",
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 0,
                    "sante": 0
                }
            },
            "3": {
                "enonce": "un bon aïoli ca fait plaisir ",
                "motivationNeeded": 0,
                "success": {
                    "text": "A rediger",
                    "imageLink": "",
                    "motivationPenality": 0,
                    "frustration": -10,
                    "equilibreAlim": 5,
                    "sante": 5
                },
                "failure": {
                    "text": "Issue impossible",
                    "imageLink": "",
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 0,
                    "sante": 0
                }
            },
            "4": {
                "enonce": "une sol meunière avec double dose de beurre ",
                "motivationNeeded": 0,
                "success": {
                    "text": "A rediger",
                    "imageLink": "",
                    "motivationPenality": 0,
                    "frustration": -5,
                    "equilibreAlim": -5,
                    "sante": -5
                },
                "failure": {
                    "text": "Issue impossible",
                    "imageLink": "",
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 0,
                    "sante": 0
                }
            },
            "5": {
                "enonce": "une papillotte  aux petit légume du soleil.",
                "motivationNeeded": 0,
                "success": {
                    "text": "A rediger",
                    "imageLink": "",
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 5,
                    "sante": 5
                },
                "failure": {
                    "text": "Issue impossible",
                    "imageLink": "",
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 0,
                    "sante": 0
                }
            }
        }
    },
    6: {
        "enonce": "Arthur réalise des pommes de terres sauté quel matière grasse vas t’il utiliser ?",
        "arguments": {
            "1": {
                "enonce": "beurre",
                "motivationNeeded": 0,
                "success": {
                    "text": "A rediger",
                    "imageLink": "",
                    "motivationPenality": 0,
                    "frustration": -5,
                    "equilibreAlim": 5,
                    "sante": -5
                },
                "failure": {
                    "text": "Issue impossible",
                    "imageLink": "",
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 0,
                    "sante": 0
                }
            },
            "2": {
                "enonce": "huile d’arachide ",
                "motivationNeeded": 0,
                "success": {
                    "text": "A rediger",
                    "imageLink": "",
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 0,
                    "sante": -10
                },
                "failure": {
                    "text": "Issue impossible",
                    "imageLink": "",
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 0,
                    "sante": 0
                }
            },
            "3": {
                "enonce": "huile d’olive extra ",
                "motivationNeeded": 0,
                "success": {
                    "text": "A rediger",
                    "imageLink": "",
                    "motivationPenality": 0,
                    "frustration": -5,
                    "equilibreAlim": -5,
                    "sante": -5
                },
                "failure": {
                    "text": "Issue impossible",
                    "imageLink": "",
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 0,
                    "sante": 0
                }
            },
            "4": {
                "enonce": "huile de tournesol raffinée bio ",
                "motivationNeeded": 0,
                "success": {
                    "text": "A rediger",
                    "imageLink": "",
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 5,
                    "sante": 10
                },
                "failure": {
                    "text": "Issue impossible",
                    "imageLink": "",
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 0,
                    "sante": 0
                }
            },
            "5": {
                "enonce": "huile de tournesol bio non raffinée ",
                "motivationNeeded": 0,
                "success": {
                    "text": "A rediger",
                    "imageLink": "",
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": -10,
                    "sante": 5
                },
                "failure": {
                    "text": "Issue impossible",
                    "imageLink": "",
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 0,
                    "sante": 0
                }
            }
        }
    },
    7: {
        "enonce": "Arthur est dans son supermarché et doit acheter du jambon cuit pour les amis qui viennent dîner chez lui le soir même. Malheureusement il ne sait pas quel jambon choisir et ne parviens pas à lire les étiquettes à cause de sa conjonctivite...",
        "arguments": {
            "1": {
                "enonce": "Il sort son téléphone avec une appli de type yuka ou open food fact..",
                "motivationNeeded": 0,
                "success": {
                    "text": "A rediger",
                    "imageLink": "",
                    "motivationPenality": 0,
                    "frustration": 5,
                    "equilibreAlim": 0,
                    "sante": 0
                },
                "failure": {
                    "text": "Issue impossible",
                    "imageLink": "",
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 0,
                    "sante": 0
                }
            },
            "2": {
                "enonce": "Il prend le jambon bio pour être sûr de la qualité du produit ",
                "motivationNeeded": 0,
                "success": {
                    "text": "A rediger",
                    "imageLink": "",
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 0,
                    "sante": 10
                },
                "failure": {
                    "text": "Issue impossible",
                    "imageLink": "",
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 0,
                    "sante": 0
                }
            },
            "3": {
                "enonce": "Il prend le jambon plus cher pour être sûr de la qualité du produit ",
                "motivationNeeded": 0,
                "success": {
                    "text": "A rediger",
                    "imageLink": "",
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 0,
                    "sante": -5
                },
                "failure": {
                    "text": "Issue impossible",
                    "imageLink": "",
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 0,
                    "sante": 0
                }
            },
            "4": {
                "enonce": "Il prend le premier prix, de toute façon cela ne change rien.",
                "motivationNeeded": 0,
                "success": {
                    "text": "A rediger",
                    "imageLink": "",
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 0,
                    "sante": -5
                },
                "failure": {
                    "text": "Issue impossible",
                    "imageLink": "",
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 0,
                    "sante": 0
                }
            },
            "5": {
                "enonce": "Il se rend à la boucherie de son supermarché et achète son jambon à la découpe.",
                "motivationNeeded": 50,
                "success": {
                    "text": "A rediger",
                    "imageLink": "",
                    "motivationPenality": -10,
                    "frustration": -5,
                    "equilibreAlim": 5,
                    "sante": 5
                },
                "failure": {
                    "text": "Issue impossible",
                    "imageLink": "",
                    "motivationPenality": -10,
                    "frustration": 5,
                    "equilibreAlim": 0,
                    "sante": -5
                }
            }
        }
    },
    8: {
        "enonce": "Arthur reçoit c'est copain végétarien il se demande comment remplacer les protéines de la viande.",
        "arguments": {
            "1": {
                "enonce": "Il lui fait des lasagne au légumes",
                "motivationNeeded": 0,
                "success": {
                    "text": "A rediger",
                    "imageLink": "",
                    "motivationPenality": 0,
                    "frustration": -5,
                    "equilibreAlim": 0,
                    "sante": 0
                },
                "failure": {
                    "text": "Issue impossible",
                    "imageLink": "",
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 0,
                    "sante": 0
                }
            },
            "2": {
                "enonce": "Il lui fait chilli sin carne ",
                "motivationNeeded": 0,
                "success": {
                    "text": "A rediger",
                    "imageLink": "",
                    "motivationPenality": 0,
                    "frustration": 5,
                    "equilibreAlim": 5,
                    "sante": 5
                },
                "failure": {
                    "text": "Issue impossible",
                    "imageLink": "",
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 0,
                    "sante": 0
                }
            },
            "3": {
                "enonce": "il achète un steak végétal",
                "motivationNeeded": 0,
                "success": {
                    "text": "A rediger",
                    "imageLink": "",
                    "motivationPenality": 0,
                    "frustration": 10,
                    "equilibreAlim": -5,
                    "sante": 0
                },
                "failure": {
                    "text": "Issue impossible",
                    "imageLink": "",
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 0,
                    "sante": 0
                }
            },
            "4": {
                "enonce": "Il lui fait une omelette ",
                "motivationNeeded": 0,
                "success": {
                    "text": "A rediger",
                    "imageLink": "",
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 0,
                    "sante": 5
                },
                "failure": {
                    "text": "Issue impossible",
                    "imageLink": "",
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 0,
                    "sante": 0
                }
            },
            "5": {
                "enonce": "il fait un wok de légume au tofu  ",
                "motivationNeeded": 0,
                "success": {
                    "text": "A rediger",
                    "imageLink": "",
                    "motivationPenality": 0,
                    "frustration": 5,
                    "equilibreAlim": 0,
                    "sante": 0
                },
                "failure": {
                    "text": "Issue impossible",
                    "imageLink": "",
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 0,
                    "sante": 0
                }
            }
        }
    },
    9: {
        "enonce": "Arthur se rend en réunion chez un client, celui ci lui propose comme souvent un goûter composé d’une viennoiserie et d’un café, que fait il ? ",
        "arguments": {
            "1": {
                "enonce": "il accepte de prendre un viennoiserie, même si c’est la 4eme cette semaine. il ne faut pas vexer son client ",
                "motivationNeeded": 0,
                "success": {
                    "text": "A rediger",
                    "imageLink": "",
                    "motivationPenality": 0,
                    "frustration": -5,
                    "equilibreAlim": -5,
                    "sante": -5
                },
                "failure": {
                    "text": "Issue impossible",
                    "imageLink": "",
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 0,
                    "sante": 0
                }
            },
            "2": {
                "enonce": "il a l’habitude il a un fruit et des oléagineux dans sa malette",
                "motivationNeeded": 0,
                "success": {
                    "text": "A rediger",
                    "imageLink": "",
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 5,
                    "sante": 5
                },
                "failure": {
                    "text": "Issue impossible",
                    "imageLink": "",
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 0,
                    "sante": 0
                }
            },
            "3": {
                "enonce": "Il ne prend qu’ un café (sucré), le goûté c'est pour les enfant. ",
                "motivationNeeded": 0,
                "success": {
                    "text": "A rediger",
                    "imageLink": "",
                    "motivationPenality": 0,
                    "frustration": 5,
                    "equilibreAlim": -5,
                    "sante": -5
                },
                "failure": {
                    "text": "Issue impossible",
                    "imageLink": "",
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 0,
                    "sante": 0
                }
            },
            "4": {
                "enonce": "un verre d’eau suffira, merci ",
                "motivationNeeded": 0,
                "success": {
                    "text": "A rediger",
                    "imageLink": "",
                    "motivationPenality": 0,
                    "frustration": 5,
                    "equilibreAlim": 0,
                    "sante": -5
                },
                "failure": {
                    "text": "Issue impossible",
                    "imageLink": "",
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 0,
                    "sante": 0
                }
            },
            "5": {
                "enonce": "Elle sont vraiment bonne ses viennoiserie, j’en prend un seconde.",
                "motivationNeeded": 0,
                "success": {
                    "text": "A rediger",
                    "imageLink": "",
                    "motivationPenality": 0,
                    "frustration": -5,
                    "equilibreAlim": -10,
                    "sante": -5
                },
                "failure": {
                    "text": "Issue impossible",
                    "imageLink": "",
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 0,
                    "sante": 0
                }
            }
        }
    },
    10: {
        "enonce": "Arthur rentre du boulot et fatigué, il n’a pas le courage de faire le repas.",
        "arguments": {
            "1": {
                "enonce": "Je vais réchauffer un plat cuisiné au micro-onde (sauté de veau et purée) ",
                "motivationNeeded": 0,
                "success": {
                    "text": "A rediger",
                    "imageLink": "",
                    "motivationPenality": 0,
                    "frustration": 5,
                    "equilibreAlim": -5,
                    "sante": -5
                },
                "failure": {
                    "text": "Issue impossible",
                    "imageLink": "",
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 0,
                    "sante": 0
                }
            },
            "2": {
                "enonce": "je fais un simple plat de pâtes à la crème, 12 min montre en main ",
                "motivationNeeded": 0,
                "success": {
                    "text": "A rediger",
                    "imageLink": "",
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": -5,
                    "sante": 0
                },
                "failure": {
                    "text": "Issue impossible",
                    "imageLink": "",
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 0,
                    "sante": 0
                }
            },
            "3": {
                "enonce": "Aller courage je prend sur moi et je vais faire un vrai repas, j’ai des restes du repas d’hier (ratatouille) avec une omelette et un peu de salade ça fera l’affaire.",
                "motivationNeeded": 50,
                "success": {
                    "text": "A rediger",
                    "imageLink": "",
                    "motivationPenality": -10,
                    "frustration": 0,
                    "equilibreAlim": 10,
                    "sante": 5
                },
                "failure": {
                    "text": "Issue impossible",
                    "imageLink": "",
                    "motivationPenality": -10,
                    "frustration": 0,
                    "equilibreAlim": -5,
                    "sante": 0
                }
            },
            "4": {
                "enonce": "Deliveroo, Hum un Bò bún !",
                "motivationNeeded": 0,
                "success": {
                    "text": "A rediger",
                    "imageLink": "",
                    "motivationPenality": 0,
                    "frustration": -5,
                    "equilibreAlim": 5,
                    "sante": 5
                },
                "failure": {
                    "text": "Issue impossible",
                    "imageLink": "",
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 0,
                    "sante": 0
                }
            },
            "5": {
                "enonce": "Mac drive, menu maxi best of big mac avec des nuggets.",
                "motivationNeeded": 0,
                "success": {
                    "text": "A rediger",
                    "imageLink": "",
                    "motivationPenality": 0,
                    "frustration": -10,
                    "equilibreAlim": -10,
                    "sante": -10
                },
                "failure": {
                    "text": "Issue impossible",
                    "imageLink": "",
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 0,
                    "sante": 0
                }
            }
        }
    },
    11: {
        "enonce": "Arthur souhaite améliorer sa condition physique. Il pense qu'il devrait pratiquer une activité physique: ",
        "arguments": {
            "1": {
                "enonce": "A partir de maintenant, Arthur ira au travail à vélo ou à pied (10/30 minutes de trajet)",
                "motivationNeeded": 50,
                "success": {
                    "text": "A rediger",
                    "imageLink": "",
                    "motivationPenality": -20,
                    "frustration": -5,
                    "equilibreAlim": 0,
                    "sante": 10
                },
                "failure": {
                    "text": "Issue impossible",
                    "imageLink": "",
                    "motivationPenality": -20,
                    "frustration": 10,
                    "equilibreAlim": 0,
                    "sante": -10
                }
            },
            "2": {
                "enonce": "Arthur téléphone à une salle de sport pour faire des séances après le boulot (3 h par semaine)",
                "motivationNeeded": 50,
                "success": {
                    "text": "A rediger",
                    "imageLink": "",
                    "motivationPenality": -50,
                    "frustration": 10,
                    "equilibreAlim": 0,
                    "sante": 10
                },
                "failure": {
                    "text": "Issue impossible",
                    "imageLink": "",
                    "motivationPenality": -50,
                    "frustration": 10,
                    "equilibreAlim": 0,
                    "sante": -10
                }
            },
            "3": {
                "enonce": "Arthur décide qu’à partir de maintenant, il fera un footing tous les samedis matin.",
                "motivationNeeded": 50,
                "success": {
                    "text": "A rediger",
                    "imageLink": "",
                    "motivationPenality": -30,
                    "frustration": 5,
                    "equilibreAlim": 0,
                    "sante": 5
                },
                "failure": {
                    "text": "Issue impossible",
                    "imageLink": "",
                    "motivationPenality": -30,
                    "frustration": 10,
                    "equilibreAlim": 0,
                    "sante": -10
                }
            },
            "4": {
                "enonce": "Arthur prend désormais les escalier et favorise la marche quand il le peut. ",
                "motivationNeeded": 50,
                "success": {
                    "text": "A rediger",
                    "imageLink": "",
                    "motivationPenality": -10,
                    "frustration": -5,
                    "equilibreAlim": 0,
                    "sante": 5
                },
                "failure": {
                    "text": "Issue impossible",
                    "imageLink": "",
                    "motivationPenality": -10,
                    "frustration": 10,
                    "equilibreAlim": 0,
                    "sante": -10
                }
            },
            "5": {
                "enonce": "l’activité physique, c’est surfait, très peu pour moi.",
                "motivationNeeded": 0,
                "success": {
                    "text": "A rediger",
                    "imageLink": "",
                    "motivationPenality": 0,
                    "frustration": -5,
                    "equilibreAlim": 0,
                    "sante": -10
                },
                "failure": {
                    "text": "Issue impossible",
                    "imageLink": "",
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 0,
                    "sante": 0
                }
            }
        }
    },
    12: {
        "enonce": "En hivers Arthur se rend au marché, quel panier choisis t’il pour ses repas de la semaine ? ",
        "arguments": {
            "1": {
                "enonce": "carotte, oignon, brocolis, choux rouge, courge, butternut, panais, betterave, poireau  ",
                "motivationNeeded": 0,
                "success": {
                    "text": "A rediger",
                    "imageLink": "",
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 10,
                    "sante": 10
                },
                "failure": {
                    "text": "Issue impossible",
                    "imageLink": "",
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 0,
                    "sante": 0
                }
            },
            "2": {
                "enonce": "tomate, aubergine, courgette, melon, fraise ",
                "motivationNeeded": 0,
                "success": {
                    "text": "A rediger",
                    "imageLink": "",
                    "motivationPenality": 0,
                    "frustration": -5,
                    "equilibreAlim": 0,
                    "sante": 0
                },
                "failure": {
                    "text": "Issue impossible",
                    "imageLink": "",
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 0,
                    "sante": 0
                }
            },
            "3": {
                "enonce": "Haricot vert, petit pois, épinard, courgette, poivron ",
                "motivationNeeded": 0,
                "success": {
                    "text": "A rediger",
                    "imageLink": "",
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 0,
                    "sante": 0
                },
                "failure": {
                    "text": "Issue impossible",
                    "imageLink": "",
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 0,
                    "sante": 0
                }
            },
            "4": {
                "enonce": "pomme de terre, oignon, échalote et champignon",
                "motivationNeeded": 0,
                "success": {
                    "text": "A rediger",
                    "imageLink": "",
                    "motivationPenality": 0,
                    "frustration": -5,
                    "equilibreAlim": 0,
                    "sante": -5
                },
                "failure": {
                    "text": "Issue impossible",
                    "imageLink": "",
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 0,
                    "sante": 0
                }
            },
            "5": {
                "enonce": "pfff la flemme, je prendrais des légume en conserve quand j'irai au supermarché. ",
                "motivationNeeded": 0,
                "success": {
                    "text": "A rediger",
                    "imageLink": "",
                    "motivationPenality": 0,
                    "frustration": -5,
                    "equilibreAlim": -10,
                    "sante": -10
                },
                "failure": {
                    "text": "Issue impossible",
                    "imageLink": "",
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 0,
                    "sante": 0
                }
            }
        }
    }
}
