//here we need to import the page class and use method and locators
/*
const url ="https://rahulshettyacademy.com/client/#/auth/login"
let email= 'm82525906@gmail.com'
le password ='sohan4@gmail'
let errormessage ="Incorrect email or password."

*/

//this whole thing is only for reference main code is inside - loginPageTestUsingJson.spec.ts
import {test,expect} from '@playwright/test'
import { LoginPage } from '../pages/loginPage'

//first time we will hardcode the value 
const url ="https://rahulshettyacademy.com/client/#/auth/login"
let email= 'm82525906@gmail.com'
let password ='Sohan4@gmail'
let errormessage ="Incorrect email or password."
let invalidPassword ='sohanasfddaf'

test('valid login',async({page})=>{

  const lp = new LoginPage(page)
  await lp.launchUrl(url)
  await lp.loginIntoApplication(email,password)
  await expect(lp.homePageIdentifier).toBeVisible()
})

test('invalid login',async({page})=>{
  const lp = new LoginPage(page)
  await lp.launchUrl(url)
  await lp.loginIntoApplication(email,invalidPassword)
  await expect(lp.errorMessage).toBeVisible()
})

// this line of code we are using twice in a code  
// const lp = new LoginPage(page)
  //await lp.launchUrl(url)

// we can write it in one place and use it by using hooks

/*
let lp:LoginPage
test.beforeEach(async ({page})=>{
  lp =new LoginPage(page)
   await lp.launchUrl(url)
})

test('valid login',async({page})=>{

  // const lp = new LoginPage(page)
  // await lp.launchUrl(url)
  await lp.loginIntoApplication(email,password)
  await expect(lp.homePageIdentifier).toBeVisible()
})

test('invalid login',async({page})=>{
  // const lp = new LoginPage(page)
  // await lp.launchUrl(url)
  await lp.loginIntoApplication(email,invalidPassword)
  await expect(lp.errorMessage).toBeVisible()
})

*/

//to run program - npx playwright test tests/loginTestPage