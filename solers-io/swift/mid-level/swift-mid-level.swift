import Foundation

class Wallet: VariableValue {
    private var _value: Int
    private let queue = DispatchQueue(label: "com.solers.walletQueue", attributes: .concurrent)

    var value: Int {
        return queue.sync { _value }
    }

    init(value: Int) {
        self._value = value
    }

    func add(value: Int) {
        queue.async(flags: .barrier) {
            self._value += value
        }
    }

    func subtract(value: Int) {
        queue.async(flags: .barrier) {
            self._value -= value
        }
    }
}