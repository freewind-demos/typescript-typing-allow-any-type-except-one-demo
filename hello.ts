type AnyTypeNot<T, K> = T extends K ? never : T;

type AnyTypeNotString<T> = AnyTypeNot<T, string>

function toString<T>(value: AnyTypeNotString<T>): string {
  return value.toString();
}

console.log(toString(3));
console.log(toString('3'));


type AnyTypeNotPromise<T> = AnyTypeNot<T, Promise<any>>

function run<T>(fn: () => AnyTypeNotPromise<T>): T {
  return fn();
}

console.log(run(() => 3));
console.log(run(() => Promise.resolve(3)));

