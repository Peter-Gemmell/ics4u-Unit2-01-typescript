/**
 * First Class
 *
 *
 * By: Peter Gemmell
 * Version: 1.0
 * Since:   2022-09-17
 */

class MrCoxallStack {
  // arrray
  stack: number[] = []

  // gathers the pushed number
  Push(pushedNumber: number): void {
    this.stack.push(pushedNumber)
  }

  // prints array
  ShowStack(): void {
    console.log('The stack list.')
    for (var Element of this.stack) {
      console.log(this.stack)
    }
    console.log('End of stack list')
  }
}
export = MrCoxallStack
