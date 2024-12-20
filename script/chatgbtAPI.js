// import OpenAI from "openai"
// const openAIClient = new OpenAI({

// })
// const chatCompletion = await openAIClient.chat.completions.create({
//     model:"gpt-4",
//     messages:[
//         {
//             role:"system",
//             content:"your are heplful assistant"
//         },
//         {
//             role:"user",
//             content:"what is the meaning of life"
//         }
//     ]
// })
// import axios from 'axios';

// const token =
// const callChatGPT = async () => {
//   try {
//     console.log('Sending request to OpenAI API...');

//     const response = await axios.post(
//       'https://api.openai.com/v1/chat/completions',
//       {
//         model: 'gpt-4', // Use 'gpt-3.5-turbo' if 'gpt-4' is unavailable
//         messages: [{ role: 'user', content: 'Hello' }],
//         max_tokens: 100,
//       },
//       {
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${token}`,
//         },
//       }
//     );

//     console.log('Response from ChatGPT:', response.data.choices[0].message.content.trim());
//   } catch (error) {
//     if (error.response) {
//       // If the error is from the API (e.g., 404, 401)
//       console.error('API error:', error.response.status, error.response.data);
//     } else {
//       // Other errors (e.g., network issues)
//       console.error('Error calling OpenAI API:', error.message);
//     }
//   }
// };

// callChatGPT();
