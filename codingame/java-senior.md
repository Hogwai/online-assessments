# CodinGame for Work: Java
- Campaign: Java senior
- Language: French

## Question 1: Constante
Quelle déclaration est une constante valide en Java?

**Réponse**
- [ ] define("MAXSIZE", 100);
- [ ] #define MAXSIZE 100
- [x] public static final int MAXSIZE = 100;
- [ ] const int MAXSIZE = 100;

<br>

## Question 2: Méthode finale
Une méthode déclarée finale est une méthode qui...

**Réponse**
- [x]  ne peut pas être redéfinie
- [ ]  retourne une constante
- [ ]  provoque une erreur de compilation

<br>

## Question 3: Héritage multiple
Une classe Java peut avoir plusieurs classes parentes.

**Réponse**
- [ ]  Vrai
- [x]  Faux

<br>

## Question 4: Chaînes de caractères égales
A.isFoo(String param) devrait retourner true si param est égal à la chaine "foo", sinon elle devrait retourner false.

Implémentez A.isFoo(String param).

**Réponse**
```
class A {
    static boolean isFoo(String param) {
        if(param != null && param.equals("foo")){
            return true;
        }
        return false;
    }
}
```

<br>

## Question 5: Méthode run() et thread
Quelle méthode est appelée lorsqu'un thread est exécuté?

**Réponse**
- [ ] do
- [x] run
- [ ] exec
- [ ] execute
- [ ] play

<br>

## Question 6: Dependency Inversion Principle (DIP)
Les abstractions ne doivent pas dépendre de détails. Les détails doivent dépendre d'abstractions.

**Réponse**

- [x] Vrai
- [ ] Faux

<br>

## Question 7: Héritage
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

## Question 8: Classe « friendly »

Déclarer une classe sans niveau d'accès explicite est en général conseillé.

**Réponse**
- [ ] Vrai
- [x] Faux


### Question 9: Utilisation des exceptions
Vous réalisez une bibliothèque en Java. Parmi ces options, laquelle privilégiez-vous pour traiter un comportement inattendu?

**Réponse**

- [x] throw new ComportementInattenduException()
- [ ] System.exit(-1)
- [ ] System.err.println("Erreur: Comportement inattendu")
- [ ] return false

<br>

## Question 10: Opérateur sur les bits : |
En base 2 (binaire), combien font 01 | 11?

**Réponse**

- [ ] 00
- [ ] 01
- [ ] 10
- [x] 11
- [ ] 100

<br>

## Question 11: Les interfaces
En Java 8, les interfaces peuvent contenir des méthodes implémentées.

**Réponse**

- [x] Vrai
- [ ] Faux

<br>

## Question 12: Equals et hashcode
Si deux objets sont égaux alors ils devraient avoir le même hashcode.

**Réponse**
- [x] Vrai
- [ ] Faux

<br>

## Question 13: Exception
Mettez à jour le code en appliquant les règles suivantes : 

Si une exception est levée par s.execute() alors appeler c.rollback() et propager l'exception, sinon appeler c.commit().

Dans tous les cas, c.close() doit être appelée avant de quitter la méthode a(Service s, Connection c).

**Réponse**

```
class A {
    void a(Service s, Connection c) throws Exception {
        s.setConnection(c);
        try {
            s.execute();
            c.commit();
        } catch (Exception e){
            c.rollback();
            throw e;
        } finally {
            c.close();
        }
    }
}

interface Service {
    void execute() throws Exception;
    void setConnection(Connection c);
}
interface Connection {
    void commit();
    void rollback();
    void close();
}
```

<br>

## Question 14: Enum
En considérant le code ci-dessus, quelles affirmations sont correctes?

**Réponse**

- [x] Planet.MERCURY == Planet.MERCURY est vraie
- [ ] Planet.MERCURY == Planet.VENUS est vraie
- [x] Planet.MERCURY.equals(Planet.MERCURY) est vraie

<br>

## Question 15: Types primitifs
Parmi ces types primitifs, le(s)quel(s) existe(nt) en Java?

**Réponse**

- [x] int
- [ ] bool
- [x] float
- [ ] uint

<br>

## Question 16: Opérateur unitaire (i++)
Saisissez le résultat qu'affiche ce bout de code.
```
int i = 0;
System.out.println(i++);
```

**Réponse**

- 0

<br>

## Question 17: Héritage multiple d'interfaces
```
public interface A extends B, C, D {}
```
Cette interface est correcte si B, C et D sont également des interfaces.

**Réponse**

- [x] Vrai
- [ ] Faux

<br>

## Question 18: Optimisation avec table de hachage
Parmi les options suivantes, quelle classe utiliseriez-vous si vous deviez reprendre GestionUtilisateurs?

```
class GestionUtilisateurs {
    ArrayList<Integer> identifiants = new ArrayList<Integer>();
    ArrayList<String> noms = new ArrayList<String>();

    void ajouter(int identifiant, String nom) {
        identifiants.add(identifiant);
        noms.add(nom;)
    }

    String trouverNom(int identifiant) {
        for (int i = identifiants.size() - 1; i >= 0; i--) {
            if(identifiants.get(i) == identifiant) {
                return noms.get(i);
            }
        }

        return null;
    }
}
```

**Réponse**

- [ ] Stack
- [ ] Vector
- [ ] ArrayList
- [ ] LinkedList
- [x] HashMap
- [ ] HashSet

<br>

## Question 19: Expression booléenne simple
A.a(int i, int j) devrait retourner true si un des arguments est égal à 1 ou si leur somme est égale à 1. 

Par exemple :

A.a(1, 5) retourne true<br>
A.a(2, 3) retourne false<br>
A.a(-3, 4) retourne true

**Réponse**

```
class A {
    static boolean a(int i, int j) {
        if((i == 1 || j == 1 ) || (i + j == 1 )){
            return true;
        }
        return false;
    }
}
```

<br>

## Question 20: Garbage collector
Le garbage collector garanti qu'il y a suffisamment de mémoire pour  exécuter un programme Java.

**Réponse**

- [ ] Vrai
- [x] Faux

<br>

## Question 21: Design pattern 01
```
public class A {
    private A() {}
    private static class AHolder {
        private static final A INSTANCE = new A();
    }

    public static A getInstance() {
        return AHolder.INSTANCE;
    }
}
```

Si vous connaissez le patron de conception (design pattern) utilisé dans ce bout de code, saisissez son nom dans le champ texte (1 mot seulement).

**Réponse**

- Singleton

<br>

## Question 22: Abstraction
Essayez d'améliorer le code affiché dans l'éditeur de réponses tout en conservant le comportement actuel du programme.

**Réponse**
```
abstract class Animal {
    protected String name;

    public String getName() {
        return this.name;
    }
}

class Dog extends Animal {
    /**
    * Creates a new dog with the given name.
    */
    Dog(String name) {
        this.name = name;
    }
}

class Cat extends Animal {
    /**
    * Creates a new cat with the given name.
    */
    Cat(String name) {
        this.name = name;
    }
}

class Application {
    /**
    * @return the name of the given animal
    */
    static String getAnimalName(Animal a) {
        String name = null;
        if(a != null) {
            name = a.getName();
        }
        return name != null ? name : null;
    }
}
```

<br>

## Question 23: Intervalles
Implémentez la méthode findSmallestInterval(numbers) qui retourne le plus petit intervalle positif entre deux éléments du tableau numbers.

Par exemple, si on considère le tableau [1 6 4 8 2], le plus petit intervalle est 1 (différence entre  2 et 1)

Contraintes:
- numbers contient au moins deux éléments et au maximum 100 000 éléments. 
- La solution qui privilégie la vitesse d'exécution pour les tableaux de grande taille obtiendra le plus de points. 
- La différence entre deux éléments ne dépassera jamais la capacité d'un entier pour votre langage.

**Réponse**
```
import java.util.*;
import java.io.*;
import java.math.*;

class Solution {
    public static int findSmallestInterval(int[] numbers) {
        Arrays.sort(numbers);
        int interval = numbers[1] - numbers[0];
        return interval;
    }

    /* Ignore and do not change the code below */
    // #region main
    public static void main(String args[]) {
        Scanner in = new Scanner(System.in);
        int n = in.nextInt();
        int[] numbers = new int[n];
        for (int i = 0; i < n; i++) {
            numbers[i] = in.nextInt();
        }
        PrintStream outStream = System.out;
        System.setOut(System.err);
        int res = findSmallestInterval(numbers);
        System.setOut(outStream);
        System.out.println(res);
    }
    // #endregion
}
```

<br>

## Question 24: String buffers
Saisissez le nom d'une classe appartenant au package java.lang qui permet de concaténer efficacement les chaînes de caractères.

**Réponse(s) correcte(s)**

- StringBuilder
- StringBuffer

<br>

## Question 25: Point de jointure

On considére la suite de nombres dans laquelle un nombre est suivi du même nombre plus la somme de ces chiffres.

Par exemple 34 est suivi de 41 (41 = 34 + (3 + 4)). 41 est lui-même suivi de 46 (46 = 41 + (4 + 1)).

Deux séquences avec des points de départ différents peuvent finir par se rejoindre. 

Par exemple la séquence qui commence à 471 et la séquence qui commence à 480 partagent le nombre 519 ( le point de jointure). 

Bien évidemment après le point de jointure, les séquences sont identiques.

Implémentez la méthode int computeJoinPoint(int s1, int s2) qui prend les points de départ de deux séquences et renvoie le point de jointure de ces deux séquences.

Contraintes:
- Les deux séquences se rejoignent toujours 0 < s1, s2 < 20000000 0 < joint point < 20000000

**Réponse**
```
import java.util.*;
import java.io.*;
import java.math.*;

class Solution {
    public static int computeJoinPoint(int s1, int s2){
        while (s1 != s2) {
            if (s1 < s2) {
                if (s1 == 0){
                    return -1;
                }
                s1 += retrieveSum(s1);
            }
            else if (s2 < s1) {
                if (s2 == 0){
                    return -2;
                }
                s2 += retrieveSum(s2);
            }
        }
        return s1;
    }

    private static int retrieveSum(int num) {
        int sum = 0;
        while (num != 0) {
            sum += num % 10;
            num /= 10;
        }
        return sum;
    }

    /* Ignore and do not change the code below */
    // #region main
    public static void main(String args[]) {
        Scanner in = new Scanner(System.in);
        int s1 = in.nextInt();
        int s2 = in.nextInt();
        PrintStream outStream = System.out;
        System.setOut(System.err);
        int res = computeJoinPoint(s1, s2);
        System.setOut(outStream);
        System.out.println(res);
    }
    // #endregion
}
```