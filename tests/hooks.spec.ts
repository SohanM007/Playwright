//What is hooks:
/*
Hooks -- special Method used to perform setup and teardown process:
setup -- setting up of process
teardown -- closing of process

Different hooks in playwright
1.test.beforeAll() --- it will get executed before any of the testcase(if you have 10 different test case before all will get executed only once)
     Example : Db connection, initiating logs
2.test.beforeEach() -- it will run once before running each and every testcase
    if you have 10 testcase then it will 10 time  //we used it most of the time
    example : launch the url  
3.test.afterEach() -- it will runs once after every testcase is completed.
    example: logout
4.test.afterAll() -- it will get executed only once after all the testcase is completed.
    example:report generation, logs genration , db closer


  order of execution will be as per below :
  beforeAll >>> beforeEach >>> afterEach >>> afterAll


  we are mostly using beforeEach()


*/

import {test,expect} from '@playwright/test'

//execution flow
test.beforeEach(async()=>{
  console.log('Before each');
})
test.afterAll(async()=>{
  console.log('After all')
})
test.beforeAll(async()=>{
  console.log(async()=>{
    console.log('Before all')
  })
test.afterEach(async()=>{
  console.log('after each')
})

test('test1',async()=>{
  console.log('Testcase 1')
})
test('test2',async()=>{
  console.log('Testcase 2')
})

test('test3',async()=>{
  console.log('Testcase 3')
})


})