# CodinGame for Work: Java, Javascript, SQL, Spark, Spring
- Campaign: Java, JavaScript, HTML, CSS, SQL, Apache Spark, Spri... - Senior
- Language: French

## Question 1: Opération sur des entiers
```
int i1 = 5; 
int i2 = 2;
int i3 = i1 / i2;
```
Quelle est la valeur de i3 ?

**Réponse**
- [ ] 3
- [ ] 2.5
- [x] 2
- [ ] NaN

<br>

## Question 2: Dependency Inversion Principle (DIP)
Les abstractions ne doivent pas dépendre de détails. Les détails doivent dépendre d'abstractions

**Réponse**
- [x] Vrai
- [ ] Faux

<br>

## Question 3: Héritage
Parmi ces deux propositions, laquelle préférez-vous?

- Proposition #1 :

```
interface CapableDeVoler {
    void vole();
}
abstract class Avion implements CapableDeVoler {}
abstract class Oiseau implements CapableDeVoler {}
```
- Proposition #2 :

```
abstract class Avion {
    abstract void vole();
}
abstract class Oiseau extends Avion {}
```

**Réponse**

- [x] La proposition #1
- [ ] La proposition #2

<br>

## Question 4: Utilisation des exceptions
Vous réalisez une bibliothèque en Java. Parmi ces options, laquelle privilégiez-vous pour traiter un comportement inattendu?

**Réponse**

- [x] throw new ComportementInattenduException()
- [ ] System.exit(-1)
- [ ] System.err.println("Erreur: Comportement inattendu")
- [ ] return false

<br>

## Question 5: Opérateur sur les bits : >>
Quel est le résultat de l'opération 2 >> 1 ?

**Réponse**
- [ ] 0
- [x] 1
- [ ] 2
- [ ] 3
- [ ] 4

<br>

## Question 6: Expression booléenne simple
```A.a(int i, int j)``` devrait retourner ```true``` si un des arguments est égal à 1 ou si leur somme est égale à 1.

Par exemple : \
```A.a(1, 5)``` retourne ```true``` \
```A.a(2, 3)``` retourne ```false``` \
```A.a(-3, 4)``` retourne ```true```


**Réponse**
```
class A {
    static boolean a(int i, int j) {
        return i + j == 1 || i == 1 || j == 1
    }
}
```


## Question 7: Types primitifs
Parmi ces types primitifs, le(s)quel(s) existe(nt) en Java?

**Réponse**
- [x] int
- [ ] bool
- [x] float
- [ ] uint

<br>

## Question 8: Equals et hashcode
Si deux objets sont égaux alors ils devraient avoir le même hashcode.

**Réponse**
- [x] Vrai
- [ ] Faux

<br>

## Question 9:  Les interfaces
En Java 8, les interfaces peuvent contenir des méthodes implémentées.

**Réponse**
- [x] Vrai
- [ ] Faux

<br>

## Question 10: Opérateur unitaire (i++)
```
int i = 0;
System.out.println(i++)
```
Saisissez le résultat qu'affiche ce bout de code.

**Réponse**
- 0

<br>

## Question 11: Synchronisation d'un compteur
Transformez la méthode Counter.increment() pour qu'elle supporte l'accès concurrentiel de plusieurs threads.

**Réponse**
```
class Counter {
    private static int count = 0;

    public synchronized static int increment() {
        count = count + 1;
        return count;
    }
}
```

<br>

## Question 12: C'est au fruit que l'on connaît l'arbre
Un arbre est composé de noeuds qui respectent les règles suivantes : Un noeud tient une valeur correspondant à un entier. \
Hormis le noeud à la racine de l’arbre, un noeud a toujours un seul autre noeud qui le référence. \
Un noeud n’a pas plus de deux enfants, appelés noeud à gauche et noeud à droite.  \
Si un noeud n’a pas d’enfant à droite ou à gauche, alors la référence correspondante est null.  \
La valeur tenue par tout enfant du sous arbre à gauche est inférieure à la valeur de son parent et la valeur tenue par tout enfant du sous arbre à droite est supérieure à la valeur de son parent. 


**Réponse**
```
class Node {

    // keep these fields
    Node left, right;
    int value;

    public Node find(int val){
        Node current = this;
        while (current != null) {
            if (current.value == val) {
                return current;
            } else {
                current = current.value > val ? current.left : current.right;
            }
        }
        return null;
    }	
}	
```

<br>

## Question 13: String buffers
Saisissez le nom d'une classe appartenant au package java.lang qui permet de concaténer efficacement les chaînes de caractères.

**Réponse(s) correcte(s)**
- StringBuilder
- StringBuffer
- java.lang.StringBuilder 
- java.lang.StringBuffer

<br>

## Question 14: [JS] Variables
En JavaScript, comment déclare-t-on une variable valant le nombre 2 ?

**Réponse**
- [ ] int monNombre = 2;
- [ ] Number monNombre = 2;
- [x] var monNombre = 2;

<br>

## Question 15: [HTML] Formulaires
En HTML, quel type de champ permet d'ajouter des données cachées à un formulaire (qui ne seront pas visibles par l'utilisateur) ?

**Réponse**
- [ ] ```<input type="secret"> ``` 
- [ ] ```<input type="hidden">```
- [ ] ```<input type="password"> ```  
- [ ] ```<hidden>```
- [ ] ```<secret>```
- [x]  Aucun. Toutes les données d'un formulaire doivent être visibles.

<br>

## Question 16: HTML CSS
En HTML, quelle option utiliseriez-vous pour inclure une feuille de style CSS externe ?

**Réponse**
- [ ] ```<stylesheet>mystyle.css</stylesheet>``` 
- [ ] ```<style src="mystyle.css">```
- [ ] ```<script type="text/css" src="mystyle.css">```
- [x] ```<link rel="stylesheet" type="text/css" href="mystyle.css">```

<br>

## Question 17: [JS] Simple expression booléenne
```a(i, j)``` devrait retourner true si au moins un des arguments est égal à 1 ou si leur somme est égale à 1. \ Les deux arguments donnés seront toujours des nombres.

Par exemple : \
```a(1, 5)``` retourne ```true``` \
```a(2, 3)``` retourne ```false``` \
```a(-3, 4)``` retourne ```true```

**Réponse**
```
function a(i, j) {
    return i + j == 1 || i == 1 || j == 1
}
```

<br>

## Question 18: [CSS] z-index
En CSS, la propriété z-index permet de:

**Réponse**
- [ ] Spécifier la position d’un élément dans une liste   
- [ ] Affiner la position d’un élément dans la page
- [x] Spécifier la position d’empilement d’un bloc par rapport à un autre
- [ ] Spécifier l’ordre d’accès des champs d’un formulaire (touche tabulation)

<br>

## Question 19: [JS] Correction
La fonction ```factorial``` suivante, écrite par votre collègue Frédéric est cassée. Réparez la afin qu'elle renvoie la factorielle du nombre donné en paramètre.

Rappel : factorial(n) = 1 * 2 * 3 * ... * n

**Réponse**
```
function factorial(n) {
    if(n <= 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
```

<br>

## Question 20: [JS] Moyenne
Implémentez la fonction ```average(table)```.

La fonction doit renvoyer la valeur moyenne du tableau ```table``` donné en paramètre. \
```table``` est toujours un tableau défini, et ne contient que des nombres.
average doit retourner 0 si ```table``` est vide.

**Réponse**
```
function average(table) {
    if (table.length == 0) {
        return 0;
    } else {
        var sum = 0;
        for (var i = 0; i < table.length; i++) {
            sum += table[i];
        }
        return sum / table.length;
    }
}
```

<br>

## Question 21: [HTML] Liens
En HTML, que fait le lien suivant ?
```
<a href="fleurs.html#coquelicot">un lien...</a>
```

**Réponse**
- [x] Il ouvre la page fleurs.html et nous amène à l'ancre "coquelicot".
- [ ] Il ouvre la page coquelicot.html et nous amène à l'ancre "fleurs".   
- [ ] Il ouvre la page fleurs.html et nous amène à l'ancre "#coquelicot".   
- [ ] Ce lien n'est pas valide.

<br>

## Question 22: [JS] Threads
JavaScript est multi-threadé.

**Réponse**
- [ ] Vrai
- [x] Faux

<br>

## Question 23: [JS] Range Sum
Écrivez le corps de la fonction ```calc(array, n1, n2)```. \
```array``` est un tableau d'entiers. 

Les parametres ```n1``` et ```n2``` sont des entiers definis par la relation ```0 <= n1 <= n2 < array.length```.

La fonction ```calc``` doit retourner la somme des entiers de ```array``` dont l'index appartient à l'intervalle ```[n1; n2]```.


**Réponse**
```
function calc(array, n1, n2) {
    var sum = 0;
    for(var i = n1; i <= n2; i++) {
        sum += array[i];
    }
    return sum;
}
```

<br>

## Question 24: [JS] Comparaisons de types
Parmi les expressions suivantes, lesquelles seront évaluées à true ? 

Toutes les réponses correctes sont attendues.

**Réponse**
- [x] ```"a"==='a'```
- [ ] ```2==="2"```
- [x] ```4.0===4```
- [ ] ```"1"+2==3```
- [ ] ```3=3```
- [x] ```"1"==1```

<br>

## Question 25: [JS] Prototypes
Soit un objet obj définit par le code suivant:
```
MyClass = function() { 
    this.a = 'hello'; 
    this.b = 'world';
};

MyClass.prototype.a = 'john'; 
MyClass.prototype.c = 12;

obj = new MyClass();
```
Parmi les proposition suivantes, cochez celles qui sont vraies (Plusieurs réponses attendues):

**Réponse**
- [x] ```obj.a``` s'évalue à ```'hello'```   
- [ ] ```obj.a``` s'évalue à ```'john'```
- [ ] ```obj.b``` s'évalue à ```undefined```
- [x] ```obj.b``` s'évalue à ```'world'```   
- [ ] ```obj.c``` s'évalue à ```undefined```   
- [x] ```obj.c``` s'évalue à ```12```
- [ ] ```obj.d``` s'évalue à ```null```

<br>

## Question 26: [JS] Approximation de π
Dans cet exercice nous allons calculer une estimation du nombre π (Pi). \
La technique est la suivante : \
On prend un point P au hasard de coordonnées (x, y) tel que `0 ≤ x ≤ 1` et `0 ≤ y ≤ 1`. Si `x² + y² ≤ 1`, alors le point est à l'intérieur du quart de disque de rayon 1, sinon le point est à l'extérieur.

Fig 1. Exemple avec 33 points aléatoires.
On sait que la probabilité que le point se situe à l'intérieur du quart de disque est égale à `π/4`. 


Écrivez la méthode `approx(pts)` qui va utiliser le tableau de points pts (tirés au hasard) pour retourner une estimation du nombre π.


Données : \
Chaque item de `pts` contient un point. Un point est représenté par un tableau contenant exactement deux nombres, respectivement `x` et `y` tels que `0 ≤ x ≤ 1` et `0 ≤ y ≤ 1`. `pts` n'est jamais null et contient toujours au moins un item.


**Réponse**
```
function approx(pts) {
    let countInside = 0;

    for (let i = 0; i < pts.length; i++) {
        const [x, y] = pts[i];
        if (x ** 2 + y ** 2 <= 1) {
            countInside++;
        }
    }

    const estimatedPi = 4 * (countInside / pts.length);
    return estimatedPi;
}
```

<br>

## Question 27: SQL - INSERT
Quelle commande SQL permet d'ajouter une ligne dans une table de base de données ?

**Réponse**
- [x] INSERT
- [ ] ADD
- [ ] UPDATE   
- [ ] MORE

<br>

## Question 28: SQL - DELETE
Quelle commande SQL permet d'effacer des lignes dans une table ?

**Réponse**
- [ ] REMOVE FROM table WHERE ... 
- [ ] UPDATE table REMOVE WHERE ... 
- [x] DELETE FROM table WHERE ...   
- [ ] DROP FROM table WHERE ...

<br>

## Question 29: SQL - LIKE
Modifier la requête pour selectionner uniquement les noms et prénoms des clients (customer) dont le nom commence par la lettre 'W', triés par ordre alphabétique de noms puis de prénoms.
N'afficher que les colonnes `LASTNAME` et `FIRSTNAME` dans cet ordre. Exemple de sortie :

| LASTNAME | FIRSTNAME |
|----------|-----------|
| WHITTARD | Bill	|
| WILLIAMS | John	|

**Réponse**
```
SELECT LASTNAME, FIRSTNAME
FROM customer
WHERE LASTNAME LIKE 'W%'
ORDER BY LASTNAME, FIRSTNAME;
```

<br>

## Question 30: SQL - NOT NULL
Modifier la requête pour selectionner uniquement les clients ayant un code postal (zipcode) égal à 75000 ou 34000 et ayant une date de naissance (birth_date) définie.
N'afficher que colonnes `LASTNAME` et `FIRSTNAME` dans cet ordre. Exemple de sortie :

| LASTNAME | FIRSTNAME	|
|----------|-----------|
| RIVER	| John	|
| JACKSON	| Elizabeth	|
| PUTTER	| James	|


**Réponse**
```
SELECT LASTNAME, FIRSTNAME
FROM customer
WHERE ZIPCODE IN ('75000', '34000')
AND BIRTH_DATE IS NOT NULL
```

<br>

## Question 31: SQL - Clé primaire
Indiquer quelles propositions sont vraies pour une colonne déclarée en tant que clé primaire. (plusieurs réponses possibles)

**Réponse**
- [x] Elle ne peut pas contenir de doublons
- [ ] Elle peut contenir la valeur NULL
- [ ] Elle ne peut pas être en plus une clé étrangère
- [x] Elle peut être déclarée avec un type "caractère" tel que "VARCHAR"

<br>

## Question 32: SQL - OUTER JOIN
Modifier la requête pour lister tous les produits (product) et leur catégorie associée (product_category) s'ils en ont une.

Dans le cas contraire, ne pas afficher de valeur (null) pour la catégorie.
N'afficher que les colonnes `PRODUCT_NAME` et `CATEGORY_NAME` dans cet ordre.  

Exemple de sortie:
| PRODUCT_NAME	| CATEGORY_NAME |
|----------|-----------|
| ProForm 6.0 RT	| Fitness	|
| Wilwood 260-11179	| Automotive	|
| HC-SR04	| null	|


**Réponse**
```
SELECT p.name as PRODUCT_NAME, c.name as CATEGORY_NAME
FROM product p
LEFT JOIN PRODUCT_CATEGORY c ON p.product_category_id = c.product_category_id
WHERE c.name IS NOT NULL;
```

<br>

## Question 33: Dataframes - InferSchema
Quelle est l'utilité de l'option  inferschema dans les DataFrames ?

**Réponse**
- [x] Obtenir le schéma directement depuis les données
- [ ] Structurer les données
- [ ] C'est une option nécessaire pour charger des fichiers CSV

<br>

## Question 34: Bases de Spark - RDD
Que veut dire l'acronyme "RDD" ?

**Réponse**
- [ ] Readable Dataset Distribution   
- [x] Resilient Distributed Dataset   
- [ ] Runnable Distributed Dataset   
- [ ] Resilient Distributed Datatable

<br>

## Question 35: RDD Lineage - Affichage
Quel est le nom de la méthode qui permet d'afficher le plan d'exécution d'un RDD ?

**Réponse**
- toDebugString

<br>

## Question 36: Méthode de persistence mémoire
Quelle est la méthode utilisée pour persister les données en mémoire dans Spark ?

**Réponse**
- [x] rdd.persist(MEMORY)   
- [ ] rdd.cache(MEMORY)   
- [ ] rdd.store(MEMORY)   
- [ ] rdd.keep(MEMORY)

<br>

## Question 37: RDD vs DataFrame
Quelle réponse est correcte concernant les RDD et les DataFrames ?

**Réponse**
- [ ] Les RDDs peuvent être distribués contrairement aux DataFrames   
- [ ] Les RDDs et les DataFrames proviennent du SparkContext
- [x] Les DataFrames peuvent être structurés, pas les RDDs
- [ ] Les RDDs sont moins rapides que les DataFrames, tous contextes confondus

<br>

## Question 38: Spark Dev
Quelle méthode doit être utilisée à la place des ??? ci-dessous ?
```
val rdd = sc.textFIle(="/path/to/file")
rdd.???(line => line.contains("filtered_word"))
rdd.foreach(println)
```

**Réponse**
- [ ] map   
- [ ] flatMap   
- [x] filter
- [ ] mapPartitions

<br>

## Question 39: Partitions post-exécution
Quelle méthode utilise-t-on pour réduire le nombre de partitions après l'exécution d'un job Spark ? 

Un seul mot attendu.

**Réponse**
- coalesce

<br>

## Question 40: Spécificités des DataFrames
Depuis Spark 2, les DataFrames sont devenus :

**Réponse**
- [x] Un alias de DataSet[Row]   
- [ ] Un alias de DataSet[String]   
- [ ] Un alias de DataSet[RDD]   
- [ ] Une classe Scala

<br>

## Question 41: [Rest] RestController
Comment déclare-t-on un endpoint REST dans Spring ?

**Réponse**

- [ ] `@RestEndpoint` 
- [x] `@RestController`   
- [ ] `@Rest`
- [ ] `@REST`

<br>

## Question 42: [Validation] Validator
Quelle est le nom de l'interface Spring implémentée ci-dessous, utilisée pour valider un business model depuis plusieurs modules Spring
```
public class UserValidator implements XXXXX {
    public boolean supports(Class clazz) {
        return User.class.equals(class);
    }

    public void validate(Object obj, Errors e) {
        ValidationUtils.rejectIfEmpty(e, "name", "name.empty");
        User p = (User) obj;
        if (usert.getAge() < 0) {
            e.rejectValue("age", "negative");
        }
    }
}
```

**Réponses correctes**
- Validator 
- org.springframework.validation.Validator

<br>

## Question 43: [Web] STOMP
Quel est le nom du protocole, basé sur du texte, utilisé par Spring pour envoyer des messages par Websockets ?

**Réponses correctes**
- STOMP
- Streaming Text Oriented Messaging Protocol

<br>

## Question 44: [Core] Application events
Quel événement du cycle de vie de l'application n'existe pas dans Spring Framework ?

**Réponse**
- [ ] ContextRefreshedEvent   
- [ ] ContextStartedEvent   
- [ ] ContextClosedEvent
- [x] ContextLostEvent

<br>

## Question 45: [Data] Requêtes personnalisées
Quelle est l'annotation Spring utilisée pour ajouter une méthode associée à une requête SQL personnalisée vers un repository JPA (XXXXXX dans le code ci-dessous) ?

```
@XXXXXX("select c from Car c where c.manufacturer = 'Ford'")
List<Car> findAllFordCards();
```
**Réponse**
- [x] query
- [ ] sql
- [ ] autosql   
- [ ] select

<br>

## Question 46: [Core] Bean conditionnel
On considère les deux classes suivantes.
L'une qui définit une vérification de condition custom :
```
public class ModelExistsCondition implements Condition {
    public boolean modelVariableExists(
        ConditionContext context, AnnotatedTypeMetadata metadata) {
            Environment env = context.getEnvironment();
            retun env.containsProperty("MODEL");
        }
    )
}
```
et une autre qui définit un bean :

```
@Bean
XXX
public class ModelProcessor {
    // implementation
} 
```
Vous souhaitez que le bean ModelProcessor soit créé seulement si la variable d'environnement MODEL
existe.

En utilisant ModelExistsCondition, par quelle annotation remplacer XXX ci-dessus ? Écrivez l'annotation complète.

**Réponses correctes**
- @Conditional(ModelExistsCondition.class) 
- Conditional(ModelExistsCondition.class) 
- @Conditional(ModelExistsCondition) 
- Conditional(ModelExistsCondition)