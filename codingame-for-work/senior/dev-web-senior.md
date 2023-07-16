# CodinGame for Work: JavaScript
- Campaign: Développeur Web (Javascript, HTML, CSS) - Senior 
- Language: French

## Question 1: [CSS] Gras
Comment afficher un texte en gras en CSS ?

**Réponse**
- [ ] font: b
- [ ] style: bold
- [x] font-weight: bold
- [ ] font-style: bold
- [ ] bold: activated

<br>

## Question 2: HTTP 401
Que signifie le code HTTP 401 ?

**Réponse**
- [ ] Bad Request 
- [x] Unauthorized
- [ ] Forbidden
- [ ] Not Found
- [ ] Ce code HTTP n'existe pas

<br>

## Question 3: Comparaison avec ===
En JavaScript, quel est le résultat de l'expression suivante :
```
"2" === 2;
```

**Réponse**
- [ ]  true
- [x]  false
- [ ]  null
- [ ]  undefined

<br>

## Question 4: Quitter une boucle
En JavaScript, laquelle des instructions suivantes permet de sortir d'une boucle ?

**Réponse**
- [ ]  exit
- [ ]  quit();
- [ ]  i=99999999;
- [x]  break


<br>

## Question 5: Acronyme CSS
Que signifie CSS ?

**Réponse**
- [ ] Create Simple Samples
- [ ] Clean and Simple Styles 
- [x] Cascading Style Sheets 
- [ ] Common Sheet Styles

<br>

## Question 6: Acronyme HTML
Que veut dire HTML ?

**Réponse**
- [ ] Hybrid Text Meta Language 
- [x] HyperText Markup Language 
- [ ] High Transfer Meta Linking 
- [ ] Hifi Text Media Links

<br>

## Question 7: Java
JavaScript est...

**Réponse**
- [ ] Dérivé de Java
- [ ] Une version web de Java
- [x] Sans rapport avec Java


<br>

## Question 8: Moyenne
Implémentez la fonction ```average(table)```.

La fonction doit renvoyer la valeur moyenne du tableau table donné en paramètre. table est toujours un tableau défini, et ne contient que des nombres.

```average``` doit retourner 0 si ```table``` est vide.

**Réponse**
```
function average(table) {
    if (table.length == 0) {
        return 0;
    } else {
        s = 0;
        for (i = 0; i < table.length; i++) {
            s = s + table[i];
        }
        return (s / table.length)
    }
}
```


### Question 9: Objets
```
var myJson = { 
    "cities": [
        { 
            "name": "Paris", 
            "pop": 2
        },
        { 
            "name": "London", 
            "pop": 8
        },
        { 
            "name": "New York", 
            "pop": 9
        }
    ]
};
```
Parmi les propositions suivantes, laquelle affiche 2 ?

**Réponse**
- [ ] myJson.cities.Paris.pop
- [x] myJson.cities[0].pop
- [ ] myJson.cities['Paris']['pop'] 
- [ ] myJson->cities->Laos->pop

<br>

## Question 10: Title
Quel attribut HTML peut être utilisé pour afficher un texte dans une bulle d'aide (tooltip) quand la souris passe sur un élément ?

**Réponse**
- [ ] class 
- [x] title 
- [ ] id 
- [ ] label 
- [ ] alt 
- [ ] style 

<br>

## Question 11: Evénements
En JavaScript, quel est l'évènement qui est déclenché lorsqu'un élément ```<button>``` ou ```<textarea>``` perd le focus ?

**Réponse**
- [x] onblur  
- [ ] onclick  
- [ ] ondblclick  
- [ ] onfocus 
- [ ] onfocuslost 

<br>

## Question 12: Syntaxe
Qu'affiche ce code Javascript ?

```
a = new Array();
a['b'] = 'hello world';
alert(a -> b);
```

**Réponse**
- [ ] 0
- [ ] hello world 
- [ ] a->helloworld
- [x] Une erreur de syntaxe

<br>

## Question 13: Erreurs console
En JavaScript, quelle fonction utilisez-vous pour afficher une erreur dans la console ?

**Réponses correctes**
- console.error();
- console.error 
- console.error()

<br>

## Question 14: Sélecteur CSS
En CSS, comment sélectionner tous les éléments de type span dans un élément de type p ?

**Réponse**
- [ ] p > span 
- [ ] p.span 
- [ ] span p
- [x] p span
- [ ] span < p

<br>

## Question 15: Sélecteur JQuery
En JavaScript avec JQuery, quel est le meilleur sélecteur qui permet de sélectionner l'élément suivant :
```
<div class="box" id="content"></div>
```

**Réponse**
- [ ] $('#box');
- [x] $('#content');
- [ ] $('.box');
- [ ] $('.content');
- [ ] $('box');
- [ ] $('content');

<br>

## Question 16: Utilisation des exceptions
Vous réalisez une bibliothèque en JavaScript. Parmi ces options, laquelle privilégiez-vous pour traiter un comportement inattendu?

**Réponse**
- [x] throw "Comportement Inattendu";
- [ ] quit(-1);
- [ ] console.err("Comportement inattendu")
- [ ] return false;

<br>

## Question 17: Rendu de monnaie
Les supermarchés s’équipent de plus en plus de caisses automatiques. La plupart de ces caisses n’ acceptent que le paiement par carte bancaire bien qu’une part non négligeable de consommateurs paye encore en espèces (avec des billets et des pièces).

Une des problématiques rencontrées avec le paiement en espèces est le rendu de monnaie : comment rendre une somme donnée de façon optimale, c'est-à-dire avec le nombre minimal de pièces et billets ? C'est un problème qui se pose à chacun de nous quotidiennement, à fortiori aux caisses automatiques.

Dans cet exercice, on vous demande d’essayer de trouver une solution optimale pour rendre la monnaie dans un cas précis : quand une caisse automatique ne contient que des pièces de 2€ , des billets de 5€ et de 10€.

Pour simplifier le problème, nous considérerons que toutes ces pièces et billets sont disponibles en
quantité illimitée.

Voici quelques exemples de rendu de monnaie :
Monnaie à rendre Solutions possibles Solution optimale 1 Impossible Impossible 6 2 + 2 + 2 2 + 2 + 2 10 2
+ 2 + 2 + 2 + 2 5 + 5 10 10 9007199254740991 ... 10 * 900719925474098 + 5 + 2 * 3

Le rendu de monnaie est exprimé par un objet possédant 3 propriétés : two , five et ten qui, respectivement, stockent le nombre de pièces de 2€, de billets de 5€ et de billets de 10€.
Par exemple, si on reprend l’exemple n°2 du tableau (6€), on devrait obtenir l'objet:
```
{
    two: 3, // 3 pièces de 2€ 
    five: 0, // 0 billets de 5€ 
    ten: 0 // 0 billets de 10€
}
```

Implémentez la méthode change(cash) qui retourne un objet contenant les pièces et billets dont la somme vaut s . S’il est impossible de rendre la monnaie (comme dans l’exemple n°1), retournez null.

Pour obtenir un maximum de points votre solution devra toujours rendre la monnaie quand c’est possible et avec le nombre minimal de pièces et billets.

Données : 0 < c ash < 9007199254740991

**Réponse**
```
function change(cash) {
    var nbten = 0;
    var nbtwo = 0; 
    var nbfive = 0; 

    if (cash < 2) { 
        return null; 
    }

    if (cash % 2 === 0) {
        nbten = Math.trunc(cash / 10); 
        cash = cash % 10;
        nbfive = 0; 
        nbtwo = Math.trunc(cash / 2);
        return { two: nbtwo, five: nbfive, ten: nbten };
    }

    if (cash - 5 >= 0) {
        cash = cash - 5; 
        nbten = Math.trunc(cash / 10); 
        cash = cash % 10;
        nbfive = 1; 
        nbtwo = Math.trunc(cash / 2);
        return { two: nbtwo, five: nbfive, ten: nbten };
    }

    return null;
}

```

<br>

## Question 18: Jumeaux
Le jumeau (twin) d'un mot est un mot écrit avec exactement les mêmes lettres (indépendamment de la casse), mais pas nécessairement dans le même ordre.

Par exemple:
Marion est le jumeau de Romain.
 
La fonction ```isTwin(a, b)``` retourne ```true``` si ```b``` est le jumeau de ```a``` ou ```false``` si ce n'est pas le cas.
 
```a``` et ```b``` sont deux chaînes de caractères non null.

Écrivez le corps de la fonction ```isTwin(a, b)```.

**Réponse**
```
function isTwin(a, b) {
    if (a.length !== b.length) {
        return false;
    }

    const sortedA = a.toUpperCase().split('').sort().join('');
    const sortedB = b.toUpperCase().split('').sort().join('');

    return sortedA === sortedB;
}
```

<br>

## Question 19: Dates
Implémentez la fonction ```nextWeek(date)``` qui renvoie une date 7 jours après la date donnée en paramètre.

```date``` est toujours un objet ```Date``` défini.

**Réponse**
```
function nextWeek(date) {
    var nextWeekDate = new Date(date.getTime());
    nextWeekDate.setDate(nextWeekDate.getDate() + 7);
    return nextWeekDate;
}
```

<br>

## Question 20: Paramètres
En JavaScript, quel est le mot clé utilisé pour accéder au tableau des arguments d'une fonction ?

**Réponse**
- arguments

<br>

## Question 21: Comparaison de strings
En JavaScript, qu'affiche ce code ?
```
var x = "2", y = "10";
alert(x < y);
```

**Réponse**
- [ ] true
- [x] false
- [ ] "2<10"
- [ ] null;
- [ ] Une erreur JavaScript;


<br>

## Question 22: Nombres aléatoires
En JavaScript, laquelle de ces expressions renvoie un nombre aléatoire entre 0 et 10 ?

**Réponse**
- [ ] Math.rand()*10
- [ ] Math.random(0,10); 
- [ ] random()*10;
- [x] Math.random()*10;
- [ ] rand(10);

<br>

## Question 23: Prototypes
Soit un objet ```obj``` définit par le code suivant:
```
MyClass = function() {
    this.a = 'hello';
    this.b = 'world';
};

MyClass.prototype.a = 'john';
MyClass.prototype.c = 12;

obj = new MyClass();
```

Parmis les proposition suivantes, cochez celles qui sont vraies 

(Plusieurs réponses attendues)

**Réponses**
- [x] obj.a s'évalue à 'hello'
- [ ] obj.a s'évalue à 'john' 
- [ ] bj.b s'évalue à undefined
- [x] obj.b s'évalue à 'world' 
- [ ] obj.c s'évalue à undefined 
- [x] obj.c s'évalue à 12
- [ ] obj.d s'évalue à null