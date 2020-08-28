var situations =
{
    1:
    {
        "enonce": "Il est 13 heure, Arthur sort de table, après son fromage il lui reste une petite place pour un dessert. Penché au dessus de son frigo il hésite entre plusieurs options : ",
        "arguments": {
            "1": {
                "enonce": "Il prend un fruit  et un yaourt ",
                "motivationneeded": 0,
                "success": {
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": -5,
                    "sante": -5
                },
                "failure": {
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 0,
                    "sante": 0
                }
            },
            "2": {
                "enonce": "Il prend un fruit ",
                "motivationneeded": 0,
                "success": {
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 5,
                    "sante": 5
                },
                "failure": {
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 0,
                    "sante": 0
                }
            },
            "3": {
                "enonce": "Il prend un yaourt ",
                "motivationneeded": 0,
                "success": {
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": -5,
                    "sante": -5
                },
                "failure": {
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 0,
                    "sante": 0
                }
            },
            "4": {
                "enonce": "Il ne prend rien ",
                "motivationneeded": 0,
                "success": {
                    "motivationPenality": 0,
                    "frustration": 5,
                    "equilibreAlim": -5,
                    "sante": -5
                },
                "failure": {
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 0,
                    "sante": 0
                }
            },
            "5": {
                "enonce": "Il finit la part de tarte au citron meringuée qui reste dans le frigo ",
                "motivationneeded": 0,
                "success": {
                    "motivationPenality": 0,
                    "frustration": -10,
                    "equilibreAlim": -5,
                    "sante": -5
                },
                "failure": {
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
                "motivationneeded": 0,
                "success": {
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 10,
                    "sante": 5
                },
                "failure": {
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 0,
                    "sante": 0
                }
            },
            "2": {
                "enonce": "Plat unique : salade césar ",
                "motivationneeded": 0,
                "success": {
                    "motivationPenality": 0,
                    "frustration": 5,
                    "equilibreAlim": -5,
                    "sante": 0
                },
                "failure": {
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 0,
                    "sante": 0
                }
            },
            "3": {
                "enonce": "Entrecôte, frite & sauce roquefort",
                "motivationneeded": 0,
                "success": {
                    "motivationPenality": 0,
                    "frustration": -5,
                    "equilibreAlim": -10,
                    "sante": 0
                },
                "failure": {
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 0,
                    "sante": 0
                }
            },
            "4": {
                "enonce": "FORMULE DU JOUR : entré plat / plat dessert (salade de pousse d’épinard, filet de dorade, riz & julienne de légumes de saison, salade de fruit) ",
                "motivationneeded": 0,
                "success": {
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 0,
                    "sante": 0
                },
                "failure": {
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 0,
                    "sante": 0
                }
            },
            "5": {
                "enonce": "Formule du jour (terrine de campagne, entrecôte frite sauce roquefort , pana cotta)",
                "motivationneeded": 0,
                "success": {
                    "motivationPenality": 0,
                    "frustration": -10,
                    "equilibreAlim": -10,
                    "sante": -10
                },
                "failure": {
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
                "motivationneeded": 0,
                "success": {
                    "motivationPenality": 0,
                    "frustration": 5,
                    "equilibreAlim": -5,
                    "sante": 0
                },
                "failure": {
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 0,
                    "sante": 0
                }
            },
            "2": {
                "enonce": "Tant pis pour les inconfort, un pack de petit suisse comme à l’époque.",
                "motivationneeded": 0,
                "success": {
                    "motivationPenality": 0,
                    "frustration": -10,
                    "equilibreAlim": 0,
                    "sante": -10
                },
                "failure": {
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 0,
                    "sante": 0
                }
            },
            "3": {
                "enonce": "Il a lu dans un article que le lait de brebis était plus simple à digérer, il va donc tenter d’adapter sa recette avec un yaourt au lait de brebis ",
                "motivationneeded": 0,
                "success": {
                    "motivationPenality": -20,
                    "frustration": 0,
                    "equilibreAlim": 5,
                    "sante": 5
                },
                "failure": {
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 0,
                    "sante": 0
                }
            },
            "4": {
                "enonce": "Ce même article présenter les bénéfices sur la digestibilité  d’une consommation de produits issus du lait de montagne. ",
                "motivationneeded": 0,
                "success": {
                    "motivationPenality": -10,
                    "frustration": -5,
                    "equilibreAlim": 5,
                    "sante": 5
                },
                "failure": {
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 0,
                    "sante": 0
                }
            },
            "5": {
                "enonce": "Dommage pour la nostalgie il y a d’autre produit laitiers, je mangerai du fromage.",
                "motivationneeded": 0,
                "success": {
                    "motivationPenality": 0,
                    "frustration": 10,
                    "equilibreAlim": 5,
                    "sante": 5
                },
                "failure": {
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
                "motivationneeded": 0,
                "success": {
                    "motivationPenality": 0,
                    "frustration": 5,
                    "equilibreAlim": 10,
                    "sante": -5
                },
                "failure": {
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 0,
                    "sante": 0
                }
            },
            "2": {
                "enonce": "Arthur se laisse convaincre par son amis mais souhaite poursuivre et étendre ses cultures. Il ne va donc acheter que ce qu’il ne fait pas lui même et continue de se dépenser dans son jardin.",
                "motivationneeded": 50,
                "success": {
                    "motivationPenality": -20,
                    "frustration": -10,
                    "equilibreAlim": 10,
                    "sante": 10
                },
                "failure": {
                    "motivationPenality": -20,
                    "frustration": 5,
                    "equilibreAlim": 10,
                    "sante": 10
                }
            },
            "3": {
                "enonce": "Arthur continue à faire son potager modérément comme actuellement et se servir en bio au supermarché et chez les producteurs locaux pour compléter.",
                "motivationneeded": 0,
                "success": {
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 5,
                    "sante": 5
                },
                "failure": {
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 0,
                    "sante": 0
                }
            },
            "4": {
                "enonce": "le potager c’est trop d’investissement personnel, le bio du supermarché suffit.",
                "motivationneeded": 0,
                "success": {
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 0,
                    "sante": -5
                },
                "failure": {
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 0,
                    "sante": 0
                }
            },
            "5": {
                "enonce": "Pourquoi se casser la tête un légume est un légume...",
                "motivationneeded": 0,
                "success": {
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": -10,
                    "sante": -5
                },
                "failure": {
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
                "motivationneeded": 0,
                "success": {
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 5,
                    "sante": -5
                },
                "failure": {
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 0,
                    "sante": 0
                }
            },
            "2": {
                "enonce": "Maquereau, sardine c’est riche en oméga 3 mais meilleur pour la santé que le saumon !",
                "motivationneeded": 0,
                "success": {
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 10,
                    "sante": 5
                },
                "failure": {
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 0,
                    "sante": 0
                }
            },
            "3": {
                "enonce": "un bon aïoli ca fait plaisir ",
                "motivationneeded": 0,
                "success": {
                    "motivationPenality": 0,
                    "frustration": -10,
                    "equilibreAlim": 5,
                    "sante": 5
                },
                "failure": {
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 0,
                    "sante": 0
                }
            },
            "4": {
                "enonce": "une sol meunière avec double dose de beurre ",
                "motivationneeded": 0,
                "success": {
                    "motivationPenality": 0,
                    "frustration": -5,
                    "equilibreAlim": -5,
                    "sante": -5
                },
                "failure": {
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 0,
                    "sante": 0
                }
            },
            "5": {
                "enonce": "une papillotte  aux petit légume du soleil.",
                "motivationneeded": 0,
                "success": {
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 5,
                    "sante": 5
                },
                "failure": {
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
                "motivationneeded": 0,
                "success": {
                    "motivationPenality": 0,
                    "frustration": -5,
                    "equilibreAlim": 5,
                    "sante": -5
                },
                "failure": {
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 0,
                    "sante": 0
                }
            },
            "2": {
                "enonce": "huile d’arachide ",
                "motivationneeded": 0,
                "success": {
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 0,
                    "sante": -10
                },
                "failure": {
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 0,
                    "sante": 0
                }
            },
            "3": {
                "enonce": "huile d’olive extra ",
                "motivationneeded": 0,
                "success": {
                    "motivationPenality": 0,
                    "frustration": -5,
                    "equilibreAlim": -5,
                    "sante": -5
                },
                "failure": {
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 0,
                    "sante": 0
                }
            },
            "4": {
                "enonce": "huile de tournesol raffinée bio ",
                "motivationneeded": 0,
                "success": {
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 5,
                    "sante": 10
                },
                "failure": {
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 0,
                    "sante": 0
                }
            },
            "5": {
                "enonce": "huile de tournesol bio non raffinée ",
                "motivationneeded": 0,
                "success": {
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": -10,
                    "sante": 5
                },
                "failure": {
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
                "motivationneeded": 0,
                "success": {
                    "motivationPenality": 0,
                    "frustration": 5,
                    "equilibreAlim": 0,
                    "sante": 0
                },
                "failure": {
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 0,
                    "sante": 0
                }
            },
            "2": {
                "enonce": "Il prend le jambon bio pour être sûr de la qualité du produit ",
                "motivationneeded": 0,
                "success": {
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 0,
                    "sante": 10
                },
                "failure": {
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 0,
                    "sante": 0
                }
            },
            "3": {
                "enonce": "Il prend le jambon plus cher pour être sûr de la qualité du produit ",
                "motivationneeded": 0,
                "success": {
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 0,
                    "sante": -5
                },
                "failure": {
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 0,
                    "sante": 0
                }
            },
            "4": {
                "enonce": "Il prend le premier prix, de toute façon cela ne change rien.",
                "motivationneeded": 0,
                "success": {
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 0,
                    "sante": -5
                },
                "failure": {
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 0,
                    "sante": 0
                }
            },
            "5": {
                "enonce": "huile de tournesol bio non raffinée ",
                "motivationneeded": 50,
                "success": {
                    "motivationPenality": -10,
                    "frustration": -5,
                    "equilibreAlim": 5,
                    "sante": 5
                },
                "failure": {
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
                "motivationneeded": 0,
                "success": {
                    "motivationPenality": 0,
                    "frustration": -5,
                    "equilibreAlim": 0,
                    "sante": 0
                },
                "failure": {
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 0,
                    "sante": 0
                }
            },
            "2": {
                "enonce": "Il lui fait chilli sin carne ",
                "motivationneeded": 0,
                "success": {
                    "motivationPenality": 0,
                    "frustration": 5,
                    "equilibreAlim": 5,
                    "sante": 5
                },
                "failure": {
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 0,
                    "sante": 0
                }
            },
            "3": {
                "enonce": "il achète un steak végétal",
                "motivationneeded": 0,
                "success": {
                    "motivationPenality": 0,
                    "frustration": 10,
                    "equilibreAlim": -5,
                    "sante": 0
                },
                "failure": {
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 0,
                    "sante": 0
                }
            },
            "4": {
                "enonce": "Il lui fait une omelette ",
                "motivationneeded": 0,
                "success": {
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 0,
                    "sante": 5
                },
                "failure": {
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 0,
                    "sante": 0
                }
            },
            "5": {
                "enonce": "il fait un wok de légume au tofu  ",
                "motivationneeded": 0,
                "success": {
                    "motivationPenality": 0,
                    "frustration": 5,
                    "equilibreAlim": 0,
                    "sante": 0
                },
                "failure": {
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
                "motivationneeded": 0,
                "success": {
                    "motivationPenality": 0,
                    "frustration": -5,
                    "equilibreAlim": -5,
                    "sante": -5
                },
                "failure": {
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 0,
                    "sante": 0
                }
            },
            "2": {
                "enonce": "il a l’habitude il a un fruit et des oléagineux dans sa malette",
                "motivationneeded": 0,
                "success": {
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 5,
                    "sante": 5
                },
                "failure": {
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 0,
                    "sante": 0
                }
            },
            "3": {
                "enonce": "Il ne prend qu’ un café (sucré), le goûté c'est pour les enfant. ",
                "motivationneeded": 0,
                "success": {
                    "motivationPenality": 0,
                    "frustration": 5,
                    "equilibreAlim": -5,
                    "sante": -5
                },
                "failure": {
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 0,
                    "sante": 0
                }
            },
            "4": {
                "enonce": "un verre d’eau suffira, merci ",
                "motivationneeded": 0,
                "success": {
                    "motivationPenality": 0,
                    "frustration": 5,
                    "equilibreAlim": 0,
                    "sante": -5
                },
                "failure": {
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 0,
                    "sante": 0
                }
            },
            "5": {
                "enonce": "Elle sont vraiment bonne ses viennoiserie, j’en prend un seconde.",
                "motivationneeded": 0,
                "success": {
                    "motivationPenality": 0,
                    "frustration": -5,
                    "equilibreAlim": -10,
                    "sante": -5
                },
                "failure": {
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
                "motivationneeded": 0,
                "success": {
                    "motivationPenality": 0,
                    "frustration": 5,
                    "equilibreAlim": -5,
                    "sante": -5
                },
                "failure": {
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 0,
                    "sante": 0
                }
            },
            "2": {
                "enonce": "je fais un simple plat de pâtes à la crème, 12 min montre en main ",
                "motivationneeded": 0,
                "success": {
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": -5,
                    "sante": 0
                },
                "failure": {
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 0,
                    "sante": 0
                }
            },
            "3": {
                "enonce": "Aller courage je prend sur moi et je vais faire un vrai repas, j’ai des restes du repas d’hier (ratatouille) avec une omelette et un peu de salade ça fera l’affaire.",
                "motivationneeded": 50,
                "success": {
                    "motivationPenality": -10,
                    "frustration": 0,
                    "equilibreAlim": 10,
                    "sante": 5
                },
                "failure": {
                    "motivationPenality": -10,
                    "frustration": 0,
                    "equilibreAlim": -5,
                    "sante": 0
                }
            },
            "4": {
                "enonce": "Deliveroo, Hum un Bò bún !",
                "motivationneeded": 0,
                "success": {
                    "motivationPenality": 0,
                    "frustration": -5,
                    "equilibreAlim": 5,
                    "sante": 5
                },
                "failure": {
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 0,
                    "sante": 0
                }
            },
            "5": {
                "enonce": "Mac drive, menu maxi best of big mac avec des nuggets.",
                "motivationneeded": 0,
                "success": {
                    "motivationPenality": 0,
                    "frustration": -10,
                    "equilibreAlim": -10,
                    "sante": -10
                },
                "failure": {
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
                "motivationneeded": 50,
                "success": {
                    "motivationPenality": -20,
                    "frustration": -5,
                    "equilibreAlim": 0,
                    "sante": 10
                },
                "failure": {
                    "motivationPenality": -20,
                    "frustration": 10,
                    "equilibreAlim": 0,
                    "sante": -10
                }
            },
            "2": {
                "enonce": "Arthur téléphone à une salle de sport pour faire des séances après le boulot (3 h par semaine)",
                "motivationneeded": 50,
                "success": {
                    "motivationPenality": -50,
                    "frustration": 10,
                    "equilibreAlim": 0,
                    "sante": 10
                },
                "failure": {
                    "motivationPenality": -50,
                    "frustration": 10,
                    "equilibreAlim": 0,
                    "sante": -10
                }
            },
            "3": {
                "enonce": "Arthur décide qu’à partir de maintenant, il fera un footing tous les samedis matin.",
                "motivationneeded": 50,
                "success": {
                    "motivationPenality": -30,
                    "frustration": 5,
                    "equilibreAlim": 0,
                    "sante": 5
                },
                "failure": {
                    "motivationPenality": -30,
                    "frustration": 10,
                    "equilibreAlim": 0,
                    "sante": -10
                }
            },
            "4": {
                "enonce": "Arthur prend désormais les escalier et favorise la marche quand il le peut. ",
                "motivationneeded": 50,
                "success": {
                    "motivationPenality": -10,
                    "frustration": -5,
                    "equilibreAlim": 0,
                    "sante": 5
                },
                "failure": {
                    "motivationPenality": -10,
                    "frustration": 10,
                    "equilibreAlim": 0,
                    "sante": -10
                }
            },
            "5": {
                "enonce": "l’activité physique, c’est surfait, très peu pour moi.",
                "motivationneeded": 0,
                "success": {
                    "motivationPenality": 0,
                    "frustration": -5,
                    "equilibreAlim": 0,
                    "sante": -10
                },
                "failure": {
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
                "motivationneeded": 0,
                "success": {
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 10,
                    "sante": 10
                },
                "failure": {
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 0,
                    "sante": 0
                }
            },
            "2": {
                "enonce": "tomate, aubergine, courgette, melon, fraise ",
                "motivationneeded": 0,
                "success": {
                    "motivationPenality": 0,
                    "frustration": -5,
                    "equilibreAlim": 0,
                    "sante": 0
                },
                "failure": {
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 0,
                    "sante": 0
                }
            },
            "3": {
                "enonce": "Haricot vert, petit pois, épinard, courgette, poivron ",
                "motivationneeded": 0,
                "success": {
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 0,
                    "sante": 0
                },
                "failure": {
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 0,
                    "sante": 0
                }
            },
            "4": {
                "enonce": "pomme de terre, oignon, échalote et champignon",
                "motivationneeded": 0,
                "success": {
                    "motivationPenality": 0,
                    "frustration": -5,
                    "equilibreAlim": 0,
                    "sante": -5
                },
                "failure": {
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 0,
                    "sante": 0
                }
            },
            "5": {
                "enonce": "pfff la flemme, je prendrais des légume en conserve quand j'irai au supermarché. ",
                "motivationneeded": 0,
                "success": {
                    "motivationPenality": 0,
                    "frustration": -5,
                    "equilibreAlim": -10,
                    "sante": -10
                },
                "failure": {
                    "motivationPenality": 0,
                    "frustration": 0,
                    "equilibreAlim": 0,
                    "sante": 0
                }
            }
        }
    }
}
