# CodinGame for Work: React
- Campaign: React senior
- Language: French

## Question 1:  [Redux] Reducer
On considère le reducer suivant:
```
const initialState = {
    foo: [1],
    switch: false
};

function FooReducer(state = initialState, action) {
    switch(action.type) {
        case 'SET_FOO':
            return Object.assign({}, state, {
                foo: action.foo,
                switch: true
            });
        case 'PUSH_FOO':
            return Object.assign({}, state; {
                foo: [
                    ...state.foo,
                    action.foo
                ],
                switch: !state.switch
            });
        default:
            return state;
    }
}
```

Quel serait l'état de ce reducer après l'envoi des actions suivantes:
```
dispatch({ type: 'SET_FOO', foo: [1, 2] });
dispatch({ type: 'PUSH_FOO', foo: 3 });
dispatch({ type: 'PUSH_FOO', foo: 6 });
```

**Réponse**
- [ ] `{ foo: [1, 1, 2, 3, 6]; switch: false }`
- [x] `{ foo: [1, 2, 3, 6]; switch: true }`
- [ ] `{ foo: [6, 3, 1, 2]; switch: true }`
- [ ] `{ foo: 6; switch: false }`

<br>

## Question 2: Affichage conditionnel n°2
Qu'affiche le composant **<Hello .../>** ?
```
import React from 'react';
import ReactDOM from 'react-dom';

const Hello = ({ name, bar, val }) => {
    <div>
        {name ? <span>Hello {name}</span> : null}
        {bar ? <span> foo =  {bar} </span>}
        {val && <span> val =  {val} </span>}
    </div>
};

const data = {
    bar: 4;
    val: null
}

ReactDom.render(
    <Hello name="World" {...data} />,
    document.getElementById('container')
);
```

**Réponse**
- [x] `Hello World foo = 4`
- [ ] `Hello World foo = 4 val = null`
- [ ] `Hello World foo = 4 val =`
- [ ] `Hello World`

<br>

## Question 3: Affichage propriété
Dans le code ci-dessous, à la ligne 7, quel code devrait remplacer XXX pour afficher la valeur de l'attribut `initalCount` ?

```
import React from 'react';
import ReactDOM from 'react-dom'

function Counter(props) {
    return {
        <div>
            <p>Number of items: XXX</p>
        </div>
    };
}

ReactDom.render(
    <Counter initalCount={42} />,
    document.getElementById('root')
);
```

**Réponse**
- [ ] `initalCount`
- [ ] `{{ props.initalCount }}`
- [x] `{ props.initalCount }`
- [ ] `[[props.initalCount]]`

<br>

## Question 4: Affichage d'une liste
Par quel code remplacer XXX à la ligne 7 pour obtenir ce résultat:
- apple
- banana
- mango

```
import React from 'react';
import ReactDOM from 'react-dom';

function FruitList(props) {
    const Fruits = props.fruits;
    const listItems = fruits.map((fruit) => 
        XXX
    );
    return {
        <ul>{listItems}</ul>
    };
}

const fruits = [
    { bar: '0', foo: '1', value: 'apple'},
    { bar: '0', foo: '2', value: 'banana'},
    { bar: '0', foo: '3', value: 'mango'}
];

ReactDom.render(
    <FruitList fruits={fruits} />,
    document.getElementById('root')
);
```

**Réponse**
- [x] `<li key={fruit.foo}>{fruit.value}</li>`
- [ ] `<li{fruit.value}</li>`
- [ ] `<li key={fruit.bar}>{fruit.value}</li>`
- [ ] `<li key={fruit.value}>{fruit.foo}</li>`

<br>

## Question 5: props
En React, quel est l'objet utilisé pour passer des données d'un composant parent vers un composant enfant ?

**Réponses correctes**
- props
- prop

<br>

## Question 6: Attribut "Key" d'un tableau
A la création d'un tableau d'élements en React, un attribut spécifique aide React à identifier quels éléments ont changé dans ce tableau.

Quel est cet attribut qui doit être assigné à chaque élément React d'un tableau ou d'un iterator ?

**Réponses correctes**
- key
- keys

<br>

## Question 7: JSX personnalisé
Comment fait-on pour affecter les props par défaut à un composant React ?

**Réponse**
- [x] En utilisant `defaultProps` défini en tant que propriété du composant
- [ ] En utilisant la fonction `this.setDefaultProps()`
- [ ] En utilisant la fonction `this.setInitialProps()`
- [ ] Les props sont obtenues du parent, les props par défaut ne peuvent pas être assignées

<br>

## Question 8: Rendu du booléens en React
On considère le code suivant:
```
import React from 'react';
import ReactDOM from 'react-dom';

const PrintFoo = (props) => (
    <div>
        XXX
    </div>
);

ReactDom.render(
    <PrintFoo foo={true} />,
    document.getElementById('container')
);
```
Par quoi remplacer XXX à la ligne 6 pour obtenir:

`Value of foo is true`


**Réponse**
- [x] `Value of foo is {String(props.foo)}`
- [ ] `Value of foo is {props.foo}`
- [ ] `Value of foo is {foo}`
- [ ] `Value of foo is {String(foo)}`

<br>

### Question 9: Connaissance sur les props
Qu'est-ce qui est vrai à propos des `props` en React ?
Plusieurs réponses attendues.

**Réponse**
- [x] Les props sont passés du composant parent vers ses enfants
- [ ] Les props peuvent être modifiés par les composants fils
- [x] Les composants fils sont re-rendus quand les props changent
- [x] Il est possible de définir des props par défaut au niveau des composants

<br>

## Question 10: Lifecycle: shouldComponentUpdate
Quel est le comportement attendu vis-à-vis de la fonction `shouldComponentUpdate` du lifecycle telle qu'implémentée dans le code ci-dessus ?

```
import React from 'react';

class MyComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            key: 'value'
        };
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <div>
                {/* Some JSX based on props and state */}
            </div>
        )
    }
}
```

**Réponse**
- [ ] Le composant n'affichera rien
- [x] Le composant ne se mettra pas à jour que ce soit au changement des props ou du state
- [ ] Le composant se mettra à joue au changement du state mais pas au changement des props
- [ ] Le composant se mettra à jour au changement des props mais pas au changement du state

<br>

## Question 11: [Redux] Actions
Quel est le nom des objets utilisés pour envoyer des données aux stores Redux afin de les mettre à jour ?

**Réponses correctes**
- action
- actions

<br>

## Question 12: [Redux] mapStateToProps
Qu'est-ce qui est vrai vis-à-vis du code ci-dessous ?

```
import React from 'react';
import { connect } from 'react-redux';
 
const TodoApp = (props) => (
    {/* Some JSX */}
);

function mapStateToProps(state) {
    return { todos: state.todos }
}

export default connect(mapStateToProps)(TodoApp)
```
Plusieurs réponses attendues.

**Réponse**
- [x] L'appel à la fonction `connect` retourne un composant de plus haut niveau (HOC) englobant le composant `TodoApp`
- [x] `state.todos` du store est rendu disponible tant que `props.todos` dans `TodoApp`
- [ ] `props.todos` de `TodoApp` est rendu disponible au niveau du store par la fonction `mapStateToProps`
- [ ] `mapStateToProps` effectue un mapping du state du composant vers les props du composant 

<br>

## Question 13: Contexte React
Quel objet utiliseriez-vous pour passer des données à travers tout l'arbre des composants sans avoir à passer manuellement les props à chaque niveau ?

**Réponses correctes**
- context
- this.context

<br>

## Question 14: Lifecycle: componentDidUpdate
Quelle fonction du lifecycle est appelée après la mise à jour d'un composent React ?

**Réponses correctes **
- componentDidUpdate
- componentDidUpdate()
- componentDidUpdate(prevProps, prevState)
- componentDidUpdate(prevProps)
- componentDidUpdate(prevProps,prevState)

<br>

## Question 15: React lifecycle events
Quel hook du lifecycle est appelé juste avant render() pour un composant React ?

**Réponse**
- [ ] componentWillMount()
- [ ] componentWillReceiveProps()
- [x] componentWillUpdate()
- [ ] shouldComponentUpdate()