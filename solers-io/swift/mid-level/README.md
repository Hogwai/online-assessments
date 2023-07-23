# Enforce Thread Safety 

## Instructions
### Task

Create a mutable model, making sure multiple threads can modify it without race conditions.

Consider the VariableValue protocol:
```
protocol VariableValue {
    var value: Int { get }
    func add(value: Int)
    func subtract(value: Int)
}
```

Your task is to implement the Wallet class which conforms to VariableValue. 

An instance of Wallet may be shared between several threads, and each thread will perform changes to the value by calling either the add or subtract method.

The add method must increase the value property by a given amount, and the decrement method must decrease the value by a given amount. 

Those implementations should be written in a way that no race conditions are possible.