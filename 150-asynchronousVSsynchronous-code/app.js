//Synchronous function depend upon each other
// const func2 = () => {
//     console.log(`func 2 is starting !`);
// }
//  const func1 = () => {
//     console.log(`func 1 is starting !`);
//     func2();
//     console.log(`func 1 is ending !`);
//  }
//  func1();
//asynchronic function
const func2 = () => {
    setTimeout(() => {
        console.log(`func 2 is starting !`);
    }, 3000);
};
const func1 = () => {
    console.log(`func 1 is starting !`);
    func2();
    console.log(`func 1 is ending !`);
};
func1();
export {};
