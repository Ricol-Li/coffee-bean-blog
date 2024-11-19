在 TypeScript 中，`keyof` 和 `typeof` 是两种类型查询操作符，它们可以帮助你在类型层面进行更复杂的操作。下面分别详细介绍这两个操作符的用法和示例。

### 1. `keyof`

`keyof` 操作符用于获取一个对象类型的所有键的联合类型。这对于提取对象的所有属性名称非常有用。

#### 基本用法

```typescript
interface Person {
  name: string
  age: number
  address: string
}

type PersonKeys = keyof Person // "name" | "age" | "address"
```

在这个例子中，`keyof Person` 返回了一个联合类型 `"name" | "age" | "address"`，表示 `Person` 接口的所有键。

#### 在函数中使用 `keyof`

```typescript
interface Person {
  name: string
  age: number
  address: string
}

function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key]
}

const person: Person = {
  name: 'John Doe',
  age: 30,
  address: '123 Main St',
}

const name = getValue(person, 'name') // 类型为 string
const age = getValue(person, 'age') // 类型为 number
// const invalidKey = getValue(person, "invalid"); // 编译错误，"invalid" 不是 Person 的键
```

### 2. `typeof`

`typeof` 操作符用于获取一个值的类型。这对于从现有值中提取类型信息非常有用。

#### 基本用法

```typescript
const name = 'John Doe'

type NameType = typeof name // string
```

在这个例子中，`typeof name` 返回了 `string` 类型，因为 `name` 的值是一个字符串。

#### 在复杂对象中使用 `typeof`

```typescript
const person = {
  name: 'John Doe',
  age: 30,
  address: '123 Main St',
}

type PersonType = typeof person
// PersonType 等于 { name: string; age: number; address: string; }
```

在这个例子中，`typeof person` 返回了 `person` 对象的类型 `{ name: string; age: number; address: string; }`。

#### 结合 `keyof` 和 `typeof`

你可以结合 `keyof` 和 `typeof` 来提取对象的键和类型。

```typescript
const person = {
  name: 'John Doe',
  age: 30,
  address: '123 Main St',
}

type PersonType = typeof person // { name: string; age: number; address: string; }
type PersonKeys = keyof PersonType // "name" | "age" | "address"

function getValue<K extends PersonKeys>(
  key: K,
  person: PersonType
): PersonType[K] {
  return person[key]
}

const name = getValue('name', person) // 类型为 string
const age = getValue('age', person) // 类型为 number
// const invalidKey = getValue("invalid", person); // 编译错误，"invalid" 不是 Person 的键
```

### 总结

- **`keyof`**：用于获取一个对象类型的所有键的联合类型。这对于提取对象的所有属性名称非常有用。
- **`typeof`**：用于获取一个值的类型。这对于从现有值中提取类型信息非常有用。

通过这些操作符，你可以在 TypeScript 中进行更复杂的类型操作，从而提高代码的类型安全性和可维护性。希望这些示例能帮助你更好地理解和使用 `keyof` 和 `typeof`。
