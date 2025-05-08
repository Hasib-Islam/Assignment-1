
# 1. What is the use of the keyof keyword in TypeScript? Provide an example.

keyof is a JavaScript reserved keyword. It's used for dynamicly get the key of a tpye or a interface.
## Example:

```typescript
type KeyofExample {
    name: string;
    age: number;
    email: string;
}

type getKey = keyof KeyofExample; // Suggest all the keys dynamicly
```


# 2. Provide an example of using union and intersection types in TypeScript.
## Union Example:
```typescript
const union = (x: string | number) => { // x parameter can have both string and number value
    console.log(`Your Id number is ${x}`)
}

union(10);
union('10');
```

## Intersection Example:
```typescript
type Person {
    name: string;
}
type Profession {
    profession: string;
}
type PersonProfession = Person $ Profession;

const PersonDetails: PersonProfession = {
    name: 'Hasib Islam';
    profession: 'Coding';
}
```
