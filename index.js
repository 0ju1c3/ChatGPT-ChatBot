//const OpenAIApi = require('openai')
const readlineSync = require('readline-sync')
const colors = require('colors')
//const dotenv = require('dotenv')
//dotenv.config()

//const openai = new OpenAIApi({
//  apiKey:process.env.OPENAI_SECRET_KEY
//})
const openai = require("./config/open-ai.js")
//
//async function main(){
//  const chatCompletion = await openai.chat.completions.create({
//    model:'gpt-3.5-turbo',
//    messages:[{
//      role:'user',
//      content:'What is the meaning of Ojas Tapadia ? '
//    }]
//  })
//  console.log(chatCompletion.choices[0].message.content)
//
//}

async function main(){
//  const userName = readlineSync.question("May I have your name ?")
 // console.log(`Hello ${userName}`)
  console.log(colors.bold.green("Welcome to the ChatBot!"))
  while(true){
    const userInput = readlineSync.question(colors.yellow("You: "))
    try{
      const completion = await openai.chat.completions.create({
        model:"gpt-3.5-turbo",
        messages:[{
          role:"user",
          content:userInput
        }]
      })
      const completionText = chatCompletion.choices[0].message.content
      if(userInput.toLowerCase() === "exit"){
        console.log(colors.green("Bot: ")+completionText)
        return
      }
      console.log(colors.green("Bot: ")+completionText)
    }
    catch(error){
      console.log(error)
    }
  } 
}

main()
