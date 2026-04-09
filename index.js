require('dotenv').config()
const axios =require('axios')
const FormData = require('form-data')  
const fs=require('fs')



async function sendTemplateMessage()
{
    const response=await axios({
        url:'https://graph.facebook.com/v25.0/1039220892611983/messages',
        method:'post',
        headers:{
            'Authorization':`Bearer ${process.env.WHATSAPP_TOKEN}`,
            'Content-Type':'application/json'
        },
        data:JSON.stringify({
            messaging_product:'whatsapp',
            to:'919689049445',
            type:'template',
            template:{
                name:'hello_world',
                language:{
                    code:'en_US'
                }

            }
            
        })
    })

    console.log(response.data);
}


// async function sendTemplateMessage()
// {
//     const response=await axios({
//         url:'https://graph.facebook.com/v25.0/1039220892611983/messages',
//         method:'post',
//         headers:{
//             'Authorization':`Bearer ${process.env.WHATSAPP_TOKEN}`,
//             'Content-Type':'application/json'
//         },
//         data:JSON.stringify({
//             messaging_product:'whatsapp',
//             to:'919689049445',
//             type:'template',
//             template:{
//                 name:'jersey',
//                 language:{
//                     code:'en_US'
//                 }

//             }
            
//         })
//     })

//     console.log(response.data);
// }

async function sendTextMessage()
{
    const response=await axios({
        url:'https://graph.facebook.com/v25.0/1039220892611983/messages',
        method:'post',
        headers:{
            'Authorization':`Bearer ${process.env.WHATSAPP_TOKEN}`,
            'Content-Type':'application/json'
        },
        data:JSON.stringify({
            messaging_product:'whatsapp',
            to:'919689049445',
            type:'text',
            text:{
                body:'This is a text message'

            }
            
        })
    })

    console.log(response.data);
}

async function sendMediaMessage()
{
    const response=await axios({
        url:'https://graph.facebook.com/v25.0/1039220892611983/messages',
        method:'post',
        headers:{
            'Authorization':`Bearer ${process.env.WHATSAPP_TOKEN}`,
            'Content-Type':'application/json'
        },
        data:JSON.stringify({
            messaging_product:'whatsapp',
            to:'919689049445',
            type:'image',
            image:{
               // link:'https://dummyimage.com/600x400/000/fff.png&text=image.io',
               id:'948474091329682',
                caption:'Nike shooes'

            }
            
        })
    })

    console.log(response.data);
}


async function uploadImage()
{
    const data= new FormData()
    data.append('messaging_product','whatsapp')
    data.append('file',fs.createReadStream(process.cwd() + '/shooes.png'),{contentType:'image/png'})
    data.append('type','image/png')
    const response=await axios({
        url:'https://graph.facebook.com/v25.0/1039220892611983/media',
        method:'post',
        headers:{
            'Authorization':`Bearer ${process.env.WHATSAPP_TOKEN}`
            
        },
        data:data
    })

    console.log(response.data);
}

//sendTemplateMessage()
//sendTextMessage()
sendMediaMessage()
// uploadImage()