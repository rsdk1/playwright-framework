import { test, expect } from '@playwright/test';

// import 'dotenv/config';
import { classifyDream } from '../utils/integration'


test.only('AI classifies 1st', async ({ page }) => {
  
  var url = 'https://arjitnigam.github.io/myDreams/dreams-diary.html'
  await page.goto(url);

  // const dreamInput = await page.locator('//table[@id="dreamsDiary"]//tr//td[1]').allTextContents();

  // for (const x of dreamInput) {
  //     const dreamOutput =await classifyDream(x) // caputaring the return value from classifydream function
 
  //   console.log(x);
  //   console.log(dreamOutput);  
  // }


  for (let i=1; i<=10;i++){

    var dreamName = await page.locator('//table[@id="dreamsDiary"]//tr[' + i + ']//td[1]').textContent();
    var dreamTypefromUI = await page.locator('//table[@id="dreamsDiary"]//tr[' + i + ']//td[3]').textContent();
    //await classifyDream(dreamName);
    //await classifyDream(dreamTypefromUI); 
    var dreamTypeAi = await classifyDream(dreamName);
    expect(dreamTypefromUI).toBe(dreamTypeAi);
    console.log("hello");

  }

  


  

    
  
  
  // const dream = 'lost in maze';

  //   const result = await classifyDream(dream);
  //   console.log(`Dream: ${dream} → ${result}`);

  //   expect(result).toBe('Bad');
});

test('AI classifies 2nd', async () => {
  const dream = 'flying over mountains';

  const result = await classifyDream(dream);
  console.log(`Dream: ${dream} → ${result}`);

  expect(result).toBe('Good');
});

